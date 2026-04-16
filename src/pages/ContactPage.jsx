import React, { useState } from 'react';
import { useWaitlist } from '../context/WaitlistContext';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';
import pic5 from '../assets/images/pic5.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Users,
  MessageSquare,
  Globe,
  ExternalLink,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pageContent = {
  'zh-CN': {
    heroTitle1: '联系我们',
    heroTitle2: '开启数字艺术合作之旅',
    heroDesc: '欢迎与我们联系，探讨数字艺术教育、技术合作和文化创新的无限可能',
    heroSubDesc: '我们期待与您共同推动数字艺术事业的发展',
    contactInfoTitle: '联系方式',
    contactInfoDesc: '多种联系方式，确保您能够便捷地与我们取得联系',
    locationsTitle: '办公地点',
    locationsDesc: '我们在粤港澳大湾区设有多个办公地点，为您提供就近服务',
    cooperationTitle: '合作方式',
    cooperationDesc: '我们提供多种合作模式，满足不同机构和个人的合作需求',
    aigcTitle: 'AIGC 设计工具',
    aigcDescPre: '由 ',
    aigcDescPost: ' 开发的专业AI设计工具集',
    faqTitle: '常见问题',
    faqDesc: '以下是一些常见问题的解答，如有其他疑问请随时联系我们',
    ctaTitle: '立即开始合作',
    ctaDesc: '加入明日剧场生态，共同推动数字艺术教育和文化创新发展',
    sendEmail: '发送邮件咨询',
    callUs: '电话联系我们',
    tryNow: '新版本预约',
    contactInfo: [
      { title: '公司信息', details: ['明日剧场团队', '专注数字艺术与元宇宙技术', '北京师范大学未来设计学院种子基金支持'] },
      { title: '联系电话', details: ['(853) 66810358', '+86 13810745684', '工作时间：周一至周五 9:00-18:00', '紧急联系请发送邮件'] },
      { title: '电子邮箱', details: ['tot@alexzhenwu.com'] },
      { title: '办公地址', details: ['澳门特别行政区', '澳门青年创业孵化中心', '其他合作地点遍布粤港澳大湾区'] },
    ],
    locations: [
      { name: '澳门总部', address: '澳门青年创业孵化中心', description: '项目总部，负责整体运营和战略规划', status: '总部' },
      { name: '上海研发中心', address: '聚能湾国家级科技企业孵化中心', description: '技术研发和产品创新中心', status: '研发中心' },
      { name: '珠海学术中心', address: '北京师范大学未来设计美术馆', description: '学术研究和教育合作基地', status: '学术合作' },
      { name: '北京展示中心', address: '798深澜AI中心', description: '技术展示和文化推广中心', status: '展示中心' },
      { name: '广州科研中心', address: '香港科技大学霍英东研究院', description: '科技创新与人才培养合作基地', status: '科研合作' },
      { name: '北京AI创新中心', address: '中关村AI北纬社区', description: '人工智能技术应用与产业对接中心', status: '创新合作' },
    ],
    cooperationTypes: [
      { title: '教育合作', description: '与学校、培训机构合作开展数字艺术教育', features: ['课程开发', '师资培训', '学生交流', '设备支持'] },
      { title: '技术合作', description: '与科技公司、研究机构开展技术研发合作', features: ['联合研发', '技术授权', '专利申请', '成果转化'] },
      { title: '文化合作', description: '与文化机构合作推广数字艺术和传统文化', features: ['展览策划', '文化传承', '艺术创作', '国际交流'] },
    ],
    aigcTools: [
      { title: '明日剧场数智展演平台', description: '国内首个元宇宙虚拟剧场平台', url: 'https://auqliwvr.manus.space/' },
      { title: 'AI图像设计师', description: '智能产品设计和概念生成工具', url: 'https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/' },
      { title: 'AI视频设计师', description: '专业的AI视频生成和编辑工具', url: 'https://v0-modern-movie-generator-ui.vercel.app/' },
      { title: 'AI图像设计1', description: '基于Flux的智能图像生成工具', url: 'https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/' },
      { title: 'AI图像设计2', description: '高级AI图像创作和编辑平台', url: 'https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/' },
    ],
    faqs: [
      { q: '如何开始与明日剧场的合作？', a: '您可以通过邮件、电话或在线留言的方式联系我们。我们会根据您的具体需求，安排专业团队与您详细沟通，制定合适的合作方案。' },
      { q: '明日剧场平台支持哪些设备？', a: '平台支持多种设备，包括PC端、移动端，以及各类动作捕捉设备如Azure Kinect、Sony Mocopi等。我们会根据您的具体需求推荐最适合的设备配置。' },
      { q: '是否提供技术培训和支持？', a: '是的，我们提供完整的技术培训和持续的技术支持服务。包括平台使用培训、设备操作指导、课程开发支持等，确保合作伙伴能够顺利使用我们的平台。' },
      { q: '合作的费用如何计算？', a: '我们提供灵活的合作模式和定价方案，会根据合作规模、使用需求、服务内容等因素制定个性化的报价。请联系我们获取详细的报价信息。' },
    ],
  },
  'zh-TW': {
    heroTitle1: '聯繫我們',
    heroTitle2: '開啟數字藝術合作之旅',
    heroDesc: '歡迎與我們聯繫，探討數字藝術教育、技術合作和文化創新的無限可能',
    heroSubDesc: '我們期待與您共同推動數字藝術事業的發展',
    contactInfoTitle: '聯絡方式',
    contactInfoDesc: '多種聯繫方式，確保您能夠便捷地與我們取得聯繫',
    locationsTitle: '辦公地點',
    locationsDesc: '我們在粵港澳大灣區設有多個辦公地點，為您提供就近服務',
    cooperationTitle: '合作方式',
    cooperationDesc: '我們提供多種合作模式，滿足不同機構和個人的合作需求',
    aigcTitle: 'AIGC 設計工具',
    aigcDescPre: '由 ',
    aigcDescPost: ' 開發的專業AI設計工具集',
    faqTitle: '常見問題',
    faqDesc: '以下是一些常見問題的解答，如有其他疑問請隨時聯繫我們',
    ctaTitle: '立即開始合作',
    ctaDesc: '加入明日劇場生態，共同推動數字藝術教育和文化創新發展',
    sendEmail: '發送郵件諮詢',
    callUs: '電話聯繫我們',
    tryNow: '新版本預約',
    contactInfo: [
      { title: '公司信息', details: ['澳門未來視野科技有限公司', '專注數字藝術與元宇宙技術', '北京師範大學未來設計學院種子基金支持'] },
      { title: '聯繫電話', details: ['(853) 66810358', '+86 13810745684', '工作時間：周一至周五 9:00-18:00', '緊急聯繫請發送郵件'] },
      { title: '電子郵箱', details: ['tot@alexzhenwu.com'] },
      { title: '辦公地址', details: ['澳門特別行政區', '澳門青年創業孵化中心', '其他合作地點遍布粵港澳大灣區'] },
    ],
    locations: [
      { name: '澳門總部', address: '澳門青年創業孵化中心', description: '項目總部，負責整體運營和戰略規劃', status: '總部' },
      { name: '上海研發中心', address: '聚能灣國家級科技企業孵化中心', description: '技術研發和產品創新中心', status: '研發中心' },
      { name: '珠海學術中心', address: '北京師範大學未來設計美術館', description: '學術研究和教育合作基地', status: '學術合作' },
      { name: '北京展示中心', address: '798深瀾AI中心', description: '技術展示和文化推廣中心', status: '展示中心' },
      { name: '廣州科研中心', address: '香港科技大學霍英東研究院', description: '科技創新與人才培養合作基地', status: '科研合作' },
      { name: '北京AI創新中心', address: '中關村AI北緯社區', description: '人工智能技術應用與產業對接中心', status: '創新合作' },
    ],
    cooperationTypes: [
      { title: '教育合作', description: '與學校、培訓機構合作開展數字藝術教育', features: ['課程開發', '師資培訓', '學生交流', '設備支持'] },
      { title: '技術合作', description: '與科技公司、研究機構開展技術研發合作', features: ['聯合研發', '技術授權', '專利申請', '成果轉化'] },
      { title: '文化合作', description: '與文化機構合作推廣數字藝術和傳統文化', features: ['展覽策劃', '文化傳承', '藝術創作', '國際交流'] },
    ],
    aigcTools: [
      { title: '明日劇場數智展演平台', description: '國內首個元宇宙虛擬劇場平台', url: 'https://auqliwvr.manus.space/' },
      { title: 'AI圖像設計師', description: '智能產品設計和概念生成工具', url: 'https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/' },
      { title: 'AI視頻設計師', description: '專業的AI視頻生成和編輯工具', url: 'https://v0-modern-movie-generator-ui.vercel.app/' },
      { title: 'AI圖像設計1', description: '基於Flux的智能圖像生成工具', url: 'https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/' },
      { title: 'AI圖像設計2', description: '高級AI圖像創作和編輯平台', url: 'https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/' },
    ],
    faqs: [
      { q: '如何開始與明日劇場的合作？', a: '您可以通過郵件、電話或在線留言的方式聯繫我們。我們會根據您的具體需求，安排專業團隊與您詳細溝通，制定合適的合作方案。' },
      { q: '明日劇場平台支持哪些設備？', a: '平台支持多種設備，包括PC端、移動端，以及各類動作捕捉設備如Azure Kinect、Sony Mocopi等。我們會根據您的具體需求推薦最適合的設備配置。' },
      { q: '是否提供技術培訓和支持？', a: '是的，我們提供完整的技術培訓和持續的技術支持服務。包括平台使用培訓、設備操作指導、課程開發支持等，確保合作夥伴能夠順利使用我們的平台。' },
      { q: '合作的費用如何計算？', a: '我們提供靈活的合作模式和定價方案，會根據合作規模、使用需求、服務內容等因素制定個性化的報價。請聯繫我們獲取詳細的報價信息。' },
    ],
  },
  'en': {
    heroTitle1: 'Contact Us',
    heroTitle2: 'Start Your Digital Art Collaboration Journey',
    heroDesc: 'Welcome to contact us to explore the infinite possibilities of digital art education, technology cooperation, and cultural innovation',
    heroSubDesc: 'We look forward to advancing digital art with you',
    contactInfoTitle: 'Contact Information',
    contactInfoDesc: 'Multiple contact methods to ensure convenient communication',
    locationsTitle: 'Office Locations',
    locationsDesc: 'We have multiple office locations in the Greater Bay Area to serve you',
    cooperationTitle: 'Cooperation Types',
    cooperationDesc: 'We offer multiple cooperation models to meet the needs of different institutions and individuals',
    aigcTitle: 'AIGC Design Tools',
    aigcDescPre: 'Professional AI design tools developed by ',
    aigcDescPost: '',
    faqTitle: 'FAQ',
    faqDesc: 'Answers to common questions. Contact us for other inquiries',
    ctaTitle: 'Start Collaboration Now',
    ctaDesc: 'Join the Theater of Tomorrow ecosystem to advance digital art education and cultural innovation',
    sendEmail: 'Send Email Inquiry',
    callUs: 'Call Us',
    tryNow: 'Join Waitlist',
    contactInfo: [
      { title: 'Company Info', details: ['Future Vision Technology (Macao) Co., Ltd.', 'Focused on digital art and metaverse technology', 'Supported by BNU Future Design School Seed Fund'] },
      { title: 'Contact Phone', details: ['(853) 66810358', '+86 13810745684', 'Business hours: Mon–Fri 9:00–18:00', 'For urgent inquiries please send email'] },
      { title: 'Email', details: ['tot@alexzhenwu.com'] },
      { title: 'Office Address', details: ['Macao Special Administrative Region', 'Macao Youth Entrepreneurship Incubation Center', 'Other cooperation locations throughout the Greater Bay Area'] },
    ],
    locations: [
      { name: 'Macao Headquarters', address: 'Macao Youth Entrepreneurship Incubation Center', description: 'Project headquarters, responsible for overall operations and strategic planning', status: 'Headquarters' },
      { name: 'Shanghai R&D Center', address: 'Juneng Bay National Tech Enterprise Incubation Center', description: 'Technology R&D and product innovation center', status: 'R&D Center' },
      { name: 'Zhuhai Academic Center', address: 'BNU Future Design Art Museum', description: 'Academic research and education cooperation base', status: 'Academic Partner' },
      { name: 'Beijing Exhibition Center', address: '798 Shenlan AI Center', description: 'Technology exhibition and cultural promotion center', status: 'Exhibition Center' },
      { name: 'Guangzhou Research Center', address: 'HKUST Fok Ying Tung Research Institute', description: 'Tech innovation and talent cultivation cooperation base', status: 'Research Partner' },
      { name: 'Beijing AI Innovation Center', address: 'Zhongguancun AI Latitude Community', description: 'AI technology application and industry matching center', status: 'Innovation Partner' },
    ],
    cooperationTypes: [
      { title: 'Educational Cooperation', description: 'Collaborating with schools and training institutions on digital art education', features: ['Curriculum Development', 'Faculty Training', 'Student Exchange', 'Equipment Support'] },
      { title: 'Technology Cooperation', description: 'Technical R&D collaboration with tech companies and research institutions', features: ['Joint R&D', 'Tech Licensing', 'Patent Application', 'Tech Transfer'] },
      { title: 'Cultural Cooperation', description: 'Collaborating with cultural institutions to promote digital art and traditional culture', features: ['Exhibition Planning', 'Cultural Heritage', 'Artistic Creation', 'International Exchange'] },
    ],
    aigcTools: [
      { title: 'Theater of Tomorrow Smart Platform', description: "China's first metaverse virtual theater platform", url: 'https://auqliwvr.manus.space/' },
      { title: 'AI Image Designer', description: 'Intelligent product design and concept generation tool', url: 'https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/' },
      { title: 'AI Video Designer', description: 'Professional AI video generation and editing tool', url: 'https://v0-modern-movie-generator-ui.vercel.app/' },
      { title: 'AI Image Designer 1', description: 'Flux-based intelligent image generation tool', url: 'https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/' },
      { title: 'AI Image Designer 2', description: 'Advanced AI image creation and editing platform', url: 'https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/' },
    ],
    faqs: [
      { q: 'How do I start cooperating with Theater of Tomorrow?', a: 'You can contact us via email, phone, or online message. We will arrange a professional team to discuss your needs in detail and develop an appropriate cooperation plan.' },
      { q: 'What devices does the Theater of Tomorrow platform support?', a: 'The platform supports multiple devices including PC, mobile, and various motion capture devices such as Azure Kinect and Sony Mocopi. We recommend the most suitable device configuration based on your specific needs.' },
      { q: 'Is technical training and support provided?', a: 'Yes, we provide complete technical training and ongoing technical support, including platform usage training, device operation guidance, and curriculum development support, ensuring partners can use our platform smoothly.' },
      { q: 'How is cooperation priced?', a: 'We offer flexible cooperation models and pricing plans based on cooperation scale, usage needs, and service content. Please contact us for detailed pricing information.' },
    ],
  },
};

