export default function Buttons() {
  return (
    <div className="buttons">
      <a
        className="email btn"
        href="mailto:theblaisecode@gmail.com"
        target="_blank"
        aria-label="Send an email to TheBlaiseCode">
        <i className="fa-solid fa-envelope"></i>
        Email
      </a>

      <a
        className="linkedin btn"
        href="https://www.linkedin.com/in/theblaisecode"
        target="_blank"
        aria-label="Link to TheBlaiseCode linkedin">
        <i className="fa-brands fa-linkedin"></i>
        LinkedIn
      </a>
    </div>
  );
}
