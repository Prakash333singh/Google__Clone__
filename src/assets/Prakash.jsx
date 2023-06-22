import React, { useState } from "react";
//import styled from "styled-components";


const Prakash = () => {
    const [count, setCount] = useState(0);

    return (
      <>
        
          <div className="h-96 flex justify-center align-middle gap-10">
            <button onClick={() => setCount(count + 1)} className='text-6xl text-black'>
              +
            </button>
            <h1 className='text-9xl text-emerald-400 space-x-56 '>{count}</h1>
            <button
              onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))} className='text-6xl gap-24 text-red-950'>
              -
            </button>
          </div>
        
      </>
    );
};


export default Prakash;