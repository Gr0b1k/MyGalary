"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
// import useSingleProject from '@/hooks/useSingleProject';
// import useReviews from '@/hooks/useReviews';
import Link from 'next/link';



export default function page({ params }) {

    // const detailProject = useSingleProject(params.id);
    // const getReviews = useReviews();

  return (
    <section className='w-full py-16 pt-[120px]'>
        
    {/* Конец основной секции */}
    {/* Начало отзывов */}
        {/* <div className="w-full py-10">
            <div className="container mx-auto">
                <div className="w-full flex flex-col gap-10">
                    <div className="w-full flex gap-5 bg-white p-6 rounded-xl shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]">
                        <div className="w-full flex flex-col gap-5">
                            <h2 className=" text-black h2 text-2xl font-medium">Отзывы клиентов</h2>
                            <div className="w-full flex flex-col gap-5">
                                {detailProject?.attributes?.reviews?.data?.length > 0 ?  detailProject?.attributes?.reviews?.data?.map((item, index) => {
                                    return (
                                        <div key={index} className = "w-full rounded-xl p-3 " >
                                            <div className="w-full flex items-center gap-5 h-[50px] rounded-xl">
                                                <div className="flex items-center gap-[8px]">
                                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.imageUser?.data.attributes?.url ?? '')} alt={'Картинка записи'} width={50} height={50} className='w-[50px] h-[50px] rounded-full object-cover object-top' />
                                                    <h3 className="text-black text-base md:text-xl  group-hover:text-accent transition-colors font-normal">{item.attributes?.nameUser}</h3>
                                                </div>
                                                <div className="">
                                                    {item?.attributes?.rating == 'одна звезда' ? 
                                                        <p className=" text-zinc-800 text-xl uppercase font-bold">⭐</p>
                                                        :
                                                        <>

                                                        </>
                                                    }
                                                    {item?.attributes?.rating == 'две звезды' ? 
                                                        <p className=" text-zinc-800 text-xl uppercase font-bold">⭐⭐</p>
                                                        :
                                                        <>
                                                        
                                                        </>
                                                    }
                                                    {item?.attributes?.rating == 'три звезды' ? 
                                                        <p className=" text-zinc-800 text-xl uppercase font-bold">⭐⭐⭐</p>
                                                        :
                                                        <>
                                                        
                                                        </>
                                                    }
                                                    {item?.attributes?.rating == 'четыре звезды' ? 
                                                        <p className=" text-zinc-800 text-xl uppercase font-bold">⭐⭐⭐⭐</p>
                                                        :
                                                        <>
                                                        
                                                        </>
                                                    }
                                                    {item?.attributes?.rating == 'пять звезд' ? 
                                                        <p className=" text-zinc-800 text-xl uppercase font-bold">⭐⭐⭐⭐⭐</p>
                                                        :
                                                        <>
                                                        
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-3">
                                                <p className=" text-zinc-700 text-md font-normal ">Дата сделки:</p>
                                                <p className=" text-zinc-700 text-md font-normal ">{item.attributes?.date}</p>
                                            </div>
                                            <div className="w-full rounded-xl bg-gray-100 p-4 mt-4">
                                                <p className=" text-sm md:text-lg text-zinc-900">{item.attributes?.text}</p>
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
                                        </div>
                        </div>
                        <div className="w-[500px] justify-end  flex gap-5">
                            <div className="flex flex-col items-start gap-5">
                                <div className="flex gap-5">
                                    <div className="w-[100px] h-[50px]  overflow-hidden rounded-xl mb-4">
                                        {detailProject?.attributes?.contractor?.data.attributes?.image?.data.attributes?.url ? 
                                            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailProject?.attributes?.contractor?.data.attributes?.image?.data.attributes?.url ?? '')} alt={'Изображение подрядчика'} width={50} height={50} className='w-full h-full object-fit' />
                                            :
                                            <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                                        }
                                    </div>
                                    <div className="w-full h-full gap-2">
                                        <p className=" text-zinc-400 text-md font-normal ">Подрядчик</p>
                                        {detailProject?.attributes?.contractor?.data.attributes?.name ? 
                                            <p className=" text-zinc-800 text-xl uppercase font-medium">{detailProject?.attributes?.contractor?.data.attributes?.name}</p>
                                            :
                                            <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
                                        }
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center gap-3">
                                    <div className="w-[40px] h-[40px]">
                                        <Image src={'/assets/image/icons/star.png'} alt={'Изображение подрядчика'} width={40} height={40} className='w-full h-full object-fit' />
                                    </div>
                                    <div className="">
                                        {detailProject?.attributes?.contractor?.data.attributes?.rating == 'одна звезда' ? 
                                            <p className=" text-zinc-800 text-3xl uppercase font-bold">1</p>
                                            :
                                            <>

                                            </>
                                        }
                                        {detailProject?.attributes?.contractor?.data.attributes?.rating == 'две звезды' ? 
                                            <p className=" text-zinc-800 text-3xl uppercase font-bold">2</p>
                                            :
                                            <>
                                            
                                            </>
                                        }
                                        {detailProject?.attributes?.contractor?.data.attributes?.rating == 'три звезды' ? 
                                            <p className=" text-zinc-800 text-3xl uppercase font-bold">3</p>
                                            :
                                            <>
                                            
                                            </>
                                        }
                                        {detailProject?.attributes?.contractor?.data.attributes?.rating == 'четыре звезды' ? 
                                            <p className=" text-zinc-800 text-3xl uppercase font-bold">4</p>
                                            :
                                            <>
                                            
                                            </>
                                        }
                                        {detailProject?.attributes?.contractor?.data.attributes?.rating == 'пять звезд' ? 
                                            <p className=" text-zinc-800 text-3xl uppercase font-bold">5</p>
                                            :
                                            <>
                                            
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    {/* Конец отзывов */}
    </section>
  )
  
}