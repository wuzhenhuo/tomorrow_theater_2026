import React from 'react';
import { useContactInquiry } from '../context/ContactInquiryContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  BookOpen,
  ExternalLink,
  MapPin,
  Users,
  Trophy,
  Star,
  FileText,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pageContent = {
  'zh-CN': {
    heroTitle1: '学术成果',
    heroTitle2: '研究论文 · 获奖荣誉 · 落地应用',
    heroDesc: '明日剧场项目在学术研究、技术创新和产业应用方面取得了丰硕成果',
    heroSubDesc: '推动数字艺术教育发展，促进传统文化创新传承',
    papersTitle: '研究论文',
    papersDesc: '在国际会议和权威期刊发表多篇学术论文，推动数字艺术领域理论发展',
    awardsTitle: '获奖荣誉',
    awardsDesc: '凭借技术创新和艺术表现力，获得多项重要奖项和行业认可',
    applicationsTitle: '落地应用',
    applicationsDesc: '在多个重要机构和城市成功落地，推动数字艺术教育和文化创新发展',
    impactTitle: '项目影响力',
    impactDesc: '通过数据展示明日剧场项目在技术创新、教育应用和文化传承方面的成果',
    futureTitle: '未来发展方向',
    futureDesc: '持续创新发展，推动数字艺术教育和文化传承事业向更高水平迈进',
    collaborationTitle: '学术合作与交流',
    collaborationDesc: '欢迎学术机构、研究人员和教育工作者与我们开展合作交流',
    contactBtn: '联系我们开展合作',
    viewPaper: '查看论文',
    academic: '学术交流',
    academicDesc: '参与学术会议、研讨会和论文发表',
    education: '教育合作',
    educationDesc: '共同开发课程、培训师资和学生交流',
    techInnovation: '技术创新',
    techInnovationDesc: '联合研发新技术、申请专利和成果转化',
    papers: [
      {
        title: 'Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology',
        author: 'Wu, Z. (2023)',
        publisher: 'Singapore, Springer Nature Singapore',
        type: '国际会议论文',
        link: 'https://doi.org/10.1007/978-981-99-8248-6_41',
        description: '探讨数字游戏技术在虚拟展览和表演艺术平台中的应用，提出了明日剧场的技术架构和创新理念。',
        keywords: ['虚拟现实', '数字表演', '游戏技术', '元宇宙'],
      },
      {
        title: '人工智能赋能交互电影数字角色的创作实践研究',
        author: '吴振',
        publisher: '现代电影技术，No.5/2025，46-52',
        type: '期刊论文',
        link: 'https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT',
        description: '研究人工智能技术在交互电影数字角色创作中的应用，探索AI驱动的数字人在影视制作中的实践价值。',
        keywords: ['人工智能', '数字角色', '交互电影', 'AIGC'],
      },
      {
        title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging",
        author: '2024 International Symposium on Ecological Design Engineering, Artificial Intelligence, and Sustainable Development',
        publisher: '2024ISEDEAISD (Ei Compendex)',
        type: '国际会议论文',
        description: '研究沉浸式智能虚拟环境和数字化身在增强学生归属感方面的作用，为数字教育提供理论支撑。',
        keywords: ['虚拟环境', '数字化身', '教育技术', '归属感'],
      },
      {
        title: '基于运动捕捉和虚拟现实技术的非物质文化遗产舞蹈的保护与开发研究——以藏族舞蹈为例',
        author: '吴振',
        publisher: '舞蹈，No.04/2023，90-96',
        type: '期刊论文',
        link: 'https://kns.cnki.net/kcms2/article/abstract?v=L9QYEmxDei0y1aAKD0Nwc5MIeBBxvVto1Cx-SNo0933uhSQAJAHnVw4J0Th2QUuv_UVzQ7tvhTpZx_k3mTbYlwMcH4pz3W2dZcCVExQ2SKI6yypH1dg90V2enmj8mBUXIS0K9vW7WoLWS0GYVJbUzWk7xzeaxnfMXEx7AZOSkDg=&uniplatform=NZKPT',
        description: '研究利用运动捕捉和虚拟现实技术对非物质文化遗产舞蹈进行保护与开发，以藏族舞蹈为典型案例。',
        keywords: ['运动捕捉', '虚拟现实', '非物质文化遗产', '藏族舞蹈'],
      },
    ],
    awards: [
      { title: 'AI元宇宙1000优秀产品目录与示范案例', year: '2025', organization: 'AI元宇宙1000评选委员会', description: '获得四星级认证，入选优秀产品目录与示范案例', level: '国家级' },
      { title: '中国元宇宙星级供应商', year: '2025', organization: '中国元宇宙产业联盟', description: '获得四星级供应商认证', level: '国家级' },
      { title: 'AI元宇宙1000优秀产品目录与示范案例', year: '2024', organization: 'AI元宇宙1000评选委员会', description: '获得三星级认证，入选优秀产品目录与示范案例', level: '国家级' },
      { title: '中国元宇宙星级供应商', year: '2024', organization: '中国元宇宙产业联盟', description: '获得三星级供应商认证', level: '国家级' },
      { title: '廣州科技創新創業大賽港澳台賽優勝獎', year: '2025', organization: '香港科技大學百萬獎金創業大賽', description: '在广州赛中获得优胜奖', level: '区域级' },
      { title: '中国教育学会课题立项', year: '2024', organization: '中国教育学会', description: '《沉浸交互式技术支持下的艺术融合教学模式的构建》课题', level: '国家级' },
      { title: '深圳前海粤港澳台青年创新创业大赛推送獎', year: '2024', organization: '深圳前海粤港澳台青年创新创业大赛组委会', description: '获得推送奖', level: '区域级' },
      { title: '澳門科技周参展', year: '2024', organization: '澳門科技周组委会', description: '项目参展展示', level: '区域级' },
      { title: '上海進博會参展', year: '2024', organization: '中国国际进口博览会', description: '项目参展展示', level: '国家级' },
      { title: '江門科創大賽入围', year: '2024', organization: '江門科創大賽组委会', description: '入围江門科創大賽', level: '区域级' },
      { title: '中國國際大學生雙創賽銀獎', year: '2023', organization: '中国国际大学生创新创业大赛组委会', description: '获得银奖', level: '国家级' },
      { title: '理創大賽銀獎', year: '2023', organization: '理创大赛组委会（索尼/理光）', description: '获得银奖', level: '行业级' },
      { title: 'Unity黑馬計劃入选', year: '2023', organization: 'Unity Technologies', description: '项目被Unity官方认可，入选黑马计划', level: '行业级' },
      { title: 'TCDIG全球數字科技創意設計大賽銀獎', year: '2022', organization: 'TCDIG全球数字科技创意设计大赛组委会', description: '获得银奖', level: '国际级' },
    ],
    applications: [
      { location: '澳门青年创业孵化中心', region: '澳门', status: '运营中', description: '作为项目发源地，为澳门青年创业者提供数字艺术创作平台', features: ['创业孵化', '艺术创作', '技术培训'] },
      { location: '聚能湾国家级科技企业孵化中心', region: '上海', status: '运营中', description: '在上海设立技术研发中心，推动平台技术升级和产业化应用', features: ['技术研发', '产业孵化', '人才培养'] },
      { location: '北京师范大学未来设计美术馆', region: '珠海', status: '合作中', description: '与高等院校合作，开展数字艺术教育和学术研究', features: ['学术研究', '教育实践', '展览展示'] },
      { location: '798深澜AI中心', region: '北京', status: '合作中', description: '在北京艺术区设立展示中心，推广数字艺术创作理念', features: ['艺术展示', '技术交流', '文化推广'] },
      { location: '香港科技大学霍英东研究院', region: '广州', status: '合作中', description: '与香港科技大学合作，推动科技创新与人才培养', features: ['科研合作', '技术转化', '人才交流'] },
      { location: '中关村AI北纬社区', region: '北京', status: '合作中', description: '在中关村AI核心区域设立合作基地，推动人工智能技术应用', features: ['AI技术', '产业对接', '创新孵化'] },
    ],
    impacts: [
      { title: '技术创新', value: '8+', description: '核心技术模块', details: '人文艺术、互动体验、网络技术、图形学、动作捕捉、人工智能、数字资产、虚拟现实' },
      { title: '教育应用', value: '100+', description: '受益学生数量', details: '通过课程体系和平台应用，已有超过100名学生受益于数字艺术教育' },
      { title: '文化传承', value: '5+', description: '非遗文化项目', details: '已收录热巴舞等多项非物质文化遗产，推动传统文化数字化传承' },
      { title: '国际影响', value: '3+', description: '国际合作项目', details: '与多个国际机构建立合作关系，推广中国数字艺术创新成果' },
    ],
    futureDirections: [
      { title: '技术升级', description: '持续优化动作捕捉精度，增强AI数字人表现力，提升虚拟现实体验质量' },
      { title: '教育拓展', description: '扩大课程覆盖范围，开发更多适合不同年龄段的数字艺术教育内容' },
      { title: '文化传承', description: '收录更多中华优秀传统文化内容，推动文化创新性发展' },
      { title: '国际推广', description: '加强国际交流合作，将中国数字艺术创新成果推向世界舞台' },
    ],
    copyrightTitle: '软件著作权',
    copyrightDesc: '已获得多项软件著作权登记，保护核心技术创新成果',
    copyrightRegNo: '登记号',
    copyrightCertNo: '证书号',
    copyrights: [
      { name: 'DanceGen-数字舞蹈动作生成软件', shortName: 'DanceGen', version: 'V1.0', regNo: '2024SR0717737' },
      { name: '「明日剧场」舞蹈智能学习助手软件', shortName: '「明日剧场」学习助手', version: 'V1.0', regNo: '2024SR1996575', certNo: '软著登字第14400448号' },
      { name: '明日剧场—Kinect表演交互系统', shortName: 'TOT(Base)', version: 'V1.0', regNo: '2022SR0537060', certNo: '软著登字第9491259号' },
      { name: '明日剧场—虚拟线上交互展演系统', shortName: 'TOT', version: 'V1.0', regNo: '2021SR1456845', certNo: '软著登字第8179471号' },
      { name: '明日剧场专业版—线上交互展演系统', shortName: 'TOT(Pro)', version: 'V3.0', regNo: '2022SR1036628', certNo: '软著登字第9990827号' },
      { name: 'DanceLab(Online Version)-舞蹈动作信息管理系统', shortName: 'DanceLab', version: 'V1.0', regNo: '2023SR0604211', certNo: '软著登字第11191382号' },
      { name: '舞蹈数字动作库及分析系统', shortName: 'DanceLab', version: 'V1.0', regNo: '2021SR1619706', certNo: '软著登字第8342332号' },
    ],
  },
  'zh-TW': {
    heroTitle1: '學術成果',
    heroTitle2: '研究論文 · 獲獎榮譽 · 落地應用',
    heroDesc: '明日劇場項目在學術研究、技術創新和產業應用方面取得了豐碩成果',
    heroSubDesc: '推動數字藝術教育發展，促進傳統文化創新傳承',
    papersTitle: '研究論文',
    papersDesc: '在國際會議和權威期刊發表多篇學術論文，推動數字藝術領域理論發展',
    awardsTitle: '獲獎榮譽',
    awardsDesc: '憑借技術創新和藝術表現力，獲得多項重要獎項和行業認可',
    applicationsTitle: '落地應用',
    applicationsDesc: '在多個重要機構和城市成功落地，推動數字藝術教育和文化創新發展',
    impactTitle: '項目影響力',
    impactDesc: '通過數據展示明日劇場項目在技術創新、教育應用和文化傳承方面的成果',
    futureTitle: '未來發展方向',
    futureDesc: '持續創新發展，推動數字藝術教育和文化傳承事業向更高水平邁進',
    collaborationTitle: '學術合作與交流',
    collaborationDesc: '歡迎學術機構、研究人員和教育工作者與我們開展合作交流',
    contactBtn: '聯繫我們開展合作',
    viewPaper: '查看論文',
    academic: '學術交流',
    academicDesc: '參與學術會議、研討會和論文發表',
    education: '教育合作',
    educationDesc: '共同開發課程、培訓師資和學生交流',
    techInnovation: '技術創新',
    techInnovationDesc: '聯合研發新技術、申請專利和成果轉化',
    papers: [
      {
        title: 'Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology',
        author: 'Wu, Z. (2023)',
        publisher: 'Singapore, Springer Nature Singapore',
        type: '國際會議論文',
        link: 'https://doi.org/10.1007/978-981-99-8248-6_41',
        description: '探討數字遊戲技術在虛擬展覽和表演藝術平台中的應用，提出了明日劇場的技術架構和創新理念。',
        keywords: ['虛擬現實', '數字表演', '遊戲技術', '元宇宙'],
      },
      {
        title: '人工智能賦能交互電影數字角色的創作實踐研究',
        author: '吳振',
        publisher: '現代電影技術，No.5/2025，46-52',
        type: '期刊論文',
        link: 'https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT',
        description: '研究人工智能技術在交互電影數字角色創作中的應用，探索AI驅動的數字人在影視製作中的實踐價值。',
        keywords: ['人工智能', '數字角色', '交互電影', 'AIGC'],
      },
      {
        title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging",
        author: '2024 International Symposium on Ecological Design Engineering, Artificial Intelligence, and Sustainable Development',
        publisher: '2024ISEDEAISD (Ei Compendex)',
        type: '國際會議論文',
        description: '研究沉浸式智能虛擬環境和數字化身在增強學生歸屬感方面的作用，為數字教育提供理論支撐。',
        keywords: ['虛擬環境', '數字化身', '教育技術', '歸屬感'],
      },
      {
        title: '基於運動捕捉和虛擬現實技術的非物質文化遺產舞蹈的保護與開發研究——以藏族舞蹈為例',
        author: '吳振',
        publisher: '舞蹈，No.04/2023，90-96',
        type: '期刊論文',
        link: 'https://kns.cnki.net/kcms2/article/abstract?v=L9QYEmxDei0y1aAKD0Nwc5MIeBBxvVto1Cx-SNo0933uhSQAJAHnVw4J0Th2QUuv_UVzQ7tvhTpZx_k3mTbYlwMcH4pz3W2dZcCVExQ2SKI6yypH1dg90V2enmj8mBUXIS0K9vW7WoLWS0GYVJbUzWk7xzeaxnfMXEx7AZOSkDg=&uniplatform=NZKPT',
        description: '研究利用運動捕捉和虛擬現實技術對非物質文化遺產舞蹈進行保護與開發，以藏族舞蹈為典型案例。',
        keywords: ['運動捕捉', '虛擬現實', '非物質文化遺產', '藏族舞蹈'],
      },
    ],
    awards: [
      { title: 'AI元宇宙1000優秀產品目錄與示範案例', year: '2025', organization: 'AI元宇宙1000評選委員會', description: '獲得四星級認證，入選優秀產品目錄與示範案例', level: '國家級' },
      { title: '中國元宇宙星級供應商', year: '2025', organization: '中國元宇宙產業聯盟', description: '獲得四星級供應商認證', level: '國家級' },
      { title: 'AI元宇宙1000優秀產品目錄與示範案例', year: '2024', organization: 'AI元宇宙1000評選委員會', description: '獲得三星級認證，入選優秀產品目錄與示範案例', level: '國家級' },
      { title: '中國元宇宙星級供應商', year: '2024', organization: '中國元宇宙產業聯盟', description: '獲得三星級供應商認證', level: '國家級' },
      { title: '廣州科技創新創業大賽港澳台賽優勝獎', year: '2025', organization: '香港科技大學百萬獎金創業大賽', description: '在廣州賽中獲得優勝獎', level: '區域級' },
      { title: '中國教育學會課題立項', year: '2024', organization: '中國教育學會', description: '《沉浸交互式技術支持下的藝術融合教學模式的構建》課題', level: '國家級' },
      { title: '深圳前海粵港澳台青年創新創業大賽推送獎', year: '2024', organization: '深圳前海粵港澳台青年創新創業大賽組委會', description: '獲得推送獎', level: '區域級' },
      { title: '澳門科技週參展', year: '2024', organization: '澳門科技週組委會', description: '項目參展展示', level: '區域級' },
      { title: '上海進博會參展', year: '2024', organization: '中國國際進口博覽會', description: '項目參展展示', level: '國家級' },
      { title: '江門科創大賽入圍', year: '2024', organization: '江門科創大賽組委會', description: '入圍江門科創大賽', level: '區域級' },
      { title: '中國國際大學生雙創賽銀獎', year: '2023', organization: '中國國際大學生創新創業大賽組委會', description: '獲得銀獎', level: '國家級' },
      { title: '理創大賽銀獎', year: '2023', organization: '理創大賽組委會（索尼/理光）', description: '獲得銀獎', level: '行業級' },
      { title: 'Unity黑馬計劃入選', year: '2023', organization: 'Unity Technologies', description: '項目被Unity官方認可，入選黑馬計劃', level: '行業級' },
      { title: 'TCDIG全球數字科技創意設計大賽銀獎', year: '2022', organization: 'TCDIG全球數字科技創意設計大賽組委會', description: '獲得銀獎', level: '國際級' },
    ],
    applications: [
      { location: '澳門青年創業孵化中心', region: '澳門', status: '運營中', description: '作為項目發源地，為澳門青年創業者提供數字藝術創作平台', features: ['創業孵化', '藝術創作', '技術培訓'] },
      { location: '聚能灣國家級科技企業孵化中心', region: '上海', status: '運營中', description: '在上海設立技術研發中心，推動平台技術升級和產業化應用', features: ['技術研發', '產業孵化', '人才培養'] },
      { location: '北京師範大學未來設計美術館', region: '珠海', status: '合作中', description: '與高等院校合作，開展數字藝術教育和學術研究', features: ['學術研究', '教育實踐', '展覽展示'] },
      { location: '798深瀾AI中心', region: '北京', status: '合作中', description: '在北京藝術區設立展示中心，推廣數字藝術創作理念', features: ['藝術展示', '技術交流', '文化推廣'] },
      { location: '香港科技大學霍英東研究院', region: '廣州', status: '合作中', description: '與香港科技大學合作，推動科技創新與人才培養', features: ['科研合作', '技術轉化', '人才交流'] },
      { location: '中關村AI北緯社區', region: '北京', status: '合作中', description: '在中關村AI核心區域設立合作基地，推動人工智能技術應用', features: ['AI技術', '產業對接', '創新孵化'] },
    ],
    impacts: [
      { title: '技術創新', value: '8+', description: '核心技術模塊', details: '人文藝術、互動體驗、網絡技術、圖形學、動作捕捉、人工智能、數字資產、虛擬現實' },
      { title: '教育應用', value: '100+', description: '受益學生數量', details: '通過課程體系和平台應用，已有超過100名學生受益於數字藝術教育' },
      { title: '文化傳承', value: '5+', description: '非遺文化項目', details: '已收錄熱巴舞等多項非物質文化遺產，推動傳統文化數字化傳承' },
      { title: '國際影響', value: '3+', description: '國際合作項目', details: '與多個國際機構建立合作關係，推廣中國數字藝術創新成果' },
    ],
    futureDirections: [
      { title: '技術升級', description: '持續優化動作捕捉精度，增強AI數字人表現力，提升虛擬現實體驗質量' },
      { title: '教育拓展', description: '擴大課程覆蓋範圍，開發更多適合不同年齡段的數字藝術教育內容' },
      { title: '文化傳承', description: '收錄更多中華優秀傳統文化內容，推動文化創新性發展' },
      { title: '國際推廣', description: '加強國際交流合作，將中國數字藝術創新成果推向世界舞台' },
    ],
    copyrightTitle: '軟件著作權',
    copyrightDesc: '已獲得多項軟件著作權登記，保護核心技術創新成果',
    copyrightRegNo: '登記號',
    copyrightCertNo: '證書號',
    copyrights: [
      { name: 'DanceGen-數字舞蹈動作生成軟件', shortName: 'DanceGen', version: 'V1.0', regNo: '2024SR0717737' },
      { name: '「明日劇場」舞蹈智能學習助手軟件', shortName: '「明日劇場」學習助手', version: 'V1.0', regNo: '2024SR1996575', certNo: '軟著登字第14400448號' },
      { name: '明日劇場—Kinect表演交互系統', shortName: 'TOT(Base)', version: 'V1.0', regNo: '2022SR0537060', certNo: '軟著登字第9491259號' },
      { name: '明日劇場—虛擬線上交互展演系統', shortName: 'TOT', version: 'V1.0', regNo: '2021SR1456845', certNo: '軟著登字第8179471號' },
      { name: '明日劇場專業版—線上交互展演系統', shortName: 'TOT(Pro)', version: 'V3.0', regNo: '2022SR1036628', certNo: '軟著登字第9990827號' },
      { name: 'DanceLab(Online Version)-舞蹈動作信息管理系統', shortName: 'DanceLab', version: 'V1.0', regNo: '2023SR0604211', certNo: '軟著登字第11191382號' },
      { name: '舞蹈數字動作庫及分析系統', shortName: 'DanceLab', version: 'V1.0', regNo: '2021SR1619706', certNo: '軟著登字第8342332號' },
    ],
  },
  'en': {
    heroTitle1: 'Academic Achievements',
    heroTitle2: 'Research Papers · Awards · Applications',
    heroDesc: 'Theater of Tomorrow has achieved rich results in academic research, technological innovation, and industry application',
    heroSubDesc: 'Advancing digital art education and innovative cultural heritage',
    papersTitle: 'Research Papers',
    papersDesc: 'Published multiple academic papers at international conferences and journals, advancing theoretical development in digital art',
    awardsTitle: 'Awards & Honors',
    awardsDesc: 'Recognized with multiple important awards for technological innovation and artistic expression',
    applicationsTitle: 'Real-World Applications',
    applicationsDesc: 'Successfully implemented in multiple important institutions and cities, advancing digital art education and cultural innovation',
    impactTitle: 'Project Impact',
    impactDesc: 'Demonstrating ToT achievements in tech innovation, education, and cultural heritage',
    futureTitle: 'Future Directions',
    futureDesc: 'Continuously innovating to advance digital art education and cultural heritage to higher levels',
    collaborationTitle: 'Academic Collaboration & Exchange',
    collaborationDesc: 'Welcoming academic institutions, researchers, and educators for collaboration and exchange',
    contactBtn: 'Contact Us for Collaboration',
    viewPaper: 'View Paper',
    academic: 'Academic Exchange',
    academicDesc: 'Participating in academic conferences, seminars, and paper publications',
    education: 'Educational Cooperation',
    educationDesc: 'Co-developing courses, training faculty, and student exchanges',
    techInnovation: 'Tech Innovation',
    techInnovationDesc: 'Joint R&D, patent applications, and technology transfer',
    papers: [
      {
        title: 'Theatre of Tomorrow - A Virtual Exhibition and Performing Arts Platform Created by Digital Game Technology',
        author: 'Wu, Z. (2023)',
        publisher: 'Singapore, Springer Nature Singapore',
        type: 'International Conference Paper',
        link: 'https://doi.org/10.1007/978-981-99-8248-6_41',
        description: 'Discusses the application of digital game technology in virtual exhibition and performing arts platforms, proposing the technical architecture and innovative concepts of Theater of Tomorrow.',
        keywords: ['Virtual Reality', 'Digital Performance', 'Game Technology', 'Metaverse'],
      },
      {
        title: 'Research on AI-Enabled Interactive Film Digital Character Creation Practice',
        author: 'Wu Zhen',
        publisher: 'Modern Film Technology, No.5/2025, pp.46-52',
        type: 'Journal Paper',
        link: 'https://kns.cnki.net/kcms2/article/abstract?v=h5hbu4VP4UTPji-zdsXjMQEIEZNm-VxBeX7GYWbJCbkzF0NZS8DhGITHIbNUq9Wn0oEhOoijvcYm7OtI7ROEKXcuYL-XtLT_6CeAkqZdGfNJYFM4Ro-JXME2hWc5vkbvkqPKsVuvvh5huiDrAWswv-r2uXMn2O1cUTJZFChUtXE=&uniplatform=NZKPT',
        description: 'Studies the application of AI technology in interactive film digital character creation, exploring the practical value of AI-driven digital humans in film and television production.',
        keywords: ['Artificial Intelligence', 'Digital Character', 'Interactive Film', 'AIGC'],
      },
      {
        title: "A Study of The Role of Immersive Intelligent Virtual Environments and Digital Avatars in Enhancing Students' Sense of Belonging",
        author: '2024 International Symposium on Ecological Design Engineering, Artificial Intelligence, and Sustainable Development',
        publisher: '2024ISEDEAISD (Ei Compendex)',
        type: 'International Conference Paper',
        description: 'Studies the role of immersive intelligent virtual environments and digital avatars in enhancing students\' sense of belonging, providing theoretical support for digital education.',
        keywords: ['Virtual Environment', 'Digital Avatar', 'Educational Technology', 'Sense of Belonging'],
      },
      {
        title: 'Research on the Protection and Development of Intangible Cultural Heritage Dance Based on Motion Capture and Virtual Reality Technology: A Case Study of Tibetan Dance',
        author: 'Wu Zhen',
        publisher: 'Dance, No.04/2023, pp.90-96',
        type: 'Journal Paper',
        link: 'https://kns.cnki.net/kcms2/article/abstract?v=L9QYEmxDei0y1aAKD0Nwc5MIeBBxvVto1Cx-SNo0933uhSQAJAHnVw4J0Th2QUuv_UVzQ7tvhTpZx_k3mTbYlwMcH4pz3W2dZcCVExQ2SKI6yypH1dg90V2enmj8mBUXIS0K9vW7WoLWS0GYVJbUzWk7xzeaxnfMXEx7AZOSkDg=&uniplatform=NZKPT',
        description: 'Studies the protection and development of intangible cultural heritage dance using motion capture and virtual reality technology, with Tibetan dance as a case study.',
        keywords: ['Motion Capture', 'Virtual Reality', 'Intangible Cultural Heritage', 'Tibetan Dance'],
      },
    ],
    awards: [
      { title: 'AI Metaverse 1000 Outstanding Product Catalog & Demonstration Case', year: '2025', organization: 'AI Metaverse 1000 Selection Committee', description: 'Received 4-star certification, selected into outstanding product catalog and demonstration cases', level: 'National' },
      { title: 'China Metaverse Star Supplier', year: '2025', organization: 'China Metaverse Industry Alliance', description: 'Received 4-star supplier certification', level: 'National' },
      { title: 'AI Metaverse 1000 Outstanding Product Catalog & Demonstration Case', year: '2024', organization: 'AI Metaverse 1000 Selection Committee', description: 'Received 3-star certification, selected into outstanding product catalog and demonstration cases', level: 'National' },
      { title: 'China Metaverse Star Supplier', year: '2024', organization: 'China Metaverse Industry Alliance', description: 'Received 3-star supplier certification', level: 'National' },
      { title: 'Guangzhou Science & Tech Innovation Competition HK/Macao/Taiwan Excellence Award', year: '2025', organization: 'HKUST Million Dollar Entrepreneurship Competition', description: 'Won the excellence award in the Guangzhou competition', level: 'Regional' },
      { title: 'China Education Society Research Project Approval', year: '2024', organization: 'China Education Society', description: 'Research project: "Construction of Art-Integrated Teaching Model under Immersive Interactive Technology"', level: 'National' },
      { title: 'Shenzhen Qianhai Greater Bay Area Youth Innovation & Entrepreneurship Contest Nomination Award', year: '2024', organization: 'Shenzhen Qianhai GBA Youth Contest Organizing Committee', description: 'Received nomination award', level: 'Regional' },
      { title: 'Macao Science Week Exhibition', year: '2024', organization: 'Macao Science Week Organizing Committee', description: 'Project exhibition', level: 'Regional' },
      { title: 'Shanghai CIIE Exhibition', year: '2024', organization: 'China International Import Expo', description: 'Project exhibition', level: 'National' },
      { title: 'Jiangmen Science & Innovation Contest Shortlist', year: '2024', organization: 'Jiangmen Science & Innovation Contest Organizing Committee', description: 'Shortlisted for Jiangmen Science and Innovation Contest', level: 'Regional' },
      { title: 'China International College Student Innovation & Entrepreneurship Competition Silver Award', year: '2023', organization: 'China International College Student Innovation Competition Organizing Committee', description: 'Silver Award', level: 'National' },
      { title: 'LiChuang Contest Silver Award', year: '2023', organization: 'LiChuang Contest Organizing Committee (Sony/Ricoh)', description: 'Silver Award', level: 'Industry' },
      { title: 'Unity Black Horse Program Selection', year: '2023', organization: 'Unity Technologies', description: 'Project officially recognized by Unity, selected for Black Horse Program', level: 'Industry' },
      { title: 'TCDIG Global Digital Technology Creative Design Competition Silver Award', year: '2022', organization: 'TCDIG Global Digital Technology Creative Design Competition Organizing Committee', description: 'Silver Award', level: 'International' },
    ],
    applications: [
      { location: 'Macao Youth Entrepreneurship Incubation Center', region: 'Macao', status: 'Operating', description: 'As the project birthplace, provides digital art creation platform for Macao youth entrepreneurs', features: ['Startup Incubation', 'Art Creation', 'Tech Training'] },
      { location: 'Juneng Bay National Tech Enterprise Incubation Center', region: 'Shanghai', status: 'Operating', description: 'Established tech R&D center in Shanghai, advancing platform technology and commercialization', features: ['Tech R&D', 'Industry Incubation', 'Talent Development'] },
      { location: 'BNU Future Design Art Museum', region: 'Zhuhai', status: 'Partnering', description: 'Collaborating with higher education for digital art education and academic research', features: ['Academic Research', 'Educational Practice', 'Exhibition'] },
      { location: '798 Shenlan AI Center', region: 'Beijing', status: 'Partnering', description: 'Exhibition center in Beijing art district promoting digital art creation concepts', features: ['Art Exhibition', 'Tech Exchange', 'Cultural Promotion'] },
      { location: 'HKUST Fok Ying Tung Research Institute', region: 'Guangzhou', status: 'Partnering', description: 'Partnering with HKUST to advance tech innovation and talent cultivation', features: ['Research Collaboration', 'Tech Transfer', 'Talent Exchange'] },
      { location: 'Zhongguancun AI Latitude Community', region: 'Beijing', status: 'Partnering', description: 'Cooperation base in Zhongguancun AI core area to advance AI technology application', features: ['AI Technology', 'Industry Matching', 'Innovation Incubation'] },
    ],
    impacts: [
      { title: 'Tech Innovation', value: '8+', description: 'Core Tech Modules', details: 'Humanities & Arts, Interactive Experience, Network Technology, Graphics, Motion Capture, AI, Digital Assets, Virtual Reality' },
      { title: 'Education', value: '100+', description: 'Students Benefited', details: 'Over 100 students have benefited from digital art education through the course system and platform' },
      { title: 'Cultural Heritage', value: '5+', description: 'Intangible Heritage Projects', details: 'Multiple intangible cultural heritages including Reba dance have been recorded, advancing traditional culture digitization' },
      { title: 'International Influence', value: '3+', description: 'International Projects', details: 'Partnerships with multiple international institutions to promote Chinese digital art innovation' },
    ],
    futureDirections: [
      { title: 'Technology Upgrade', description: 'Continuously optimize motion capture precision, enhance AI digital human expressiveness, improve VR experience quality' },
      { title: 'Education Expansion', description: 'Expand course coverage, develop more digital art education content for different age groups' },
      { title: 'Cultural Heritage', description: 'Record more excellent traditional Chinese cultural content, advancing cultural innovative development' },
      { title: 'International Promotion', description: 'Strengthen international exchange and cooperation, bringing Chinese digital art innovations to the world stage' },
    ],
    copyrightTitle: 'Software Copyright Registrations',
    copyrightDesc: 'Multiple software copyright registrations protecting core technological innovations',
    copyrightRegNo: 'Reg. No.',
    copyrightCertNo: 'Cert. No.',
    copyrights: [
      { name: 'DanceGen - Digital Dance Motion Generation Software', shortName: 'DanceGen', version: 'V1.0', regNo: '2024SR0717737' },
      { name: '"Theater of Tomorrow" Dance Intelligent Learning Assistant Software', shortName: '"ToT" Learning Assistant', version: 'V1.0', regNo: '2024SR1996575', certNo: '14400448' },
      { name: 'Theater of Tomorrow — Kinect Performance Interaction System', shortName: 'TOT(Base)', version: 'V1.0', regNo: '2022SR0537060', certNo: '9491259' },
      { name: 'Theater of Tomorrow — Virtual Online Interactive Performance System', shortName: 'TOT', version: 'V1.0', regNo: '2021SR1456845', certNo: '8179471' },
      { name: 'Theater of Tomorrow Pro — Online Interactive Performance System', shortName: 'TOT(Pro)', version: 'V3.0', regNo: '2022SR1036628', certNo: '9990827' },
      { name: 'DanceLab (Online Version) - Dance Motion Information Management System', shortName: 'DanceLab', version: 'V1.0', regNo: '2023SR0604211', certNo: '11191382' },
      { name: 'Dance Digital Motion Library and Analysis System', shortName: 'DanceLab', version: 'V1.0', regNo: '2021SR1619706', certNo: '8342332' },
    ],
  },
};

