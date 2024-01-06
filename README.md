# My Whatsapp Bot

## Description

![botwhatsapp](https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/whatpsapp-chatbot-2653515.jpg?tf=3840x)

This is a personal project in node js where I want to create a WhatsApp bot and then implement its functions in a CRM.

### Dependencies

I need **install** a package that allow connect with a QR code to whatsapp web. This library is whatsapp-web.js.
```
npm i whatsapp-web.js
```
But this library use two package more, these are *puppeteer* and *qrcode-terminal*.

```
npm i qrcode-terminal
```

```
npm i puppeteer
```

**Note:** Sometimes when use npm for install these packages, the version of *puppeteer* not is the last. In this case, i use yarn to install this package and *whatsapp-web.js*.

> yarn add --package-name

### Links for docs
1. [whatsapp-web.js](https://wwebjs.dev "library doc")
2. [puppeteer](https://www.npmjs.com/package/puppeteer "library doc")
3. [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal "library doc")