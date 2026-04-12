document.getElementById('facebook-icon').addEventListener('click', () => displayMissingSocialsAccountPrompt("Facebook'u"));
document.getElementById('instagram-icon').addEventListener('click', () => displayMissingSocialsAccountPrompt("Instagram'ie"));
document.getElementById('tiktok-icon').addEventListener('click', () => displayMissingSocialsAccountPrompt("TikTok'u"));

function displayMissingSocialsAccountPrompt(social) {
    window.alert(`Sorki, nie mamy jeszcze konta na ${social} :*`);;
}