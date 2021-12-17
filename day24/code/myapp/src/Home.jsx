import React from 'react'
import BarLoader from "react-spinners/BarLoader";

function Home() {
    return (
        <div className="container">
            This is Home Component <br></br>
            <p></p>
            <BarLoader color={"red"} loading={true} size={50} />
        </div>
    )
}

export default Home
