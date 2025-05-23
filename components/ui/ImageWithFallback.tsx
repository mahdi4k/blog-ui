'use client';

import { useState } from 'react';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/utils/image';

export default function ImageWithFallback({
    src,
    alt,
    width,
    height,
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
}) {
    const [error, setError] = useState(false);

    return (
        <Image
            src={error ? '/not-found.png' : src}
            alt={alt}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
            onError={() => setError(true)}
            style={{ objectFit: 'cover' }}
        />
    );
}
