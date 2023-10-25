// import React from "react";
// 'use client';

// import { Table } from 'flowbite-react';
// import data from "../data.json"

// export default function Orders() {
  
//   const [newTrain , setNewTrain ] = React.useState(false)
//   const [currentOrder,  setCurrentOrder] = React.useState()

//   const orders = data.orders.map(order =>{
//       return (
//         <Table.Row className=" border-gray-700 bg-gray-800 text-white hover:bg-gray-600 mt-5">
//         <Table.Cell className="whitespace-nowrap font-medium ">
//           {order.order_id}
//         </Table.Cell>
//         <Table.Cell>
//           {order.date}
//         </Table.Cell>
//         <Table.Cell>
//           {order.store_id}
//         </Table.Cell>
//         <Table.Cell>
//           <button className=" text-teal-400" onClick={() => {
//               setNewTrain(!newTrain);
//               setCurrentOrder(order);
//            }}>
//             Add train 
//           </button>
//         </Table.Cell>
//       </Table.Row>
//       )
//   })

//   // const products = currentOrder.products ? currentOrder.products.map(product => {
//   //   return (
//   //     <Table.Row className=" border-gray-700 bg-gray-800 text-white hover:bg-gray-600 mt-5">
//   //     <Table.Cell className="whitespace-nowrap font-medium ">
//   //       {product.id}
//   //     </Table.Cell>
//   //     <Table.Cell>
//   //       {product.name}
//   //     </Table.Cell> 
//   //     <Table.Cell>
//   //       {product.size}
//   //     </Table.Cell>
//   //     <Table.Cell>
//   //       <button className=" text-teal-400" onClick={() => {

//   //        }}>
//   //         Add train 
//   //       </button>
//   //     </Table.Cell>
//   //   </Table.Row>
//   //   )
//   // }) : null;
  
//   if (!newTrain){
//   return (
//     <div className=" bg-slate-800 mt-10">
//       <Table hoverable className= "border-gray-700  md:w-8/12 md:mx-auto">
//       <Table.Head >
//         <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//           Order ID
//         </Table.HeadCell>
//         <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//           Date
//         </Table.HeadCell>
//         <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//           Store ID
//         </Table.HeadCell>
//         <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//           Train
//         </Table.HeadCell>
//       </Table.Head>
//       <Table.Body className="divide-y">
//         {orders}
//       </Table.Body>
//     </Table>
//     </div>    
//   )
//   }

//   else if (newTrain && currentOrder){
//     return (
//     <div className=" border-2 border-slate-100 md:w-8/12 h-fit p-6 text-white mt-10 rounded-xl mx-auto">
//         <p>Store ID : {currentOrder.store_id}</p>
//         <div className=" bg-slate-800 mt-10">
//         <Table hoverable className= "border-gray-700  md:w-8/12 md:mx-auto">
//         <Table.Head >
//           <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//             Product ID
//           </Table.HeadCell>
//           <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//             Name
//           </Table.HeadCell>
//           <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//             Size
//           </Table.HeadCell>
//           <Table.HeadCell className=" border-gray-700 bg-gray-700 text-white">
//             Add to Train
//           </Table.HeadCell>
//         </Table.Head>
//         <Table.Body className="divide-y">
//           {/* {products} */}
//           {orders}
//         </Table.Body>
//       </Table>
//       </div> 
//     </div>
//     )
//   }
// }



import React, { useState } from "react";
import { Table } from 'flowbite-react';
import data from "../data.json"

export default function Orders() {
  const [newTrain, setNewTrain] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleAddTrainClick = (order) => {
    setCurrentOrder(order);
    setNewTrain(true);
  };

  const renderProducts = () => {
    if (currentOrder && currentOrder.products) {
      return currentOrder.products.map((product) => (
        <Table.Row key={product.id} className="border-gray-700 bg-gray-800 text-white hover:bg-gray-600 mt-5 ">
          <Table.Cell className="whitespace-nowrap font-medium ">
            {product.id}
          </Table.Cell>
          <Table.Cell>
            {product.name}
          </Table.Cell>
          <Table.Cell>
            {product.size}
          </Table.Cell>
          <Table.Cell>
           <p>test</p>
          </Table.Cell>
          <Table.Cell>
            <button className="text-teal-400" onClick={() => {
              // Add your action here when you click "Add" for a product
            }}>
              Remove
            </button>
          </Table.Cell>
        </Table.Row>
      ));
    } else {
      return null;
    }
  };

  const renderOrders = data.orders.map((order) => (
    <Table.Row key={order.order_id} className="border-gray-700 bg-gray-800 text-white hover:bg-gray-600 mt-5">
      <Table.Cell className="whitespace-nowrap font-medium">
        {order.order_id}
      </Table.Cell>
      <Table.Cell>
        {order.date}
      </Table.Cell>
      <Table.Cell>
        {order.store_id}
      </Table.Cell>
      <Table.Cell>
        <button className="text-teal-400" onClick={() => handleAddTrainClick(order)}>
          Add train
        </button>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <div className="bg-slate-800 mt-10">
      {newTrain ? (
        <div className="border-2 border-slate-100 md:w-8/12 h-fit p-6 text-white mt-10 rounded-xl mx-auto">
          <p>Store ID : {currentOrder && currentOrder.store_id}</p>
          <div className="bg-slate-800 mt-10">
            <Table hoverable className="border-gray-700 md:w-8/12 md:mx-auto">
              <Table.Head>
                <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
                  Product ID
                </Table.HeadCell>
                <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
                  Name
                </Table.HeadCell>
                <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
                  Size
                </Table.HeadCell>
                <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
                  Add to Train
                </Table.HeadCell>
                <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
                  Remove
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {renderProducts()}
              </Table.Body>
            </Table>
          </div>
        </div>
      ) : (
        <Table hoverable className="border-gray-700 md:w-8/12 md:mx-auto">
          <Table.Head>
            <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
              Order ID
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
              Date
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
              Store ID
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-gray-700 text-white">
              Train
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {renderOrders}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
