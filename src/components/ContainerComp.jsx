import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { games } from '../models/data';

const ContainerComp = () => {
    const [isReadyForInstall, setIsReadyForInstall] = useState(false);

    useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
        // Prevent the mini-infobar from appearing on mobile.
        event.preventDefault();
        console.log("👍", "beforeinstallprompt", event);
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container.
        setIsReadyForInstall(true);
    });
    }, []);

    async function downloadApp() {
        console.log("👍", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          console.log("oops, no prompt event guardado en window");
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
      }

  return (
   <main>
    <section className='mt-12 sm:mt-12 md:mb-12 lg:mb-12 xl:mb-12'
    >
     <div className='flex items-center justify-center'>
        <h1 className='text-center font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl '>WP-Games</h1>
        <img 
            src="https://i.postimg.cc/j21dZpXz/pngegg-4.png" 
            alt="icon" 
            className='w-5 sm:w-6 sm:h-7 md:w-12 md:h-14 lg:w-18 lg:h-12 xl:w-22 xl:h-12'
        />
     </div>
        {
            isReadyForInstall && <div className='flex flex-col justify-center'>
                                    <button className='text-xl uppercase'
                                    onClick={downloadApp}
                                    >
                                        Download
                                    </button>
                                </div>
        }
        
    </section>
        <section className="m-6 grid grid-col-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 
                            gap-12 sm:gap-10 md:gap-7 lg:gap-9 xl:gap-14
                            sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto xl:h-auto">
        {
            games.map(item => {
                return(
                    <article 
                        key={item.id} 
                        className=' 
                                    p-4 sm:p-2 md:p-2 lg:p-4 xl:p-6 bg-slate-100 m-6 
                                    shadow-md shadow-emerald-800 rounded-xl
                                    flex flex-col justify-center items-center'
                    >
                        <img 
                            src={item.image} 
                            className="w-20 text-sm h-14 sm:w-36 sm:h-28 md:w-36 md:h-28 lg:w-44 lg:h-36 xl:w-56 xl:h-44" 
                            alt={`image${item.name}`} />
                        <div className=' p-2'>
                            <h2 
                                className='text-center text-gray-700 font-bold uppercase
                                            text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl'
                            >
                                {item.name}
                            </h2>
                            <Link
                                to={item.path} 
                                className='flex justify-center mt-1 text-gray-700 
                                          text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl'
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