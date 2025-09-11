// // import { BiWrench } from "react-icons/bi"
// import { BsArrowRight } from "react-icons/bs"
// import { IoCheckmark } from "react-icons/io5";
// import { Link } from "react-router-dom"

// const Mechanic = () => {
//   return (
//     <div>
//       {/* Mechanic CTA */}
//       <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-hover text-primary-foreground overflow-hidden relative">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-hover/95"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-0">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
              
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Are You a UK Mechanic?
//                 <span className="block text-accent mt-2">Join Our Network</span>
//               </h2>
//               <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
//                 Connect with thousands of customers, grow your business, and be part of the UK's most trusted car repair marketplace.
//               </p>
              
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center gap-3">
//                   <IoCheckmark />
//                   <p className="text-primary-foreground/90">Access to verified customers in your area</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <IoCheckmark />
//                   <p className="text-primary-foreground/90">Flexible scheduling and competitive pricing</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <IoCheckmark />
//                   <p className="text-primary-foreground/90">Professional support and business tools</p>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                   <button  >
//                 <Link to="/register" className=" cursor-pointer shadow-lg px-7 py-3 bg-[#8B865C] flex justify-center items-center hover:shadow-xl transition-all duration-300">
//                     Join Our Network
//                     <BsArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//                   </button>
//                 <button className="bg-black px-7 py-3 border-white/30 text-white cursor-pointer ">
//                   Learn More
//                 </button>
//               </div>
//             </div>
            
//             <div className="lg:flex justify-center">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-white/10 rounded-3xl transform rotate-6 scale-105"></div>
//                 <img 
//                   src="../../Images/m2.jpg" 
//                   alt="Professional UK mechanic working in modern garage" 
//                   className="relative w-full max-w-lg h-auto "
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Mechanic



import { BsArrowRight } from "react-icons/bs"
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom"

const Mechanic = () => {
  return (
    <div>
      {/* Mechanic CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-hover text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-hover/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image first on mobile, second on large screens */}
            <div className="order-1 lg:order-2 lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-white/10 rounded-3xl transform rotate-6 scale-105"></div>
                <img 
                  src="../../Images/m2.jpg" 
                  alt="Professional UK mechanic working in modern garage" 
                  className="relative w-full max-w-lg h-auto "
                />
              </div>
            </div>

            {/* Text content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Are You a UK Mechanic?
                <span className="block text-accent mt-2">Join Our Network</span>
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Connect with thousands of customers, grow your business, and be part of the UK's most trusted car repair marketplace.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <IoCheckmark />
                  <p className="text-primary-foreground/90">Access to verified customers in your area</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmark />
                  <p className="text-primary-foreground/90">Flexible scheduling and competitive pricing</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCheckmark />
                  <p className="text-primary-foreground/90">Professional support and business tools</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="cursor-pointer shadow-lg px-7 py-3 bg-[#8B865C] flex justify-center items-center hover:shadow-xl transition-all duration-300">
                  Join Our Network
                  <BsArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="bg-black px-7 py-3 border-white/30 text-white cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mechanic
