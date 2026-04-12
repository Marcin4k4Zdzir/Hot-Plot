// UI Element definitions
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('sign-up-button');

const facebookIcon = document.getElementById('facebook-icon');
const instagramIcon = document.getElementById('instagram-icon');
const tiktokIcon = document.getElementById('tiktok-icon');

const interviewsButton = document.getElementById('interviews-button');
const newsButton = document.getElementById('news-button');
const videoButton = document.getElementById('video-button');
const galleryButton = document.getElementById('gallery-button');
const paparazziButton = document.getElementById('paparazzi-button');
const lifestyleButton = document.getElementById('lifestyle-button');
const hotButton = document.getElementById('hot-button');
const moreButton = document.getElementById('more-button');

// Event Listeners
loginButton.addEventListener('click', () => { window.alert('Jeszcze nie mogę Cię zalogować misiaku') });
signupButton.addEventListener('click', () => { window.alert('Chciałbyś się juz zarejestrować, co?') });

facebookIcon.addEventListener('click', () => displayMissingSocialsAccountPrompt("Facebook'u"));
instagramIcon.addEventListener('click', () => displayMissingSocialsAccountPrompt("Instagram'ie"));
tiktokIcon.addEventListener('click', () => displayMissingSocialsAccountPrompt("TikTok'u"));

interviewsButton.addEventListener('click', () => { window.alert('Tu będziemy publikować wywiady') });
newsButton.addEventListener('click', () => { window.alert('Tu wrzucimy newsy, które mogą Cię zainsteresować') });
videoButton.addEventListener('click', () => { window.alert('Tutaj będą przerózne filmiki') });
galleryButton.addEventListener('click', () => { window.alert('Tu znajdziesz foty, które udało nam się zdobyć') });
paparazziButton.addEventListener('click', () => { window.alert('Tu będziemy pokazywać paparazzi') });
lifestyleButton.addEventListener('click', () => { window.alert('Tu znajdziesz artykuły, które pomogą Ci zostać gwiazdą!') });
hotButton.addEventListener('click', () => { window.alert('Tu znajdziesz najgorętsze wiadomości z ostatniego tygodnia') });
moreButton.addEventListener('click', () => { window.alert('Tu znajdziesz wszystko to, czego nie było nigdzie idziej') });

// Actions
function displayMissingSocialsAccountPrompt(social) {
    window.alert(`Sorki, nie mamy jeszcze konta na ${social} :*`);;
}