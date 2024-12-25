import React from 'react'

function LocationSearch(props) {

  const locations = [
    '101 Park Avenue, New York, NY 10017',
    ' 23 Baker Street, London, NW1 6XE',
    ' 123 Main Street, Anytown, USA 12345',
    ' 456 Elm Street, Anytown, USA 67890',
  ]

  return (
    <div>
      {
        locations.map((item,idx) => {
          return <div key={idx} onClick={()=>{
            props.setVehicleChoice(true)
            props.setPanelOpen(false)
          }} className="flex  border-2 rounded-xl px-3 py-2 my-3 items-center justify-start">
            <h2 className="bg-gray-200 p-3 rounded-full h-12 w-12 flex items-center justify-center shadow-md">
              <i className="ri-map-pin-fill text-2xl "></i>
            </h2>
            <h4 className="font-medium pl-4 text-gray-700">
              {item}
            </h4>
          </div>
        })
      }
  

  
</div>

  )
}

export default LocationSearch
 