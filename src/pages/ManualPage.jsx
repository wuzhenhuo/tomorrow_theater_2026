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
  Map,
  Upload,
  Play,
  Users,
  Zap,
  HelpCircle,
  X,
  ZoomIn
} from 'lucide-react';

// 导入图片
import tot001 from '../assets/images/TOT001.png';
import jiemian1 from '../assets/images/JIEMIAN1.png';
import tot003 from '../assets/images/TOT003.png';
import tot006 from '../assets/images/TOT006.png';
import tot007 from '../assets/images/TOT007.png';
import tot010 from '../assets/images/TOT010.png';
import tot017 from '../assets/images/TOT017.png';
import tot020 from '../assets/images/TOT020.png';

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
const ClickableImage = ({ src, alt, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('图片被点击:', alt);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`relative group cursor-pointer ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          点击放大
        </div>
      </div>
      <ImageModal
        src={src}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => {
          console.log('关闭模态框:', alt);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

const ManualPage = () => {
  const { open: openWaitlist } = useWaitlist();
  const characters = [
    {
      name: "电视机人",
      description: "可與攝像頭互動，支援自定義顏色",
      features: ["攝像頭互動", "自定義顏色", "實時面部捕捉"]
    },
    {
      name: "宇航員",
      description: "男、女角色可選",
      features: ["科幻風格", "性別選擇", "太空主題"]
    },
    {
      name: "卡通小狼人",
      description: "可愛卡通風格角色",
      features: ["卡通風格", "動物形象", "趣味互動"]
    }
  ];

  const devices = [
    {
      name: "Sony Mocopi",
      status: "推薦",
      description: "便攜式動作捕捉設備，適合家庭使用",
      badge: "推薦"
    },
    {
      name: "Azure Kinect",
      status: "推薦",
      description: "高精度動作捕捉，專業級體驗",
      badge: "推薦"
    },
    {
      name: "諾亦騰慣性動捕",
      status: "專業",
      description: "專業級慣性動作捕捉系統",
      badge: "專業"
    },
    {
      name: "青瞳光學動捕系統",
      status: "專業",
      description: "高精度光學動作捕捉系統",
      badge: "專業"
    }
  ];

  const areas = [
    {
      name: "藝術館區域",
      icon: <Upload className="w-6 h-6" />,
      description: "展示數字裝置與概念設計圖，可上傳圖片進行互動展示",
      features: ["虛擬美術館", "圖片上傳", "互動展示"],
      image: tot007
    },
    {
      name: "國際劇場區域",
      icon: <Play className="w-6 h-6" />,
      description: "五座風格各異的虛擬劇場，專為線上展演活動設置",
      features: ["多風格劇場", "咖啡吧社交", "影片上傳"],
      image: tot010
    },
    {
      name: "實驗劇場",
      icon: <Camera className="w-6 h-6" />,
      description: "兩角落設操控台，支援動作捕捉接口連接",
      features: ["操控台", "動捕接口", "實時畫面"],
      image: tot017
    },
    {
      name: "莎士比亞環形劇院",
      icon: <Users className="w-6 h-6" />,
      description: "舞台地倉與看台，可前往音樂時尚秀舞台和國風劇場",
      features: ["環形設計", "多層結構", "傳送門"],
      image: tot020
    }
  ];

  const steps = [
    {
      title: "軟體下載與安裝",
      description: "下載主程序安裝檔案和動捕設備接口模組",
      icon: <Download className="w-5 h-5" />,
      image: tot001
    },
    {
      title: "登入設定",
      description: "輸入姓名、選擇場景、填寫房間號、選擇角色",
      icon: <Settings className="w-5 h-5" />,
      image: jiemian1
    },
    {
      title: "操作介面",
      description: "學習快捷鍵操作和設置選單功能",
      icon: <Gamepad2 className="w-5 h-5" />,
      image: tot003
    },
    {
      title: "視角與場景互動",
      description: "切換視角、使用地圖導航、探索各個區域",
      icon: <Eye className="w-5 h-5" />,
      image: tot006
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                「明日劇場」
              </span>
              <br />
              線上專業版操作手冊
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              詳細的平台使用指南，支持多種動作捕捉設備，讓您輕鬆掌握虛擬表演技術
            </p>
          </div>
        </div>
      </section>

      {/* Character Selection */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              角色選擇與設備支援
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              「明日劇場」提供多款虛擬角色供選擇，支援電腦端與手機移動端操作
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {characters.map((character, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-center">{character.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-center">
                    {character.description}
                  </CardDescription>
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
            <h3 className="text-2xl font-semibold text-white mb-4">支持的動作捕捉設備</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <div key={index} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-white font-semibold">{device.name}</h4>
                  <Badge variant={device.status === "推薦" ? "default" : "secondary"} className="text-xs">
                    {device.badge}
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
              操作步驟與使用指南
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              四個簡單步驟，快速上手明日劇場平台
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ClickableImage
                    src={step.image}
                    alt={step.title}
                    className="mb-4"
                  />
                  <p className="text-gray-300 text-sm">點擊圖片可放大查看詳細內容</p>
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
              虛擬空間導覽
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              探索明日劇場的四大核心區域，每個區域都有獨特的功能和體驗
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      {area.icon}
                    </div>
                    <CardTitle className="text-white text-xl">{area.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ClickableImage
                    src={area.image}
                    alt={area.name}
                    className="mb-4"
                  />
                  <div className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs mt-3">點擊圖片可放大查看詳細內容</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Section */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Users className="w-6 h-6 mr-3 text-cyan-400" />
                  聯系我們
                </CardTitle>
                <CardDescription className="text-gray-400">
                  多種聯系方式，確保您能夠便捷地與我們取得聯系
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 插入pic3.png图片 */}
                <div className="mb-6">
                  <ClickableImage
                    src={pic3}
                    alt="明日劇場平台展示"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">技術支持: tot@alexzhenwu.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">客服熱線: +86 13810745684</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">在線客服: 週一至週五 9:00-18:00</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white mt-6">
                  立即聯系
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <HelpCircle className="w-6 h-6 mr-3 text-purple-400" />
                  常見問題
                </CardTitle>
                <CardDescription className="text-gray-400">
                  查看常見問題解答，快速解決使用中遇到的問題
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-white font-medium">如何連接動作捕捉設備？</h4>
                    <p className="text-gray-400 text-sm mt-1">請參考設備說明書進行連接，確保驅動程序已正確安裝</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-white font-medium">支持哪些操作系統？</h4>
                    <p className="text-gray-400 text-sm mt-1">支持 Windows 10/11、macOS 10.15+ 和 Android 8.0+</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-white font-medium">如何上傳自定義內容？</h4>
                    <p className="text-gray-400 text-sm mt-1">在藝術館區域點擊上傳按鈕，支持圖片和視頻格式</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white mt-6">
                  查看更多FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              立即下載體驗
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              開始您的虛擬表演之旅，探索數字藝術的無限可能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
                onClick={openWaitlist}
              >
                <Monitor className="w-5 h-5 mr-2" />
                電腦版體驗
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
                onClick={() => window.open('https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/android/TOT_v1.3.0.apk', '_blank')}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                下載移動版（安卓系統）
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManualPage;

