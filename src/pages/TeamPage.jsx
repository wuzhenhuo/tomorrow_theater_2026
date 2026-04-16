import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Trophy,
  Star,
  Briefcase,
  Mail,
  Phone
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pageContent = {
  'zh-CN': {
    heroTitle1: '团队介绍',
    heroTitle2: '未来视野科技有限公司',
    heroDesc: '汇聚国际顶尖学者与专业团队，引领跨媒介数字展演创作的前沿发展',
    leadTitle: '项目负责人',
    coreTeamTitle: '主创团队',
    coreTeamDesc: '跨学科的专业团队，推动数字艺术创新',
    artAdvisorsTitle: '艺术指导',
    artAdvisorsDesc: '国际知名专家提供学术与艺术指导',
    aiStaffTitle: 'AI 员工',
    aiStaffDesc: 'AI驱动的团队成员，24小时提供支持',
    coreValuesTitle: '公司核心价值观',
    partnersTitle: '技术支持及合作伙伴',
    partnersDesc: '与知名院校、科技公司和行业机构建立战略合作关系',
    academicTitle: '学术机构',
    techTitle: '科技公司',
    industryTitle: '行业伙伴',
    joinTitle: '加入我们的团队',
    joinDesc: '如果您对数字艺术充满热情，欢迎与我们联系',
    mainPositions: '主要职务',
    mainAchievements: '主要成就',
    expertiseArea: '专业领域',
    teamMembers: [
      {
        name: '吴振',
        role: '创意总监 / 项目负责人',
        description: '澳门科技大学数字媒体博士，北京舞蹈学院副教授、硕士生导师，国家二级舞台美术设计，澳门国际青年智库理事、研究员。美国加州大学欧文分校访问学者。',
        image: '/team/wuzhen.png',
        positions: ['北京舞蹈学院副教授', '澳门国际青年智库理事、研究员', '硕士生导师', '国家二级舞台美术设计', '西那瓦大学艺术与哲学学院客座教授及博士生导师（泰国）', '《照明工程学报》青年编委'],
        achievements: ['2022年北京冬残奥会开闭幕式多媒体设计', '国家科技创新奖（科技部备案）', '理创大赛大湾区二等奖'],
        expertise: ['数字媒体艺术创作', '多媒体视觉设计', '舞台美术设计', '人工智能应用', '跨媒介展演技术'],
      },
      { name: '马明（澳门）', role: 'CMO', description: '澳门城市大学教授', image: '/team/ming.png' },
      { name: '欧阳嘉玲（澳门）', role: '项目策划', description: '澳门国际青年智库秘书长，负责项目整体策划与协调。', image: '/team/jialing.png' },
      { name: '樊一鸣（澳大利亚）', role: '市场总监', description: '视觉艺术家，澳门大学与墨尔本大学双硕士，海外市场推广与品牌建设', image: '/team/fanyiming.png' },
      { name: '王莹', role: '设计总监', description: '北京师范大学（珠海）硕士，负责视觉设计与用户体验。', image: '/team/wangyin.png' },
    ],
    artAdvisors: [
      { name: 'Tony Brown', role: '艺术顾问', description: '法国巴黎国立高等美院终身教授', image: '/team/tony.png' },
      { name: '高鹏', role: '学术顾问', description: '北京师范大学未来设计学院院长', image: '/team/gaopeng.png' },
    ],
    aiEmployees: [
      { name: 'Bernard', role: '首席程序员', description: 'AI驱动的开发助手，负责技术支持与代码优化', image: '/team/bernard.png' },
      { name: 'Claw', role: '首席经理', description: 'AI项目管理助手，负责项目协调与进度追踪', image: '/team/claw.png' },
    ],
    partners: {
      academic: ['澳门科技大学', '澳门国际青年智库', '澳门舞蹈家协会', '北京师范大学未来设计学院（珠海）', '天津传媒学院', '香港科技大学霍英东研究院'],
      technology: ['索尼 (SONY)', '理光 (RICOH)', 'HTC', '微软中国', '亚马逊云 (AWS)', '华为 (HUAWEI)', 'Unity Technologies'],
      industry: ['北京澜景科技有限公司enlightv', '北京诺亦腾科技有限公司 (Noitom)', '上海青瞳科技有限公司 (Chingmu Technology)', 'Ltd. Bite Dance-PICO'],
    },
    coreValues: [
      { en: 'Keep an open mind', zh: '保持开放' },
      { en: 'Move forward bravely', zh: '勇往直前' },
      { en: 'Full of passion', zh: '充满激情' },
      { en: 'Embracing technology and art', zh: '拥抱科技与艺术' },
      { en: 'To build and create', zh: '创建未来' },
    ],
  },
  'zh-TW': {
    heroTitle1: '團隊介紹',
    heroTitle2: '未來視野科技有限公司',
    heroDesc: '匯聚國際頂尖學者與專業團隊，引領跨媒介數字展演創作的前沿發展',
    leadTitle: '項目負責人',
    coreTeamTitle: '主創團隊',
    coreTeamDesc: '跨學科的專業團隊，推動數字藝術創新',
    artAdvisorsTitle: '藝術指導',
    artAdvisorsDesc: '國際知名專家提供學術與藝術指導',
    aiStaffTitle: 'AI 員工',
    aiStaffDesc: 'AI驅動的團隊成員，24小時提供支持',
    coreValuesTitle: '公司核心價值觀',
    partnersTitle: '技術支持及合作夥伴',
    partnersDesc: '與知名院校、科技公司和行業機構建立戰略合作關係',
    academicTitle: '學術機構',
    techTitle: '科技公司',
    industryTitle: '行業夥伴',
    joinTitle: '加入我們的團隊',
    joinDesc: '如果您對數字藝術充滿熱情，歡迎與我們聯繫',
    mainPositions: '主要職務',
    mainAchievements: '主要成就',
    expertiseArea: '專業領域',
    teamMembers: [
      {
        name: '吳振',
        role: '創意總監 / 項目負責人',
        description: '澳門科技大學數字媒體博士，北京舞蹈學院副教授、碩士生導師，國家二級舞台美術設計，澳門國際青年智庫理事、研究員。美國加州大學歐文分校訪問學者。',
        image: '/team/wuzhen.png',
        positions: ['北京舞蹈學院副教授', '澳門國際青年智庫理事、研究員', '碩士生導師', '國家二級舞台美術設計', '西那瓦大學藝術與哲學學院客座教授及博士生導師（泰國）', '《照明工程學報》青年編委'],
        achievements: ['2022年北京冬殘奧會開閉幕式多媒體設計', '國家科技創新獎（科技部備案）', '理創大賽大灣區二等獎'],
        expertise: ['數字媒體藝術創作', '多媒體視覺設計', '舞台美術設計', '人工智能應用', '跨媒介展演技術'],
      },
      { name: '馬明（澳門）', role: 'CMO', description: '澳門城市大學教授', image: '/team/ming.png' },
      { name: '歐陽嘉玲（澳門）', role: '項目策劃', description: '澳門國際青年智庫秘書長，負責項目整體策劃與協調。', image: '/team/jialing.png' },
      { name: '樊一鳴（澳大利亞）', role: '市場總監', description: '視覺藝術家，澳門大學與墨爾本大學雙碩士，海外市場推廣與品牌建設', image: '/team/fanyiming.png' },
      { name: '王瑩', role: '設計總監', description: '北京師範大學（珠海）碩士，負責視覺設計與用戶體驗。', image: '/team/wangyin.png' },
    ],
    artAdvisors: [
      { name: 'Tony Brown', role: '藝術顧問', description: '法國巴黎國立高等美院終身教授', image: '/team/tony.png' },
      { name: '高鵬', role: '學術顧問', description: '北京師範大學未來設計學院院長', image: '/team/gaopeng.png' },
    ],
    aiEmployees: [
      { name: 'Bernard', role: '首席程序員', description: 'AI驅動的開發助手，負責技術支持與代碼優化', image: '/team/bernard.png' },
      { name: 'Claw', role: '首席經理', description: 'AI項目管理助手，負責項目協調與進度追蹤', image: '/team/claw.png' },
    ],
    partners: {
      academic: ['澳門科技大學', '澳門國際青年智庫', '澳門舞蹈家協會', '北京師範大學未來設計學院（珠海）', '天津傳媒學院', '香港科技大學霍英東研究院'],
      technology: ['索尼 (SONY)', '理光 (RICOH)', 'HTC', '微軟中國', '亞馬遜雲 (AWS)', '華為 (HUAWEI)', 'Unity Technologies'],
      industry: ['北京瀾景科技有限公司enlightv', '北京諾亦騰科技有限公司 (Noitom)', '上海青瞳科技有限公司 (Chingmu Technology)', 'Ltd. Bite Dance-PICO'],
    },
    coreValues: [
      { en: 'Keep an Open Mind', zh: '保持開放' },
      { en: 'Move Forward Bravely', zh: '勇往直前' },
      { en: 'Full of Passion', zh: '充滿激情' },
      { en: 'Embracing Technology and Art', zh: '擁抱科技與藝術' },
      { en: 'To Build and Create', zh: '創建未來' },
    ],
  },
  'en': {
    heroTitle1: 'Team Introduction',
    heroTitle2: 'Future Vision Technology Co., Ltd.',
    heroDesc: 'Gathering international top scholars and professional teams, leading the frontier of cross-media digital performance creation',
    leadTitle: 'Project Lead',
    coreTeamTitle: 'Core Team',
    coreTeamDesc: 'An interdisciplinary professional team driving digital art innovation',
    artAdvisorsTitle: 'Art Advisors',
    artAdvisorsDesc: 'International renowned experts providing academic and artistic guidance',
    aiStaffTitle: 'AI Staff',
    aiStaffDesc: 'AI-driven team members providing 24/7 support',
    coreValuesTitle: 'Company Core Values',
    partnersTitle: 'Technical Support & Partners',
    partnersDesc: 'Strategic partnerships with renowned universities, tech companies, and industry institutions',
    academicTitle: 'Academic Institutions',
    techTitle: 'Technology Companies',
    industryTitle: 'Industry Partners',
    joinTitle: 'Join Our Team',
    joinDesc: 'If you are passionate about digital art, we welcome you to contact us',
    mainPositions: 'Key Positions',
    mainAchievements: 'Major Achievements',
    expertiseArea: 'Expertise',
    teamMembers: [
      {
        name: 'Wu Zhen',
        role: 'Creative Director / Project Lead',
        description: 'PhD in Digital Media from Macao University of Science and Technology, Associate Professor and Master Supervisor at Beijing Dance Academy, National Level-2 Stage Art Designer, Director and Research Fellow of Macao International Youth Think Tank, Visiting Scholar at UC Irvine.',
        image: '/team/wuzhen.png',
        positions: ['Associate Professor, Beijing Dance Academy', 'Director & Research Fellow, Macao International Youth Think Tank', 'Master Supervisor', 'National Level-2 Stage Art Designer', 'Visiting Professor & PhD Supervisor, Shinawatra University Faculty of Arts and Philosophy (Thailand)', 'Young Editorial Board Member, Journal of Illuminating Engineering'],
        achievements: ['2022 Beijing Winter Paralympic Games Opening/Closing Ceremony Multimedia Design', 'National Science and Technology Innovation Award (MOST registered)', 'LiChuang Contest Greater Bay Area Second Prize'],
        expertise: ['Digital Media Art Creation', 'Multimedia Visual Design', 'Stage Art Design', 'Artificial Intelligence Application', 'Cross-Media Performance Technology'],
      },
      { name: 'Ma Ming (Macao)', role: 'CMO', description: 'Professor at City University of Macau', image: '/team/ming.png' },
      { name: 'Ouyang Jialing (Macao)', role: 'Project Planner', description: 'Secretary-General of Macao International Youth Think Tank, responsible for overall project planning and coordination.', image: '/team/jialing.png' },
      { name: 'Fan Yiming (Australia)', role: 'Marketing Director', description: 'Visual artist, dual Master\'s from University of Macao and University of Melbourne, overseas marketing and brand building', image: '/team/fanyiming.png' },
      { name: 'Wang Ying', role: 'Design Director', description: 'Master from Beijing Normal University (Zhuhai), responsible for visual design and user experience.', image: '/team/wangyin.png' },
    ],
    artAdvisors: [
      { name: 'Tony Brown', role: 'Art Advisor', description: 'Tenured Professor at École nationale supérieure des Beaux-Arts de Paris', image: '/team/tony.png' },
      { name: 'Gao Peng', role: 'Academic Advisor', description: 'Dean of Beijing Normal University Future Design School', image: '/team/gaopeng.png' },
    ],
    aiEmployees: [
      { name: 'Bernard', role: 'Chief Programmer', description: 'AI-driven development assistant, responsible for technical support and code optimization', image: '/team/bernard.png' },
      { name: 'Claw', role: 'Chief Manager', description: 'AI project management assistant, responsible for project coordination and progress tracking', image: '/team/claw.png' },
    ],
    partners: {
      academic: ['Macao University of Science and Technology', 'Macao International Youth Think Tank', 'Macao Dancers Association', 'BNU Future Design School (Zhuhai)', 'Tianjin Media College', 'HKUST Fok Ying Tung Research Institute'],
      technology: ['索尼 (SONY)', '理光 (RICOH)', 'HTC', '微软中国', '亚马逊云 (AWS)', '华为 (HUAWEI)', 'Unity Technologies'],
      industry: ['北京澜景科技有限公司enlightv', '北京诺亦腾科技有限公司 (Noitom)', '上海青瞳科技有限公司 (Chingmu Technology)', 'Ltd. Bite Dance-PICO'],
    },
    coreValues: [
      { en: 'Keep an Open Mind', zh: 'Keep an Open Mind' },
      { en: 'Move Forward Bravely', zh: 'Move Forward Bravely' },
      { en: 'Full of Passion', zh: 'Full of Passion' },
      { en: 'Embracing Technology and Art', zh: 'Embracing Technology and Art' },
      { en: 'To Build and Create', zh: 'To Build and Create' },
    ],
  },
};

