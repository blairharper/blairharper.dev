import {getSinglePost, getPosts} from '../../lib/posts';
import Image from 'next/image';
export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post: {slug: string}) => ({
    params: {slug: post.slug},
  }));

  // { fallback: false } means will attempt to generate paths (SSR) for posts that do not exist
  // i.e. posts that have been added since to the CMS since the last time a build was run
  return {paths, fallback: 'blocking'};
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context: {params: {slug: string}}) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {redirect: '/', permanent: false}; // redirect to main blog posts page if post doesn't exist
  }
  return {
    props: {post},
  };
}

export default function PostPage(props: any) {
  return (
    <div className="gh-canvas">
      <h1 className="text-3xl">{props.post.title}</h1>
      <Image width={800} height={500} src={props.post.feature_image} />

      <div
        className="gh-content"
        dangerouslySetInnerHTML={{__html: props.post.html}}
      />
    </div>
  );
}
