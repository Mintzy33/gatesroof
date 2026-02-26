import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { blogPosts } from "../posts";
import BlogPostLayout from "../../components/BlogPostLayout";

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
      url: `https://gatesroof.com/blog/${post.slug}`,
      siteName: "Gates Enterprises LLC",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishDate,
    },
    alternates: {
      canonical: `https://gatesroof.com/blog/${post.slug}`,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Gates Enterprises LLC",
      url: "https://gatesroof.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Gates Enterprises LLC",
      url: "https://gatesroof.com",
      logo: {
        "@type": "ImageObject",
        url: "https://gatesroof.com/images/gates-enterprises-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gatesroof.com/blog/${post.slug}`,
    },
    keywords: post.targetKeyword,
    articleSection: post.category,
  };

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
      />
    </>
  );
}
