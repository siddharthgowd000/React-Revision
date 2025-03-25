import { useState } from 'react';

function BgScreen() {
    const [color, setColor] = useState('olive')

const coloArr = ["red", "blue", "green", "yellow", "purple", "orange"];
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className='bg-white flex flex-wrap justify-center rounded-3xl px-3 py-2' >
                
                {coloArr.map((colorr) =>(
                    <button key={colorr} className='text-black px-3 py-1 m-1 rounded' style={{backgroundColor: colorr}} onClick={()=>setColor(colorr)}>{colorr}</button>
                ))}
        </div>
      </div>
    </div>
  );
}

export default BgScreen;
