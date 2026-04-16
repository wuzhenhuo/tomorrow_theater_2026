import React from 'react';
import { useCourseEnroll } from '../context/CourseEnrollContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Users,
  Palette,
  Brain,
  Clock,
  Target,
  Star,
  Sparkles,
  Globe,
  Zap,
  Music,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pageContent = {
  'zh-CN': {
    heroTitle1: '课程体系',
    heroTitle2: 'AIGC+元宇宙数字艺术教育',
    heroDesc: '融合现代科技与艺术表演，构建全方位数字艺术教育生态',
    heroSubDesc: '戏剧、舞蹈、绘画、设计四大方向，满足不同学习需求',
    coursesTitle: '两大课程体系',
    coursesDesc: '面向不同学习群体，提供专业化和普及化的数字艺术教育方案',
    durationLabel: '课程时长',
    hoursLabel: '学时安排',
    targetLabel: '适用对象',
    modulesLabel: '课程模块：',
    learnMore: '了解详情',
    professionalTitle: '元宇宙數字表演課程详情',
    professionalDesc: '16周专业课程，四大模块循序渐进，培养数字时代表演艺术人才',
    k12Title: '数字艺术设计课程详情',
    k12Desc: '五个阶段递进式学习，让中小学生轻松掌握数字艺术创作技能',
    teachingMethodLabel: '教学方式：',
    techSupportLabel: '技术支持：',
    featuresTitle: '教学方法与特色',
    featuresDesc: '创新教学模式，融合技术与艺术，培养面向未来的创新人才',
    outcomesTitle: '课程成果',
    outcomesDesc: '学生将通过课程学习，创作出多样化的数字艺术作品，展示在明日剧场平台上',
    highlightsTitle: '课程亮点',
    ctaTitle: '开启数字艺术学习之旅',
    ctaDesc: '选择适合您的课程，在明日剧场平台上探索数字艺术的无限可能',
    enrollCourse: '报名课程',
    courses: [
      {
        title: '元宇宙數字表演課程',
        subtitle: '戏剧、舞蹈 - 面向专业学习者',
        description: '16周专业课程，融合传统戏剧表演与数字虚拟表演技术',
        duration: '16周',
        hours: '48学时',
        target: '戲劇表演專業學生、表演藝術愛好者、多媒體藝術創作者',
        modules: ['數字戲劇表演基礎', '數字角色表演技巧', '跨時空協作創作', '數字戲劇作品創作'],
      },
      {
        title: '明日剧场·数字艺术设计课程',
        subtitle: '中小学 - AIGC+元宇宙',
        description: '未来创艺工坊：AIGC × 元宇宙的数字艺术之旅',
        duration: '5阶段',
        hours: '灵活安排',
        target: '中小学生',
        modules: ['认识数字艺术与元宇宙', '数字戏剧与AI角色创作', 'AI编舞与虚拟舞蹈体验', 'AI绘画、AI影像与线上策展', '元宇宙展演与互动'],
      },
    ],
    professionalModules: [
      { title: '模塊一：數字戲劇表演基礎', weeks: '第1-4周', topics: ['元宇宙與數字表演導論', '虛擬形象與表演身體', '動作捕捉基礎', '虛擬表演空間'] },
      { title: '模塊二：數字角色表演技巧', weeks: '第5-8周', topics: ['虛擬角色肢體表達', '虛擬角色情感表達', '虛擬角色交互表演', '中期呈現與評估'] },
      { title: '模塊三：跨時空協作創作', weeks: '第9-12周', topics: ['異地協同表演基礎', '數字劇場多媒體元素', '文化傳承與創新', 'AI與數字表演'] },
      { title: '模塊四：數字戲劇作品創作', weeks: '第13-16周', topics: ['數字戲劇創作構思', '數字戲劇排練（一）', '數字戲劇排練（二）', '數字戲劇作品展演'] },
    ],
    k12Stages: [
      { stage: '第一阶段', title: '认识数字艺术与元宇宙', method: '讲解+体验：进入明日剧场虚拟空间，了解AIGC与数字展演', tech: '明日剧场平台，AI绘图工具' },
      { stage: '第二阶段', title: '数字戏剧与AI角色创作', method: '使用AI生成角色、场景、对话，创作短剧本并进行虚拟排练', tech: 'ChatGPT对话、AI图像生成、数字舞台搭建' },
      { stage: '第三阶段', title: 'AI编舞与虚拟舞蹈体验', method: '学习虚拟身体控制，使用AI生成舞蹈动作，自主设计数字舞台舞蹈', tech: 'AI舞蹈生成、虚拟人动作捕捉（简易版）' },
      { stage: '第四阶段', title: 'AI绘画、AI影像与线上策展', method: '通过AIGC工具设计海报、人物、服饰、舞台场景设计，AI短剧创作，完成数字策展', tech: 'AI绘图及影像工具、3D场景搭建' },
      { stage: '第五阶段', title: '元宇宙展演与互动', method: '组织未来艺术节，学生在明日剧场元宇宙空间发布展览和表演，开展线上互动', tech: '明日剧场虚拟空间、多媒体互动' },
    ],
    features: [
      { title: '沈浸式學習體驗', description: '利用明日劇場平台多場景特性，讓學生在不同風格的虛擬劇場中學習表演' },
      { title: '技術與藝術融合', description: '結合傳統表演理論與數字技術應用，培養學生同時具備藝術表現力和技術操作能力' },
      { title: '跨地域協作教學', description: '邀請不同地區的表演藝術家通過平台進行遠程授課，組織跨地域合作表演項目' },
      { title: '多元評價體系', description: '過程性評價與作品評價相結合，包括課堂參與度、階段性練習、期末作品展演' },
    ],
    outcomes: [
      '数字戏剧 - 虚拟戏剧表演作品',
      '数字舞蹈 - AI编舞与虚拟舞蹈视频',
      'AIGC绘画+设计 - AI绘画与创意设计作品集',
      '元宇宙策展 - 明日剧场线上艺术展览',
      '小组合作与线上交流成果',
    ],
    highlights: [
      { title: '人人都能创造', description: '借助AI降低技术门槛，帮助所有学生轻松创作高质量作品' },
      { title: '跨空间互动', description: '支持不同学校、不同地区的学生在元宇宙空间合作、展示与交流' },
      { title: '融合传统文化', description: '鼓励学生用数字艺术重新演绎中华优秀传统故事，激发文化自信' },
    ],
  },
  'zh-TW': {
    heroTitle1: '課程體系',
    heroTitle2: 'AIGC+元宇宙數字藝術教育',
    heroDesc: '融合現代科技與藝術表演，構建全方位數字藝術教育生態',
    heroSubDesc: '戲劇、舞蹈、繪畫、設計四大方向，滿足不同學習需求',
    coursesTitle: '兩大課程體系',
    coursesDesc: '面向不同學習群體，提供專業化和普及化的數字藝術教育方案',
    durationLabel: '課程時長',
    hoursLabel: '學時安排',
    targetLabel: '適用對象',
    modulesLabel: '課程模塊：',
    learnMore: '了解詳情',
    professionalTitle: '元宇宙數字表演課程詳情',
    professionalDesc: '16週專業課程，四大模塊循序漸進，培養數字時代表演藝術人才',
    k12Title: '數字藝術設計課程詳情',
    k12Desc: '五個階段遞進式學習，讓中小學生輕鬆掌握數字藝術創作技能',
    teachingMethodLabel: '教學方式：',
    techSupportLabel: '技術支持：',
    featuresTitle: '教學方法與特色',
    featuresDesc: '創新教學模式，融合技術與藝術，培養面向未來的創新人才',
    outcomesTitle: '課程成果',
    outcomesDesc: '學生將通過課程學習，創作出多樣化的數字藝術作品，展示在明日劇場平台上',
    highlightsTitle: '課程亮點',
    ctaTitle: '開啟數字藝術學習之旅',
    ctaDesc: '選擇適合您的課程，在明日劇場平台上探索數字藝術的無限可能',
    enrollCourse: '報名課程',
    courses: [
      {
        title: '元宇宙數字表演課程',
        subtitle: '戲劇、舞蹈 - 面向專業學習者',
        description: '16週專業課程，融合傳統戲劇表演與數字虛擬表演技術',
        duration: '16週',
        hours: '48學時',
        target: '戲劇表演專業學生、表演藝術愛好者、多媒體藝術創作者',
        modules: ['數字戲劇表演基礎', '數字角色表演技巧', '跨時空協作創作', '數字戲劇作品創作'],
      },
      {
        title: '明日劇場·數字藝術設計課程',
        subtitle: '中小學 - AIGC+元宇宙',
        description: '未來創藝工坊：AIGC × 元宇宙的數字藝術之旅',
        duration: '5階段',
        hours: '靈活安排',
        target: '中小學生',
        modules: ['認識數字藝術與元宇宙', '數字戲劇與AI角色創作', 'AI編舞與虛擬舞蹈體驗', 'AI繪畫、AI影像與線上策展', '元宇宙展演與互動'],
      },
    ],
    professionalModules: [
      { title: '模塊一：數字戲劇表演基礎', weeks: '第1-4週', topics: ['元宇宙與數字表演導論', '虛擬形象與表演身體', '動作捕捉基礎', '虛擬表演空間'] },
      { title: '模塊二：數字角色表演技巧', weeks: '第5-8週', topics: ['虛擬角色肢體表達', '虛擬角色情感表達', '虛擬角色交互表演', '中期呈現與評估'] },
      { title: '模塊三：跨時空協作創作', weeks: '第9-12週', topics: ['異地協同表演基礎', '數字劇場多媒體元素', '文化傳承與創新', 'AI與數字表演'] },
      { title: '模塊四：數字戲劇作品創作', weeks: '第13-16週', topics: ['數字戲劇創作構思', '數字戲劇排練（一）', '數字戲劇排練（二）', '數字戲劇作品展演'] },
    ],
    k12Stages: [
      { stage: '第一階段', title: '認識數字藝術與元宇宙', method: '講解+體驗：進入明日劇場虛擬空間，了解AIGC與數字展演', tech: '明日劇場平台，AI繪圖工具' },
      { stage: '第二階段', title: '數字戲劇與AI角色創作', method: '使用AI生成角色、場景、對話，創作短劇本並進行虛擬排練', tech: 'ChatGPT對話、AI圖像生成、數字舞台搭建' },
      { stage: '第三階段', title: 'AI編舞與虛擬舞蹈體驗', method: '學習虛擬身體控制，使用AI生成舞蹈動作，自主設計數字舞台舞蹈', tech: 'AI舞蹈生成、虛擬人動作捕捉（簡易版）' },
      { stage: '第四階段', title: 'AI繪畫、AI影像與線上策展', method: '通過AIGC工具設計海報、人物、服飾、舞台場景設計，AI短劇創作，完成數字策展', tech: 'AI繪圖及影像工具、3D場景搭建' },
      { stage: '第五階段', title: '元宇宙展演與互動', method: '組織未來藝術節，學生在明日劇場元宇宙空間發布展覽和表演，開展線上互動', tech: '明日劇場虛擬空間、多媒體互動' },
    ],
    features: [
      { title: '沉浸式學習體驗', description: '利用明日劇場平台多場景特性，讓學生在不同風格的虛擬劇場中學習表演' },
      { title: '技術與藝術融合', description: '結合傳統表演理論與數字技術應用，培養學生同時具備藝術表現力和技術操作能力' },
      { title: '跨地域協作教學', description: '邀請不同地區的表演藝術家通過平台進行遠程授課，組織跨地域合作表演項目' },
      { title: '多元評價體系', description: '過程性評價與作品評價相結合，包括課堂參與度、階段性練習、期末作品展演' },
    ],
    outcomes: [
      '數字戲劇 - 虛擬戲劇表演作品',
      '數字舞蹈 - AI編舞與虛擬舞蹈視頻',
      'AIGC繪畫+設計 - AI繪畫與創意設計作品集',
      '元宇宙策展 - 明日劇場線上藝術展覽',
      '小組合作與線上交流成果',
    ],
    highlights: [
      { title: '人人都能創造', description: '借助AI降低技術門檻，幫助所有學生輕鬆創作高質量作品' },
      { title: '跨空間互動', description: '支持不同學校、不同地區的學生在元宇宙空間合作、展示與交流' },
      { title: '融合傳統文化', description: '鼓勵學生用數字藝術重新演繹中華優秀傳統故事，激發文化自信' },
    ],
  },
  'en': {
    heroTitle1: 'Course System',
    heroTitle2: 'AIGC+Metaverse Digital Art Education',
    heroDesc: 'Integrating modern technology and artistic performance to build a comprehensive digital art education ecosystem',
    heroSubDesc: 'Four directions: drama, dance, painting, design — meeting diverse learning needs',
    coursesTitle: 'Two Course Systems',
    coursesDesc: 'Professional and popularized digital art education for different learner groups',
    durationLabel: 'Duration',
    hoursLabel: 'Hours',
    targetLabel: 'Target Audience',
    modulesLabel: 'Course Modules:',
    learnMore: 'Learn More',
    professionalTitle: 'Metaverse Digital Performance Course Details',
    professionalDesc: '16-week professional course with four progressive modules training digital-age performers',
    k12Title: 'Digital Art Design Course Details',
    k12Desc: 'Five progressive stages helping K-12 students master digital art creation skills',
    teachingMethodLabel: 'Teaching Method:',
    techSupportLabel: 'Tech Support:',
    featuresTitle: 'Teaching Methods & Highlights',
    featuresDesc: 'Innovative teaching model integrating technology and art, cultivating future innovators',
    outcomesTitle: 'Course Outcomes',
    outcomesDesc: 'Students create diverse digital artworks displayed on the Theater of Tomorrow platform',
    highlightsTitle: 'Course Highlights',
    ctaTitle: 'Start Your Digital Art Learning Journey',
    ctaDesc: 'Choose your course and explore the infinite possibilities of digital art on the Theater of Tomorrow platform',
    enrollCourse: 'Enroll in a Course',
    courses: [
      {
        title: 'Metaverse Digital Performance Course',
        subtitle: 'Drama, Dance — for professional learners',
        description: '16-week professional course integrating traditional drama and digital virtual performance',
        duration: '16 weeks',
        hours: '48 hours',
        target: 'Drama/performance students, performing arts enthusiasts, multimedia art creators',
        modules: ['Digital Drama Performance Basics', 'Digital Character Acting Techniques', 'Cross-Temporal Collaborative Creation', 'Digital Drama Work Creation'],
      },
      {
        title: 'Theater of Tomorrow · Digital Art Design Course',
        subtitle: 'K-12 — AIGC+Metaverse',
        description: 'Future Creative Workshop: AIGC × Metaverse Digital Art Journey',
        duration: '5 stages',
        hours: 'Flexible',
        target: 'K-12 students',
        modules: ['Introduction to Digital Art & Metaverse', 'Digital Drama & AI Character Creation', 'AI Choreography & Virtual Dance', 'AI Painting, AI Video & Online Curation', 'Metaverse Performance & Interaction'],
      },
    ],
    professionalModules: [
      { title: 'Module 1: Digital Drama Performance Basics', weeks: 'Weeks 1–4', topics: ['Introduction to Metaverse & Digital Performance', 'Virtual Avatar & Performing Body', 'Motion Capture Basics', 'Virtual Performance Space'] },
      { title: 'Module 2: Digital Character Acting Techniques', weeks: 'Weeks 5–8', topics: ['Virtual Character Physical Expression', 'Virtual Character Emotional Expression', 'Virtual Character Interactive Performance', 'Mid-term Presentation & Evaluation'] },
      { title: 'Module 3: Cross-Temporal Collaborative Creation', weeks: 'Weeks 9–12', topics: ['Remote Collaborative Performance Basics', 'Digital Theater Multimedia Elements', 'Cultural Heritage & Innovation', 'AI & Digital Performance'] },
      { title: 'Module 4: Digital Drama Work Creation', weeks: 'Weeks 13–16', topics: ['Digital Drama Creative Concept', 'Digital Drama Rehearsal (I)', 'Digital Drama Rehearsal (II)', 'Digital Drama Work Showcase'] },
    ],
    k12Stages: [
      { stage: 'Stage 1', title: 'Introduction to Digital Art & Metaverse', method: 'Lecture + Experience: Enter ToT virtual space, learn about AIGC and digital performance', tech: 'Theater of Tomorrow platform, AI image tools' },
      { stage: 'Stage 2', title: 'Digital Drama & AI Character Creation', method: 'Use AI to generate characters, scenes, dialogue; create short scripts and do virtual rehearsals', tech: 'ChatGPT dialogue, AI image generation, digital stage design' },
      { stage: 'Stage 3', title: 'AI Choreography & Virtual Dance', method: 'Learn virtual body control, use AI-generated dance moves, design digital stage dances', tech: 'AI dance generation, virtual avatar motion capture (simplified)' },
      { stage: 'Stage 4', title: 'AI Painting, AI Video & Online Curation', method: 'Use AIGC tools to design posters, characters, costumes, stage scenes; create AI short films; complete digital curation', tech: 'AI image & video tools, 3D scene building' },
      { stage: 'Stage 5', title: 'Metaverse Performance & Interaction', method: 'Organize Future Art Festival; students publish exhibitions and performances in ToT metaverse space with online interaction', tech: 'ToT virtual space, multimedia interaction' },
    ],
    features: [
      { title: 'Immersive Learning Experience', description: 'Using ToT platform multi-scene features, students learn performance in different style virtual theaters' },
      { title: 'Technology & Art Integration', description: 'Combining traditional performance theory with digital technology, cultivating both artistic expression and technical skills' },
      { title: 'Cross-Regional Collaborative Teaching', description: 'Inviting performing artists from different regions for remote teaching, organizing cross-regional collaborative performance projects' },
      { title: 'Diverse Assessment System', description: 'Combining process evaluation and work evaluation: class participation, stage exercises, final performance' },
    ],
    outcomes: [
      'Digital Drama — virtual drama performance works',
      'Digital Dance — AI choreography and virtual dance videos',
      'AIGC Painting+Design — AI painting and creative design portfolio',
      'Metaverse Curation — ToT online art exhibition',
      'Group collaboration and online exchange outcomes',
    ],
    highlights: [
      { title: 'Everyone Can Create', description: 'AI lowers the technical barrier, helping all students create high-quality works' },
      { title: 'Cross-Space Interaction', description: 'Supporting students from different schools and regions to collaborate, showcase, and communicate in metaverse space' },
      { title: 'Integrating Traditional Culture', description: 'Encouraging students to reinterpret traditional Chinese stories with digital art, fostering cultural confidence' },
    ],
  },
};

