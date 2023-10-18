import { createApp } from 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.esm-browser.prod.min.js'


createApp({
	data() {
		return {
			nav: true,
			value: null,
			deposit: null,
			rent: null,
			gps: 2000,
			insurance: null,
			service: null,
			wedding_list: [
				{
					"date": "231118 / 07:00",
					"male": "南召马村",
					"female": "市区宾馆",
					"hall": "碧海",
					"contact": "16631905601 / 13513298524 李哲",
					"tail": 2840,
					"more": "奥迪A8*1、奥迪A6*7、红色炮车*1、白色宝马五系*1、尾款需核实"
				},
				{
					"date": "231120 / 07:00",
					"male": "凤巢园",
					"female": "盛世公馆",
					"hall": "川湘汇",
					"contact": "15603380663 赵景涛",
					"tail": 600,
					"more": "奔驰迈巴赫*1"
				},
				{
					"date": "231230 / 07:00",
					"male": "麒麟湾",
					"female": "邢洲大酒店",
					"hall": "碧海美食园",
					"contact": "13930908720 赵彦岭",
					"tail": 2300,
					"more": "真迈巴赫、奔驰E*5"
				},
				{
					"date": "240123 / 06:00",
					"male": "皓顺华悦城",
					"female": "沙河冀庄",
					"hall": "湘江酒店",
					"contact": "15530989091 冯一博",
					"tail": 1050,
					"more": "真迈巴赫、奔驰E*5"
				}
			]
		}
	}
}).mount('#content')