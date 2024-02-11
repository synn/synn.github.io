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
					"date": "231209 / 06:30",
					"male": "滨江美地",
					"female": "和谐雅居",
					"hall": "鑫秋饭店",
					"contact": "邵文星",
					"tail": 2000,
					"more": "奔驰S、奥迪A6L*3、老款奥迪A6*2（其中一辆白色，可以是其他车型）"
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