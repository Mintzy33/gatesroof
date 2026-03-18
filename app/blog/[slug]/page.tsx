import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { blogPosts } from "../posts";
import BlogPostLayout from "../../components/BlogPostLayout";
import { blogPostingSchema, breadcrumbSchema } from "../../../lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.targetKeyword,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.gatesroof.com/blog/${post.slug}`,
      siteName: "Gates Enterprises LLC",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishDate,
      ...(post.coverImage ? { images: [{ url: `https://www.gatesroof.com${post.coverImage.src}`, width: post.coverImage.width, height: post.coverImage.height, alt: post.coverImage.alt }] } : {}),
    },
    alternates: {
      canonical: `https://www.gatesroof.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Get related posts (same category, exclude current, max 4)
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return 0;
    })
    .slice(0, 4)
    .map((p) => ({ slug: p.slug, title: p.title, category: p.category, readTime: p.readTime }));

  const blogSchema = blogPostingSchema({
    title: post.metaTitle,
    description: post.metaDescription,
    slug: post.slug,
    publishDate: post.publishDate,
    category: post.category,
    keyword: post.targetKeyword,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.gatesroof.com" },
    { name: "Blog", url: "https://www.gatesroof.com/blog" },
    { name: post.title, url: `https://www.gatesroof.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <Script
        id={`blog-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <BlogPostLayout
        title={post.title}
        category={post.category}
        publishDate={post.publishDate}
        readTime={post.readTime}
        content={post.content}
        internalLinks={post.internalLinks}
        slug={post.slug}
        relatedPosts={related}
        coverImage={post.coverImage}
      />
    </>
  );
}
