import React, { useRef, useState } from 'react'




const characters = [
"dhCw2TDY/agumon.png",
"WF82DLzq/batman.png",
"SYKmCTYT/bellota.png",
"3yH7nJDD/billy.png",
"F78hkxrp/blue.png",
"YjXrMHTJ/garfield.png",
"4KbGMkz2/homero.png",
"kV93W1kQ/hulk.png",
"9Rm2H8bm/jerry.png",
"tn7HYs88/lilo.png",
"nMLxdWMT/pikachu.png",
"0rHshCwv/porky.png",
"Xr96GSDN/pumba.png",
"Y43cRNHJ/seiya.png",
"dLkYFT2y/silvestre.png",
"8j2VzP4n/spiderman.png",
"tZCKM1R7/tablon.png",
"R6sk5Mqd/wolverine.png",
"4nCXQ8sK/dexter.png",
"bNdN9GbP/coraje.png"

].sort(() => Math.random() - 0.20);

const MATCH = Math.floor(Math.random() * characters.length);


const url = `https://i.postimg.cc/`

const GuessCharacterComp = () => {

  const [hasWon, toggleWon] = useState(false);

  //getName to character
  let temp = `${url}${characters[MATCH]}`.toString();
  let char = temp.split("/");
  let character = char[4].split('.')[0];


  const inputRef = useRef("");

  const handleSubmit =(e) => {
    e.preventDefault();
    const input = inputRef.current.value.toLowerCase();

    if(input.trim() === character) {
     toggleWon(true);
     alert("You Won");
    }
  }

  function refreshPage() {
    location.reload(false);
  }


  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='w-auto sm:w-auto md:w-auto lg:w-auto xl:w-auto  text-lg sm:text-md md:text-xl lg:text-2xl xl:text-4xl
                       mb-12 mt-6 sm:mb-6 md:mb-20 lg:mb-20 xl:mb-20'
        >
          Guess the character
        </p>
       <section className='flex flex-col justify-center items-center 
                        bg-gradient-to-br from-blue-100 via-pink-100 to-slate-300
                        w-64 h-76 sm:w-64 sm:h-auto md:w-auto md:h-auto  lg:w-96 lg:h-auto xl:w-104 xl:h-auto
                        mb-0 sm:mb-2 md:mb-6 lg:mb-6 xl:mb-6
                        shadow-xl rounded-md'
        >
          <img 
            src={`${url}${characters[MATCH]}`} 
            alt="icon"
            className={`mb-4  mt-8 sm:mt-4 md:mt-4 lg:mt-6 xl:mt-12 
                        w-32 h-32 sm:w-auto sm:h-auto md:w-44 md:h-36 
                        lg:w-auto lg:h-36 xl:w-72 xl:h-auto 
                        ${hasWon ? "" : "brightness-0 contrast-0"}`}
          />
          {
            hasWon ? (
            <section className='flex flex-col items-center' >
                  <p className='text-center 
                                text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'
                  >
                    The player is: <span className='font-bold'>{character.toUpperCase()}</span>
                  </p>
                  <button
                    className="m-6 m w-36 sm:w-40  p-1 sm:p-2  bg-gray-800 hover:bg-black text-white text-lg uppercase font-bold rounded" 
                    onClick={refreshPage}
                  >
                    Play again
                  </button>
              </section>
          
              ) :
              (
                <div>
                  <form 
                    onSubmit={handleSubmit}
                    className='mt-6 flex flex-col'>
                    <input 
                      ref={inputRef}
                      type="text" 
                      className='shadow-sm shadow-gray-100 rounded-md
                                p-0 sm:p-1 md:p-2 lg:p-1 xl:p-4
                                mb-2 sm:mb-2 md:mb-6 lg:mb-2 xl:mb-3 
                                sm:text-md md:text-lg lg:text-2xl xl:text-2xl' 
                    />
                    <button 
                      className="mt-4 w-full bg-gray-800 hover:bg-black
                              text-white text-lg uppercase font-bold 
                                mb-4 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8
                                p-0 sm:p-1 md:p-2 lg:p-1 xl:p-4
                               rounded shadow-sm shadow-black border border-gray-500"
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

export default GuessCharacterComp;