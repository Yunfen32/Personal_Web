import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Film,
  Gamepad2,
  Mail,
  Map,
  MonitorPlay,
  X,
} from 'lucide-react';

import dramaOne from './assets/01-ai-drama/videos/ai-drama-sample-01.mp4';
import dramaTwo from './assets/01-ai-drama/videos/ai-drama-sample-02.mp4';
import dramaThree from './assets/01-ai-drama/videos/ai-drama-sample-03.mp4';
import platformDemo from './assets/05-video-platform/videos/video-platform-demo-web.mp4';
import workflowDemo from './assets/03-workflow/videos/介绍视频.mp4';
import capabilityMapImage from './assets/capability-map/obsidian-relationship-graph.png';
import skillDemo from './assets/04-skills/script-image-search/videos/skill-demo-web.mp4';
import skillDownload from './assets/04-skills/script-image-search/downloads/script-image-search.zip?url';
import skillOverview from './assets/04-skills/script-image-search/images/skill-overview.png';
import githubSkillDownload from './assets/04-skills/github-skill-cn-import/downloads/github-skill-cn-import.zip?url';
import githubSkillOverview from './assets/04-skills/github-skill-cn-import/images/github-skill-cn-import.png';
import socraticSkillDownload from './assets/04-skills/socratic-learning-engine/downloads/socratic-learning-engine.zip?url';
import socraticSkillOverview from './assets/04-skills/socratic-learning-engine/images/socratic-learning-engine-overview.png';
import { gallery, sections, waveformBars } from './data/portfolio';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function App() {
  const [activeSection, setActiveSection] = useState('visual');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <ScrollProgress />
      <AmbientCursor />
      <Header activeSection={activeSection} />
      <SectionRail activeSection={activeSection} />

      <div className="site-shell">
        <Hero />
        <VisualWork onSelectImage={setSelectedImage} />
        <ProductWork />
        <GamesWork />
        <CapabilityWork />
        <Contact />
      </div>

      <AnimatePresence>
        {selectedImage && <ImageDialog image={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>
    </main>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.2 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function AmbientCursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    const onPointerMove = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  return <div className="ambient-cursor" aria-hidden="true" />;
}

function Header({ activeSection }) {
  return (
    <header className="topbar">
      <a className="brand" href="#opening" aria-label="返回首页">
        <span className="brand-mark">BY</span>
        <span>白榆 / AIGC 创作</span>
      </a>
      <nav aria-label="主导航">
        {sections.map((section) => (
          <a
            key={section.id}
            className={activeSection === section.id ? 'is-active' : ''}
            href={`#${section.id}`}
            aria-current={activeSection === section.id ? 'location' : undefined}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionRail({ activeSection }) {
  return (
    <aside className="section-rail" aria-label="章节进度">
      <span className="rail-title">INDEX</span>
      <div className="rail-line" />
      {sections.map((section) => (
        <a
          key={section.id}
          className={activeSection === section.id ? 'rail-item is-active' : 'rail-item'}
          href={`#${section.id}`}
          aria-label={`${section.number} ${section.label}`}
        >
          <span>{section.number}</span>
          <b>{section.label}</b>
        </a>
      ))}
    </aside>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const stageY = useSpring(useTransform(scrollYProgress, [0, 0.32], [0, -128]), {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty('--scene-x', `${x * 16}deg`);
    event.currentTarget.style.setProperty('--scene-y', `${y * -12}deg`);
    event.currentTarget.style.setProperty('--pointer-x', `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${(y + 0.5) * 100}%`);
  };

  const resetPointer = (event) => {
    event.currentTarget.style.setProperty('--scene-x', '0deg');
    event.currentTarget.style.setProperty('--scene-y', '0deg');
  };

  return (
    <section
      id="opening"
      className="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-micro hero-micro-left">SELECTED WORK / 2026</div>
      <div className="hero-micro hero-micro-right">CREATIVE TECHNOLOGY · SHANGHAI</div>

      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="show"
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">AIGC 创作 / 产品实现 / 工作流设计</p>
        <h1>
          <span>让想象</span>
          <span>成为可运行的</span>
          <em>数字体验。</em>
        </h1>
        <p className="hero-summary">
          从 AI 影像、生成式视觉到产品原型与自动化工作流，
          把一次灵感变成可体验、可交付、可复用的完整作品。
        </p>
        <div className="actions">
          <a className="button button-solid" href="https://prompt-video-studio.netlify.app/" target="_blank" rel="noreferrer">
            体验视频平台 <ArrowUpRight size={16} />
          </a>
          <a className="button" href="#visual">
            查看作品 <Film size={16} />
          </a>
        </div>
        <div className="hero-paths" aria-label="作品入口">
          <a href="#visual" className="hero-path">
            <span className="hero-path-number">01</span>
            <span><strong>AI 视觉</strong><small>短剧 / 图片</small></span>
            <ArrowUpRight size={15} />
          </a>
          <a href="#product" className="hero-path">
            <span className="hero-path-number">02</span>
            <span><strong>产品流程</strong><small>平台 / Coze 工作流</small></span>
            <ArrowUpRight size={15} />
          </a>
          <a href="#games" className="hero-path">
            <span className="hero-path-number">03</span>
            <span><strong>互动作品</strong><small>网页游戏 / 竖屏玩法</small></span>
            <ArrowUpRight size={15} />
          </a>
          <a href="#capability" className="hero-path">
            <span className="hero-path-number">04</span>
            <span><strong>能力资产</strong><small>能力地图 / Skill</small></span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-stage"
        style={{ y: stageY }}
        initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <div className="scene-wire scene-wire-a"><span /></div>
        <div className="scene-wire scene-wire-b"><span /></div>
        <div className="scene-wire scene-wire-c"><span /></div>
        <div className="scene-crosshair" />
        <div className="scene-note-mark"><span>THE NOTE</span><i /></div>
        <div className="scene-editorial-title">The importance<br />of the right <em>workflow.</em></div>
        <div className="scene-waveform">
          {waveformBars.map((height, index) => <i key={`${height}-${index}`} style={{ '--bar-height': `${height}%` }} />)}
        </div>
        <div className="scene-orbit scene-orbit-outer" />
        <div className="scene-orbit scene-orbit-inner" />
        <div className="scene-dot scene-dot-a" />
        <div className="scene-dot scene-dot-b" />
        <div className="scene-dot scene-dot-c" />
        <div className="scene-stone scene-stone-a" />
        <div className="scene-stone scene-stone-b" />
        <div className="scene-stone scene-stone-c" />
        <div className="scene-sculpture">
          <div className="scene-moon">
            <span />
          </div>
          <div className="scene-phone">
            <div className="phone-screen">
              <span>AI</span>
              <i />
            </div>
          </div>
          <div className="scene-hand" />
        </div>
        <p className="scene-quote">“Turn ideas into<br />something people<br />can actually use.”</p>
      </motion.div>

      <motion.div
        className="hero-proof"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.65 }}
      >
        <div className="proof-head">
          <span>FEATURED / PROMPT VIDEO STUDIO</span>
          <span className="status">LIVE ↗</span>
        </div>
        <div className="proof-stats">
          <div><strong>29</strong><span>模型变体</span></div>
          <div><strong>09</strong><span>创作工作流</span></div>
          <div><strong>09</strong><span>自动化测试</span></div>
        </div>
      </motion.div>

      <a className="scroll-cue" href="#visual">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </a>
    </section>
  );
}

function Chapter({ id, number, title, proof, icon: Icon, children, className = '' }) {
  return (
    <section id={id} className={`chapter chapter-${id} ${className}`.trim()}>
      <motion.div
        className="chapter-heading"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={reveal}
        transition={{ duration: 0.55 }}
      >
        <div className="chapter-number">{number}</div>
        <div>
          <p className="eyebrow"><Icon size={15} /> {title}</p>
          <h2>{title}</h2>
          <p>{proof}</p>
        </div>
      </motion.div>
      {children}
    </section>
  );
}

function handleTiltMove(event) {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  event.currentTarget.style.setProperty('--tilt-x', `${y * -4}deg`);
  event.currentTarget.style.setProperty('--tilt-y', `${x * 5}deg`);
  event.currentTarget.style.setProperty('--tilt-shadow-x', `${x * 18}px`);
  event.currentTarget.style.setProperty('--tilt-shadow-y', `${y * 18 + 12}px`);
  event.currentTarget.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`);
  event.currentTarget.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`);
}

function resetTilt(event) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg');
  event.currentTarget.style.setProperty('--tilt-y', '0deg');
  event.currentTarget.style.setProperty('--tilt-shadow-x', '0px');
  event.currentTarget.style.setProperty('--tilt-shadow-y', '12px');
  event.currentTarget.style.setProperty('--shine-x', '50%');
  event.currentTarget.style.setProperty('--shine-y', '50%');
}

function ProjectCard({ id, number, eyebrow, title, body, details = [], video, href, linkLabel, tags, portrait = false, reverse = false }) {
  return (
    <article
      id={id}
      className={`project-card intro-3d-card ${portrait ? 'project-card-portrait' : ''} ${reverse ? 'project-card-reverse' : ''} ${video ? '' : 'project-card-no-media'}`}
      onPointerMove={handleTiltMove}
      onPointerLeave={resetTilt}
    >
      <span className="project-depth-index" aria-hidden="true">{number}</span>
      <div className="project-copy">
        <p className="case-index">{number} / {eyebrow}</p>
        <h3>{title}</h3>
        <p>{body}</p>
        {details.length > 0 && (
          <ul className="project-details">
            {details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        )}
        <div className="project-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        {href ? (
          <a className="text-link" href={href} target="_blank" rel="noreferrer">
            {linkLabel} <ExternalLink size={15} />
          </a>
        ) : <span className="link-placeholder">链接待补充</span>}
      </div>
      {video && <div className="project-media"><video controls playsInline preload="metadata" src={video} aria-label={`${title}视频介绍`} /></div>}
    </article>
  );
}

function VisualWork({ onSelectImage }) {
  return (
    <Chapter
      id="visual"
      number="01"
      title="短剧与图片"
      proof="用竖屏短剧和 AI 图片展示从角色、镜头到画面风格的持续控制与视觉交付。"
      icon={Film}
    >
      <div className="visual-tools" aria-label="本章快速浏览">
        <span>快速浏览</span>
        <a href="#drama-work">短剧样片 <ArrowUpRight size={14} /></a>
        <a href="#image-work">AI 图片 <ArrowUpRight size={14} /></a>
      </div>
      <div id="drama-work" className="subsection-heading">
        <span>01.1</span><h3>AI 短剧</h3><p>以竖屏成片呈现镜头节奏、人物连续性与交付质量。</p>
      </div>
      <div className="drama-layout">
        <DramaCard className="drama-primary" video={dramaOne} label="主短剧 / 9:16" title="AI 短剧样片 01" detail="I Died Before You Learned to Love Me" />
        <DramaCard className="drama-secondary" video={dramaTwo} label="补充片段 / 9:16" title="AI 短剧样片 02" detail="The Playboy System - Wooing the Goddesses to Survive" />
        <DramaCard className="drama-tertiary" video={dramaThree} label="完整案例 / 9:16" title="AI 短剧样片 03" detail="Project to Legend NEY 10" />
        <div className="drama-notes">
          <div><span>项目类型</span><b>AI 竖屏短剧</b></div>
          <div><span>关注重点</span><b>角色、镜头、情绪</b></div>
          <div><span>交付形式</span><b>9:16 成片</b></div>
        </div>
      </div>

      <div id="image-work" className="subsection-heading image-heading">
        <span>01.2</span><h3>AI 图片</h3><p>精选图片接触表；点击图片查看完整画面与说明。</p>
      </div>
      <div className="contact-sheet">
        {gallery.map((image, index) => (
          <button className="contact-frame" type="button" key={image.label} onClick={() => onSelectImage(image)}>
            <img src={image.src} alt={`${image.label}：${image.note}`} loading={index > 3 ? 'lazy' : 'eager'} />
            <span><b>{String(index + 1).padStart(2, '0')}</b>{image.note}</span>
          </button>
        ))}
      </div>
      <div className="module-status">更多作品链接待补充</div>
    </Chapter>
  );
}

function DramaCard({ className, video, label, title, detail }) {
  return (
    <article className={`drama-card intro-3d-card ${className}`} onPointerMove={handleTiltMove} onPointerLeave={resetTilt}>
      <div className="drama-caption"><span>{label}</span><h4>{title}</h4><p>{detail}</p></div>
      <div className="drama-media">
        <video
          controls
          playsInline
          preload="metadata"
          src={video}
          aria-label={`${title}视频播放器`}
        />
      </div>
    </article>
  );
}

function ProductWork() {
  return (
    <Chapter
      id="product"
      number="02"
      title="产品与工作流"
      proof="从可体验的生成平台，到可复用的内容生产链路：把创作能力组织成可运行、可交付的流程。"
      icon={MonitorPlay}
      className="chapter-product"
    >
      <div className="product-stack">
        <div className="product-block" id="video-platform">
          <div className="subsection-heading product-subheading">
            <span>02.1</span><h3>视频生成平台</h3><p>将多模型调用、任务管理与结果预览收拢为一个可直接体验的创作工作台。</p>
          </div>
          <ProjectCard
            number="02.1"
            eyebrow="生成视频平台 / PRODUCT"
            title="多模型 AI 视频生成平台"
            body="将生成方式、模型选择、素材参数、任务提交和结果预览统一到同一个工作台，降低多模型创作的切换成本。"
            details={[
              '把不同模型的调用方式收拢到同一套创作入口。',
              '围绕任务提交、状态管理和结果预览组织产品流程。',
              '通过操作录屏展示从输入参数到成片交付的完整路径。',
            ]}
            video={platformDemo}
            href="https://prompt-video-studio.netlify.app/"
            linkLabel="在线体验平台"
            tags={['多模型调用', '任务管理', '参数编排', '成片预览']}
          />
        </div>
        <div className="product-block" id="workflow">
          <div className="subsection-heading product-subheading">
            <span>02.2</span><h3>Coze 工作流</h3><p>将历史人物一生视频生成拆解为清晰、可复用、可调试的内容生产流程。</p>
          </div>
          <WorkflowCase />
        </div>
        <div className="product-block" id="agent-files-visualizer">
          <div className="subsection-heading product-subheading">
            <span>02.3</span><h3>Agent 文件可视化系统</h3><p>把 AI 客户端的磁盘足迹、风险判断与可逆清理组织成一个可分享的本地工具。</p>
          </div>
          <ProjectCard
            id="agent-files-visualizer-case"
            number="02.3"
            eyebrow="本地工具 / SECURITY ENGINEERING"
            title="AI 客户端磁盘足迹可视化与安全清理工具"
            body="自动探测 WorkBuddy、Claude Code、Codex 的数据根，按「可删 / 谨慎 / 严禁」标注风险；删除只进系统回收站，受保护路径由服务端强制拦截。"
            details={[
              '用 agent-aware 宿主识别和递归浏览，把分散的客户端数据汇总成可下钻的清单。',
              '通过 path.relative 根锚定、Origin + 自定义头校验和 fail-closed 回收站链路，完成路径穿越与 CSRF 的实证修复。',
              '保留本地实时服务，同时把虚构快照烘焙为纯静态只读分享版，公开链接不暴露本机真实结构。',
            ]}
            href="https://ce13dd19d34a46128128d047c40e606a.app.workbuddy.link"
            linkLabel="打开 Agent 文件可视化系统"
            tags={['安全工程', 'agent-aware', '零依赖', '可逆清理', '静态分享']}
          />
        </div>
      </div>
    </Chapter>
  );
}

function WorkflowCase() {
  const steps = ['人物名称输入', '生平文案与标题', '画面提示词', '批量生成图像', '视频与时间线', '字幕 / 音频 / 草稿'];
  return (
    <article className="systems-case workflow-case">
        <div className="system-copy">
          <p className="case-index">02.2 / Coze WORKFLOW</p>
          <h3>把一个人物名称，推进成一条可交付的视频。</h3>
          <p>这条 Coze 工作流从历史人物名称开始，先生成生平文案与标题，再把关键事件转换为画面提示词，批量完成图像、视频和后期交付数据的生成。</p>
          <p>视频中展示的是一条完整的可复用链路：前段负责内容拆解与视觉生成，后段继续处理视频链接、时间线、字幕、标题、配乐和剪映草稿，减少重复配置与人工搬运。</p>
          <dl>
            <div><dt>输入</dt><dd>历史人物名称与生成要求</dd></div>
            <div><dt>处理</dt><dd>文案、提示词、图像、视频、时间线与音频节点</dd></div>
            <div><dt>输出</dt><dd>含字幕、标题和配乐的剪映草稿数据</dd></div>
          </dl>
        </div>
        <div className="flow-proof">
          {steps.map((item, index) => (
            <React.Fragment key={item}>
              <div className="workflow-node"><b>{String(index + 1).padStart(2, '0')}</b>{item}</div>
              {index < steps.length - 1 && <span>→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="workflow-video">
          <div className="workflow-video-meta">
            <span>WORKFLOW DEMO / 介绍视频</span>
            <strong>历史人物一生视频生成 · 节点配置与成片交付</strong>
          </div>
          <video controls playsInline preload="metadata" src={workflowDemo} aria-label="Coze 历史人物一生视频生成工作流介绍视频" />
        </div>
        <a className="text-link workflow-link" href="https://ca3349f30c854ab4aae0763bc14aaec2.sh1.agentos-app.net/" target="_blank" rel="noreferrer">打开 Coze 工作流 <ExternalLink size={15} /></a>
    </article>
  );
}

function GamesWork() {
  return (
    <Chapter id="games" number="03" title="互动作品" proof="一个可直接打开体验的网页冒险项目，展示探索路径、文本反馈和页面交互。" icon={Gamepad2}>
      <div className="project-grid game-grid">
        <ProjectCard
          id="pokemon-game"
          number="03.1"
          eyebrow="网页游戏 / ADVENTURE"
          title="宝可梦冒险"
          body="一个可以直接打开体验的网页冒险项目，作为互动作品入口展示游戏探索与页面体验。"
          details={[
            '以网页交互承载探索路径、文本反馈和作品入口。',
            '重点展示从半成品问题定位到可运行体验的工程过程。',
          ]}
          href="https://yunfen32.github.io/pka-adventure/"
          linkLabel="在线体验宝可梦游戏"
          tags={['网页冒险', '在线体验', '互动作品']}
        />
      </div>
    </Chapter>
  );
}

function CapabilityWork() {
  return (
    <Chapter id="capability" number="04" title="能力资产" proof="把 AI 工具、工程能力和可复用 Skill 整理成可查看、可下载、可继续扩展的工作资产。" icon={Map}>
      <div className="capability-layout">
        <article className="capability-map intro-3d-card" onPointerMove={handleTiltMove} onPointerLeave={resetTilt}>
          <div className="capability-map-heading">
            <div>
              <p className="capability-priority">核心能力模块</p>
              <p className="case-index">04.4 / CORE CAPABILITY MAP</p>
              <h3>能力地图 · 核心中枢</h3>
            </div>
            <p className="capability-map-lede">这是整个作品集的能力总览，整理 Claude Code、Codex 与 WorkBuddy 三个方向的工具能力、工作流经验和能力边界。</p>
          </div>
          <div className="capability-map-art">
            <img src={capabilityMapImage} alt="Obsidian 关系图谱，展示 AI 工具、项目、工作流与能力标签之间的关联" />
            <span>OBSIDIAN / 关系图谱</span>
          </div>
          <div className="capability-copy">
            <p className="capability-copy-label">能力关系 / WORKING MODEL</p>
            <p>从工具协作到工作流落地，能力地图帮助你快速理解我如何选择工具、拆解任务并把创意推进到可运行的结果。</p>
            <div className="capability-facts">
              <div><span>工具层</span><strong>Claude Code / Codex / WorkBuddy</strong></div>
              <div><span>工作层</span><strong>工具选择 / 任务拆解 / 工作流落地</strong></div>
            </div>
            <a className="text-link" href="https://1473cc4f190c4a97bbf1463a8b7db92a.bj8.agentos-app.net/" target="_blank" rel="noreferrer">查看能力地图 <ExternalLink size={15} /></a>
          </div>
        </article>
        <div className="skill-grid">
          <article className="systems-case skill-case skill-case-socratic intro-3d-card" onPointerMove={handleTiltMove} onPointerLeave={resetTilt}>
            <div className="skill-preview"><img src={socraticSkillOverview} alt="苏格拉底式深度学习引擎功能总览" /></div>
            <div className="system-copy">
              <p className="case-index">04.1 / 自制 Skill</p>
              <h3>苏格拉底式深度学习引擎</h3>
              <p>以提问而非直接讲解推进学习：通过主动回忆、认知冲突、反例、迁移与间隔复习，帮助学习者建立、修正并沉淀自己的知识理解。</p>
              <a className="text-link" href={socraticSkillDownload} download><Download size={15} /> 下载 Skill</a>
            </div>
          </article>
          <article className="systems-case skill-case skill-case-script intro-3d-card" onPointerMove={handleTiltMove} onPointerLeave={resetTilt}>
            <div className="skill-preview"><img src={skillOverview} alt="script-image-search Skill 功能总览" /></div>
            <div className="system-copy">
              <p className="case-index">04.2 / 自制 Skill</p>
              <h3>script-image-search</h3>
              <p>一个脚本驱动的图片检索 Skill，用于将图片检索流程整理成可调用、可复用的工具。它把查询、结果整理和素材落盘收拢为一套可重复使用的操作流程。</p>
              <video className="skill-video" controls playsInline preload="metadata" src={skillDemo} aria-label="script-image-search Skill 演示视频" />
              <a className="text-link" href={skillDownload} download><Download size={15} /> 下载 Skill</a>
            </div>
          </article>
          <article className="systems-case skill-case skill-case-github intro-3d-card skill-case-no-video" onPointerMove={handleTiltMove} onPointerLeave={resetTilt}>
            <div className="skill-preview"><img src={githubSkillOverview} alt="github-skill-cn-import Skill 功能总览" /></div>
            <div className="system-copy">
              <p className="case-index">04.3 / 自制 Skill</p>
              <h3>github-skill-cn-import</h3>
              <p>将 GitHub 上的 Skill 介绍与使用说明转换为中文，再导入本地 Skill 生态，形成可复用的本地化导入流程。这个 Skill 用于降低外部工具进入本地工作流时的理解和接入成本。</p>
              <a className="text-link" href={githubSkillDownload} download><Download size={15} /> 下载 Skill</a>
            </div>
          </article>
        </div>
      </div>
    </Chapter>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-visual">
        <span className="contact-orbit contact-orbit-one" aria-hidden="true" />
        <span className="contact-orbit contact-orbit-two" aria-hidden="true" />
        <div className="contact-number">05</div>
      </div>
      <div className="contact-content">
        <p className="eyebrow">联系 / CONTACT</p>
        <h2>这就是我的个人作品集网站，感谢您耐心看到这里</h2>
        <div className="contact-actions">
          <p>微信：By2842909989<br />QQ 邮箱：<a href="mailto:2842909989@qq.com">2842909989@qq.com</a></p>
          <a className="button button-solid" href="mailto:2842909989@qq.com"><Mail size={16} /> 发送邮件</a>
        </div>
      </div>
    </section>
  );
}

function ImageDialog({ image, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="image-dialog"
      role="dialog"
      aria-modal="true"
      aria-label={image.label}
      onMouseDown={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div
        className="dialog-panel"
        onMouseDown={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 6 }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      >
        <button className="dialog-close" type="button" onClick={onClose} aria-label="关闭图片预览"><X size={18} /></button>
        <img src={image.src} alt={`${image.label}：${image.note}`} />
        <div><span>{image.label}</span><p>{image.note}</p></div>
      </motion.div>
    </motion.div>
  );
}

export default App;
