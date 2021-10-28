function A_function () {
    basic.showString("A")
    basic.clearScreen()
    basic.showArrow(ArrowNames.North)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P0, 0)
}
