import React from 'react'
import { Link } from 'react-router-dom'
import { games } from '../models/data'

const ContainerComp = () => {
  return (
   <main >
    <section className='flex items-center justify-center 
                        sm:mt-12 md:mb-12 lg:mb-12 xl:mb-12
                        '>
     <h1 className='text-center font-bold sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl '>WP-Games</h1>
     <img 
        src="https://i.postimg.cc/j21dZpXz/pngegg-4.png" 
        alt="icon" 
        className='sm:w-6 sm:h-7 md:w-12 md:h-14 lg:w-18 lg:h-12 xl:w-22 xl:h-12'
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
                        className=' 
                                    sm:p-2 md:p-2 lg:p-4 xl:p-6 bg-slate-100 m-6 
                                    shadow-md shadow-emerald-800 rounded-xl
                                    flex flex-col justify-center items-center'
                    >
                        <img 
                            src={item.image} 
                            className="sm:w-36 sm:h-28 md:w-36 md:h-28 lg:w-44 lg:h-36 xl:w-56 xl:h-44" 
                            alt={`image${item.name}`} />
                        <div className=' p-2'>
                            <h2 
                                className='text-center text-gray-700 font-bold uppercase
                                            sm:text-sm'
                            >
                                {item.name}
                            </h2>
                            <Link
                                to={item.path} 
                                className='flex justify-center mt-1 text-2xl text-gray-700 
                                            sm:text-sm'
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