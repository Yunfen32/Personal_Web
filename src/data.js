import {
  Aperture,
  Binary,
  BrainCircuit,
  BriefcaseBusiness,
  Clapperboard,
  Cpu,
  DatabaseZap,
  Film,
  FlaskConical,
  GitBranch,
  Image,
  Layers3,
  Mail,
  MonitorPlay,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  WandSparkles,
  Waypoints,
  Workflow,
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: '首页', icon: Sparkles },
  { id: 'films', label: '影像', icon: Film },
  { id: 'gallery', label: '画廊', icon: Image },
  { id: 'skills', label: '能力', icon: BrainCircuit },
  { id: 'workflow', label: '流程', icon: Workflow },
  { id: 'contact', label: '联系', icon: Mail },
];

export const metrics = [
  { label: '生产效率提升', value: '+700%', tone: 'cyan' },
  { label: '画面控制精度', value: '95%+', tone: 'purple' },
  { label: '平均成本节省', value: '68%', tone: 'green' },
];

export const impactStats = [
  { value: '48h', label: '从需求简报到视觉方案定稿' },
  { value: '120+', label: '单个项目可管理镜头变体' },
  { value: '4K', label: '带质检节点的最终交付流程' },
  { value: '12+', label: '整合进同一工作流的 AI 工具' },
];

export const radarStats = [
  { label: 'ComfyUI', value: 94 },
  { label: 'Runway', value: 88 },
  { label: 'MJ/SDXL', value: 92 },
  { label: '提示词工程', value: 96 },
  { label: '流程研发', value: 90 },
  { label: '动态设计', value: 84 },
];

export const featuredWorks = [
  {
    title: '神经王朝',
    label: 'AI 短片',
    meta: 'Gen-3 + ComfyUI + AE',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '合成产品实验室',
    label: '工作流系统',
    meta: 'ControlNet 批量渲染',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '未来城市视觉手册',
    label: 'AI 画廊',
    meta: 'SDXL 风格控制套件',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80',
  },
];

export const serviceCards = [
  {
    title: 'AI 影像导演',
    icon: MonitorPlay,
    detail: '为短片与品牌视频搭建镜头表、运动提示词、参考板和可复用的迭代机制。',
  },
  {
    title: '工作流自动化',
    icon: Workflow,
    detail: '把创意实验沉淀为可复用的 ComfyUI、SDXL、Runway 与后期制作流程。',
  },
  {
    title: '品牌视觉系统',
    icon: ShieldCheck,
    detail: '在批量 AI 资产中锁定人物、产品、色彩、镜头与版式的一致性。',
  },
  {
    title: '原型冲刺',
    icon: Rocket,
    detail: '在投入制作预算前，快速验证风格方向、主视觉概念、社媒短片与发布素材。',
  },
];

export const careerTimeline = [
  {
    year: '2026',
    role: 'AIGC 创意导演',
    company: '个人作品集工作室',
    detail: '设计端到端 AI 影像与视觉生产系统，覆盖提示词策略、生成控制、超分、调色与交付质检。',
  },
  {
    year: '2025',
    role: 'AI 工作流工程师',
    company: '独立项目',
    detail: '为产品概念、时尚大片与电影感关键帧搭建可复用的图生视频和 ControlNet 工作流。',
  },
  {
    year: '2024',
    role: '动态 / 视觉设计师',
    company: '创意制作',
    detail: '结合合成、剪辑、字体设计与视觉研究，把松散想法转化为可展示、可交付的高完成度资产。',
  },
];

export const caseStudies = [
  {
    title: 'Campaign 视觉工厂',
    icon: WandSparkles,
    metric: '效率 8 倍',
    detail: '从提示词到交付的批量管线，可同时生成多个 campaign 方向，并保持品牌调性与光影一致。',
  },
  {
    title: '镜头匹配系统',
    icon: Target,
    metric: '91% 匹配',
    detail: '用深度、姿态、Canny 与编辑 pass 驱动参考生成，让视频迭代中的构图保持稳定。',
  },
  {
    title: '导演审片看板',
    icon: BriefcaseBusiness,
    metric: '返工 -40%',
    detail: '结构化记录每张入选画面的 seed、提示词、模型、修改意见和下一步动作，降低沟通损耗。',
  },
];

export const films = [
  {
    title: '余辉协议',
    kpi: '1280 万播放',
    saved: '节省 74% 成本',
    tools: ['Runway Gen-3', 'ComfyUI', 'DaVinci'],
    thumb: 'https://images.unsplash.com/photo-1604076850742-4c7221f3101b?auto=format&fit=crop&w=1200&q=80',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: '梦境物流',
    kpi: '36 小时交付',
    saved: '迭代速度 8 倍',
    tools: ['Kling', 'SDXL', 'Luma'],
    thumb: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=1200&q=80',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: '冷聚变记忆',
    kpi: '91% 镜头匹配',
    saved: '42 个镜头自动化',
    tools: ['AnimateDiff', 'ControlNet', 'Nuke'],
    thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
];

export const galleryItems = [
  {
    title: 'ControlNet 时装版式',
    type: 'compare',
    before: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=70&sat=-80',
    after: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=90&sat=20',
  },
  {
    title: '机甲视觉大片',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '电影生物关键帧',
    type: 'compare',
    before: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=70&sat=-90',
    after: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90&sat=10',
  },
  {
    title: '高端设备概念',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '霓虹交通 Matte 画面',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80',
  },
];

export const toolCards = [
  {
    name: 'Midjourney',
    icon: Aperture,
    level: 96,
    hacks: ['风格参考锁定', '角色一致性映射', '商业大片批量提示词'],
  },
  {
    name: 'Runway',
    icon: Clapperboard,
    level: 91,
    hacks: ['镜头节奏提示', '运动笔刷分层', '表演意图标记'],
  },
  {
    name: 'Stable Diffusion',
    icon: FlaskConical,
    level: 94,
    hacks: ['LoRA 合并策略', 'IP-Adapter 控制', '区域提示词蒙版'],
  },
];

export const promptBlocks = [
  '电影感关键帧，体积边缘光，受控的赛博青色调，高级产品真实感，35mm 镜头',
  '工作流：草图 > Canny 控制 > 深度 pass > SDXL 精修 > 分块超分 > 商业调色',
];

export const pipelineNodes = [
  { id: 'input', label: '需求输入', x: 60, y: 90, icon: DatabaseZap },
  { id: 'prompt', label: '提示词解析', x: 260, y: 60, icon: Binary },
  { id: 'control', label: 'ControlNet', x: 470, y: 130, icon: Waypoints },
  { id: 'render', label: '生成农场', x: 265, y: 260, icon: Cpu },
  { id: 'upscale', label: '超分与调色', x: 520, y: 310, icon: Layers3 },
  { id: 'publish', label: '质检交付', x: 735, y: 190, icon: GitBranch },
];

export const pipelineSteps = [
  { id: 'input', label: '步骤 1：输入', detail: '创意简报、参考图、品牌限制与目标画幅进入系统。' },
  { id: 'control', label: '步骤 2：控制', detail: '用姿态、深度、Canny 和 IP-Adapter 信号在生成前锁定构图。' },
  { id: 'upscale', label: '步骤 3：交付', detail: '通过分块超分、脸手修复、颗粒、调色与交付命名完成资产。' },
];

export const contactLinks = [
  { label: '邮箱', value: 'hello@aigc-director.dev', href: 'mailto:hello@aigc-director.dev' },
  { label: '地点', value: '上海 / 远程协作', href: '#contact' },
  { label: '状态', value: '开放 AIGC 岗位与项目冲刺合作', href: '#contact' },
];
