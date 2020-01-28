var dialogs = require("tns-core-modules/ui/dialogs");
const firebase = require("nativescript-plugin-firebase");
const ScheduleItemsViewModel = require("./schedule-items-view-model");



// firebase.logout()
// .then(() => console.log('LOGOUT'))
// .catch(error => console.error(error))

// firebase.sendPasswordResetEmail('webnicola@gmail.com')
// .then(() => console.log('Password reset by email'))
// .catch(error => console.error('error', error))

// Anonymous login
firebase.login(
    {
      type: firebase.LoginType.ANONYMOUS
    })
    .then(user => {
        console.log("User uid: " + user)
    })
    .catch(error => console.log("Trouble in paradise: " + error));
// isolo il model
const viewModel = new ScheduleItemsViewModel();

const fn = firebase.functions.httpsCallable('helloNome')

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = viewModel;
}

function showDialog () {
    console.log('LOGIN');
    firebase.getCurrentUser()
        .then(user => console.log('getCurrentUser ', user))
        .catch(error => console.error('getCurrentUser ', error))
    dialogs.login({
        title: 'Login',
        message: 'Enter credential',
        okButtonText: "Go",
        cancelButtonText: "Cancel",
        // neutralButtonText: "Neutral",
        userName: "User",
        password: "Password"
    }).then(function (r) {
        firebase.getCurrentUser()
        .then(user => console.log('getCurrentUser ', user))
        .catch(error => console.error('getCurrentUser ', error))
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
        if (r.result) {
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: r.userName,
                    password: r.password // theirpassword
                }
            })
            .then(result => {
                console.log('OK', result)
                alert({
                    title: 'Autetenticazione OK',
                    message: `Ciao, ${result.email}`,
                    okButtonText: 'OK'
                })
                // set isLogIn true
                viewModel.set('isLogIn', true)
                if (!result.emailVerified) {
                    console.log('emailVerified', result.emailVerified)
                }
            })
            .catch(error => {
                alert({
                    title: 'Autenticazione fallita',
                    message: `Dati sbagliati, o inesistenti, ${error}`,
                    okButtonText: 'OK'
                })
                // // set isLogIn false
                viewModel.set('isLogIn', false)
                console.error(error)
            })
        } else {
            console.log('Cancel')
        }
    });
}
exports.onNavigatingTo = onNavigatingTo;
exports.showDialog = showDialog;

exports.showFunctions = function () {
    dialogs.prompt({
        title: "Una settimana di premi",
        message: "Inserisci qui il tuo codice",
        okButtonText: "CONTROLLA ORA!",
        cancelButtonText: "Cancella"
    }).then(function (r) {
        if (r.result) {
            fn(r.text)
            .then((mydata) => {
                console.log('mydata.status', mydata.status)
                if (mydata.status === 'OK') {
                    viewModel.set('isCorrect', '1')
                } else {
                    viewModel.set('isCorrect', '0')
                }
            })
            .catch((errorMessage) => {

            })
        }
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    })

}
