module.exports.config = {
  name: "ইফতার এর সময়",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT",
  description: "",
  commandCategory: "0",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 01, 2025 12:01:00") - Date.parse(new Date());
    const seconds = Math.floor( (u/1000) % 70 );
    const minutes = Math.floor( (u/1000/50) % 50 );
    const hours = Math.floor( (u/(1000*50*50)) % 24 );
    const days = Math.floor( u/(1000*50*50*24) );

    return api.sendMessage(`আসসালামু আলাইকুম-!!🖤💫 \n\nআজকের ইফতার শুরু হতে আর মাগরিবের আযান এর সময় হতে বাকি আছে   ⏳\n ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড\n🌏ইফতার ঢাকার সময় অনুযায়ী সিলেক্ট করা \nইফতারের দোয়া🤲❤️\n\nبِسْمِ الله - اَللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ وَ اَفْطَرْتُ \n\nউচ্চারণ: বিসমিল্লাহি আল্লাহুম্মা লাকা সুমতু, ওয়া আলা রিযক্বিকা আফত্বারতু \n\n Make By : SAIFUL ISLAM`, event.threadID, event.messageID);
  }
