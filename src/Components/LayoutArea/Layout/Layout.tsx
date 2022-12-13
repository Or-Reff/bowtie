import Home from "../../HomeArea/Home/Home";
import Projection from "../../HomeArea/Projection/Projection";
import Threat from "../../HomeArea/Threat/Threat";
import Title from "../../HomeArea/Title/Title";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Title />
            </header>
            <aside>
                <Projection />
            </aside>
            <main>
                <Home />
            </main>
            <aside>
                <Threat />
            </aside>
        </div>
    );
}

export default Layout;
