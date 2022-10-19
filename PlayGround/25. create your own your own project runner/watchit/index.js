#!/usr/bin/env node


// const chokidar = require('chokidar');
// const debounce = require('lodash.debounce');
// const program = require('caporal');
// const fs = require('fs');
// const {spawn} = require('child_process');
// const chalk = require('chalk');

/* 
   1. [const chalk = require('chalk');] aita akhn kaj korena. tutorial a jevabe dise oita.

    2. 

*/

import chokidar from 'chokidar'
import debounce from 'lodash.debounce'
import program from 'caporal'
import fs from 'fs'
import {spawn} from 'child_process'
import chalk from "chalk"


program
    .version('0.0.1')
    .argument('[filename]', 'name of the file to execute')
    .action( async ({filename}) =>{
        const name = filename || 'index.js';
        try {
        await fs.promises.access(name);
        } catch(err){
            throw new Error(`could not find the file ${name}`)
        }
        let proc;
        const start = debounce(()=>{
            if(proc){
                proc.kill();
            }
            console.log(chalk.bold.red('>>>> Starting Process.... '))
            proc = spawn('node', [name], {stdio: 'inherit'});
        }, 100)
        
        
        chokidar.watch('.')
            .on('add', start)
            .on('change',start)
            .on('unlink',start)
    })

program.parse(process.argv);

