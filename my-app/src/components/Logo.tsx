import React from 'react';
import { TbLetterF, TbLetterE, TbLetterL, TbLetterI, TbLetterP, TbLetterT, TbLetterG, TbLetterA, TbCode } from "react-icons/tb";

const Logo = () => {
  return (

    <div className='flex flex-row items-center justify-center p-2'>

        <div className='mr-2'>

            <TbCode size={50} />

        </div>

        <div className="flex flex-col items-center">

            <div className="flex">
                <TbLetterF />
                <TbLetterE />
                <TbLetterL />
                <TbLetterI />
                <TbLetterP />
                <TbLetterE />
            </div>

            <div className="flex space-x-1 mt-4">
                <TbLetterT />
                <TbLetterE />
                <TbLetterG />
                <TbLetterA />
            </div>

        </div>

    </div>

    
  );
}

export default Logo;
