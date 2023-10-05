import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <div className="container-md">
                <div className="row justify-content-center align-items-start">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer_content">
                            <img src={Logo} alt="logo" />
                            <p>
                                © 2020 Startupz.
                                <br />
                                All rights reserved.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <div className="footer_content">
                            <h6>Companies</h6>
                            <ul>
                                <li>
                                    <Link to=""> Tolq</Link>
                                </li>
                                <li>
                                    <Link to="">LegalSite</Link>
                                </li>
                                <li>
                                    <Link to="">Codekeeper</Link>
                                </li>
                                <li>
                                    <Link to="">Feedback Labs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer_content">
                            <h6>Contact</h6>
                            <p>
                                World Trade Center - The Hague Prinses
                                Margrietplantsoen 33 2595 AM The Hague The
                                Netherlands
                            </p>
                            <a href="">Send us an email</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <div className="footer_content justify-content-start gap-2">
                            <h6>Follow us</h6>
                            <a href="">
                                <BsTwitter />
                            </a>

                            <a href="">
                                <BsLinkedin />
                            </a>
                            <a href="">
                                <BsInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
