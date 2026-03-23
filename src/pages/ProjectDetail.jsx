import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const projectDetails = {
  "login-ux-improvement": {
    subtitle: "Hotjar 분석 기반으로 로그인 UX 병목을 개선한 프로젝트",
    organization: "(주)링크12",
    role: "마케팅 기획",
    period: "2025.01 ~ 2025.02",
    link: "",
    overview: [
      "로그인 페이지에서 미가입 유저의 80% 이상이 로그인 시도를 반복하며 오류 발생 후 이탈하는 UX 병목 구간을 확인했습니다.",
      "Hotjar 분석을 기반으로 ‘가입되지 않은 계정’ 오류를 반복 경험하는 흐름이 주요 이탈 원인임을 도출했습니다.",
    ],
    sections: [
      {
        title: "Problem",
        bullets: [
          "로그인 시도를 반복한 뒤 오류를 경험하고 이탈하는 사용자가 많았습니다.",
          "특히 미가입 유저가 Sign in / Sign up 구분 없이 진입하며 잘못된 행동을 반복하는 패턴이 나타났습니다.",
        ],
      },
      {
        title: "Hypothesis",
        bullets: [
          "Sign in / Sign up의 유사한 영어 카피가 유저 혼동을 유발해 잘못된 행동을 초래한다고 가설을 세웠습니다.",
        ],
      },
      {
        title: "Action",
        bullets: [
          "로그인 버튼명을 ‘Sign in → Login’으로 변경하는 UI 개선안을 기획했습니다.",
          "A/B 테스트를 설계하고 운영해 카피 변경의 효과를 검증했습니다.",
          "UX 원칙 학습과 국내외 서비스 리서치를 바탕으로 직관성 개선 근거를 확보했습니다.",
          "PM·개발팀과 협업해 개선안을 적용하고 1개월간 실험을 진행했습니다.",
        ],
      },
      {
        title: "Result",
        bullets: [
          "로그인 오류 발생 건수를 전월 대비 88% 감소시켰습니다. (17건 → 2건)",
        ],
      },
    ],
    images: ["PROJECT IMAGE", "PROJECT IMAGE"],
  },

  "shortform-campaign": {
    subtitle: "크리에이터 협업 기반 숏폼 광고 프로젝트를 리드한 사례",
    organization: "(주)링크12",
    role: "마케팅 기획",
    period: "2024.08 ~ 2024.10",
    link: "https://www.instagram.com/reel/C_t6IvEOwUw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    overview: [
      "서비스 출시 초기 이후 1개월 만에 신규 유저 유입이 약 90% 감소하며 온드 채널 중심 성장의 한계를 확인했습니다.",
      "인지도 확장이 필요한 시점에서 채널 확장보다 콘텐츠 메시지 개선이 더 효과적일 것이라는 가설을 세우고 프로젝트를 진행했습니다.",
    ],
    sections: [
      {
        title: "Problem",
        bullets: [
          "출시 초기 이후 신규 유저 유입이 급감했습니다.",
          "온드 채널 중심 운영만으로는 추가 성장 여력이 제한적이었습니다.",
        ],
      },
      {
        title: "Hypothesis",
        bullets: [
          "낮은 브랜드 인지도 단계에서는 채널 수를 늘리는 것보다 콘텐츠 구조를 개선하는 것이 유입 전환에 더 효과적이라고 판단했습니다.",
        ],
      },
      {
        title: "Action",
        bullets: [
          "주요 유입 채널인 인스타그램 기반 크리에이터 협업 숏폼 광고를 기획하고 프로젝트를 리드했습니다.",
          "타겟 유저 적합도를 기준으로 크리에이터를 리서치하고 직접 섭외했습니다.",
          "기능 중심 광고 대신 유저 페인포인트 공감형 스토리텔링 구조로 광고 메시지를 설계했습니다.",
          "댓글 참여 이벤트를 기획해 유입 유도와 동시에 VoC(사용 이유) 수집 구조를 만들었습니다.",
        ],
      },
      {
        title: "Result",
        bullets: [
          "플랫폼 사용 신청 건수를 주 4건에서 주 30건으로 증가시켰습니다.",
          "광고 7일간 조회수 2만+를 달성했습니다.",
          "인스타그램 팔로워 약 400명 증가를 이끌었습니다.",
        ],
      },
    ],
    images: ["PROJECT IMAGE", "PROJECT IMAGE"],
  },

  "webinar-growth": {
    subtitle: "VoC 분석 기반으로 웨비나 구조를 개편하고 오프라인 세미나를 기획한 프로젝트",
    organization: "(주)링크12",
    role: "마케팅 기획",
    period: "2024.08 ~ 2024.09",
    link: "",
    overview: [
      "무료 웨비나 참여자가 약 20명 수준에 머물며 확장 한계가 나타났고, 반복 참여 고객의 재참여율도 감소하고 있었습니다.",
      "고객 고민 중심의 콘텐츠 구조로 전환하고, 무료 웨비나와 차별화되는 오프라인 세미나를 추가 설계했습니다.",
    ],
    sections: [
      {
        title: "Problem",
        bullets: [
          "무료 웨비나를 통한 신규 유입이 참여자 약 20명 수준에 머물렀습니다.",
          "반복 참여 고객의 재참여율이 점차 감소하고 있었습니다.",
        ],
      },
      {
        title: "Hypothesis",
        bullets: [
          "반복적인 주제와 형식의 웨비나가 고객의 참여 동기를 낮추고 있다고 판단했습니다.",
        ],
      },
      {
        title: "Action",
        bullets: [
          "웨비나 참여 데이터와 신청 폼 VoC를 분석해 핵심 고객 고민 키워드를 도출했습니다.",
          "기능 설명 중심에서 고객 고민 사례 기반 스토리텔링 구조로 콘텐츠를 전면 개편했습니다.",
          "무료 웨비나와 차별화된 유료 오프라인 세미나를 신규 기획하고 온·오프라인 격주 운영 구조를 설계했습니다.",
          "오프라인 참여자 대상 무료 상담 혜택을 제공해 참여 장벽을 낮추고 구매 전환을 유도했습니다.",
        ],
      },
      {
        title: "Result",
        bullets: [
          "웨비나 참여자 수를 5배 증가시켰습니다. (20명 → 100명)",
          "오프라인 세미나 참여자 60명 이상을 확보했습니다.",
          "오프라인 세미나 참여 고객 구매 전환율 13%를 달성했습니다. (8명 현장 구매)",
        ],
      },
    ],
    images: ["PROJECT IMAGE", "PROJECT IMAGE"],
  },

  "daily-scrum-automation": {
    subtitle: "n8n과 AI 요약을 활용해 데일리 스크럼 자동화 시스템을 기획한 프로젝트",
    organization: "AX WAVE 1기 - AI 서비스 기획자 과정",
    role: "개인 프로젝트",
    period: "2026.01",
    links: [{ label: "시연 영상", url: "https://drive.google.com/drive/folders/1-neGhzBMHdaPneQbT66WwmopIAdtkE4L?usp=sharing" }],
    overview: [
      "개인 단위로 분산된 데일리 스크럼 운영으로 인해 팀 전체 업무 상태를 한눈에 파악하기 어려운 문제를 핵심 이슈로 정의했습니다.",
      "n8n 기반 자동화와 AI 요약을 활용해 개인 스크럼을 팀 단위 업무 상태로 집계·공유하는 구조를 설계했습니다.",
    ],
    sections: [
      {
        title: "Problem",
        bullets: [
          "개인별로 따로 관리되는 데일리 스크럼은 팀 단위 상태 공유에 비효율적이었습니다.",
          "업무 현황이 흩어져 있어 팀 전체가 빠르게 상황을 파악하기 어려웠습니다.",
        ],
      },
      {
        title: "Action",
        bullets: [
          "n8n 기반 자동화 흐름을 설계했습니다.",
          "AI 요약을 통해 개인 스크럼을 팀 상태 관점으로 재구성하는 구조를 기획했습니다.",
          "슬랙과 노션을 연동해 데일리 스크럼 자동화 시스템을 설계했습니다.",
        ],
      },
      {
        title: "Result",
        bullets: [
          "분산된 업무 상태 공유를 자동화 관점에서 재구성한 프로젝트로, 팀 커뮤니케이션 효율 개선 가능성을 검증했습니다.",
        ],
      },
    ],
    images: ["PROJECT IMAGE"],
  },

  "reviewtrust-ai": {
    subtitle: "LLM 기반 리뷰 검증 B2B 플랫폼을 기획한 프로젝트",
    organization: "AX WAVE 1기 - AI 서비스 기획자 과정",
    role: "팀 프로젝트",
    period: "2025.12",
    links: [
    { label: "Website", url: "https://693b84fb8e5a9b10f4c0be68--incandescent-salmiakki-671e60.netlify.app/#/" },
    { label: "시연 영상", url: "https://youtu.be/xJLbLf4Dm1A?si=-joCOvduhwrpmQdU" },
  ],
    overview: [
      "AI·광고성 리뷰 확산으로 소비자 리뷰 신뢰도가 낮아지고, 글로벌 숙소 플랫폼의 신뢰도 하락 문제를 핵심 Pain으로 정의했습니다.",
      "LLM 기반 의미 분석을 통해 리뷰 진위 판단과 숙소별 신뢰도 스코어를 제공하는 B2B 웹 대시보드 MVP를 기획했습니다.",
    ],
    sections: [
      {
        title: "Problem",
        bullets: [
          "광고성·생성형 리뷰 증가로 인해 소비자의 리뷰 신뢰가 약화되고 있었습니다.",
          "플랫폼 사업자 입장에서도 신뢰도 하락은 장기적으로 경쟁력 약화로 이어질 수 있었습니다.",
        ],
      },
      {
        title: "Action",
        bullets: [
          "리뷰 의미 분석을 통한 진위 판단 구조를 설계했습니다.",
          "숙소별 신뢰도 스코어를 제공하는 B2B 웹 대시보드 MVP를 기획했습니다.",
          "문제 정의부터 솔루션 방향까지 AI 활용 시나리오를 제품 관점에서 정리했습니다.",
        ],
      },
      {
        title: "Result",
        bullets: [
          "LLM 기반 리뷰 검증 서비스의 제품 컨셉과 대시보드 구조를 구체화했습니다.",
        ],
      },
    ],
    images: ["PROJECT IMAGE"],
  },

  "howbox": {
    subtitle: "개인 물건의 사용 기억을 저장·확장하는 AI 서비스 기획",
    organization: "AX WAVE 1기 - AI 서비스 기획자 과정",
    role: "개인 프로젝트",
    period: "2026.01",
    link: "",
    overview: [
      "생활 기기 사용 정보가 검색·기록 과정에서 반복적으로 소실되고 파편화되는 문제를 페인포인트로 정의했습니다.",
      "모델명 기반 AI 자동 완성과 상황 태그 구조를 통해 사용 기억을 즉시 저장·확장하는 앱 서비스를 기획했습니다.",
    ],
    sections: [
      {
        title: "Problem",
        bullets: [
          "물건 사용 정보가 여러 채널에 흩어져 있고, 필요할 때 다시 찾기 어려웠습니다.",
          "기록 과정 자체가 번거로워 사용 정보가 누락되는 문제가 발생했습니다.",
        ],
      },
      {
        title: "Action",
        bullets: [
          "모델명 기반 AI 자동 완성 기능을 기획했습니다.",
          "상황 태그 구조를 통해 사용 기억을 빠르게 저장하고 맥락화할 수 있도록 설계했습니다.",
          "검색보다 기록과 회상의 연결에 초점을 둔 앱 서비스 흐름을 정리했습니다.",
        ],
      },
      {
        title: "Result",
        bullets: [
          "개인 물건 정보 관리 문제를 AI 기반 기억 보조 서비스로 전환한 제품 컨셉을 구체화했습니다.",
        ],
      },
    ],
    images: ["PROJECT IMAGE"],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails[slug];

  if (!project || !detail) {
    return (
      <section>
        <h1>Project not found.</h1>
        <p className="page-description">
          The project you are looking for does not exist.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1>{project.title}</h1>

      <p className="page-description">{detail.subtitle}</p>

      <p className="meta-line">
        {detail.period} · {detail.organization}
      </p>

      {Array.isArray(detail.links) && detail.links.length > 0 && (
  <p className="project-links-inline">
    {detail.links.map((link, index) => (
      <span key={index}>
        <a href={link.url} target="_blank" rel="noreferrer">
          {link.label}
        </a>
        {index !== detail.links.length - 1 && " / "}
      </span>
    ))}
  </p>
)}

      <div className="section-block">
        <h2>Overview</h2>
        {detail.overview.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      {project.video && (
  <div
    style={{
      marginTop: "28px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <video
      controls
      style={{
        display: "block",
        width: "320px",
        maxWidth: "100%",
        height: "auto",
        borderRadius: "12px",
        background: "#000",
      }}
    >
      <source src={project.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)}

      <div className="section-block">
        <h2>Role</h2>
        <p>{detail.role}</p>
      </div>

      {detail.sections.map((section) => (
        <div className="section-block" key={section.title}>
          <h2>{section.title}</h2>
          <ul>
            {section.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      {Array.isArray(project.detailImages) &&
      project.detailImages.map((img, index) => (
        <div key={index} className="detail-image-wrap">
          <img
            src={img}
            alt={`${project.title}-${index + 1}`}
            className="detail-image"
          />
        </div>
      ))}
  </section>
);
}