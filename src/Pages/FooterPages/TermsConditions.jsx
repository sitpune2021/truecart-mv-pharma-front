import React from "react";
import "./FooterPages.css";

const TermsConditions = () => {
  return (
    <div className="footer-page">
      <h1>Terms & Conditions</h1>

      <p>
        By accessing or using True Cart Pharmacy, you agree to comply
        with the following terms and conditions.
      </p>

      <ul>
        <li>Medicines are sold as per applicable laws</li>
        <li>Prices and availability may change without notice</li>
        <li>Orders once dispatched cannot be modified</li>
        <li>Misuse of website content is prohibited</li>
      </ul>

      <p>
        We reserve the right to update these terms at any time.
      </p>
    </div>
  );
};

export default TermsConditions;
