import React from "react";
import "./user.scss";
import ViewTransaction from "../../components/viewTransaction/viewTransaction";

function User() {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <ViewTransaction
        title={"Argent Bank Checking (x8349)"}
        ammount={"$2,082.79"}
        description={"Available Balance"}
      />
      <ViewTransaction
        title={"Argent Bank Savings (x6712)"}
        ammount={"$10,928.42"}
        description={"Available Balance"}
      />
      <ViewTransaction
        title={"Argent Bank Credit Card (x8349"}
        ammount={"$184.30"}
        description={"Current Balance"}
      />
    </main>
  );
}

export default User;