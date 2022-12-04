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



// trata erros
process.on('unhandledRejection', e => {});
process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});



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


user_1.login("").catch(()=>{
      console.log("user_1 Bot_MUSICA inoperante");
      return;
  });
user_2.login("").catch(()=>{
      console.log("user_2 Bot_MUSICA inoperante!");
      return;
  });  
user_3.login("").catch(()=>{
    console.log("user_3 Bot_MUSICA inoperante!");
    return;
});
user_4.login("").catch(()=>{
  console.log("user_4 Bot_MUSICA inoperante!");
  return;
});
user_5.login("").catch(()=>{
  console.log("user_5 Bot_MUSICA inoperante!");
  return;
});
user_6.login("").catch(()=>{
  console.log("user_6 Bot_MUSICA inoperante!");
  return;
});
user_7.login("").catch(()=>{
  console.log("user_7 Bot_MUSICA inoperante!");
  return;
});
user_8.login("").catch(()=>{
  console.log("user_8 Bot_MUSICA inoperante!");
  return;
});
user_9.login("").catch(()=>{
  console.log("user_9 Bot_MUSICA inoperante!");
  return;
});
user_10.login("").catch(()=>{
  console.log("user_10 Bot_MUSICA inoperante!");
  return;
});
user_11.login("").catch(()=>{
  console.log("user_11 Bot_MUSICA inoperante!");
  return;
});
user_12.login("").catch(()=>{
  console.log("user_12 Bot_MUSICA inoperante!");
  return;
});
user_13.login("").catch(()=>{
  console.log("user_13 Bot_MUSICA inoperante!");
  return;
});
user_14.login("").catch(()=>{
  console.log("user_14 Bot_MUSICA inoperante!");
  return;
});
user_15.login("").catch(()=>{
  console.log("user_15 Bot_MUSICA inoperante!");
  return;
});
user_16.login("").catch(()=>{
  console.log("user_16 Bot_MUSICA inoperante!");
  return;
});
user_17.login("").catch(()=>{
  console.log("user_17 Bot_MUSICA inoperante!");
  return;
});
user_18.login("").catch(()=>{
  console.log("user_18 Bot_MUSICA inoperante!");
  return;
});
user_19.login("").catch(()=>{
  console.log("user_19 Bot_MUSICA inoperante!");
  return;
});
user_20.login("").catch(()=>{
  console.log("user_20 Bot_MUSICA inoperante!");
  return;
});
user_21.login("").catch(()=>{
  console.log("user_21 Bot_MUSICA inoperante!");
  return;
});
user_22.login("").catch(()=>{
  console.log("user_22 Bot_MUSICA inoperante!");
  return;
});
user_23.login("").catch(()=>{
  console.log("user_23 Bot_MUSICA inoperante!");
  return;
});
user_24.login("").catch(()=>{
  console.log("user_24 Bot_MUSICA inoperante!");
  return;
});
user_25.login("").catch(()=>{
  console.log("user_25 Bot_MUSICA inoperante!");
  return;
});
user_26.login("").catch(()=>{
  console.log("user_26 Bot_MUSICA inoperante!");
  return;
});
user_27.login("").catch(()=>{
  console.log("user_27 Bot_MUSICA inoperante!");
  return;
});
user_28.login("").catch(()=>{
  console.log("user_28 Bot_MUSICA inoperante!");
  return;
});
user_29.login("").catch(()=>{
  console.log("user_29 Bot_MUSICA inoperante!");
  return;
});
user_30.login("").catch(()=>{
  console.log("user_30 Bot_MUSICA inoperante!");
  return;
});
user_31.login("").catch(()=>{
  console.log("user_31 Bot_MUSICA inoperante!");
  return;
});
user_32.login("").catch(()=>{
  console.log("user_32 Bot_MUSICA inoperante!");
  return;
});
user_33.login("").catch(()=>{
  console.log("user_33 Bot_MUSICA inoperante!");
  return;
});
user_34.login("").catch(()=>{
  console.log("user_34 Bot_MUSICA inoperante!");
  return;
});
user_35.login("").catch(()=>{
  console.log("user_35 Bot_MUSICA inoperante!");
  return;
});
user_36.login("").catch(()=>{
  console.log("user_36 Bot_MUSICA inoperante!");
  return;
});
user_37.login("").catch(()=>{
  console.log("user_37 Bot_MUSICA inoperante!");
  return;
});
user_38.login("").catch(()=>{
  console.log("user_38 Bot_MUSICA inoperante!");
  return;
});
user_39.login("").catch(()=>{
  console.log("user_39 Bot_MUSICA inoperante!");
  return;
});
user_40.login("").catch(()=>{
  console.log("user_40 Bot_MUSICA inoperante!");
  return;
});
user_41.login("").catch(()=>{
  console.log("user_41 Bot_MUSICA inoperante!");
  return;
});
user_42.login("").catch(()=>{
  console.log("user_42 Bot_MUSICA inoperante!");
  return;
});
user_43.login("").catch(()=>{
  console.log("user_43 Bot_MUSICA inoperante!");
  return;
});
user_44.login("").catch(()=>{
  console.log("user_44 Bot_MUSICA inoperante!");
  return;
});
user_45.login("").catch(()=>{
  console.log("user_45 Bot_MUSICA inoperante!");
  return;
});
user_46.login("").catch(()=>{
  console.log("user_46 Bot_MUSICA inoperante!");
  return;
});
user_47.login("").catch(()=>{
  console.log("user_47 Bot_MUSICA inoperante!");
  return;
});
user_48.login("").catch(()=>{
  console.log("user_48 Bot_MUSICA inoperante!");
  return;
});
user_49.login("").catch(()=>{
  console.log("user_49 Bot_MUSICA inoperante!");
  return;
});
user_50.login("").catch(()=>{
  console.log("user_50 Bot_MUSICA inoperante!");
  return;
});
user_51.login("").catch(()=>{
  console.log("user_51 Bot_MUSICA inoperante!");
  return;
});
user_52.login("").catch(()=>{
  console.log("user_52 Bot_MUSICA inoperante!");
  return;
});
user_53.login("").catch(()=>{
  console.log("user_53 Bot_MUSICA inoperante!");
  return;
});
user_54.login("").catch(()=>{
  console.log("user_54 Bot_MUSICA inoperante!");
  return;
});
user_55.login("").catch(()=>{
  console.log("user_56 Bot_MUSICA inoperante!");
  return;
});
user_56.login("").catch(()=>{
  console.log("user_56 Bot_MUSICA inoperante!");
  return;
});
user_57.login("").catch(()=>{
  console.log("user_57 Bot_MUSICA inoperante!");
  return;
});
user_58.login("").catch(()=>{
  console.log("user_58 Bot_MUSICA inoperante!");
  return;
});
user_59.login("").catch(()=>{
  console.log("user_59 Bot_MUSICA inoperante!");
  return;
});
user_60.login("").catch(()=>{
  console.log("user_60 Bot_MUSICA inoperante!");
  return;
});
user_61.login("").catch(()=>{
  console.log("user_61 Bot_MUSICA inoperante!");
  return;
});
user_62.login("").catch(()=>{
  console.log("user_62 Bot_MUSICA inoperante!");
  return;
});
user_63.login("").catch(()=>{
  console.log("user_63 Bot_MUSICA inoperante!");
  return;
});
user_64.login("").catch(()=>{
  console.log("user_64 Bot_MUSICA inoperante!");
  return;
});
user_65.login("").catch(()=>{
  console.log("user_65 Bot_MUSICA inoperante!");
  return;
});
user_66.login("").catch(()=>{
  console.log("user_66 Bot_MUSICA inoperante!");
  return;
});
user_67.login("").catch(()=>{
  console.log("user_67 Bot_MUSICA inoperante!");
  return;
});
user_68.login("").catch(()=>{
  console.log("user_68 Bot_MUSICA inoperante!");
  return;
});
user_69.login("").catch(()=>{
  console.log("user_69 Bot_MUSICA inoperante!");
  return;
});
user_70.login("").catch(()=>{
  console.log("user_70 Bot_MUSICA inoperante!");
  return;
});
user_71.login("").catch(()=>{
  console.log("user_71 Bot_MUSICA inoperante!");
  return;
});
user_72.login("").catch(()=>{
  console.log("user_72 Bot_MUSICA inoperante!");
  return;
});
user_73.login("").catch(()=>{
  console.log("user_73 Bot_MUSICA inoperante!");
  return;
});
user_74.login("").catch(()=>{
  console.log("user_74 Bot_MUSICA inoperante!");
  return;
});
user_75.login("").catch(()=>{
  console.log("user_75 Bot_MUSICA inoperante!");
  return;
});
user_76.login("").catch(()=>{
  console.log("user_76 Bot_MUSICA inoperante!");
  return;
});
user_77.login("").catch(()=>{
  console.log("user_77 Bot_MUSICA inoperante!");
  return;
});
user_78.login("").catch(()=>{
  console.log("user_78 Bot_MUSICA inoperante!");
  return;
});
user_79.login("").catch(()=>{
  console.log("user_79 Bot_MUSICA inoperante!");
  return;
});
user_80.login("").catch(()=>{
  console.log("user_80 Bot_MUSICA inoperante!");
  return;
});
user_81.login("").catch(()=>{
  console.log("user_81 Bot_MUSICA inoperante!");
  return;
});
user_82.login("").catch(()=>{
  console.log("user_82 Bot_MUSICA inoperante!");
  return;
});
user_83.login("").catch(()=>{
  console.log("user_83 Bot_MUSICA inoperante!");
  return;
});
user_84.login("").catch(()=>{
  console.log("user_84 Bot_MUSICA inoperante!");
  return;
});
user_85.login("").catch(()=>{
  console.log("user_85 Bot_MUSICA inoperante!");
  return;
});
user_86.login("").catch(()=>{
  console.log("user_86 Bot_MUSICA inoperante!");
  return;
});
user_87.login("").catch(()=>{
  console.log("user_87 Bot_MUSICA inoperante!");
  return;
});
user_88.login("").catch(()=>{
  console.log("user_88 Bot_MUSICA inoperante!");
  return;
});
user_89.login("").catch(()=>{
  console.log("user_89 Bot_MUSICA inoperante!");
  return;
});
user_90.login("").catch(()=>{
  console.log("user_90 Bot_MUSICA inoperante!");
  return;
});
user_91.login("").catch(()=>{
  console.log("user_91 Bot_MUSICA inoperante!");
  return;
});
user_92.login("").catch(()=>{
  console.log("user_92 Bot_MUSICA inoperante!");
  return;
});
user_93.login("").catch(()=>{
  console.log("user_93 Bot_MUSICA inoperante!");
  return;
});
user_94.login("").catch(()=>{
  console.log("user_94 Bot_MUSICA inoperante!");
  return;
});
user_95.login("").catch(()=>{
  console.log("user_95 Bot_MUSICA inoperante!");
  return;
});
user_96.login("").catch(()=>{
  console.log("user_96 Bot_MUSICA inoperante!");
  return;
});
user_97.login("").catch(()=>{
  console.log("user_97 Bot_MUSICA inoperante!");
  return;
});
user_98.login("").catch(()=>{
  console.log("user_98 Bot_MUSICA inoperante!");
  return;
});
user_99.login("").catch(()=>{
  console.log("user_99 Bot_MUSICA inoperante!");
  return;
});
user_100.login("").catch(()=>{
  console.log("user_100 Bot_MUSICA inoperante!");
  return;
});
