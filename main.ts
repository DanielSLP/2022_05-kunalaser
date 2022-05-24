let svetlo = 0
let svetloLED = 0
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P13, 90)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P13, -90)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P13, 0)
})
basic.forever(function () {
    svetlo = smarthome.ReadLightIntensity(AnalogPin.P2)
    serial.writeNumber(svetlo)
    svetloLED = input.lightLevel()
    serial.writeNumber(svetloLED)
})
