var tn = document.getElementsByClassName('thumbnail');  //所有的缩略图
var tnWrapper = document.getElementsByClassName('thumbnail-wrap')[0];  //父元素
var p = document.getElementsByClassName('pic');         //所有的大图

//初始状态
window.onload = function() {
	p[0].classList.add('pic1-effect');
}

tnWrapper.addEventListener('click',function(e) {
	if(e.target.className === 'thumbnail thum1') {
		p[0].classList.add('pic1-effect');
		p[1].setAttribute('style','z-index:1');
	}
	if(e.target.className === 'thumbnail thum2') {
		p[1].classList.add('pic2-effect');
		p[1].setAttribute('style','z-index:1');
	}
	if(e.target.className === 'thumbnail thum3') {
		p[2].classList.add('pic3-effect');
		p[2].setAttribute('style','z-index:1');
	}
	if(e.target.className === 'thumbnail thum4') {
		p[3].classList.add('pic4-effect');
		p[3].setAttribute('style','z-index:1');
	}
	if(e.target.className === 'thumbnail thum5') {
		p[4].classList.add('pic5-effect');
		p[4].setAttribute('style','z-index:1');
	}
	
})


