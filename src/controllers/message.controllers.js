import whatsapp from '../lib/whatsapp.js'

// * This function send a message to a phone number
/** 
 * @params phone is the whatsapp number of a user
 * @params message is a string send to the phone 
 **/

export const sendToPhone = async (req, res) => {
    const { phone, message } = req.body;
    const chatId = phone.substring(1) + "@c.us";
    const number_details = await whatsapp.getNumberId(chatId);
    if (number_details) {
        await whatsapp.sendMessage(chatId, message);
        res.status(200).json({ "message": "The message was send" });
    } else
        return res.status(404).json({ "message": `The chatId ${chatId} is not found` });
}

// * This function send a message to a list of phone numbers
/** 
* @params phones is a array of users phones
* @params message is a text send for the user bot
**/

export const sendToList = async (req, res) => {
    const { phones, message } = req.body;
    //loop for get each phone
    phones.forEach(async (element) => {
        const chatId = element.substring(1) + "@c.us";
        const number_details = await whatsapp.getNumberId(chatId);
        if (number_details)
            await whatsapp.sendMessage(chatId, message);
        else
            return res.status(404).json({ "message": `The chatId ${chatId} is not found` });
    });
    //finish process
    res.status(200).json({
        "message": `The message was send to list of phones`,
        phones
    });
}

// * This function send a message in loop to a phone number
/**
 * @params phone is the whatsapp number of a user
 * @params message is a string send to the phone 
 * @params limit indicates the number of messages to repeat
 **/

export const sendLoop = async (req, res) => {
    const { phone, message, limit } = req.body;
    const chatId = phone.substring(1) + "@c.us";
    const number_details = await whatsapp.getNumberId(chatId);
    if (number_details) {
        //Loop of message
        for (let i = 1; i <= limit; i++)
            await whatsapp.sendMessage(chatId, message);
        res.status(200).json({
            "message": "The message was send with a loop",
            "loop": limit
        });
    } else
        return res.status(404).json({ "message": `The chatId ${chatId} is not found` });
}