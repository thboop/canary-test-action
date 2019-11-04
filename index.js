const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    core.info("::save-state name=test::TestValue")
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
