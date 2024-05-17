import Link from 'next/link'
import React from 'react'
import PaintCard from '../PaintCard/PaintCard'

const Paints = () => {
  return (
    <section className='w-full py-10' id='pictures'>
        <div className="container mx-auto">
            <div className="w-full flex items-center justify-center ">
                <h2 className="text-black text-4xl md:text-5xl text-center mb-10">Картины</h2>
            </div>
            <div className="flex gap-10 mb-5  ">
                <div className=" flex gap-3 items-center">
                    <label className='text-lg font-semibold' htmlFor="">Дата:</label>
                    <select className=' border border-blue-500 p-2 rounded-sm' name="years" id="years">
                        <option value="">1999</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                <label className='text-lg font-semibold' htmlFor="">Автор:</label>
                    <select className=' border border-blue-500 p-2 rounded-sm' name="autors" id="autors">
                        <option value="">Василий Дмитриевич Поленов</option>
                    </select>
                </div>
            </div>
            <PaintCard />
        </div>
    </section>
  )
}

export default Paints