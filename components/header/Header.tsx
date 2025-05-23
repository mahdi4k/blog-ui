// components/Header.tsx
'use client';

import {
    ActionIcon,
    Container,
    Group,
    Title,
    useComputedColorScheme,
    useMantineColorScheme,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './ActionToggle.module.css';
import Link from 'next/link';

export default function Header() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    const toggleTheme = () => {
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
    };

    return (
        <Container h="100%" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link style={{ textDecoration: 'none' }} href={'/'}>
                <Title order={3}>My Blog UI</Title>
            </Link>
            <Group>
                <ActionIcon
                    onClick={toggleTheme}
                    variant="transparent"
                    size="lg"
                    aria-label="Toggle theme"
                >
                    <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                    <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Container>
    );
}
