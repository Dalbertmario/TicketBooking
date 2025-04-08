import React, { useState } from 'react';
import UseGetBookingData from '../features/bookings/GetuserBooking';
import ViewTicket from '../ui/ViewTicket';
import Loading from '../ui/Loading';

export default function Bookingsfront() {
  const { data = [], isLoading } = UseGetBookingData();
  const [bannerClick,setBannerClick] = useState(false)
  const [indexing,setIndexing] = useState(null)
  console.log("Booking Data:", data);

  if (isLoading) return <Loading/>
  function ClickBanner(data){
    setBannerClick(e=>!e)
    setIndexing(data)
  }
  return (
    <>
    {bannerClick && <ViewTicket onClose={setBannerClick} data={data} index={indexing}/>}
    <div className={`mt-[85px] ${bannerClick && 'blur-lg'} max-w-[1200px] mx-auto p-5 h-screen`}>
      <h1 className="text-2xl font-bold mb-4 font-mono">Your Bookings</h1>

      {data?.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 transition-all md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((el, index) => (
            <div onClick={()=>ClickBanner(index)} key={index} className="border rounded-lg shadow-md p-4">
              <div className="w-full h-40 overflow-hidden mb-2">
                <img
                  src={el?.image_url}
                  alt={el?.event_name || 'Event image'}
                  className="w-full h-full object-cover"
                />
              </div>
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
