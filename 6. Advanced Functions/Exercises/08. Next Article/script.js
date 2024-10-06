function getArticleGenerator(articles) {
    const resultRef = document.querySelector('#content');
    const articlesArr = articles.slice();

    const nextArticle = () => {
        if (articlesArr.length > 0) {
            const text = articlesArr.shift();
            const article = document.createElement('article');
            article.textContent = text;
            resultRef.appendChild(article);
        }
    };

    return nextArticle;
}