const observableModule = require("tns-core-modules/data/observable");

function SpeakerViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        test: 'ciao mondo'
    });

    return viewModel;
}

module.exports = SpeakerViewModel;
