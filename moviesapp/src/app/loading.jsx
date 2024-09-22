import React from 'react'

// Yes, in Next.js (specifically in the App Router architecture), the loading.jsx file is automatically used to show a loading UI when data is being fetched
const loading = () => {
  return (
    <div className='flex justify-center mt-16'>
    <img className='h-52' src='spinner.svg' alt='loading...' />
  </div>
  )
}

export default loading