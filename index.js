const core = require('@actions/core');

async function run() {
    try {
        const username = core.getInput('username');
        console.log(`Hello, ${username}!`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
