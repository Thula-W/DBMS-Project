import data from "../truck.json"

import React, { useState } from "react";
import { Table } from 'flowbite-react';
import { Label, Select } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Datepicker } from 'flowbite-react';

export default function Trucks() {
  const [addTruck, setAddTruck] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const[truck , setTruck] =useState(null);
  const[driver, setDriver] =useState(null);
  const[aDriver , setADriver] = useState(null);
  const[date, setDate] = useState(null);

  const handleAddTruckClick = (order) => {
    setCurrentOrder(order);
    setAddTruck(true);
  };

  const handleTruckChange = (event) => {
    if (event.target.value != -1){
        setTruck(event.target.value);
    }
    else{
        setTruck(null)
    }
  };

  const handleDriverChange = (event) => {
    if (event.target.value != -1){
        setDriver(event.target.value);
    }
    else{
        setDriver(null)
    }
  };

  const handleADriverChange = (event) => {
    if (event.target.value != -1){
        setADriver(event.target.value);
    } 
    else{
        setADriver(null)
    } 
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit =()=>{
    /*implement the submit function here*/
  };
  
  const renderDrivers = data.drivers.map((driver) => {
    return <option key={driver.id} className=" bg-slate-400 p-4">{`${driver.id} - ${driver.name}`}</option>
   })

   const renderADrivers = data.assistant_drivers.map((driver) => {
   return <option key={driver.id} className=" bg-slate-400">{`${driver.id} - ${driver.name}`}</option>
   })

   const renderTrucks = data.assistant_drivers.map((truck) => {
       return <option key={truck.id} className=" bg-slate-400">{`${truck.id}`}</option>
   })

   const renderOrders = data.orders.map((order) => (
   <Table.Row key={order.id} className="border-gray-700 bg-gray-800 text-white hover:bg-gray-600 mt-5">
     <Table.Cell className="whitespace-nowrap font-medium">
       {order.id}
     </Table.Cell>
     <Table.Cell>
       {order.date}
     </Table.Cell>
     <Table.Cell>
       {order.store_id}
     </Table.Cell>
     <Table.Cell>
       {order.truck_id === null ? (
           <button className="text-teal-400" onClick={() => handleAddTruckClick(order)}>
           Add truck
           </button>
       ) : (
           order.truck_id
       )}
   </Table.Cell>
   </Table.Row>
   ));


  return (
    <div className="bg-slate-800 mt-10">
      { addTruck? (
        <div className="border-2 border-slate-100 md:w-6/12 h-fit p-6 text-white mt-10 rounded-xl mx-auto ">
            <h3 className=" text-lime-200 text-lg">Order ID : {currentOrder.id}</h3>

            { <p>{`render the other trips on the date `}</p> /*#################} */}

            {/* <h3 className=" text-lime-200">Date : {currentOrder.date}</h3> */}
            <div
              className="max-w-md mx-auto"
              id="select"
            >
                <p className="max-w-md mx-auto text-sm">Select Date</p>
                 <Datepicker className=" mt-2 max-w-md mx-auto"
                 onSelectedDateChanged={handleDateChange}
               
                 />

              <div className="mb-2 block">
                <Label className=" text-slate-200"
                  htmlFor="trucks"
                  value="Select Truck"
                />
              </div>
              <Select                
                id="trucks"
                required
                onChange={handleTruckChange}
                value={truck}
              >
                <option className=" bg-slate-400 p-4" value={-1}>--Select Truck--</option>
                {renderTrucks}
              </Select>
            </div>
            <div
              className="max-w-md mx-auto"
              id="select"
            >
              <div className="mb-2 block">
                <Label className=" text-slate-200"
                  htmlFor="drivers"
                  value="Select Driver"
                />
              </div>
              <Select               
                id="drivers"
                required
                onChange={handleDriverChange}
                value={driver}
              >
                <option className=" bg-slate-400 p-4" value={-1}>--Select Driver--</option>
                {renderDrivers}
              </Select>
            </div>
            <div
              className="max-w-md mx-auto"
              id="select"
            >
              <div className="mb-2 block">
                <Label className=" text-slate-200"
                  htmlFor="Adrivers"
                  value="Select Assistant Driver"
                />
              </div>
              <Select      
                id="Adrivers"
                required
                onChange={handleADriverChange}
                value={aDriver}
              >
                <option className=" bg-slate-400 p-4" value={-1}>--Select Assistant Driver--</option>
                {renderADrivers}
              </Select>
            </div>
            
            {/* submit function eka danna  */}
            <Button gradientDuoTone="greenToBlue" className=" p-0 mx-auto mt-6" onSubmit={handleSubmit}>
                Submit
            </Button>
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
              Truck ID 
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
