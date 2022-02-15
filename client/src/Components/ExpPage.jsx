import { useState } from "react";
import "./components.css";
import Theoryshow from "./TheoryShow";
import ProcedureShow from "./Procedurehow";
import { Link } from "react-router-dom";

const ExpPage = () =>{
    const [tool,usetool] = useState(true);
    return(
        <div className="ExpPage">
            <h1>VI Characteristics of a Diode</h1>
            <div className="tools">
                <div className="theory" onClick={()=>{usetool(true)}}>Theory</div>
                <div className="procedure" onClick={()=>{usetool(false)}}>Procedure</div>
                <Link to="/Perform" className="perform" target="_blank">Perform</Link>
            </div>
            {tool ? 
             <Theoryshow/>
             : 
             <ProcedureShow/>
            }
            </div>
        )
    }

                export default ExpPage;


















// http://ec2-18-191-175-183.us-east-2.compute.amazonaws.com:
//                     hello
//                     <form name='form1' method="get" action="http://localhost:5000/req_data">
//                         <table>
//                             <tr>
//                                 <td>Voltage</td>
//                                 <td><input type="text" name="Voltage"/></td>
//                             </tr>
//                             <tr>
//                                 <td align="center">
//                                     <input type="submit" name='btnsubmit' value="Show Value"/>
//                                 </td>
//                             </tr>
//                         </table>
//                     </form>