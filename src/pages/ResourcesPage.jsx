import React, { useState, useEffect } from 'react';
import { useWaitlist } from '../context/WaitlistContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Download,
  Smartphone,
  Monitor,
  Camera,
  Gamepad2,
  Settings,
  Eye,
  Upload,
  Play,
  Users,
  X,
  ZoomIn,
  BookOpen,
  Code,
  ExternalLink,
  Palette,
  Video,
  Image,
  Sparkles,
  Globe,
  Wrench,
  Database,
  Award,
  Clock,
  Music,
  List
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// 导入图片
import tot001 from '../assets/images/TOT001.png';
import jiemian1 from '../assets/images/JIEMIAN1.png';
import tot003 from '../assets/images/TOT003.png';
import tot006 from '../assets/images/TOT006.png';
import tot007 from '../assets/images/TOT007.png';
import tot010 from '../assets/images/TOT010.png';
import tot017 from '../assets/images/TOT017.png';
import tot020 from '../assets/images/TOT020.png';
import dancelab01 from '../assets/images/dancelab01.png';
import dancelab02 from '../assets/images/dancelab02.png';
import dancelab03 from '../assets/images/dancelab03.JPG';
import digitalCreate from '../assets/images/DigitalCreate.jpg';

const pageContent = {
  'zh-CN': {
    heroTitle1: '资源中心',
    heroTitle2: '操作手册 · 学习资源 · AIGC工具 · 舞蹈动作数据库',
    heroDesc: '丰富的学习资源和专业工具，助力您的数字艺术创作之旅',
    manualTab: '操作手册',
    downloadManual: '操作手册下载',
    learningTab: '学习资源',
    aigcTab: 'AIGC工具',
    characterTitle: '角色选择与设备支持',
    characterDesc: '「明日剧场」提供多款虚拟角色供选择，支持电脑端与手机移动端操作',
    deviceSupportTitle: '支持的动作捕捉设备',
    stepsTitle: '操作步骤与使用指南',
    stepsDesc: '四个简单步骤，快速上手明日剧场平台',
    areasTitle: '虚拟空间导览',
    areasDesc: '探索明日剧场的四大核心区域，每个区域都有独特的功能和体验',
    clickToEnlarge: '点击图片可放大查看详细内容',
    booksTitle: '参考书目',
    booksDesc: '精选的理论著作，为您的学习提供坚实的理论基础',
    authorLabel: '作者：',
    publisherLabel: '出版：',
    techToolsTitle: '技术工具',
    techToolsDesc: '专业的创作工具和平台，支持您的数字表演创作实践',
    aigcToolsTitle: 'AIGC 设计工具',
    aigcToolsDescPre: '由 ',
    aigcToolsDescPost: ' 开发的AI驱动设计工具集',
    visitTool: '访问工具',
    downloadTitle: '立即下载体验',
    downloadDesc: '开始您的虚拟表演之旅，探索数字艺术的无限可能',
    pcVersion: '电脑版体验',
    androidVersion: '下载移动版（安卓系统）',
    characters: [
      { name: '电视机人', description: '可与摄像头互动，支持自定义颜色', features: ['摄像头互动', '自定义颜色', '实时面部捕捉'] },
      { name: '宇航员', description: '男、女角色可选', features: ['科幻风格', '性别选择', '太空主题'] },
      { name: '卡通小狼人', description: '可爱卡通风格角色', features: ['卡通风格', '动物形象', '趣味互动'] },
    ],
    devices: [
      { name: 'Sony Mocopi', status: '推荐', description: '便携式动作捕捉设备，适合家庭使用' },
      { name: 'Azure Kinect', status: '推荐', description: '高精度动作捕捉，专业级体验' },
      { name: '诺亦腾惯性动捕', status: '专业', description: '专业级惯性动作捕捉系统' },
      { name: '青瞳光学动捕系统', status: '专业', description: '高精度光学动作捕捉系统' },
    ],
    areas: [
      { name: '艺术馆区域', description: '展示数字装置与概念设计图，可上传图片进行互动展示', features: ['虚拟美术馆', '图片上传', '互动展示'] },
      { name: '国际剧场区域', description: '五座风格各异的虚拟剧场，专为线上展演活动设置', features: ['多风格剧场', '咖啡吧社交', '影片上传'] },
      { name: '实验剧场', description: '两角落设操控台，支持动作捕捉接口连接', features: ['操控台', '动捕接口', '实时画面'] },
      { name: '莎士比亚环形剧院', description: '舞台地仓与看台，可前往音乐时尚秀舞台和国风剧场', features: ['环形设计', '多层结构', '传送门'] },
    ],
    steps: [
      { title: '软件下载与安装', description: '下载主程序安装档案和动捕设备接口模组' },
      { title: '登录设定', description: '输入姓名、选择场景、填写房间号、选择角色' },
      { title: '操作界面', description: '学习快捷键操作和设置选单功能' },
      { title: '视角与场景互动', description: '切换视角、使用地图导航、探索各个区域' },
    ],
    books: [
      { id: 1, title: '数字艺术', author: '克里斯蒂安·保罗', publisher: '机械工业出版社2021年第3版', description: '全面介绍数字艺术的发展历程、技术基础和创作实践' },
      { id: 2, title: '虚拟艺术', author: '奥利弗·格劳', publisher: '清华大学出版社2007年版', description: '探讨虚拟现实技术在艺术创作中的应用和影响' },
      { id: 3, title: '文化、技术与社会中的身体', author: '克里斯·希林', publisher: '北京大学出版社2011年版', description: '分析身体在数字化社会中的角色和意义' },
      { id: 4, title: '元宇宙与数字世界的未来', author: '周晓鹏', publisher: '社会科学文献出版社2023年版', description: '深入解析元宇宙概念及其对未来社会的影响' },
      { id: 5, title: '空间叙事学', author: '龙迪勇', publisher: '生活·读书·新知三联书店2015版', description: '研究空间叙事的理论框架和实践方法' },
      { id: 6, title: '台湾数位表演与科技剧场', author: '邱志勇', publisher: '2023年', description: '台湾数字表演和科技剧场的发展历史与创作实践' },
    ],
    featuredBook: {
      title: '数字舞蹈创作与应用：AIGC·新媒体',
      author: '吴振',
      publisher: '中国纺织出版社2026年底出版',
      description: '本书系统介绍了数字舞蹈创作的理论基础、技术方法和实践应用，涵盖AIGC技术在新媒体艺术中的创新应用，为跨媒介数字展演创作提供全面的理论指导和实践参考。',
    },
    techTools: [
      { name: 'TouchDesigner (TD)', description: '实时交互多媒体内容的视觉编程环境', category: '创作工具' },
      { name: 'Theater for Tomorrow (ToT)', description: '集成现代技术的剧院平台', category: '表演平台' },
      { name: 'Unity3D (U3D)', description: '创建交互式3D和VR体验的游戏引擎', category: '开发引擎' },
    ],
    aigcTools: [
      { name: '明日剧场数智展演平台', description: '综合性数智展演平台', url: 'https://auqliwvr.manus.space/' },
      { name: 'AI产品设计师', description: 'AI驱动产品设计工具', url: 'https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/' },
      { name: 'AI视频设计师', description: 'AI视频生成和编辑工具', url: 'https://v0-modern-movie-generator-ui.vercel.app/' },
      { name: 'AI图像设计1', description: '基于Flux技术的图像生成', url: 'https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/' },
      { name: 'AI图像设计2', description: '专业AI图像创作平台', url: 'https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/' },
    ],
    dancedbTab: '舞蹈动作数据库',
    aigcWorksTab: 'AIGC作品',
    aigcWorks: [
      {
        title: '云海归雁',
        year: '2026',
        type: 'AI纪录电影',
        description: '一部以第一人称口述为线索的 AI 纪录电影。本片运用 AI 技术重构历史影像、声音与记忆碎片，在真实档案与生成影像之间建立张力，探索纪录片在技术变革时代中的新叙事可能。《云海归雁》既是一段个人回忆，也是一首关于思乡、信念与回归的挽歌。',
        bilibili: 'BV1YQPuzVErT',
        youtube: null,
        awards: [],
      },
      {
        title: '机器之心',
        year: '2025',
        type: 'AI影像',
        description: '',
        bilibili: 'BV1eUPuzLEej',
        youtube: 'https://www.youtube.com/watch?v=JKbDT1QDJ10&t=30s',
        awards: [
          '入选 2025 首届机器人与艺术设计双年展（北京）',
          'AI Film 3-AI Film and Art Festival，Arizona，2025',
          '入围第 25 届北京电影学院动画学院奖',
          '2025中国创新影像大赛AIGC影像创新赛道一等奖（专业组）',
        ],
      },
      {
        title: '生生不息',
        year: '2024',
        type: '数字光雕作品',
        description: '',
        bilibili: 'BV1S7PuziE8Y',
        youtube: 'https://www.youtube.com/watch?v=IaBH6mf-nmY',
        awards: [
          '入选 2024 深圳设计周南山分会场「邂逅」光影 90秒',
        ],
      },
    ],
    dancedbTitle: '"舞蹈数字动作库及分析系统Dance Lab"白皮书',
    dancedbSubtitle: '"舞蹈数字动作库及分析系统[Dance Lab]V1.0"及线上版本',
    dancedbCourseLabel: '课题来源',
    dancedbCourseValue: '2020年北京市科技类课题"基于光学运动捕捉技术的舞蹈动作分析和实时渲染研究——以藏族舞蹈为例"',
    dancedbIntro: '该项目以西藏藏族男子热巴舞蹈为例运用光学运动捕捉技术进行动作采集和分析舞蹈动作，并根据藏族舞蹈的特点创作虚拟角色和场景，搭建实时渲染系统，通过整合完成软件的编写。使其有利于舞蹈教学和编创，有利于数据的捕捉，演员的表演，内容的拓展。荣获2022年度中国电子视像行业协会科技创新奖-技术奖（中华人民共和国科学技术部备案）。',
    dancedbFrameworkTitle: '总体框架',
    dancedbFramework: [
      { number: '01', title: '动作数据采集与生物力学分析', content: '选取经国家级非物质文化遗产代表性藏族男子热巴舞蹈，邀请藏族非物质文化传承人采集动作数据，通过生物力学分析软件进行运动分析，将运动捕捉系统与测力台相连，进行力学分析，以图像和量化数据等方式呈现。用于在舞蹈教学中科学的纠正学生动作。' },
      { number: '02', title: '实时渲染系统与数字动作库', content: '结合光学运动捕捉技术和游戏引擎搭建符合民族舞蹈创作、教学要求的实时渲染系统，将捕捉的动作数据导入编写好的库中，编写成软件并作为模板。该软件除了能够捕捉民族舞蹈动作，在实时渲染系统中直观的体现（通过虚拟的角色和场景），也可以将捕捉好的动作数据加载给虚拟角色，进行动作回放，运动分析、力学分析数据也能够直观体现。' },
      { number: '03', title: 'VR沉浸式学习与数字出版', content: '运用信息技术使不同地域的观众也可以戴上VR眼镜在虚拟空间近距离观看学习民族舞蹈，著作权软件以数字出版物形式出版。' },
    ],
    dancedbTimelineTitle: '项目历程',
    dancedbTimeline: [
      { year: '2020', label: '课题立项', content: '北京市科技类课题"基于光学运动捕捉技术的舞蹈动作分析和实时渲染研究——以藏族舞蹈为例"正式立项。' },
      { year: '2021.7', label: '动作采集', content: '邀请西藏大学高原罗尔旦和桑嘎卓玛教授、非物质文化男子藏族热巴舞传承人索朗亚次，到北京舞蹈学院运动捕捉实验室完成藏族男子舞蹈动作的采集、捕捉、整理、分析、保存。' },
      { year: '2021', label: '软件研发', content: '研发"舞蹈数字动作库及分析系统—Dance Lab V1.0"，软著登字第8342332号，登记号：2021SR1619706。一期以数字出版物形式出版，同步搭建网络动作数据库，支持VR沉浸式学习。' },
      { year: '2022', label: '公司成立与线上版本', content: '完成线上版本"舞蹈动作信息管理系统Dance Lab V2.0"开发，与"明日剧场——线上数智展演平台"结合进行线上美育教学。', links: [
        { label: 'Dance Lab 线上版本', url: 'https://www.dancelab.cn/#/index' },
        { label: '明日剧场 · Dance Lab 体验版', url: 'https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/dancelab/0.5/index.html' },
      ] },
      { year: '2022+', label: '持续拓展', content: '使用3D高斯泼贱技术，增加AI数字人模块，开发DanceTeacher民族舞蹈数智教学系统，应用于线下美育教学。后续项目将持续采集新疆非遗舞蹈、安徽花鼓灯等更多非物质文化遗产舞蹈。' },
    ],
    dancedbContentTitle: '采集内容',
    dancedbPart1Title: '第一部分——仪式',
    dancedbPart1Items: ['一、洗礼', '二、敬灵', '三、热谐（念白）'],
    dancedbPart2Title: '第二部分——纯舞短句',
    dancedbPart2Items: ['四、恰嘎（三点鼓）', '五、蹦子三点鼓', '六、蹲转三点鼓', '七、六点鼓', '八、冈连（步态）九点鼓', '九、内外转圈九点鼓', '十、冈果（原地转圈）九点鼓', '十一、连三九点鼓'],
    dancedbPart3Title: '第三部分——传统短句',
    dancedbPart3Items: ['十二、古冬仓措（九点鼓节奏）', '十三、梅朵安羌姆', '十四、松梅丙羌姆'],
    dancedbSongsTitle: '8段唱词（均已申请著作权）',
    dancedbSongs: [
      '热巴"颂三界"（2020716-01）',
      '"吉祥道谢"扎西祝福（2020716-02、03）',
      '热巴"刀论"，米热热巴道歌（2020716-04）',
      '米热道歌（3个不同旋律），米热热巴与猎狗（2020716-05）',
      '热巴韵白（告语）无呼应，唱跳（2020716-06、07）',
      '热巴谐（歌舞）（2020716-08）',
    ],
    dancedbSoftwareReg: '软著登字第8342332号 | 登记号：2021SR1619706',
    dancedbVideoCaption: '「舞美动作数据库及分析」(DanceLab V1.0)系统',
    dancedbYoutubeBtn: 'YouTube',
    dancedbFrameworkImageCaption: '观看动作数据，点击动捕图标会出现用动捕设备驱动的数字人，进入交互学习模块，目前支持诺亦腾动捕',
    dancedbFrameworkImage2Caption: '《数字舞蹈创作》研究生课程上进行交互表演',
    dancedbFrameworkImage3Caption: '"AI 数字人模块"——数智舞蹈教学平台，按"T"键与数字人非遗舞蹈传承人语音对话',
  },
  'zh-TW': {
    heroTitle1: '資源中心',
    heroTitle2: '操作手冊 · 學習資源 · AIGC工具 · 舞蹈動作數據庫',
    heroDesc: '豐富的學習資源和專業工具，助力您的數字藝術創作之旅',
    manualTab: '操作手冊',
    downloadManual: '操作手冊下載',
    learningTab: '學習資源',
    aigcTab: 'AIGC工具',
    characterTitle: '角色選擇與設備支持',
    characterDesc: '「明日劇場」提供多款虛擬角色供選擇，支持電腦端與手機移動端操作',
    deviceSupportTitle: '支持的動作捕捉設備',
    stepsTitle: '操作步驟與使用指南',
    stepsDesc: '四個簡單步驟，快速上手明日劇場平台',
    areasTitle: '虛擬空間導覽',
    areasDesc: '探索明日劇場的四大核心區域，每個區域都有獨特的功能和體驗',
    clickToEnlarge: '點擊圖片可放大查看詳細內容',
    booksTitle: '參考書目',
    booksDesc: '精選的理論著作，為您的學習提供堅實的理論基礎',
    authorLabel: '作者：',
    publisherLabel: '出版：',
    techToolsTitle: '技術工具',
    techToolsDesc: '專業的創作工具和平台，支持您的數字表演創作實踐',
    aigcToolsTitle: 'AIGC 設計工具',
    aigcToolsDescPre: '由 ',
    aigcToolsDescPost: ' 開發的AI驅動設計工具集',
    visitTool: '訪問工具',
    downloadTitle: '立即下載體驗',
    downloadDesc: '開始您的虛擬表演之旅，探索數字藝術的無限可能',
    pcVersion: '電腦版體驗',
    androidVersion: '下載行動版（安卓系統）',
    characters: [
      { name: '電視機人', description: '可與攝像頭互動，支持自定義顏色', features: ['攝像頭互動', '自定義顏色', '實時面部捕捉'] },
      { name: '宇航員', description: '男、女角色可選', features: ['科幻風格', '性別選擇', '太空主題'] },
      { name: '卡通小狼人', description: '可愛卡通風格角色', features: ['卡通風格', '動物形象', '趣味互動'] },
    ],
    devices: [
      { name: 'Sony Mocopi', status: '推薦', description: '便攜式動作捕捉設備，適合家庭使用' },
      { name: 'Azure Kinect', status: '推薦', description: '高精度動作捕捉，專業級體驗' },
      { name: '諾亦騰慣性動捕', status: '專業', description: '專業級慣性動作捕捉系統' },
      { name: '青瞳光學動捕系統', status: '專業', description: '高精度光學動作捕捉系統' },
    ],
    areas: [
      { name: '藝術館區域', description: '展示數字裝置與概念設計圖，可上傳圖片進行互動展示', features: ['虛擬美術館', '圖片上傳', '互動展示'] },
      { name: '國際劇場區域', description: '五座風格各異的虛擬劇場，專為線上展演活動設置', features: ['多風格劇場', '咖啡吧社交', '影片上傳'] },
      { name: '實驗劇場', description: '兩角落設操控台，支持動作捕捉接口連接', features: ['操控台', '動捕接口', '實時畫面'] },
      { name: '莎士比亞環形劇院', description: '舞台地倉與看台，可前往音樂時尚秀舞台和國風劇場', features: ['環形設計', '多層結構', '傳送門'] },
    ],
    steps: [
      { title: '軟件下載與安裝', description: '下載主程序安裝檔案和動捕設備接口模組' },
      { title: '登錄設定', description: '輸入姓名、選擇場景、填寫房間號、選擇角色' },
      { title: '操作界面', description: '學習快捷鍵操作和設置選單功能' },
      { title: '視角與場景互動', description: '切換視角、使用地圖導航、探索各個區域' },
    ],
    books: [
      { id: 1, title: '數字藝術', author: '克里斯蒂安·保羅', publisher: '機械工業出版社2021年第3版', description: '全面介紹數字藝術的發展歷程、技術基礎和創作實踐' },
      { id: 2, title: '虛擬藝術', author: '奧利弗·格勞', publisher: '清華大學出版社2007年版', description: '探討虛擬現實技術在藝術創作中的應用和影響' },
      { id: 3, title: '文化、技術與社會中的身體', author: '克里斯·希林', publisher: '北京大學出版社2011年版', description: '分析身體在數字化社會中的角色和意義' },
      { id: 4, title: '元宇宙與數字世界的未來', author: '周曉鵬', publisher: '社會科學文獻出版社2023年版', description: '深入解析元宇宙概念及其對未來社會的影響' },
      { id: 5, title: '空間敘事學', author: '龍迪勇', publisher: '生活·讀書·新知三聯書店2015版', description: '研究空間敘事的理論框架和實踐方法' },
      { id: 6, title: '台灣數位表演與科技劇場', author: '邱志勇', publisher: '2023年', description: '台灣數字表演和科技劇場的發展歷史與創作實踐' },
    ],
    featuredBook: {
      title: '數字舞蹈創作與應用：AIGC·新媒體',
      author: '吳振',
      publisher: '中國紡織出版社2026年底出版',
      description: '本書系統介紹了數字舞蹈創作的理論基礎、技術方法和實踐應用，涵蓋AIGC技術在新媒體藝術中的創新應用，為跨媒介數字展演創作提供全面的理論指導和實踐參考。',
    },
    techTools: [
      { name: 'TouchDesigner (TD)', description: '實時交互多媒體內容的視覺編程環境', category: '創作工具' },
      { name: 'Theater for Tomorrow (ToT)', description: '集成現代技術的劇院平台', category: '表演平台' },
      { name: 'Unity3D (U3D)', description: '創建交互式3D和VR體驗的遊戲引擎', category: '開發引擎' },
    ],
    aigcTools: [
      { name: '明日劇場數智展演平台', description: '綜合性數智展演平台', url: 'https://auqliwvr.manus.space/' },
      { name: 'AI產品設計師', description: 'AI驅動產品設計工具', url: 'https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/' },
      { name: 'AI視頻設計師', description: 'AI視頻生成和編輯工具', url: 'https://v0-modern-movie-generator-ui.vercel.app/' },
      { name: 'AI圖像設計1', description: '基於Flux技術的圖像生成', url: 'https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/' },
      { name: 'AI圖像設計2', description: '專業AI圖像創作平台', url: 'https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/' },
    ],
    dancedbTab: '舞蹈動作數據庫',
    aigcWorksTab: 'AIGC作品',
    aigcWorks: [
      {
        title: '雲海歸雁',
        year: '2026',
        type: 'AI紀錄電影',
        description: '一部以第一人稱口述為線索的 AI 紀錄電影。本片運用 AI 技術重構歷史影像、聲音與記憶碎片，在真實檔案與生成影像之間建立張力，探索紀錄片在技術變革時代中的新敘事可能。《雲海歸雁》既是一段個人回憶，也是一首關於思鄉、信念與回歸的挽歌。',
        bilibili: 'BV1YQPuzVErT',
        youtube: null,
        awards: [],
      },
      {
        title: '機器之心',
        year: '2025',
        type: 'AI影像',
        description: '',
        bilibili: 'BV1eUPuzLEej',
        youtube: 'https://www.youtube.com/watch?v=JKbDT1QDJ10&t=30s',
        awards: [
          '入選 2025 首屆機器人與藝術設計雙年展（北京）',
          'AI Film 3-AI Film and Art Festival，Arizona，2025',
          '入圍第 25 屆北京電影學院動畫學院獎',
          '2025中國創新影像大賽AIGC影像創新賽道一等獎（專業組）',
        ],
      },
      {
        title: '生生不息',
        year: '2024',
        type: '數字光雕作品',
        description: '',
        bilibili: 'BV1S7PuziE8Y',
        youtube: 'https://www.youtube.com/watch?v=IaBH6mf-nmY',
        awards: [
          '入選 2024 深圳設計週南山分會場「邂逅」光影 90秒',
        ],
      },
    ],
    dancedbTitle: '"舞蹈數字動作庫及分析系統Dance Lab"白皮書',
    dancedbSubtitle: '"舞蹈數字動作庫及分析系統[Dance Lab]V1.0"及線上版本',
    dancedbCourseLabel: '課題來源',
    dancedbCourseValue: '2020年北京市科技類課題"基於光學運動捕捉技術的舞蹈動作分析和實時渲染研究——以藏族舞蹈為例"',
    dancedbIntro: '該項目以西藏藏族男子熱巴舞蹈為例運用光學運動捕捉技術進行動作採集和分析舞蹈動作，並根據藏族舞蹈的特點創作虛擬角色和場景，搭建實時渲染系統，通過整合完成軟件的編寫。使其有利於舞蹈教學和編創，有利於數據的捕捉，演員的表演，內容的拓展。榮獲2022年度中國電子視像行業協會科技創新獎-技術獎（中華人民共和國科學技術部備案）。',
    dancedbFrameworkTitle: '總體框架',
    dancedbFramework: [
      { number: '01', title: '動作數據採集與生物力學分析', content: '選取經國家級非物質文化遺產代表性藏族男子熱巴舞蹈，邀請藏族非物質文化傳承人採集動作數據，通過生物力學分析軟件進行運動分析，將運動捕捉系統與測力台相連，進行力學分析，以圖像和量化數據等方式呈現。用於在舞蹈教學中科學的糾正學生動作。' },
      { number: '02', title: '實時渲染系統與數字動作庫', content: '結合光學運動捕捉技術和遊戲引擎搭建符合民族舞蹈創作、教學要求的實時渲染系統，將捕捉的動作數據導入編寫好的庫中，編寫成軟件並作為模板。該軟件除了能夠捕捉民族舞蹈動作，在實時渲染系統中直觀的體現（通過虛擬的角色和場景），也可以將捕捉好的動作數據加載給虛擬角色，進行動作回放，運動分析、力學分析數據也能夠直觀體現。' },
      { number: '03', title: 'VR沉浸式學習與數字出版', content: '運用信息技術使不同地域的觀眾也可以戴上VR眼鏡在虛擬空間近距離觀看學習民族舞蹈，著作權軟件以數字出版物形式出版。' },
    ],
    dancedbTimelineTitle: '項目歷程',
    dancedbTimeline: [
      { year: '2020', label: '課題立項', content: '北京市科技類課題"基於光學運動捕捉技術的舞蹈動作分析和實時渲染研究——以藏族舞蹈為例"正式立項。' },
      { year: '2021.7', label: '動作採集', content: '邀請西藏大學高原羅爾旦和桑嘎卓瑪教授、非物質文化男子藏族熱巴舞傳承人索朗亞次，到北京舞蹈學院運動捕捉實驗室完成藏族男子舞蹈動作的採集、捕捉、整理、分析、保存。' },
      { year: '2021', label: '軟件研發', content: '研發"舞蹈數字動作庫及分析系統—Dance Lab V1.0"，軟著登字第8342332號，登記號：2021SR1619706。一期以數字出版物形式出版，同步搭建網絡動作數據庫，支持VR沉浸式學習。' },
      { year: '2022', label: '公司成立與線上版本', content: '完成線上版本"舞蹈動作信息管理系統Dance Lab V2.0"開發，與"明日劇場——線上數智展演平台"結合進行線上美育教學。', links: [
        { label: 'Dance Lab 線上版本', url: 'https://www.dancelab.cn/#/index' },
        { label: '明日劇場 · Dance Lab 體驗版', url: 'https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/dancelab/0.5/index.html' },
      ] },
      { year: '2022+', label: '持續拓展', content: '使用3D高斯潑賤技術，增加AI數字人模塊，開發DanceTeacher民族舞蹈數智教學系統，應用於線下美育教學。後續項目將持續採集新疆非遺舞蹈、安徽花鼓燈等更多非物質文化遺產舞蹈。' },
    ],
    dancedbContentTitle: '採集內容',
    dancedbPart1Title: '第一部分——儀式',
    dancedbPart1Items: ['一、洗禮', '二、敬靈', '三、熱諧（念白）'],
    dancedbPart2Title: '第二部分——純舞短句',
    dancedbPart2Items: ['四、恰嘎（三點鼓）', '五、蹦子三點鼓', '六、蹲轉三點鼓', '七、六點鼓', '八、岡連（步態）九點鼓', '九、內外轉圈九點鼓', '十、岡果（原地轉圈）九點鼓', '十一、連三九點鼓'],
    dancedbPart3Title: '第三部分——傳統短句',
    dancedbPart3Items: ['十二、古冬倉措（九點鼓節奏）', '十三、梅朵安羌姆', '十四、松梅丙羌姆'],
    dancedbSongsTitle: '8段唱詞（均已申請著作權）',
    dancedbSongs: [
      '熱巴"頌三界"（2020716-01）',
      '"吉祥道謝"扎西祝福（2020716-02、03）',
      '熱巴"刀論"，米熱熱巴道歌（2020716-04）',
      '米熱道歌（3個不同旋律），米熱熱巴與獵狗（2020716-05）',
      '熱巴韻白（告語）無呼應，唱跳（2020716-06、07）',
      '熱巴諧（歌舞）（2020716-08）',
    ],
    dancedbSoftwareReg: '軟著登字第8342332號 | 登記號：2021SR1619706',
    dancedbVideoCaption: '「舞美動作數據庫及分析」(DanceLab V1.0)系統',
    dancedbYoutubeBtn: 'YouTube',
    dancedbFrameworkImageCaption: '觀看動作數據，點擊動捕圖標會出現用動捕設備驅動的數字人，進入交互學習模塊，目前支持諾亦騰動捕',
    dancedbFrameworkImage2Caption: '《數字舞蹈創作》研究生課程上進行交互表演',
    dancedbFrameworkImage3Caption: '"AI 數字人模塊"——數智舞蹈教學平台，按"T"鍵與數字人非遺舞蹈傳承人語音對話',
  },
  'en': {
    heroTitle1: 'Resource Center',
    heroTitle2: 'Manual · Learning Resources · AIGC Tools · Motion Database',
    heroDesc: 'Rich learning resources and professional tools for your digital art creation journey',
    manualTab: 'Manual',
    downloadManual: 'Download Manual',
    learningTab: 'Learning Resources',
    aigcTab: 'AIGC Tools',
    characterTitle: 'Character Selection & Device Support',
    characterDesc: '"Theater of Tomorrow" offers multiple virtual characters, supporting PC and mobile operation',
    deviceSupportTitle: 'Supported Motion Capture Devices',
    stepsTitle: 'Operation Steps & User Guide',
    stepsDesc: 'Four simple steps to get started with Theater of Tomorrow',
    areasTitle: 'Virtual Space Tour',
    areasDesc: 'Explore the four core areas of Theater of Tomorrow, each with unique functions and experiences',
    clickToEnlarge: 'Click image to enlarge',
    booksTitle: 'Reference Books',
    booksDesc: 'Carefully selected theoretical works providing a solid theoretical foundation for your learning',
    authorLabel: 'Author: ',
    publisherLabel: 'Publisher: ',
    techToolsTitle: 'Technical Tools',
    techToolsDesc: 'Professional creation tools and platforms supporting your digital performance creation',
    aigcToolsTitle: 'AIGC Design Tools',
    aigcToolsDescPre: 'Professional AI design tools developed by ',
    aigcToolsDescPost: '',
    visitTool: 'Visit Tool',
    downloadTitle: 'Download & Experience Now',
    downloadDesc: 'Start your virtual performance journey and explore the infinite possibilities of digital art',
    pcVersion: 'PC Version',
    androidVersion: 'Download Mobile (Android)',
    characters: [
      { name: 'TV Head Character', description: 'Camera-interactive, supports custom colors', features: ['Camera Interaction', 'Custom Colors', 'Real-time Face Capture'] },
      { name: 'Astronaut', description: 'Male and female options available', features: ['Sci-Fi Style', 'Gender Selection', 'Space Theme'] },
      { name: 'Cartoon Werewolf', description: 'Cute cartoon-style character', features: ['Cartoon Style', 'Animal Character', 'Fun Interaction'] },
    ],
    devices: [
      { name: 'Sony Mocopi', status: 'Recommended', description: 'Portable motion capture device, suitable for home use' },
      { name: 'Azure Kinect', status: 'Recommended', description: 'High-precision motion capture, professional experience' },
      { name: 'Noitom Inertial MoCap', status: 'Professional', description: 'Professional inertial motion capture system' },
      { name: 'Chingmu Optical MoCap', status: 'Professional', description: 'High-precision optical motion capture system' },
    ],
    areas: [
      { name: 'Art Gallery Area', description: 'Display digital installations and concept designs, upload images for interactive display', features: ['Virtual Museum', 'Image Upload', 'Interactive Display'] },
      { name: 'International Theater Area', description: 'Five virtual theaters of different styles for online performances', features: ['Multi-Style Theaters', 'Cafe Social', 'Video Upload'] },
      { name: 'Experimental Theater', description: 'Control panels in corners with motion capture interface connections', features: ['Control Panel', 'MoCap Interface', 'Live Feed'] },
      { name: 'Shakespeare Globe Theater', description: 'Stage pit and stands, with access to music fashion show stage and classical theater', features: ['Circular Design', 'Multi-Level Structure', 'Teleportal'] },
    ],
    steps: [
      { title: 'Software Download & Installation', description: 'Download main program installer and motion capture device interface module' },
      { title: 'Login Settings', description: 'Enter name, select scene, fill in room number, choose character' },
      { title: 'Operation Interface', description: 'Learn keyboard shortcuts and settings menu functions' },
      { title: 'View & Scene Interaction', description: 'Switch views, use map navigation, explore various areas' },
    ],
    books: [
      { id: 1, title: '数字艺术', author: '克里斯蒂安·保罗', publisher: '机械工业出版社2021年第3版', description: 'A comprehensive introduction to the development history, technical foundations, and creative practices of digital art' },
      { id: 2, title: '虚拟艺术', author: '奥利弗·格劳', publisher: '清华大学出版社2007年版', description: 'Exploring the application and influence of virtual reality technology in artistic creation' },
      { id: 3, title: '文化、技术与社会中的身体', author: '克里斯·希林', publisher: '北京大学出版社2011年版', description: 'Analyzing the role and significance of the body in the digital society' },
      { id: 4, title: '元宇宙与数字世界的未来', author: '周晓鹏', publisher: '社会科学文献出版社2023年版', description: 'In-depth analysis of the metaverse concept and its impact on future society' },
      { id: 5, title: '空间叙事学', author: '龙迪勇', publisher: '生活·读书·新知三联书店2015版', description: 'Studying the theoretical framework and practical methods of spatial narrative' },
      { id: 6, title: '台湾数位表演与科技剧场', author: '邱志勇', publisher: '2023年', description: 'The development history and creative practices of digital performance and tech theater in Taiwan' },
    ],
    featuredBook: {
      title: 'Digital Dance Creation and Application: AIGC · New Media',
      author: 'Wu Zhen',
      publisher: 'China Textile Press, forthcoming late 2026',
      description: 'This book systematically introduces the theoretical foundations, technical methods, and practical applications of digital dance creation, covering innovative applications of AIGC technology in new media art, providing comprehensive theoretical guidance and practical reference for cross-media digital performance creation.',
    },
    techTools: [
      { name: 'TouchDesigner (TD)', description: 'Visual programming environment for real-time interactive multimedia content', category: 'Creation Tool' },
      { name: 'Theater for Tomorrow (ToT)', description: 'Theater platform integrating modern technology', category: 'Performance Platform' },
      { name: 'Unity3D (U3D)', description: 'Game engine for creating interactive 3D and VR experiences', category: 'Development Engine' },
    ],
    aigcTools: [
      { name: 'Theater of Tomorrow Smart Platform', description: 'Comprehensive smart performance platform', url: 'https://auqliwvr.manus.space/' },
      { name: 'AI Product Designer', description: 'AI-driven product design tool', url: 'https://v0-image-upload-app-lime-wuzhednhuo-1982.vercel.app/' },
      { name: 'AI Video Designer', description: 'AI video generation and editing tool', url: 'https://v0-modern-movie-generator-ui.vercel.app/' },
      { name: 'AI Image Designer 1', description: 'Flux-based AI image generation', url: 'https://flux-fal-openai-appgit-xcdjrcva2qcycdx42scnda.streamlit.app/' },
      { name: 'AI Image Designer 2', description: 'Professional AI image creation platform', url: 'https://app-flux-wuzhenhuo-2024-1982-1987.streamlit.app/' },
    ],
    dancedbTab: 'Motion Database',
    aigcWorksTab: 'AIGC Works',
    aigcWorks: [
      {
        title: 'Returning Geese Through the Cloud Sea',
        year: '2026',
        type: 'AI Documentary Film',
        description: 'An AI documentary film guided by first-person narration. Using AI technology to reconstruct historical images, sounds and memory fragments, the film builds tension between authentic archival footage and generated imagery, exploring new narrative possibilities for documentary in an era of technological transformation. It is both a personal memoir and an elegy about nostalgia, belief, and return.',
        bilibili: 'BV1YQPuzVErT',
        youtube: null,
        awards: [],
      },
      {
        title: 'Heart of the Machine',
        year: '2025',
        type: 'AI Film',
        description: '',
        bilibili: 'BV1eUPuzLEej',
        youtube: 'https://www.youtube.com/watch?v=JKbDT1QDJ10&t=30s',
        awards: [
          'Selected: 2025 Inaugural Robotics & Art Design Biennale (Beijing)',
          'AI Film 3 - AI Film and Art Festival, Arizona, 2025',
          'Nominated: 25th Beijing Film Academy Animation School Award',
          '1st Prize, AIGC Visual Innovation Track, 2025 China Creative Imaging Competition (Professional)',
        ],
      },
      {
        title: 'Endless Life',
        year: '2024',
        type: 'Digital Light Sculpture',
        description: '',
        bilibili: 'BV1S7PuziE8Y',
        youtube: 'https://www.youtube.com/watch?v=IaBH6mf-nmY',
        awards: [
          'Selected: 2024 Shenzhen Design Week Nanshan "Encounter" Light & Shadow 90s',
        ],
      },
    ],
    dancedbTitle: '"Dance Digital Motion Library & Analysis System — Dance Lab" White Paper',
    dancedbSubtitle: '"Dance Digital Motion Library & Analysis System [Dance Lab] V1.0" and Online Version',
    dancedbCourseLabel: 'Research Source',
    dancedbCourseValue: '2020 Beijing Science & Technology Research Project: "Dance Motion Analysis and Real-Time Rendering Based on Optical Motion Capture — Tibetan Dance as a Case Study"',
    dancedbIntro: 'Using Tibetan male Reba dance as a case study, this project employs optical motion capture to collect and analyze dance movements. Virtual characters and scenes are created based on Tibetan dance characteristics, with a real-time rendering system built through integrated software development. The system benefits dance teaching, data capture, performer training, and content expansion. Awarded the 2022 China Electronics and Imaging Industry Association Technology Innovation Award – Technical Award (registered with the Ministry of Science and Technology of the PRC).',
    dancedbFrameworkTitle: 'Overall Framework',
    dancedbFramework: [
      { number: '01', title: 'Motion Data Capture & Biomechanical Analysis', content: 'Using the nationally recognized intangible cultural heritage Tibetan male Reba dance, inheritors were invited to capture motion data. Biomechanical analysis software was used for motion analysis, with the capture system linked to a force plate for mechanical analysis, presented as images and quantified data to scientifically correct student movements in dance education.' },
      { number: '02', title: 'Real-Time Rendering System & Digital Motion Library', content: 'Combining optical motion capture with a game engine, a real-time rendering system was built for ethnic dance creation and education. Captured motion data was imported into the library software as templates. The system captures ethnic dance movements visualized through virtual characters and scenes, supports motion playback, and displays motion and mechanical analysis data intuitively.' },
      { number: '03', title: 'VR Immersive Learning & Digital Publication', content: 'Using information technology, audiences from different regions can wear VR headsets to observe and learn ethnic dances up close in virtual space. The copyrighted software is published as a digital publication.' },
    ],
    dancedbTimelineTitle: 'Project Milestones',
    dancedbTimeline: [
      { year: '2020', label: 'Project Approved', content: 'Beijing Science & Technology research project officially approved: "Dance Motion Analysis and Real-Time Rendering Based on Optical Motion Capture — Tibetan Dance as a Case Study".' },
      { year: 'Jul 2021', label: 'Motion Capture', content: 'Professors Gaoyuan Luo\'erdan and Sangga Zhuoma from Tibet University, along with Tibetan Reba dance inheritor Suolang Yaci, visited Beijing Dance Academy\'s motion capture lab to collect, capture, organize, analyze, and preserve Tibetan male dance movements.' },
      { year: '2021', label: 'Software Development', content: 'Developed "Dance Digital Motion Library & Analysis System — Dance Lab V1.0" (Software Copyright No. 8342332, Registration: 2021SR1619706). Phase one published as a digital publication; online motion database launched with VR immersive learning support.' },
      { year: '2022', label: 'Companies & Online Version', content: 'Completed "Dance Motion Information Management System Dance Lab V2.0", integrated with "Theater of Tomorrow" platform for online arts education.', links: [
        { label: 'Dance Lab Online', url: 'https://www.dancelab.cn/#/index' },
        { label: 'Theater of Tomorrow · Dance Lab Demo', url: 'https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/dancelab/0.5/index.html' },
      ] },
      { year: '2022+', label: 'Continued Expansion', content: 'Incorporating 3D Gaussian Splatting, adding AI digital human modules, and developing the DanceTeacher ethnic dance intelligent teaching system for offline arts education. Future projects will capture more intangible cultural heritage dances including Xinjiang and Anhui folk dances.' },
    ],
    dancedbContentTitle: 'Captured Content',
    dancedbPart1Title: 'Part I — Rituals',
    dancedbPart1Items: ['I. Baptism', 'II. Spirit Offering', 'III. Rexie (Spoken Verse)'],
    dancedbPart2Title: 'Part II — Pure Dance Phrases',
    dancedbPart2Items: ['IV. Qiaga (3-Beat Drum)', 'V. Bungee 3-Beat Drum', 'VI. Squat-Turn 3-Beat Drum', 'VII. 6-Beat Drum', 'VIII. Ganglian (Gait) 9-Beat Drum', 'IX. Inner-Outer Circle 9-Beat Drum', 'X. Gangguo (Spin in Place) 9-Beat Drum', 'XI. Liansa 9-Beat Drum'],
    dancedbPart3Title: 'Part III — Traditional Phrases',
    dancedbPart3Items: ['XII. Gudong Cangcuo (9-Beat Drum Rhythm)', 'XIII. Meiduo An Qiangmu', 'XIV. Songmei Bing Qiangmu'],
    dancedbSongsTitle: '8 Lyric Sections (All Copyrighted)',
    dancedbSongs: [
      'Reba "Ode to Three Realms" (2020716-01)',
      '"Auspicious Thanks" Zhaxi Blessing (2020716-02, 03)',
      'Reba "Knife Discourse", Mire Reba Dao Song (2020716-04)',
      'Mire Dao Song (3 melodies), Mire Reba & Hunting Dog (2020716-05)',
      'Reba Verse (Proclamation) Unresponsive, Song & Dance (2020716-06, 07)',
      'Reba Xie (Song & Dance) (2020716-08)',
    ],
    dancedbSoftwareReg: 'Copyright Reg. No. 8342332 | Registration: 2021SR1619706',
    dancedbVideoCaption: '"Dance Motion Database & Analysis" (DanceLab V1.0) System',
    dancedbYoutubeBtn: 'YouTube',
    dancedbFrameworkImageCaption: 'View motion data — clicking the motion capture icon reveals a digital avatar driven by a capture device. Enter the interactive learning module. Currently supports Noitom motion capture.',
    dancedbFrameworkImage2Caption: 'Interactive performance during the "Digital Dance Creation" postgraduate course.',
    dancedbFrameworkImage3Caption: '"AI Digital Human Module" — Smart Dance Teaching Platform. Press "T" to voice-chat with the AI intangible heritage dance inheritor.',
  },
};

