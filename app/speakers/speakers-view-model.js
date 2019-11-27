const observableModule = require("tns-core-modules/data/observable");
const sufix = 'Sign.';

function SpeakerViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        test: 'ciao mondo',
        subtitle: null
    });

    setTimeout(() => {
        viewModel.subtitle = `${sufix} Mario Rossi`;
    }, 1200);

    return viewModel;
}

module.exports = SpeakerViewModel;
