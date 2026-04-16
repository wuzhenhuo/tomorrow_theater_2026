import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, BookOpen, Palette,
  ChevronLeft, ChevronRight, ArrowRight, Play,
  Cpu, Sparkles, Film,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useWaitlist } from '../context/WaitlistContext';
import ScrollReveal from '../components/ScrollReveal';

import img001tot from '../assets/images/001tot.JPG';
import dancer1 from '../assets/images/dancer1.jpg';
import dancer2 from '../assets/images/dancer2.JPG';
import dancer4 from '../assets/images/dancer4.JPG';
import dancer5 from '../assets/images/dancer5.JPG';
import dancer7 from '../assets/images/dancer7.jpg';
import dancer8 from '../assets/images/dancer8.JPG';
import dancer9 from '../assets/images/dancer9.png';
import tomorrowtheater01 from '../assets/images/tomorrowtheater01.png';
import tomorrowtheater02 from '../assets/images/tomorrowtheater02.png';

const pageContent = {
  'zh-CN': {
    badge: '国内首个元宇宙虚拟剧场',
    title: 'THEATER OF\nTOMORROW',
    chTitle: '明日剧场',
    subtitle: 'AIGC + 元宇宙 · 戏剧 · 舞蹈 · 绘画 · 设计',
    subtitleDesc: '将元宇宙虚拟剧场概念具象化的沉浸式艺术展演空间',
    heroUpgradeTitle: '2026 全新升级：',
    heroUpgradeItems: ['全新 AI 知识库学习系统', '全新舞蹈数据库系统', '全新 AI 编舞系统'],
    tryPlatform: '新版本预约',
    downloadAndroid: '下载移动版（安卓）',
    stats: [
      { value: '9+', label: '国际奖项' },
      { value: '6+', label: '合作机构' },
      { value: '2', label: '课程体系' },
    ],
    coreTitle: '三大核心模块',
    coreDesc: '融合最新科技与艺术创作，打造全方位数字艺术体验',
    learnMore: '了解详情',
    features: [
      { title: '数智虚拟展演平台', description: '国内首个元宇宙虚拟剧场，融合视讯通讯与动作捕捉技术', icon: Globe },
      { title: '线上专业版操作手册', description: '详细的平台使用指南，支持多种动作捕捉设备', icon: BookOpen },
      { title: '数字艺术设计课程', description: 'AIGC+元宇宙，戏剧、舞蹈、绘画、设计全方位课程', icon: Palette },
    ],
    courseTitle: '两大课程体系',
    courseDesc: '专业的数字艺术教育体系，培养未来创意人才',
    courses: [
      { title: 'AIGC数字艺术创作', description: '结合人工智能技术的数字艺术创作课程', duration: '12周', level: '初级-高级' },
      { title: '元宇宙虚拟展演', description: '虚拟现实技术在艺术展演中的应用', duration: '16周', level: '中级-高级' },
    ],
    achievementsTitle: '获奖成果',
    achievementsDesc: '在数字艺术和科技创新领域获得的广泛认可',
    achievements: [
      { text: '2025 AI元宇宙1000优秀产品（四星级）', year: '2025' },
      { text: '2025中国元宇宙星级供应商（四星级）', year: '2025' },
      { text: '2024 AI元宇宙1000优秀产品（三星级）', year: '2024' },
      { text: '2025廣州科技創新創業大賽港澳台賽優勝獎', year: '2025' },
      { text: '2024中国教育学会课题立项', year: '2024' },
      { text: '2023中國國際大學生雙創賽銀獎', year: '2023' },
      { text: '2023理創大賽銀獎（索尼/理光）', year: '2023' },
      { text: '2023入選Unity黑馬計劃', year: '2023' },
      { text: '2022TCDIG全球數字科技創意設計大賽銀獎', year: '2022' },
    ],
    partnersTitle: '合作机构',
    partnersDesc: '与知名院校和机构建立战略合作关系',
    locations: [
      '澳门青年创业孵化中心',
      '聚能湾国家级科技企业孵化中心（上海）',
      '北京师范大学未来设计美术馆（珠海）',
      '澳门科技大学人文艺术学院',
      '香港科技大学霍英东研究院',
      '中关村AI北纬社区',
    ],
    ctaTitle: '开启您的数字艺术之旅',
    ctaDesc: '加入明日剧场，探索 AIGC 与元宇宙的无限可能',
    ctaUpgradeTitle: '2026 全新升级：',
    ctaUpgradeItems: ['全新 AI 知识库学习系统', '全新舞蹈数据库系统', '全新 AI 编舞系统'],
    tryNow: '新版本预约',
    contactConsult: '联系咨询',
    watchOnYoutube: '在 YouTube 观看',
    demoLabel: 'DEMO — 示范演示',
    modulesLabel: 'MODULES — 核心模块',
    coursesLabel: 'COURSES — 课程体系',
    awardsLabel: 'AWARDS — 获奖成果',
    partnersLabel: 'PARTNERS — 合作机构',
    ctaLabel: 'GET STARTED',
  },
  'zh-TW': {
    badge: '國內首個元宇宙虛擬劇場',
    title: 'THEATER OF\nTOMORROW',
    chTitle: '明日劇場',
    subtitle: 'AIGC + 元宇宙 · 戲劇 · 舞蹈 · 繪畫 · 設計',
    subtitleDesc: '將元宇宙虛擬劇場概念具象化的沉浸式藝術展演空間',
    heroUpgradeTitle: '2026 全新升級：',
    heroUpgradeItems: ['全新 AI 知識庫學習系統', '全新舞蹈資料庫系統', '全新 AI 編舞系統'],
    tryPlatform: '新版本預約',
    downloadAndroid: '下載行動版（安卓）',
    stats: [
      { value: '9+', label: '國際獎項' },
      { value: '6+', label: '合作機構' },
      { value: '2', label: '課程體系' },
    ],
    coreTitle: '三大核心模組',
    coreDesc: '融合最新科技與藝術創作，打造全方位數字藝術體驗',
    learnMore: '了解詳情',
    features: [
      { title: '數智虛擬展演平台', description: '國內首個元宇宙虛擬劇場，融合視訊通訊與動作捕捉技術', icon: Globe },
      { title: '線上專業版操作手冊', description: '詳細的平台使用指南，支持多種動作捕捉設備', icon: BookOpen },
      { title: '數字藝術設計課程', description: 'AIGC+元宇宙，戲劇、舞蹈、繪畫、設計全方位課程', icon: Palette },
    ],
    courseTitle: '兩大課程體系',
    courseDesc: '專業的數字藝術教育體系，培養未來創意人才',
    courses: [
      { title: 'AIGC數字藝術創作', description: '結合人工智能技術的數字藝術創作課程', duration: '12週', level: '初級-高級' },
      { title: '元宇宙虛擬展演', description: '虛擬現實技術在藝術展演中的應用', duration: '16週', level: '中級-高級' },
    ],
    achievementsTitle: '獲獎成果',
    achievementsDesc: '在數字藝術和科技創新領域獲得的廣泛認可',
    achievements: [
      { text: '2025 AI元宇宙1000優秀產品（四星級）', year: '2025' },
      { text: '2025中國元宇宙星級供應商（四星級）', year: '2025' },
      { text: '2024 AI元宇宙1000優秀產品（三星級）', year: '2024' },
      { text: '2025廣州科技創新創業大賽港澳台賽優勝獎', year: '2025' },
      { text: '2024中國教育學會課題立項', year: '2024' },
      { text: '2023中國國際大學生雙創賽銀獎', year: '2023' },
      { text: '2023理創大賽銀獎（索尼/理光）', year: '2023' },
      { text: '2023入選Unity黑馬計劃', year: '2023' },
      { text: '2022TCDIG全球數字科技創意設計大賽銀獎', year: '2022' },
    ],
    partnersTitle: '合作機構',
    partnersDesc: '與知名院校和機構建立戰略合作關係',
    locations: [
      '澳門青年創業孵化中心',
      '聚能灣國家級科技企業孵化中心（上海）',
      '北京師範大學未來設計美術館（珠海）',
      '澳門科技大學人文藝術學院',
      '香港科技大學霍英東研究院',
      '中關村AI北緯社區',
    ],
    ctaTitle: '開啟您的數字藝術之旅',
    ctaDesc: '加入明日劇場，探索 AIGC 與元宇宙的無限可能',
    ctaUpgradeTitle: '2026 全新升級：',
    ctaUpgradeItems: ['全新 AI 知識庫學習系統', '全新舞蹈資料庫系統', '全新 AI 編舞系統'],
    tryNow: '新版本預約',
    contactConsult: '聯繫咨詢',
    watchOnYoutube: '在 YouTube 觀看',
    demoLabel: 'DEMO — 示範演示',
    modulesLabel: 'MODULES — 核心模組',
    coursesLabel: 'COURSES — 課程體系',
    awardsLabel: 'AWARDS — 獲獎成果',
    partnersLabel: 'PARTNERS — 合作機構',
    ctaLabel: 'GET STARTED',
  },
  en: {
    badge: "China's First Metaverse Virtual Theater",
    title: 'THEATER OF\nTOMORROW',
    chTitle: '明日剧场',
    subtitle: 'AIGC + Metaverse · Drama · Dance · Painting · Design',
    subtitleDesc: 'An immersive art performance space materializing the metaverse virtual theater concept',
    heroUpgradeTitle: '2026 New Upgrades:',
    heroUpgradeItems: ['New AI Knowledge Base Learning System', 'New Dance Database System', 'New AI Choreography System'],
    tryPlatform: 'Join Waitlist',
    downloadAndroid: 'Download (Android)',
    stats: [
      { value: '9+', label: 'International Awards' },
      { value: '6+', label: 'Partner Institutions' },
      { value: '2', label: 'Course Systems' },
    ],
    coreTitle: 'Three Core Modules',
    coreDesc: 'Integrating cutting-edge technology and artistic creation',
    learnMore: 'Learn More',
    features: [
      { title: 'Smart Virtual Performance Platform', description: "China's first metaverse virtual theater, integrating video communication and motion capture", icon: Globe },
      { title: 'Online Professional Manual', description: 'Detailed platform user guide supporting various motion capture devices', icon: BookOpen },
      { title: 'Digital Art Design Courses', description: 'AIGC+Metaverse comprehensive courses in drama, dance, painting, and design', icon: Palette },
    ],
    courseTitle: 'Two Course Systems',
    courseDesc: 'A professional digital art education system nurturing future creative talent',
    courses: [
      { title: 'AIGC Digital Art Creation', description: 'Digital art creation courses integrating AI technology', duration: '12 weeks', level: 'Beginner–Advanced' },
      { title: 'Metaverse Virtual Performance', description: 'Application of VR technology in art performance', duration: '16 weeks', level: 'Intermediate–Advanced' },
    ],
    achievementsTitle: 'Awards & Recognition',
    achievementsDesc: 'Widely recognized in digital art and technology innovation',
    achievements: [
      { text: '2025 AI Metaverse 1000 Outstanding Product (4-Star)', year: '2025' },
      { text: '2025 China Metaverse 4-Star Supplier', year: '2025' },
      { text: '2024 AI Metaverse 1000 Outstanding Product (3-Star)', year: '2024' },
      { text: '2025 Guangzhou Innovation Contest HK/Macao/Taiwan Winner', year: '2025' },
      { text: '2024 China Education Society Research Project', year: '2024' },
      { text: '2023 China International University Innovation Contest Silver', year: '2023' },
      { text: '2023 LiChuang Contest Silver Award (Sony/Ricoh)', year: '2023' },
      { text: '2023 Unity Black Horse Program Selection', year: '2023' },
      { text: '2022 TCDIG Global Digital Tech Creative Design Contest Silver', year: '2022' },
    ],
    partnersTitle: 'Partner Institutions',
    partnersDesc: 'Strategic partnerships with renowned universities and institutions',
    locations: [
      'Macao Youth Entrepreneurship Incubation Center',
      'Juneng Bay National Tech Enterprise Incubation Center (Shanghai)',
      'BNU Future Design Art Museum (Zhuhai)',
      'Macao University of Science and Technology, Faculty of Humanities and Arts',
      'HKUST Fok Ying Tung Research Institute',
      'Zhongguancun AI Latitude Community',
    ],
    ctaTitle: 'Start Your Digital Art Journey',
    ctaDesc: 'Join Theater of Tomorrow — explore the infinite possibilities of AIGC and Metaverse',
    ctaUpgradeTitle: '2026 New Upgrades:',
    ctaUpgradeItems: ['New AI Knowledge Base Learning System', 'New Dance Database System', 'New AI Choreography System'],
    tryNow: 'Join Waitlist',
    contactConsult: 'Contact Us',
    watchOnYoutube: 'Watch on YouTube',
    demoLabel: 'DEMO — SHOWCASE',
    modulesLabel: 'MODULES — CORE',
    coursesLabel: 'COURSES — CURRICULUM',
    awardsLabel: 'AWARDS — RECOGNITION',
    partnersLabel: 'PARTNERS — INSTITUTIONS',
    ctaLabel: 'GET STARTED',
  },
};

