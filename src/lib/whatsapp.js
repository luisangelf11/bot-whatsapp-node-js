import qrcode from 'qrcode-terminal'
import pkg from 'whatsapp-web.js'

const client = new pkg.Client({
    authStrategy: new pkg.LocalAuth()
});

//Events Client 
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log(qr)
});

client.on('ready', () => {
    console.log('Client is ready!');
});

export default client;