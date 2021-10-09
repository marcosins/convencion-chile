# 🇨🇱 CONVENCIONALES CONSTITUYENTES 🇨🇱

Pequeño script que parsea la página de la [Convención Constitucional](https://www.chileconvencion.cl/convencionales) para obtener información de cada uno de los 155 convencionales la conforman.

---
## Dependencias

- `curl`
- `node` y `npm`

Si no quieres usar `curl` puedes bajar manualmente [chileconvencion.cl/convencionales](https://www.chileconvencion.cl/convencionales) y guardarla como `cc.html` en la raíz del proyecto.

## ¿Como usar?

`npm i`

Luego elige de acuerdo a lo que quieras obtener:

| Formato Salida | Comando                                         |
| ---            | ---                                             |
| Por pantalla   | `npm run print {csv\|json}`, por defecto `text` |
| CSV            | `npm run csv`                                   |
| JSON           | `npm run json`                                  |
| TEXT           | `npm run text`                                  |

---
# EJEMPLOS DE SALIDA

## Formato CSV

- `nombre`
- `apellido`
- `distrito`
- `correo`
- Lista de redes sociales separadas por coma (`,`). No todos los convencionales usan todas las redes sociales así que estas siempre están al final.

```csv
Steve, Gates, 256, bill@apple.com, https://twitter, https://instagram.com
```

## Formato JSON

- `nombre`
- `apellido`
- `distrito`: Para pueblos originarios, el pueblo se lista como un distrito, ej: `Mapuche`, `Rapanui`, `Quechua`, etc.
- `correo`
- `sociales`: Arreglo de redes url

```json
[
  {
    "nombre": "CONVENCIONAL",
    "apellido": "DEMOCRATIC@",
    "distrito": "256",
    "correo": "bill@apple.com",
    "sociales": [
      "https://www.instagram.com",
      "https://twitter.com",
      "https://www.facebook.com"
    ]
  }
]
```

## Formato TEXTO

Incluye un salto de línea al final de cada convencional

```
NOMBRE: Steve Gates
DISTRITO: 256
CORREO: steve@microsoft.com
INSTAGRAM: https://www.instagram.com
TWITTER: https://twitter.com
FACEBOOK: https://www.facebook.com

```