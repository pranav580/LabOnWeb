
const TableRowData=({data2,data,InVolt})=>{
    return(
        <>
        <tr>
            <td>{InVolt}</td>
            <td>{data}</td>
            <td>{data2}</td>
        </tr>
        </>
    )
}

export default TableRowData;