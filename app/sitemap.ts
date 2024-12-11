import {
  fetchBlog,
  fetchProducts,
  fetchProjects,
  getProjectMetaData,
} from "@/lib/notion"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const projectsResponse = await fetchProjects()
  const projects = projectsResponse.results.map((project) =>
    getProjectMetaData(project as PageObjectResponse),
  )

  const productResponse = await fetchProducts()
  const products = productResponse.results.map((product) =>
    getProjectMetaData(product as PageObjectResponse),
  )

  const blogResponse = await fetchBlog()
  const blog = blogResponse.results.map((blog) =>
    getProjectMetaData(blog as PageObjectResponse),
  )

  if (!blog) {
    return []
  }

  if (!products) {
    return []
  }

  if (!projects) {
    return []
  }

  const projectUrls = projects?.map((project: any) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }))

  const productUrls = products?.map((product: any) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
  }))

  const blogUrls = blog?.map((blog: any) => ({
    url: `${siteUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/today`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projectUrls,
    ...productUrls,
    ...blogUrls,
  ]
}
