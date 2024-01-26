import React from "react";
import "./viewTransaction.scss";

function ViewTransaction({ title, ammount, description }) {
    return (
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{ammount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    );
  }
  
  export default ViewTransaction;