import React, { useEffect, useState } from 'react'
import { words } from '../../models/data';
import useCounter from '../../utils/hooks/useCounter';
import useInput from '../../utils/hooks/useInput';



const WpmComponent = () => {
  
 const [word,setWord] = useState(()=> words[Math.random() * words.length | 0]); 
 const [characterCount, setCharacterCount] = useState(0);
 const buffer = useInput('');
 const errors = useCounter(0);
 const [time, setTime] = useState(0);
 
 const handleSubmit = (e) => {
    e.preventDefault();

    if(buffer.value.toLowerCase() === word) {
      setWord(words[Math.random() * words.length | 0]);
      setCharacterCount(characterCount => characterCount + word.length);
    }else {
      if(buffer.value !== word) {
        errors.increment();
      }
    }
    buffer.clear();
 }

 const handleClick = (e) => {
  e.preventDefault();

  setTime(60);
  if(time === 0) {
    setCharacterCount(0);
    errors.reset();
  }
 }

 useEffect(() => {
  if(time !== 0) {
    const timeout = setTimeout(()=> setTime(time - 1),1000);
    return () => clearTimeout(timeout);
  }
 },[time]);



    
  return (
    <section className='mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-32'>
      <h3 className='text-center mb-6 sm:mb-4 md:mb-8 lg:mb-12 xl:mb-16
        sm:text-lg md:text-2xl lg:text-2xl xl:text-5xl'
        >
        Mide tu velocidad en palabras por minuto.
      </h3>
      <div className='flex flex-col gap-3 text-center'>
        {Boolean(time) && <h2 className='text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                                         mb-1 sm:mb-2 md:mb-6 lg:mb-6 xl:mb-8 font-bold uppercase'
                          >
                            {word}
                          </h2>}
          {
            errors.value ? (
              <p className='mb-2 text-red-600  sm:text-xl md:text-xl lg:text-2xl xl:text-4xl'>
                Errores: {errors.value}
              </p>
            ): (
              ""
            )
          }
        <h3 className='mb-1 sm:mb-2 md:mb-6 lg:mb-6 xl:mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'>Caracteres: {characterCount}</h3>
        <h3 className='mb-1 sm:mb-2 md:mb-6 lg:mb-6 xl:mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'>Tiempo restante: {time}</h3>
        {
          time ? (
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col items-center justify-center  sm:flex-row md:flex-row lg:flex-row xl:flex-row w-auto h-auto'>
                <input 
                      type="text"
                      autoFocus
                      value={buffer.value}
                      onChange={buffer.onChange}
                      className=" opacity-70 sm:p-1 md:p-2 lg:p-2 xl:p-4
                                sm:text-md md:text-lg lg:text-2xl xl:text-4xl"
                />
                  <button 
                      className='bg-gray-800 hover:bg-black
                              text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 
                               p-2 sm:p-0 md:p-1 lg:p-1 xl:p-1
                               mt-3 sm:m-0 md:m-0 lg:m-0 xl:m-0 w-64 sm:w-auto md:w-auto lg:w-auto xl:w-auto' 
                      type='submit'
                  >
                        Submit
                  </button>
              </div>
          </form>
          ) :
          (
            <section className='flex items-center justify-center'>
                <button 
                onClick={handleClick}
                className="sm:w-24 md:w-28 lg:w-36 xl:w-48 bg-gray-800 hover:bg-black 
                        text-white font-bold py-2 px-4 rounded 
                          shadow-sm shadow-black border border-gray-300
                          sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl
                          mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12"
              >
                Jugar
              </button>
            </section>
          )}
      </div>
    </section>
  )
}

export default WpmComponent;