const TeamPage = () => {
  const { language } = useLanguage();
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
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {c.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Lead Team Member */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.leadTitle}</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Image */}
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/50 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                      <img
                        src={c.teamMembers[0].image}
                        alt={c.teamMembers[0].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{c.teamMembers[0].name}</h3>
                <p className="text-cyan-400 text-lg mb-2">{c.teamMembers[0].role}</p>
                <p className="text-gray-400 text-sm">{c.teamMembers[0].description}</p>
              </div>

              {/* Details */}
              <div className="lg:col-span-2">
                {/* Positions */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-cyan-400" />
                    {c.mainPositions}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {c.teamMembers[0].positions.map((position, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                        {position}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                    {c.mainAchievements}
                  </h4>
                  <div className="space-y-3">
                    {c.teamMembers[0].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                        <Award className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-cyan-400" />
                    {c.expertiseArea}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {c.teamMembers[0].expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-cyan-500/50 text-cyan-400 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.coreTeamTitle}</h2>
            <p className="text-gray-400">{c.coreTeamDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {c.teamMembers.slice(1).map((member, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Art Advisors */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.artAdvisorsTitle}</h2>
            <p className="text-gray-400">{c.artAdvisorsDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {c.artAdvisors.map((advisor, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{advisor.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium">
                    {advisor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{advisor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Employees */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.aiStaffTitle}</h2>
            <p className="text-gray-400">{c.aiStaffDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {c.aiEmployees.map((employee, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{employee.name}</CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {employee.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{employee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.coreValuesTitle}</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.coreValues.map((value, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 text-center hover:border-cyan-500/50 transition-colors">
                  <p className="text-white font-semibold text-lg mb-2">{value.zh}</p>
                  <p className="text-gray-400 text-sm">{value.en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.partnersTitle}</h2>
            <p className="text-gray-400">{c.partnersDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academic Partners */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-white font-semibold">{c.academicTitle}</h3>
              </div>
              <div className="space-y-2">
                {c.partners.academic.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partners */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-purple-400 mr-2" />
                <h3 className="text-white font-semibold">{c.techTitle}</h3>
              </div>
              <div className="space-y-2">
                {c.partners.technology.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Partners */}
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">{c.industryTitle}</h3>
              </div>
              <div className="space-y-2">
                {c.partners.industry.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.joinTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {c.joinDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <span>tot@alexzhenwu.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <span>+86 13810745684</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
