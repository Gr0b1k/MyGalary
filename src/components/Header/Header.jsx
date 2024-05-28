"use client";
import React, { useEffect } from 'react'
import Link from 'next/link';
import Navbar from '@/collections/Navbar';
import { usePathname } from 'next/navigation';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';

const Header = () => {

  const path = usePathname();
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <header className='w-full h-[80px] fixed md:absolute z-50 bg-black/70  md:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)]' id='header'>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          <div className="flex gap-2">
            <menu className="w-full flex items-center justify-center gap-10">
              {Navbar.map((item, index) => {
                return(
                  <li key={index} className=" inline-flex">
                    <Link href={item.url} className={`${path == item.url ? 'bg-blue-100 text-black' :' text-white ' } p-2 hover:bg-blue-500 hover:text-white transition-colors duration-200 rounded-md`}>{item.label}</Link>
                  </li>
                );
              })}

            </menu>
          </div>
          <div className=''>
            <ul className="flex items-center gap-4">
              {user ?
                <>
                  <div className='flex items-center gap-2'>
                    <Link href={'/profile'}>
                      <Image src={user.image?? ''} alt={'Изображение профиля'} width={50} height={50} className='w-[50px] h-[50px] rounded-full object-cover'/>
                    </Link>
                    <LogoutLink className='uppercase text-white/50 hover:text-white transition-all'>Выйти</LogoutLink>
                  </div>
                </>
                :
                <>
                  <li className="inline-flex">
                    <RegisterLink className='uppercase text-white/50 hover:text-white transition-all'>Регистрация</RegisterLink>
                  </li>
                  <li className="inline-flex">
                    <LoginLink className='uppercase text-white/50 hover:text-white transition-all'>Войти</LoginLink>
                  </li>
                </>
              }
            </ul>
          </div>
          {/* <div className="flex items-center gap-2">
            <Link href={'/'} className='text-white font-medium duration-300 hover:text-black hover:bg-blue-100 rounded-md transition-colors p-2'>Зарегистрироваться</Link>
            <Link href={'/'} className='px-4 py-2 rounded-md bg-stone-950 text-white font-medium hover:bg-stone-800'>Войти</Link>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header