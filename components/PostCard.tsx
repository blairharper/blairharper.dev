import Link from 'next/link';
import Image from 'next/image';
export default function PostCard(post: {
  slug: string;
  title: string;
  excerpt: string;
  feature_image: string;
  feature_image_alt?: string;
  tags;
}) {
  return (
    <div className="max-w-3xl overflow-hidden rounded shadow-lg">
      <Image
        width={800}
        height={500}
        layout="responsive"
        src={post.feature_image}
        alt={post.feature_image_alt ?? ''}
      />
      <div className="bg-white px-6 py-4">
        <Link href={`/blog/${post.slug}`}>
          <a className="mb-2 text-xl font-bold">{post.title}</a>
        </Link>
        <p className="text-base text-gray-700">{post.excerpt}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {post.tags &&
          post.tags.map((tag) => (
            <span
              key={tag.name}
              className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              {tag.name}
            </span>
          ))}
      </div>
    </div>
  );
}
