'use client';

import { useEffect, useState } from 'react';
import {
    Card,
    Image,
    Text,
    Grid,
    Container,
    Pagination,
    Stack,
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { SkeletonCard } from './SkeletonCard';

interface Post {
    id: number;
    title: string;
    body: string;
}

const POSTS_PER_PAGE = 10;

export default function ArticleList({ posts }: { posts: Post[] }) {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

    // Simulate loading effect on pagination
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 300); // just a small delay to simulate
        return () => clearTimeout(timer);
    }, [page]);

    return (
        <Container py="md">
            <Stack>
                {loading ? (
                    <Grid>
                        {Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
                            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                                <SkeletonCard />
                            </Grid.Col>
                        ))}
                    </Grid>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Grid>
                                {paginatedPosts.map((post) => (
                                    <Grid.Col key={post.id} span={{ base: 12, sm: 6, md: 4 }}>
                                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                                            <Card.Section>
                                                <Image
                                                    src={`https://picsum.photos/seed/${post.id}/500/300`}
                                                    height={160}
                                                    alt="Article image"
                                                />
                                            </Card.Section>
                                            <Text lineClamp={2} h={50} fw={500} mt="md" title={post.title}>
                                                {post.title}
                                            </Text>
                                            <Text size="sm" c="dimmed" mt="xs" lineClamp={3}>
                                                {post.body}
                                            </Text>
                                        </Card>
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </motion.div>
                    </AnimatePresence>
                )}

                {totalPages > 1 && (
                    <Pagination
                        total={totalPages}
                        value={page}
                        onChange={(value) => {
                            setPage(value);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        size="md"
                        mt="xl"
                        style={{ alignSelf: 'center' }}
                    />
                )}
            </Stack>
        </Container>
    );
}
