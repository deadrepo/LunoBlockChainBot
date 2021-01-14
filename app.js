//declaring library
const {Telegraf} = require('telegraf')
//declaring library for axios
const axios = require('axios')

//API Token
const bot = new Telegraf("insert your API key or you can also add env here")

//Welcome 
bot.start((ctx) =>  ctx.reply('ikmxleo Qc8 here, Welcome to XBTMYR Luno API Bot\n/help command for more information about this bot')) 

//Help 
bot.help((ctx) => ctx.reply('<code>Hello your help is here :) \u{1F320}\n\nThis bot is created to find the current price of BTC,ETH,XRP,LTC\nThis bot can perform the following commands</code>\n -- /btc\n -- /btcusd\n -- /eth\n --  /ethusd\n -- /xrp\n -- /xrpusd\n -- /ltc\n -- /ltcusd\n -- /news\n -- /newsmy\n -- /newsbtc\n -- /newseth\n -- /newsxrp\n -- /newsltc\n -- /fortune\n -- /help\n -- <code>Reminder every morning</code>\n\n<code>created by team 4zer0day\n\ntailcode h4x00r\n\nA beautiful world with null problem X0 </code> ', { parse_mode: "HTML",})); 

//Sticker
bot.on('sticker', (ctx) => ctx.reply('cute sticker you got there :)'));


//bot.on('new_chat_members', (ctx) => ctx.reply('Welcome ' + ctx.message.chat.id //));

bot.on('new_chat_members', (ctx) => ctx.reply('<code>Welcome to Luno XBTMYR  Group \u{1F319}\nPlease read the pin message :)</code> \n/help for more information '  ,{ parse_mode: "HTML",}));

bot.on('left_chat_member', (ctx) => ctx.reply('<code>Bye bye fellow Pwn \u{1F319} \nHope to see you again soon :) \nHave a good day ahead fellow 4zer0day</code>'  ,{ parse_mode: "HTML",}));


//For replying to text
bot.hears('Hi', (ctx) => ctx.reply('<code>Hey there</code>',{ parse_mode: "HTML",}));

//For replying to text
bot.hears('hariz', (ctx) => ctx.reply('hariz abang jago'));

bot.hears('ikmal', (ctx) => ctx.reply('ikmxleo xxxx u')); 
//For normal command /boss
bot.command('boss', (ctx) => ctx.reply('4zer0day'));

bot.command('4zer0day', async (ctx) => {
    let res = await ctx.reply('deleting');
    console.log(res);
    for(let i = res.message_id; i >= 0; i--) {
        console.log(`chat_id: ${ctx.chat.id}, message_id: ${i}`);
        try {
            let res = await ctx.telegram.deleteMessage(ctx.chat.id, i);
            console.log(res);
        } catch (e) {
            console.error(e);
        }
    }
});

//For command /anything and with the sender's message
bot.command('say', (ctx) => {
msg = ctx.message.text
msgArray = msg.split(' ')
msgArray.shift()
newMsg = msgArray.join(' ')
console.log(msgArray)
ctx.reply(newMsg)
})

//For API Fortune
bot.command('fortune', (ctx) => {
    
    axios.get('http://yerkee.com/api/fortune')
    .then((res) => {
        console.log(res.data.fortune)
        ctx.reply(res.data.fortune)
    })
})

//For API Fun fact Bitcoin
bot.command('funfactsbtc', (ctx) => {
    
    axios.get('https://4zer0day.dev/blockchain/')
    .then((res) => {
     
        ctx.reply(res.data.fact)
    })
})



//For BTC
bot.command('btc', (ctx) => {
   // ctx.deleteMessage()
    axios.get('https://api.luno.com/api/1/ticker?pair=XBTMYR')
    .then((res) => {
        var n = res.data.ask;
        var n = res.data.ask - 0.00000000;
        var i = res.data.bid - 0.00000000;
        var w = res.data.rolling_24_hour_volume - 0.00000000
        var l = res.data.last_trade - 0.00000000;
            
         var a = (res.data.ask)-(res.data.bid)  + ".00";
           if(res.data.ask<110000){
                var fun = "It's a good time to buy your bitcoin \u{1F680}"
              }
         else{
           var fun = "Hold don't buy your bitcoin \u{1F320}"
         }
        console.log(res.data.value)
        ctx.reply("As in Today \u{1F314}\n\nLuno XBTMYR Price \u{1F319}:" + "\nCurrent BTC Price: MYR " +  n + "\nBid Price: MYR "+ i + "\nLast Trade Price: MYR "+ l +
        "\n\nChange in 24hr: MYR "+ w  + "\nDifferent in Bid and Asked Price: MYR " + a + "\n\n" + fun )
    })
})

