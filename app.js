/**
 * Hotel Vazhiyoram (Mundakayam, Kerala)
 * Interactive Application & Bilingual Management Script (Zero Emojis)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const langToggleBtn = document.getElementById('langToggleBtn');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const enquiryForm = document.getElementById('enquiryForm');
  const toastAlert = document.getElementById('toastAlert');
  const quickEnquiryBtns = document.querySelectorAll('.btn-room-enquire');

  // --- Bilingual Dictionary (English & Malayalam) ---
  const translations = {
    en: {
      brandSub: 'Mundakayam, Kerala',
      stagingNotice: 'Private Concept Redesign for Client Review • Not Official Live Site',
      navStay: 'Stay & Rooms',
      navDining: 'Dining & Food Court',
      navTransit: 'Highway Transit',
      navExplore: 'Explore High Ranges',
      navLocation: 'Location & Map',
      navEnquiry: 'Direct Enquiry',
      heroBadge: 'NH 183 • Mundakayam, Kerala • Gateway to High Ranges',
      heroTitle: 'Your Rest Stop & Retreat Before the High Ranges',
      heroDesc: 'Located along the Kottayam–Kumily Highway (NH 183). Offering spacious on-site highway parking, air-conditioned family dining at Sampushta, a traditional Charupady food court, and dependable transit rooms for Sabarimala pilgrims and high-range travelers.',
      btnCallFrontDesk: 'Call Front Desk',
      btnWhatsApp: 'WhatsApp Availability',
      btnGetDirections: 'Route Map',
      btnSubmitEnquiry: 'Send Enquiry via WhatsApp',
      roomDeluxeTitle: 'Deluxe A/C Room',
      roomDeluxeDesc: 'Spacious hill-view air-conditioned accommodation with double bed, en-suite bathroom, and round-the-clock room assistance.',
      roomStandardTitle: 'Standard A/C Room',
      roomStandardDesc: 'Clean, quiet air-conditioned room tailored for families and long-distance highway travelers.',
      roomNonAcTitle: 'Standard Non-A/C Room',
      roomNonAcDesc: 'Well-ventilated budget room benefiting from natural Western Ghats breezes, attached bathroom, and daily housekeeping.',
      diningSampushtaTitle: 'Sampushta A/C Family Restaurant',
      diningSampushtaDesc: 'An air-conditioned dining room serving authentic Kerala Meals, Malabar Biryani, South & North Indian dishes, and Continental selections.',
      diningKairaliTitle: 'Kairali Food Court (Charupady Style)',
      diningKairaliDesc: 'Built in traditional Kerala timber style with slatted Charupady benches. Convenient for quick tea, coffee, bakery snacks, and fresh juices.',
      amenityParkingTitle: 'Spacious Highway Parking',
      amenityParkingDesc: 'Secure, ample on-site parking designed for traveler cars, tourist coaches, and family vans.',
      amenityPilgrimTitle: 'Sabarimala Pilgrim Transit Support',
      amenityPilgrimDesc: 'Dedicated stopover assistance, early morning hot water, and refreshment facilities for Ayyappa devotees on the Erumely route.',
      amenityDeskTitle: 'High-Range Travel Guidance',
      amenityDeskDesc: 'Local route information and taxi coordination for Vagamon, Thekkady, Kuttikkanam, and Bharananganam shrines.',
      formHeading: 'Direct Booking & Rest-Stop Enquiry',
      formSubheading: 'Enter your visit details below. Your information will be formatted into an instant WhatsApp dispatch to the front desk.',
      tariffNotice: 'Seasonal rates apply. Contact front desk for verified tariff.'
    },
    ml: {
      brandSub: 'മുണ്ടക്കയം, കേരളം',
      stagingNotice: 'സ്വകാര്യ കൺസെപ്റ്റ് റീഡിസൈൻ • ഔദ്യോഗിക ലൈവ് വെബ്സൈറ്റ് അല്ല',
      navStay: 'മുറികൾ & താമസം',
      navDining: 'ഭക്ഷണശാലകൾ',
      navTransit: 'ഹൈവേ യാത്രാസൗകര്യങ്ങൾ',
      navExplore: 'ഹൈറേഞ്ച് കാഴ്ച്ചകൾ',
      navLocation: 'റൂട്ട് & മാപ്പ്',
      navEnquiry: 'ബുക്കിംഗ് അന്വേഷണം',
      heroBadge: 'NH 183 • മുണ്ടക്കയം, കേരളം • ഹൈറേഞ്ചിന്റെ പ്രവേശന കവാടം',
      heroTitle: 'ഹൈറേഞ്ചിലേക്കുള്ള യാത്രയിലെ സുഖകരമായ ഇടത്താവളം',
      heroDesc: 'കോട്ടയം-കുമളി ദേശീയപാതയിൽ (NH 183) മുണ്ടക്കയത്ത് വിപുലമായ പാർക്കിംഗ്, സമ്പുഷ്ട എയർകണ്ടീഷൻഡ് റെസ്റ്റോറന്റ്, പരമ്പരാഗത ചാരുപടി ഫുഡ് കോർട്ട്, ശബരിമല തീർത്ഥാടകർക്കും യാത്രക്കാർക്കുമുള്ള വിശ്രമമുറികൾ എന്നിവയോടെ ഹോട്ടൽ വഴിയോരം.',
      btnCallFrontDesk: 'വിളിക്കുക',
      btnWhatsApp: 'വാട്സാപ്പ് അന്വേഷണം',
      btnGetDirections: 'റൂട്ട് മാപ്പ്',
      btnSubmitEnquiry: 'വാട്സാപ്പിലൂടെ അന്വേഷിക്കുക',
      roomDeluxeTitle: 'ഡീലക്സ് എ/സി മുറികൾ',
      roomDeluxeDesc: 'ഹൈറേഞ്ച് മലനിരകളുടെ കാഴ്ചകളുള്ള സുഖകരമായ എയർകണ്ടീഷൻഡ് മുറികൾ, അറ്റാച്ച്ഡ് ബാത്ത്റൂം, റൂം സർവീസ്.',
      roomStandardTitle: 'സ്റ്റാൻഡേർഡ് എ/സി മുറികൾ',
      roomStandardDesc: 'കുടുംബങ്ങൾക്കും ഹൈവേ യാത്രക്കാർക്കും അനുയോജ്യമായ വൃത്തിയുള്ള എ/സി മുറികൾ.',
      roomNonAcTitle: 'നോൺ-എ/സി മുറികൾ',
      roomNonAcDesc: 'സ്വാഭാവിക തണുപ്പുള്ള മലയോര കാറ്റും മികച്ച സൗകര്യങ്ങളുമുള്ള ബഡ്ജറ്റ് മുറികൾ.',
      diningSampushtaTitle: 'സമ്പുഷ്ട എ/സി ഫാമിലി റെസ്റ്റോറന്റ്',
      diningSampushtaDesc: 'സ്വാദിഷ്ടമായ കേരള ഊണ്, ബിരിയാണി, നോർത്ത്/സൗത്ത് ഇന്ത്യൻ വിഭവങ്ങൾ ലഭ്യമായ ഫാമിലി റെസ്റ്റോറന്റ്.',
      diningKairaliTitle: 'കൈരളി ഫുഡ് കോർട്ട് (ചാരുപടി മാതൃകയിൽ)',
      diningKairaliDesc: 'പരമ്പരാഗത ചാരുപടി ശൈലിയിൽ രൂപകൽപ്പന ചെയ്ത ചായ, കാപ്പി, ലഘുഭക്ഷണങ്ങൾ ലഭ്യമായ ഹൈവേ ഫുഡ് കോർട്ട്.',
      amenityParkingTitle: 'വിശാലമായ പാർക്കിംഗ് സൗകര്യം',
      amenityParkingDesc: 'കാറുകൾക്കും ടൂറിസ്റ്റ് ബസ്സുകൾക്കും എളുപ്പത്തിൽ പാർക്ക് ചെയ്യാവുന്ന സുരക്ഷിത സ്ഥലം.',
      amenityPilgrimTitle: 'ശബരിമല തീർത്ഥാടകർക്കുള്ള സൗകര്യങ്ങൾ',
      amenityPilgrimDesc: 'എരുമേലി വഴി യാത്രചെയ്യുന്ന അയ്യപ്പഭക്തർക്ക് പ്രത്യേക വിശ്രമ സൗകര്യങ്ങൾ.',
      amenityDeskTitle: 'ട്രാവൽ ഗൈഡൻസ് & ടാക്സി',
      amenityDeskDesc: 'വാഗമൺ, തേക്കടി, കുട്ടിക്കാനം, ഭരണങ്ങാനം യാത്രകൾക്കായുള്ള സഹായങ്ങൾ.',
      formHeading: 'നേരിട്ടുള്ള ബുക്കിംഗ് & വിവരങ്ങൾ',
      formSubheading: 'താങ്കളുടെ ആവശ്യങ്ങൾ നൽകുക. വിവരങ്ങൾ നേരിട്ട് വാട്സാപ്പിലേക്ക് അയക്കാം.',
      tariffNotice: 'സീസൺ നിരക്കുകൾ അറിയാൻ വിളിക്കുക.'
    }
  };

  let currentLang = 'en';

  // --- Toggle Language ---
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ml' : 'en';
      const labelSpan = langToggleBtn.querySelector('.lang-label');
      if (labelSpan) {
        labelSpan.textContent = currentLang === 'en' ? 'മലയാളം' : 'English';
      }
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  // --- Mobile Drawer Toggle ---
  if (menuToggleBtn && mobileNavDrawer) {
    menuToggleBtn.addEventListener('click', () => {
      const isActive = mobileNavDrawer.classList.toggle('active');
      menuToggleBtn.setAttribute('aria-expanded', String(isActive));
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Room Table Direct Enquiry Click ---
  quickEnquiryBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const roomType = e.currentTarget.getAttribute('data-room') || 'Deluxe A/C Room';
      const roomSelect = document.getElementById('enquiryRoomType');
      if (roomSelect) {
        roomSelect.value = roomType;
      }
      const formSection = document.getElementById('enquiry-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Direct Enquiry Form Handling via WhatsApp (Client-Safe) ---
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('enquiryName').value.trim();
      const phone = document.getElementById('enquiryPhone').value.trim();
      const type = document.getElementById('enquiryType').value;
      const room = document.getElementById('enquiryRoomType').value;
      const checkIn = document.getElementById('enquiryCheckIn').value;
      const guests = document.getElementById('enquiryGuests').value;
      const message = document.getElementById('enquiryMessage').value.trim();

      if (!name || !phone) {
        showToast('Please enter your name and contact number.');
        return;
      }

      // Build Structured WhatsApp Text
      const hotelWhatsAppNumber = '919447733801';
      let waText = `*Enquiry for Hotel Vazhiyoram, Mundakayam*\n`;
      waText += `------------------------------------\n`;
      waText += `*Name:* ${name}\n`;
      waText += `*Phone:* ${phone}\n`;
      waText += `*Enquiry Type:* ${type}\n`;
      if (type.includes('Room') || type.includes('Stay')) {
        waText += `*Preferred Room:* ${room}\n`;
        if (checkIn) waText += `*Check-in Date:* ${checkIn}\n`;
        if (guests) waText += `*Number of Guests:* ${guests}\n`;
      }
      if (message) {
        waText += `*Special Requests:* ${message}\n`;
      }
      waText += `------------------------------------\n`;
      waText += `(Sent via Hotel Vazhiyoram Website Concept)`;

      const waUrl = `https://wa.me/${hotelWhatsAppNumber}?text=${encodeURIComponent(waText)}`;

      showToast('Opening WhatsApp with your enquiry details...');
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 500);
    });
  }

  // --- Toast Notification Helper ---
  function showToast(msg) {
    if (!toastAlert) return;
    toastAlert.textContent = msg;
    toastAlert.classList.add('active');
    setTimeout(() => {
      toastAlert.classList.remove('active');
    }, 4000);
  }
});
