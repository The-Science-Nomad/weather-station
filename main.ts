serial.onDataReceived(serial.delimiters(Delimiters.CarriageReturn), function () {
    rawData = serial.readUntil(serial.delimiters(Delimiters.CarriageReturn))
    windDirection = rawData.substr(7, 3)
    windSpeed = rawData.substr(11, 4)
    temp = rawData.substr(57, 3)
    humidity = rawData.substr(61, 2)
    airPressure = rawData.substr(65, 5)
    bluetooth.uartWriteLine("" + windDirection + "," + windSpeed + "," + convertToText(parseFloat(temp) / 10) + "," + humidity + "," + airPressure)
})
let airPressure = ""
let humidity = ""
let temp = ""
let windSpeed = ""
let windDirection = ""
let rawData = ""
serial.redirect(
SerialPin.P13,
SerialPin.P14,
BaudRate.BaudRate9600
)
bluetooth.startUartService()
serial.setRxBufferSize(74)
basic.forever(function () {
	
})
