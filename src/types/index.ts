export interface NewsSource {
    id: string;
    name: string;
}

export interface NewsArticle {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface SourcesResponse {
    status: string;
    sources: NewsSource[];
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface LoaderOptions {
    [key: string]: string;
}

export interface RequestOptions {
    endpoint: string;
    options?: LoaderOptions;
}

export type Callback<T> = (data: T) => void;

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
