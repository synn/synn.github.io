$(function () {
	// 导航切换
	$('#nav-cha, #nav-tar, #nav-ave, #nav-kzz, #nav-rate, #nav-annual').click(function () {
		$('#nav-cha, #nav-tar, #nav-ave, #nav-kzz, #nav-rate, #nav-annual').removeClass('check');
		$('.cha, .tar, .ave, .kzz, .rate, .annual').hide();
		$(this).addClass('check');
		$('.'+$(this).attr('id').substr(4)).show();
	});
	$('#nav-cha').click(function () {
		$('#cha-data-grp-ogn, #cha-data-grp-crt').val('');
		$('#result-tips-word').text('涨幅');
		$('#result-dis-sign').text('+');
		$('#result-dis-number').text('0%');
	});
	$('#nav-tar').click(function () {
		$('#tar-data-grp-ogn, #tar-data-grp-mar').val('');
		$('#result-tips-word').text('目标价格');
		$('#result-dis-sign').text('￥');
		$('#result-dis-number').text('0.00');
	});
	$('#nav-ave').click(function () {
		$('#ave-data-grp-ognprice, #ave-data-grp-ogncount, #ave-data-grp-nowprice, #ave-data-grp-dealcount').val('');
		$('#result-tips-word').text('平均成本');
		$('#result-dis-sign').text('￥');
		$('#result-dis-number').text('0.00');
	});
	$('#nav-kzz').click(function () {
		$('#kzz-data-grp-basis, #kzz-data-grp-amp').val('');
		$('#result-tips-word').text('目标价格');
		$('#result-dis-sign').text('￥');
		$('#result-dis-number').text('0.00');
	});
	$('#nav-rate').click(function () {
		$('#rate-data-grp-capital, #rate-data-grp-interest, #rate-data-grp-period').val('');
		$('#result-tips-word').text('实际利率');
		$('#result-dis-sign').text('%');
		$('#result-dis-number').text('0.00');
	});
	$('#nav-annual').click(function () {
		$('#annual-data-grp-cost, #annual-data-grp-interest, #annual-data-grp-period, #annual-data-grp-return').val('');
		$('#result-tips-word').text('复合年化收益');
		$('#result-dis-sign').text('%');
		$('#result-dis-number').text('0.00');
	});

	// 涨跌幅计算
	$('#cha-btn-grp-comp').click(function () {
		let ogn = parseFloat($('#cha-data-grp-ogn').val());
		let crt = parseFloat($('#cha-data-grp-crt').val());
		let result = ((crt - ogn) / ogn * 100).toFixed(2);
		$('#result-dis-number').text(Math.abs(result) + '%');
		if (crt - ogn >= 0) {
			$('#result-tips-word').text('涨幅');
			$('#result-dis-sign').text('+');
		} else {
			$('#result-tips-word').text('跌幅');
			$('#result-dis-sign').text('-');
		};
	});
	$('#cha-btn-grp-reset').click(function () {
		$('#cha-data-grp-ogn, #cha-data-grp-crt').val('');
		$('#result-tips-word').text('涨幅');
		$('#result-dis-sign').text('+');
		$('#result-dis-number').text('0%');
	});

	// 目标金额计算
	$('#tar-btn-grp-comp').click(function () {
		let ogn = parseFloat($('#tar-data-grp-ogn').val());
		let mar = parseFloat($('#tar-data-grp-mar').val());
		let result = (ogn * (1 + (mar / 100))).toFixed(2);
		$('#result-dis-number').text(result);
	});
	$('#tar-btn-grp-reset').click(function () {
		$('#tar-data-grp-ogn, #tar-data-grp-mar').val('');
		$('#result-dis-number').text('0.00');
	});

	// 平均成本计算
	$('#ave-btn-grp-comp').click(function () {
		let op = parseFloat($('#ave-data-grp-ognprice').val());
		let oc = parseFloat($('#ave-data-grp-ogncount').val());
		let np = parseFloat($('#ave-data-grp-nowprice').val());
		let dc = parseFloat($('#ave-data-grp-dealcount').val());
		let result = ((op * oc + np * dc) / (oc + dc)).toFixed(2);
		$('#result-dis-number').text(result);
	});
	$('#ave-btn-grp-reset').click(function () {
		$('#ave-data-grp-ognprice, #ave-data-grp-ogncount, #ave-data-grp-nowprice, #ave-data-grp-dealcount').val('');
		$('#result-dis-number').text('0.00');
	});

	// 可转债价格计算
	$('#kzz-btn-grp-comp').click(function () {
		let cp = parseFloat($('#kzz-data-grp-trans').val());
		let np = parseFloat($('#kzz-data-grp-price').val());
		let sr = $('#kzz-data-grp-spill').val() != '' ? parseFloat($('#kzz-data-grp-spill').val()) : 20;
		let result = (np / cp * ( 1 + sr / 100 ) * 100).toFixed(2)
		$('#result-dis-number').text(result);
	});
	$('#kzz-btn-grp-reset').click(function () {
		$('#kzz-data-grp-trans, #kzz-data-grp-price, #kzz-data-grp-spill').val('');
		$('#result-dis-number').text('0.00');
	});

	// 利率计算
	$('#rate-btn-grp-comp').click(function () {
		let cp = parseFloat($('#rate-data-grp-capital').val());
		let ir = parseFloat($('#rate-data-grp-interest').val());
		let pr = $('#rate-data-grp-period').val() != '' ? parseFloat($('#rate-data-grp-period').val()) : 24;
		let result = ((ir / pr / cp) * ((pr ** 2) / ((1 + pr) * pr / 2)) * 12 * 100).toFixed(2)
		$('#result-dis-number').text(result);
	});
	$('#rate-btn-grp-reset').click(function () {
		$('#rate-data-grp-capital, #rate-data-grp-interest, #rate-data-grp-period').val('');
		$('#result-dis-number').text('0.00');
	});

	// 年化收益
	$('#annual-btn-grp-comp').click(function () {
		let cs = parseFloat($('#annual-data-grp-cost').val());
		let ir = parseFloat($('#annual-data-grp-interest').val());
		let pr = $('#annual-data-grp-period').val() != '' ? parseFloat($('#annual-data-grp-period').val()) : 36;
		let rt = $('#annual-data-grp-return').val() != '' ? parseFloat($('#annual-data-grp-return').val()) : 0;
		let result = (((((ir + rt) / cs) ** (1 / (pr / 12))) - 1) * 100).toFixed(2);
		$('#result-dis-number').text(result);
	});
	$('#annual-btn-grp-reset').click(function () {
		$('#annual-data-grp-cost, #annual-data-grp-interest, #annual-data-grp-period, #annual-data-grp-return').val('');
		$('#result-dis-number').text('0.00');
	});

	// 标签清空
	$('.target').click(function () {
		$('#'+$(this).attr('for')).val('');
	});
});