import './news.css';
import { NewsArticle } from '../../../types';

class News {
    public draw(data: NewsArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) newsItem.classList.add('alt');

            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            metaAuthor.textContent = item.author || item.source.name;

            const metaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const descTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            descTitle.textContent = item.title;

            const descSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            descSource.textContent = item.source.name;

            const descContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            descContent.textContent = item.description;

            const readMoreLink = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
            readMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news') as HTMLElement;
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
