import html from "/tech/html.png";
import css from "/tech/css.png";
import javascript from "/tech/javascript.png";
import reactjs from "/tech/reactjs.png";
import nodejs from "/tech/nodejs.png";
import git from "/tech/git.png";
import figma from "/tech/figma.png";
import photoshop from "/tech/photoshop.png";
import mysql from "/tech/mysql.png";
import nextjs from "/tech/nextjs.png";
import bootstrap from "/tech/bootstrap.png";

import jlpt from "/languages/JLPT_N1.jpg";
import topik from "/languages/TOPIK_5.jpg";
import toeic from "/languages/toeic.jpg";

import { MdEmail } from "react-icons/md";
import {  FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// 導覽列
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// 技能
const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Bootstrap", icon: bootstrap },
  { name: "React.js", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: nodejs },
  { name: "Figma", icon: figma },
  { name: "Photoshop", icon: photoshop },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
];

// 語言
const languages = [
  {
    name: "英文",
    flag: "https://flagcdn.com/w320/us.png",
    certificate: "TOEIC 720",
    image: toeic,
  },
  {
    name: "日文",
    flag: "https://flagcdn.com/w320/jp.png",
    certificate: "JLPT N1",
    image: jlpt,
  },
  {
    name: "韓文",
    flag: "https://flagcdn.com/w320/kr.png",
    certificate: "TOPIK 5級",
    image: topik,
  },
];

// 專案
const projects = [
  {
    id: 1,
    category: "揪團打球平台",
    title: "TeamB",
    description:
      "TeamB 提供便利的運動揪團平台，讓使用者輕鬆組織與加入球局，並附設價格實惠、品質優良的購物平台，方便球友選購裝備。",
    responsibilities: [
      "主導購物車、訂單與優惠券功能的前後端整合設計與開發。",
      "使用Next.js（React）建構前端介面，實作商品加購、優惠券套用與訂單查詢。",
      "後端以 Node.js + Express.js 建立 RESTful API，串接 MySQL 實作訂單等資料的 CRUD 功能。",
      "串接綠界金流服務與 7-11 門市物流 API，整合線上付款與超商門市選擇功能。",
    ],
    image: "/pro1.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Mysql",
      "Git",
    ],
    demoUrl: "https://team-b-next-six.vercel.app/",
    codeUrl: "#",
    teamSize: "6人",
  },
  {
    id: 2,
    category: "個人網站",
    title: "個人簡歷網站",
    description:
      "個人簡歷網站，整合個人資訊、技能與作品展示功能。支援手機與桌面版瀏覽，於技能展示中加入 Three.js 互動元素。",
    image: "/pro2.png",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Three.js"],
    demoUrl: "#",
    codeUrl: "#",
    teamSize: "1人",
  },
];

// Contact
const formFields = [
    {
      name: "name",
      label: "姓名",
      type: "text",
      placeholder: "請輸入您的姓名",
      required: true
    },
    {
      name: "email",
      label: "電子郵件",
      type: "email",
      placeholder: "請輸入您的電子郵件",
      required: true
    },
    {
      name: "message",
      label: "訊息",
      type: "textarea",
      placeholder: "請輸入您的訊息（至少10個字元）",
      required: true
    }
  ];

  const contactItems = [
    {
      icon: <MdEmail />,
      title: "電子郵件",
      content: "po910216@gmail.com"
    },
    {
      icon: <FaPhoneAlt />,
      title: "手機",
      content: "0900315679"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "地址",
      content: "台南市學甲區"
    }
  ];

export { technologies, languages, projects, formFields, contactItems };