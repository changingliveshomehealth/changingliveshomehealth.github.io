

window.onload = () => {
	var h = document.getElementById('Banner').clientHeight;
	if (h < 650) {
		console.log(h);		
		document.getElementById('BS').classList.add('hidden');
		toggleVisibility('BS');
	}
	}
	
	function toggleVisibility(id) {
		var el = document.getElementById(id);
		el.style.visibility = el.style.visibility === 'hidden' ? 'visible' : 'hidden';
	}

window.onscroll = () => {

	const contacts = document.querySelector('.navbar__nav');
	const services = document.querySelector('.MainMenuServices');
	const logo = document.querySelector('.MainMenuLogotype');
	const wrapperLS = document.querySelector('.wrapper__logoserv');
	const wrapperNB = document.querySelector('.wrapper__navbar');

	const maxServicesY = 700;
	
	const y = window.scrollY;
		
	if (y > maxServicesY){
		contacts.classList.add('contacts_fixed');
		services.classList.add('services_fixed');
		logo.classList.add('logo_fixed');	
		wrapperLS.classList.add('wrapper_fixed');	
		wrapperNB.classList.add('wrapperNB_fixed');
	}else if (y < maxServicesY) {
		contacts.classList.remove('contacts_fixed');
		services.classList.remove('services_fixed');
		logo.classList.remove('logo_fixed');	
		wrapperLS.classList.remove('wrapper_fixed');
		wrapperNB.classList.remove('wrapperNB_fixed');
	}
}

function openPopup() {
	var popup = document.querySelector('.popup');
	popup.style.display = 'block';
}

function closePopup() {
	var popup = document.querySelector('.popup');
	popup.style.display = 'none';
}

function openMobilePopup() {
	var popup = document.querySelector('.mobilePopup');
	popup.style.display = 'block';
}

function closeMobilePopup() {
	var popup = document.querySelector('.mobilePopup');
	popup.style.display = 'none';
}

function closeHamburger() {
	var mi = document.querySelector('.menu-items');
	
	var l1 = document.querySelector('.line1');
	var l2 = document.querySelector('.line2');
	var l3 = document.querySelector('.line3');

	var logo = document.querySelector('.logo');
	var content = document.querySelector('.content');

	l1.style.transform = "rotate(0deg)";
	l2.style.transform = "scaleY(1)";
	l3.style.transform = "rotate(0deg)";


	mi.style.transform = "translateX(-150%)";

	document.getElementById('hamburgerCheckbox').checked = false;
}

function openHamburger() {
	var mi = document.querySelector('.menu-items');
	
	var l1 = document.querySelector('.line1');
	var l2 = document.querySelector('.line2');
	var l3 = document.querySelector('.line3');

	var logo = document.querySelector('.logo');
	var content = document.querySelector('.content');

	l1.style.transform = "rotate(45deg)";
	l2.style.transform = "scaleY(0)";
	l3.style.transform = "rotate(-45deg)";


	mi.style.transform = "translateX(0)";

	document.getElementById('hamburgerCheckbox').checked = true;
}

function Hamburger() {
	if (document.getElementById('hamburgerCheckbox').checked) 
	{
		openHamburger();
	} else {
		closeHamburger();
	}
}



const elemLogin = document.querySelector('#login');
const elemCounter = elemLogin.nextElementSibling;
const maxLength = elemLogin.maxLength;
const updateCounter = (e) => {
  const len = e ? e.target.value.length : 0;
  elemCounter.textContent = `${len} / ${maxLength}`;
}
updateCounter();
elemLogin.addEventListener('keyup', updateCounter);
elemLogin.addEventListener('keydown', updateCounter);



  