const observableModule = require("tns-core-modules/data/observable");
const firebase = require("nativescript-plugin-firebase/app");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const data = require('./data')
const redata = data.map((item) => {
    item.sub = `${item.inizio} — ${item.fine} ${item.luogo}`
    return item
});
const myObservableArray = new ObservableArray();
const myArray = [];
const schedule = firebase.firestore().collection("schedule");

schedule.get().then((document) => {
    document.forEach((doc) => {
        const tmp = doc.data()
        tmp.sub = `${tmp.inizio} — ${tmp.fine} ${tmp.luogo}`
        myObservableArray.push(tmp);
        // non funziona no data bynding
        // myArray.push(tmp);
    });
});

function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: myObservableArray,
        myGroupingFunc: function(item) {
            return item.group
        },
        isLogIn: false,
        isCorrect: ''
    });
    return viewModel;
}
module.exports = ScheduleItemsViewModel;
