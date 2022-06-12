import Footer from "../Footer";
import Nav from "../navbar";
import Menu from "../menu";
import { useState } from "react";

const Layout = ({ children }) => {

    const [Open,isOpen] = useState(false);

    const Toggle = () => {
        isOpen(!Open);
    }
    return(
        <div className="content">
            <Nav Toggle={Toggle}/>
            {Open ? (<Menu Toggle={Toggle} Open={Open}/>) : (<></>)}
            { children }
            <Footer />
        </div>
    )
}

export default Layout;