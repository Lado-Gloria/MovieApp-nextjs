// import React, { useState } from "react";
// import Image from "next/image";

// const NavigationBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
//   return (
//     <nav className="bg-gray-800 p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Image
//             src="/potter.png" // Path to your logo image inside the 'public' directory
//             const alt="Logo"
//             width={170} // Adjust the width as needed
//             height={170} // Adjust the height as needed
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Search characters..."
//             className="px-3 py-2 rounded-lg mr-2"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 text-black px-4 py-2 rounded-lg"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
