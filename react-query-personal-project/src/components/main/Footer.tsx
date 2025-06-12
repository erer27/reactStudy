import {Fragment} from "react";
/*
    const Footer=()=>{

    }
 */
const linkStyle = {
    color: "#6d5c51",
    textDecoration: "none",
    fontSize: "0.9rem",
    display: "block",
    margin: "0.3rem 0",
};
function Footer() {
    return (
        <footer
            className="mt-5"
            style={{
                backgroundColor: "#f9f5f1",
                borderTop: "1px solid #d8bfae",
                color: "#4a3f35",
                padding: "2rem 0",
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: "0.95rem",
            }}
        >
            <div className="container">
                <div className="row text-start text-md-center">
                    {/* Column 1: Brand Info */}
                    <div className="col-12 col-md-4 mb-4">
                        <h6 style={{ fontWeight: "bold", color: "#3b2e25" }}>Glow Beauty</h6>
                        <p style={{ fontSize: "0.85rem", color: "#7c6b5e" }}>
                            Discover your natural glow with our premium skincare line.
                            <br />Soft tones, silky textures, and radiant confidence.
                        </p>
                    </div>

                    {/* Column 2: Customer Support */}
                    <div className="col-12 col-md-4 mb-4">
                        <h6 style={{ fontWeight: "bold", color: "#3b2e25" }}>Customer Support</h6>
                        <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                            <li><a href="#" style={linkStyle}>FAQs</a></li>
                            <li><a href="#" style={linkStyle}>Shipping Info</a></li>
                            <li><a href="#" style={linkStyle}>Returns & Exchanges</a></li>
                            <li><a href="#" style={linkStyle}>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company Info */}
                    <div className="col-12 col-md-4 mb-4">
                        <h6 style={{ fontWeight: "bold", color: "#3b2e25" }}>Company</h6>
                        <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                            <li><a href="#" style={linkStyle}>About Us</a></li>
                            <li><a href="#" style={linkStyle}>Terms of Use</a></li>
                            <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
                            <li><a href="#" style={linkStyle}>Careers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <p style={{ fontSize: "0.8rem", color: "#7c6b5e" }}>
                            ⓒ 2025 Glow Beauty. All rights reserved.
                            <br />
                            Customer Service: 1234-5678 | Mon–Fri 10:00–18:00
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;