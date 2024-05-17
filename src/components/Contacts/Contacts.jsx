import Image from 'next/image'
import React from 'react'

const Contacts = () => {
  return (
    <section className='w-full py-10' id='contacts'>
            <div className=" container mx-auto">
            <div className="w-full flex items-center justify-center ">
                <h2 className="text-black text-4xl md:text-5xl text-center mb-10">Контакты</h2>
            </div>
            <div className="relative flex">
                <div className="relative w-full h-[450px] rounded-md overflow-hidden mb-3">
                    <Image src={'/assets/image/1.jpg'} className=' w-full h-full object-cover object-center' fill alt='Контакт'/>
                </div>
                <div className="md:shadow-[0_0_10px_3px_rgba(0,0,0,0.5)] border-b rounded-sm absolute right-0 w-[500px] p-5 m-5 h-[400px] bg-white">
                    <h3 className="  text-black text-2xl md:text-3xl text-center mb-5">О нас</h3>
                    <p className="mb-3">ARTDOART - первая в России онлайн-галерея, площадка, объединяющая профессиональных художников и ценителей искусства. Мы помогаем талантливым авторам в продвижении в сфере искусства и дизайна. Покупатели могут приобрести произведения искусства без посредников при помощи механизма безопасной сделки. Одна из ключевых особенностей проекта ARTDOART - формат социальной сети: мы обеспечиваем международную коммуникацию в сфере искусства.</p>
                    <p className="">"Искусство создавать искусство Искусство продавать искусство".</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts