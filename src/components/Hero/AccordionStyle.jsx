import React, { useState } from 'react';

export default function AccordionData({ title, content }){
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full m-auto">
      <div className="flex justify-between p-3 mb-2 bg-blue-800 shadow-md" onClick={() => setIsActive(!isActive)}>
        <div className='text-xl font-semibold'>{title}</div>
        <div className='font-bold text-3xl cursor-pointer'>{isActive ? '-' : '+'}</div>
      </div >
      {isActive && <div className='p-4 text-xl bg-blue-700 ease-in duration-1000'>{content}</div>}
    </div>
  );
};

