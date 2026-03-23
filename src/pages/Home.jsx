export default function Home() {
  return (
    <section className="home">  {/* 여기 추가 */}
      <h1>Hi. 👋</h1>
      <h2>My name is Minji</h2>

      <h3>작은 문제를 더 나은 사용자 경험으로 바꾸는 기획자입니다.</h3>

      <p>
        사용자의 반복되는 불편을 발견하고,
        데이터와 사용자 행동을 통해 문제를 정의합니다.
      </p>
      <p>
        그리고 실행 가능한 해결 방법으로 바꾸어
        조금씩 더 나은 경험을 만들어갑니다.
      </p>

      <div className="section-block">
        <h3>Better than Yesterday</h3>

        <p>작은 개선이 더 나은 서비스를 만든다고 믿습니다.</p>

        <p>
          어제보다 조금 더 나은 경험을 만들고,
          그 과정에서 저 역시 성장합니다.
        </p>
      </div>
    </section>
  );
}