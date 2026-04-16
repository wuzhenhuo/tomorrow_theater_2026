import React from 'react';
import {
  Globe, Users, Zap, Database, Camera, Brain,
  Award, MapPin, ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const pageContent = {
  'zh-CN': {
    heroTitle1: '「明日劇場」',
    heroTitle2: '数智虚拟展演平台',
    heroDesc: '由北京師範大學未來設計學院種子基金支持，視覺藝術家吳振擔任項目負責人。結合現代科技與劇場表演、身體動態、造型藝術與空間設計，構建起一個以人工智慧與數字表演為核心的創新平台。',
    introTitle: '项目简介',
    introP1: '你是否曾幻想，在虛擬空間中打造專屬替身，結交志同道合的朋友，並沉浸於充滿未來感的數字演藝創作世界中？「明日劇場」數智虛擬展演平台，正是為此而生。',
    introP2: '「明日劇場」結合現代科技與劇場表演、身體動態、造型藝術與空間設計，構建起一個以人工智慧與數字表演為核心，涵蓋人文藝術、互動體驗、網絡技術、圖形學、動作捕捉等八大模塊的創新平台。',
    introP3: '這是國內首個將元宇宙虛擬劇場概念具象化，並融合視訊通訊與動作捕捉技術的沉浸式藝術展演空間。',
    coreFeatures: '核心特色',
    coreF1: '八大模块创新平台', coreF2: '元宇宙虚拟剧场',
    coreF3: '动作捕捉技术', coreF4: '沉浸式艺术展演',
    innovTitle: '创新功能与应用场景',
    innovDesc: '作为一项开创性实验平台，「明日劇場」大幅拓宽了传统剧场的应用边界',
    features: [
      { title: '超越时空限制', description: '打破地理与时间的藩籬，艺术家可透过虚拟化身，在雲端合作创作并以数字资产形式永久保存。观众亦可透过VR、电脑或平板等设备「走进」剧场。' },
      { title: '多元社交与互动空间', description: '平台不仅是虚拟剧场，亦是虚拟博物馆与公共社交天地。用户可自定义虚拟形象，参与艺术作品展示、互动交流、表演与创作教学。' },
      { title: '异地教育与实践', description: '学生与表演爱好者可通过交互设备与虚拟老师进行即时学习与实作，并进入逼真的虚拟舞台环境。' },
      { title: '数字资产与保存', description: '创作者的虚拟内容可永久存储为可持续加工的数字资产，观众则能获得深度沉浸式体验。' },
      { title: '文化传承与数位展演', description: '平台兼具虚拟剧场与数位博物馆功能。已成功将非遗文化热巴舞的传承者索朗亚次的舞蹈数据收录其中。' },
    ],
    modulesTitle: '模组化架构与技术特色',
    modulesDesc: '「明日劇場」将整体场景设于漂浮于外太空的虚拟宇宙中，各式剧场星球灵感来自中国国家大剧院、苏州园林、水上剧场与莎士比亚环球剧院',
    modules: [
      { title: '数位美术馆', description: '观众可以上传自己的绘画、装置作品，举办数字个展' },
      { title: '数位剧场', description: '提供多种风格舞台，如黑匣子实验剧场、鏡框式舞台、古典戏台等' },
      { title: '视讯会议系统', description: '支援远距团队协作与即时研讨' },
      { title: '动作数据库', description: '收录表演动作资料供分析与应用', links: ['https://www.dancelab.cn/#/index', 'https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/dancelab/0.5/index.html'] },
      { title: '运动捕捉模块', description: '兼容各型光学、红外与慣性动捕系统，实现高度还原的角色演绎' },
      { title: '人工智慧模组', description: '结合AIGC驱动的数字人，担任讲解员，教师，演员，推动智能演艺发展' },
    ],
    versions: ['专业版 Pro', '工作室版 Studio', '基础版 Base'],
    versionTitle: '版本支持',
    versionDesc: '「明日劇場」基于不同的硬件需求分为三个版本，分别使用Unreal、Unity开发',
    academicTitle: '学术成果',
    academicDesc: '平台在学术研究和产业应用方面取得了丰硕成果',
    papersTitle: '研究论文', awardsTitle: '获奖情况', locationsTitle: '落地应用',
    viewPaper: '查看论文',
    contactTitle: '联系我们',
    contactDesc: '了解更多关于明日剧场平台的信息，或洽谈合作事宜',
    company: '公司', phone: '电话', email: '邮箱',
    companyName: '明日剧场团队',
    achievements: [
      '2025AI元宇宙1000优秀产品目录与示范案例（四星级）',
      '2025中国元宇宙星级供应商（四星级）',
      '2024AI元宇宙1000优秀产品目录与示范案例（三星级）',
      '2025廣州科技創新創業大賽港澳台賽優勝獎',
      '2024中国教育学会课题立项',
      '2023中國國際大學生雙創賽銀獎',
      '2023理創大賽銀獎（索尼/理光）',
      '2023入選Unity黑馬計劃',
      '2022TCDIG全球數字科技創意設計大賽銀獎',
    ],
    locations: [
      '澳门青年创业孵化中心（澳门）', '聚能湾国家级科技企业孵化中心（上海）',
      '北京师范大学未来设计美术馆（珠海）', '798深澜AI中心（北京）',
      '香港科技大学霍英东研究院（广州）', '中关村AI北纬社区（北京）',
    ],
    papers: [
      { title: 'Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology', author: 'Wu, Z. (2023)', publisher: 'Singapore, Springer Nature Singapore', link: 'https://doi.org/10.1007/978-981-99-8248-6_41' },
      { title: '人工智能赋能交互电影数字角色的创作实践研究', author: '吴振', publisher: '现代电影技术，No.5/2025，46-52', link: 'https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT' },
      { title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging", author: '2024 ISEDEAISD (Ei Compendex)', publisher: '2024ISEDEAISD', link: null },
    ],
  },
  'zh-TW': {
    heroTitle1: '「明日劇場」',
    heroTitle2: '數智虛擬展演平台',
    heroDesc: '由北京師範大學未來設計學院種子基金支持，視覺藝術家吳振擔任項目負責人。結合現代科技與劇場表演、身體動態、造型藝術與空間設計，構建起一個以人工智慧與數字表演為核心的創新平台。',
    introTitle: '項目簡介',
    introP1: '你是否曾幻想，在虛擬空間中打造專屬替身，結交志同道合的朋友，並沉浸於充滿未來感的數字演藝創作世界中？「明日劇場」數智虛擬展演平台，正是為此而生。',
    introP2: '「明日劇場」結合現代科技與劇場表演、身體動態、造型藝術與空間設計，構建起一個以人工智慧與數字表演為核心的創新平台。',
    introP3: '這是國內首個將元宇宙虛擬劇場概念具象化，並融合視訊通訊與動作捕捉技術的沉浸式藝術展演空間。',
    coreFeatures: '核心特色',
    coreF1: '八大模塊創新平台', coreF2: '元宇宙虛擬劇場',
    coreF3: '動作捕捉技術', coreF4: '沉浸式藝術展演',
    innovTitle: '創新功能與應用場景',
    innovDesc: '作為一項開創性實驗平台，「明日劇場」大幅拓寬了傳統劇場的應用邊界',
    features: [
      { title: '超越時空限制', description: '打破地理與時間的藩籬，藝術家可透過虛擬化身，在雲端合作創作並以數字資產形式永久保存。' },
      { title: '多元社交與互動空間', description: '平台不僅是虛擬劇場，亦是虛擬博物館與公共社交天地。用戶可自定義虛擬形象，參與藝術作品展示、互動交流。' },
      { title: '異地教育與實踐', description: '學生與表演愛好者可通過交互設備與虛擬老師進行即時學習與實作，並進入逼真的虛擬舞台環境。' },
      { title: '數字資產與保存', description: '創作者的虛擬內容可永久存儲為可持續加工的數字資產，觀眾則能獲得深度沉浸式體驗。' },
      { title: '文化傳承與數位展演', description: '平台兼具虛擬劇場與數位博物館功能。已成功將非遺文化熱巴舞的傳承者索朗亞次的舞蹈數據收錄其中。' },
    ],
    modulesTitle: '模組化架構與技術特色',
    modulesDesc: '「明日劇場」將整體場景設於漂浮於外太空的虛擬宇宙中，各式劇場星球靈感來自中國國家大劇院、蘇州園林、水上劇場與莎士比亞環球劇院',
    modules: [
      { title: '數位美術館', description: '觀眾可以上傳自己的繪畫、裝置作品，舉辦數字個展' },
      { title: '數位劇場', description: '提供多種風格舞台，如黑匣子實驗劇場、鏡框式舞台、古典戲台等' },
      { title: '視訊會議系統', description: '支援遠距團隊協作與即時研討' },
      { title: '動作數據庫', description: '收錄表演動作資料供分析與應用', links: ['https://www.dancelab.cn/#/index', 'https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/dancelab/0.5/index.html'] },
      { title: '運動捕捉模塊', description: '兼容各型光學、紅外與慣性動捕系統，實現高度還原的角色演繹' },
      { title: '人工智慧模組', description: '結合AIGC驅動的數字人，擔任講解員，教師，演員，推動智能演藝發展' },
    ],
    versions: ['專業版 Pro', '工作室版 Studio', '基礎版 Base'],
    versionTitle: '版本支持',
    versionDesc: '「明日劇場」基於不同的硬件需求分為三個版本，分別使用Unreal、Unity開發',
    academicTitle: '學術成果', academicDesc: '平台在學術研究和產業應用方面取得了豐碩成果',
    papersTitle: '研究論文', awardsTitle: '獲獎情況', locationsTitle: '落地應用',
    viewPaper: '查看論文',
    contactTitle: '聯繫我們', contactDesc: '了解更多關於明日劇場平台的信息，或洽談合作事宜',
    company: '公司', phone: '電話', email: '郵箱',
    companyName: '澳門未來視野科技有限公司',
    achievements: [
      '2025AI元宇宙1000優秀產品目錄與示範案例（四星級）',
      '2025中國元宇宙星級供應商（四星級）',
      '2024AI元宇宙1000優秀產品目錄與示範案例（三星級）',
      '2025廣州科技創新創業大賽港澳台賽優勝獎',
      '2024中國教育學會課題立項',
      '2023中國國際大學生雙創賽銀獎',
      '2023理創大賽銀獎（索尼/理光）',
      '2023入選Unity黑馬計劃',
      '2022TCDIG全球數字科技創意設計大賽銀獎',
    ],
    locations: [
      '澳門青年創業孵化中心（澳門）', '聚能灣國家級科技企業孵化中心（上海）',
      '北京師範大學未來設計美術館（珠海）', '798深瀾AI中心（北京）',
      '香港科技大學霍英東研究院（廣州）', '中關村AI北緯社區（北京）',
    ],
    papers: [
      { title: 'Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology', author: 'Wu, Z. (2023)', publisher: 'Singapore, Springer Nature Singapore', link: 'https://doi.org/10.1007/978-981-99-8248-6_41' },
      { title: '人工智能賦能交互電影數字角色的創作實踐研究', author: '吳振', publisher: '現代電影技術，No.5/2025，46-52', link: 'https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT' },
      { title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars", author: '2024 ISEDEAISD (Ei Compendex)', publisher: '2024ISEDEAISD', link: null },
    ],
  },
  en: {
    heroTitle1: '"Theater of Tomorrow"',
    heroTitle2: 'Digital-Intelligent Virtual Exhibition & Performance Platform',
    heroDesc: 'Supported by the BNU Future Design School Seed Fund, with visual artist Wu Zhen as project lead. Combining modern technology with theatrical performance, body dynamics, visual arts, and spatial design.',
    introTitle: 'Project Introduction',
    introP1: 'Have you ever imagined building your own avatar in a virtual space, making like-minded friends, and immersing yourself in a futuristic world of digital performing arts?',
    introP2: '"Theater of Tomorrow" combines modern technology with theatrical performance, body dynamics, visual arts, and spatial design, building an innovative platform centered on AI and digital performance.',
    introP3: "This is the first domestic immersive art exhibition and performance space to materialize the metaverse virtual theater concept while integrating video communication and motion capture technology.",
    coreFeatures: 'Core Features',
    coreF1: 'Eight-Module Innovation Platform', coreF2: 'Metaverse Virtual Theater',
    coreF3: 'Motion Capture Technology', coreF4: 'Immersive Art Performance',
    innovTitle: 'Innovative Features & Application Scenarios',
    innovDesc: 'As a pioneering experimental platform, "Theater of Tomorrow" greatly expands the application boundaries of traditional theater',
    features: [
      { title: 'Beyond Space and Time', description: 'Breaking geographical and temporal barriers, artists can collaborate in the cloud through virtual avatars and permanently preserve their work as digital assets.' },
      { title: 'Diverse Social & Interactive Space', description: 'The platform is not only a virtual theater, but also a virtual museum and public social space with customizable avatars.' },
      { title: 'Remote Education & Practice', description: 'Students can engage in real-time learning with virtual teachers, entering realistic virtual stage environments.' },
      { title: 'Digital Assets & Preservation', description: "Creators' virtual content can be permanently stored as digital assets while audiences experience deep immersive performances." },
      { title: 'Cultural Heritage & Digital Performance', description: 'The platform serves as both a virtual theater and digital museum, housing rare intangible cultural heritage dance data.' },
    ],
    modulesTitle: 'Modular Architecture & Technical Features',
    modulesDesc: '"Theater of Tomorrow" sets the overall scene in a virtual universe floating in outer space, with theater planets inspired by major world theaters',
    modules: [
      { title: 'Digital Art Gallery', description: 'Upload paintings and installation works to hold digital solo exhibitions' },
      { title: 'Digital Theater', description: 'Various stage styles: black box, proscenium, classical opera stages' },
      { title: 'Video Conferencing System', description: 'Supports remote team collaboration and real-time seminars' },
      { title: 'Motion Database', description: 'Records performance motion data for analysis and application', links: ['https://www.dancelab.cn/#/index', 'https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/dancelab/0.5/index.html'] },
      { title: 'Motion Capture Module', description: 'Compatible with optical, infrared, and inertial motion capture systems' },
      { title: 'AI Module', description: 'AIGC-driven digital humans serving as docents, teachers, and performers' },
    ],
    versions: ['Pro', 'Studio', 'Base'],
    versionTitle: 'Version Support',
    versionDesc: '"Theater of Tomorrow" is available in three versions based on hardware requirements, developed using Unreal and Unity',
    academicTitle: 'Academic Achievements', academicDesc: 'Rich results in academic research and industrial applications',
    papersTitle: 'Research Papers', awardsTitle: 'Awards & Honors', locationsTitle: 'Real-World Applications',
    viewPaper: 'View Paper',
    contactTitle: 'Contact Us', contactDesc: 'Learn more about the Theater of Tomorrow platform, or discuss cooperation',
    company: 'Company', phone: 'Phone', email: 'Email',
    companyName: 'Future Vision Technology (Macao) Co., Ltd.',
    achievements: [
      '2025 AI Metaverse 1000 Outstanding Product (4-Star)',
      '2025 China Metaverse Star Supplier (4-Star)',
      '2024 AI Metaverse 1000 Outstanding Product (3-Star)',
      '2025 Guangzhou Innovation Contest HK/Macao/Taiwan Winner',
      '2024 China Education Society Research Project Approval',
      '2023 China International University Innovation Contest Silver',
      '2023 LiChuang Contest Silver Award (Sony/Ricoh)',
      '2023 Unity Black Horse Program Selection',
      '2022 TCDIG Global Digital Tech Creative Design Contest Silver',
    ],
    locations: [
      'Macao Youth Entrepreneurship Incubation Center', 'Juneng Bay National Tech Enterprise Incubation Center (Shanghai)',
      'BNU Future Design Art Museum (Zhuhai)', '798 Shenlan AI Center (Beijing)',
      'HKUST Fok Ying Tung Research Institute (Guangzhou)', 'Zhongguancun AI Latitude Community (Beijing)',
    ],
    papers: [
      { title: 'Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology', author: 'Wu, Z. (2023)', publisher: 'Singapore, Springer Nature Singapore', link: 'https://doi.org/10.1007/978-981-99-8248-6_41' },
      { title: 'Research on AI-Enabled Interactive Film Digital Character Creation Practice', author: 'Wu Zhen', publisher: 'Modern Film Technology, No.5/2025, 46-52', link: 'https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT' },
      { title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging", author: '2024 ISEDEAISD (Ei Compendex)', publisher: '2024ISEDEAISD', link: null },
    ],
  },
};

const featureIcons = [Globe, Users, Zap, Database, Camera];

const SLabel = ({ children }) => (
  <span className="text-label" style={{ display: 'block', marginBottom: 12 }}>{children}</span>
);

const PlatformPage = () => {
  const { language } = useLanguage();
  const c = pageContent[language] || pageContent['zh-CN'];

  return (
    <div style={{ backgroundColor: 'var(--bg-base)', paddingTop: 60 }}>

      {/* ── Hero ── */}
      <section className="dot-grid-subtle section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '20%', right: '5%',
          width: 400, height: 400,
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container">
          <SLabel>PLATFORM — 展演平台</SLabel>
          <h1 className="text-heading" style={{ fontSize: 'clamp(28px, 5vw, 52px)', marginBottom: 8 }}>
            <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {c.heroTitle1}
            </span>
          </h1>
          <h2 className="text-heading" style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: 24 }}>
            {c.heroTitle2}
          </h2>
          <p className="text-body" style={{ fontSize: 15, maxWidth: 680, lineHeight: 1.7 }}>{c.heroDesc}</p>
        </div>
      </section>

      <div className="divider" />

      {/* ── Intro ── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="course-grid">
            <ScrollReveal>
              <SLabel>INTRO — 项目简介</SLabel>
              <h2 className="text-heading" style={{ fontSize: 24, marginBottom: 20 }}>{c.introTitle}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[c.introP1, c.introP2, c.introP3].map((p, i) => (
                  <p key={i} className="text-body" style={{ fontSize: 14, lineHeight: 1.8 }}>{p}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card" style={{ padding: 28 }}>
                <SLabel>{c.coreFeatures}</SLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[
                    { icon: Brain, label: c.coreF1 },
                    { icon: Globe, label: c.coreF2 },
                    { icon: Camera, label: c.coreF3 },
                    { icon: Users, label: c.coreF4 },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '14px 0',
                        borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                      }}>
                        <div style={{
                          width: 34, height: 34, flexShrink: 0,
                          background: 'var(--accent-lo)', border: '1px solid var(--border-accent)',
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Icon size={16} style={{ color: 'var(--accent)' }} />
                        </div>
                        <span style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Innovation Features ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <SLabel>FEATURES — 创新功能</SLabel>
              <h2 className="text-heading" style={{ fontSize: 28, marginBottom: 8 }}>{c.innovTitle}</h2>
              <p className="text-body" style={{ fontSize: 14, maxWidth: 540 }}>{c.innovDesc}</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {c.features.map((feat, i) => {
              const Icon = featureIcons[i] || Globe;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="card accent-border-top" style={{ padding: 28, height: '100%' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 'var(--radius-sm)',
                      background: 'var(--accent-lo)', border: '1px solid var(--border-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
                    }}>
                      <Icon size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="text-subheading" style={{ fontSize: 15, marginBottom: 10 }}>{feat.title}</h3>
                    <p className="text-body" style={{ fontSize: 13 }}>{feat.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Modules ── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <SLabel>ARCHITECTURE — 模组架构</SLabel>
              <h2 className="text-heading" style={{ fontSize: 28, marginBottom: 8 }}>{c.modulesTitle}</h2>
              <p className="text-body" style={{ fontSize: 14, maxWidth: 620 }}>{c.modulesDesc}</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {c.modules.map((mod, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="card" style={{ padding: 24, height: '100%' }}>
                  <div className="text-label" style={{ marginBottom: 10, color: 'var(--text-muted-vis)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-subheading" style={{ fontSize: 14, marginBottom: 8 }}>{mod.title}</h3>
                  <p className="text-body" style={{ fontSize: 13 }}>{mod.description}</p>
                  {mod.links && (
                    <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {mod.links.map((url, li) => (
                        <a key={li} href={url} target="_blank" rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--cyan)', textDecoration: 'none', fontSize: 12, wordBreak: 'break-all' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                          <ExternalLink size={11} /> {url.length > 40 ? url.substring(0, 40) + '…' : url}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <SLabel style={{ textAlign: 'center', display: 'block', marginBottom: 8 }}>{c.versionTitle}</SLabel>
              <p className="text-body" style={{ fontSize: 14, marginBottom: 24, maxWidth: 480, margin: '0 auto 24px' }}>{c.versionDesc}</p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                {c.versions.map((v, i) => (
                  <span key={i} className={i === 0 ? 'tag tag-accent' : i === 1 ? 'tag tag-cyan' : 'tag'}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Academic ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <SLabel>RESEARCH — 学术成果</SLabel>
              <h2 className="text-heading" style={{ fontSize: 28, marginBottom: 8 }}>{c.academicTitle}</h2>
              <p className="text-body" style={{ fontSize: 14 }}>{c.academicDesc}</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="course-grid">
            {/* Papers */}
            <div>
              <SLabel>{c.papersTitle}</SLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {c.papers.map((p, i) => (
                  <div key={i} className="card" style={{ padding: 22 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.5 }}>{p.title}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4 }}>{p.author}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted-vis)', marginBottom: p.link ? 12 : 0 }}>{p.publisher}</p>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--accent)', textDecoration: 'none', fontSize: 12, fontWeight: 500 }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hi)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                      >
                        {c.viewPaper} <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Awards + Locations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div>
                <SLabel>{c.awardsTitle}</SLabel>
                <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  {c.achievements.map((a, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px',
                      borderBottom: i < c.achievements.length - 1 ? '1px solid var(--border)' : 'none',
                      backgroundColor: 'var(--bg-card)',
                      transition: 'background 0.15s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                    >
                      <Award size={13} style={{ color: 'var(--warning)', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SLabel>{c.locationsTitle}</SLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {c.locations.map((loc, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
                      borderBottom: '1px solid var(--border)',
                    }}>
                      <MapPin size={13} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Contact ── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <SLabel>CONTACT — 联系方式</SLabel>
          <h2 className="text-heading" style={{ fontSize: 28, marginBottom: 12 }}>{c.contactTitle}</h2>
          <p className="text-body" style={{ fontSize: 15, marginBottom: 40 }}>{c.contactDesc}</p>
          <div className="card" style={{ padding: 36 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {[
                { label: c.company, value: c.companyName },
                { label: c.phone, value: '(853) 66810358' },
                { label: c.email, value: 'tot@alexzhenwu.com' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="text-label" style={{ marginBottom: 8 }}>{item.label}</div>
                  <p style={{ fontSize: 13, color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;
