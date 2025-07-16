const core = require('@actions/core');
const fs = require('fs');

async function run() {
  try {
    // Get the input API key
    const apiKey = core.getInput('api_key', { required: true });

    // Validate the API key format (example: must be alphanumeric and 32 characters long)
    const isValid = /^[a-zA-Z0-9]{32}$/.test(apiKey);
    if (!isValid) {
      throw new Error('Invalid API key format. The key must be 32 alphanumeric characters.');
    }

    // Write a success message to a file
    const message = `API key validation successful: ${apiKey}`;
    fs.writeFileSync('validation-result.txt', message);

    console.log(message);
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();