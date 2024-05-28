"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import useReviews from '@/hooks/useReviews';
import Link from 'next/link';
import useSinglePicture from '@/hooks/useSinglePicture';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';



export default function page({ params }) {

    const detailPicture = useSinglePicture(params.id);
    const getReviews = useReviews();
    const { user } = useKindeBrowserClient();
    useEffect(() => {
      console.log(user)
    }, [user])

  return (
    <section className='w-full py-16 pt-[120px]'>
        {/* Начало основной секции */}
        <div className="container mx-auto flex bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] p-5 rounded-lg gap-5"> 
            {/* Начало превью */}
            <div className="w-1/2 h-[320px] md:h-[600px] overflow-hidden ">
                {detailPicture?.attributes?.image?.data.attributes?.url ? 
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailPicture?.attributes?.image?.data.attributes?.url ?? '')} alt='' width={1200} height={520} className='w-full h-full rounded-md object-cover object-center ' />
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
                                {detailPicture?.attributes?.name ? 
                                    <h2 className="text-left w-full text-black text-5xl">{detailPicture?.attributes?.name}</h2>
                                :
                                <div className='w-full flex flex-col gap-4 z-30'>
                                    <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
                                </div>
                                }
                                <p className="text-zinc-500 text-base md:text-xl text-left">Автор:</p>
                                {detailPicture?.attributes?.autor?.data.attributes?.name ? 
                                    <p className="text-zinc-700 text-base md:text-2xl text-left">{detailPicture?.attributes?.autor?.data.attributes?.name}</p>
                                :
                                <div className='w-full flex flex-col gap-4 z-30'>
                                    <div className=" z-30 w-full h-5 rounded-lg bg-zinc-800 animate-pulse"></div>
                                </div>
                                }
                            {/* Конец названия */}
                        </div>
                        <div className="w-full  ">
                            {/* Начало описания */}
                            {detailPicture?.attributes?.history ? 
                                <p className="text-zinc-700 w-full text-base md:text-xl text-left mt-7">{detailPicture?.attributes?.history}</p>
                            :
                            <div className='w-full flex flex-col gap-4 z-30'>
                                <div className=" z-30 w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
                            </div>
                            }
                            {/* Конец описания */}
                        </div>
                    </div>
                    <div className="w-1/2 items-start h-full flex justify-end gap-4">
                        <p className="text-zinc-500 text-base md:text-xl text-left">Дата:</p>
                        {detailPicture?.attributes?.date ? 
                            <p className="text-zinc-700 text-base md:text-2xl text-left">{detailPicture?.attributes?.date}</p>
                        :
                        <div className='w-full flex flex-col gap-4 z-30'>
                            <div className=" z-30 w-full h-5 rounded-lg bg-zinc-800 animate-pulse"></div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        {/* Конец основной секции */}
        {/* Начало отзывов */}
        <div className="w-full py-10">
                <div className="container mx-auto">
                    <div className="w-full flex flex-col gap-10">
                        <div className="w-full flex gap-5 bg-white p-6 rounded-xl shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                            <div className="w-full flex flex-col gap-5">
                                <h2 className=" text-black h2 text-2xl font-medium">Отзывы клиентов</h2>
                                <div className="w-full flex flex-col gap-5">
                                    {detailPicture?.attributes?.reviews?.data?.length > 0 ?  detailPicture?.attributes?.reviews?.data?.map((item, index) => {
                                        return (
                                            <div key={index} className = "w-full rounded-xl p-3 " >
                                                <div className="w-full flex items-center gap-5 h-[50px] rounded-xl">
                                                    <div className="flex items-center gap-[8px]">
                                                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.image?.data.attributes?.url ?? '')} alt={'Картинка записи'} width={50} height={50} className='w-[50px] h-[50px] rounded-full object-cover object-top' />
                                                        <h3 className="text-black text-base md:text-xl  group-hover:text-accent transition-colors font-normal">{item.attributes?.nameUser}</h3>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 mt-3">
                                                    <p className=" text-zinc-700 text-md font-normal ">Дата:</p>
                                                    <p className=" text-zinc-700 text-md font-normal ">{item.attributes?.date}</p>
                                                </div>
                                                <div className="w-full rounded-xl bg-gray-100 p-4 mt-4">
                                                    <p className=" text-sm md:text-lg text-zinc-900">{item.attributes?.description}</p>
                                                </div>
                                            </div>
                                                    ) 
                                                })
                                                :
                                                [1,2].map((item, index) => {
                                                    return (
                                                        <div key={index}  className="block w-full h-[160px] rounded-xl  bg-zinc-800 animate-pulse"></div>
                                                    );
                                                })}
                                        <div className="flex-col w-full flex md:flex-row items-center justify-between gap-5">
                                            <div className="w-full md:w-[550px] bg-white h-[500px] rounded-xl p-3 shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                                                <div className="w-full h-full flex flex-col items-center justify-around gap-5 p-5">
                                                    <h3 className=" text-black text-2xl md:text-5xl text-center">Оставить отзыв</h3>
                                                    <form action="info" className="w-full flex flex-col items-center justify-between h-full  text-black">
                                                    <label className='w-full flex flex-col gap-3' htmlFor="">Дата:
                                                        <input required className='w-full text-black border border-zinc-900 rounded-full p-2' placeholder='06.08.2005' type="data" title='' />
                                                    </label>
                                                    <label className='w-full flex flex-col gap-3' htmlFor="">
                                                        <input required className='w-full text-black border border-zinc-900 rounded-full p-2' placeholder='sigma@gmail.com' type="email" title='' />
                                                    </label>
                                                    <label className='w-full flex flex-col gap-3' htmlFor="">
                                                        <input required className='w-full text-black border border-zinc-900 rounded-full p-2' placeholder='Иванов Иван Иванович' type="text" title='' />
                                                    </label>
                                                    <button className="w-1/2 mt-5 text-white uppercase text-xl md:text-2xl bg-accent rounded-xl p-2 hover:scale-[1.04] transition-all duration-200 items-center justify-center text-center"></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {/* Конец отзывов */}
    </section>
  )
}