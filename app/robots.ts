import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: '[https://your-production-url.vercel.app/sitemap.xml](https://your-production-url.vercel.app/sitemap.xml)', // TODO: Update with real URL
  };
}