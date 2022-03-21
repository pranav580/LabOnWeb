import { useState } from "react"
import Card from "./card"
import ExpPage from "./ExpPage";

const Char = ()=>{
    const [out,setInOut] = useState(true);
    const data = ["Forward Biased Si-Diode","Reverse Biased-Si Diode","Forward Biased-Ge Diode","Reverse Biased-Ge Diode"];

    function relay(){
        fetch("https://blynk.cloud/external/api/update?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V0=1")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            // setData((data) => [...data,json]);
        });
    }

    return(
        <div>
            
            {out ?
            <div onClick={()=>{relay()}}>
            <Card data={data[0]}  setInOut={setInOut} />
            <Card data={data[1]}/>
            <Card data={data[2]}/>
            <Card data={data[3]}/>
            </div>
            :
            <ExpPage/>
            }
        </div>
    )
}
export default Char