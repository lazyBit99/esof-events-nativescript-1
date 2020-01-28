const uuidv1 = require('uuid/v1');
const data = [
  {
    "nome": "Gino",
    "cognome": "Rossi",
    "gender": "M",
    "id": uuidv1()
  },
  {
    "nome": "Gina",
    "cognome": "Rossi",
    "gender": "F",
    "id": uuidv1()
  }
]
module.exports = data