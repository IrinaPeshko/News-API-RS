import AppLoader from './appLoader';
import { SourcesResponse, NewsResponse, Callback } from '../../types';

type ApiResponse = SourcesResponse | NewsResponse;

class AppController extends AppLoader<ApiResponse> {
    public getSources(callback: Callback<SourcesResponse>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback as Callback<ApiResponse>
        );
    }

    public getNews(e: Event, callback: Callback<NewsResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId as string,
                            },
                        },
                        callback as Callback<ApiResponse>
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
