"use client";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import React, { useEffect } from 'react'

export default function page() {

  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <section className='w-full py-[150px]'>
        <div className="container mx-auto">
          <div className="relative w-full h-full flex items-start gap-[35px]">
            {user ?

              <div className="w-full">
                <div className="w-[200px] h-[200px] mb-10">
                  <Image src={user.image?? ''} alt={'Изображение профиля'} width={200} height={200} className='w-full h-full rounded-sm object-cover border border-zinc-800'/>
                </div>
                <ul className='flex flex-col w-full'>
                  <li className=''>
                    <h3 className='mb-2 h3'>Имя: {user.given_name}</h3>
                    <p className='text-lg'>Фамилия: {user.family_name}</p>
                  </li>
                  <li className='mt-20'>
                    <p className="text-lg">Emal: {user.email}</p>
                  </li>
                </ul>
              </div>

            :
                <div className="w-full">
                <div className="w-[200px] h-[200px] mb-10">
                  <div className="w-full h-full rounded-sm object-cover border block animate-pulse bg-zinc-800"></div>
                </div>
                <ul className='flex flex-col w-full'>
                  <li className='flex flex-col gap-5'>
                    <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
                    <div className='w-1/3 h-12 rounded-lg bg-zinc-800 animate-pulse'></div>
                  </li>
                  <li className='mt-10 animate-pulse'>
                    <div className="w-full h-5 rounded-lg bg-zinc-800 animate-pulse"></div>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
    </section>
  )
}