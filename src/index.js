const { readFile } = require('fs');
const { parse } = require('node-html-parser');
const { FILE_IN } = require('./config');
const { getConvencionales } = require('./utils/convencion-parser.js');

const FORMAT = process.argv[2].toUpperCase();

function toStdOut(err, data) {
  if (err) return console.error(err);

  const html = parse(data);
  const text = getConvencionales(html, FORMAT);
  console.log(text);
}

readFile(FILE_IN, 'utf8', toStdOut);