const featureLinks = ['/platform', '/manual', '/courses'];

/* ── Image Carousel ── */
const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  useEffect(() => { setCurrent(Math.floor(Math.random() * images.length)); }, [images.length]);
  useEffect(() => { const t = setInterval(next, 4500); return () => clearInterval(t); }, [images.length]);

  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '16/9',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-glow)',
      }}>
        <img
          src={images[current]}
          alt={`gallery ${current + 1}`}
          onClick={next}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'pointer', transition: 'opacity 0.5s' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 50%)' }} />
        <div style={{
          position: 'absolute', bottom: 12, right: 14,
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em',
          color: 'rgba(240,240,250,0.5)',
        }}>
          {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
      </div>
      <button onClick={prev} style={{
        position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
        width: 32, height: 32, borderRadius: 8,
        background: 'rgba(12,12,20,0.8)', border: '1px solid var(--border-strong)',
        color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'color 0.15s',
      }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
        <ChevronLeft size={16} />
      </button>
      <button onClick={next} style={{
        position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
        width: 32, height: 32, borderRadius: 8,
        background: 'rgba(12,12,20,0.8)', border: '1px solid var(--border-strong)',
        color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'color 0.15s',
      }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
        <ChevronRight size={16} />
      </button>
      <div style={{ display: 'flex', gap: 5, justifyContent: 'center', marginTop: 10 }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 18 : 5, height: 5,
            background: i === current ? 'var(--accent)' : 'var(--border-strong)',
            border: 'none', borderRadius: 9999, cursor: 'pointer', padding: 0, transition: 'all 0.3s',
          }} />
        ))}
      </div>
    </div>
  );
};

