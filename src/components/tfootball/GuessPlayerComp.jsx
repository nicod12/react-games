import React, { useRef, useState } from 'react'


const players = [
  "HkGqxSnZ/beckham.webp",
  "XJKQzKds/drogba.webp",
  "GhLS6fMG/maradona.webp",
  "BbzBmZH0/pele.png",
  "VvD4YY7M/ramos.webp",
  "LJ4ty30r/aguero.webp",
  "KR2rT27c/buffon.webp",
  "Yjgzj9Wy/casillas.webp",
  "mz1NYZ6k/gerard.webp",
  "qtRG7xs8/kroos.webp",
  "V0Mg8sjp/lewandowski.webp",
  "mty3N5VY/maldini.webp",
  "6pj1DwKy/messi.png",
  "cg1GCjDF/muller.webp",
  "kRt1gvdj/robben.webp",
  "FdzC2QCX/ronaldinho.webp",
  "pynq8CgC/ronaldo.webp",
  "87bycCqV/rooney.webp",
  "qhDSR767/tevez.webp",
  "v1NtxxhC/trezeguet.webp",
  "c6HNNptH/zidane.webp"
].sort(() => Math.random() - 0.22);

const MATCH = Math.floor(Math.random() * players.length);


const url = `https://i.postimg.cc/`

const GuessPlayerComp = () => {

  const [hasWon, toggleWon] = useState(false);

  let fbclub = `${url}${players[MATCH]}`.toString();
  let club = fbclub.split("/");
  let player = club[4].split('.')[0];

  
  //.split("/");
  // let lastName = temp[1].split('.')[0];
  console.log()
  

  const inputRef = useRef("");

  const handleSubmit =(e) => {
    e.preventDefault();
    const input = inputRef.current.value

    if(input.trim() === player) {
     toggleWon(true);
     alert("You Won");
    }

  }


  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='sm:w-32 sm:text-md md:text-xl lg:text-2xl xl:text-4xl
                      sm:mb-6 md:mb-6 lg:mb-24 xl:mb-20'
        >
          Test how much you know about soccer guess the player.
        </p>
       <section className='flex flex-col justify-center items-center 
                        bg-gradient-to-br from-blue-100 via-pink-100 to-slate-300
                        sm:w-72 sm:h-104 md:w-80 md:h-104  lg:w-104 lg:h-108 xl:w-104 xl:h-108
                        shadow-xl rounded-md'
        >
          <img 
            src={`${url}${players[MATCH]}`} 
            alt="icon"
            className={`mb-4 mt-4 sm:w-56 sm:h-72 md:w-56 md:h-72 lg:w-80 lg:h-80 xl:w-72 xl:h-96 ${hasWon ? "" : "blur-sm"}`}
          />
          {
            hasWon ? (
            <section className='flex flex-col items-center' >
                  <p className='text-center 
                                sm:text-sm md:text-md lg:text-xl xl:text-2xl'
                  >
                    The player is: <span className='font-bold'>{player.toUpperCase()}</span>
                  </p>
                  <button
                    className="mt-12 w-40 bg-gray-800 hover:bg-black text-white text-lg uppercase font-bold py-2 px-4 rounded" 
                    onClick={ ()=> location.reload()}
                  >
                    Play again
                  </button>
              </section>
          
              ) :
              (
                <div>
                  <form 
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col'>
                    <input 
                      ref={inputRef}
                      type="text" 
                      className='shadow-sm shadow-gray-100 rounded-md
                                sm:p-1 md:p-2 lg:p-1 xl:p-4
                                sm:mb-2 md:mb-6 lg:mb-2 xl:mb-3 
                                sm:text-md md:text-lg lg:text-2xl xl:text-2xl' 
                    />
                    <button 
                      className="mt-4 w-full bg-gray-800 hover:bg-black
                              text-white text-lg uppercase font-bold 
                                sm:mb-2 md:mb-6 lg:mb-6 xl:mb-6
                                py-2 px-4 rounded shadow-sm shadow-black border border-gray-500"
                      >
                        Submit
                      </button>
                  </form>
                </div>
              )
          }
        </section>
    </div>
  )
}

export default GuessPlayerComp;