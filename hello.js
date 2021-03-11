const chalk = require('chalk');
const readlineSync = require('readline-sync');

for (let i= 0; i < 10; i++){
    console.log(chalk.rgb(123 , 45 + i * 40, 67)('hello word'))
}