//FOR ETH
bot.command('eth', (ctx) => {
   // ctx.deleteMessage()
    axios.get('https://api.luno.com/api/1/ticker?pair=ETHMYR')
    .then((res) => {
        var n = res.data.ask;
        var n = res.data.ask - 0.00000000;
        var i = res.data.bid - 0.00000000;
        var w = res.data.rolling_24_hour_volume - 0.00000000
        var l = res.data.last_trade - 0.00000000;
            
         var a = (res.data.ask)-(res.data.bid)  + ".00";
         if(res.data.ask<2900){
                var fun = "It's a good time to buy your Ethereum \u{1F680}"
              }
         else{
           var fun = "Hold don't buy your Ethereum \u{1F320}"
         }
        console.log(res.data.value)
        ctx.reply("As in Today \u{1F314}\n\nLuno ETHMYR Price \u{1F319}:" + "\nCurrent ETH Price: MYR " +  n + "\nBid Price: MYR "+ i + "\nLast Trade Price: MYR "+ l +
        "\n\nChange in 24hr: MYR "+ w  + "\nDifferent in Bid and Asked Price: MYR " + a + "\n\n" + fun )
    })
})

//FOR XRP
bot.command('xrp', (ctx) => {
    //ctx.deleteMessage()
    axios.get('https://api.luno.com/api/1/ticker?pair=XRPMYR')
    .then((res) => {
        var n = res.data.ask;
        var n = res.data.ask - 0.00000000;
        var i = res.data.bid - 0.00000000;
        var w = res.data.rolling_24_hour_volume - 0.00000000
        var l = res.data.last_trade - 0.00000000;
            
         var a = (res.data.ask)-(res.data.bid)  + ".00";
         if(res.data.ask<2.00){
                var fun = "It's a good time to buy your Ripple \u{1F680}"
              }
         else{
           var fun = "Hold don't buy your Ripple \u{1F320}"
         }
        console.log(res.data.value)
        ctx.reply("As in Today \u{1F314}\n\nLuno XRPMYR Price \u{1F319}:" + "\nCurrent XRP Price: MYR " +  n + "\nBid Price: MYR "+ i + "\nLast Trade Price: MYR "+ l +
        "\n\nChange in 24hr: MYR "+ w  + "\nDifferent in Bid and Asked Price: MYR " + a + "\n\n" + fun )
    })
})

//FOR LTC
bot.command('ltc', (ctx) => {
    //ctx.deleteMessage()
    axios.get('https://api.luno.com/api/1/ticker?pair=LTCMYR')
    .then((res) => {
        var n = res.data.ask;
        var n = res.data.ask - 0.00000000;
        var i = res.data.bid - 0.00000000;
        var w = res.data.rolling_24_hour_volume - 0.00000000
        var l = res.data.last_trade - 0.00000000;
            
         var a = (res.data.ask)-(res.data.bid)  + ".00";
         if(res.data.ask<res.data.bid){
                var fun = "It's a good time to buy your ltc \u{1F680}"
              }
         else{
           var fun = "Hold don't buy your ltc \u{1F320}"
         }
        console.log(res.data.value)
        ctx.reply("As in Today \u{1F314}\n\nLuno LTCMYR Price \u{1F319}:" + "\nCurrent LTC Price: MYR " +  n + "\nBid Price: MYR "+ i + "\nLast Trade Price: MYR "+ l +
        "\n\nChange in 24hr: MYR "+ w  + "\nDifferent in Bid and Asked Price: MYR " + a + "\n\n" + fun )
    })
})


