type Formats = Record<Format, { url: string }>;

interface Post {
    cover: {formats: Formats};
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    published_at: string
}

type Format = 'thumbnail' | 'large' | 'medium' | 'small';
