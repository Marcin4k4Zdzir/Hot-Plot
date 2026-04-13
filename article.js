import { loadArticles } from "./index.js";

document.addEventListener('DOMContentLoaded', async () => {
    await initView();
});

async function initView() {
    const articles = await loadArticles();
    if (!articles) {
        return
    }

    const articleId = getArticleIdFromUrl();
    document.querySelector('.article-title').innerHTML = articles[articleId].title;
    document.querySelector('.article-lead').innerHTML = articles[articleId].lead;
    document.querySelector('.article-image').src = articles[articleId].imageSource;
    document.querySelector('.article-text').innerHTML = articles[articleId].text.map((paragraph) => `
        <p>${paragraph}</p>`
    ).join('');
}

function getArticleIdFromUrl() {
    return new URLSearchParams(window.location.search).get("id");
}