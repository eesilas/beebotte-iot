microIoT.initDisplay()
microIoT.microIoT_WIFI("EVI-LINKSYS", "88888888")
microIoT.microIoT_MQTT(
"9Vo9OLDRP2mZidOOpU8pBRy7",
"EEuuaO2qa5XrUSV2nEsqe7CveujRovuN",
"humidity/humidity",
microIoT.SERVERS.Global
)
basic.forever(function () {
    microIoT.showUserText(0, "Light" + input.lightLevel())
    microIoT.microIoT_SendMessage(convertToText(input.lightLevel()), microIoT.TOPIC.topic_0)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
})
