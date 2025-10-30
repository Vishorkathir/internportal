import React from 'react'
import json from "../../JsonFile/content.json"

const Table=()=> {
  return (
    <div>
        <div className="border bg-white rounded-xl p-5  ">
                  <div>
                    <h1 className="text-2xl font-semibold">Input Datasets</h1>
                    <h1 className="text-gray-500 text-lg mt-1 mb-2">Here are the tables we'll be working with:</h1>
                    <h1 className="text-lg font-bold">Table:Bookings</h1>
                  </div>
        
                  <div className="mt-2  text-center rounded-xl " >
                    <table className="w-full  rounded-xl ">
                      <thead className=" bg-blue-200  text-black  ">
        
                        <tr className="text-2xl">
                          <th className="p-5  rounded-tl-2xl rounded-bl-2xl font-small " >user_id</th>
                          <th >user_name</th>
                          <th >loyalty_tier</th>
                          <th >boooking_time</th>
                          <th className="rounded-tr-2xl rounded-br-2xl ">class</th>
                        </tr>
        
                      </thead>
                      <tbody className="text-xl" >
                        {
                          json.person.map((details, index2) => (
        
                            <tr key={index2} className=" border-b-1  border-gray-400 rounded-xl text-gray-600 " >
                              <td className=" pt-9 pb-3">{details.id}</td>
                              <td className=" pt-9 pb-3">{details.userid}</td>
                              <td className=" pt-9 pb-3">{details.loyaltier}</td>
                              <td className=" pt-9 pb-3">{details.booktime}</td>
                              <td className=" pt-9 pb-3">{details.class}</td>
                            </tr>
                          ))
                        }
        
                      </tbody>
                    </table>
                  </div>
        
                  <div className="" >
                    <h1 className="font-bold mt-3 mb-3">
                      Table: train_capacity
                    </h1>
                    <table className="w-full">
                      <thead className=" bg-blue-200  text-black  ">
                        <tr className="text-2xl">
                          <th className="p-5  rounded-tl-2xl rounded-bl-2xl font-small " >Premium_total</th>
                          <th className="p-5  rounded-tr-2xl rounded-br-2xl font-small " >Premium_expected_noshow</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className=" border-b-1  border-gray-400 rounded-xl text-gray-600 text-center text-xl " >
                          <td className=" pt-9 pb-3">{json.pretotal}</td>
                          <td className=" pt-9 pb-3">{json.preexpecte}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
        
                </div>


    </div>
  )
}

export default Table