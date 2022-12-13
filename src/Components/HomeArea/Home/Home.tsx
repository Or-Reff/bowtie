import Hazard from "../Hazard/Hazard";
import "./Home.css";
import backgroundImage from '../../../Assets/backgroundImage.jpg';
import Event from "../Event/Event";
import Blocker from "../Blocker/Blocker";
import Scene from "../Scene/Scene";
import usePageTitle from "../../../Utils/usePageTitle";

function Home(): JSX.Element {

    usePageTitle("Bowtie");

    return (
        <div className="Home">
            <Hazard />
            <Event/>
           
            {/* <Scene sceneTitle="הכנס איום" />*/}
        </div>
    );
}
export default Home;


