//email输入框的标签缩小
$('.email__input').on('focus',function() {
	$('.email__label').addClass('small__form__label');
})

//密码输入框的标签缩小
$('.pwd__input').on('focus',function() {
	$('.pwd__label').addClass('small__form__label');
})

//判断输入框是否有内容，然后为 Submit 按钮添加动画
$('.pwd__input').on('change',function() {
	$('.btn').addClass('animated infinite pulse delay-0.7s');
})