const awardIcons = [
  <Trophy className="w-6 h-6 text-yellow-400" />,
  <Star className="w-6 h-6 text-purple-400" />,
  <Award className="w-6 h-6 text-cyan-400" />,
  <Trophy className="w-6 h-6 text-green-400" />,
  <Award className="w-6 h-6 text-blue-400" />,
  <Star className="w-6 h-6 text-orange-400" />,
  <Award className="w-6 h-6 text-pink-400" />,
  <Trophy className="w-6 h-6 text-cyan-400" />,
  <Star className="w-6 h-6 text-red-400" />,
  <Award className="w-6 h-6 text-indigo-400" />,
  <Trophy className="w-6 h-6 text-yellow-400" />,
  <Star className="w-6 h-6 text-purple-400" />,
  <Award className="w-6 h-6 text-cyan-400" />,
  <Trophy className="w-6 h-6 text-yellow-400" />,
];

const applicationIcons = [
  <MapPin className="w-6 h-6 text-cyan-400" />,
  <Lightbulb className="w-6 h-6 text-purple-400" />,
  <BookOpen className="w-6 h-6 text-green-400" />,
  <Globe className="w-6 h-6 text-yellow-400" />,
  <BookOpen className="w-6 h-6 text-blue-400" />,
  <Lightbulb className="w-6 h-6 text-orange-400" />,
];

