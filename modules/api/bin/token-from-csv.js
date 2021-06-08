const app = require('../dist/app');
const { ExpressDataApplication } = require('@themost/express');
const { parseString, parseFile, writeToPath } = require('fast-csv');
const { readFileSync } = require('fs');
const { SendTokenService } = require('../dist/services/SendTokenService');
const dataApplication = app.get(ExpressDataApplication.name);
const path = require('path');

const args = process.argv.slice(-2);
const sourceFile = args[0];
const electionIdentifier = args[1];
if (sourceFile == null) {
  console.error('Source file may not be null');
  console.log('./import-token <source.csv>');
  process.exit(-1);
}

const rows = [];

parseFile(sourceFile, { headers: true })
  .on('error', (error) => {
    console.error(error);
    process.exit(-2);
  })
  .on('data', (row) => {
    rows.push(row);
  }).on('end', (rowCount) => {
    const tokenService = new SendTokenService(dataApplication);
    const context = dataApplication.createContext();
    // get election event
    context.model('ElectionEvent').where('identifier').equal(electionIdentifier)
      .getItem().then((electionEvent) => {
        const errors = [];
        (async function () {
          for (const row of rows) {
            try {
              if (row.recipient === 'voter21@example.com') {
                throw new Error('Operation cancelled')
              }
              await tokenService.send(context, electionEvent, row.recipient, row.description);
              console.log('TOKEN_SEND', row.recipient);
            } catch (error) {
              errors.push(row);
              console.error('ERROR', error.message);
              console.error('ERR_SEND', row.recipient);
            }
          }
        })().then(() => {
          console.log('INFO', 'The operation was completed');
          if (errors.length) {
            const outFile = path.resolve(process.cwd(), `db/import-errors-${new Date().toISOString()}.csv`)
            writeToPath(outFile, errors, {
              headers: true
            })
              .on('error', err => console.error(err))
              .on('finish', () => {
                return process.exit(0);
              });
          } else {
            return process.exit(0);
          }
        }).catch((err) => {
          console.error(error);
          process.exit(-2);
        });
      }).catch((error) => {
        console.error(error);
        process.exit(-2);
      });

  });
