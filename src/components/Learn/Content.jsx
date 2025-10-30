import React from "react"
import json from "../../JsonFile/content.json"

const Content = () => {


  // card2
  const cardnames = [
    { name: "WINDOWS FUNCTION" },
    { name: "ORDER BY" },
    { name: "CASE" },
    { name: "AGGREGATION" }
  ]




  return (
    <>
      <div className="grid gap-5">
        {/* content HEAD */}
        <div className=" w-full ">
          <div className="text-center text-5xl  font-semibold">
            <h1>{json.title}</h1>
          </div>
          <div className="text-3xl text-center py-10 text-pink-400">
            <h1>{json.subtitle1}</h1>
            <h1>{json.subtitle2}</h1>
          </div>
        </div>


        {/* content card1 */}

        <div className="bg-white p-4 border border-gray-200 rounded-xl ">
          <div className="">
            <h1 className="text-2xl font-semibold">{json.cardhead}</h1>
            <h1 className="text-gray-600 text-lg  mt-2">{json.cardcontent}</h1>
          </div>
        </div>

        {/* content card2 */}

        <div className="bg-blue-200 p-4 border border-blue-400 rounded-xl ">
          <div className="lg:grid gap-2">
            <h1 className="text-2xl font-semibold text-blue-500">{json.card2head}</h1>
            <h1 className="text-gray-600">{json.card2content}</h1>
            <div className="lg:flex gap-5 ">
              {
                cardnames.map((cardname, index) => (
                  <div key={index} className="border  border-blue-500 rounded-3xl p-2 bg-white text-blue-500 font-medium">
                    <h1 >{cardname.name}</h1>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* content cardtable */}

        <div className="border bg-white ">
          <h1>Input Datasets</h1>
          <h1>Here are the tables we'll be working with:</h1>
          <h1>Table:Bookings</h1>


          <div className="p-5" >
            <table className="w-full ">
              <thead className=" bg-blue-300 text-white p-2">
               
                    <tr  >
                      <th className="" >{heading.first}</th>
                      <th >{heading.second}</th>
                      <th >{heading.third}</th>
                      <th >{heading.four}</th>
                      <th >{heading.five}</th>
                    </tr>
                 
              </thead>
              <tbody>
                {
                  json.person.map((details, index2) => (

                    <tr key={index2} className="border border-gray-400 rounded-xl " >
                      <td className="p-6">{details.id}</td>
                      <td>{details.userid}</td>
                      <td>{details.loyaltier}</td>
                      <td>{details.booktime}</td>
                      <td>{details.class}</td>


                    </tr>


                  ))
                }

              </tbody>
            </table>
          </div>

        </div>








      </div>
    </>
  )
}

export default Content