const futureIcons = [
  <TrendingUp className="w-6 h-6 text-cyan-400" />,
  <Target className="w-6 h-6 text-purple-400" />,
  <Star className="w-6 h-6 text-yellow-400" />,
  <Globe className="w-6 h-6 text-green-400" />,
];

const ResearchPage = () => {
  const { language } = useLanguage();
  const { open: openContactInquiry } = useContactInquiry();
  const c = pageContent[language] || pageContent['zh-CN'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {c.heroTitle1}
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-300">
                {c.heroTitle2}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {c.heroDesc}
              <br />
              <span className="text-lg text-gray-400">
                {c.heroSubDesc}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.papersTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.papersDesc}
            </p>
          </div>

          <div className="space-y-8">
            {c.papers.map((paper, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                          {paper.type}
                        </Badge>
                        <FileText className="w-4 h-4 text-gray-400" />
                      </div>
                      <CardTitle className="text-white text-lg mb-2">{paper.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        <div className="mb-1">{paper.author}</div>
                        <div className="text-sm">{paper.publisher}</div>
                      </CardDescription>
                    </div>
                    {paper.link && (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        {c.viewPaper}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{paper.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Copyright */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.copyrightTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.copyrightDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.copyrights.map((item, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-300 flex items-start gap-4">
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug mb-1">{item.name}</p>
                  <p className="text-cyan-400 text-xs mb-2">[{item.shortName}] {item.version}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="text-gray-500 text-xs">{c.copyrightRegNo}：<span className="text-gray-300">{item.regNo}</span></span>
                    {item.certNo && (
                      <span className="text-gray-500 text-xs">{c.copyrightCertNo}：<span className="text-gray-300">{item.certNo}</span></span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.awardsTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.awardsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.awards.map((award, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                      {awardIcons[index % awardIcons.length]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-yellow-500/50 text-yellow-400">
                          {award.level}
                        </Badge>
                        <span className="text-gray-400 text-sm">{award.year}</span>
                      </div>
                      <CardTitle className="text-white text-lg">{award.title}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm">
                        {award.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.applicationsTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.applicationsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.applications.map((app, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                      {applicationIcons[index]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-green-500/50 text-green-400">
                          {app.status}
                        </Badge>
                        <span className="text-gray-400 text-sm">{app.region}</span>
                      </div>
                      <CardTitle className="text-white text-lg">{app.location}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.impactTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.impactDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{impact.value}</div>
                  <div className="text-white font-semibold mb-2">{impact.description}</div>
                  <div className="text-gray-400 text-sm mb-4">{impact.title}</div>
                  <p className="text-gray-500 text-xs">{impact.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Directions */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.futureTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.futureDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.futureDirections.map((direction, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg p-3">
                    {futureIcons[index]}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{direction.title}</h3>
                    <p className="text-gray-400 text-sm">{direction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Collaboration */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {c.collaborationTitle}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {c.collaborationDesc}
          </p>
          <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">{c.academic}</h4>
                <p className="text-gray-400 text-sm">{c.academicDesc}</p>
              </div>
              <div>
                <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">{c.education}</h4>
                <p className="text-gray-400 text-sm">{c.educationDesc}</p>
              </div>
              <div>
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">{c.techInnovation}</h4>
                <p className="text-gray-400 text-sm">{c.techInnovationDesc}</p>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3" onClick={openContactInquiry}>
                {c.contactBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