const contactIcons = [
  <Building className="w-6 h-6 text-cyan-400" />,
  <Phone className="w-6 h-6 text-purple-400" />,
  <Mail className="w-6 h-6 text-green-400" />,
  <MapPin className="w-6 h-6 text-yellow-400" />,
];

const locationIcons = [
  <Building className="w-5 h-5 text-cyan-400" />,
  <Users className="w-5 h-5 text-purple-400" />,
  <Globe className="w-5 h-5 text-green-400" />,
  <MessageSquare className="w-5 h-5 text-yellow-400" />,
  <Globe className="w-5 h-5 text-blue-400" />,
  <Users className="w-5 h-5 text-orange-400" />,
];

const cooperationIcons = [
  <Users className="w-8 h-8 text-cyan-400" />,
  <Globe className="w-8 h-8 text-purple-400" />,
  <MessageSquare className="w-8 h-8 text-green-400" />,
];

const aigcToolIcons = [
  <Globe className="w-6 h-6 text-cyan-400" />,
  <Users className="w-6 h-6 text-purple-400" />,
  <MessageSquare className="w-6 h-6 text-green-400" />,
  <ExternalLink className="w-6 h-6 text-yellow-400" />,
  <ExternalLink className="w-6 h-6 text-pink-400" />,
];

