import { Link } from "react-router-dom";

interface LogoProps {
  light?: boolean;
}

const Logo = ({ light = false }: LogoProps) => {
  return (
    <Link to="/" className={`logo ${light ? "logo--light" : ""}`} aria-label="Bibsikha home">
      <img
        className="logo__image"
        src="/images/bibsikha_logo_cropped.png"
        alt="Bibsikha"
        width={588}
        height={424}
      />
    </Link>
  );
};

export default Logo;
