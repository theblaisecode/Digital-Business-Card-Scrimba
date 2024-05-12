export default function Buttons() {
  return (
    <div className="buttons">
      <button className="email">
        <a
          href="mailto:theblaisecode@gmail.com"
          target="_blank"
          aria-label="Send an email to TheBlaiseCode">
          <i className="fa-solid fa-envelope"></i>
          Email
        </a>
      </button>

      <button className="linkedin">
        <a
          href="https://www.linkedin.com/in/theblaisecode"
          target="_blank"
          aria-label="Link to TheBlaiseCode linkedin">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </button>
    </div>
  );
}