const moduleIcons = [
  <BookOpen className="w-6 h-6 text-cyan-400" />,
  <Users className="w-6 h-6 text-purple-400" />,
  <Globe className="w-6 h-6 text-green-400" />,
  <Star className="w-6 h-6 text-yellow-400" />,
];

const k12Icons = [
  <Sparkles className="w-6 h-6 text-cyan-400" />,
  <Users className="w-6 h-6 text-purple-400" />,
  <Music className="w-6 h-6 text-pink-400" />,
  <Palette className="w-6 h-6 text-green-400" />,
  <Globe className="w-6 h-6 text-yellow-400" />,
];

const featureIcons = [
  <Brain className="w-8 h-8 text-cyan-400" />,
  <Zap className="w-8 h-8 text-purple-400" />,
  <Globe className="w-8 h-8 text-green-400" />,
  <Target className="w-8 h-8 text-yellow-400" />,
];

const highlightIcons = [
  <Sparkles className="w-6 h-6 text-cyan-400" />,
  <Globe className="w-6 h-6 text-purple-400" />,
  <Star className="w-6 h-6 text-yellow-400" />,
];

const courseColors = ['from-cyan-500 to-blue-600', 'from-purple-500 to-pink-600'];
const courseIcons = [
  <Users className="w-8 h-8 text-cyan-400" />,
  <Palette className="w-8 h-8 text-purple-400" />,
];

