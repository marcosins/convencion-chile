const { FORMAT_INDENT } = require('../config');

function concat(fn) {
  return (prev, curr) => `${prev}\n${fn(curr)}`;
}

function convencionalToCSV(convencional) {
  const { nombre, apellido, distrito, correo, sociales } = convencional;
  const rrss = sociales.concat();
  return `${nombre},${apellido},${distrito},${correo},${rrss}`;
}

function convencionalToTEXT(convencional) {
  const { nombre, apellido, distrito, correo, sociales } = convencional;
  let info = '';
  info = info.concat(`NOMBRE: ${nombre} ${apellido}\n`);
  info = info.concat(`DISTRITO: ${distrito}\n`);
  info = info.concat(`CORREO: ${correo}\n`);

  for (const social of sociales) {
    const domain = new URL(social).hostname.replace('www.', '').split('.')[0];
    info = info.concat(`${domain.toUpperCase()}: ${social}\n`);
  }
  return info;
}

/**
 * Transforma la informacion de los convencionales a valores separados por coma (`, `)
 * @param {Array} convencionales Lista con informacion de los convencionales
 * @returns Informacion separada por comas. 1 linea por convencional
 */
function toCSV(convencionales) {
  return convencionales.reduce(concat(convencionalToCSV), '');
};

/**
 * Transforma la informacion de los convencionales a formato JSON
 * @param {Array} convencionales Lista con informacion de los convencionales
 * @returns JSON con identacion de 2 espacios
 */
function toJSON(convencionales) {
  return JSON.stringify(convencionales, undefined, FORMAT_INDENT);
};

/**
 * Transforma la informacion de los convencionales a formato de texto plano
 * @param {Array} convencionales Lista con informacion de los convencionales
 * @returns Informacion de los convencionales
 */
function toTEXT(convencionales) {
  return convencionales.reduce(concat(convencionalToTEXT), '');
}

module.exports = {
  toCSV,
  toJSON,
  toTEXT
};