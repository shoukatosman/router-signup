import React, { useContext } from 'react';
import { MoneyContext } from '../Home';

const BrotherSpecial = () => {
   const taka = useContext(MoneyContext);
    return (
        <div className= 'text-2xl text-center m-5 p-10 border-green-500 border-2 rounded'>
              <h1>This is Brother Special {taka} </h1> 
        </div>
    );
};

export default BrotherSpecial;