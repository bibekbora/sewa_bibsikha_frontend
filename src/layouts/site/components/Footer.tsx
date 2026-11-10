import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import { brand, contactInfo, navLinks, services } from "../../../data/siteContent";
import Logo from "./Logo";

const policies = [
  {
    label: "Anti-Bribery and Anti-Corruption Policy",
    file: "Anti-Bribery And Anti-Corruption Policy BIBSIKHA LLP.pdf",
  },
  {
    label: "Anti-Slavery Policy",
    file: "Anti-slavery Policy BIBSIKHA LLP.pdf",
  },
  {
    label: "Non-Discrimination and Equal Opportunity Policy",
    file: "Non-discrimination and equal opportunity policy BIBSIKHA LLP.pdf",
  },
  {
    label: "Prohibition of Child and Forced Labour",
    file: "Prohibition of Child and Forced Labour BIBSIKHA LLP.pdf",
  },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="site-footer__cta">
          <h2 className="display-lg">
            Let’s build a <span className="text-gold">greener</span> future together.
          </h2>
          <Link to="/contact" className="btn btn--gold">
            Start a project
            <Icon name="arrowRight" size={18} />
          </Link>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo light />
            <p>
              {brand.tagline}. Energy, Environment and Ecosystem conservation projects — headquartered in Jorhat, Assam.
            </p>
          </div>

          <div>
            <h4 className="site-footer__title">Explore</h4>
            <ul className="site-footer__list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="site-footer__title">Services</h4>
            <ul className="site-footer__list">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="site-footer__title">Get in touch</h4>
            <ul className="site-footer__list site-footer__contact">
              <li>
                <Icon name="mail" size={18} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Icon name="globe" size={18} />
                <a href={`https://${contactInfo.website}`}>{contactInfo.website}</a>
              </li>
              <li>
                <Icon name="pin" size={18} />
                <span>
                  {contactInfo.addressLines.map((line) => (
                    <span key={line} style={{ display: "block" }}>
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__policies">
          <h4 className="site-footer__title">Policies</h4>
          <ul className="site-footer__policy-list">
            {policies.map((policy) => (
              <li key={policy.file}>
                <a href={encodeURI(`/docs/${policy.file}`)} target="_blank" rel="noopener noreferrer">
                  {policy.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {brand.legalName}. All rights reserved.</span>
          <span className="site-footer__made">
            <Icon name="leaf" size={16} /> Designed for a sustainable planet
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
