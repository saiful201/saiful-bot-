const fs = require("fs");
module.exports.config = {
  name: "🙃",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Fun", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("🙂")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("🫠")==0 || event.body.indexOf("😊")==0 ) { 
    var msg = {
        body: "কি্ঁ হ্ঁই্ঁছে্ঁ সু্ঁনা্ঁ সে্ঁন্টি্ঁ খা্ঁও্ঁ কে্ঁনো্ঁ 😒",
        attachment: fs.createReadStream(__dirname + `/cache/santiy.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
