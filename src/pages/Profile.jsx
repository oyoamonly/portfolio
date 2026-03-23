export default function Profile() {
  return (
    <section>
      <h1>Profile 👩🏻‍💻</h1>

      <p className="page-description">김민지 · Product Manager</p>

      <div className="section-block">
        <h2>Who am I?</h2>

        <div className="profile-entry">
          <p>
            <strong>[현상과 문제를 연결하는 PM]</strong>
          </p>
          <p>
            데이터에서 문제를 발견하고, 가설로 연결해 실험으로 검증합니다.
            Hotjar 분석으로 UX 병목을 발견하고 테스트를 설계해 오류 건수를
            88% 감소시켰습니다.
          </p>

          <p>
            <strong>[유저와 제품을 연결하는 기획자]</strong>
          </p>
          <p>
            유저의 행동과 언어에서 출발해 제품의 방향을 설계합니다. VoC 분석을
            기반으로 웨비나 구조를 개편해 참여자를 5배 성장시켰습니다.
          </p>

          <p>
            <strong>[팀을 성과로 연결하는 협업자]</strong>
          </p>
          <p>
            기획·마케팅·개발의 언어를 각자의 맥락에서 이해하고 사용자 중심으로
            연결합니다. UX 디자이너·마케터·PM을 모두 경험하며 각 직군의 관점을
            직접 익혔습니다.
          </p>
        </div>
      </div>

      <div className="section-block">
        <h2>💼 Work Experience</h2>

        <div className="profile-entry">
          <h3>링크12 | 에듀테크 스타트업</h3>
          <p className="meta-line">마케팅 기획 · 2024.06 ~ 2025.02</p>
          <ul>
            <li>플랫폼 UX 개선 및 A/B 테스트 기획</li>
            <li>콘텐츠 및 광고 캠페인 전략 수립</li>
            <li>데이터 기반 사용자 행동 분석 및 개선</li>
          </ul>
        </div>

        <div className="profile-entry">
          <h3>링크12 | 에듀테크 스타트업</h3>
          <p className="meta-line">콘텐츠 마케팅 인턴 · 2024.03 ~ 2024.05</p>

          <h4>1. 채널별 콘텐츠 전략 및 프로세스 설계</h4>
          <ul>
            <li>
              채널별 목적과 리소스를 고려한 전체 콘텐츠 운영 프로세스 기획
            </li>
            <li>
              링크별 UTM 파라미터 설정을 통한 채널·캠페인 성과 추적
            </li>
          </ul>

          <h4>2. 온드 채널 콘텐츠 기획 및 운영</h4>
          <ul>
            <li>경쟁사 리서치 및 커뮤니티 분석을 통한 콘텐츠 소재 도출</li>
            <li>
              카카오톡 채널 타겟별 메시지 기획 및 발송 운영, 성과 분석 및 주간
              리포팅 (Excel)
            </li>
            <li>
              인스타그램 콘텐츠 기획 및 디자인, 브랜드 톤앤매너에 맞춘 콘텐츠
              템플릿 설계 (Figma)
            </li>
          </ul>

          <h4>3. 검색 유입 확보를 위한 블로그 SEO 운영</h4>
          <ul>
            <li>
              브랜드 노출 강화를 위한 기업 블로그 신규 개설 및 국·영문 콘텐츠
              기획
            </li>
            <li>
              키워드 리서치 기반 블로그 콘텐츠 구조 개선 및 검색 노출 관리
            </li>
          </ul>
        </div>
      </div>

      <div className="section-block">
        <h2>🛠 Skills</h2>

        <div className="profile-entry">
          <p>Figma · Notion · Slack</p>
          <p>
            Microsoft Excel · Google Analytics · Hotjar · Microsoft Power BI
          </p>
          <p>SQL · Python</p>
        </div>
      </div>

      <div className="section-block">
        <h2>🏫 Education</h2>

        <div className="profile-entry">
          <h3>숙명여자대학교</h3>
          <p className="meta-line">2019.03 ~ 2024.08</p>
          <p>소비자경제학과 주전공 | 경영학부 복수전공</p>
          <p>학점 3.95/4.5</p>
        </div>

        <div className="profile-entry">
          <h3>University of the Incarnate Word</h3>
          <p className="meta-line">2022.01 ~ 2022.05</p>
          <p>미국 교환학생 | Economics</p>
          <p>학점 3.74/4.0</p>
        </div>
      </div>

      <div className="section-block">
        <h2>✨ Activities</h2>

        <div className="profile-entry">
          <h3>AX WAVE 1기 - AI 서비스 기획자 과정</h3>
          <p className="meta-line">CJ올리브네트웍스 · 2025.09 ~ 2026.02</p>
        </div>

        <div className="profile-entry">
          <h3>대한민국디자인전람회</h3>
          <p className="meta-line">KIDP · 2025.03 ~ 2025.06</p>

          <h4>AI 영상 방명록 서비스 '온글' 기획 프로젝트</h4>
          <ul>
            <li>
              장기 입원 시니어 환자와 보호자 간 정서적 단절을 핵심 문제로 정의
              → AI 영상 방명록을 통해 비대면 정서 교류가 가능한 앱 서비스 기획
            </li>
            <li>
              시니어 환자의 경우, 텍스트보다는 영상 기반 커뮤니케이션이 더
              정서적 만족도가 높을 것이라고 가설 설정 → 영상 중심 UX와 큰글 모드
              UI를 핵심 기능으로 설계
            </li>
            <li>환자/보호자 유저 플로우 설계 및 환자용 화면 UI 디자인</li>
            <li>팀장으로서 기획·리서치·디자인 전 과정 리드</li>
          </ul>
        </div>

        <div className="profile-entry">
          <h3>UMC(대학생 개발 연합 동아리)</h3>
          <p className="meta-line">2023.09 ~ 2024.02</p>

          <h4>식사 상황별 콘텐츠 추천 서비스 '밥 친구' 개발 프로젝트</h4>
          <ul>
            <li>
              1인 UX/UI 디자이너로 와이어프레임, 디자인 시스템 설계, UI 디자인 및
              프로토타입 제작까지 전체 디자인 리드
            </li>
            <li>PM·개발자와 협업 및 구현·배포 과정 커뮤니케이션 진행</li>
            <li>동아리 데모데이에서 프로덕트 시연 및 설명 담당</li>
          </ul>

          <h4>UX/UI 디자인 스터디 운영</h4>
          <ul>
            <li>프로젝트 역량 강화를 위한 자체 UX/UI 스터디 기획 및 운영</li>
            <li>디자인 결과물 공유 및 피드백 중심 학습 진행</li>
          </ul>
        </div>

        <div className="profile-entry">
          <h3>BIGSOOKTA(빅데이터 분석 학회)</h3>
          <p className="meta-line">2021.01 ~ 2021.12</p>

          <h4>데이터 분석을 통한 마케팅 전략 기획 프로젝트 &lt;우수상 수상&gt;</h4>
          <ul>
            <li>
              캐글의 고객 성향 데이터를 분석해 고객 군집 정의 및 핵심 특성 도출
              (Python)
            </li>
            <li>
              분석 결과를 마켓컬리 브랜드에 적용해 고객 군집별 마케팅 캠페인 및
              프로모션 기획
            </li>
            <li>팀장으로서 프로젝트 일정 관리 및 협업 주도</li>
          </ul>

          <h4>교육부장 1년</h4>
          <ul>
            <li>Python 교육 커리큘럼 기획 및 학습 자료 제작</li>
            <li>학회원 대상 과제·프로젝트 운영 및 학습 진행 관리</li>
          </ul>
        </div>
      </div>

      <div className="section-block">
        <h2>🏆 Awards</h2>

        <div className="profile-entry">
          <h3>CJ OneFlow AI 프로젝트 - 최우수상</h3>
          <p className="meta-line">CJ올리브네트웍스 · 2026</p>
          <ul>
            <li>AX WAVE 1기 최종 프로젝트에서 최우수상(1위) 수상</li>
            <li>
              CJ OneFlow AI 환경과 CJ ONE 데이터를 활용해 크루 기반 참여형 AI
              서비스 'CrewONE' 기획 및 개발
            </li>
          </ul>
        </div>
      </div>

      <div className="section-block">
        <h2>📄 Certifications</h2>

        <div className="profile-entry">
          <ul>
            <li>OPIc AL · ACTFL · 2025</li>
            <li>TOEIC 960 · ETS · 2024</li>
            <li>컴퓨터활용능력 1급 · 대한상공회의소 · 2021</li>
          </ul>
        </div>
      </div>

      <div className="section-block">
        <h2>💬 Languages</h2>

        <div className="profile-entry">
          <p>영어 · 비즈니스 회화 </p>
        </div>
      </div>
    </section>
  );
}