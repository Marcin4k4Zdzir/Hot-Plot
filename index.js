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

const articlesContainer = document.getElementById('article-container');

document.addEventListener('DOMContentLoaded', async () => {
    const articles = await loadArticles();
    if (articles) {
        populateArticles(articles);
    }
});

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

export async function loadArticles() {
    try {
        const response = await fetch('articles.json');
        if (!response.ok) {
            throw new Error('Failed to load articles JSON');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Add this function to calculate time passed
function getTimePassed(publicationDate) {
    const now = new Date();
    const published = new Date(publicationDate);
    const diffInSeconds = Math.floor((now - published) / 1000);
    
    const days = Math.floor(diffInSeconds / 86400);
    const hours = Math.floor((diffInSeconds % 86400) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;
    
    return { days, hours, minutes, seconds };
}

// Format the time as a readable string
function formatTimePassed(publicationDate) {
    const { days, hours, minutes, seconds } = getTimePassed(publicationDate);
    
    if (days > 0) {
        return `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
        return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    } else {
        return `${seconds}s`;
    }
}

// Modified populateArticles function with time display
function populateArticles(articles) {
    articlesContainer.innerHTML = articles.map((article) => `
        <article data-article-id="${article.id}" class="clickable-article">
            <img src="${article.imageSource}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.lead}</p>
            ${article.publicationDate ? '<div class="article-time"><caption id="time-' + article.id + '">' + formatTimePassed(article.publicationDate) + '</caption></div>' : ''}
        </article>
    `).join('');
}