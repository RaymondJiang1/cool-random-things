[![npm](https://img.shields.io/npm/v/cool-random-things.svg)](https://www.npmjs.com/package/cool-random-things)
[![npm](https://img.shields.io/npm/dt/cool-random-things.svg?maxAge=3600)](https://www.npmjs.com/package/cool-random-things)
[![install size](https://packagephobia.now.sh/badge?p=cool-random-things)](https://packagephobia.now.sh/result?p=cool-random-things)

[![NPM](https://nodei.co/npm/cool-random-things.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cool-random-things/)

# cool-random-things

## Installation
```
npm i cool-random-things
```
Below are the things that this package offers you.
# SETUP FOR cool-random-things

```js
const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("cool-random-things") //if you want load the Random Package
const random = new Random();
const { Neko } = require("cool-random-things") //if you want load the Neko Package
const neko = new Neko();

client.on("ready", () => {
  console.log("Ready to go")
})

client.on("message", async message => {
  if(message.content === "!meme") {
    let img = await random.meme()
    message.channel.send(img)
  }else if(message.content === "!neko"){
  let img = await neko.neko()
  message.channel.send(img)
  });

client.login('TOKEN');
```
