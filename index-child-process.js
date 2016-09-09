const spawn = require('child_process').spawn;

const cmd = 'sh';
const args = ['-c', 'node index.js'];
const options = {
    env: process.env,
    stdio: [0, 1, 2]
};
spawn(cmd, args, options);
