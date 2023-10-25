// import React from "react";
// import mainImg from "../images/main.jpg"

// export default function Homepg(){
//     return(
//         <div className=" grid-cols-2 text-slate-200  border-2  rounded-2xl my-28 w-3/4
//          md:my-20 md:w-2/3 bg-amber-200
//         ">
//             <div className="bg-red-300 w-1/2 md:w-7/12">
//                 <p>Thula Cooperation</p>
//                 <p>ggggggggggggggggggggk</p>
//             </div>       
//             <img src={mainImg} className="w-1/2 h-72 md:w-5/12 md:h-96 rounded-r-2xl"></img>
          
//         </div>
//     )
// }


    
import React from "react";
import mainImg from "../images/main.jpg";

export default function Homepg() {
  return (
    <div className="flex text-slate-200 border-2 rounded-2xl border-slate-500 
    my-24 w-3/4 md:my-16 md:w-7/12 mx-auto h-80  md:h-96">
      <div className="w-6/12 md:w-6/12 p-4 rounded-l-2xl">
        <p className="text-3xl sticky md:text-center  pb-4 md:my-8 md:text-5xl text-white hover:text-green-300">Minimal.Com</p>
        <div className=" md:text-lg ">
            <p className=' text-slate-300'>
            Browse our curated collection of premium products and enjoy hassle free ordering.
            We bring the best to your doorstep with swift and secure delivery. Elevate your lifestyle effortlessly order with us today!</p>
        </div>        
      </div>
      <img
        src={mainImg}
        className="w-6/12 h-auto md:w-6/12  rounded-r-2xl"
      ></img>
    </div>
  );
}

