const serialportgsm = require('serialport-gsm');

let modem = serialportgsm.Modem()
let options = {
    baudRate: 9600,
    dateBits: 8,
    stopBits: 1,
    parity: 'none',
    rtscts: false,
    xon: false,
    xoff: false,
    xany: false,
    autoDeleteOnReceive: true,
    enebleConcatenation: true,
    incomingCallIndication: true,
    incomingSMSIndication: true,
    pin: '',
    customInitCommans: '',
    logger: console
}

modem.open('COM3', options, {});

modem.on('open',date=>{
    modem.initializeModem((data)=>{
        console.log('modem is initialized');
        modem.sendSMS('998908830450','Salom sms yuborish ishladi', true, (data)=>{
            console.log(data)
        })
    })
})

modem.on('onSendingMessage',result=>{
    console.log(result);
})

//https://www.youtube.com/watch?v=u0m-GYSKQ7g