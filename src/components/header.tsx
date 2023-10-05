import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Header() {
    return (
        <div className="container-md">
            <div className="header">
                <div className="">
                    <Link to="">
                        <img src={Logo} alt="Logo" className="header_logo" />
                    </Link>
                </div>
                <div className="">
                    <div className="header_content">
                        <div className="p-2">
                            <Link to="">Startups</Link>
                            <Link to="">Contact</Link>
                        </div>
                        <div className="p-2">
                            <button className="btn btn-outline-primary">
                                Work with us!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
