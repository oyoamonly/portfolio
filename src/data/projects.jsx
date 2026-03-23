import loginThumb from "../assets/projects/login/thumb.png";
import loginDetail1 from "../assets/projects/login/detail1.png";
import loginDetail2 from "../assets/projects/login/detail2.png";
import loginDetail3 from "../assets/projects/login/detail3.png";

import shortformThumb from "../assets/projects/shortform/thumb.png";
import shortformDetail1 from "../assets/projects/shortform/detail1.png";
import shortformDetail2 from "../assets/projects/shortform/detail2.png";

import webinarThumb from "../assets/projects/webinar/thumb.png";

import scrumThumb from "../assets/projects/scrum/thumb.png";
import scrumDetail1 from "../assets/projects/scrum/detail1.png";

import reviewtrustThumb from "../assets/projects/reviewtrust/thumb.png";
import reviewtrustDetail1 from "../assets/projects/reviewtrust/detail1.png";
import reviewtrustDetail2 from "../assets/projects/reviewtrust/detail2.png";

import howboxThumb from "../assets/projects/howbox/thumb.png";
{/*
import howboxVideo from "../assets/projects/howbox/demo.mp4";
*/}

export const projects = [
  {
    slug: "login-ux-improvement",
    title: "플랫폼 로그인 UX 개선",
    description:
      "Hotjar 분석 기반으로 로그인 오류를 줄이기 위한 UX 개선 프로젝트",
    date: "2025.01",
    tags: ["UX", "A/B Test", "Hotjar", "PM"],
    thumbnail: loginThumb,
    detailImages: [loginDetail1, loginDetail2, loginDetail3],
  },
  {
    slug: "shortform-campaign",
    title: "크리에이터 협업 숏폼 광고 프로젝트",
    description:
      "신규 유저 유입 개선을 위한 인스타그램 기반 광고 프로젝트",
    date: "2024.08",
    tags: ["Marketing", "Campaign", "Content"],
    thumbnail: shortformThumb,
    detailImages: [shortformDetail1, shortformDetail2],
  },
  {
    slug: "webinar-growth",
    title: "웨비나 구조 개편 및 오프라인 세미나 기획",
    description:
      "VoC 분석 기반으로 참여율과 전환율을 높인 프로젝트",
    date: "2024.08",
    tags: ["VoC", "Growth", "Seminar"],
    thumbnail: webinarThumb,
  },
  {
    slug: "daily-scrum-automation",
    title: "데일리 스크럼 자동화",
    description:
      "n8n과 AI 요약을 활용한 업무 상태 공유 시스템 기획",
    date: "2026.01",
    tags: ["AI", "Automation", "n8n"],
    thumbnail: scrumThumb,
    detailImages: [scrumDetail1],
  },
  {
    slug: "reviewtrust-ai",
    title: "ReviewTrust AI",
    description:
      "LLM 기반 리뷰 검증 B2B 플랫폼 기획",
    date: "2025.12",
    tags: ["LLM", "B2B", "AI"],
    thumbnail: reviewtrustThumb,
    detailImages: [reviewtrustDetail1, reviewtrustDetail2],
  },
  {
    slug: "howbox",
    title: "HOWBOX",
    description:
      "개인 물건의 사용 기억을 저장·확장하는 AI 서비스 기획",
    date: "2026.01",
    tags: ["AI", "App", "Product"],
    thumbnail: howboxThumb,
    /*video: howboxVideo*/
  },
];