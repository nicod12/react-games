import React from 'react'
import BackComponent from '../components/BackComponent';
import GuessCharacterComp from '../components/gcharacter/GuessCharacterComp';




const GuessPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <GuessCharacterComp/>
        <BackComponent />
    </div>
  )
}

export default GuessPage;