let targetItem = null;
let motionTime = 0;
let isPlayingMotion = false;
let motionNo = 0;
const motions = [
    _.humanoidAnimation("Animation0"),
    _.humanoidAnimation("Animation1"),
    _.humanoidAnimation("Animation2"),
    _.humanoidAnimation("Animation3"),
    _.humanoidAnimation("Animation4"),
    _.humanoidAnimation("Animation5"),
    _.humanoidAnimation("Animation6"),
    _.humanoidAnimation("Animation7"),
    _.humanoidAnimation("Animation8"),
    _.humanoidAnimation("Animation9"),
]
const motionSize = motions.length;

const controls = [
    _.iconAsset("Control0"),
    _.iconAsset("Control1"),
]
const controlSize = controls.length;


const modes = [
    _.iconAsset("Mode0"),
    _.iconAsset("Mode1"),
    _.iconAsset("Mode2"),
    _.iconAsset("Mode3"),
    _.iconAsset("Mode4"),
    _.iconAsset("Mode5"),
    _.iconAsset("Mode6"),
    _.iconAsset("Mode7"),
    _.iconAsset("Mode8"),
    _.iconAsset("Mode9"),
]

// 値がある範囲に収まるようにする
const clamp = (x, min, max) => {
    if (x < min) {
        return min;
    }
    else if (max < x) {
        return max;
    }
    else {
        return x;
    }
};

// xが0→1になるとき、0→1→0となる値を返す
// 最初からeaseInRateの期間で0→1、最後からeaseOutRateの期間で1→0になる
const easeInOut = (x, easeInRate, easeOutRate) => {
    x = clamp(x, 0, 1);

    let y = 1;

    if (x < easeInRate) {
        y = x / easeInRate;
    }
    else if (1 - easeOutRate < x) {
        y = (1 - x) / easeOutRate;
    }

    return y;
};

// モーションを適用し、モーションが終わりならfalseを返す
const playMotion = (animation, time) => {
    let animationLength = animation.getLength();
    let continuePlaying = (motionTime <= animationLength);

    if (continuePlaying) {
        let pose = animation.getSample(time);

        // 通常モーションとスムーズに切り替わるよう、モーションの始めと終わりでweightが小さくなるようにする
        let timeRate = time / animationLength;
        let weight = easeInOut(timeRate, 0.1, 0.1);

        _.setHumanoidPoseOnFrame(pose, weight);

        // モーション再生は終わっていない
        return true;
    }

    return continuePlaying;
};

_.showButton(2, modes[0]);
_.showButton(3, controls[0]);
targetItem = _.sourceItemId;
// _.onStart(() => {

// });

_.onButton(2, (isDown) => {
    if (isDown) {
        ++motionNo;
        if (motionNo >= motionSize) {
            motionNo = 0;
        }
        // _.showButton(2, modes[motionNo]);
        _.log(`onButton motionNo: ${motionNo}`);
    }
});

_.onButton(3, (isDown) => {
    if (isDown) {
        const isCurrentPlayingMotion = isPlayingMotion;
        if (!isCurrentPlayingMotion) {
            // メッセージを送ってアイテムから音を鳴らす
            _.sendTo(targetItem, "PlaySound", null);

            // モーション再生開始
            motionTime = 0;
        }

        isPlayingMotion = !isCurrentPlayingMotion;

        // _.showButton(3, controls[isPlayingMotion ? 1 : 0]);
    }
    _.log(`onButton isPlayingMotion: ${isPlayingMotion}`);
});

_.onFrame(deltaTime => {
    // モーション再生
    if (isPlayingMotion) {
        // _.log(`onFrame motionNo: ${motionNo}`);

        motionTime += deltaTime;
        const motion = motions[motionNo];
        isPlayingMotion = playMotion(motion, motionTime);
    }
});

