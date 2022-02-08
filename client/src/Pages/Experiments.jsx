const Experiments=()=>{
    // eslint-disable-next-line no-unused-vars
    const URL = "http://ec2-18-191-175-183.us-east-2.compute.amazonaws.com:5000/req_data";
    return(
        <div>
            <form name='form1' method="get" action="http://192.168.240.253:80/data">
                <table>
                    <tr>
                        <td>Voltage</td>
                        <td><input type="number" name="inputInt"/></td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input type="submit" name='btnsubmit' value="Show Value"/>
                        </td>
                    </tr>
                </table>
            </form>
            <form action="/get" target="hidden-form">
                inputInt (current value %inputInt%): <input type="number " name="inputInt"/>
                <input type="submit" value="Submit" />
            </form><br/>
        </div>
    );
}

export default Experiments;