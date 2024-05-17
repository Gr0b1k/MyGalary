"use client";
import usePictures from '@/hooks/usePictures';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
const PaintCard = () => {
 
    const getPictures = usePictures();

  return (
    <div className=' w-full grid grid-cols-3 gap-5'>
        {getPictures.length > 0 ? getPictures.map((item, index) => {
            return (
                <article key={index} className="w-full h-full rounded-md p-3 bg-white">
                <div className="relative w-full h-[230px] rounded-md overflow-hidden mb-3">
                    <Image loading='lazy' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url ?? ''} fill className='w-full h-full object-cover object-center' alt='Изображение проекта' />
                </div>
                <div className=" m-0 p-0 mb-5 w-full duration-300 transition-all">
                    <Link href={''} className=" text-base font-light hover:text-lg duration-300 text-gray  rounded-md transition-all p-2">{item.attributes?.autor?.data.attributes?.name}</Link>
                </div>
                <Link href={''} className="text-lg font-medium  duration-300 text-black hover:text-white hover:bg-black rounded-md transition-colors p-2">{item.attributes?.name}</Link>
            </article>
            ) 
        })
        :
        [1,2,3].map((item, index) => {
            return (
                <div key={index}  className="block w-full h-[460px] rounded-xl  bg-zinc-800 animate-pulse"></div>
            );
        })}
    </div>
  )
}
export default PaintCard