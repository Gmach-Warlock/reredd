// useful general functions

export function timestampSecondFormat(): number {

    return Math.floor(Date.now() / 1000);
}

export function getHoursSinceEpochTimestamp(epochTimestampInSeconds: number) {
   
    const currentTimeMillis = Date.now();

    const givenTimeMillis = epochTimestampInSeconds * 1000;
    const timeDifferenceMillis = currentTimeMillis - givenTimeMillis;
    const hoursSinceTimestamp = timeDifferenceMillis / (1000 * 60 * 60);

    return `${Math.floor(hoursSinceTimestamp)} hours ago `;
}

export function logAndReturn<Value>(value: Value) {
    console.log(value);
    return value;
};

export function generateRandomString(length: number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };