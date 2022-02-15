import "./components.css";
const ProcedureShow = ()=>{
    return(
        <div className="ProcedureShow">
            <h2>Procedure</h2>
            <ol>
            <li>Forward Bias-Si Diode</li>
                <div className="objol">
                    <ol>
                        <li>Set DC voltage to 0.2 V.</li>
                        <li>Select the diode.</li>
                        <li>Set the resistor.</li>
                        <li>Voltmeter is placed parallel to Silicon diode and ammeter series with resistor.</li>
                        <li>The positive side of battery to the P side(anode) and the negative of battery to the N side(cathode) of the diode.</li>
                        <li>Now vary the voltage upto 5V and note the Voltmeter and Ammeter reading for particular DC voltage .</li>
                        <li>Take the readings and note Voltmeter reading across Silicon diode and Ammeter reading.</li>
                        <li>Plot the V-I graph and observe the change.</li>
                        <li>Calculate the dynamic resistance of the diode. rd=ΔV/ΔI</li>
                        <li>Therefore from the graph we see that the diode starts conducting when the forward bias voltage exceeds around 0.6 volts (for Si diode). This voltage is called cut-in voltage.</li>
                    </ol>
                </div>
                <img src="" alt="" />
            <li>Reverse Bias-Si Diode</li>
                <div className="objol">
                    <ol>
                        <li>Set DC voltage to 0.2 V .</li>
                        <li>Select the diode.</li>
                        <li>Set the resistor.</li>
                        <li>Voltmeter is placed parallel to Silicon diode and ammeter series with resistor.</li>
                        <li>The positive terminal of battery is connected to the N side(cathode) and the negative  terminal of battery is connected to the P side(anode) of a diode.</li>
                        <li>Now  vary the voltage upto 30V and note the Voltmeter and Ammeter reading for DC voltage .  </li>
                        <li>Take the readings and note Voltmeter reading across Silicon diode and Ammeter reading.</li>
                        <li>Plot the V-I graph  and observe the change.</li>
                    </ol>
                </div>
                <img src="" alt="" />
            <li>Forward Bias-Ge Diode</li>
                <div className="objol">
                    <ol>
                        <li>Set DC voltage to 0.2 V .</li>
                        <li>Use the resistor of 1K ohms and a Germanium diode.</li>
                        <li>Voltmeter is placed parallel to Germanium diode and ammeter series with resistor.</li>
                        <li>The positive terminal of battery is connected to the P side(anode) and the negative  terminal of battery is connected to the N side(cathode) of the diode.</li>
                        <li>Now  vary the voltage upto 30V and note the Voltmeter and Ammeter reading for particular DC voltage .  </li>
                        <li>Take the readings and note Voltmeter reading across Germanium diode and Ammeter reading.</li>
                        <li>Plot the V-I graph  and observe the change.</li>
                        <li>Therefore from the graph we see that the diode starts conducting when the forward bias voltage exceeds around 0.3 volts (for Ge diode). This voltage is called cut-in voltage.</li>
                    </ol>
                </div>
            </ol>
        </div>
    )
}
export default ProcedureShow;