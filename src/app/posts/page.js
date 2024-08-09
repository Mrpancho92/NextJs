import Link from "next/link";
import Heading from "../../../components/Heading";

export const metadata = {
  title: "Posts",
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}

const Posts = async () => {
  const posts = await getData();

  return (
    <>
      <Heading text="Posts list:" />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Posts;
