import { useState } from "react";
import Card from "../Components/card.jsx";
import Char from "../Components/char.jsx";
// import ExpPage from "../Components/ExpPage.jsx";
import "./styles.css";

const Experiments=()=>{
    const [inOut, setInOut] = useState(true);
    var ListOfExperiment = ["VI Characteristics of a Diode","Zener Diode-Voltage Regulator",
    "BJT Common Emitter Characteristics",
    "BJT Common Base Characteristics"];
    return(
        <div>
            <div className="back" onClick={()=>{setInOut(true)}}>{"<"}<b>Back</b></div>
                {inOut ?
                <div className="expList">
                    <div className="headEx">
                        <h1>Basic Electronics</h1>
                    </div>
                    <Card  data={ListOfExperiment[0]} setInOut={setInOut} />
                    <div className="disable">
                    <Card  data={ListOfExperiment[1]}  />
                    <Card  data={ListOfExperiment[3]}  />
                    <Card  data={ListOfExperiment[2]}  />
                    </div>
                </div>
                    :
                    <div className="expPageBody">
                      <Char/>
                    </div> 
                }

             
        </div>
    );
}

export default Experiments;