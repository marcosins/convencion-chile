const fs = require('fs');
const { parse } = require('node-html-parser');

const FILENAME = './cc.html';
const SEPARATOR = ',';
const FORMAT_JSON = ['json', 'JSON'];

const FORMAT = process.argv[2];

function print({ nombre, apellido, distrito, sociales }) {
  const CSV = `${nombre}${SEPARATOR}${apellido}${SEPARATOR}${distrito}${SEPARATOR}${sociales.sort()}`;
  console.log(CSV);
};

function printCSV(HTMLDocument) {
  const convencionalesNodeList = HTMLDocument.querySelectorAll('#convencionales .modal-content');
  const convencionales = [];

  for (const convencional of convencionalesNodeList) {
    const body = convencional.childNodes[3];
    const footer = convencional.childNodes[5];

    const [nombre, apellido] = body.querySelector('.text-blue').innerText.trim().split(' ');
    const [distrito] = body.querySelector('.district').innerText.trim().split('\n');
    const sociales = footer.querySelectorAll('a').map(({ attributes }) => attributes.href);

    convencionales.push({
      nombre,
      apellido,
      distrito: distrito.split(' ')[1],
      sociales
    });
  }
  if (FORMAT_JSON.includes(FORMAT)) console.log(JSON.stringify(convencionales, undefined, 2));
  else convencionales.sort().forEach(print);
}

fs.readFile(FILENAME, 'utf8', function (err, data) {
  if (err) return console.error(err);
  printCSV(parse(data));
});