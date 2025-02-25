const ora = require('ora');

module.exports = async () => {
  const spinner = ora('Waking up Ron!').start();
  try {
    const response = await fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const quoteText = (await response.json())[0];

    spinner.stop();
    console.log(`${quoteText} - Ron Swanson`);
  } catch (e) {
    spinner.stop();
    console.error(`${e.toString()} - Definitely not Ron Swanson`);
    process.exit(1);
  }
}