radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(100)
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        . . # # .
        . . . # .
        . . . . .
        `)
})
