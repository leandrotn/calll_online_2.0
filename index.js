// =============== Port ===============
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online //numero da porta: 3000
//caso queira muda a bolinha de status: 
//(status: '') 
//mude os valores dos meios das aspas simples pelos status: dnd, idle, online, invisible)
//Bom configs simples
//Se você definir true para (setSelfDeaf) a conta será surda/false a conta continua com fone aberto.

//Se você definir true para (setSelfMute) a conta será mutada/false a conta continuara desmutada.
// caso queira definir atividade de jogos só colocar o nome em: { name: '' }.
//Script desenvolvido by:LEANDROTN#0101 O BRABO DA 192


// =============== Bot ===============
const Discord = require('discord.js-self');
const user_1 = new Discord.Client();
const user_2 = new Discord.Client();
const user_3 = new Discord.Client();
const user_4 = new Discord.Client();
const user_5 = new Discord.Client();
const user_6 = new Discord.Client();
const user_7 = new Discord.Client();
const user_8 = new Discord.Client();
const user_9 = new Discord.Client();
const user_10 = new Discord.Client();
const user_11 = new Discord.Client();
const user_12 = new Discord.Client();
const user_13 = new Discord.Client();
const user_14 = new Discord.Client();
const user_15 = new Discord.Client();
const user_16 = new Discord.Client();
const user_17 = new Discord.Client();
const user_18 = new Discord.Client();
const user_19 = new Discord.Client();
const user_20 = new Discord.Client();
const user_21 = new Discord.Client();
const user_22 = new Discord.Client();
const user_23 = new Discord.Client();
const user_24 = new Discord.Client();
const user_25 = new Discord.Client();
const user_26 = new Discord.Client();
const user_27 = new Discord.Client();
const user_28 = new Discord.Client();
const user_29 = new Discord.Client();
const user_30 = new Discord.Client();
const user_31 = new Discord.Client();
const user_32 = new Discord.Client();
const user_33 = new Discord.Client();
const user_34 = new Discord.Client();
const user_35 = new Discord.Client();
const user_36 = new Discord.Client();
const user_37 = new Discord.Client();
const user_38 = new Discord.Client();
const user_39 = new Discord.Client();
const user_40 = new Discord.Client();
const user_41 = new Discord.Client();
const user_42 = new Discord.Client();
const user_43 = new Discord.Client();
const user_44 = new Discord.Client();
const user_45 = new Discord.Client();
const user_46 = new Discord.Client();
const user_47 = new Discord.Client();
const user_48 = new Discord.Client();
const user_49 = new Discord.Client();
const user_50 = new Discord.Client();
const user_51 = new Discord.Client();
const user_52 = new Discord.Client();
const user_53 = new Discord.Client();
const user_54 = new Discord.Client();
const user_55 = new Discord.Client();
const user_56 = new Discord.Client();
const user_57 = new Discord.Client();
const user_58 = new Discord.Client();
const user_59 = new Discord.Client();
const user_60 = new Discord.Client();
const user_61 = new Discord.Client();
const user_62 = new Discord.Client();
const user_63 = new Discord.Client();
const user_64 = new Discord.Client();
const user_65 = new Discord.Client();
const user_66 = new Discord.Client();
const user_67 = new Discord.Client();
const user_68 = new Discord.Client();
const user_69 = new Discord.Client();
const user_70 = new Discord.Client();
const user_71 = new Discord.Client();
const user_72 = new Discord.Client();
const user_73 = new Discord.Client();
const user_74 = new Discord.Client();
const user_75 = new Discord.Client();
const user_76 = new Discord.Client();
const user_77 = new Discord.Client();
const user_78 = new Discord.Client();
const user_79 = new Discord.Client();
const user_80 = new Discord.Client();
const user_81 = new Discord.Client();
const user_82 = new Discord.Client();
const user_83 = new Discord.Client();
const user_84 = new Discord.Client();
const user_85 = new Discord.Client();
const user_86 = new Discord.Client();
const user_87 = new Discord.Client();
const user_88 = new Discord.Client();
const user_89 = new Discord.Client();
const user_90 = new Discord.Client();
const user_91 = new Discord.Client();
const user_92 = new Discord.Client();
const user_93 = new Discord.Client();
const user_94 = new Discord.Client();
const user_95 = new Discord.Client();
const user_96 = new Discord.Client();
const user_97 = new Discord.Client();
const user_98 = new Discord.Client();
const user_99 = new Discord.Client();
const user_100 = new Discord.Client();
//=============== const self ===============

 
const { id, id_1, error, success } = require('./config.json');
 //=============== config self ===============


