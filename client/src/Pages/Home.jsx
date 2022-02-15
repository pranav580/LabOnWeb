import SimpleImageSlider from "react-simple-image-slider";
import "./styles.css"

const Home = ()=>{
    const images = [
        { url: "images/1.jpg" },
        { url: "images/2.jpg" },
        { url: "images/3.jpg" },
        { url: "images/4.jpg" },
        { url: "images/5.jpg" },
        { url: "images/6.jpg" },
        { url: "images/7.jpg" },
      ];
      
    return(
        <div className="PHome">
           <section className="slider">
            <SimpleImageSlider
                width={window.innerWidth}
                height= {window.innerHeight -200}
                images={images}
                showBullets={true}
                showNavs={true}
                className="slider"
            />
            </section>
            <div className="objective">
                <div className="objchild">
                    <hr />
                    <h1 className="headObj">Objectives</h1>
                    <hr />
                </div>
                <div className="objchild2">
                    <p>Real Hardware Lab on Web is an innovative virtual lab that allows
                        students to remotely access the hardware through web and perform 
                        their lab tasks on actual hardware present in thier labs. This innovation 
                        will give the real feel of experimenting, the way one feels while performing 
                        physically in the lab. The students will get real-time and practical values, 
                        not the ideal values obtained by simulation softwares.
                    </p>
                </div>
            </div>
            <div className="ListEx">
                <div className="headList">
                    <h1>Areas of Lab On Web</h1>
                </div>
                <div className="ExList">
                    <ul>
                        <li>Electronics & Communications</li>
                        <li>Computer Science & Engineering</li>
                        <li className="liright">Electrical Engineering</li>
                    </ul>
                </div>
            </div>
            <div className="institute">
                <h1>Shri Vaishnav Vidyapeeth Vishwavidyalaya</h1>
            </div>
        </div>
    )
}
export default Home;