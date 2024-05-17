import React from 'react'
import AutorCard from '../AutorCard/AutorCard'

const Autors = () => {
  return (
    <section className='w-full py-10' id='autors1'>
        <div className="container mx-auto">
            <div className="w-full flex items-center justify-center ">
                <h2 className="text-black text-4xl md:text-5xl text-center mb-10">Авторы</h2>
            </div>
            <AutorCard />
        </div>
    </section>
  )
}

export default Autors