import { MetadataRoute } from 'next'
import { getAllblog } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://crealab.ca'
    const blogs = await getAllblog()
    const blogUrls = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.date || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogUrls,
    ]
}