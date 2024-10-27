import React, { useContext } from 'react';
import { MoneyContext } from '../Home';

const PaternalCousin = () => {
   const money = useContext(MoneyContext)
    return (
            <div className= 'text-2xl text-center m-5 p-10 border-green-500 border-2 rounded'>
              <h1>This is Paternal Cousin {money} </h1> 
        </div>
        
    );
};

export default PaternalCousin;