//CoinDesk
bot.command('news', (ctx) => {
    
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//NEWS

//NEWS BTC
bot.command('newsbtc', (ctx) => {
    
   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//NEWS ETH
bot.command('newseth', (ctx) => {
    
   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//NEWS XRP
bot.command('newsxrp', (ctx) => {

   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//NEWS LTC
bot.command('newsltc', (ctx) => {
    
   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);


        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//news coindeskbtc

bot.command('newsbtc1', (ctx) => {
    
   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//news coindesketh

bot.command('newseth1', (ctx) => {
    
   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//news coindeskxrp

bot.command('newsxrp1', (ctx) => {
    
   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//news coindeskltc

bot.command('newsltc1', (ctx) => {
    
   
    axios.get('add your api key here')
    .then((res) => {
        
    
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})


bot.command('newsmy', (ctx) => {
    
    axios.get('add your api key here')
    .then((res) => {
        
        const url = res.data.articles[0].url;
        const encoded = encodeURI(url);

// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

    
        ctx.reply("News By: " + res.data.articles[0].author  + "\nTitle: " + res.data.articles[0].title + "\nContent: " + res.data.articles[0].description + "\nLink: " + encoded   )
    })
})

//USD PRICES

//For BTC USD
bot.command('btcusd', (ctx) => {
   // ctx.deleteMessage()
    axios.get('add your api key here ')
    .then((res) => {
        
        var myFloat = res.data.data[0].quote.USD.price;
         var myTrunc = Math.trunc( myFloat );
         
        console.log(res.data.value)
        ctx.reply("Daily " + res.data.data[0].name + " Stats \u{20BF} \u{1F680}" + "\n\nCurrent Value: $"+  myTrunc + "\nCMC Rank: "+ res.data.data[0].cmc_rank +
              "\nChange in 1hr: $"+ res.data.data[0].quote.USD.percent_change_1h  )
    })
})

//For ETH USD
bot.command('ethusd', (ctx) => {
   // ctx.deleteMessage()
    axios.get('add your api key here ')
    .then((res) => {
        
        var myFloat = res.data.data[1].quote.USD.price;
         var myTrunc = Math.trunc( myFloat );
         
        console.log(res.data.value)
        ctx.reply("Daily " + res.data.data[1].name + " Stats \u{1F680}" + "\n\nCurrent Value: $"+  myTrunc + "\nCMC Rank: "+ res.data.data[1].cmc_rank +
              "\nChange in 1hr: $"+ res.data.data[1].quote.USD.percent_change_1h  )
    })
})

//For XRP USD
bot.command('xrpusd', (ctx) => {
   // ctx.deleteMessage()
    axios.get('add your api key here ')
    .then((res) => {
        
        
         
        console.log(res.data.value)
        ctx.reply("Daily " + res.data.data[3].name + " Stats \u{1F680}" + "\n\nCurrent Value: $"+  res.data.data[3].quote.USD.price + "\nCMC Rank: "+ res.data.data[3].cmc_rank +
              "\nChange in 1hr: $"+ res.data.data[3].quote.USD.percent_change_1h  )
    })
})

//For LTC USD
bot.command('ltcusd', (ctx) => {
   // ctx.deleteMessage()
    axios.get('add your api key here')
    .then((res) => {
        
        var myFloat = res.data.data[4].quote.USD.price;
         var myTrunc = Math.trunc( myFloat );
         
        console.log(res.data.value)
        ctx.reply("Daily " + res.data.data[4].name + " Stats \u{1F680}" + "\n\nCurrent Value: $"+  myTrunc + "\nCMC Rank: "+ res.data.data[4].cmc_rank +
              "\nChange in 1hr: $"+ res.data.data[4].quote.USD.percent_change_1h   )
    })
})

//For API Fortune
bot.command('fortune', (ctx) => {
    
    axios.get('http://yerkee.com/api/fortune')
    .then((res) => {
        console.log(res.data.value)
        ctx.reply(res.data.value)
    })
})

//For API Fortune
bot.command('image', (ctx) => {
    
    axios.get('http://yerkee.com/api/fortune')
    .then((res) => {
        console.log(res.data.value)
        ctx.reply(res.data.value)
    })
})



bot.command('fuck', (ctx) => {
    
    axios.get('https://4zer0day.dev/covidapi/malaysianstates.php')
    .then((res) => {
        console.log(res.data)
        ctx.reply(res.data)

        
    })
})


bot.launch()