import { useState } from "react";
import Card from "../Components/card.jsx";
import ExpPage from "../Components/ExpPage.jsx";
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
                    {
                    ListOfExperiment.map((number,key) =>(
                    <Card key={key} data={number} setInOut={setInOut} />
                    ))}
                </div>
                :
                <div className="expPageBody">
                    <ExpPage/>
                </div>
            }
        </div>
    );
}

export default Experiments;