const firebase = require("nativescript-plugin-firebase");
const ScheduleItemsViewModel = require("./schedule-items-view-model");

// firebase.login({
//     type: firebase.LoginType.PASSWORD,
//     passwordOptions: {
//         email: 'webnicola@gmail.com',
//         password: 'theirpassword'
//     }
// })
// .then(result => {
//     console.log('OK', result)
//     alert({
//         title: 'Autetenticazione OK',
//         message: `Ciao, ${result.email}`,
//         okButtonText: 'OK'
//     })
// })
// .catch(error => console.error(error))

// firebase.logout()
// .then(() => console.log('LOGOUT'))
// .catch(error => console.error(error))

// firebase.sendPasswordResetEmail('webnicola@gmail.com')
// .then(() => console.log('Password reset by email'))
// .catch(error => console.error('error', error))

firebase.getCurrentUser()
.then(user => console.log('**user**', user))
.catch(error => console.error('No user find', error))


function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new ScheduleItemsViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
