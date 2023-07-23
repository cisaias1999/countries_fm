'use client'
import React, { useEffect, useState } from "react";

const InputForm = ({ handleInputChange, value }) => {

  return (
    <div className="relative w-full lg:w-[480px] h-[56px] ">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-3 top-1/2  -translate-y-1/2	">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484" />
      </svg>
      <input type="text" onChange={handleInputChange} value={value} className="rounded-md bg-[#FFF] shadow-custom w-full h-[56px] px-[40px] focus:outline-none" />
    </div>
  );
};

export default InputForm;
