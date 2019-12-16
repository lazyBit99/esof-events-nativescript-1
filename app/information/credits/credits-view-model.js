const observableModule = require("tns-core-modules/data/observable");

function InformationViewModel() {
    const viewModel = observableModule.fromObject({
        credits: ['Mario Rossi', 'Valentino Rossi', 'Vasco Rossi', 'Paolo Rossi']
    });

    return viewModel;
}

module.exports = InformationViewModel;
