import { createApp } from 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.esm-browser.prod.min.js'


createApp({
	data() {
		return {
			wedding_list: [
				{
					"date": "2023-05-07 09:30:00",
					"male": "麒麟湾",
					"female": "临城县城",
					"hall": "碧海美食园",
					"contact": "15369983845 马九堂",
					"tail": 840,
					"more": "39座大巴*1（九点半抵达临城县城接人，婚礼结束之后将客人送回临城县城）"
				},
				{
					"date": "2023-05-08 05:00:00",
					"male": "冯家寨乡",
					"female": "平乡县寺头村",
					"hall": "义和饭店",
					"contact": "18131943006 许亚松",
					"tail": 5000,
					"more": "劳斯莱斯幻影*1"
				},
				{
					"date": "2023-05-10 08:00:00",
					"male": "全都城乐府",
					"female": "东城名居",
					"hall": "马凯新时代",
					"contact": "18506404997 宋志青",
					"tail": 2000,
					"more": "迈巴赫*1、奔驰E*5"
				},
				{
					"date": "2023-06-25 07:00:00",
					"male": "自然城1期",
					"female": "县政府北门金厦北区",
					"hall": "景仙商务酒店",
					"contact": "15230165735 吉星阁",
					"tail": 3700,
					"more": "奥迪A8*1、奥迪A6*7、炮车*1、55座大巴*1（大巴需将客人送回任县）"
				},
				{
					"date": "2023-07-25 07:00:00",
					"male": "全都城乐府",
					"female": "交通花苑",
					"hall": "马凯贵宾楼开元路店",
					"contact": "18631961616 王宇涵",
					"tail": 800,
					"more": "奔驰S"
				}
			],
			business_list: 'business_list'
		}
	}
}).mount('#wedding')