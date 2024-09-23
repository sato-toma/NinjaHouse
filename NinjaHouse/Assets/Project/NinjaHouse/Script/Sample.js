$.onUpdate(deltaTime => {
    let startPosition = $.state.startPosition;
    if (startPosition == null) {
        startPosition = $.getPosition();
        $.state.startPosition = startPosition;
    }

    let moveVector = $.getPosition().clone().sub(startPosition);

    let distance = moveVector.length();
    $.setStateCompat("this", "distance", distance);
});

const signBoard = $.subNode("SignBoard");
$.onGrab(isGrab => {
    $.log("isGrab: " + isGrab);
    $.state.startPosition = $.getPosition();
    signBoard.setEnabled(!isGrab);

});