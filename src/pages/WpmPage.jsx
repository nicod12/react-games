import React from 'react'
import BackComponent from '../components/BackComponent';
import WpmComponent from '../components/wpm/WpmComponent';

const WpmPage = () => {
  return (
    <div className='flex flex-col items-center'>

      <WpmComponent />
      <BackComponent />
    </div>
  )
}

export default WpmPage;