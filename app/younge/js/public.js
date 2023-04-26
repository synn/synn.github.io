import { createApp } from 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.esm-browser.prod.min.js'


createApp({
	data() {
		return {
			wedding_list: [
				{
					"date": "4/28/2023 07:00:00",
					"male": "天一华府",
					"female": "沙河郑召村",
					"hall": "碧海大酒店",
					"contact": "17731922563 马博",
					"tail": 2500,
					"more": "宾利*1、奔驰E*2"
				},
				{
					"date": "2023-05-01 07:00:00",
					"male": "都市港湾",
					"female": "市区酒店",
					"hall": "东方大厦",
					"contact": "18131859592 张杰",
					"tail": 2000,
					"more": "奔驰S*1、奔驰E*5"
				},
				{
					"date": "2023-05-01 09:00:00",
					"male": "河北路花卉小区",
					"female": "万峰大酒店",
					"hall": "福泉楼",
					"contact": "13785989870 曹现华",
					"tail": 3000,
					"more": "奔驰S600*1、奥迪A6*7、头车扎花、跟车彩带"
				},
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







// for (let i in car_info) {
//     console.log(car_info[i])
// }

// $(function () {
// 	// for (let i in car_info) {
// 	// 	$('#wedding-list li span').text(car_info[i]['date'])
// 	// }

// 	// 导航切换
// 	$('#nav-cha, #nav-tar, #nav-ave').click(function () {
// 		$('#nav-cha, #nav-tar, #nav-ave').removeClass('check');
// 		$('.cha, .tar, .ave').hide();
// 		$(this).addClass('check');
// 		$('.'+$(this).attr('id').substr(4)).show();
// 	});
// 	$('#nav-cha').click(function () {
// 		$('#cha-data-grp-ogn, #cha-data-grp-crt').val('');
// 		$('#result-tips-word').text('涨幅');
// 		$('#result-dis-sign').text('+');
// 		$('#result-dis-number').text('0%');
// 	});
// 	$('#nav-tar').click(function () {
// 		$('#tar-data-grp-ogn, #tar-data-grp-mar').val('');
// 		$('#result-tips-word').text('目标价格');
// 		$('#result-dis-sign').text('￥');
// 		$('#result-dis-number').text('0.00');
// 	});
// 	$('#nav-ave').click(function () {
// 		$('#ave-data-grp-ognprice, #ave-data-grp-ogncount, #ave-data-grp-nowprice, #ave-data-grp-dealcount').val('');
// 		$('#result-tips-word').text('平均成本');
// 		$('#result-dis-sign').text('￥');
// 		$('#result-dis-number').text('0.00');
// 	});

// 	// 标签清空
// 	$('.target').click(function () {
// 		$('#'+$(this).attr('for')).val('');
// 	});
// });