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

    if(buffer.value === word) {
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
    <section>
      <h3 className='text-center sm:mb-4 md:mb-8 lg:mb-12 xl:mb-16
        sm:text-lg md:text-2xl lg:text-2xl xl:text-5xl'
        >
        Measure your speed in words per minute.
      </h3>
      <div className='flex flex-col gap-3 text-center'>
        {Boolean(time) && <h2 className='sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                                         sm:mb-2 md:mb-6 lg:mb-6 xl:mb-8 font-bold'
                          >
                            {word}
                          </h2>}
          {
            errors.value ? (
              <p className='mb-2 sm:text-xl md:text-xl lg:text-2xl xl:text-4xl'>
                Wrong words: {errors.value}
              </p>
            ): (
              ""
            )
          }
        <h3 className='sm:mb-2 md:mb-6 lg:mb-6 xl:mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'>Character typed: {characterCount}</h3>
        <h3 className='sm:mb-2 md:mb-6 lg:mb-6 xl:mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'>Remaining time: {time}</h3>
        {
          time ? (
            <form onSubmit={handleSubmit}>
              <div className='flex items-center w-auto- h-auto'>
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
                              sm:p-none md:p-1 lg:p-1 xl:p-1 ' 
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
                          sm:mb-2 md:mb-6 lg:mb-6 xl:mb-6"
              >
                Play
              </button>
            </section>
          )}
      </div>
    </section>
  )
}

export default WpmComponent;