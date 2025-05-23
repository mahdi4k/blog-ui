'use client';

import { useState } from 'react';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/utils/image';

export default function ImageWithFallback({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 2' }}>
      <Image
        src={error ? '/not-found.png' : src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 300))}`}
        onError={() => setError(true)}
        style={{ objectFit: 'cover', borderRadius: 8 }}
      />
    </div>
  );
}