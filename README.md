# Convencionales Constituyentes

Pequeño script que parsea la página de la [Convención Constitucional](https://www.chileconvencion.cl/convencionales/) para obtener información de cada uno de los 155 convencionales la conforman.

## Dependencias

- `curl`
- `node` y `npm`

## Como usar

`npm i`

Luego elige de acuerdo a lo que quieras obtener

| Formato Salida | Comando         |
| -------------- | --------------- |
| Por pantalla   | `npm run print` |
| CSV            | `npm run csv`   |
| JSON           | `npm run json`  |

`node`

## Formato CSV

- `nombre`
- `apellido`
- `distrito`
- Lista de redes sociales separadas por coma (`,`). No todos los convencionales usan todas las redes sociales así que estas siempre están al final.

## Formato JSON

- `nombre`
- `apellido`
- `distrito`: Para pueblos originarios, el pueblo se lista como un distrito, ej: `Mapuche`, `Rapanui`, `Quechua`, etc.
- `sociales`: Arreglo de redes url

```json
[
  {
    "nombre": "CONVENCIONAL",
    "apellido": "DEMOCRATIC@",
    "distrito": "256",
    "sociales": [
      "https://www.instagram.com",
      "https://twitter.com",
      "https://www.facebook.com"
    ]
  }
]
```