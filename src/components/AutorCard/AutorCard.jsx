"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
const AutorCard = ({ getData }) => {
    const [isLoader, setIsLoader] = useState(false);
    const handClick = () => {
        setIsLoader(true);
        window.location.href = href;
    }
  return (
    <div className=' w-full grid grid-cols-4 gap-5'>
        {[1,2,3,4].map((item, index) =>{
            return (
                <article key={index} className="w-full h-full rounded-md p-3 flex flex-col items-center bg-white">
                    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mb-3">
                        <Image loading='lazy' src={'/assets/image/autors/1.webp'} fill className='w-full h-full object-cover object-center' alt='Изображение проекта' />
                    </div>
                    <Link href={''} className="text-lg font-medium  duration-300 text-black hover:text-white hover:bg-black rounded-md transition-colors p-2">Василий Дмитриевич Поленов</Link>
                </article>
            );
        })}
    </div>
  )
}

export default AutorCard