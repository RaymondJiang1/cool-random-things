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
# SETUP FOR COOL-RANDOM-THINGS

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
## DOCUMENTATION FOR COOL-RANDOM-THINGS
**WARNING** TO MAKE THE CODES WORKS MUST HAVE THIS: 
```js
const { Random } = require("cool-random-things")
const random = new Random();
const { Neko } = require("cool-random-things")
const neko = new Neko();
```
**meme()**: Provides You a Random Funny Memes.

```js
let img = await random.meme()
message.channel.send(img)
```

**bear()**: Provides You a Random Bear Images.

```js
let img = await random.bear()
message.channel.send(img)
```

**panda()**: Provides You a Random Panda Images.

```js
let img = await random.panda()
message.channel.send(img)
```

**car()**: Provides You a Random Car Images.

```js
let img = await random.car()
message.channel.send(img)
```

**smug()**: Provides You a Random Smug gif.

```js
let img = await neko.smug()
message.channel.send(img)
```
**baka()**: Provides You a Random Baka gif.

```js
let img = await neko.baka()
message.channel.send(img)
```

**tickle()**: Provides You a Random Tickle gif.

```js
let img = await neko.tickle()
message.channel.send(img)
```

**slap()**: Provides You a Random Slap gif.

```js
let img = await neko.slap()
message.channel.send(img)
```

**poke()**: Provides You a Random Poke gif.

```js
let img = await neko.poke()
message.channel.send(img)
```

**pat()**: Provides You a Random Pat gif.

```js
let img = await neko.pat()
message.channel.send(img)
```

**neko()**: Provides You a Random Neko Images.

```js
let img = await neko.neko()
message.channel.send(img)
```

**nekogif()**: Provides You a Random Nekogif gif.

```js
let img = await neko.nekogif()
message.channel.send(img)
```

**cat()**: Provides You a Random Cat Images.

```js
let img = await neko.cat()
message.channel.send(img)
```

**lizard()**: Provides You a Random Lizard Images.

```js
let img = await neko.lizard()
message.channel.send(img)
```

**kiss()**: Provides You a Random Kiss gif.

```js
let img = await neko.kiss()
message.channel.send(img)
```

**hug()**: Provides You a Random Hug gif.

```js
let img = await neko.hug()
message.channel.send(img)
```

**feed()**: Provides You a Random Feed gif.

```js
let img = await neko.feed()
message.channel.send(img)
```

**cuddle()**: Provides You a Random Cuddle gif.

```js
let img = await neko.cuddle()
message.channel.send(img)
```

**foxGirl()**: Provides You a Random FoxGirl Images.

```js
let img = await neko.foxGirl()
message.channel.send(img)
```

**kemonomimi()**: Provides You a Random Kemonomimi Images.

```js
let img = await neko.kemonomimi()
message.channel.send(img)
```

**holo()**: Provides You a Random Holo Images.

```js
let img = await neko.holo()
message.channel.send(img)
```

**dog()**: Provides You a Random Dog Images.

```js
let img = await neko.dog()
message.channel.send(img)
```

**goose()**: Provides You a Random Goose Images.

```js
let img = await neko.goose()
message.channel.send(img)
```

**gecg()**: Provides You a Random Gecg Images.

```js
let img = await neko.gecg()
message.channel.send(img)
```

**avatar()**: Provides You a Random Avatar Images.

```js
let img = await neko.avatar()
message.channel.send(img)
```

**waifu()**: Provides You a Random Waifu Images.

```js
let img = await neko.waifu()
message.channel.send(img)
```

**why()**: Provides You a Random Why Text.

```js
let text = await neko.why()
message.channel.send(text)
```
