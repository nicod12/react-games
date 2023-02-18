import React from 'react'
import { Link } from 'react-router-dom'
import { games } from '../models/data'

const ContainerComp = () => {
  return (
   <main>
    <section className='flex items-center justify-center 
                        sm:mt-12 md:mb-12 lg:mb-12 xl:mb-12
                        sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto xl:h-auto '>
     <h1 className='text-center font-bold sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl '>WP-Games</h1>
     <img 
        src="https://i.postimg.cc/j21dZpXz/pngegg-4.png" 
        alt="icon" 
        className='sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto xl:h-auto'
    />
    </section>
        <section className="m-6 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 
                            sm:gap-10 md:gap-7 lg:gap-9 xl:gap-14
                            sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto xl:h-auto">
        {
            games.map(item => {
                return(
                    <article 
                        key={item.id} 
                        className=' sm:p-2 md:p-2 lg:p-4 xl:p-6 bg-slate-100 m-6 shadow-md shadow-emerald-800 rounded-xl'
                    >
                        <img 
                            src={item.image} 
                            className="sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto xl:h-auto" 
                            alt={`image${item.name}`} />
                        <div className=' p-2'>
                            <h2 
                                className='text-center text-gray-700 font-bold uppercase'
                            >
                                {item.name}
                            </h2>
                            <Link
                                to={item.path} 
                                className='flex justify-center mt-1 text-2xl text-gray-700 '
                            >
                                Play Now
                            </Link>
                        </div>
                    </article>
                )
            })
        }
    </section>
   </main>
  )
}

export default ContainerComp