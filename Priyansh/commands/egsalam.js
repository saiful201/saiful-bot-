const fs = require("fs");
module.exports.config = {
  name: "salam",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Fun", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("assalamualaikum")==0 || event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("Assalamualaikum")==0 || event.body.indexOf("salam")==0 ) { 
    var msg = {
        body: "আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ আ্ঁলা্ঁই্ঁকু্ঁম্ঁ স্ঁবা্ঁই্ঁ কে্ঁম্ঁন্ঁ আ্ঁছে্ঁন্ঁ 🖤🥀",
        attachment: fs.createReadStream(__dirname + `/cache/salam.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❣️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
