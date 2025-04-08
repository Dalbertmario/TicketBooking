import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function LiveEvent() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative top-[100px] transition-transform duration-700 ease-out ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
      } flex flex-col px-4 gap-6 pb-6 bg-slate-100`}
    >
      <h1 className="font-semibold font-mono text-2xl text-center">
        Top Live Events for You
      </h1>

      {/* Horizontal scroll container */}
      <div className="flex flex-row xl:justify-center sm:justify-start gap-4 overflow-x-auto scrollbar-hide scroll-smooth max-w-full px-2">
        <NavLink to="/category/comedy">
          <img
            className="min-w-[200px] h-[200px] object-cover rounded-lg"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NiBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png"
            alt="Comedy"
          />
        </NavLink>

        <NavLink to="/category/Kids">
          <img
            className="min-w-[200px] h-[200px] object-cover rounded-lg"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/kids-banner-desktop-collection-202503251132.png"
            alt="Kids"
          />
        </NavLink>

        <NavLink to="/category/music">
          <img
            className="min-w-[200px] h-[200px] object-cover rounded-lg"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png"
            alt="Music"
          />
        </NavLink>

        <NavLink to="/category/art">
          <img
            className="min-w-[200px] h-[200px] object-cover rounded-lg"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png"
            alt="Art"
          />
        </NavLink>

        <NavLink to="/category/workshop">
          <img
            className="min-w-[200px] h-[200px] object-cover rounded-lg"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png"
            alt="Workshop"
          />
        </NavLink>
      </div>
    </div>
  );
}
