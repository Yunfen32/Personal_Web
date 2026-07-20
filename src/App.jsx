import React, { useMemo, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  Copy,
  ExternalLink,
  Film,
  Github,
  Image as ImageIcon,
  Maximize2,
  Network,
  Play,
  PlayCircle,
  Sparkles,
  TerminalSquare,
  WandSparkles,
  X,
} from 'lucide-react';

const navItems = [
  { href: '#hero', label: 'Hero' },
  { href: '#mini-series', label: 'Mini-Series' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#skills', label: 'Skills' },
  { href: '#workflows', label: 'Workflows' },
  { href: '#vibe-coding', label: 'Vibe-Coding' },
];

const series = [
  {
    title: '霓虹孤岛计划',
    tags: ['生成视频', 'AI配乐', '数字人'],
    poster:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=85',
    outline:
      '一名记忆修复师进入废弃海上数据城，为最后一位数字居民寻找被删除的童年片段。',
    direction:
      '整体采用低饱和黑蓝基底与高亮霓虹边缘光，让城市像一台仍在呼吸的旧服务器。',
    tools: ['Runway Gen-3', 'Kling', 'ElevenLabs', 'Suno', 'DaVinci Resolve'],
  },
  {
    title: '月面快递员',
    tags: ['AI分镜', '虚拟摄影', '音效设计'],
    poster:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85',
    outline:
      '近未来月球殖民地里，一名快递员在一次异常投递中发现了城市调度系统的秘密。',
    direction:
      '镜头语言靠近纪录片式跟拍，用真实工业质感削弱科幻设定的距离感。',
    tools: ['Midjourney', 'ComfyUI', 'Luma', 'Premiere Pro', 'Audition'],
  },
  {
    title: '第七码头',
    tags: ['数字人', 'AI旁白', '概念预演'],
    poster:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
    outline:
      '一座只在雨夜出现的码头连接着现实与训练数据，主角必须选择保留哪一种身份。',
    direction:
      '以湿润反光、长焦压缩和慢速推进构建悬疑感，让空间本身成为叙事角色。',
    tools: ['Stable Diffusion XL', 'AnimateDiff', 'HeyGen', 'After Effects', 'Resolve'],
  },
];

const galleryItems = [
  {
    title: '雨夜数据街区',
    category: '赛博朋克',
    ratio: 'aspect-[16/9]',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85',
    prompt: '霓虹雨夜、湿润街面反射、巨型广告屏、电影级构图、蓝紫色边缘光',
  },
  {
    title: '仿生人肖像测试',
    category: '写实人像',
    ratio: 'aspect-[9/16]',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85',
    prompt: '写实人像、冷色棚拍、皮肤微瑕疵、透明机械纹理、浅景深',
  },
  {
    title: '深空栖居舱',
    category: '概念美术',
    ratio: 'aspect-square',
    image:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=85',
    prompt: '深空居住舱、环形窗、漂浮尘埃、极简内饰、孤独感叙事',
  },
  {
    title: '玻璃神经花园',
    category: '概念美术',
    ratio: 'aspect-[16/9]',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    prompt: '玻璃温室、神经网络结构、冷雾、发光植物、未来生态实验室',
  },
  {
    title: '夜行机甲巡逻',
    category: '赛博朋克',
    ratio: 'aspect-[9/16]',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=85',
    prompt: '重型机甲、城市巡逻、雨雾、背光剪影、硬表面细节',
  },
  {
    title: '银色导演侧影',
    category: '写实人像',
    ratio: 'aspect-square',
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1000&q=85',
    prompt: '写实侧脸、银色轮廓光、黑色背景、电影导演气质、85mm镜头',
  },
];

const skills = [
  {
    icon: Bot,
    name: '小说转分镜智能体',
    pain: '一键小说转剧本分镜：自动提取结构，输出标准分镜表。',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: WandSparkles,
    name: '角色一致性微技能',
    pain: '把人物设定、姿态参考与镜头提示词合并成可复用角色包。',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: Braces,
    name: 'Prompt 清洗与版本管理',
    pain: '自动整理提示词变量，记录风格版本，减少多人协作返工。',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85',
  },
];

const vibeApps = [
  {
    name: '镜头节奏计算器',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85',
    story:
      '我先对 AI 说“帮我把拖延症剪辑师变成节奏管理大师”，它回了一个表格。我不服，继续用自然语言怼出时间线、节拍点和情绪曲线，二十分钟后，一个能算镜头呼吸感的小工具就站起来了。',
  },
  {
    name: 'Prompt 黑匣子',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
    story:
      '从一句“我要一个不装腔的提示词保险柜”开始，边聊天边把收藏、标签、复制、评分揉成一个夜间工作台。它不负责显得聪明，只负责在凌晨两点救回我的灵感。',
  },
  {
    name: 'AI 分镜便利贴',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    story:
      '没有原型图，没有需求文档，只有一句“像便利贴一样排镜头”。于是我和 AI 一来一回，把拖拽排序、画幅备注、镜头状态都聊出来，像在桌面上搭一部微型电影。',
  },
];

const categories = ['全部', '赛博朋克', '写实人像', '概念美术'];

function App() {
  const [activeSeries, setActiveSeries] = useState(null);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [copiedPrompt, setCopiedPrompt] = useState('');
  const [workflowOpen, setWorkflowOpen] = useState(false);

  const filteredGallery = useMemo(() => {
    if (activeCategory === '全部') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const copyPrompt = async (prompt) => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = prompt;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedPrompt(prompt);
    window.setTimeout(() => setCopiedPrompt(''), 1200);
  };

  const downloadConfig = () => {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            workflow: 'ComfyUI cinematic short-film pipeline',
            stages: ['脚本拆解', '角色锁定', 'ControlNet 构图', '视频生成', '超分调色', '质检归档'],
            tools: ['ComfyUI', 'Dify', 'SDXL', 'AnimateDiff', 'Runway', 'DaVinci Resolve'],
          },
          null,
          2,
        ),
      ],
      { type: 'application/json' },
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ai-workflow-config.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0A0014] text-white">
      <div className="crt-overlay pointer-events-none fixed inset-0 z-50" />
      <Navbar />
      <Hero />
      <MiniSeries onOpen={setActiveSeries} />
      <Gallery
        activeCategory={activeCategory}
        filteredGallery={filteredGallery}
        onCategory={setActiveCategory}
        onCopy={copyPrompt}
        copiedPrompt={copiedPrompt}
      />
      <Skills />
      <Workflows onZoom={() => setWorkflowOpen(true)} onDownload={downloadConfig} />
      <VibeCoding />
      <Footer />
      {activeSeries && <SeriesModal series={activeSeries} onClose={() => setActiveSeries(null)} />}
      {workflowOpen && <WorkflowModal onClose={() => setWorkflowOpen(false)} />}
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-cyan-300/10 bg-[#0A0014]/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(0,255,255,.18)]">
            <Sparkles className="h-4 w-4 text-cyan-200" />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-white">
            AI Creator
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1800&q=85"
      >
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(0,255,255,.22),transparent_28rem),radial-gradient(circle_at_25%_65%,rgba(255,0,110,.22),transparent_30rem),linear-gradient(90deg,rgba(10,0,20,.92),rgba(10,0,20,.72),rgba(10,0,20,.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,0,20,.18),#0A0014_96%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_28px_rgba(0,255,255,.14)]">
            <PlayCircle className="h-4 w-4" />
            AI Workflow Architect / Digital Story Director
          </p>
          <h1 className="glitch-title max-w-5xl font-display text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">
            Merging AI with Creativity.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            I build automated workflows, code by vibe, and direct digital stories. Pushing the
            boundaries of Next-Gen AI content creation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#mini-series"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-[#0A0014] shadow-[0_0_34px_rgba(0,255,255,.35)] transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Explore Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:border-fuchsia-300/70 hover:bg-fuchsia-400/10"
            >
              Contact Me
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, icon: Icon, title, intro, children }) {
  return (
    <section id={id} className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100 backdrop-blur">
            <Icon className="h-4 w-4" />
            {title}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-normal text-white sm:text-5xl">{title}</h2>
          {intro && <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function MiniSeries({ onOpen }) {
  return (
    <Section
      id="mini-series"
      icon={Film}
      title="AI 短剧作品集"
      intro="用生成视频、虚拟摄影和自动化后期，把短剧创意从一句灵感推进到可交付样片。"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {series.map((item) => (
          <button
            key={item.title}
            onClick={() => onOpen(item)}
            className="neon-card group relative aspect-[2/3] overflow-hidden rounded-lg text-left"
          >
            <img
              src={item.poster}
              alt={item.title}
              className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-cyan-200/50 bg-cyan-300/15 backdrop-blur-xl shadow-[0_0_34px_rgba(0,255,255,.32)]">
                <Play className="h-7 w-7 fill-white text-white" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100 backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </Section>
  );
}

function SeriesModal({ series: item, onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-2xl">
      <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-lg border border-cyan-300/20 bg-[#0A0014] shadow-[0_0_80px_rgba(0,255,255,.16)]">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <button onClick={onClose} className="rounded-full border border-white/15 p-2 transition hover:bg-white/10" aria-label="关闭短剧详情">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-6 p-5 lg:grid-cols-[1.2fr_.8fr]">
          <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
            <video
              className="h-full w-full object-cover"
              controls
              poster={item.poster}
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
          </div>
          <div className="space-y-5">
            <InfoBlock title="剧本大纲" text={item.outline} />
            <InfoBlock title="导演构思" text={item.direction} />
            <div>
              <h4 className="mb-3 text-sm font-bold text-cyan-100">AI工具链列表</h4>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-100">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <h4 className="mb-2 text-sm font-bold text-cyan-100">{title}</h4>
      <p className="text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function Gallery({ activeCategory, filteredGallery, onCategory, onCopy, copiedPrompt }) {
  return (
    <Section
      id="gallery"
      icon={ImageIcon}
      title="AI 概念艺术画廊"
      intro="混合赛博城市、写实人物与概念美术，用不同画幅展示可控生成的视觉边界。"
    >
      <div className="mb-7 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              activeCategory === category
                ? 'border-cyan-200 bg-cyan-300 text-[#0A0014]'
                : 'border-white/15 bg-white/[0.04] text-slate-200 hover:border-cyan-200/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="masonry">
        {filteredGallery.map((item) => (
          <article key={item.title} className={`group relative mb-5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] ${item.ratio}`}>
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 transition group-hover:opacity-90" />
            <button
              onClick={() => onCopy(item.prompt)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-cyan-300 hover:text-[#0A0014] group-hover:opacity-100"
              aria-label="复制 Prompt"
            >
              {copiedPrompt === item.prompt ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">画面灵感与核心提示词：{item.prompt}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      icon={Bot}
      title="AI 智能体与微技能"
      intro="把高频创作痛点封装成可调用的微技能，让灵感、提示词、分镜和交付流程持续复用。"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <article key={skill.name} className="neon-card rounded-lg p-5">
              <div className="mb-5 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10">
                  <Icon className="h-5 w-5 text-cyan-100" />
                </span>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <p className="min-h-14 text-sm leading-7 text-slate-300">{skill.pain}</p>
              <div className="mt-5 aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
                <img src={skill.image} alt={skill.name} className="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105" />
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0A0014] transition hover:bg-cyan-200">
                立即体验 / 复制提示词
                <Copy className="h-4 w-4" />
              </button>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Workflows({ onZoom, onDownload }) {
  return (
    <Section
      id="workflows"
      icon={Network}
      title="AI 自动化工作流解析"
      intro="把灵感拆成输入、控制、生成、质检与交付节点，让复杂创意生产变成可复盘的系统。"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <div className="neon-card overflow-hidden rounded-lg">
          <div className="relative aspect-[16/10] bg-[#050812] p-5">
            <WorkflowDiagram />
            <button
              onClick={onZoom}
              className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/10"
            >
              <Maximize2 className="h-4 w-4" />
              放大查看
            </button>
          </div>
        </div>
        <div className="space-y-5">
          <InfoBlock title="攻坚难点" text="难点不是生成一张好看的图，而是在多镜头、多角色、多工具之间保持构图、人物、色彩与叙事节奏的一致性。" />
          <InfoBlock title="核心逻辑" text="用 Dify 负责脚本拆解与提示词编排，用 ComfyUI 管理角色锁定、ControlNet 约束、批量出图与后期超分，再进入剪辑质检。" />
          <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
            <video
              className="h-full w-full object-cover opacity-80"
              controls
              poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
          </div>
          <button
            onClick={onDownload}
            className="inline-flex items-center gap-2 rounded-full bg-fuchsia-400 px-5 py-3 text-sm font-bold text-[#0A0014] transition hover:scale-105 hover:bg-cyan-300"
          >
            下载配置文件 (JSON)
            <ArrowDownToLine className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}

function WorkflowDiagram() {
  const nodes = [
    { label: '脚本拆解', x: '7%', y: '20%' },
    { label: '角色锁定', x: '32%', y: '12%' },
    { label: '构图控制', x: '31%', y: '48%' },
    { label: '视频生成', x: '58%', y: '30%' },
    { label: '超分调色', x: '76%', y: '58%' },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-cyan-300/10 bg-[linear-gradient(rgba(0,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,110,.06)_1px,transparent_1px)] bg-[length:34px_34px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 560" preserveAspectRatio="none">
        <path className="flow-line" d="M120 150 C260 90 310 95 395 105 C495 120 540 190 620 210 C720 240 760 300 830 360" />
        <path className="flow-line delay" d="M130 160 C250 260 330 290 410 310 C520 335 590 280 650 225" />
        <path className="flow-line" d="M415 318 C520 400 620 430 820 365" />
      </svg>
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute w-32 rounded-lg border border-cyan-300/25 bg-[#0A0014]/90 p-3 text-center text-sm font-bold shadow-[0_0_28px_rgba(0,255,255,.14)] backdrop-blur"
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
        </div>
      ))}
      <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-black/35 p-3 text-sm text-slate-300 backdrop-blur">
        ComfyUI / Dify 工作流架构图占位：节点、分支、回流与质检门禁共同定义生产节奏。
      </div>
    </div>
  );
}

function WorkflowModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-2xl">
      <div className="w-full max-w-6xl rounded-lg border border-cyan-300/20 bg-[#050812] p-4 shadow-[0_0_90px_rgba(0,255,255,.18)]">
        <div className="mb-4 flex justify-end">
          <button onClick={onClose} className="rounded-full border border-white/15 p-2 transition hover:bg-white/10" aria-label="关闭工作流大图">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="h-[72vh]">
          <WorkflowDiagram />
        </div>
      </div>
    </div>
  );
}

function VibeCoding() {
  return (
    <Section
      id="vibe-coding"
      icon={TerminalSquare}
      title="Vibe Coding 独立开发实验室"
      intro="不从需求文档开始，而从一句带情绪的自然语言开始，用聊天把应用一点点揉成形。"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {vibeApps.map((app, index) => (
          <article key={app.name} className={`neon-card rounded-lg p-5 ${index === 1 ? 'lg:mt-12' : ''}`}>
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <img src={app.image} alt={app.name} className="h-full w-full object-cover opacity-85 transition duration-500 hover:scale-105" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">{app.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{app.story}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#hero" className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300 hover:text-[#0A0014]">
                <ExternalLink className="h-4 w-4" />
                在线运行 Demo
              </a>
              <a href="#hero" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
                <Github className="h-4 w-4" />
                查看代码 GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-slate-500">
      AI Creator Portfolio / 自动化工作流、AI 短剧、概念艺术与 Vibe Coding 实验集合
    </footer>
  );
}

export default App;