const heroImages = [pic3, pic4, pic5];

const ContactPage = () => {
  const { language } = useLanguage();
  const { open: openWaitlist } = useWaitlist();
  const c = pageContent[language] || pageContent['zh-CN'];
  const [imgIndex, setImgIndex] = useState(0);
  const prevImg = () => setImgIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  const nextImg = () => setImgIndex((i) => (i + 1) % heroImages.length);

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

      {/* Hero Image Carousel */}
      <section style={{ background: 'var(--bg-base)', padding: '0 0 8px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative' }}>
          {/* Gradient fades */}
          <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '28%', background: 'linear-gradient(to right, var(--bg-base), transparent)', zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '28%', background: 'linear-gradient(to left, var(--bg-base), transparent)', zIndex: 1, pointerEvents: 'none' }} />

          {/* Image */}
          <img
            src={heroImages[imgIndex]}
            alt={c.heroTitle1}
            className="w-1/2 h-auto object-cover mx-auto"
            style={{ display: 'block', transition: 'opacity 0.3s ease' }}
          />

          {/* Prev / Next buttons */}
          <button
            onClick={prevImg}
            style={{
              position: 'absolute', left: '4%', top: '50%', transform: 'translateY(-50%)',
              zIndex: 2, background: 'var(--bg-card)', border: '1px solid var(--border-strong)',
              borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextImg}
            style={{
              position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)',
              zIndex: 2, background: 'var(--bg-card)', border: '1px solid var(--border-strong)',
              borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                style={{
                  width: i === imgIndex ? 18 : 6, height: 6,
                  borderRadius: 3, border: 'none', cursor: 'pointer',
                  background: i === imgIndex ? 'var(--accent)' : 'var(--border-strong)',
                  transition: 'all 0.2s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.contactInfoTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.contactInfoDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.contactInfo.map((info, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-slate-800 rounded-lg w-fit">
                    {contactIcons[index]}
                  </div>
                  <CardTitle className="text-white text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.locationsTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.locationsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.locations.map((location, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                      {locationIcons[index]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                          {location.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg">{location.name}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {location.address}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Types */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.cooperationTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.cooperationDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.cooperationTypes.map((type, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-slate-800 rounded-lg w-fit">
                    {cooperationIcons[index]}
                  </div>
                  <CardTitle className="text-white text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-400 mb-6">
                    {type.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AIGC Design Tools Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.aigcTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {c.aigcDescPre}
              <span className="text-cyan-400">Theater of Tomorrow</span>
              {c.aigcDescPost}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.aigcTools.map((tool, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {aigcToolIcons[index]}
                    </div>
                    <CardTitle className="text-white text-lg">{tool.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                    onClick={openWaitlist}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {c.tryNow}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.faqTitle}
            </h2>
            <p className="text-xl text-gray-400">
              {c.faqDesc}
            </p>
          </div>

          <div className="space-y-6">
            {c.faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
              onClick={() => window.location.href = 'mailto:tot@alexzhenwu.com?subject=合作咨询&body=您好，我想咨询关于明日剧场的合作事宜。'}
            >
              <Mail className="w-5 h-5 mr-2" />
              {c.sendEmail}
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3"
              onClick={() => window.open('https://wa.me/85366810358', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              {c.callUs}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
