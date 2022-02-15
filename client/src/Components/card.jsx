import "./components.css";

const Card = ({data,setInOut})=>{
    return(
        <div className="card">
            <div>{data}</div>
            <div className="cardchild">
                <div className="btnIn" onClick={()=>setInOut(false)}>{">"}</div>
            </div>
        </div>
    )
}
export default  Card;