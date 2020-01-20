const firebase = require("nativescript-plugin-firebase/app");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

const myObservableArray = new ObservableArray();

const firestore = firebase.firestore();
const speakers = firestore.collection("speakers");
speakers.get().then((document) => {
    document.forEach((doc) => {
        const item = doc.data()
        item.interventocompleto = `${item.nome} — ${item.inizio} ${item.fine}`
        myObservableArray.push(item);
    });
});


function SpeakerViewModel() {
    const viewModel = {
       items: myObservableArray
    };
    return viewModel;
}

module.exports = SpeakerViewModel;
