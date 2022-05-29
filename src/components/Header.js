import HeaderStyles from "./styles/HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;

const Header = () => {
  return (
    <HeaderStyles.HeaderMain>
      <h1>Bionic Reader</h1>
      <a href="https://github.com/Dylaan94">
        {gitHubIcon}
        <p>dylaan94</p>
      </a>
    </HeaderStyles.HeaderMain>
  );
};

export default Header;
