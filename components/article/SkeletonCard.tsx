import { Card, Skeleton } from "@mantine/core";

export function SkeletonCard() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Skeleton height={210} />
            </Card.Section>
            <Skeleton height={24} mt="md" radius="sm" />
            <Skeleton height={16} mt="xs" radius="sm" />
            <Skeleton height={16} mt="xs" width="80%" radius="sm" />
        </Card>
    );
}
