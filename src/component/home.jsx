import { useState } from "react";



function Home() {
    const [msg]=useState('welcome to KMK')
    

    return ( 
        <div>
            <h1>{msg}</h1>
        </div>
     );
}

export default Home;