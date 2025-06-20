// import React, { useState } from "react";
// import BottomNav from "../components/shared/BottomNav";
// import OrderCard from "../components/orders/OrderCard";
// import BackButton from "../components/shared/BackButton";

// function Orders() {
//   const [Status , setStatus] = useState("all");
//   return (
//     <section className="bg-[#202a3e] h-screen flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between px-10 py-4">
//         <div className="flex items-center gap-4">
//           <BackButton />
//           <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
//             Orders
//           </h1>
//         </div>
//         <div className="flex items-center justify-around gap-4">
//           <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg 
//           ${Status === "all" && "bg-[#456673] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
//             All
//           </button>
//           <button onClick={() => setStatus("progress")}  className={`text-[#ababab] text-lg 
//           ${Status === "progress" && "bg-[#456673] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
//             In Progress
//           </button>
//           <button onClick={() => setStatus("ready")}  className={`text-[#ababab] text-lg 
//           ${Status === "ready" && "bg-[#456673] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
//             Ready
//           </button>
//           <button onClick={() => setStatus("completed")}  className={`text-[#ababab] text-lg 
//           ${Status === "completed" && "bg-[#456673] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
//             Completed
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Card Area */}
//       <div className="flex-1 overflow-y-auto px-14 py-4 scrollbar-hide">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <OrderCard />
//           <OrderCard />
//           <OrderCard />
//           <OrderCard />
//           <OrderCard />
//           <OrderCard />
//           <OrderCard />
//           <OrderCard />
//           <OrderCard />
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </section>
//   );
// }

// export default Orders;
import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

function Orders() {
  const [Status, setStatus] = useState("all");
  
  return (
    <section className="bg-[#202a3e] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-10 py-4 space-y-4 sm:space-y-0">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl md:text-2xl font-bold tracking-wide">
            Orders
          </h1>
        </div>
        
        {/* Responsive button container */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <button 
            onClick={() => setStatus("all")} 
            className={`text-[#ababab] text-sm md:text-lg whitespace-nowrap
              ${Status === "all" && "bg-[#456673] rounded-lg px-3 md:px-5 py-2"} 
              rounded-lg px-3 md:px-5 py-2 font-semibold`}
          >
            All
          </button>
          <button 
            onClick={() => setStatus("progress")}  
            className={`text-[#ababab] text-sm md:text-lg whitespace-nowrap
              ${Status === "progress" && "bg-[#456673] rounded-lg px-3 md:px-5 py-2"} 
              rounded-lg px-3 md:px-5 py-2 font-semibold`}
          >
            In Progress
          </button>
          <button 
            onClick={() => setStatus("ready")}  
            className={`text-[#ababab] text-sm md:text-lg whitespace-nowrap
              ${Status === "ready" && "bg-[#456673] rounded-lg px-3 md:px-5 py-2"} 
              rounded-lg px-3 md:px-5 py-2 font-semibold`}
          >
            Ready
          </button>
          <button 
            onClick={() => setStatus("completed")}  
            className={`text-[#ababab] text-sm md:text-lg whitespace-nowrap
              ${Status === "completed" && "bg-[#456673] rounded-lg px-3 md:px-5 py-2"} 
              rounded-lg px-3 md:px-5 py-2 font-semibold`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Card Area - Now naturally scrollable */}
      <div className="px-4 md:px-14 py-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </section>
  );
}

export default Orders;
