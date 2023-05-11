import { createApp } from 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.esm-browser.prod.min.js'


createApp({
	data() {
		return {
			wedding_list: [
				{
					"date": "6/25/2023  07:00:00",
					"male": "自然城1期",
					"female": "县政府北门金厦北区",
					"hall": "景仙商务酒店",
					"contact": "15230165735 吉星阁",
					"tail": 3700,
					"more": "奥迪A8*1、奥迪A6*7、炮车*1、55座大巴*1（大巴需将客人送回任县）"
				},
				{
					"date": "7/25/2023  07:00:00",
					"male": "全都城乐府",
					"female": "交通花苑",
					"hall": "马凯贵宾楼开元路店",
					"contact": "18631961616 王宇涵",
					"tail": 800,
					"more": "奔驰S"
				},
				{
					"date": "9/8/2023  07:00:00",
					"male": "化工局家属院",
					"female": "邢台八中",
					"hall": "天赐良缘大酒店",
					"contact": "13313199059 李浩",
					"tail": 1000,
					"more": "路虎揽胜加长*1"
				}
			],
			business_list: 'business_list'
		}
	}
}).mount('#wedding')