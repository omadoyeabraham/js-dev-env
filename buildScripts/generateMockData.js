/**
 * This script generates mock data for local development.
 * This way we don't need an actual api endpoint during development.
 */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify( jsf(schema) );

fs.writeFile("./src/api/db.json", json, (err) => {
    if(err){
        return console.log( chalk.red(err) );
    } else {
        console.log( chalk.green("Mock data successfully generated") );
    }
});
