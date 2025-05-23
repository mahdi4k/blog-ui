export const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g">
        <stop stop-color="rgba(255, 255, 255, 0.2)" offset="20%" />
        <stop stop-color="rgba(255, 255, 255, 0.1)" offset="50%" />
        <stop stop-color="rgba(255, 255, 255, 0.2)" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="rgba(0, 0, 0, 0.1)" />
    <rect width="${w}" height="${h}" fill="url(#g)" />
    <animate attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>
`;

export const toBase64 = (str: string): string =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);
