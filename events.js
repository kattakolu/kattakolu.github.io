var x = document.querySelector('#x');
var links = document.querySelector('.links');
var nav = document.querySelector('.navbary');
var more = document.querySelector('#more');
var para = document.querySelector('.para');



x.addEventListener('click', ()=>{
	if(links.classList.contains('hidden')){
		nav.style.height = "500px";
		links.classList.remove('hidden');
	}
	else{
		links.classList.add('hidden');
		nav.style.height = "100px";
	}
})


more.addEventListener('click', ()=>{
	if(para.classList.contains('hide')){
		para.classList.remove('hide');
		more.innerText = 'Less Details';
	}
	else{
		para.classList.add('hide');
		more.innerText = 'More Details';
	}
});	