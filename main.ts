let número = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    número = randint(0, 3)
    if (número == 1) {
        basic.showIcon(IconNames.Square)
    } else if (número == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    music.playTone(554, music.beat(BeatFraction.Quarter))
})
