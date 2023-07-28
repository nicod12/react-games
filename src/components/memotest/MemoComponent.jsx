import React, { useEffect, useState } from 'react'
import useCounter from '../../utils/hooks/useCounter';

export const images = [
"https://cdn-icons-png.flaticon.com/128/9412/9412332.png",
"https://cdn-icons-png.flaticon.com/128/6466/6466948.png",
"https://cdn-icons-png.flaticon.com/128/4251/4251687.png",
"https://cdn-icons-png.flaticon.com/128/785/785126.png",
"https://cdn-icons-png.flaticon.com/128/1144/1144441.png",
"https://cdn-icons-png.flaticon.com/128/4932/4932383.png",
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5);

const MemoComponent = () => {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);
  const correct = useCounter(0);
  const errors = useCounter(0);

  useEffect(() => {
    if(selected.length === 2) {
      if(selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
        correct.increment();
      }else {
        errors.increment();
      }
      setTimeout(() => setSelected([]), 1500)
    }
  },[selected]);

  useEffect(() => {
    if (guessed.length === images.length){
      alert("You Win");
      window.location.reload(false);
    }
  }, [guessed])

  return (
      <section className='flex flex-col items-center justify-center'>
        <h3 className='mb-16 text-center'
        >
         El Memotest es un juego que permite desarrollar atención, concentración, memoria, reconocimiento visual y orientarse en el espacio
        </h3>
        <ul className='border border-gray-300 rounded-sm p-4 grid grid-cols-3 gap-3 shadow-2xl'
      >
        {
          images.map((image) => {
            const [,url] = image.split("|")
            return (
              <li
                onClick={() => selected.length < 2 && setSelected(selected => selected.concat(image))}  
                key={image} 
                className="border border-black rounded-md p-1 cursor-pointer hover:bg-gray-50 hover:opacity-50"              
              >
                {selected.includes(image) || guessed.includes(image) ? (
                  <img 
                  src={url} 
                  alt="..." 
                />
                ) : (
                  
                  <img
                    key={url} 
                    src="https://cdn-icons-png.flaticon.com/128/3109/3109891.png"
                    alt="..."
                  />
                )}
              </li>
              )
          })}
        </ul>
        {
          correct.value  ?
            (<p className='text-lg text-green-500 mt-2'>Aciertos: {correct.value}</p>)
            :
            ("")
        }
         {
          errors.value  ?
            (<p className='text-lg text-red-500 mt-1'>Errores: {errors.value}</p>)
            :
            ("")
        }
      </section>
  )
}

export default MemoComponent;