

window.onscroll = () => {
	const contacts = document.querySelector('.navbar__nav');
	const services = document.querySelector('.MainMenuServices');
	const logo = document.querySelector('.MainMenuLogotype');
	const wrapper = document.querySelector('.wrapper__logoserv');

	const maxServicesY = 832;
	
	const y = window.scrollY;

	if (y > 200){
		contacts.classList.add('contacts_fixed');
	}else if (y < 200) {
		contacts.classList.remove('contacts_fixed');
	}
		
	if (y > maxServicesY){
		services.classList.add('services_fixed');
		logo.classList.add('logo_fixed');	
		wrapper.classList.add('wrapper_fixed');	
	}else if (y < maxServicesY) {
		services.classList.remove('services_fixed');
		logo.classList.remove('logo_fixed');	
		wrapper.classList.remove('wrapper_fixed');
	}


	console.log(y);



}