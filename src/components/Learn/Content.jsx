import React from "react"
import json from "../../JsonFile/content.json"
import Table from "./Table"

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
      <div className="grid gap-5 kumbh-sans-font">

        {/* content HEAD */}


        <div className=" w-full ">
          <div className="text-center text-5xl mx-auto lg:w-170 font-semibold">
            <h1>{json.title}</h1>
          </div>
          <div className="text-2xl text-center py-10 text-pink-400">
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





        <div className="border bg-white rounded-xl p-5  ">
          <div>
            <h1 className="text-2xl font-semibold">{json.content1}</h1>
            <h1 className="text-gray-500 text-lg mt-1 mb-2">{json.content2}</h1>
            <h1 className="text-lg font-bold">{json.content3}</h1>
          </div>

          <Table content={json.table} />

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
                <tr className=" border-b-1  border-gray-400 rounded-xl text-gray-600 text-center " >
                  <td className=" pt-9 pb-3">{json.pretotal}</td>
                  <td className=" pt-9 pb-3">{json.preexpecte}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>


        {/* card4 ->1 */}


        <div className=" grid gap-6" >
          {
            json.contcard1.map((cardinfo, index4) => (
              <div key={index4} className="bg-white border border-gray-200 rounded-xl">


                {/* heading */}
                <div className="bg-blue-500 p-8 text-2xl text-white">
                  <h1>{cardinfo.title}</h1>
                </div>


                {/* content */}

                <div className="p-5 grid gap-3">
                  <h1 className=" font-semibold">{cardinfo.subtitle}</h1>

                  {/* code */}

                  <div className="bg-black/70 text-white p-3 rounded-xl">
                    <h1 style={{ whiteSpace: "pre-line" }}>{cardinfo.code}</h1>
                  </div>



                  <div >
                    {
                      cardinfo.multicont.map((innerinfo, index5) => (
                        <div key={index5} className="bg-blue-100 p-5 rounded-xl border-l-7 border-blue-500  inset-shadow-sm inset-shadow-black/60  text-gray-500 " >
                          <ul className="list-disc list-inside">
                            <li>{innerinfo.word1}</li>
                            <li>{innerinfo.word2}</li>
                            <li>{innerinfo.word3}</li>
                            <li>{innerinfo.word4}</li>
                            <li>{innerinfo.word5}</li>
                          </ul>

                        </div>
                      ))
                    }
                  </div>
                </div>
                <div>
                  {
                    (Array.isArray(cardinfo.table1) ? cardinfo.table1 : [cardinfo.table1]).map(
                      (conttable, index6) => (
                        <div key={index6}>
                          <Table content={conttable} />
                        </div>
                      )
                    )
                  }
                </div>

              </div>
            ))
          }


        </div>










      </div>
    </>
  )
}

export default Content