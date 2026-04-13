import { loadArticles } from "./index.js";

document.addEventListener('DOMContentLoaded', async () => {
    const articles = await loadArticles();
    if (articles) {
        initView(articles);
    }
});

function initView(articles) {
    const articleId = getArticleIdFromUrl();
    document.querySelector('.article-title').innerHTML = articles[articleId].title;
    document.querySelector('.article-lead').innerHTML = articles[articleId].lead;
    document.querySelector('.article-image').src = articles[articleId].imageSource;
    document.querySelector('.article-text').innerHTML = articles[articleId].text;
}

function getArticleIdFromUrl() {
    return new URLSearchParams(window.location.search).get("id");
}