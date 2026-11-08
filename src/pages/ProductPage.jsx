import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useWaitlist } from '../context/WaitlistContext';

const products = {
  knowledge: {
    title: ['AI 知识库', 'AI 知識庫', 'AI Knowledge Hub'],
    intro: ['先从已有课程、论文和操作手册开始学习。智能问答正在规划中。', '從現有課程、論文和操作手冊開始學習。智能問答正在規劃中。', 'Explore existing courses, papers and guides. AI Q&A is planned.'],
  },
  dance: {
    title: ['舞蹈数据库 · DanceLab', '舞蹈資料庫 · DanceLab', 'DanceLab Motion Database'],
    intro: ['浏览已有 DanceLab 线上系统，了解动作资料如何用于分析与创作。', '瀏覽現有 DanceLab 線上系統，了解動作資料如何用於分析與創作。', 'Explore the existing DanceLab systems for motion analysis and creative work.'],
  },
  choreography: {
    title: ['AI 编舞', 'AI 編舞', 'AI Choreography'],
    intro: ['从一句动作描述开始，整理你的编舞需求。动作生成与剧场导入仍在开发中。', '從一句動作描述開始，整理編舞需求。動作生成與劇場匯入仍在開發中。', 'Start with a motion description. Motion generation and theater import are in development.'],
  },
};

export function ProductLinks() {
  const { language } = useLanguage();
  const i = language === 'en' ? 2 : language === 'zh-TW' ? 1 : 0;
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '18px 0' }}>{Object.entries(products).map(([key, p]) => <Link className="btn btn-secondary" key={key} to={`/products/${key}`}>{p.title[i]} →</Link>)}</div>;
}

export function VersionComparison() {
  const { language } = useLanguage();
  const en = language === 'en';
  const rows = en ? [
    ['Base', 'Individual exploration / teaching', 'See the Windows / Android downloads', 'Not released', 'Confirm per build'],
    ['Studio', 'Motion capture and rehearsal', 'Compatible capture hardware and computer; confirm with team', 'Not released', 'Confirm per build'],
    ['Pro', 'Institutional projects', 'Confirm engine, computer and capture setup with team', 'Not released', 'Confirm per project'],
  ] : [
    ['基础版 Base', '个人体验、教学入门', '参考 Windows / Android 下载说明', '尚未上线', '按具体版本确认'],
    ['工作室版 Studio', '动捕采集、排练创作', '配套动捕硬件及电脑，需与团队确认', '尚未上线', '按具体版本确认'],
    ['专业版 Pro', '院校、机构项目', '引擎、电脑配置与动捕方案需与团队确认', '尚未上线', '按项目确认'],
  ];
  return <section className="section"><div className="container"><h2 className="text-heading">{en ? 'Choose a version' : '版本选择与能力对照'}</h2><p className="text-body">{en ? 'Use this as a selection guide. Confirm build-specific requirements before downloading.' : '以下为选型指引，下载前请向团队确认具体版本配置与功能。2026 AI 系统独立开放预约。'}</p><div style={{ overflowX: 'auto', marginTop: 24 }}><table style={{ width: '100%', minWidth: 680, textAlign: 'left', borderCollapse: 'collapse' }}><thead><tr>{(en ? ['Version', 'Audience', 'Requirements', 'AI choreography', 'Motion export'] : ['版本', '适合人群', '设备要求', 'AI 编舞', '动作导出']).map(x => <th key={x} style={{ padding: 14, borderBottom: '1px solid var(--border-strong)' }}>{x}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((x, i) => <td key={i} style={{ padding: 14, borderBottom: '1px solid var(--border-strong)', color: 'var(--text-secondary)' }}>{x}</td>)}</tr>)}</tbody></table></div></div></section>;
}

