import {DataEventArgs} from '@themost/data';
/**
 * @param {DataEventArgs} event
 * @param {Function} callback
 */
export function beforeSave(_event: DataEventArgs, callback: any) {
    return callback();
}

/**
 * @param {DataEventArgs} event
 * @param {Function} callback
 */
export function afterSave(event: DataEventArgs, callback: any) {
    if (event.state === 1 && event.target && event.target.hasOwnProperty('userCredentials')) {
        return event.model.context.model('UserCredential')
            .silent()
            .insert(Object.assign(event.target.userCredentials, {
                id: event.target.id
            }))
            .then(() => {
               return callback();
            })
            .catch( err => {
               return callback(err);
            });
    }
    return callback();
}
