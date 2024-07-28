const langArr = {
	h1: {
		en: 'Text',
		es: 'Teкст',
	},

	btn: {
		en: 'Learn more',
		es: 'Узнать больше',
	},
};

document
	.querySelectorAll('.lang div span')
	.forEach((b) => b.addEventListener('click', setLang));

function setLang() {
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][this.value];
		}
	}
}