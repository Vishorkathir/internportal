import React from 'react'
// import content from "../../JsonFile/content.json"

const Table=({content})=> {
  return (
    <div>
      
  
                  
        {/* table */}
                  <div className="mt-2  text-center rounded-xl " >
                    <table className="w-full  rounded-xl ">
                      <thead className=" bg-blue-200  text-black  ">
        
                        <tr className="text-2xl">
                          <th className="p-5  rounded-tl-2xl rounded-bl-2xl font-small " >
                               {content.head1}</th>
                          <th >{content.head2}</th>
                          <th >{content.head3}</th>
                          <th >{content.head4}</th>
                          <th className="rounded-tr-2xl rounded-br-2xl ">{content.head5}</th>
                        </tr>
        
                      </thead>
                      <tbody className="text-xl" >
                        {
                          // content.person &&
                           content.person.map((details, index2) => (
        
                            <tr key={index2} className=" border-b-1  border-gray-400 rounded-xl text-gray-600 " >
                              <td className=" pt-9 pb-3">{details.id}</td>
                              <td className=" pt-9 pb-3">{details.username}</td>
                              <td className=" pt-9 pb-3">{details.loyaltier}</td>
                              <td className=" pt-9 pb-3">{details.booktime}</td>
                              <td className=" pt-9 pb-3">{details.class}</td>
                            </tr>
                          ))
                        }
        
                      </tbody>
                    </table>
                  </div>
        
                 
        
                </div>


    
  )
}

export default Table