export default function ProductPage({ product }) {
  const { language } = useLanguage();
  const { open: openWaitlist } = useWaitlist();
  const [query, setQuery] = useState('');
  const [prompt, setPrompt] = useState('');
  const en = language === 'en';
  const i = en ? 2 : language === 'zh-TW' ? 1 : 0;
  const p = products[product];
  const resources = en ? [['Digital art courses', '/courses'], ['Research papers', '/research'], ['Guides and learning resources', '/resources']] : [['数字艺术课程', '/courses'], ['学术研究与论文', '/research'], ['操作手册与学习资源', '/resources']];
  function downloadBrief() {
    const blob = new Blob([JSON.stringify({ description: prompt.trim(), status: 'brief-only; no motion generated', plannedWorkflow: ['motion inference', 'FBX export', 'retargeting', 'theater import'] }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'choreography-brief.json'; a.click(); URL.revokeObjectURL(url);
  }
  return <div style={{ paddingTop: 100 }}><section className="section"><div className="container" style={{ maxWidth: 960 }}><Link to="/">← {en ? 'Home' : '首页'}</Link><p className="text-label" style={{ marginTop: 28 }}>2026 · {en ? 'PRODUCT EXPLORER' : '产品探索'}</p><h1 className="text-heading" style={{ margin: '16px 0' }}>{p.title[i]}</h1><p className="text-body">{p.intro[i]}</p><ProductLinks />
    {product === 'knowledge' && <div className="card" style={{ padding: 28 }}><h2>{en ? 'Search learning resources' : '检索学习资源'}</h2><input aria-label={en ? 'Search resources' : '搜索资源'} value={query} onChange={e => setQuery(e.target.value)} placeholder={en ? 'Search courses, papers, guides' : '搜索课程、论文、手册'} style={{ width: '100%', padding: 12, margin: '20px 0', color: 'var(--text-primary)', background: 'var(--bg-surface)', border: '1px solid var(--border-strong)', borderRadius: 8 }} />{resources.filter(([title]) => title.toLowerCase().includes(query.toLowerCase())).map(([title, url]) => <p key={url} style={{ marginBottom: 16 }}><Link to={url}>{title} →</Link></p>)}{!resources.some(([title]) => title.toLowerCase().includes(query.toLowerCase())) && <p role="status">{en ? 'No matching resources.' : '没有匹配的资源，请尝试其他关键词。'}</p>}<p className="text-body">{en ? 'Currently links to published site resources. DanceLab data and AI answers are not connected yet.' : '目前连接本站已发布的课程、论文与手册；尚未接入 DanceLab 数据或 AI 问答服务。'}</p></div>}
    {product === 'dance' && <div className="card" style={{ padding: 28 }}><h2>{en ? 'Explore existing systems' : '进入已有系统'}</h2><p className="text-body" style={{ margin: '16px 0' }}>{en ? 'The project documents Reba dance heritage recordings. Dataset size, full genre list, downloadable formats and licensing are not yet published; ask the team before reuse or model training.' : '项目已收录热巴舞非遗传承者的舞蹈资料。数据总量、完整舞种目录、可下载格式及授权范围尚未公布；用于作品、课程或模型训练前，请向团队确认。'}</p><a className="btn btn-primary" href="https://www.dancelab.cn/#/index" target="_blank" rel="noreferrer">DanceLab ↗</a> <a className="btn btn-secondary" href="https://addressable-9gza33lieadc81da-1253337800.tcloudbaseapp.com/TOT/dancelab/0.5/index.html" target="_blank" rel="noreferrer">{en ? 'Legacy demo' : '历史体验版'} ↗</a><h3 style={{ marginTop: 28 }}>{en ? 'From reference to choreography' : '从资料到编舞'}</h3><p className="text-body">{en ? 'Browse reference → confirm permission and format → analyze motion → develop choreography → adapt to a theater avatar. Automatic transfer to AI choreography is not available yet.' : '浏览动作参考 → 确认授权与格式 → 分析动作 → 编舞创作 → 适配剧场角色。与 AI 编舞的自动数据打通尚未开放。'}</p></div>}
    {product === 'choreography' && <div className="card" style={{ padding: 28 }}><h2>{en ? 'Prepare a choreography brief' : '整理一句话编舞需求'}</h2><p className="text-body">{en ? 'Describe movement, rhythm and duration. This tool saves a brief; it does not generate animation or FBX.' : '描述动作、节奏和时长。此工具可保存创作需求，目前不生成动画或 FBX。'}</p><textarea aria-label={en ? 'Motion description' : '动作描述'} value={prompt} onChange={e => setPrompt(e.target.value)} maxLength={2000} rows={4} placeholder={en ? 'Turn slowly, raise both arms, then bow; 8 seconds.' : '缓慢转身，双臂抬起，最后鞠躬，持续 8 秒。'} style={{ width: '100%', padding: 12, margin: '20px 0', background: 'var(--bg-surface)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)', borderRadius: 8 }} /><button className="btn btn-secondary" disabled={!prompt.trim()} onClick={downloadBrief}>{en ? 'Save brief' : '保存创作需求'}</button><h3 style={{ marginTop: 28 }}>{en ? 'Planned workflow' : '计划中的创作路径'}</h3><p className="text-body">{en ? 'Text → HY-Motion inference → FBX → Blender / Unity / Unreal → theater avatar. A hosted inference service, compatible avatar and import validation are still required.' : '文字描述 → HY-Motion 推理 → FBX → Blender / Unity / Unreal → 剧场角色。仍需部署推理服务、适配角色骨架并完成导入验证。'}</p></div>}
    <div style={{ marginTop: 32 }}><button className="btn btn-primary" onClick={openWaitlist}>{en ? 'Join the 2026 waitlist' : '预约 2026 新系统'}</button><p className="text-body" style={{ marginTop: 16 }}>{en ? 'Launch date is not announced. The team will use your contact details for launch updates and trial arrangements when available.' : '上线日期尚未公布。预约信息供团队联系使用，后续将通知开放进度及可用的试用安排。'}</p></div></div></section></div>;
}
