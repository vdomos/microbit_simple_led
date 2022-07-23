input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.showString("B")
basic.pause(500)
basic.forever(function () {
    basic.showString("-")
    basic.pause(1000)
    basic.showString("|")
    basic.pause(1000)
})
