import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '[https://your-production-url.vercel.app](https://your-production-url.vercel.app)', // TODO: Update with real URL
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}