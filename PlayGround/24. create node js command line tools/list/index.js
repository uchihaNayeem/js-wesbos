#!/usr/bin/env node


/*

//aita QnA te paisi oi current lec er
For anyone getting this error - in your package.json file add  "type": "module" under the line "main": "index.js"
Then in your index.js file  - change the require expressions as follows:

import fs from "fs";
import util from "util";
import chalk from "chalk";
*/



import fs from "fs";
import util from "util";
import chalk from "chalk";
import path from "path";




// const fs = require('fs');
// const util = require('util');
// const chalk = require('chalk');


// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

// console.log(process.argv)
const targetDir = process.argv[2] || process.cwd()

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.red.underline.bold(filenames[index]));
    }
    // console.log((filenames[index]));
  }
});

// Method #1
// const lstat = filename => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(stats);
//     });
//   });
// };






