import "./components.css";
const Theoryshow= ()=>{
    return(
        <div className="theoryshow">
            <h1>Theory</h1>
            <h2>Objectives</h2>

            <p>
            At the end of the experiment, the student should be able to :
            <div className="objol">
            <ol>
                <li>Explain the structure of a P-N junction diode</li>
                <li>Explain the function of a P-N junction diode</li>
                <li>Explain forward and reverse biased characteristics of a Silicon diode</li>
                <li>Explain forward and reverse biased characteristics of a Germanium diode</li>
            </ol>
            </div>
            </p>
            
            <h2>Structure of P-N junction diode</h2>

            <p>The diode is a device formed from a junction of n-type and p-type semiconductor material. The lead connected to the p-type material is called the anode and the lead connected to the n-type material is the cathode. In general, the cathode of a diode is marked by a solid line on the diode.</p>



            Figurer:1


            Figurer:2

            <h2>Function of a P-N junction diode in Forward Bias</h2>

            <p>The positive terminal of battery is connected to the P side(anode) and the negative terminal of battery is connected to the N side(cathode) of a diode, the holes in the p-type region and the electrons in the n-type region are pushed toward the junction and start to neutralize the depletion zone, reducing its width. The positive potential applied to the p-type material repels the holes, while the negative potential applied to the n-type material repels the electrons. The change in potential between the p side and the n side decreases or switches sign. With increasing forward-bias voltage, the depletion zone eventually becomes thin enough that the zone's electric field cannot counteract charge carrier motion across the p–n junction, which as a consequence reduces electrical resistance. The electrons that cross the p–n junction into the p-type material (or holes that cross into the n-type material) will diffuse into the nearby neutral region. The amount of minority diffusion in the near-neutral zones determines the amount of current that may flow through the diode.</p>



            Figurer:3

            <h2>Function of a P-N junction diode in Reverse Bias</h2>

            <p>The positive terminal of battery is connected to the N side(cathode) and the negative terminal of battery is connected to the P side(anode) of a diode. Therefore, very little current will flow until the diode breaks down.</p>




            Figurer:4

            <p>The positive terminal of battery is connected to the N side(cathode) and the negative terminal of battery is connected to the P side(anode) of a diode, the 'holes' in the p-type material are pulled away from the junction, leaving behind charged ions and causing the width of the depletion region to increase. Likewise, because the n-type region is connected to the positive terminal, the electrons will also be pulled away from the junction, with similar effect. This increases the voltage barrier causing a high resistance to the flow of charge carriers, thus allowing minimal electric current to cross the p–n junction. The increase in resistance of the p–n junction results in the junction behaving as an insulator.
            The strength of the depletion zone electric field increases as the reverse-bias voltage increases. Once the electric field intensity increases beyond a critical level, the p–n junction depletion zone breaks down and current begins to flow, usually by either the Zener or the avalanche breakdown processes. Both of these breakdown processes are non-destructive and are reversible, as long as the amount of current flowing does not reach levels that cause the semiconductor material to overheat and cause thermal damage.</p>



            <h2>Forward and reverse biased characteristics of a Silicon diode</h2>

            <p><b>In forward biasing</b>, the positive terminal of battery is connected to the P side and the negative terminal of battery is connected to the N side of the diode. Diode will conduct in forward biasing because the forward biasing will decrease the depletion region width and overcome the barrier potential. In order to conduct, the forward biasing voltage should be greater than the barrier potential. During forward biasing the diode acts like a closed switch with a potential drop of nearly 0.6 V across it for a silicon diode. The forward and reverse bias characteristics of a silicon diode. From the graph, you may notice that the diode starts conducting when the forward bias voltage exceeds around 0.6 volts (for Si diode). This voltage is called cut-in voltage.</p>





            Figurer:5


            <p><b>In reverse biasing</b>, the positive terminal of battery is connected to the N side and the negative terminal of battery is connected to the P side of a diode. In reverse biasing, the diode does not conduct electricity, since reverse biasing leads to an increase in the depletion region width; hence current carrier charges find it more difficult to overcome the barrier potential. The diode will act like an open switch and there is no current flow.</p>



            <h2>Forward and reverse biased characteristics of a Germanium diode</h2>

            <p><b>In forward biasing</b>, the positive terminal of battery is connected to the P side and the negative terminal of battery is connected to the N side of the diode. Diode will conduct in forward biasing because the forward biasing will decrease the depletion region width and overcome the barrier potential. In order to conduct, the forward biasing voltage should be greater than the barrier potential. During forward biasing the diode acts like a closed switch with a potential drop of nearly 0.3 V across it for a germanium diode. The forward and reverse bias characteristics of a germanium diode. From the graph, you may notice that the diode starts conducting when the forward bias voltage exceeds around 0.3 volts (for Ge diode). This voltage is called cut-in voltage.</p>






            Figurer:6




            <h2>Diode Equation</h2>

            <p>In the forward-biased and reversed-biased regions, the current (If), and the voltage (Vf), of a semiconductor diode are related by the diode equation:</p>

            If=Is×(expVfn×VT−1)


            <p>where,
            <li>Is is reverse saturation current or leakage current,</li>
            <li>If is current through the diode(forward current),</li>
            <li>Vf is potential difference across the diode terminals(forward voltage)</li>
            <li>VT is thermal voltage, given by</li>
            </p>
                VT=k×Tq


            <p>and <br />
            k is Boltzmann’s constant = 1.38x10−23 J /°Kelvin,
            q is the electronic charge = 1.6x10−19 joules/volt(Coulombs),
            T is the absolute temperature in °Kelvin(°K = 273 + temperature in °C),
            At room temperature (25 °C), the thermal voltage is about 25.7 mV,
            n is an empirical constant between 0.5 and 2</p>

            <p>The empirical constant, n, is a number that can vary according to the voltage and current levels. It depends on electron drift, diffusion, and carrier recombination in the depletion region. Among the quantities affecting the value of n are the diode manufacture, levels of doping and purity of materials.</p>

            <p>If n=1, the value of k×Tq is 26 mV at 25°C. <br />
            When n=2, the value of k×Tq becomes 52 mV. For germanium diodes, n is usually considered to be close to 1. For silicon diodes, n is in the range of 1.3 to 1.6.</p>

            <h2>Note</h2>
            <div className="objol">
            <ol>
                <li>Ideal Diode Model:Diode is a simple switch that is either closed (conducting) or open (non conducting). Specifically, the diode is a short circuit, like a closed switch, when voltage is applied in the forward direction, and an open circuit, like an open switch, when the voltage is applied in the reverse direction.</li>
                <li>Offset Voltage Model:The offset voltage model adds the barrier potential to the ideal switch model. When the diode is forward biased it is equivalent to a closed switch in series with a small equivalent voltage source equal to the barrier potential (0.6 V for Silicon, 0.2 for germanium) with the positive side towards the anode. When the diode is reverse biased, it is equivalent to an open switch just as in the ideal model.</li>
                <li>Complete diode Model:It is the most accurate of the diode models. The Complete diode model of a diode consists of the barrier potential, the small forward dynamic resistance and the ideal diode. The resistor approximates the semiconductor resistance under forward bias. This diode model most accurately represents the true operating characteristics of the real diode.</li>
                <li>When a diode is reverse biased a leakage current flows through the device. This current can be effectively ignored as long as the reverse breakdown voltage of the diode is not exceeded. At potentials greater than the reverse breakdown voltage, charge is pulled through the p-n junction by the strong electric fields in the device and large reverse current flows. This usually destroys the device. There are special diodes that are designed to operate in breakdown. Such diodes are called zener diodes and used as voltage regulators.</li>
            </ol>
            </div>

            <p>Ideal Diode Model: This is primarily used in troubleshooting. Is the diode working or not. The greatest utility of the ideal diode model is in determining which diodes are on and which are off in a multi-diode circuit.</p>

            <p>Offset Voltage Model:This is used when a more accurate determination of load current or voltage is required.</p>

            <p>Complete Diode Model:This is use during the actual design of circuits using diodes.</p>


        </div>
    )
}

export default Theoryshow;