import { useState } from "react";



function Home() {
    const [msg]=useState('welcome to our company website: KMK-AI')
    

    return ( 
        <div>
            <h1>{msg}</h1>
        </div>
     );
}

export default Home;