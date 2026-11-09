import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "../../components/Icon";
import type { TeamMember } from "../../data/siteContent";

interface TeamProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamProfileModal = ({ member, onClose }: TeamProfileModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!member) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [member, onClose]);

  if (!member) return null;

  const titleId = `${member.id}-profile-title`;

  return createPortal(
    <div className="profile-modal" role="presentation" onClick={onClose}>
      <div
        className="profile-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="profile-modal__close" onClick={onClose} aria-label="Close profile">
          <Icon name="close" size={22} />
        </button>

        <header className="profile-modal__header">
          <img className="profile-modal__avatar" src={member.photo} alt={member.name} width={120} height={120} />
          <div>
            <span className="profile-modal__position">{member.position}</span>
            <h2 id={titleId}>{member.name}</h2>
            <ul className="profile-modal__roles">
              {member.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </header>

        <div className="profile-modal__body">
          {member.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {member.sections.map((section) => (
            <section key={section.title} className="profile-modal__section">
              <h3>{section.title}</h3>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items && (
                <ul className="profile-modal__list">
                  {section.items.map((item) => (
                    <li key={item}>
                      <span>
                        <Icon name="award" size={18} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default TeamProfileModal;
