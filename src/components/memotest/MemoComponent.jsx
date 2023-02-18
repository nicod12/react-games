import React, { useEffect, useState } from 'react'

export const images = [
  "https://i.postimg.cc/jjK8kX13/estrella.png",
  "https://i.postimg.cc/tJS3Ddxf/hongo.png",
  "https://i.postimg.cc/PqJkRT9R/luigi.png",
  "https://i.postimg.cc/y8WQqx6c/mario.png",
  "https://i.postimg.cc/3NJjgfdm/moneda.png",
  "https://i.postimg.cc/QNRJym9g/planta.png",
  "https://i.postimg.cc/s2wJHR71/yoshi.png",
  "https://i.postimg.cc/1tg7Lb4K/fantasma.png"
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5);

const MemoComponent = () => {
    const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if(selected.length === 2) {
      if(selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected))
      }
      setTimeout(() => setSelected([]), 1500)
    }
  },[selected]);

  useEffect(() => {
    if (guessed.length === images.length){
      alert("You Win");
      location.reload();
    }
  }, [guessed])

  return (
      <section>
        <h3 className='text-center sm:text-sm md:text-md lg:text-lg xl:text-2xl 
        sm:mb-14 md:mb-28 lg:mb-28 xl:mb-28'
        >
          Memotest is a game that stimulates memory and observation skills.
        </h3>
        <ul className='grid grid-cols-4 gap-6
                    sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto xl:h-auto 
                    border border-black sm:p-2 md:p-2 lg:p-6 xl:p-8 
                    bg-gradient-to-bl from-slate-200 to-gray-300 shadow-lg'
      >
        {
          images.map((image) => {
            const [,url] = image.split("|")
            return (
              <li
                onClick={() => selected.length < 2 && setSelected(selected => selected.concat(image))}  
                key={image} 
                className="list-none cursor-pointer 
                            rounded-lg border-x-2 border-black"
                            
                          
              >
                {selected.includes(image) || guessed.includes(image) ? (
                  <img 
                  src={url} 
                  alt="..." 
                  className='sm:w-32 sm:h-24 md:w-32 md:h-24 lg:w-32 lg:h-24 xl:w-44 xl:h-28'
                />
                ) : (
                  
                  <img
                    key={url} 
                    src="https://i.postimg.cc/R0nYjhCq/interrogaci-n.png"
                    alt="..."
                    className='sm:w-32 sm:h-24 md:w-32 md:h-24 lg:w-32 lg:h-24 xl:w-44 xl:h-28 grayscale '
                    
                  />
                )}
              </li>
              )
          })}
        </ul>
      </section>
  )
}

export default MemoComponent;