import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className=' w-full h-[80px] bg-blend-multiply bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.3)]  '>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
            <Link href="/" className=' w-[50px] h-[50px] group'>
              <Image className='w-full h-full rounded-md group-hover:scale-[1.1] transition-all duration-200' src={'/assets/image/logo.svg'} width={50} height={50} alt='Логотип сайта'  />
            </Link>
          <div className="block">
            <ul className="flex w-full gap-5">
                <li className="flex w-full gap-5">
                    <Link href={''} target="_blank" className='group w-[50px] h-[50px] rounded-xl'>
                        <Image src={'/assets/image/vk.svg'} alt={'Картинка записи'} width={40} height={40} className='w-full h-full object-cover p-1 group-hover:scale-[1.1] transition-all rounded-full duration-200' />
                    </Link>
                    <Link href={''} target="_blank" className='group w-[50px] h-[50px] rounded-xl'>
                        <Image src={'/assets/image/vk.svg'} alt={'Картинка записи'} width={40} height={40} className='w-full h-full object-cover p-1 group-hover:scale-[1.1] transition-all rounded-full duration-200' />
                    </Link>
                    <Link href={''} target="_blank" className='group w-[50px] h-[50px] rounded-xl'>
                        <Image src={'/assets/image/vk.svg'} alt={'Картинка записи'} width={40} height={40} className='w-full h-full object-cover p-1 group-hover:scale-[1.1] transition-all rounded-full duration-200' />
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer