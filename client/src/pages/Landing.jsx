import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby mlkshk dreamcatcher schlitz woke street art, lumbersexual
            ennui typewriter green juice pour-over. Echo park master cleanse
            tonx portland, brunch enamel pin hot chicken. Tacos man braid fanny
            pack, kinfolk neutral milk hotel franzen vegan Brooklyn. Yuccie
            chillwave franzen unicorn, pop-up vegan taxidermy master cleanse
            brunch ennui food truck. Truffaut grailed tattooed glossier hot
            chicken solarpunk heirloom food truck. Mixtape ramps literally,
            pour-over VHS before they sold out thundercats bushwick chambray
            photo booth. Gorpcore chicharrones fingerstache cliche before they
            sold out bitters authentic roof party synth.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} atl="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
