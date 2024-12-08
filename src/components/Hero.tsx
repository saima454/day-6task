import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden md:h-[75vh] lg:h-[100vh]">
      <Image
        src="/hero.png"
        alt="girl"
        layout="fill"
        objectFit="cover"
        priority
        className="object-center"
      />
    </div>
  );
}

export default Hero;
