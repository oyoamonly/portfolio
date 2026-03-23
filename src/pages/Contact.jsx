export default function Contact() {
  return (
    <section>
      <h1>Contact 💌</h1>

      <p className="page-description">
        함께 이야기 나누고 싶다면 아래 주소로 편하게 연락 주세요.
      </p>

      <div className="section-block">
        <h2>Email</h2>
        <p>
          <a href="mailto:minjikim0825@gmail.com">minjikim0825@gmail.com</a>
        </p>
      </div>

      <div className="section-block">
        <h2>Links</h2>

        <p>
          <a
            href="http://linkedin.com/in/ellakim00"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>

      <div className="section-block">
        <p>
          프로젝트는 Projects에서, 자세한 이력은 Profile에서 확인할 수 있습니다.
        </p>
      </div>
    </section>
  );
}