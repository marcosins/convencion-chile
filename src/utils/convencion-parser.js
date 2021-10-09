const { DEFAULT_FORMAT } = require('../config');
const { toCSV, toJSON, toTEXT } = require('./convencional-transform');

/**
 *
 * @param {NodeListOf<ChildNode>} body HTML del cuerpo de la página
 * @returns Objeto con nombre, apellido, distrto, correo y redes sociales (si tiene)
 */
function extractPersonalInfo({ childNodes }) {
  const body = childNodes[3];
  const footer = childNodes[5];

  const [nombre, apellido] = body.querySelector('.text-blue').innerText.trim().split(' ');
  const distrito = body.querySelector('.district').innerText.trim().split('\n')[0].split(' ')[1];
  const correo = body.querySelector('.contact>p').innerText.trim().split(' ').slice(-1).pop();
  const sociales = footer.querySelectorAll('a').map(({ attributes: { href } }) => href);

  return { nombre, apellido, distrito, correo, sociales };
}

/**
 * Obtiene la información personal de cada convencional, en el formato solicitado, desde la página web
 * @param {HTMLElement} HTMLDocument Documento HTML desde la página de la convención
 * @param {string} format Formatos: `CSV`, `JSON`
 * @returns Información de los convencionales en el formato solicitado
 */
function getConvencionales(HTMLDocument, format = DEFAULT_FORMAT) {
  const selector = '#convencionales .modal-content';
  const convencionalesNodes = HTMLDocument.querySelectorAll(selector);
  const convencionales = convencionalesNodes.map(extractPersonalInfo);

  switch (format) {
    case 'CSV':
      return toCSV(convencionales);
    case 'JSON':
      return toJSON(convencionales);
    default:
      return toTEXT(convencionales);
  }
}

module.exports = { getConvencionales };