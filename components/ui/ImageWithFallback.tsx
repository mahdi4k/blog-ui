'use client';

import { useState } from 'react';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/utils/image';

export default function ImageWithFallback({
  src,
  alt,
  aspectRatio = '2 / 1', // default
  sizes = '100vw',

}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  sizes?: string;

}) {
  const [error, setError] = useState(false);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio,
    }}>
      <Image
        src={error ? '/not-found.png' : src}
        alt={alt}
        fill
        placeholder="blur"
        sizes={sizes}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 300))}`}
        onError={() => setError(true)}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}