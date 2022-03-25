import "./components.css";


const TableRowData=({plot,data,num})=>{

    return(
        <>
        {console.log(plot)}
        <tr>
            <td>{plot[num][0]}</td>
            <td>{plot[num][0]}</td>
            {/* <td>{data}</td> */}
            <td>{plot[num][1]}</td>
        </tr>
        </>
    )
}

export default TableRowData;