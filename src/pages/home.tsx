/* eslint-disable @typescript-eslint/no-explicit-any */
import back1 from "../assets/back-1.png";
import Lthmumb from "../assets/L-Thumb.png";
import Rthmumb from "../assets/R-Thumb.png";
import Card from "../components/Card";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import Lhire from "../assets/L-hire.png";
import Rhire from "../assets/R-hire.png";
import Rocket from "../assets/rocket.svg";
import ask from "../assets/ask.svg";
import light from "../assets/light.svg";

const cards: any = [
    {
        title: "Tolq",
        content:
            "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
        image: frame1,
        color: "#A9BC87",
    },
    {
        title: "Feedback Labs",
        content:
            "Feedback Labs turns feedback into actionable insights for your team.",
        image: frame2,
        color: "#8BB5C9",
    },
    {
        title: "Codekeeper",
        content:
            "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
        image: frame3,
        color: "#00A0B6",
    },
    {
        title: "LegalSite",
        content:
            "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
        image: frame4,
        color: "#8B60D3",
    },
];

function Home() {
    return (
        <div>
            <div className="container-md">
                <div className="section_1">
                    <div>
                        <h1>
                            We Create <br />
                            Startups.
                        </h1>
                        <p>
                            We are startup studio that developers and launches
                            new companies
                        </p>
                        <button className="btn btn-primary">
                            See our works
                        </button>
                    </div>

                    <img src={back1} alt="background one" />
                </div>
            </div>

            <div className="section_2">
                <div className="container-md">
                    <h2>Who we are</h2>
                    <p>
                        We create products that have innovation and technology
                        at their core. <br />
                        We value working with talented people that understand
                        the possibilities of today.
                    </p>

                    <div className="about_content">
                        <div>
                            <h3>01</h3>
                            <p>
                                We develop innovative products, systems and
                                services
                            </p>
                        </div>
                        <div>
                            <h3>02</h3>
                            <p>
                                Next we build teams to scale them into companies
                            </p>
                        </div>
                        <div>
                            <h3>03</h3>
                            <p>Each startup solving one problem at a time</p>
                        </div>
                    </div>

                    <img src={ask} alt="ask" />
                </div>
            </div>

            <div className="section_3">
                <div className="container-md">
                    <div>
                        <img src={Lthmumb} alt="thumbs" />
                        <h2>We love solving problems!</h2>
                        <img src={Rthmumb} alt="thumbs" />
                    </div>
                </div>
            </div>

            <div className="section_4">
                <div className="container-md">
                    <h2>Our core values</h2>

                    <div className="our_core">
                        <div>
                            <h3>01. Innovation</h3>
                            <p>
                                Startupz operates where entrepreneurship and
                                technology intersect. We design solutions and
                                turn them into businesses models.
                            </p>
                        </div>
                        <div>
                            <h3>02. People</h3>
                            <p>
                                Talent is what enable us to create great
                                companies.
                            </p>
                        </div>
                    </div>

                    <img src={light} alt="light" />
                </div>
            </div>

            <div className="section_5">
                <div className="container-md">
                    <h2>Our works</h2>

                    <div className="row justify-content-center align-items-center">
                        {cards.map((item: any, index: number) => (
                            <Card key={index} data={item} />
                        ))}
                    </div>

                    <div className="oppo">
                        <img src={Lthmumb} alt="thumbs" />
                        <h2>
                            Startups create a world that actually is better. Any
                            problem that can be solved, will be solved by a
                            startup, and that is a huge opportunity.
                        </h2>
                        <img src={Rthmumb} alt="thumbs" />
                    </div>
                </div>
            </div>

            <div className="section_6">
                <div className="container-md">
                    <div className="hiring">
                        <img src={Lhire} alt="thumbs" />
                        <div>
                            <h2>We are hiring!</h2>
                            <p>
                                We're always looking for talented people to join
                                and help build our startups. Check out our
                                current openings
                            </p>
                            <button className="btn btn-primary">
                                See current openings
                            </button>
                        </div>
                        <img src={Rhire} alt="thumbs" />
                    </div>
                </div>
            </div>

            <div className="section_7">
                <div className="container-md">
                    <div>
                        <h2>
                            Are you ready <br />
                            to board this rocket ship?
                        </h2>
                        <p>Share your excitement with us.</p>
                        <div className="contact">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    className="form-control"
                                />
                                <input
                                    type="text"
                                    placeholder="Email*"
                                    className="form-control"
                                />
                                <textarea
                                    placeholder="Message*"
                                    className="form-control"
                                    rows={10}
                                />
                                <button className="btn btn-secondary">
                                    Shoot us a message
                                </button>
                            </div>
                        </div>
                    </div>

                    <img src={Rocket} alt="rocket" />
                </div>
            </div>
        </div>
    );
}

export default Home;
