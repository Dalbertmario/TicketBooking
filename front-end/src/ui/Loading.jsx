import React from 'react'
import { LuLoaderCircle } from "react-icons/lu";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white text-black">
      <LuLoaderCircle size={100} className="animate-spin" />
    </div>
  );
}