// 图片放大组件
const ImageModal = ({ src, alt, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div className="relative max-w-6xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

// 可点击放大的图片组件
const ClickableImage = ({ src, alt, clickLabel, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`relative group cursor-pointer ${className}`} onClick={() => setIsModalOpen(true)}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
        />
        <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {clickLabel}
        </div>
      </div>
      <ImageModal
        src={src}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const areaIcons = [
  <Upload className="w-6 h-6" />,
  <Play className="w-6 h-6" />,
  <Camera className="w-6 h-6" />,
  <Users className="w-6 h-6" />,
];

const areaImages = [tot007, tot010, tot017, tot020];

const stepIcons = [
  <Download className="w-5 h-5" />,
  <Settings className="w-5 h-5" />,
  <Gamepad2 className="w-5 h-5" />,
  <Eye className="w-5 h-5" />,
];

const stepImages = [tot001, jiemian1, tot003, tot006];

const techToolIcons = [
  <Code className="w-6 h-6" />,
  <Globe className="w-6 h-6" />,
  <Wrench className="w-6 h-6" />,
];

const techToolColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-indigo-500 to-purple-500',
];

const aigcToolIcons = [
  <Globe className="w-6 h-6" />,
  <Palette className="w-6 h-6" />,
  <Video className="w-6 h-6" />,
  <Image className="w-6 h-6" />,
  <Sparkles className="w-6 h-6" />,
];

const aigcToolColors = [
  'from-purple-500 to-indigo-500',
  'from-cyan-500 to-blue-500',
  'from-pink-500 to-rose-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-red-500',
];

const ResourcesPage = () => {
  const { language } = useLanguage();
  const { open: openWaitlist } = useWaitlist();
  const c = pageContent[language] || pageContent['zh-CN'];

  const [activeTab, setActiveTab] = useState('manual');

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
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setActiveTab('manual')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'manual'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <Settings className="w-5 h-5 mr-2" />
              {c.manualTab}
            </Button>
            <Button
              onClick={() => setActiveTab('learning')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'learning'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              {c.learningTab}
            </Button>
            <Button
              onClick={() => setActiveTab('aigc')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'aigc'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {c.aigcTab}
            </Button>
            <Button
              onClick={() => setActiveTab('dancedb')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'dancedb'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <Database className="w-5 h-5 mr-2" />
              {c.dancedbTab}
            </Button>
            <Button
              onClick={() => setActiveTab('aigcworks')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'aigcworks'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <Palette className="w-5 h-5 mr-2" />
              {c.aigcWorksTab}
            </Button>
          </div>
        </div>
      </section>

      {/* Manual Tab */}
      {activeTab === 'manual' && (
        <>
          {/* Download Button */}
          <div className="flex justify-center py-6 bg-slate-900/60">
            <a
              href="https://drive.google.com/file/d/1BpsnvXR-vIRJ8rzXigsGRN3p6a71AoeQ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              {c.downloadManual}
            </a>
          </div>

          {/* Character Selection */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.characterTitle}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  {c.characterDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {c.characters.map((character, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-center">{character.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-center">{character.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {character.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{c.deviceSupportTitle}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {c.devices.map((device, index) => (
                  <div key={index} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-semibold">{device.name}</h4>
                      <Badge variant={device.status === '推荐' || device.status === '推薦' || device.status === 'Recommended' ? 'default' : 'secondary'} className="text-xs">
                        {device.status}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm">{device.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Operation Steps */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.stepsTitle}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  {c.stepsDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {c.steps.map((step, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                          {stepIcons[index]}
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                          <CardDescription className="text-gray-400">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ClickableImage src={stepImages[index]} alt={step.title} clickLabel={c.clickToEnlarge} className="mb-4" />
                      <p className="text-gray-300 text-sm">{c.clickToEnlarge}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Virtual Areas */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.areasTitle}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  {c.areasDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {c.areas.map((area, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                          {areaIcons[index]}
                        </div>
                        <CardTitle className="text-white text-xl">{area.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-400">{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ClickableImage src={areaImages[index]} alt={area.name} clickLabel={c.clickToEnlarge} className="mb-4" />
                      <div className="space-y-2">
                        {area.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
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
        </>
      )}

      {/* Learning Tab */}
      {activeTab === 'learning' && (
        <>
          {/* Reference Books */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.booksTitle}
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  {c.booksDesc}
                </p>
              </div>

              {/* Featured Book */}
              <div className="mb-12 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-2xl p-6">
                  <div className="flex-shrink-0 w-full md:w-48">
                    <ClickableImage src={digitalCreate} alt={c.featuredBook.title} className="rounded-xl shadow-lg shadow-purple-900/40" clickLabel="点击放大" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">{c.featuredBook.title}</h3>
                    <div className="space-y-1.5 mb-4">
                      <p className="text-sm text-gray-400"><span className="text-gray-300 font-medium">{c.authorLabel}</span>{c.featuredBook.author}</p>
                      <p className="text-sm text-gray-400"><span className="text-gray-300 font-medium">{c.publisherLabel}</span>{c.featuredBook.publisher}</p>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{c.featuredBook.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {c.books.map((book) => (
                  <Card key={book.id} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-2 text-xs">[{book.id}]</Badge>
                          <CardTitle className="text-white text-lg">{book.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-gray-400 text-sm">
                        <p><span className="font-semibold">{c.authorLabel}</span>{book.author}</p>
                        <p><span className="font-semibold">{c.publisherLabel}</span>{book.publisher}</p>
                        <p className="mt-3">{book.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Tools */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.techToolsTitle}
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  {c.techToolsDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {c.techTools.map((tool, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${techToolColors[index]} mb-6 text-white`}>
                        {techToolIcons[index]}
                      </div>
                      <Badge className="mb-2">{tool.category}</Badge>
                      <h3 className="text-xl font-bold text-white mb-4">{tool.name}</h3>
                      <p className="text-gray-400">{tool.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* AIGC Tab */}
      {activeTab === 'aigc' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {c.aigcToolsTitle}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                {c.aigcToolsDescPre}
                <span className="text-cyan-400">Theater of Tomorrow</span>
                {c.aigcToolsDescPost}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {c.aigcTools.map((tool, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${aigcToolColors[index]} flex-shrink-0`}>
                        {aigcToolIcons[index]}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg group-hover:text-cyan-400 transition-colors">
                          {tool.name}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                      onClick={() => window.open(tool.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {c.visitTool}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dance Motion Database Tab */}
      {activeTab === 'dancedb' && (
        <>
          {/* Title & Intro */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {c.dancedbTitle}
                </h2>
                <p className="text-lg text-cyan-400 mb-2">{c.dancedbSubtitle}</p>
                <div className="inline-block bg-slate-700/60 rounded-lg px-4 py-2 mb-6">
                  <span className="text-gray-400 text-sm">{c.dancedbCourseLabel}：</span>
                  <span className="text-gray-300 text-sm">{c.dancedbCourseValue}</span>
                </div>
                <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
                  {c.dancedbIntro}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-xl px-6 py-3">
                  <Award className="w-4 h-4 text-cyan-400 inline mr-2" />
                  <span className="text-cyan-300 text-sm font-mono">{c.dancedbSoftwareReg}</span>
                </div>
              </div>
            </div>
          </section>

          {/* DanceLab Video */}
          <section className="py-12 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-700 mb-5">
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1DTPjz4EmD&autoplay=0"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://www.youtube.com/watch?v=Bxsd9DFtGXQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 hover:bg-red-600/20 hover:border-red-500/60 transition-all duration-300 text-sm font-medium"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  {c.dancedbYoutubeBtn}
                </a>
                <p className="text-gray-400 text-sm">{c.dancedbVideoCaption}</p>
              </div>
            </div>
          </section>

          {/* Framework */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.dancedbFrameworkTitle}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {c.dancedbFramework.map((item, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {item.number}
                        </span>
                      </div>
                      <CardTitle className="text-white text-lg leading-snug">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div>
                  <ClickableImage
                    src={dancelab01}
                    alt="Dance Lab 动作数据交互界面"
                    clickLabel={c.clickToEnlarge}
                  />
                  <p className="text-center text-gray-400 text-sm mt-3 leading-relaxed">
                    {c.dancedbFrameworkImageCaption}
                  </p>
                </div>
                <div>
                  <ClickableImage
                    src={dancelab03}
                    alt="数字舞蹈创作研究生课程交互表演"
                    clickLabel={c.clickToEnlarge}
                  />
                  <p className="text-center text-gray-400 text-sm mt-3 leading-relaxed">
                    {c.dancedbFrameworkImage2Caption}
                  </p>
                </div>
                <div>
                  <ClickableImage
                    src={dancelab02}
                    alt="AI数字人模块数智舞蹈教学平台"
                    clickLabel={c.clickToEnlarge}
                  />
                  <p className="text-center text-gray-400 text-sm mt-3 leading-relaxed">
                    {c.dancedbFrameworkImage3Caption}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.dancedbTimelineTitle}
                </h2>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
                <div className="space-y-10">
                  {c.dancedbTimeline.map((item, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-slate-900/50 border border-slate-700 hover:border-purple-500/50 rounded-xl p-5 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-cyan-400 font-bold text-sm">{item.year}</span>
                          <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/30 text-xs">{item.label}</Badge>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                        {item.links && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.links.map((link, li) => (
                              <a
                                key={li}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 hover:text-cyan-300 px-3 py-1.5 rounded-full transition-all duration-200"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Collected Content */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.dancedbContentTitle}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Part 1 */}
                <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <List className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-white text-base">{c.dancedbPart1Title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {c.dancedbPart1Items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Part 2 */}
                <Card className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                        <List className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-white text-base">{c.dancedbPart2Title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {c.dancedbPart2Items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Part 3 + Songs */}
                <div className="space-y-8">
                  <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
                          <List className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-white text-base">{c.dancedbPart3Title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {c.dancedbPart3Items.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                          <Music className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-white text-base">{c.dancedbSongsTitle}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {c.dancedbSongs.map((song, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-orange-400 font-bold text-xs mt-0.5 flex-shrink-0">{idx + 1}.</span>
                            <span className="text-gray-300 text-sm">{song}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* AIGC Works Tab */}
      {activeTab === 'aigcworks' && (
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {c.aigcWorksTab}
              </h2>
            </div>

            <div className="space-y-16">
              {c.aigcWorks.map((work, index) => (
                <div key={index} className="border border-slate-700 rounded-2xl overflow-hidden bg-slate-900/50">
                  {/* Work Header */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-white">《{work.title}》</h3>
                      <span className="text-gray-400 text-sm">（{work.year}）</span>
                      <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs">{work.type}</Badge>
                    </div>
                    {work.description && (
                      <p className="text-gray-300 leading-relaxed text-sm mb-4">{work.description}</p>
                    )}
                    {work.awards.length > 0 && (
                      <div className="space-y-1 mb-4">
                        {work.awards.map((award, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{award}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Video */}
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://player.bilibili.com/player.html?bvid=${work.bilibili}&autoplay=0`}
                      allowFullScreen
                      className="w-full h-full"
                      style={{ border: 'none' }}
                    />
                  </div>

                  {/* YouTube Button */}
                  {work.youtube && (
                    <div className="flex justify-center py-5">
                      <a
                        href={work.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 hover:bg-red-600/20 hover:border-red-500/60 transition-all duration-300 text-sm font-medium"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Download Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {c.downloadTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {c.downloadDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
                onClick={openWaitlist}
              >
                <Monitor className="w-5 h-5 mr-2" />
                {c.pcVersion}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
                onClick={() => window.open('https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/android/TOT_v1.3.0.apk', '_blank')}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                {c.androidVersion}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
