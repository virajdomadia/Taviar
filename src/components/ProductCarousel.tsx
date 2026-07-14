'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const products = [
  {
    name: 'D-Stress',
    desc: 'Empowering a Healthier Mind, Naturally.',
    image: '/product-dstress-removebg-preview.png',
  },
  {
    name: 'Respiquite',
    desc: 'Sleep quiet, breathe right',
    image: '/product-respiquite-removebg-preview.png',
  },
  {
    name: 'Salt-ed',
    desc: 'Power Your Performance.',
    image: '/product-salted-removebg-preview.png',
  },
  {
    name: 'OrthoMantra',
    desc: 'Strength That Supports Every Step.',
    image: '/product-orthomantra-removebg-preview.png',
  },
  {
    name: 'Muvoquick',
    desc: 'Strength in Every Step.',
    image: '/product-muvoquick-removebg-preview.png',
  },
  {
    name: 'GluOK',
    desc: 'Balance Your Blood Sugar. Naturally.',
    image: '/product-gluok-removebg-preview.png',
  },
  {
    name: 'Relievain',
    desc: 'Relief That Moves With You.',
    image: '/product-relievain-removebg-preview.png',
  },
];

export default function Product3DRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setRotation((prev) => prev + 360);
    }, 5000); // Complete rotation every 5 seconds

    return () => clearInterval(animationInterval);
  }, []);

  // Update product index when rotation completes
  useEffect(() => {
    const productChangeInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(productChangeInterval);
  }, []);

  const currentProduct = products[currentIndex] || products[0];
  const nextProduct = products[(currentIndex + 1) % products.length] || products[0];

  if (!currentProduct || !nextProduct) {
    return null;
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center perspective">
      {/* 3D Rotating container */}
      <div
        className="relative w-full max-w-sm aspect-square mb-8"
        style={{
          perspective: '1200px',
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(30,64,175,0.35) 0%, transparent 70%)',
          }}
        />

        {/* 3D Flip Card */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)`,
            transition: 'transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Front face - Current product */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Back face - Next product (rotated 180deg) */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <Image
              src={nextProduct.image}
              alt={nextProduct.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Floating glow that pulses */}
        <div
          className="absolute -inset-8 rounded-full opacity-20 blur-2xl"
          style={{
            background:
              'radial-gradient(circle, rgba(30,64,175,0.4) 0%, transparent 70%)',
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.3;
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        /* Ensure 3D transforms work properly */
        :global(body) {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
