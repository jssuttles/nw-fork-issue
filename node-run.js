async function runFork() {
  try {
    await new Promise((resolve, reject) => {
      const forkModule = './src/fork.js';
      const child = require('child_process').fork(forkModule);
      let messageReceived = false;
      child.on('message', () => {
        messageReceived = true;
      });
      child.on('error', (error) => {
        console.log(error);
        reject(new Error(`Fork process error: ${error}`));
      });
      child.on('exit', (code) => {
        if (messageReceived)
          console.log('Message received');
        code === 0 ? resolve() : reject(new Error(`Fork process exited with code ${code}`));
      });
    });
  } catch (error) {
    console.log(error);
  }
}
runFork();
