import Link from 'next/link';

export default function PostCard(post: {
  slug: string;
  title: string;
  excerpt: string;
  feature_image: string;
  feature_image_alt?: string;
  tags?: Array<object>;
}) {
  return (
    <div className="max-w-3xl overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src={post.feature_image}
        alt={post.feature_image_alt ?? ''}
      />
      <div className="px-6 py-4">
        <Link href={`/posts/${post.slug}`}>
          <a className="mb-2 text-xl font-bold">{post.title}</a>
        </Link>
        <p className="text-base text-gray-700">{post.excerpt}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {post.tags &&
          post.tags.map((tag) => (
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
}