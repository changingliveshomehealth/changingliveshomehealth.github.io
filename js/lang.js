// Локализация
document.addEventListener('DOMContentLoaded', function() {
	const langElements = document.querySelectorAll('[data-i18n]');
	const languageToggle = {
		currentLang: localStorage.getItem('lang') || 'en',
		
		translations: {
			en: {
				BannerMessageCaption: "Changing Lives Home Health",
				BannerMessageMainText: `<span>Changing Lives Home Health is based in Glendale, California. <br/>We are a Medicare-certified home health agency that continuously cares for and caters to the needs of the elderly, injured, and individuals with chronic disorders.</span>`,
				PhoneCaption: "Phone:",
				// Добавьте другие элементы по аналогии
			},
			es: {
				BannerMessageCaption: "Cambiando Vidas Cuidado de Salud en el Hogar",
				BannerMessageMainText: `<span>Cambiando Vidas Cuidado de Salud en el Hogar tiene su sede en Glendale, California. <br/>Somos una agencia de atención médica en el hogar certificada por Medicare que continuamente cuida y atiende las necesidades de ancianos, lesionados y personas con trastornos crónicos.</span>`,
				PhoneCaption: "Teléfono:",
				// Добавьте другие элементы по аналогии
			}
		},

		applyTranslations() {
			langElements.forEach(el => {
				const key = el.dataset.i18n;
				if(this.translations[this.currentLang][key]) {
					el.innerHTML = this.translations[this.currentLang][key];
				}
			});

			// Обновление статичных элементов
			document.querySelectorAll('.PhoneCaption').forEach(el => {
				el.textContent = this.translations[this.currentLang].PhoneCaption;
			});
		},

		init() {
			// Обработчики переключения языка
			document.querySelectorAll('.locale-change-es').forEach(btn => {
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					this.currentLang = 'es';
					localStorage.setItem('lang', 'es');
					this.applyTranslations();
				});
			});

			document.querySelectorAll('.locale-change-en').forEach(btn => {
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					this.currentLang = 'en';
					localStorage.setItem('lang', 'en');
					this.applyTranslations();
				});
			});

			this.applyTranslations();
		}
	};

	languageToggle.init();
});