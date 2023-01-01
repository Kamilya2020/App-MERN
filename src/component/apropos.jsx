import { useState } from "react";

function Apropos() {
    const [titre]=useState('who we are?')
    const [contact]=useState({nom : 'KMK-AI',
                         email : 'kmk.ai@xjmslon.com',
                         logo: <img src="logo1.png" alt="Notre Logo" height={100} width='100'></img>
                        });
 
    return (
        <div>
            <h1>{titre}</h1>
            <table>
                <tr>
                    <td>{contact.logo}</td>
                    <td>
                        <li>Company name : {contact.nom}</li>
                         <li>Email : {contact.email}</li>
                    </td>
                </tr>
            </table>
        </div>
      );
}

export default Apropos;