import { useState } from 'react';
import TableRowData from './TableRowData';
import im from "./diodefrw.jpg"
import MyChart from './Graph';

const Perform = ()=>{

    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const [data2, setData2] = useState([]);
    const [InVolt, setInVolt] = useState([]);
    const [valve,setvalve] = useState([]);
    const [plot,setPlot] = useState([]);
    

    function fetchData(){
        fetch("https://blynk.cloud/external/api/get?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V7")
        .then((res) => res.json())
        .then((json) => {
            
            setData2((data2) => [...data2,json]);
            // console.log(data2, "Output Current");
            setvalve(data2);
        });

        fetch("https://blynk.cloud/external/api/get?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V6")
        .then((res) => res.json())
        .then((json) => {
            setData((data) => [...data,json]);
            // console.log(data, "Output Voltage");
            setvalve((valve)=>[...data,valve]);
        });
        fetch("https://blynk.cloud/external/api/get?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V5")
        .then((res) => res.json())
        .then((json) => {
            setInVolt((InVolt) => [...InVolt,json]);
            // console.log(InVolt, "Input Voltage");
        });
        // setPlot((valve)=>[...valve,valve]);
        console.log(valve, "Hello");
        
    }

    function UpdateData(){
        console.log(value);
        fetch(`https://blynk.cloud/external/api/update?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V1=${value}`)
    }
    return(
        <div className='Perform'>
          <div className="headPerform">Forward Bias Silicon Diode</div>
          <div className="ctrlImg">
            <div className="controls">
                <h1>Controls</h1>
                <hr  className='ctrlHr'/>
                <div className="dcIn">
                    <h4>DC volt : <span>{value}</span>V</h4>
                    <input type="range" name="Voltage" step="0.1" min="0" max="5" onChange={event => setValue(event.target.value)}/>
                </div>
                <div className="btns">
                    <div className="btnsbtn" onClick={UpdateData}>Send to hardware</div>
                    <div className="btnsbtn" onClick={fetchData}>Add To Table</div>
                    <div className="btnsbtn">Plot</div>
                    <div className="btnsbtn" onClick={()=>{setData([]); setData2([])}}>Clear</div>
                </div>
            </div>
            <div className='imgPerform'>
                <img src={im} alt="img" />
                <div className="circuitVolt">
                    
                </div>    
            </div>
          </div>
          <div className="tableChart">
              <div className="ExpTable">
                  <table>
                      <tbody>
                      <tr>
                          <th>Input Voltage</th>
                          <th>Forward Voltage(Volt)</th>
                          <th>Forward Current(mAmp)</th>
                      </tr>
                      {
                          data.map((data,num)=>(
                              <TableRowData  data2={data2[num]} data={data} InVolt={InVolt[num]} key={num}/>
                              ))
                            }
                      </tbody>
                  </table>
              </div>
              <div className="ExpChart">
                    <MyChart data={data}/>
              </div>
          </div>
        </div>
    )
}

export default Perform;