/* ── Section Label ── */
const SLabel = ({ children }) => (
  <span className="text-label" style={{ display: 'block', marginBottom: 12 }}>{children}</span>
);

const HomePage = () => {
  const { language } = useLanguage();
  const { open: openWaitlist } = useWaitlist();
  const c = pageContent[language] || pageContent['zh-CN'];
  const images = [img001tot, dancer1, dancer2, dancer4, dancer5, dancer7, dancer8, dancer9, tomorrowtheater01, tomorrowtheater02];

  return (
    <div style={{ backgroundColor: 'var(--bg-base)' }}>

      {/* ════ HERO ════ */}
      <section className="dot-grid-subtle" style={{ paddingTop: 120, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: 500, height: 500,
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '5%',
          width: 300, height: 300,
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          {/* Badge */}
          <div style={{ marginBottom: 28 }}>
            <span className="tag tag-accent" style={{ fontSize: 11 }}>
              <span className="shimmer" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 7, verticalAlign: 'middle' }} />
              {c.badge}
            </span>
          </div>

          {/* Hero title — Doto display font */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 9vw, 112px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            margin: '0 0 4px 0',
            whiteSpace: 'pre-line',
          }}>
            {c.title}
          </h1>
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'clamp(18px, 3vw, 28px)',
            fontWeight: 300,
            letterSpacing: '0.02em',
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 24,
          }}>
            {c.chTitle}
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 560, margin: '0 0 6px 0', lineHeight: 1.5 }}>
            {c.subtitle}
          </p>
          <p style={{ color: 'var(--text-muted-vis)', fontSize: 13, maxWidth: 480, margin: '0 0 16px 0' }}>
            {c.subtitleDesc}
          </p>

          {/* 2026 Upgrades */}
          <div style={{ margin: '0 0 36px 0', maxWidth: 480 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', marginBottom: 7, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {c.heroUpgradeTitle}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
              {c.heroUpgradeItems.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 72 }}>
            <button className="btn btn-primary" onClick={openWaitlist}>
              <Play size={14} /> {c.tryPlatform}
            </button>
            <button className="btn btn-secondary" onClick={() => window.open('https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/android/TOT_v1.3.0.apk', '_blank')}>
              <ArrowRight size={14} /> {c.downloadAndroid}
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
            {c.stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div style={{ width: 1, background: 'var(--border-strong)', margin: '0 36px', alignSelf: 'stretch' }} />}
                <div>
                  <div className="stat-value" style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </div>
                  <div className="text-label" style={{ marginTop: 6 }}>{stat.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════ DEMO VIDEO ════ */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <SLabel>{c.demoLabel}</SLabel>
            </div>
            <div style={{ maxWidth: 820 }}>
              <div style={{
                position: 'relative', paddingBottom: '56.25%',
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                border: '1px solid var(--border-accent)',
                boxShadow: 'var(--shadow-glow)',
              }}>
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1wjEvzNEjP&t=104&autoplay=0"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                />
              </div>
              <div style={{ marginTop: 14 }}>
                <a href="https://www.youtube.com/watch?v=zUbAK1tyvkc" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--accent)', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hi)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                >
                  <Film size={14} /> {c.watchOnYoutube} <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider" />

      {/* ════ CORE MODULES ════ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <SLabel>{c.modulesLabel}</SLabel>
              <h2 className="text-heading" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 10 }}>{c.coreTitle}</h2>
              <p className="text-body" style={{ fontSize: 14, maxWidth: 480 }}>{c.coreDesc}</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {c.features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="card accent-border-top" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 'var(--radius-md)',
                      background: 'var(--accent-lo)', border: '1px solid var(--border-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 20,
                    }}>
                      <Icon size={20} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div className="text-label" style={{ marginBottom: 10, color: 'var(--text-muted-vis)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-subheading" style={{ fontSize: 15, marginBottom: 10 }}>{feat.title}</h3>
                    <p className="text-body" style={{ fontSize: 13, flex: 1 }}>{feat.description}</p>
                    <Link
                      to={featureLinks[i]}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--accent)', textDecoration: 'none', fontSize: 13, fontWeight: 500, marginTop: 20 }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hi)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                    >
                      {c.learnMore} <ArrowRight size={13} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════ COURSES ════ */}
      <section className="section">
        <div className="container">
          <div className="course-grid">
            {/* Gallery */}
            <ScrollReveal>
              <ImageCarousel images={images} />
            </ScrollReveal>
            {/* Course list */}
            <ScrollReveal delay={0.1}>
              <SLabel>{c.coursesLabel}</SLabel>
              <h2 className="text-heading" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>{c.courseTitle}</h2>
              <p className="text-body" style={{ fontSize: 14, marginBottom: 32 }}>{c.courseDesc}</p>

              <div>
                {c.courses.map((course, i) => (
                  <div key={i} style={{
                    padding: '24px 0',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <div className="text-label" style={{ marginBottom: 8, color: 'var(--text-muted-vis)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-subheading" style={{ fontSize: 15, marginBottom: 6 }}>{course.title}</h3>
                    <p className="text-body" style={{ fontSize: 13, marginBottom: 14 }}>{course.description}</p>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span className="tag">{course.duration}</span>
                      <span className="tag">{course.level}</span>
                    </div>
                  </div>
                ))}
                <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                  <Link to="/courses"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--accent)', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hi)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                  >
                    {c.learnMore} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════ ACHIEVEMENTS ════ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <SLabel>{c.awardsLabel}</SLabel>
              <h2 className="text-heading" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>{c.achievementsTitle}</h2>
              <p className="text-body" style={{ fontSize: 14 }}>{c.achievementsDesc}</p>
            </div>
          </ScrollReveal>

          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {c.achievements.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderBottom: i < c.achievements.length - 1 ? '1px solid var(--border)' : 'none',
                  backgroundColor: 'var(--bg-card)',
                  transition: 'background-color 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{item.text}</p>
                  </div>
                  <span className="text-label" style={{ flexShrink: 0, marginLeft: 16 }}>{item.year}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════ PARTNERS ════ */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <SLabel>{c.partnersLabel}</SLabel>
              <h2 className="text-heading" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>{c.partnersTitle}</h2>
              <p className="text-body" style={{ fontSize: 14 }}>{c.partnersDesc}</p>
            </div>
          </ScrollReveal>

          <div className="grid-auto">
            {c.locations.map((loc, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="card" style={{
                  padding: '18px 20px',
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                }}>
                  <div style={{
                    width: 32, height: 32, flexShrink: 0, borderRadius: 'var(--radius-sm)',
                    background: 'var(--accent-lo)', border: '1px solid var(--border-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="text-label" style={{ color: 'var(--accent)', fontSize: 10 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{loc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════ CTA ════ */}
      <section className="dot-grid" style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <ScrollReveal>
            <div style={{ maxWidth: 580 }}>
              <SLabel style={{ color: 'var(--accent)' }}>{c.ctaLabel}</SLabel>
              <h2 className="text-heading" style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 16, marginTop: 8 }}>
                {c.ctaTitle}
              </h2>
              <p className="text-body" style={{ fontSize: 15, marginBottom: 20, maxWidth: 420 }}>{c.ctaDesc}</p>
              <div style={{ marginBottom: 32, maxWidth: 420 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', marginBottom: 8, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                  {c.ctaUpgradeTitle}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {c.ctaUpgradeItems.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-secondary)' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <button className="btn btn-primary" onClick={openWaitlist}>
                  <Sparkles size={15} /> {c.tryNow}
                </button>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-secondary">
                    <Cpu size={15} /> {c.contactConsult}
                  </button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
