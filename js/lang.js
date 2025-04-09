document.addEventListener('DOMContentLoaded', function() {
	const langElements = document.querySelectorAll('[data-i18n]');
	const languageToggle = {
		currentLang: localStorage.getItem('lang') || 'en',
		
		// data-i18n=""

		translations: {
			en: {
				// Buttons
				ContactUsButton: "Contact Us",
				SubmitButton: "Submit",
				OpenMapButton: "Open Map",
				BackToFormButton: "Back to Form",

				// Banner
				BannerMessageCaption: "Changing Lives Home Health",
				BannerMessageMainText: `<span>Changing Lives Home Health is based in Glendale, California. <br/>We are a Medicare-certified home health agency that continuously cares for and caters to the needs of the elderly, injured, and individuals with chronic disorders.</span>`,			

				SkilledNursingShort: "Skilled<br/>Nursing",
				PhysicalTherapyShort: "Physical<br/>Therapy",
				SpeechTherapyShort: "Speech<br/>Therapy",
				OccupationalTherapyShort: "Occupational<br/>Therapy",
				MedicalSocialShort: "Medical Social<br/>Worker",
				HomeHealthAideShort: "Home Health<br/>Aide",

				// Contacts
                PhoneCaption: "Phone:",
                LocationText: "Location",
                
                // Services
                SkilledNursing: "<span>SKILLED NURSING</span>",
				SkilledNursingMainText: "<span>• Wound care<br/>• Medication management<br/>• Patient education<br/>• Diabetic teaching<br/>• Incontinence care<br/>• IV therapy<br/>• Enteral Nutrition<br/>• Pre-Op and Post-Op Care<br/>• Ostomy care and teachings<br/>• Оur nurses speak Spanish<br></span>",
                PhysicalTherapy: "PHYSICAL THERAPY",
				PhysicalTherapyMainText: "<span>• Restoration of specific functional loss, <br/>range of motion, and strength<br/>• Adaptive equipment utilization instruction<br/>• Rehabilitation assistance<br/>• Instruction on the safe use of assistive devices<br/>• Safe ambulation and transfers<br/>• Fall and injury prevention</span>",
                SpeechTherapy: "SPEECH THERAPY",
				SpeechTherapyMainText: "<span>• Assistance in regaining<br/> speech abilities<br/>• Instruction on<br/> communication and<br/> swallowing techniques<br/>• Intervention for hearing<br/> impairment and<br/> neurological disorders</span>",
                OccupationalTherapy: "OCCUPATIONAL THERAPY",
				OccupationalTherapyMainText: "<span>• Therapeutic exercises for<br/>activities of daily living skills<br/>• Instructions on orthopedic<br/>devices and energy<br/>conservation exercises</span>",
                MedicalSocial: "MEDICAL SOCIAL WORKER",
				MedicalSocialMainText: "<span>• Assisting in claiming financial<br/>and social resources for<br/>optimum level of care<br/>• Assisting in dealing with social<br/>and emotional factors relating to<br/>illness</span>",
                HomeHealthAide: "HOME HEALTH AIDE",
				HomeHealthAideMainText: "<span>• Personal Care</span>",
                
                // Contact Us
                ContactUsTitle: "Contact Us",
                EmailLabel: "Email",
                NameLabel: "Name",
                MessageLabel: "Message",
                SuccessMessage: "Sended! 🎉",
                SuccessText: "We'll contact you soon.",                
                
                // Location
                LocationTitle: "Location",
                AddressLine1: "805 E Wilson Ave Unit B",
                AddressLine2: "Glendale, CA, 91206",
                
                // Career
                CareerTitle: "Career Opportunities",
                CareerList: `We have openings for <br/>
                            • Registered Nurses <br/>
                            • License Vocational Nurses<br/>
                            • Physical Therapists<br/>
                            • Occupational Therapists<br/>
                            • Home Health Aide <br/>
                            • Medical Social Worker`,
                
                // Footer
                MedicareCertified: "A Medicare Certified <br/>Home Health Agency",
                ChapAccredited: "CHAP Accredited",
                Copyright: "© Copyright 2025. All Rights Reserved.",
                OpeningHours: "Opening Hours",
                HoursLine1: "Monday – Friday<br/>10:00 AM to 5:00 PM",
                HoursLine2: "On-Call Nurse Available by Telephone<br/>24 hours a day , 7 days a week"
			},
			es: {
				// Buttons
				ContactUsButton: "Contáctenos",
				SubmitButton: "Entregar",
				OpenMapButton: "Abrir mapa",
				BackToFormButton: "Volver al formulario",

				// Banner
				BannerMessageCaption: "Cambiando Vidas Cuidado de Salud en el Hogar",
				BannerMessageMainText: `<span>Cambiando Vidas Cuidado de Salud en el Hogar <br/>tiene su sede en Glendale, California. <br/>Somos una agencia de atención médica en el hogar certificada por Medicare que continuamente cuida y atiende las necesidades de ancianos, lesionados y personas con trastornos crónicos.</span>`,

				SkilledNursingShort: "Enfermería<br/>Especializada",
				PhysicalTherapyShort: "Terapia<br/>Física",
				SpeechTherapyShort: "Terapia<br/>del Habla",
				OccupationalTherapyShort: "Terapia<br/>Ocupacional",
				MedicalSocialShort: "Trabajador<br/>Social Médico",
				HomeHealthAideShort: "Asistente<br/>de Salud en Casa",

				// Slider

				// Contacts
                PhoneCaption: "Teléfono:",
                LocationText: "Ubicación",
                
                // Services
                SkilledNursing: "<span>ENFERMERÍA ESPECIALIZADA</span>",
				SkilledNursingMainText: "<span>• Cuidado de heridas<br/>• Manejo de medicamentos<br/>• Educación al paciente<br/>• Enseñanza sobre diabetes<br/>• Cuidado para la incontinencia<br/>• Terapia intravenosa (IV)<br/>• Nutrición enteral<br/>• Cuidados preoperatorios y postoperatorios<br/>• Cuidado y enseñanza sobre ostomía<br/>• Nuestras enfermeras hablan español<br></span>",
                PhysicalTherapy: "TERAPIA FÍSICA",
				PhysicalTherapyMainText: "<span>• Restauración de la pérdida funcional específica, <br/>rango de movimiento y fuerza<br/>• Instrucciones para el uso de equipos de adaptación<br/>• Asistencia para la rehabilitación<br/>• Instrucciones sobre el uso seguro de dispositivos de asistencia<br/>• Deambulación y traslados seguros<br/>• Prevención de caídas y lesiones</span>",
                SpeechTherapy: "TERAPIA DEL HABLA",
				SpeechTherapyMainText: "<span>• Asistencia para recuperar<br/>la capacidad del habla.<br/>• Instrucción en técnicas<br/>de comunicación y deglución.<br/>• Intervención para la pérdida<br/>auditiva y trastornos neurológicos.",
                OccupationalTherapy: "TERAPIA OCUPACIONAL",
				OccupationalTherapyMainText: "<span>• Ejercicios terapéuticos para las actividades de la vida diaria.<br/>• ​​Instrucciones sobre dispositivos ortopédicos y<br/>ejercicios de conservación de energía.</span>",
                MedicalSocial: "TRABAJADOR SOCIAL MÉDICO",
				MedicalSocialMainText: "<span>• Ayudar a solicitar recursos financieros<br/>y sociales para un nivel óptimo de atención.<br/>• Ayudar a gestionar los factores sociales<br/>y emocionales relacionados con la enfermedad.</span>",
                HomeHealthAide: "ASISTENTE DE SALUD EN EL HOGAR",
				HomeHealthAideMainText: "<span>• Cuidado personal</span>",
                
                // Contact Us
                ContactUsTitle: "Contáctenos",
                EmailLabel: "Correo electrónico",
                NameLabel: "Nombre",
                MessageLabel: "Mensaje",
                SuccessMessage: "¡Enviado! 🎉",
                SuccessText: "Nos pondremos en contacto pronto.",
                
                // Location
                LocationTitle: "Ubicación",
                AddressLine1: "805 E Wilson Ave Unidad B",
                AddressLine2: "Glendale, CA, 91206",
                OpenMap: "Abrir Mapa",
                
                // Career
                CareerTitle: "Oportunidades de Carrera",
                CareerList: `Tenemos vacantes para <br/>
                            • Enfermeras Registradas <br/>
                            • Enfermeras Vocacionales<br/>
                            • Fisioterapeutas<br/>
                            • Terapeutas Ocupacionales<br/>
                            • Asistentes de Salud en el Hogar <br/>
                            • Trabajadores Sociales Médicos`,
                
                // Footer
                MedicareCertified: "Agencia de Salud en el Hogar <br/>Certificada por Medicare",
                ChapAccredited: "Acreditado por CHAP",
                Copyright: "© Derechos de autor 2025. Todos los derechos reservados.",
                OpeningHours: "Horario de Atención",
                HoursLine1: "Lunes a Viernes<br/>10:00 AM a 5:00 PM",
                HoursLine2: "Enfermera de guardia disponible por teléfono<br/>24 horas al día, 7 días a la semana"
			}
		},

		applyTranslations() {
			langElements.forEach(el => {
				const key = el.dataset.i18n;
				if(this.translations[this.currentLang][key]) {
					el.innerHTML = this.translations[this.currentLang][key];
				}
			});

			document.querySelectorAll('.PhoneCaption').forEach(el => {
				el.textContent = this.translations[this.currentLang].PhoneCaption;
			});
		},

		init() {
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