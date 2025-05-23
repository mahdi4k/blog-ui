import ArticleList from "../components/article/ArticleList";

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return <ArticleList posts={posts} />;
}
