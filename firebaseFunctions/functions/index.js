const functions = require('firebase-functions');
const data = require('./peoples')

// firebase deploy --only functions
// per usare l'emulatore node firebase functions
// export GOOGLE_APPLICATION_CREDENTIALS='path chiave.json'

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send(`
    <h2>Hello from Firebase!</h2>
    <p>Pagina html from <b>firebase function</b></p>
  `);
});

exports.helloWorld2 = functions.https.onRequest((request, response) => {
  console.log(request.query.nome)
  response.send(`
    <h2>Ciao ${request.query.nome}</h2>
    <p>Benvenuto bla bla bla</p>
  `)
})

exports.helloWorldJson = functions.https.onRequest((request, response) => {
  response.json({
    "peoples": data,
    "version": "0.0.1"
  })
})

// @data param
exports.helloNome = functions.https.onCall((data, context) => {
  return {
      status: 'OK',
      messaggio: `Ciao, ${data}`
    }
} )

// API A PAGAMENTO!!!
// exports.scheduleFunction = functions.pubsub.schedule('every 1 minutes').onRun((context) => {
//   console.log('FIRE ogni 5 minuti')
//   return null
// })
