import { notFound } from 'next/navigation';
import { Container } from '@mantine/core';
import ArticleDetails from '@/components/article/ArticleDetails';

const Page = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) return notFound();

    const post = await res.json();

    return (
        <Container size="md" py="xl">
            <ArticleDetails title={post.title} body={post.body} id={post.id} />
        </Container>
    );
}
export default Page;
