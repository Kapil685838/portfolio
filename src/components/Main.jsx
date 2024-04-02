import React from 'react';
import { useSelector } from 'react-redux';

function Main() {
  const experience = useSelector(state => state.experience.list);
  
  return (
    <main className='container h-[50vh] pt-20'>
        This is my actual content
    </main>
  )
}

export default Main
