export default function Home() {
  return (
    <section className="home">
      <h1>Hi. 👋</h1>
      <h2>My name is Minji</h2>

      <p className="home-welcome">
        Welcome to my portfolio, where I turn ideas💡 into better experiences✨.
      </p>

      {/* Intro */}
      <div className="section-block">
        <h2>Intro</h2>

        <p>
          <strong>
            Data to insight. Insight to product. Product to people.
          </strong>
        </p>

        <p>
          데이터에서 문제를 발견하고, 인사이트를 제품으로 연결해 사용자 경험으로 이어지게 만듭니다.
        </p>

        <p>
          작은 개선 하나가 더 나은 사용자 경험으로 이어진다고 믿습니다.
        </p>
      </div>

      {/* Interests */}
      <div className="section-block">
        <h2>Interests</h2>

        <p>
          <strong>
            일상 속 경험과 IT 서비스가 만나는 지점에 관심이 많습니다.
          </strong>
        </p>

        <p>
          특히 모바일 기기와 라이프스타일이 결합되는 영역에서
          사용자의 행동과 경험이 어떻게 변화하는지 관찰합니다.
        </p>

        <p>
          사용자의 작은 불편을 발견하고,
          이를 더 나은 제품과 서비스 경험으로 연결하는 과정을 중요하게 생각합니다.
        </p>
      </div>
    </section>
  );
}