const Experiments=()=>{
    // eslint-disable-next-line no-unused-vars
    const URL = "http://ec2-18-191-175-183.us-east-2.compute.amazonaws.com:5000/req_data";
    return(
        <div>
            <form name='form1' method="get" action="http://192.168.240.253:80/data">
                <table>
                    <tr>
                        <td>Voltage</td>
                        <td><input type="text" name="Voltage"/></td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input type="submit" name='btnsubmit' value="Show Value"/>
                        </td>
                    </tr>
                </table>
            </form>
            
        </div>
    );
}

export default Experiments;