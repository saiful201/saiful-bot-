const fs = require("fs");
module.exports.config = {
  name: "😋",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Fun", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("😋")==0 || event.body.indexOf("😜")==0 || event.body.indexOf("🤪")==0 || event.body.indexOf("😝")==0 ) { 
    var msg = {
        body: "জি্ঁব্বা্ঁ দে্ঁখা্ঁও্ঁ কে্ঁটে্ঁ দি্ঁমু্ঁ 😒🥀",
        attachment: fs.createReadStream(__dirname + `/cache/jibba.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
