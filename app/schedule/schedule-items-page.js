const ScheduleItemsViewModel = require("./schedule-items-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new ScheduleItemsViewModel();
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "schedule/schedule-item-detail/schedule-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
