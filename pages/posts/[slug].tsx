import {getSinglePost, getPosts} from '../../lib/posts';

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post: {slug: string}) => ({
    params: {slug: post.slug},
  }));

  // { fallback: false } means 'posts not found' should 404.
  return {paths, fallback: false};
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context: {params: {slug: string}}) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {post},
  };
}

export default function PostPage(props: any) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: props.post.html}} />
    </div>
  );
}
