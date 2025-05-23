// app/layout.tsx
import '@mantine/core/styles.css';
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  AppShell,
  AppShellHeader,
  AppShellMain,
} from '@mantine/core';
import { theme } from '@/theme';
import Header from '@/components/header/Header';

export const metadata = {
  title: 'Blog UI',
  description: 'Dark/light mode ready blog layout',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <AppShell header={{ height: 60 }} padding="md">
            <AppShellHeader >
              <Header />
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
