import React from 'react'
import BackComponent from '../components/BackComponent';
import GuessPlayerComp from '../components/tfootball/GuessPlayerComp';



const GuessPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <GuessPlayerComp/>
        <BackComponent />
    </div>
  )
}

export default GuessPage;