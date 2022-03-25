import { useState } from 'react';
import TableRowData from './TableRowData';
import im from "./diodefrw.jpg"
import MyChart from './Graph';

const Perform = ()=>{

    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const [data2, setData2] = useState();
    const [InVolt, setInVolt] = useState();
    // const [valve,setvalve] = useState();
    const [plot,setPlot] = useState([]);
    // [0,0], [0.09,0] ,[0.19,0], [0.27,0], [0.39,0.01] ,[0.43,0.03] ,[0.50,0.17], [0.55,0.42], [0.60,1.23], [0.62,1.99],
        // [0.65,3.91], [0.65,3.91], [0.67,5.55], [0.69,8.72], [0.73,19.32]    

    function fetchData(){
        fetch("https://blynk.cloud/external/api/get?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V7")
        .then((res) => res.json())
        .then((json) => {
            
            // setData2((data2) => [data2,json]);
            setData2(json);
            // console.log(data2, "Output Current");
        });

        fetch("https://blynk.cloud/external/api/get?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V6")
        .then((res) => res.json())
        .then((json) => {
            // setData((data) => [data,json]);
            setData((data)=>[...data,json]);
            console.log(data, "Output Voltage");  
        });
        fetch("https://blynk.cloud/external/api/get?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V5")
        .then((res) => res.json())
        .then((json) => {
            setInVolt(json);
            // console.log(InVolt, "Input Voltage");
        });
        // setPlot((valve)=>[...valve,valve]);
        // var lol = [data,data2];
        // setvalve(lol);
        // console.log(valve, "Valve");
        setPlot((plot)=> [...plot,[InVolt,data2]]);
        console.log(plot, "Hello");
        
    }

    function UpdateData(){
        // console.log(value);
        fetch(`https://blynk.cloud/external/api/update?token=mFk3DDdKz8-iueKm_hc_00vcjy8tqGqZ&V1=${value}`)
    }
    function Plot(){
        
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
                    <div className="btnsbtn" onClick={Plot}>Plot</div>
                    <div className="btnsbtn" onClick={()=>{setPlot([]); setData([])}}>Clear</div>
                </div>
            </div>
            <div className='imgPerform'>
                <img src={im} alt="img" />
                <div className="circuitVolt">
                    
                </div>    
            </div>
          </div>
          <div className="tableChart">
              <div className="ExpTable scroll">
                  <table>
                      <tbody>
                      <tr>
                          <th>Input Voltage</th>
                          <th>Forward Voltage(Volt)</th>
                          <th>Forward Current(mAmp)</th>
                      </tr>
                      {
                          plot.map((da,num)=>(
                              <TableRowData  plot={plot} data={data[num]} num={num} key={num}/>
                              ))
                            }
                      </tbody>
                  </table>
              </div>
              <div className="ExpChart">
                    <MyChart plot={plot}/>
              </div>
          </div>
        </div>
    )
}

export default Perform;
