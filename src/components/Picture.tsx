import Image from 'next/image';
import React from 'react';

function Picture() {
  return (
    <div className="relative w-full h-screen md:h-[600px] lg:h-[709px]">
      <Image
        src="/picture.png"
        alt="pic"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Picture;

