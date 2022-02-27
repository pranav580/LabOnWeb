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