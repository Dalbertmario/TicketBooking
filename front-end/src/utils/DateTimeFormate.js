export default function DateFormating(params) {
    const date = new Date(params);
  
    if (isNaN(date.getTime())) {
      console.error("Invalid date passed to DateFormating:", params);
      return "Invalid date";
    }
  
    return Intl.DateTimeFormat('en', {
      month: 'long',
      day: '2-digit',
      year: '2-digit'
    }).format(date);
  }
  

export const timeFormating = (parms)=>{
    const Startdata = new Date(parms.start_time).getHours()
    const EndData = new Date(parms.end_time).getHours()
    return EndData - Startdata
} 

export const ConsertDate = (parms)=>{
     const hour = new  Date(parms).getHours()
     return hour
}