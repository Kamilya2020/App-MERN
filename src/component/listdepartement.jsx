import { Component } from 'react';


class ListeDepartement extends Component {
   constructor(props){
    super(props);
    this.state= { 
        departs:[{id:1, nom:'RH'},
                           {id:2, nom:'Commercial'},
                        {id:3, nom:'IT'},
                        {id:4, nom: 'Maintenance'}],
        nouveauDepart:'',
        updateDepart : null
        } 
    }
    addDepart = (event) => {
        event.preventDefault();
        let departments= this.state.departs
        if(!this.state.updateDepart){
            let newDepart={
                id:(departments.length>0)?[...departments].pop().id+1:1,
                nom :this.state.nouveauDepart 
            }
            this.setState({
                departs:[...this.state.departs,newDepart],
            })
        }
        else{
            let indice = this.state.departs.indexOf(this.state.updateDepart)
            let newDeparts=[...this.state.departs];
            newDeparts[indice].nom=this.state.nouveauDepart;
            this.setState({
                departs : newDeparts,
                updateDepart : null
            })
        }
        this.setState({
            nouveauDepart:''
        })
        }
        setDepart=(Event)=>{
            this.setState({
                nouveauDepart : Event.target.value
            })
        }
        deleteDepart=(i)=>{
            let newDeparts=this.state.departs
            newDeparts.splice(i,1);
            this.setState({
                departs:newDeparts,
                updateDepart : null
            })
        }
        updateDepart=(d)=>{
            this.setState({
                updateDepart:d
            })
        }
    render() { 
        return (
            <div>
                
                <div>
                    <form onSubmit={this.addDepart}>
                        <input type="text"name='depart'
                        value={this.state.nouveauDepart}
                        placeholder={this.state.updateDepart?this.state.updateDepart.nom:"New Departement"} 
                        onChange={this.setDepart}/>
                        <button>{this.state.updateDepart?"Edit departement":"Add deparetement"}</button>

                    </form>
                </div>
                <div>
                    <table>
                        <thead>
                            {this.state.departs.length>0 ?
                            <tr>
                                <th>ID</th>
                                <th>Departement</th>

                            </tr>:
                            <tr> <th>NOT FOUND Departement...</th></tr>
                            }
                        </thead>
                        <tbody>
                            {
                                this.state.departs.map((d,i)=>
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.nom}</td>
                                    <td><button onClick={()=>this.updateDepart(d)}>Edit</button></td>
                                    <td><button onClick={()=>this.deleteDepart(i)}>Delete</button></td>
                                </tr>)

                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}
 
export default ListeDepartement ;