import React from 'react'
import "./Footer.css";
import { assets } from "../../../assets/assets";

function FooterCount() {
    return (
        <footer className="footer">

            <section className="footer-stats">
                <p className="stats-heading">
                    India's most trusted generic medicine pharmacy.
                </p>

                <div className="stats-row">
                    <div className="stat-item">
                        <h3>10 Lakh+</h3>
                        <p>Happy customers</p>
                    </div>

                    <div className="stat-item">
                        <h3>35000+</h3>
                        <p>Pin-codes Covered</p>
                    </div>

                    <div className="stat-item">
                        <h3>75 Lakh+</h3>
                        <p>Orders Delivered</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default FooterCount