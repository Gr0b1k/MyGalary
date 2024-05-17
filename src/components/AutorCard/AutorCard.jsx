"use client";
import useAutors from '@/hooks/useAutors';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
const AutorCard = () => {

    const getAutors = useAutors();

  return (
    <div className=' w-full grid grid-cols-4 gap-5'>
        {getAutors.length > 0 ? getAutors.map((item, index) => {
            return (
                <article key={index} className="w-full h-full rounded-md p-3 flex flex-col items-center bg-white">
                    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mb-3">
                        <Image loading='lazy' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url ?? ''} fill className='w-full h-full object-cover object-center' alt='Изображение проекта' />
                    </div>
                    <Link href={''} className="text-lg font-medium  duration-300 text-black hover:text-white hover:bg-black rounded-md transition-colors p-2">{item.attributes?.name}</Link>
                </article>
            ) 
        })
        :
        [1,2,3,4].map((item, index) => {
            return (
                <div key={index}  className="block w-full h-[350px] rounded-xl  bg-zinc-800 animate-pulse"></div>
            );
        })}

        {/* {[1,2,3,4].map((item, index) =>{
            return (
                <article key={index} className="w-full h-full rounded-md p-3 flex flex-col items-center bg-white">
                    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mb-3">
                        <Image loading='lazy' src={'/assets/image/autors/1.webp'} fill className='w-full h-full object-cover object-center' alt='Изображение проекта' />
                    </div>
                    <Link href={''} className="text-lg font-medium  duration-300 text-black hover:text-white hover:bg-black rounded-md transition-colors p-2">Василий Дмитриевич Поленов</Link>
                </article>
            );
        })} */}
    </div>
  )
}

export default AutorCard