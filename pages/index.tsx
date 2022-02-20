import {getPosts} from '../lib/posts';
import PostCard from '../components/PostCard';

export default function Home(props: any) {
  return (
    <div>
      <ul className="grid grid-flow-row gap-6">
        {props.posts.map((post) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {posts},
    revalidate: 60 * 60 * 24, // refetch posts every 24 hours (in seconds)
  };
}
