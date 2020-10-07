/**
 * @class
 * @description An error for cancelling transaction in testing environments
 */
export class CancelTransactionError extends Error {
    constructor() {
        super();
    }
}

export class TestUtils {
    /**
     * Wraps DataAdapter.executeInTransaction() for using in testing environments
     * @param {ExpressDataContext} context
     * @param {Function} func
     * @returns {Promise<any>}
     */
    static executeInTransaction(context, func) {
        return new Promise((resolve, reject) => {
            // clear cache
            const configuration = context.getConfiguration();
            Object.defineProperty(configuration, 'cache', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: { }
            });
            // start transaction
            context.db.executeInTransaction((cb) => {
                try {
                    func().then(() => {
                        return cb(new CancelTransactionError());
                    }).catch( err => {
                        return cb(err);
                    });
                }
                catch (err) {
                    return cb(err);
                }

            }, err => {
                // if error is an instance of CancelTransactionError
                if (err && err instanceof CancelTransactionError) {
                    return resolve();
                }
                if (err) {
                    return reject(err);
                }
                // exit
                return resolve();
            });
        });
    }

    static cancelTransaction() {
        throw new CancelTransactionError();
    }

}