// =============== eventos de atividade ===============
user_1.on('ready', () => {
	console.log(`USER_1 ${user_1.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_1.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_2.on('ready', () => {
	console.log(`USER_2 ${user_2.user.tag}!`);
	user_2.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_2.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_3.on('ready', () => {
	console.log(`USER_3 ${user_3.user.tag}!`);
	user_3.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_3.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_4.on('ready', () => {
	console.log(`USER_4 ${user_4.user.tag}!`);
	user_4.user.setPresence({
		activity: { name: '' },status: 'dnd'
	});
	const channel = user_4.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_5.on('ready', () => {
	console.log(`USER_5 ${user_5.user.tag}!`);
	user_5.user.setPresence({
		activity: { name: '' },status: 'dnd'
	});
	const channel = user_5.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_6.on('ready', () => {
	console.log(`USER_6 ${user_6.user.tag}!`);
	user_6.user.setPresence({
		activity: { name: '' },status: 'online'
	});
	const channel = user_6.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_7.on('ready', () => {
	console.log(`USER_7 ${user_7.user.tag}!`);
	user_7.user.setPresence({
		activity: { name: '' },status: 'dnd'
	});
	const channel = user_7.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_8.on('ready', () => {
	console.log(`USER_8 ${user_8.user.tag}!`);
	user_8.user.setPresence({
		activity: { name: '' },status: 'dnd'
	});
	const channel = user_8.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_9.on('ready', () => {
	console.log(`USER_9 ${user_9.user.tag}!`);
	user_9.user.setPresence({
		activity: { name: '' },status: 'online'
	});
	const channel = user_9.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_10.on('ready', () => {
	console.log(`USER_10 ${user_10.user.tag}!`);
	user_10.user.setPresence({
		activity: { name: '' },status: 'idle'
	});
	const channel = user_10.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_11.on('ready', () => {
	console.log(`USER_11 ${user_11.user.tag}!`);
	user_11.user.setPresence({
		activity: { name: '' },status: 'dnd'
	});
	const channel = user_11.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_12.on('ready', () => {
	console.log(`USER_12 ${user_12.user.tag}!`);
	user_12.user.setPresence({ activity: { name: '' }, status: 'idle' });
	const channel = user_12.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_13.on('ready', () => {
	console.log(`USER_13 ${user_13.user.tag}!`);
	user_13.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_13.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_14.on('ready', () => {
	console.log(`USER_14 ${user_14.user.tag}!`);
	user_14.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_14.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_15.on('ready', () => {
	console.log(`USER_15 ${user_15.user.tag}!`);
	user_15.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_15.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_16.on('ready', () => {
	console.log(`USER_16 ${user_16.user.tag}!`);
	user_16.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_16.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_17.on('ready', () => {
	console.log(`USER_17 ${user_17.user.tag}!`);
	user_17.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_17.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_18.on('ready', () => {
	console.log(`USER_18 ${user_18.user.tag}!`);
	user_18.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_18.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_19.on('ready', () => {
	console.log(`USER_19 ${user_19.user.tag}!`);
	user_19.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_19.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_20.on('ready', () => {
	console.log(`USER_20 ${user_20.user.tag}!`);
	user_20.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_20.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_21.on('ready', () => {
	console.log(`USER_21 ${user_21.user.tag}!`);
	user_21.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_21.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_22.on('ready', () => {
	console.log(`USER_22 ${user_22.user.tag}!`);
	user_22.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_22.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_23.on('ready', () => {
	console.log(`USER_23 ${user_23.user.tag}!`);
	user_23.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_23.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_24.on('ready', () => {
	console.log(`USER_24 ${user_24.user.tag}!`);
	user_24.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_24.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_25.on('ready', () => {
	console.log(`USER_25 ${user_25.user.tag}!`);
	user_25.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_25.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_26.on('ready', () => {
	console.log(`USER_26 ${user_26.user.tag}!`);
	user_26.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_26.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_27.on('ready', () => {
	console.log(`USER_27 ${user_27.user.tag}!`);
	user_27.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_27.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_28.on('ready', () => {
	console.log(`USER_28 ${user_28.user.tag}!`);
	user_28.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_28.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_29.on('ready', () => {
	console.log(`USER_29 ${user_29.user.tag}!`);
	user_29.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_29.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_30.on('ready', () => {
	console.log(`USER_30 ${user_30.user.tag}!`);
	user_30.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_30.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_31.on('ready', () => {
	console.log(`USER_31 ${user_31.user.tag}!`);
	user_31.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_31.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_32.on('ready', () => {
	console.log(`USER_32 ${user_32.user.tag}!`);
	user_32.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_32.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_33.on('ready', () => {
	console.log(`USER_33 ${user_33.user.tag}!`);
	user_33.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_33.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_34.on('ready', () => {
	console.log(`USER_34 ${user_34.user.tag}!`);
	user_34.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_34.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_35.on('ready', () => {
	console.log(`USER_35 ${user_35.user.tag}!`);
	user_35.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_35.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_36.on('ready', () => {
	console.log(`USER_36 ${user_36.user.tag}!`);
	user_36.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_36.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_37.on('ready', () => {
	console.log(`USER_37 ${user_37.user.tag}!`);
	user_37.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_37.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_38.on('ready', () => {
	console.log(`USER_38 ${user_38.user.tag}!`);
	user_38.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_38.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_39.on('ready', () => {
	console.log(`USER_39 ${user_39.user.tag}!`);
	user_39.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_39.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_40.on('ready', () => {
	console.log(`USER_40 ${user_40.user.tag}!`);
	user_40.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_40.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_41.on('ready', () => {
	console.log(`USER_41 ${user_41.user.tag}!`);
	user_41.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_41.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_42.on('ready', () => {
	console.log(`USER_42 ${user_42.user.tag}!`);
	user_42.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_42.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_43.on('ready', () => {
	console.log(`USER_43 ${user_43.user.tag}!`);
	user_43.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_43.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_44.on('ready', () => {
	console.log(`USER_44 ${user_44.user.tag}!`);
	user_44.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_44.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_45.on('ready', () => {
	console.log(`USER_45 ${user_45.user.tag}!`);
	user_45.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_45.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_46.on('ready', () => {
	console.log(`USER_46 ${user_46.user.tag}!`);
	user_46.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_46.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_47.on('ready', () => {
	console.log(`USER_47 ${user_47.user.tag}!`);
	user_47.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_47.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_48.on('ready', () => {
	console.log(`USER_48 ${user_48.user.tag}!`);
	user_48.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_48.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_49.on('ready', () => {
	console.log(`USER_49 ${user_49.user.tag}!`);
	user_49.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_49.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_50.on('ready', () => {
	console.log(`USER_50 ${user_50.user.tag}!`);
	user_50.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_50.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_51.on('ready', () => {
	console.log(`USER_51 ${user_51.user.tag}!`);
	user_51.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_51.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_52.on('ready', () => {
	console.log(`USER_52 ${user_52.user.tag}!`);
	user_52.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_52.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});

// ==============================================
user_53.on('ready', () => {
	console.log(`USER_53 ${user_53.user.tag}!`);
	user_53.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_53.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_54.on('ready', () => {
	console.log(`USER_54 ${user_54.user.tag}!`);
	user_54.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_54.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_55.on('ready', () => {
	console.log(`USER_55 ${user_55.user.tag}!`);
	user_55.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_55.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_56.on('ready', () => {
	console.log(`USER_56 ${user_56.user.tag}!`);
	user_56.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_56.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_57.on('ready', () => {
	console.log(`USER_57 ${user_57.user.tag}!`);
	user_57.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_57.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_58.on('ready', () => {
	console.log(`USER_58 ${user_58.user.tag}!`);
	user_58.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_58.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_59.on('ready', () => {
	console.log(`USER_59 ${user_59.user.tag}!`);
	user_59.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_59.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_60.on('ready', () => {
	console.log(`USER_60 ${user_60.user.tag}!`);
	user_60.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_60.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_61.on('ready', () => {
	console.log(`USER_61 ${user_61.user.tag}!`);
	user_61.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_61.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_62.on('ready', () => {
	console.log(`USER_62 ${user_62.user.tag}!`);
	user_62.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_62.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_63.on('ready', () => {
	console.log(`USER_63 ${user_63.user.tag}!`);
	user_63.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_63.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_64.on('ready', () => {
	console.log(`USER_64 ${user_64.user.tag}!`);
	user_64.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_64.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_65.on('ready', () => {
	console.log(`USER_65 ${user_65.user.tag}!`);
	user_65.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_65.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_66.on('ready', () => {
	console.log(`USER_66 ${user_66.user.tag}!`);
	user_66.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_66.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_67.on('ready', () => {
	console.log(`USER_67 ${user_67.user.tag}!`);
	user_67.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_67.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_68.on('ready', () => {
	console.log(`USER_68 ${user_68.user.tag}!`);
	user_68.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_68.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_69.on('ready', () => {
	console.log(`USER_69 ${user_69.user.tag}!`);
	user_69.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_69.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_70.on('ready', () => {
	console.log(`USER_70 ${user_70.user.tag}!`);
	user_70.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_70.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_71.on('ready', () => {
	console.log(`USER_71 ${user_71.user.tag}!`);
	user_71.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_71.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_72.on('ready', () => {
	console.log(`USER_72 ${user_72.user.tag}!`);
	user_72.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_72.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_73.on('ready', () => {
	console.log(`USER_73 ${user_73.user.tag}!`);
	user_73.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_73.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_74.on('ready', () => {
	console.log(`USER_74 ${user_74.user.tag}!`);
	user_74.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_74.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});

// ==============================================
user_75.on('ready', () => {
	console.log(`USER_75 ${user_75.user.tag}!`);
	user_75.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_75.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_76.on('ready', () => {
	console.log(`USER_76 ${user_76.user.tag}!`);
	user_76.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_76.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_77.on('ready', () => {
	console.log(`USER_77 ${user_77.user.tag}!`);
	user_77.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_77.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_78.on('ready', () => {
	console.log(`USER_78 ${user_78.user.tag}!`);
	user_78.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_78.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_79.on('ready', () => {
	console.log(`USER_79 ${user_79.user.tag}!`);
	user_79.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_79.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_80.on('ready', () => {
	console.log(`USER_80 ${user_80.user.tag}!`);
	user_80.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_80.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_81.on('ready', () => {
	console.log(`USER_81 ${user_81.user.tag}!`);
	user_81.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_81.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_82.on('ready', () => {
	console.log(`USER_82 ${user_82.user.tag}!`);
	user_82.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_82.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_83.on('ready', () => {
	console.log(`USER_83 ${user_83.user.tag}!`);
	user_83.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_83.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_84.on('ready', () => {
	console.log(`USER_84 ${user_84.user.tag}!`);
	user_84.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_84.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_85.on('ready', () => {
	console.log(`USER_85 ${user_85.user.tag}!`);
	user_85.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_85.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_86.on('ready', () => {
	console.log(`USER_86 ${user_86.user.tag}!`);
	user_86.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_86.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_87.on('ready', () => {
	console.log(`USER_87 ${user_87.user.tag}!`);
	user_87.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_87.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_88.on('ready', () => {
	console.log(`USER_88 ${user_88.user.tag}!`);
	user_88.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_88.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_89.on('ready', () => {
	console.log(`USER_89 ${user_89.user.tag}!`);
	user_89.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_89.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_90.on('ready', () => {
	console.log(`USER_90 ${user_90.user.tag}!`);
	user_90.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_90.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_91.on('ready', () => {
	console.log(`USER_91 ${user_91.user.tag}!`);
	user_91.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_91.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_92.on('ready', () => {
	console.log(`USER_92 ${user_92.user.tag}!`);
	user_92.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_92.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_93.on('ready', () => {
	console.log(`USER_93 ${user_93.user.tag}!`);
	user_93.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_93.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_94.on('ready', () => {
	console.log(`USER_94 ${user_94.user.tag}!`);
	user_94.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_94.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_95.on('ready', () => {
	console.log(`USER_95 ${user_95.user.tag}!`);
	user_95.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_95.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_96.on('ready', () => {
	console.log(`USER_96 ${user_96.user.tag}!`);
	user_96.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_96.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_97.on('ready', () => {
	console.log(`USER_97 ${user_97.user.tag}!`);
	user_97.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_97.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_98.on('ready', () => {
	console.log(`USER_98 ${user_98.user.tag}!`);
	user_98.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_98.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_99.on('ready', () => {
	console.log(`USER_99 ${user_99.user.tag}!`);
	user_99.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_99.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_100.on('ready', () => {
	console.log(`USER_100 ${user_100.user.tag}!`);
	user_100.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_100.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(true);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});


 //=============== armazenando tokens em .env ===============
user_1.login(process.env.token_1).catch(()=>{
      console.log("foi detectado user_1 inválido!");
  });
user_2.login(process.env.token_2).catch(()=>{
      console.log("foi detectado user_2 inválido!");
  });
user_3.login(process.env.token_3).catch(()=>{
      console.log("foi detectado user_3 inválido!");
  });
user_4.login(process.env.token_4).catch(()=>{
      console.log("foi detectado user_4 inválido!");
  });
user_5.login(process.env.token_5).catch(()=>{
      console.log("foi detectado user_5 inválido!");
  });
user_6.login(process.env.token_6).catch(()=>{
      console.log("foi detectado user_6 inválido!");
  });
user_7.login(process.env.token_7).catch(()=>{
      console.log("foi detectado user_7 inválido!");
  });
user_8.login(process.env.token_8).catch(()=>{
      console.log("foi detectado user_8 inválido!");
  });
user_9.login(process.env.token_9).catch(()=>{
      console.log("foi detectado user_9 inválido!");
  });
user_10.login(process.env.token_10).catch(()=>{
      console.log("foi detectado user_10 inválido!");
  });
user_11.login(process.env.token_11).catch(()=>{
      console.log("foi detectado user_11 inválido!");
  });
user_12.login(process.env.token_12).catch(()=>{
      console.log("foi detectado user_12 inválido!");
  });
user_13.login(process.env.token_13).catch(()=>{
      console.log("foi detectado user_13 inválido!");
  });
user_14.login(process.env.token_14).catch(()=>{
      console.log("foi detectado user_14 inválido!");
  });
user_15.login(process.env.token_15).catch(()=>{
      console.log("foi detectado user_15 inválido!");
  });
user_16.login(process.env.token_16).catch(()=>{
      console.log("foi detectado user_16 inválido!");
  });
user_17.login(process.env.token_17).catch(()=>{
      console.log("foi detectado user_17 inválido!");
  });
user_18.login(process.env.token_18).catch(()=>{
      console.log("foi detectado user_18 inválido!");
  });
user_19.login(process.env.token_19).catch(()=>{
      console.log("foi detectado user_19 inválido!");
  });
user_20.login(process.env.token_20).catch(()=>{
      console.log("foi detectado user_20 inválido!");
  });
user_21.login(process.env.token_21).catch(()=>{
      console.log("foi detectado user_21 inválido!");
  });
user_22.login(process.env.token_22).catch(()=>{
      console.log("foi detectado user_22 inválido!");
  });
user_23.login(process.env.token_23).catch(()=>{
      console.log("foi detectado user_23 inválido!");
  });
user_24.login(process.env.token_24).catch(()=>{
      console.log("foi detectado user_24 inválido!");
  });
user_25.login(process.env.token_25).catch(()=>{
      console.log("foi detectado user_25 inválido!");
  });
user_26.login(process.env.token_26).catch(()=>{
      console.log("foi detectado user_26 inválido!");
  });
user_27.login(process.env.token_27).catch(()=>{
      console.log("foi detectado user_27 inválido!");
  });
user_28.login(process.env.token_28).catch(()=>{
      console.log("foi detectado user_28 inválido!");
  });
user_29.login(process.env.token_29).catch(()=>{
      console.log("foi detectado user_29 inválido!");
  });
user_30.login(process.env.token_30).catch(()=>{
      console.log("foi detectado user_30 inválido!");
  });
user_31.login(process.env.token_31).catch(()=>{
      console.log("foi detectado user_31 inválido!");
  });
user_32.login(process.env.token_32).catch(()=>{
      console.log("foi detectado user_32 inválido!");
  });
user_33.login(process.env.token_33).catch(()=>{
      console.log("foi detectado user_33 inválido!");
  });
user_34.login(process.env.token_34).catch(()=>{
      console.log("foi detectado user_34 inválido!");
  });
user_35.login(process.env.token_35).catch(()=>{
      console.log("foi detectado user_35 inválido!");
  });
user_36.login(process.env.token_36).catch(()=>{
      console.log("foi detectado user_36 inválido!");
  });
user_37.login(process.env.token_37).catch(()=>{
      console.log("foi detectado user_37 inválido!");
  });
user_38.login(process.env.token_38).catch(()=>{
      console.log("foi detectado user_38 inválido!");
  });
user_39.login(process.env.token_39).catch(()=>{
      console.log("foi detectado user_39 inválido!");
  });
user_40.login(process.env.token_40).catch(()=>{
      console.log("foi detectado user_40 inválido!");
  });
user_41.login(process.env.token_41).catch(()=>{
      console.log("foi detectado user_41 inválido!");
  });
user_42.login(process.env.token_42).catch(()=>{
      console.log("foi detectado user_42 inválido!");
  });
user_43.login(process.env.token_43).catch(()=>{
      console.log("foi detectado user_43 inválido!");
  });
user_44.login(process.env.token_44).catch(()=>{
      console.log("foi detectado user_44 inválido!");
  });
user_45.login(process.env.token_45).catch(()=>{
      console.log("foi detectado user_45 inválido!");
  });
user_46.login(process.env.token_46).catch(()=>{
      console.log("foi detectado user_46 inválido!");
  });
user_47.login(process.env.token_47).catch(()=>{
      console.log("foi detectado user_47 inválido!");
  });
user_48.login(process.env.token_48).catch(()=>{
      console.log("foi detectado user_48 inválido!");
  });
user_49.login(process.env.token_49).catch(()=>{
      console.log("foi detectado user_49 inválido!");
  });
user_50.login(process.env.token_50).catch(()=>{
      console.log("foi detectado user_50 inválido!");
  });
user_51.login(process.env.token_51).catch(()=>{
      console.log("foi detectado user_51 inválido!");
  });
user_52.login(process.env.token_52).catch(()=>{
      console.log("foi detectado user_52 inválido!");
  });
user_53.login(process.env.token_53).catch(()=>{
      console.log("foi detectado user_53 inválido!");
  });
user_54.login(process.env.token_54).catch(()=>{
      console.log("foi detectado user_54 inválido!");
  });
user_55.login(process.env.token_55).catch(()=>{
      console.log("foi detectado user_55 inválido!");
  });
user_56.login(process.env.token_56).catch(()=>{
      console.log("foi detectado user_56 inválido!");
  });
user_57.login(process.env.token_57).catch(()=>{
      console.log("foi detectado user_57 inválido!");
  });
user_58.login(process.env.token_58).catch(()=>{
      console.log("foi detectado user_58 inválido!");
  });
user_59.login(process.env.token_59).catch(()=>{
      console.log("foi detectado user_59 inválido!");
  });
user_60.login(process.env.token_60).catch(()=>{
      console.log("foi detectado user_60 inválido!");
  });
user_61.login(process.env.token_61).catch(()=>{
      console.log("foi detectado user_61 inválido!");
  });
user_62.login(process.env.token_62).catch(()=>{
      console.log("foi detectado user_62 inválido!");
  });
user_63.login(process.env.token_63).catch(()=>{
      console.log("foi detectado user_63 inválido!");
  });
user_64.login(process.env.token_64).catch(()=>{
      console.log("foi detectado user_64 inválido!");
  });
user_65.login(process.env.token_65).catch(()=>{
      console.log("foi detectado user_65 inválido!");
  });
user_66.login(process.env.token_66).catch(()=>{
      console.log("foi detectado user_66 inválido!");
  });
user_67.login(process.env.token_67).catch(()=>{
      console.log("foi detectado user_67 inválido!");
  });
user_68.login(process.env.token_68).catch(()=>{
      console.log("foi detectado user_68 inválido!");
  });
user_69.login(process.env.token_69).catch(()=>{
      console.log("foi detectado user_69 inválido!");
  });
user_70.login(process.env.token_70).catch(()=>{
      console.log("foi detectado user_70 inválido!");
  });
user_71.login(process.env.token_71).catch(()=>{
      console.log("foi detectado user_71 inválido!");
  });
user_72.login(process.env.token_72).catch(()=>{
      console.log("foi detectado user_72 inválido!");
  });
user_73.login(process.env.token_73).catch(()=>{
      console.log("foi detectado user_73 inválido!");
  });
user_74.login(process.env.token_74).catch(()=>{
      console.log("foi detectado user_74 inválido!");
  });
user_75.login(process.env.token_75).catch(()=>{
      console.log("foi detectado user_75 inválido!");
  });
user_76.login(process.env.token_76).catch(()=>{
      console.log("foi detectado user_76 inválido!");
  });
user_77.login(process.env.token_77).catch(()=>{
      console.log("foi detectado user_77 inválido!");
  });
user_78.login(process.env.token_78).catch(()=>{
      console.log("foi detectado user_78 inválido!");
  });
user_79.login(process.env.token_79).catch(()=>{
      console.log("foi detectado user_79 inválido!");
  });
user_80.login(process.env.token_80).catch(()=>{
      console.log("foi detectado user_80 inválido!");
  });
user_81.login(process.env.token_81).catch(()=>{
      console.log("foi detectado user_81 inválido!");
  });
user_82.login(process.env.token_82).catch(()=>{
      console.log("foi detectado user_82 inválido!");
  });
user_83.login(process.env.token_83).catch(()=>{
      console.log("foi detectado user_83 inválido!");
  });
user_84.login(process.env.token_84).catch(()=>{
      console.log("foi detectado user_84 inválido!");
  });
user_85.login(process.env.token_85).catch(()=>{
      console.log("foi detectado user_85 inválido!");
  });
user_86.login(process.env.token_86).catch(()=>{
      console.log("foi detectado user_86 inválido!");
  });
user_87.login(process.env.token_87).catch(()=>{
      console.log("foi detectado user_87 inválido!");
  });
user_88.login(process.env.token_88).catch(()=>{
      console.log("foi detectado user_88 inválido!");
  });
user_89.login(process.env.token_89).catch(()=>{
      console.log("foi detectado user_89 inválido!");
  });
user_90.login(process.env.token_90).catch(()=>{
      console.log("foi detectado user_90 inválido!");
  });
user_91.login(process.env.token_91).catch(()=>{
      console.log("foi detectado user_91 inválido!");
  });
user_92.login(process.env.token_92).catch(()=>{
      console.log("foi detectado user_92 inválido!");
  });
user_93.login(process.env.token_93).catch(()=>{
      console.log("foi detectado user_93 inválido!");
  });
user_94.login(process.env.token_94).catch(()=>{
      console.log("foi detectado user_94 inválido!");
  });
user_95.login(process.env.token_95).catch(()=>{
      console.log("foi detectado user_95 inválido!");
  });
user_96.login(process.env.token_96).catch(()=>{
      console.log("foi detectado user_96 inválido!");
  });
user_97.login(process.env.token_97).catch(()=>{
      console.log("foi detectado user_97 inválido!");
  });
user_98.login(process.env.token_98).catch(()=>{
      console.log("foi detectado user_98 inválido!");
  });
user_99.login(process.env.token_99).catch(()=>{
      console.log("foi detectado user_99 inválido!");
  });
user_100.login(process.env.token_100).catch(()=>{
      console.log("foi detectado user_100 inválido!");
  });