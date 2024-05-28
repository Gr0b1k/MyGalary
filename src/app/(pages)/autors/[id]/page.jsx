"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
// import useReviews from '@/hooks/useReviews';
import Link from 'next/link';
import useSingleAutor from '@/hooks/useSingleAutor';



export default function page({ params }) {

    const detailAutor = useSingleAutor(params.id);
    // const getReviews = useReviews();

  return (
    <section className='w-full py-16 pt-[120px]'>
        {/* Начало основной секции */}
        <div className="container mx-auto flex bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] p-5 rounded-lg gap-5"> 
            {/* Начало превью */}
            <div className="w-1/2 h-[320px] md:h-[600px] overflow-hidden ">
                {detailAutor?.attributes?.image?.data.attributes?.url ? 
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailAutor?.attributes?.image?.data.attributes?.url ?? '')} alt='' width={1200} height={520} className='w-full h-full rounded-md object-cover object-center ' />
                :
                <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                }
            </div>
            {/* Конец превью */}
            <div className="w-full flex items-center gap-5 border border-black rounded-lg">
                <div className="w-full h-[600px] items-start flex p-5  z-10">
                    <div className="w-full h-full flex flex-col justify-between">
                            <div className="flex w-full gap-5 items-start">
                            {/* Начало названия */}
                                {detailAutor?.attributes?.name ? 
                                    <h2 className="text-left w-full text-black text-5xl">{detailAutor?.attributes?.name}</h2>
                                :
                                <div className='w-full flex flex-col gap-4 z-30'>
                                    <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
                                </div>
                                }
                            {/* Конец названия */}
                        </div>
                        <div className="w-full  ">
                            {/* Начало описания */}
                            {detailAutor?.attributes?.biografy ? 
                                <p className="text-zinc-700 w-full text-base md:text-xl text-left mt-7">{detailAutor?.attributes?.biografy}</p>
                            :
                            <div className='w-full flex flex-col gap-4 z-30'>
                                <div className=" z-30 w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
                            </div>
                            }
                            {/* Конец описания */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* Конец основной секции */}
     
    </section>
  )
  
}