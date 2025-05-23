'use client';

import { Card, Text, Title, Stack, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function PostDetails({
    title,
    body,
    id,
}: {
    title: string;
    body: string;
    id: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Button component={Link}
                leftSection={<IconArrowLeft size={16} />}
                variant="subtle"
                mb="md"
                href={'/'}
            >
                Back
            </Button>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <ImageWithFallback
                        src={`https://picsum.photos/seed/${id}/1000/500`}
                        alt={title}
                    />
                </Card.Section>

                <Stack mt="md">
                    <Title order={2}>{title}</Title>
                    <Text size="md" color="dimmed">
                        {body}
                    </Text>
                </Stack>
            </Card>
        </motion.div>
    );
}
