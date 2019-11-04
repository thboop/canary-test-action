const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try {
    if (process.env.$STATE_name != 'TestValue') {
      core.setFailed(error.message);
    }
    else {
      core.log('The Saved State value is:', process.env.$STATE_name);
    }
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
