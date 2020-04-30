const ora = require('ora'),
  axios = require('axios');

module.exports = async () => {
  const spinner = ora('Waking up Ron!').start();
  try {
    const quoteResponse = await axios('http://ron-swanson-quotes.herokuapp.com/v2/quotes'),
    quoteText = quoteResponse.data[0];

    spinner.stop();
    console.log(`${quoteText} - Ron Swanson`);
  } catch (e) {
    spinner.stop();
    console.error(`${e.toString()} - Definitely not Ron Swanson`);
    process.exit(1)
  }
};
