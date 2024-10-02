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
]
const motionSize = motions.length;

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

_.onStart(() => {
    _.showButton(2, _.iconAsset(""));
    _.showButton(3, _.iconAsset(""));
    targetItem = _.sourceItemId;
});

_.onButton(2, (isDown) => {
    if (isDown) {
        ++motionNo;
        if (motionNo >= motionSize) {
            motionNo = 0;
        }
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
    }
    _.log(`onButton isPlayingMotion: ${isPlayingMotion}`);
});

_.onFrame(deltaTime => {
    // モーション再生
    if (isPlayingMotion) {
        _.log(`onFrame motionNo: ${motionNo}`);

        motionTime += deltaTime;
        const motion = motions[motionNo];
        isPlayingMotion = playMotion(motion, motionTime);
    }
});
