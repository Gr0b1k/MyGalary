'use client';
import React from 'react'

const Hero = () => {

//   const detailHero = useHero();

  return (
    <section className='w-full bg-blend-multiply bg-black/30 bg-hero bg-cover bg-bottom bg-no-repeat   shadow-[0_0_20px_5px_rgba(0,0,0,0.7)]' id='hero'>
      <div className=""></div>
        <div className="container mx-auto ">
          <div className="w-full flex items-center justify-end h-[700px] md:h-[950px] py-16">
            <div className=" block backdrop-blur-sm bg-white/10 w-[800px] mt-10 sm:h-[270px] md:h-[300px] rounded-xl p-5">
              <ul className="flex flex-col h-full items-center justify-between">
                <li className="text-white font-medium text-2xl md:text-5xl uppercase">MyGalary</li>
                <li className="text-base md:text-2xl font-normal text-white">первая в России онлайн-галерея, площадка, объединяющая профессиональных художников и ценителей искусства. Мы помогаем талантливым авторам в продвижении в сфере искусства и дизайна.</li>
                {/* {detailHero?.attributes?.title ? 
                  <li className="text-white font-medium text-2xl md:text-5xl uppercase">{detailHero?.attributes?.title}</li>
                  :
                  <div className='w-full flex flex-col gap-4 z-30'>
                      <div className=" z-30 w-full h-[150px] rounded-lg bg-zinc-800 animate-pulse"></div>
                  </div>
                }
                {detailHero?.attributes?.description ? 
                  <li className="text-base md:text-2xl font-normal text-white">{detailHero?.attributes?.description}</li>
                  :
                  <div className='w-full flex flex-col gap-4 z-30'>
                      <div className=" z-30 w-full h-[200px] rounded-lg bg-zinc-800 animate-pulse"></div>
                  </div>
                } */}
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero