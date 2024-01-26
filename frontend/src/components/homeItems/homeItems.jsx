import React from "react";
import "./homeItems.scss";

function HomeItems({ title, logo, description }) {
  return (
    <div class="feature-item">
      <img src={logo} alt="Chat Icon" className="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>
      {description}
      </p>
    </div>
  );
}

export default HomeItems;
