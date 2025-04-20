import React, { useState } from 'react'

function Search() {
    const [vehicleType , setVehicleType] = useState("");
  return (
    <div>
        <form>
            <span>Vehicle Type</span>
            <select name="vehicleType" id="vehicleType" value={vehicleType} onChange={(e)=>setVehicleType(e.target.value)}>
                <option value="select vehicle" hidden></option>
                <option value="car">Cars</option>
                <option value="bike">Bikes</option>
            </select>
        </form>
    </div>
  )
}

export default Search