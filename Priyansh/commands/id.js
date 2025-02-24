module.exports.config = {
	name: "id",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Abdylla",
	description: "Get your user ID",
	commandCategory: "without prefix",
	cooldowns: 5
};

module.exports.run = async function({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) {
const fs = global.nodemodule["fs-extra"];
		const request = global.nodemodule["request"];
		const axios = global.nodemodule['axios']; 
		if(event.type == "message_reply") { 
			let name = await Users.getNameUser(event.messageReply.senderID) 
	uid = event.messageReply.senderID
	var callback = () =>   api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ====\n━━━━━━━━━━━━━━━━━━\n[ ▶️]➜ 𝗜𝗗: ${uid}\n[ ▶️]➜ 𝗜𝗕: m.me/${uid}\n[ ▶️]➜ 𝗟𝗶𝗻𝗸𝗳𝗯: https://www.facebook.com/profile.php?id=${uid}\n━━━━━━━━━━━━━━━━━━`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
				() => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
		return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
				() => callback()); 
		}
		if (!args[0]) {
			var uid = event.senderID;

				var callback = () =>  api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ====\n━━━━━━━━━━━━━━━━━━\n[ ▶️]➜ 𝗜𝗗: ${event.senderID}\n[ ▶️]➜ 𝗜𝗕: m.me/${event.senderID}\n[ ▶️]➜ 𝗟𝗶𝗻𝗸𝗳𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n━━━━━━━━━━━━━━━━━━`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
				() => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
		return request(encodeURI(`https://graph.facebook.com/${event.
