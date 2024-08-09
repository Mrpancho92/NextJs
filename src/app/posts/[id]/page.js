export async function generateMetadata({ params: { id } }) {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

async function getData(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

const Post = async ({ params: { id } }) => {
  const post = await getData(id);
  console.log(post);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};
export default Post;
