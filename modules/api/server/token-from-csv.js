import * as app from './app';
import { ExpressDataApplication } from '@themost/express';
import { parseString, parseFile } from 'fast-csv';
import { readFileSync } from 'fs';
import { SendTokenService } from './services/SendTokenService';
const dataApplication = app.get(ExpressDataApplication.name);

const sourceFile = process.argv[0];
const electionIdentifier = process.argv[1];
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
    const tokenService = dataApplication.getService(SendTokenService);
    const context = dataApplication.createContext();
    // get election event
    context.model('ElectionEvent').where('identifier').equal(electionIdentifier)
      .getItem().then((electionEvent) => {
        for (const row of rows) {
          try {
            tokenService.send(context, electionEvent, row.recipient, row.description);
          } catch (error) {
            console.error('ERR_SEND', row.recipient);
          }
        }
      }).catch((error) => {
        console.error(error);
        process.exit(-2);
      });

  });
