import React from "react";
export function Button({ children }: { children: string }) {
  return (
    <button className='px-12 py-2.5 bg-gray-900 rounded leading-normal text-white'>
      {children}
    </button>
  );
}
