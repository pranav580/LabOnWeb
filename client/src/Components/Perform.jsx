import { useState } from 'react';
import TableRowData from './TableRowData';
import im from "./diodefrw.jpg"
import MyChart from './Graph';

const Perform = ()=>{

    const [data, setData] = useState([]);
    const [value, setValue] = useState();

    function fetchData(){

        fetch("https://blynk.cloud/external/api/get?token=13DlIoDZ1BxBPSEThQgVc12i2qYWhOQ6&V0")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setData((data) => [...data,json]);
        });
    }

    function UpdateData(){
        console.log(value);
        fetch(`https://blynk.cloud/external/api/update?token=13DlIoDZ1BxBPSEThQgVc12i2qYWhOQ6&V0=${value}`)
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
                    <div className="btnsbtn" onClick={()=>setData([])}>Clear</div>
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
                          <th>Forward Voltage(Volt)</th>
                          <th>Forward Current(mAmp)</th>
                      </tr>
                      {
                          data.map((data,num)=>(
                              <TableRowData data={data} key={num}/>
                              ))
                            }
                      </tbody>
                  </table>
              </div>
              <div className="ExpChart">
                    <MyChart data={data}/>
              </div>
          </div>
          <form action="" method="get">
              <input type="text" />
              <button type="submit">Submit</button>
          </form>
        </div>
    )
}

export default Perform;
