"use client";
import useContacts from '@/hooks/useContacts';
import Image from 'next/image'
import React from 'react'

const Contacts = () => {

    const getContacts = useContacts();

  return ( 
    <section className='w-full py-10' id='contacts'>
            <div className=" container mx-auto">
            <div className="w-full flex items-center justify-center ">
                <h2 className="text-black text-4xl md:text-5xl text-center mb-10">Контакты</h2>
            </div>
            {getContacts.length > 0 ? getContacts.map((item, index) => {
                    return (
            <div className="relative flex">

                <div className="relative w-full h-[450px] rounded-md overflow-hidden mb-3">
                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url ?? ''} className=' w-full h-full object-cover object-center' fill alt='Контакт'/>
                </div>
                <div className="md:shadow-[0_0_10px_3px_rgba(0,0,0,0.5)] border-b rounded-sm absolute right-0 w-[500px] p-5 m-5 h-[400px] bg-white">
                            <h3 className="  text-black text-2xl md:text-3xl text-center mb-5">{item.attributes?.name}</h3>
                            <p className="mb-3">{item.attributes?.description}</p>
                            <p className="">{item.attributes?.text}</p>
                </div>
            </div>
                                ) 
                            })
                            :
                            [1,2,3].map((item, index) => {
                                return (
                                        <div key={index}  className="flex flex-col mt-5 w-full gap-5 h-[60px] rounded-xl  bg-zinc-800 animate-pulse"></div>
                                );
                            })}
        </div>
    </section>
  )
}

export default Contacts