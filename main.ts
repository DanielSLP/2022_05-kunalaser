input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P16, 145)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P16, 45)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P16, 0)
})
let svetloLED = 0
let svetlo = 0
pins.servoWritePin(AnalogPin.P16, 45)
basic.forever(function () {
    svetlo = smarthome.ReadLightIntensity(AnalogPin.P1)
    serial.writeValue("svetlo", svetlo)
    svetloLED = input.lightLevel()
    serial.writeValue("svetloLED", svetloLED)
})
