let targetItem = null;
const modes = [
    _.iconAsset("Mode0"),
    _.iconAsset("Mode1"),
    _.iconAsset("Mode2"),
]
const mode0 = _.iconAsset("Mode0");
const mode1 = _.iconAsset("Mode1");

_.showButton(2, _.iconAsset("Mode0"));
_.showButton(3, _.iconAsset("Mode1"));
targetItem = _.sourceItemId;
_.sendTo(targetItem, "isVR", _.isVr);
// _.onStart(() => {

// });

_.onButton(2, (isDown) => {
    if (isDown) {
        _.log(`onButton 2`);
    }
});

_.onButton(3, (isDown) => {
    if (isDown) {
        _.log(`onButton 3`);
    }
});

_.onFrame(deltaTime => {
    // モーション再生
});