const CoursesPage = () => {
  const { language } = useLanguage();
  const { open: openEnroll } = useCourseEnroll();
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

      {/* Course Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.coursesTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.coursesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {c.courses.map((course, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${courseColors[index]} rounded-lg group-hover:scale-110 transition-transform`}>
                      {courseIcons[index]}
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-gray-400">{course.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{course.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{course.duration}</div>
                      <div className="text-gray-400 text-xs">{c.durationLabel}</div>
                    </div>
                    <div className="text-center">
                      <BookOpen className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{course.hours}</div>
                      <div className="text-gray-400 text-xs">{c.hoursLabel}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{c.targetLabel}</div>
                      <div className="text-gray-400 text-xs">{course.target}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-medium text-sm">{c.modulesLabel}</h4>
                    {course.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{module}</span>
                      </div>
                    ))}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Course Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.professionalTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.professionalDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.professionalModules.map((module, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {moduleIcons[index]}
                    <div>
                      <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                      <CardDescription className="text-gray-400">{module.weeks}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* K12 Course Details */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.k12Title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.k12Desc}
            </p>
          </div>

          <div className="space-y-6">
            {c.k12Stages.map((stage, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-3">
                      {k12Icons[index]}
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400 mb-2">
                        {stage.stage}
                      </Badge>
                      <h3 className="text-white font-semibold">{stage.title}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-gray-300 font-medium text-sm mb-1">{c.teachingMethodLabel}</h4>
                    <p className="text-gray-400 text-sm">{stage.method}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium text-sm mb-1">{c.techSupportLabel}</h4>
                    <p className="text-gray-400 text-sm">{stage.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.featuresTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.featuresDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-colors">
                  <div className="mb-4">{featureIcons[index]}</div>
                  <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {c.outcomesTitle}
              </h2>
              <p className="text-gray-400 mb-8">
                {c.outcomesDesc}
              </p>
              <div className="space-y-4">
                {c.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {c.highlightsTitle}
              </h2>
              <div className="space-y-6">
                {c.highlights.map((highlight, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-start space-x-3">
                      {highlightIcons[index]}
                      <div>
                        <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {c.ctaTitle}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {c.ctaDesc}
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-3"
              onClick={openEnroll}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              {c.enrollCourse}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
