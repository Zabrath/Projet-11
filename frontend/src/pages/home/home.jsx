import "./home.scss";

import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";
import HomeItems from "../../components/homeItems/homeItems";

function Home() {
  return (
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <HomeItems
          key={"ldzjk565"}
          title={"You are our #1 priority"}
          logo={iconChat}
          description={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <HomeItems
          key={"dfdfdhj1889"}
          title={"More savings means higher rates"}
          logo={iconMoney}
          description={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <HomeItems
          key={"zefsd2548"}
          title={"Security you can trust"}
          logo={iconSecurity}
          description={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
    </main>
  );
}

export default Home;
