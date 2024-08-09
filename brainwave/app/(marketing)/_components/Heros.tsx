import Image from 'next/image';

export const Heroes = () => {
    {
     return (
       <div className=" flex flex-col items-center justify-center max-w-5x">
         <div className="flex items-center">
           <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[350px] md:h-[300px] md:w[300px]">
             <Image
               src="/Landing_icon.png"
               fill
               className="object-contain"
               alt="Landing_icon"
             />
           </div>
           <div className='relative h-[300px] w-[300px]'>
            <Image
            src = "/Landing_icon_read.png"
            fill
            className='object-contain'
            alt = "Landing_icon_read"
            />
           </div>   
         </div>
       </div>
     );
    }
}