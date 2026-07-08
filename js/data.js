// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Knowledge Base (Rich HTML)
//  Source: DOC-001 香水包装产品知识手册 V3
// ═══════════════════════════════════════════════════════

const CHAPTERS = [

// ── CH01 ────────────────────────────────────────────
{
  id: 'ch01', order: 1,
  titleZh: '关于菲利包装', titleEn: 'About Fonli Packaging',
  icon: '🏢', estimatedMinutes: 8,
  sections: [
    {
      headingZh: '公司概况', headingEn: 'Company Overview',
      contentZh: `
<div class="kc-intro">菲利包装 <strong>Fonli Packaging</strong> 是一家专注高端香水及化妆品包装的 ODM/OEM 专业制造商，拥有自有工厂与设计团队，承接从定制设计到量产的全链条服务。</div>
<table class="kc-table">
  <tr><td class="kc-label">主营业务</td><td>高端香水包装 ODM/OEM 定制，提供玻璃瓶、瓶盖、喷头、盒子一站式服务</td></tr>
  <tr><td class="kc-label">行业经验</td><td>10+ 年深耕香水包材领域</td></tr>
  <tr><td class="kc-label">自有资源</td><td>自有工厂 + 自有设计团队，品质全程可控</td></tr>
  <tr><td class="kc-label">价格定位</td><td>中高端，强调设计与工艺价值，非价格战</td></tr>
  <tr><td class="kc-label">主要市场</td><td>欧洲、美国、中东、亚洲</td></tr>
  <tr><td class="kc-label">主要认证</td><td>ISO 9001-2015 · ISO 14001 · Sedex · FSC · Global Recycled Standard</td></tr>
  <tr><td class="kc-label">生产基地</td><td>中国 · 东莞市虎门镇</td></tr>
</table>`,
      contentEn: `
<div class="kc-intro"><strong>Fonli Packaging</strong> is a professional ODM/OEM manufacturer specializing in high-end perfume and cosmetic packaging. We have our own factory and design team, providing full-chain service from custom design to mass production.</div>
<table class="kc-table">
  <tr><td class="kc-label">Main Business</td><td>High-end perfume packaging ODM/OEM — glass bottles, caps, pumps, boxes, one-stop service</td></tr>
  <tr><td class="kc-label">Experience</td><td>10+ years in perfume packaging industry</td></tr>
  <tr><td class="kc-label">Resources</td><td>Own factory + own design team, full quality control</td></tr>
  <tr><td class="kc-label">Positioning</td><td>Mid-to-high-end, emphasizing design and craftsmanship value</td></tr>
  <tr><td class="kc-label">Main Markets</td><td>Europe · USA · Middle East · Asia</td></tr>
  <tr><td class="kc-label">Certifications</td><td>ISO 9001-2015 · ISO 14001 · Sedex · FSC · Global Recycled Standard</td></tr>
  <tr><td class="kc-label">Factory</td><td>Humen Town, Dongguan City, China</td></tr>
</table>`
    },
    {
      headingZh: '三大核心优势', headingEn: 'Three Core Strengths',
      contentZh: `
<div class="kc-card-row">
  <div class="kc-card kc-card-orange"><div class="kc-card-num">10+</div><div class="kc-card-title">年行业经验</div><div class="kc-card-desc">深耕香水包材领域，熟悉欧美中东市场需求</div></div>
  <div class="kc-card kc-card-dark"><div class="kc-card-num">自有</div><div class="kc-card-title">工厂 + 设计团队</div><div class="kc-card-desc">从设计到量产全掌控，不依赖外包</div></div>
  <div class="kc-card kc-card-orange"><div class="kc-card-num">ODM/OEM</div><div class="kc-card-title">定制能力</div><div class="kc-card-desc">服务高端中东 / 欧美香水品牌</div></div>
</div>`,
      contentEn: `
<div class="kc-card-row">
  <div class="kc-card kc-card-orange"><div class="kc-card-num">10+</div><div class="kc-card-title">Years Experience</div><div class="kc-card-desc">Deep expertise in perfume packaging for EU, US & Middle East markets</div></div>
  <div class="kc-card kc-card-dark"><div class="kc-card-num">Own</div><div class="kc-card-title">Factory + Design Team</div><div class="kc-card-desc">Full control from design to production — no outsourcing</div></div>
  <div class="kc-card kc-card-orange"><div class="kc-card-num">ODM/OEM</div><div class="kc-card-title">Custom Capability</div><div class="kc-card-desc">Serving premium Middle East & European fragrance brands</div></div>
</div>`
    },
    {
      headingZh: '目标客户群', headingEn: 'Target Customers',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>优先级</th><th>客户类型</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td><span class="kc-badge kc-badge-red">★★★</span></td><td>自有香水品牌（欧美、中东）</td><td>有清晰定位与新品计划，最优质客户</td></tr>
    <tr><td><span class="kc-badge kc-badge-red">★★★</span></td><td>香水 OEM/ODM 代工厂</td><td>有稳定品牌客户，复购率高</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">★★☆</span></td><td>灌装公司 / 区域代理商</td><td>有渠道有预算，批量稳定</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">★★☆</span></td><td>国外香水包材设计公司</td><td>专业客户，对工艺要求高</td></tr>
    <tr><td><span class="kc-badge kc-badge-gray">★☆☆</span></td><td>小散客 / 仅问价无项目</td><td>低优先，慎重投入过多资源</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Priority</th><th>Customer Type</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td><span class="kc-badge kc-badge-red">★★★</span></td><td>Own Perfume Brands (EU/Middle East)</td><td>Clear positioning & new product plans — best quality customers</td></tr>
    <tr><td><span class="kc-badge kc-badge-red">★★★</span></td><td>Perfume OEM/ODM Factories</td><td>Stable brand clients, high repurchase rate</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">★★☆</span></td><td>Filling Companies / Regional Distributors</td><td>Have channels and budgets, stable volumes</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">★★☆</span></td><td>Foreign Packaging Design Companies</td><td>Professional, high process requirements</td></tr>
    <tr><td><span class="kc-badge kc-badge-gray">★☆☆</span></td><td>Small/One-off Inquiries</td><td>Low priority — invest resources carefully</td></tr>
  </tbody>
</table>`
    }
  ]
},

// ── CH02 ────────────────────────────────────────────
{
  id: 'ch02', order: 2,
  titleZh: '定制项目流程', titleEn: 'Custom Project Process',
  icon: '⚙️', estimatedMinutes: 8,
  sections: [
    {
      headingZh: '六步定制流程', headingEn: 'Six-Step Custom Process',
      contentZh: `
<div class="kc-intro">独特美观的玻璃香水瓶是香水销售的亮点，Fonli 提供从设计到量产的完整定制服务。</div>
<div class="kc-steps">
  <div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">设计构思 Design Concept</div><div class="kc-step-desc">了解品牌定位、目标人群、风格方向，确定设计概念基础</div></div></div>
  <div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">原型渲染 Prototyping & Rendering</div><div class="kc-step-desc">设计团队出方案，探索造型与工艺，呈现给客户审阅</div></div></div>
  <div class="kc-step"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">3D 打样 3D Mockup</div><div class="kc-step-desc">3D 建模技术制作数字或实物手板，确认尺寸、形状和细节</div></div></div>
  <div class="kc-step"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">报价确认 Cost Analysis</div><div class="kc-step-desc">根据选材、工艺复杂度、数量提供透明报价，逐环节说明成本</div></div></div>
  <div class="kc-step"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">模具与样品 Mould & Sample</div><div class="kc-step-desc">报价确认后制作量产模具，工程师确保精度，出样品确认</div></div></div>
  <div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">大货生产 Mass Production</div><div class="kc-step-desc">模具就绪后启动量产，全程品控，确保每件符合最高标准</div></div></div>
</div>`,
      contentEn: `
<div class="kc-intro">A unique, beautiful perfume bottle is the highlight of fragrance sales. Fonli provides complete customization from design to mass production.</div>
<div class="kc-steps">
  <div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">Design Concept</div><div class="kc-step-desc">Understand brand positioning, target audience, style direction, establish design concept</div></div></div>
  <div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">Prototyping & Rendering</div><div class="kc-step-desc">Design team develops proposals, explores shapes and processes, presents to client for review</div></div></div>
  <div class="kc-step"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">3D Mockup</div><div class="kc-step-desc">3D modeling to create digital or physical prototypes, confirming dimensions and details</div></div></div>
  <div class="kc-step"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">Cost Analysis</div><div class="kc-step-desc">Transparent pricing based on materials, process complexity and quantity, explaining costs at each step</div></div></div>
  <div class="kc-step"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">Mould & Sample</div><div class="kc-step-desc">After quote confirmation, production mold is made, engineers ensure precision, sample provided for approval</div></div></div>
  <div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">Mass Production</div><div class="kc-step-desc">Once mold is ready, mass production begins with full quality control at every stage</div></div></div>
</div>`
    }
  ]
},

// ── CH03 ────────────────────────────────────────────
{
  id: 'ch03', order: 3,
  titleZh: '玻璃瓶知识', titleEn: 'Glass Bottle Knowledge',
  icon: '🍾', estimatedMinutes: 15,
  sections: [
    {
      headingZh: '产品概述', headingEn: 'Product Overview',
      contentZh: `
<div class="kc-intro">玻璃瓶是盛装香水液体的<strong>主体容器</strong>，也是整套包装中最大的视觉面，直接传递品牌风格与调性。</div>
<div class="kc-highlight-row">
  <div class="kc-highlight"><span class="kc-hi-icon">📦</span><strong>产品定义</strong><br>盛装香水的主体容器，独特美观的玻璃瓶是香水销售的亮点</div>
  <div class="kc-highlight"><span class="kc-hi-icon">👁️</span><strong>核心作用</strong><br>承载液体、保证密封；整套包装最大视觉面，传递品牌风格</div>
</div>`,
      contentEn: `
<div class="kc-intro">The glass bottle is the <strong>main container</strong> for perfume liquid and the largest visual element of the entire packaging — directly conveying the brand's style and tone.</div>
<div class="kc-highlight-row">
  <div class="kc-highlight"><span class="kc-hi-icon">📦</span><strong>Definition</strong><br>Main container for perfume — a unique, beautiful bottle is the selling point</div>
  <div class="kc-highlight"><span class="kc-hi-icon">👁️</span><strong>Key Role</strong><br>Holds liquid, ensures sealing; largest visual surface, conveys brand identity</div>
</div>`
    },
    {
      headingZh: '常见规格参数', headingEn: 'Common Specifications',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>容量</th><th>重量范围</th><th>生产交期</th></tr></thead>
  <tbody>
    <tr><td><strong>30 ml</strong></td><td>80 – 150 g</td><td>50 – 60 天</td></tr>
    <tr><td><strong>50 ml</strong></td><td>130 – 180 g</td><td>50 – 60 天</td></tr>
    <tr><td><strong>100 ml</strong></td><td>200 – 280 g</td><td>30 – 40 天</td></tr>
    <tr><td><strong>60 / 200 ml 定制</strong></td><td>基于设计</td><td>基于设计</td></tr>
  </tbody>
</table>
<div class="kc-tip">💡 <strong>封口方式：</strong>卡口（Crimp）最常见；螺口（Screw）适合旅行款。颈口规格：FEA 13 / 15 / 18 / 20 mm。<br>⚠️ 下单前须与客户确认封口方式，Crimp 与 Screw 不可互换！</div>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Volume</th><th>Weight Range</th><th>Lead Time</th></tr></thead>
  <tbody>
    <tr><td><strong>30 ml</strong></td><td>80 – 150 g</td><td>50 – 60 days</td></tr>
    <tr><td><strong>50 ml</strong></td><td>130 – 180 g</td><td>50 – 60 days</td></tr>
    <tr><td><strong>100 ml</strong></td><td>200 – 280 g</td><td>30 – 40 days</td></tr>
    <tr><td><strong>60 / 200 ml Custom</strong></td><td>Design-based</td><td>Design-based</td></tr>
  </tbody>
</table>
<div class="kc-tip">💡 <strong>Neck Types:</strong> Crimp (most common); Screw (travel size). Neck size: FEA 13 / 15 / 18 / 20 mm.<br>⚠️ Always confirm neck type with client before ordering — Crimp and Screw are NOT interchangeable!</div>`
    },
    {
      headingZh: '瓶身材料与抛光', headingEn: 'Materials & Polishing',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>材料类型</th><th>英文名</th><th>特点</th></tr></thead>
  <tbody>
    <tr><td><strong>高白料玻璃</strong></td><td>White Opal Glass</td><td>透明度高，折射好，显色准确，适合高端定制，价格略高</td></tr>
    <tr><td><strong>普通毛瓶</strong></td><td>Flint Glass / Plain Bottles</td><td>通用玻璃，成本低，适合公模现货款</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:1rem">
  <thead><tr><th>抛光工艺</th><th>英文</th><th>效果与适用</th></tr></thead>
  <tbody>
    <tr><td><strong>手抛</strong></td><td>Hand Polishing</td><td>透明度极高，折射极好，棱角分明，价格最高，适合顶级香水</td></tr>
    <tr><td><strong>火抛</strong></td><td>Fire Polishing</td><td>通透度比普通毛瓶好，棱角圆滑，价格居中</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Material</th><th>English Name</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td><strong>White Opal Glass</strong></td><td>高白料玻璃</td><td>High clarity, excellent refraction, accurate color — premium custom, slightly higher cost</td></tr>
    <tr><td><strong>Plain Bottles</strong></td><td>Flint Glass / 毛瓶</td><td>Standard glass, lower cost, suitable for stock mold products</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:1rem">
  <thead><tr><th>Polishing Type</th><th>English</th><th>Effect & Use</th></tr></thead>
  <tbody>
    <tr><td><strong>Hand Polishing</strong></td><td>手抛</td><td>Highest clarity, excellent refraction, sharp edges — top-tier perfume, highest price</td></tr>
    <tr><td><strong>Fire Polishing</strong></td><td>火抛</td><td>Better transparency than plain bottles, rounded edges, mid-range price</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: '装饰工艺大全', headingEn: 'Decoration Techniques',
      contentZh: `
<div class="kc-process-grid">
  <div class="kc-process-item"><div class="kc-process-name">喷涂</div><div class="kc-process-en">Color Coating</div><div class="kc-process-desc">实色 / 透明 / 渐变 / 局部喷涂，可调配专属颜色</div></div>
  <div class="kc-process-item"><div class="kc-process-name">UV电镀</div><div class="kc-process-en">UV Plating</div><div class="kc-process-desc">金属质感，增加档次感</div></div>
  <div class="kc-process-item"><div class="kc-process-name">蒙沙/喷沙</div><div class="kc-process-en">Frosting</div><div class="kc-process-desc">磨砂质感，低调奢华，欧美常见</div></div>
  <div class="kc-process-item"><div class="kc-process-name">植绒</div><div class="kc-process-en">Flocking</div><div class="kc-process-desc">天鹅绒触感，高端礼品感</div></div>
  <div class="kc-process-item"><div class="kc-process-name">裂纹</div><div class="kc-process-en">Cracking</div><div class="kc-process-desc">特殊纹理效果，艺术感强</div></div>
  <div class="kc-process-item"><div class="kc-process-name">烫金/丝印</div><div class="kc-process-en">Hot Stamping</div><div class="kc-process-desc">品牌 LOGO 印刷，每种工艺 MOQ 10,000 pcs</div></div>
  <div class="kc-process-item"><div class="kc-process-name">橡胶漆</div><div class="kc-process-en">Rubber Coating</div><div class="kc-process-desc">柔软触感，防滑高级，哑面阻尼手感</div></div>
  <div class="kc-process-item"><div class="kc-process-name">蚀刻</div><div class="kc-process-en">Etching</div><div class="kc-process-desc">表面纹理处理，适合特殊造型</div></div>
  <div class="kc-process-item"><div class="kc-process-name">转印</div><div class="kc-process-en">Transfer / Decal</div><div class="kc-process-desc">印刷图案转印到瓶身（贴花工艺）</div></div>
  <div class="kc-process-item"><div class="kc-process-name">UV打印</div><div class="kc-process-en">UV Printing</div><div class="kc-process-desc">直接打印在玻璃上，表面有颗粒感</div></div>
</div>
<div class="kc-img-grid">
  <figure><img src="img/image1.png" alt="玻璃瓶"><figcaption>玻璃瓶 Overall</figcaption></figure>
  <figure><img src="img/image2.png" alt="透喷"><figcaption>喷漆效果（透喷）</figcaption></figure>
  <figure><img src="img/image3.png" alt="实喷"><figcaption>喷漆效果（实喷）</figcaption></figure>
  <figure><img src="img/image4.png" alt="UV电镀"><figcaption>UV 电镀（金属反亮）</figcaption></figure>
  <figure><img src="img/image5.png" alt="蒙砂"><figcaption>蒙砂（雾面效果）</figcaption></figure>
  <figure><img src="img/image6.png" alt="植绒"><figcaption>植绒（绒布手感）</figcaption></figure>
  <figure><img src="img/image7.jpeg" alt="裂纹"><figcaption>裂纹</figcaption></figure>
  <figure><img src="img/image8.jpeg" alt="烫金"><figcaption>烫金（LOGO）</figcaption></figure>
  <figure><img src="img/image9.jpeg" alt="丝印"><figcaption>丝印</figcaption></figure>
  <figure><img src="img/image10.jpeg" alt="橡胶漆"><figcaption>橡胶漆（哑面）</figcaption></figure>
  <figure><img src="img/image11.jpeg" alt="镭射"><figcaption>镭射</figcaption></figure>
  <figure><img src="img/image12.jpeg" alt="转印"><figcaption>转印</figcaption></figure>
  <figure><img src="img/image13.jpeg" alt="UV打印"><figcaption>UV 打印</figcaption></figure>
</div>`,
      contentEn: `
<div class="kc-process-grid">
  <div class="kc-process-item"><div class="kc-process-name">Color Coating</div><div class="kc-process-en">喷涂</div><div class="kc-process-desc">Solid / transparent / gradient / partial coating, custom colors</div></div>
  <div class="kc-process-item"><div class="kc-process-name">UV Plating</div><div class="kc-process-en">UV电镀</div><div class="kc-process-desc">Metallic appearance, enhances premium feel</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Frosting</div><div class="kc-process-en">蒙沙</div><div class="kc-process-desc">Matte texture, understated luxury, common in EU/US markets</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Flocking</div><div class="kc-process-en">植绒</div><div class="kc-process-desc">Velvet touch, premium gift feel</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Cracking</div><div class="kc-process-en">裂纹</div><div class="kc-process-desc">Special texture effect, strong artistic feel</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Hot Stamping</div><div class="kc-process-en">烫金</div><div class="kc-process-desc">Brand LOGO printing, MOQ 10,000 pcs per type</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Rubber Coating</div><div class="kc-process-en">橡胶漆</div><div class="kc-process-desc">Soft touch, non-slip, matte damping feel</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Etching</div><div class="kc-process-en">蚀刻</div><div class="kc-process-desc">Surface texture treatment, special design shapes</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Transfer / Decal</div><div class="kc-process-en">转印</div><div class="kc-process-desc">Transfer printed patterns onto bottle surface</div></div>
  <div class="kc-process-item"><div class="kc-process-name">UV Printing</div><div class="kc-process-en">UV打印</div><div class="kc-process-desc">Direct print on glass, slight texture on surface</div></div>
</div>
<div class="kc-img-grid">
  <figure><img src="img/image1.png" alt="Glass Bottle"><figcaption>Glass Bottle</figcaption></figure>
  <figure><img src="img/image2.png" alt="Transparent coating"><figcaption>Transparent Coating</figcaption></figure>
  <figure><img src="img/image3.png" alt="Solid coating"><figcaption>Solid Color Coating</figcaption></figure>
  <figure><img src="img/image4.png" alt="UV Plating"><figcaption>UV Plating (Metal)</figcaption></figure>
  <figure><img src="img/image5.png" alt="Frosting"><figcaption>Frosting (Matte)</figcaption></figure>
  <figure><img src="img/image6.png" alt="Flocking"><figcaption>Flocking (Velvet)</figcaption></figure>
  <figure><img src="img/image7.jpeg" alt="Cracking"><figcaption>Cracking Effect</figcaption></figure>
  <figure><img src="img/image8.jpeg" alt="Hot Stamping"><figcaption>Hot Stamping (LOGO)</figcaption></figure>
  <figure><img src="img/image9.jpeg" alt="Silkscreen"><figcaption>Silk Screen Print</figcaption></figure>
  <figure><img src="img/image10.jpeg" alt="Rubber Coating"><figcaption>Rubber Coating</figcaption></figure>
  <figure><img src="img/image11.jpeg" alt="Laser"><figcaption>Laser Effect</figcaption></figure>
  <figure><img src="img/image12.jpeg" alt="Transfer"><figcaption>Transfer / Decal</figcaption></figure>
  <figure><img src="img/image13.jpeg" alt="UV Print"><figcaption>UV Printing</figcaption></figure>
</div>`
    },
    {
      headingZh: '瓶身结构：A 型 vs B 型', headingEn: 'Bottle Structure: Type A vs Type B',
      contentZh: `
<div class="kc-two-col">
  <div class="kc-col kc-col-a">
    <div class="kc-col-header">A 结构（带肩套 / 铝牌）</div>
    <ol class="kc-struct-list"><li>盖子（Cap）</li><li>PP 垫片</li><li>喷头（Pump）</li><li><strong>肩套（Shoulder）— 装饰</strong></li><li>瓶子（Bottle）</li><li><strong>铝牌（Plate）</strong></li></ol>
    <div class="kc-col-note">适合：有铝牌装饰、肩套造型的高端款式<br>💎 中东风格常见</div>
  </div>
  <div class="kc-col kc-col-b">
    <div class="kc-col-header">B 结构（带中套）</div>
    <ol class="kc-struct-list"><li>盖子（Cap）</li><li>PP 垫片</li><li>喷头（Pump）</li><li><strong>中套（Collar）— 装饰 + 固定</strong></li><li>瓶子（Bottle）</li></ol>
    <div class="kc-col-note">适合：现代简约风格，中套起装饰和固定喷头双重作用<br>🌍 欧美风格常见</div>
  </div>
</div>`,
      contentEn: `
<div class="kc-two-col">
  <div class="kc-col kc-col-a">
    <div class="kc-col-header">Type A (Shoulder + Plate)</div>
    <ol class="kc-struct-list"><li>Cap</li><li>PP Gasket</li><li>Pump</li><li><strong>Shoulder — Decorative</strong></li><li>Bottle</li><li><strong>Name Plate</strong></li></ol>
    <div class="kc-col-note">For: High-end styles with decorative plate and shoulder<br>💎 Common in Middle East style</div>
  </div>
  <div class="kc-col kc-col-b">
    <div class="kc-col-header">Type B (Collar)</div>
    <ol class="kc-struct-list"><li>Cap</li><li>PP Gasket</li><li>Pump</li><li><strong>Collar — Decorative + Securing</strong></li><li>Bottle</li></ol>
    <div class="kc-col-note">For: Modern minimalist style, collar serves dual decorative and securing function<br>🌍 Common in European/US style</div>
  </div>
</div>`
    },
    {
      headingZh: '品检要点', headingEn: 'QC Checklist',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>检查项目</th><th>说明 / 处理方式</th></tr></thead>
  <tbody>
    <tr><td><span class="kc-badge kc-badge-red">必检</span> 气泡 (Bubbles)</td><td>玻璃生产过程中的气泡，验货时重点检查</td></tr>
    <tr><td><span class="kc-badge kc-badge-red">必检</span> 破裂/碎裂</td><td>运输或生产损坏，封柜前逐箱确认</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">注意</span> 容量标准 (OFC)</td><td>以 OFC 溢流容量为准，非满口容量（Brimful Capacity）</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">注意</span> 公差</td><td>瓶身 ±1mm，容量 ±3ml，重量 ±5g 属正常范围</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">注意</span> 封口方式</td><td>卡口（Crimp）和螺口（Screw）下单前必须与客户确认</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Check Item</th><th>Description / Action</th></tr></thead>
  <tbody>
    <tr><td><span class="kc-badge kc-badge-red">Must Check</span> Bubbles</td><td>Air bubbles from glass production — inspect closely during QC</td></tr>
    <tr><td><span class="kc-badge kc-badge-red">Must Check</span> Cracks / Chips</td><td>Transport or production damage — check every carton before container loading</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">Note</span> Volume Standard (OFC)</td><td>Use OFC (Over Flow Capacity), not Brimful Capacity</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">Note</span> Tolerance</td><td>Normal range: body ±1mm, volume ±3ml, weight ±5g</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">Note</span> Neck Type</td><td>Crimp vs Screw must be confirmed with client before ordering</td></tr>
  </tbody>
</table>`
    }
  ]
},

// ── CH04 ────────────────────────────────────────────
{
  id: 'ch04', order: 4,
  titleZh: '香水盖知识', titleEn: 'Perfume Cap Knowledge',
  icon: '🔒', estimatedMinutes: 10,
  sections: [
    {
      headingZh: '产品概述', headingEn: 'Product Overview',
      contentZh: `
<div class="kc-intro">香水盖套在喷头上方，是客户<strong>手感最直接</strong>的部件，也是彰显品牌调性的关键元素。</div>
<div class="kc-highlight-row">
  <div class="kc-highlight"><span class="kc-hi-icon">🛡️</span><strong>保护功能</strong><br>保护喷头避免误触，防止香水挥发</div>
  <div class="kc-highlight"><span class="kc-hi-icon">✨</span><strong>品牌展示</strong><br>盖子设计直接影响客户对产品档次的第一印象</div>
</div>`,
      contentEn: `
<div class="kc-intro">The perfume cap sits over the pump — it's the part the customer <strong>feels most directly</strong>, and a key element expressing brand character.</div>
<div class="kc-highlight-row">
  <div class="kc-highlight"><span class="kc-hi-icon">🛡️</span><strong>Protection</strong><br>Protects the pump from accidental activation, prevents evaporation</div>
  <div class="kc-highlight"><span class="kc-hi-icon">✨</span><strong>Brand Expression</strong><br>Cap design directly shapes client's first impression of product quality</div>
</div>`
    },
    {
      headingZh: '9 种常见材料', headingEn: '9 Common Materials',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>#</th><th>材料</th><th>英文名</th><th>特点与卖点</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>ABS 工程塑料</strong></td><td>ABS</td><td>可电镀/喷涂，性价比高，金色/银色电镀常见搭配，适合中端产品</td></tr>
    <tr><td>2</td><td><strong>锌铝合金</strong></td><td>Zamak / Zinc Alloy</td><td>重量感好，可做精细造型，电镀效果出色；中东高端市场常用</td></tr>
    <tr><td>3</td><td><strong>电化铝</strong></td><td>Aluminium Oxide</td><td>轻盈，哑光金属质感，色泽均匀自然</td></tr>
    <tr><td>4</td><td><strong>K料</strong></td><td>K Materials / K-Resin</td><td>高透明度，仿水晶效果，折射感佳</td></tr>
    <tr><td>5</td><td><strong>沙林</strong></td><td>Surlyn</td><td>高透明，可做通透水晶感；常见于欧式设计</td></tr>
    <tr><td>6</td><td><strong>亚克力</strong></td><td>Acrylic</td><td>透明或彩色，可雕刻花纹，视觉效果丰富</td></tr>
    <tr><td>7</td><td><strong>PP 塑料</strong></td><td>PP</td><td>轻量，颜色丰富，经济实惠；适合简约风格</td></tr>
    <tr><td>8</td><td><strong>木盖</strong></td><td>Wood</td><td>自然质感，环保定位，欧美市场越来越受欢迎</td></tr>
    <tr><td>9</td><td><strong>磁吸盖</strong></td><td>Magnetic</td><td>开合顺滑，高级感强；适合高端定制款，磁力大小 N42/N52</td></tr>
  </tbody>
</table>
<div class="kc-tip">🌍 <strong>市场偏好：</strong>中东 → Zamak / ABS（重量感 = 品质感）；欧美 → Wood / Surlyn（轻薄自然）</div>
<div class="kc-img-grid">
  <figure><img src="img/image14.png" alt="ABS Zamak"><figcaption>ABS / Zamak 款</figcaption></figure>
  <figure><img src="img/image15.png" alt="K料 Surlyn"><figcaption>K料 / Surlyn / Acrylic</figcaption></figure>
  <figure><img src="img/image16.png" alt="木盖"><figcaption>Wood（木盖）</figcaption></figure>
  <figure><img src="img/image17.png" alt="磁吸盖"><figcaption>Magnetic（磁吸盖）</figcaption></figure>
  <figure><img src="img/image18.jpeg" alt="岩石纹"><figcaption>Rock（岩石纹）</figcaption></figure>
</div>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>#</th><th>Material</th><th>Chinese Name</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>ABS</strong></td><td>ABS 工程塑料</td><td>Plateable/paintable, good value, gold/silver plating common, mid-range products</td></tr>
    <tr><td>2</td><td><strong>Zamak / Zinc Alloy</strong></td><td>锌铝合金</td><td>Good weight, fine details, excellent plating — popular in Middle East high-end</td></tr>
    <tr><td>3</td><td><strong>Aluminium Oxide</strong></td><td>电化铝</td><td>Lightweight, matte metallic look, natural even color</td></tr>
    <tr><td>4</td><td><strong>K Materials</strong></td><td>K料</td><td>High transparency, crystal-like effect, good refraction</td></tr>
    <tr><td>5</td><td><strong>Surlyn</strong></td><td>沙林</td><td>High clarity, transparent crystal look — common in European designs</td></tr>
    <tr><td>6</td><td><strong>Acrylic</strong></td><td>亚克力</td><td>Clear or colored, can engrave patterns, visually rich</td></tr>
    <tr><td>7</td><td><strong>PP</strong></td><td>PP 塑料</td><td>Lightweight, colorful, economical — simple styles</td></tr>
    <tr><td>8</td><td><strong>Wood</strong></td><td>木盖</td><td>Natural texture, eco-friendly positioning, growing popularity in EU/US</td></tr>
    <tr><td>9</td><td><strong>Magnetic</strong></td><td>磁吸盖</td><td>Smooth open/close, premium feel — high-end custom; magnet strength N42/N52</td></tr>
  </tbody>
</table>
<div class="kc-tip">🌍 <strong>Market Preference:</strong> Middle East → Zamak / ABS (weight = quality feel); EU/US → Wood / Surlyn (light and natural)</div>
<div class="kc-img-grid">
  <figure><img src="img/image14.png" alt="ABS Zamak"><figcaption>ABS / Zamak</figcaption></figure>
  <figure><img src="img/image15.png" alt="K material Surlyn"><figcaption>K Material / Surlyn / Acrylic</figcaption></figure>
  <figure><img src="img/image16.png" alt="Wood Cap"><figcaption>Wood Cap</figcaption></figure>
  <figure><img src="img/image17.png" alt="Magnetic Cap"><figcaption>Magnetic Cap</figcaption></figure>
  <figure><img src="img/image18.jpeg" alt="Rock texture"><figcaption>Rock Texture</figcaption></figure>
</div>`
    }
  ]
},

// ── CH05 ────────────────────────────────────────────
{
  id: 'ch05', order: 5,
  titleZh: '喷头与中套知识', titleEn: 'Pump & Collar Knowledge',
  icon: '💨', estimatedMinutes: 10,
  sections: [
    {
      headingZh: '喷头 Spray Pump', headingEn: 'Spray Pump Overview',
      contentZh: `
<div class="kc-intro">喷头是控制香水喷出量与雾化效果的<strong>核心功能部件</strong>，也是客户日常使用频率最高的部件。海关编码：<code>9616 1000 00</code></div>
<table class="kc-table">
  <thead><tr><th>参数</th><th>标准规格</th></tr></thead>
  <tbody>
    <tr><td>颈口尺寸</td><td>13 / 15 / 18 / 20 mm（<strong>15mm 最常规</strong>）</td></tr>
    <tr><td>材料</td><td>铝（Aluminium / Alu）/ 塑料（Plastic）</td></tr>
    <tr><td>颜色</td><td>金色 / 银色 / 定制颜色</td></tr>
    <tr><td>封口方式</td><td>卡口（Crimp Pump）为主；螺口（Screw Type）适合旅行款</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:1rem">
  <thead><tr><th>#</th><th>部件（中文）</th><th>部件（英文）</th><th>功能</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>压头</td><td>Actuator / Push Head</td><td>手指按压触发喷射</td></tr>
    <tr><td>2</td><td>喷嘴</td><td>Nozzle</td><td>雾化喷出口，决定喷雾角度和细腻度</td></tr>
    <tr><td>3</td><td>导管</td><td>Dip-tube / Intake Tube</td><td>伸入瓶底，吸取香水液体</td></tr>
    <tr><td>4</td><td>弹簧</td><td>Upper Spring</td><td>提供回弹力，按压后自动复位</td></tr>
    <tr><td>5</td><td>泵体</td><td>Pump Body</td><td>主体压力腔，驱动液体上升</td></tr>
    <tr><td>6</td><td>活塞</td><td>Piston</td><td>在泵体内往复运动产生压力</td></tr>
    <tr><td>7</td><td>密封圈</td><td>Gasket</td><td>防止香水泄漏</td></tr>
  </tbody>
</table>
<div class="kc-two-col" style="margin-top:1rem">
  <div class="kc-col kc-col-a"><div class="kc-col-header">卡口式 Crimp Pump</div><ul><li>压接卡固，不可拆卸</li><li>使用方便，密封好</li><li><strong>日常零售款首选（绝大多数产品）</strong></li></ul></div>
  <div class="kc-col kc-col-b"><div class="kc-col-header">螺口式 Screw Type</div><ul><li>螺旋旋入，可锁定</li><li>防止旅行中误喷，安全性高</li><li><strong>旅行装、航空限制规格专用</strong></li></ul></div>
</div>
<div class="kc-warning">⚠️ 导管长度须根据瓶身高度定制，过长会折弯影响出液，过短会有死角残液。下单前必须与客户确认颈口规格（FEA）。</div>
<div class="kc-img-grid">
  <figure><img src="img/image19.png" alt="卡口喷头"><figcaption>卡口式 / Crimp Pump</figcaption></figure>
  <figure><img src="img/image20.png" alt="螺口喷头"><figcaption>螺口式 / Screw Type</figcaption></figure>
</div>`,
      contentEn: `
<div class="kc-intro">The spray pump is the <strong>core functional component</strong> controlling spray volume and atomization — the most frequently used part in daily use. HS Code: <code>9616 1000 00</code></div>
<table class="kc-table">
  <thead><tr><th>Parameter</th><th>Standard Spec</th></tr></thead>
  <tbody>
    <tr><td>Neck Size</td><td>13 / 15 / 18 / 20 mm (<strong>15mm most common</strong>)</td></tr>
    <tr><td>Material</td><td>Aluminium (Alu) / Plastic</td></tr>
    <tr><td>Color</td><td>Gold / Silver / Custom</td></tr>
    <tr><td>Neck Type</td><td>Crimp Pump (most common); Screw Type for travel size</td></tr>
  </tbody>
</table>
<div class="kc-two-col" style="margin-top:1rem">
  <div class="kc-col kc-col-a"><div class="kc-col-header">Crimp Pump</div><ul><li>Press-fit, non-removable</li><li>Easy to use, good seal</li><li><strong>Standard retail choice (vast majority)</strong></li></ul></div>
  <div class="kc-col kc-col-b"><div class="kc-col-header">Screw Type</div><ul><li>Screw-in, lockable</li><li>Prevents accidental spray in travel</li><li><strong>Travel size and airline-compliant products</strong></li></ul></div>
</div>
<div class="kc-warning">⚠️ Dip-tube length must be customized to bottle height — too long causes bending, too short leaves residual liquid. Always confirm FEA neck size before ordering.</div>
<div class="kc-img-grid">
  <figure><img src="img/image19.png" alt="Crimp Pump"><figcaption>Crimp Pump</figcaption></figure>
  <figure><img src="img/image20.png" alt="Screw Type"><figcaption>Screw Type Pump</figcaption></figure>
</div>`
    },
    {
      headingZh: '中套 Collar / Ring', headingEn: 'Collar / Ring',
      contentZh: `
<div class="kc-intro">中套套在喷头与瓶口之间，起<strong>固定喷头</strong>和<strong>装饰美观</strong>的双重作用。海关编码：<code>9616 1000 00</code></div>
<table class="kc-table">
  <thead><tr><th>参数</th><th>标准款</th><th>定制款</th></tr></thead>
  <tbody>
    <tr><td>颈口尺寸</td><td>15 mm</td><td>15 mm / 可定制</td></tr>
    <tr><td>材料</td><td>铝（Alu）/ 塑料（Plastic）</td><td>铝 / 锌合金（Zamac）/ 塑料</td></tr>
    <tr><td>颜色</td><td>金色 / 银色</td><td>金色 / 银色 / 完全定制</td></tr>
    <tr><td>MOQ</td><td>10,000 pcs（金 / 银色）</td><td>定制颜色 30,000 pcs；锌合金定制 10,000 pcs</td></tr>
  </tbody>
</table>
<div class="kc-tip">💡 定制色 MOQ 为 30K，若客户数量不足，建议选金/银标准色节省成本。</div>
<div class="kc-img-grid">
  <figure><img src="img/image21.png" alt="标准中套"><figcaption>标准中套（金/银）</figcaption></figure>
  <figure><img src="img/image22.png" alt="定制肩套"><figcaption>定制肩套 / Custom Collar</figcaption></figure>
</div>`,
      contentEn: `
<div class="kc-intro">The collar sits between the pump and bottle neck, serving the dual purpose of <strong>securing the pump</strong> and <strong>decorative enhancement</strong>. HS Code: <code>9616 1000 00</code></div>
<table class="kc-table">
  <thead><tr><th>Parameter</th><th>Standard</th><th>Custom</th></tr></thead>
  <tbody>
    <tr><td>Neck Size</td><td>15 mm</td><td>15 mm / customizable</td></tr>
    <tr><td>Material</td><td>Aluminium (Alu) / Plastic</td><td>Alu / Zamac / Plastic</td></tr>
    <tr><td>Color</td><td>Gold / Silver</td><td>Gold / Silver / Fully Custom</td></tr>
    <tr><td>MOQ</td><td>10,000 pcs (Gold / Silver)</td><td>Custom color: 30,000 pcs; Zamac custom: 10,000 pcs</td></tr>
  </tbody>
</table>
<div class="kc-tip">💡 Custom color MOQ is 30K. If client quantity is insufficient, recommend standard gold/silver to save cost.</div>
<div class="kc-img-grid">
  <figure><img src="img/image21.png" alt="Standard Collar"><figcaption>Standard Collar (Gold/Silver)</figcaption></figure>
  <figure><img src="img/image22.png" alt="Custom Collar"><figcaption>Custom Collar / Shoulder</figcaption></figure>
</div>`
    }
  ]
},

// ── CH06 ────────────────────────────────────────────
{
  id: 'ch06', order: 6,
  titleZh: '香水标牌知识', titleEn: 'Name Plate Knowledge',
  icon: '🏷️', estimatedMinutes: 10,
  sections: [
    {
      headingZh: '产品概述与规格', headingEn: 'Overview & Specs',
      contentZh: `
<div class="kc-intro">香水标牌（Custom Plate）贴附在瓶身或盒子上，承载品牌 LOGO 等核心信息，是品牌辨识度的重要载体，常见于<strong>中东风格高端香水</strong>。</div>
<table class="kc-table">
  <thead><tr><th>参数</th><th>详情</th></tr></thead>
  <tbody>
    <tr><td>材料</td><td>锌合金（Zamac）/ 铝（Aluminium）/ 不锈钢（Steel）/ 塑料（Plastic）</td></tr>
    <tr><td>颜色</td><td>金色 / 银色 / 完全定制</td></tr>
    <tr><td>MOQ</td><td>3,000 pcs（标准金/银色）</td></tr>
    <tr><td>固定方式</td><td>背胶粘贴（常见）/ 嵌入式（胶水黏贴）</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">The custom name plate is attached to the bottle or box, carrying brand LOGO and key information — an important brand recognition element, commonly seen in <strong>Middle East high-end perfumes</strong>.</div>
<table class="kc-table">
  <thead><tr><th>Parameter</th><th>Details</th></tr></thead>
  <tbody>
    <tr><td>Material</td><td>Zamac / Aluminium / Stainless Steel / Plastic</td></tr>
    <tr><td>Color</td><td>Gold / Silver / Fully Custom</td></tr>
    <tr><td>MOQ</td><td>3,000 pcs (standard gold/silver)</td></tr>
    <tr><td>Fixing Method</td><td>Self-adhesive (common) / Inset (adhesive glue)</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: '材料对比', headingEn: 'Material Comparison',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>材料</th><th>英文</th><th>特点</th></tr></thead>
  <tbody>
    <tr><td><strong>镜面铝</strong></td><td>Mirror Aluminum</td><td>常规厚 0.3mm，镜面效果，常用于印刷与击凸，色彩丰富，性价比高</td></tr>
    <tr><td><strong>进口镜面铝</strong></td><td>Premium Aluminum</td><td>反射率更高，可做镜面氧化效果，料纹不明显</td></tr>
    <tr><td><strong>普通拉丝铝</strong></td><td>Brushed Aluminum</td><td>表面有纹路（注意横纹/竖纹方向），哑光质感</td></tr>
    <tr><td><strong>不锈钢</strong></td><td>Stainless Steel</td><td>镜面效果极佳，硬度更高；常用：腐蚀、电镀、上色</td></tr>
    <tr><td><strong>锌合金</strong></td><td>Zamac / Zinc Alloy</td><td>常规厚 1.5–3mm，厚实感强；常用：压铸、抛光、电镀、滴胶</td></tr>
  </tbody>
</table>
<div class="kc-img-grid">
  <figure><img src="img/image38.png" alt="铝标牌"><figcaption>铝标牌样品</figcaption></figure>
  <figure><img src="img/image39.jpeg" alt="铝标上瓶"><figcaption>铝标上瓶效果图</figcaption></figure>
  <figure><img src="img/image40.png" alt="不锈钢标牌"><figcaption>不锈钢标牌</figcaption></figure>
  <figure><img src="img/image41.png" alt="锌合金标牌"><figcaption>锌合金标牌</figcaption></figure>
</div>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Material</th><th>Name</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td><strong>Mirror Aluminum</strong></td><td>镜面铝</td><td>Standard 0.3mm thick, mirror finish, printing + embossing common, colorful, good value</td></tr>
    <tr><td><strong>Premium Aluminum</strong></td><td>进口镜面铝</td><td>Higher reflectivity, can achieve anodized mirror effect, less visible grain</td></tr>
    <tr><td><strong>Brushed Aluminum</strong></td><td>拉丝铝</td><td>Surface grain (watch horizontal/vertical direction), matte look</td></tr>
    <tr><td><strong>Stainless Steel</strong></td><td>不锈钢</td><td>Excellent mirror finish, higher hardness; common processes: etching, plating, coloring</td></tr>
    <tr><td><strong>Zamac / Zinc Alloy</strong></td><td>锌合金</td><td>Standard 1.5–3mm thick, substantial feel; common: die casting, polishing, plating, epoxy</td></tr>
  </tbody>
</table>
<div class="kc-img-grid">
  <figure><img src="img/image38.png" alt="Aluminum Plate"><figcaption>Aluminum Plate Sample</figcaption></figure>
  <figure><img src="img/image39.jpeg" alt="On Bottle"><figcaption>Plate on Bottle</figcaption></figure>
  <figure><img src="img/image40.png" alt="Steel Plate"><figcaption>Stainless Steel Plate</figcaption></figure>
  <figure><img src="img/image41.png" alt="Zamac Plate"><figcaption>Zamac Plate</figcaption></figure>
</div>`
    }
  ]
},

// ── CH07 ────────────────────────────────────────────
{
  id: 'ch07', order: 7,
  titleZh: '香水盒知识', titleEn: 'Perfume Box Knowledge',
  icon: '📦', estimatedMinutes: 8,
  sections: [
    {
      headingZh: '8 种香水盒类型', headingEn: '8 Box Types',
      contentZh: `
<div class="kc-intro">香水盒是消费者拿到产品时接触的<strong>第一个包装</strong>，是品牌形象的最终完整呈现。</div>
<table class="kc-table">
  <thead><tr><th>#</th><th>类型</th><th>英文名</th><th>特点</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>翻盖精品盒</strong></td><td>Rigid Box – Book Shape</td><td>磁吸或插扣开合，高档感强，常见于高端礼盒</td></tr>
    <tr><td>2</td><td><strong>抽屉盒</strong></td><td>Rigid Box – Drawer</td><td>抽拉式设计，展示感强，中东高端市场流行</td></tr>
    <tr><td>3</td><td><strong>天地盒</strong></td><td>Rigid Box – Top & Bottom</td><td>上下盖形式，经典稳重，礼品装常用</td></tr>
    <tr><td>4</td><td><strong>圆筒盒</strong></td><td>Cylinder Box</td><td>适合圆形瓶型，造型独特</td></tr>
    <tr><td>5</td><td><strong>木盒</strong></td><td>Wooden Box</td><td>奢华定制，高端收藏感</td></tr>
    <tr><td>6</td><td><strong>折叠卡盒</strong></td><td>Folding Box / Soft Box</td><td>成本较低，适合零售单品，大量首选</td></tr>
    <tr><td>7</td><td><strong>试香纸</strong></td><td>Test Paper / Blotter</td><td>展会或店头试香使用</td></tr>
    <tr><td>8</td><td><strong>手提纸袋</strong></td><td>Paper Bag</td><td>配套提袋，完成整套包装体验</td></tr>
  </tbody>
</table>
<div class="kc-img-grid">
  <figure><img src="img/image42.png" alt="翻盖盒"><figcaption>翻盖盒 Book Shape</figcaption></figure>
  <figure><img src="img/image43.png" alt="抽屉盒"><figcaption>抽屉盒 Drawer</figcaption></figure>
  <figure><img src="img/image44.png" alt="天地盒"><figcaption>天地盒 Top & Bottom</figcaption></figure>
  <figure><img src="img/image45.png" alt="木盒"><figcaption>木盒 Wooden Box</figcaption></figure>
  <figure><img src="img/image46.png" alt="圆筒盒"><figcaption>圆筒盒 Cylinder</figcaption></figure>
  <figure><img src="img/image47.png" alt="折叠盒"><figcaption>折叠盒 Soft Box</figcaption></figure>
  <figure><img src="img/image48.png" alt="试香纸"><figcaption>试香纸 Blotter</figcaption></figure>
  <figure><img src="img/image49.png" alt="纸袋"><figcaption>纸袋 Paper Bag</figcaption></figure>
</div>`,
      contentEn: `
<div class="kc-intro">The perfume box is the <strong>first packaging</strong> the consumer touches — the final complete presentation of the brand.</div>
<table class="kc-table">
  <thead><tr><th>#</th><th>Type</th><th>Chinese</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>Rigid Box – Book Shape</strong></td><td>翻盖精品盒</td><td>Magnetic or snap closure, premium feel, common for high-end gifts</td></tr>
    <tr><td>2</td><td><strong>Rigid Box – Drawer</strong></td><td>抽屉盒</td><td>Pull-out design, great display effect, popular in Middle East premium</td></tr>
    <tr><td>3</td><td><strong>Rigid Box – Top & Bottom</strong></td><td>天地盒</td><td>Classic two-piece lid, stable, common for gift packaging</td></tr>
    <tr><td>4</td><td><strong>Cylinder Box</strong></td><td>圆筒盒</td><td>For round bottles, unique shape</td></tr>
    <tr><td>5</td><td><strong>Wooden Box</strong></td><td>木盒</td><td>Luxury custom, premium collectible feel</td></tr>
    <tr><td>6</td><td><strong>Folding Box</strong></td><td>折叠卡盒</td><td>Lower cost, retail-friendly, best for high volume</td></tr>
    <tr><td>7</td><td><strong>Test Paper / Blotter</strong></td><td>试香纸</td><td>Used at trade shows or in-store for scent testing</td></tr>
    <tr><td>8</td><td><strong>Paper Bag</strong></td><td>手提纸袋</td><td>Carry bag completing the full packaging experience</td></tr>
  </tbody>
</table>
<div class="kc-img-grid">
  <figure><img src="img/image42.png" alt="Book Box"><figcaption>Book Shape Box</figcaption></figure>
  <figure><img src="img/image43.png" alt="Drawer Box"><figcaption>Drawer Box</figcaption></figure>
  <figure><img src="img/image44.png" alt="Top Bottom Box"><figcaption>Top & Bottom Box</figcaption></figure>
  <figure><img src="img/image45.png" alt="Wooden Box"><figcaption>Wooden Box</figcaption></figure>
  <figure><img src="img/image46.png" alt="Cylinder Box"><figcaption>Cylinder Box</figcaption></figure>
  <figure><img src="img/image47.png" alt="Folding Box"><figcaption>Folding Box</figcaption></figure>
  <figure><img src="img/image48.png" alt="Blotter"><figcaption>Test Paper / Blotter</figcaption></figure>
  <figure><img src="img/image49.png" alt="Paper Bag"><figcaption>Paper Bag</figcaption></figure>
</div>`
    },
    {
      headingZh: '常见盒子工艺', headingEn: 'Common Box Processes',
      contentZh: `
<div class="kc-process-grid">
  <div class="kc-process-item"><div class="kc-process-name">烫金/烫色</div><div class="kc-process-en">Hot Stamping / Foil</div><div class="kc-process-desc">LOGO 或花纹烫印，金/银/彩色效果</div></div>
  <div class="kc-process-item"><div class="kc-process-name">激凸/压凹</div><div class="kc-process-en">Embossing / Debossing</div><div class="kc-process-desc">立体压纹，凸出或凹入</div></div>
  <div class="kc-process-item"><div class="kc-process-name">光胶</div><div class="kc-process-en">Glossy Lamination</div><div class="kc-process-desc">光亮覆膜，显色鲜艳</div></div>
  <div class="kc-process-item"><div class="kc-process-name">哑胶</div><div class="kc-process-en">Matt Lamination</div><div class="kc-process-desc">磨砂覆膜，低调质感</div></div>
  <div class="kc-process-item"><div class="kc-process-name">过 UV</div><div class="kc-process-en">UV Coating</div><div class="kc-process-desc">局部 UV 增加光泽感，配合哑胶效果强</div></div>
  <div class="kc-process-item"><div class="kc-process-name">哑膜 + 局部 UV</div><div class="kc-process-en">Matt + UV Spot</div><div class="kc-process-desc">最常见高端组合：背景哑，LOGO 亮</div></div>
</div>`,
      contentEn: `
<div class="kc-process-grid">
  <div class="kc-process-item"><div class="kc-process-name">Hot Stamping</div><div class="kc-process-en">烫金/烫色</div><div class="kc-process-desc">Foil stamp LOGO or pattern in gold/silver/color</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Embossing / Debossing</div><div class="kc-process-en">激凸/压凹</div><div class="kc-process-desc">3D raised or recessed texture effect</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Glossy Lamination</div><div class="kc-process-en">光胶</div><div class="kc-process-desc">Shiny coating, vivid colors</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Matt Lamination</div><div class="kc-process-en">哑胶</div><div class="kc-process-desc">Matte coating, understated quality</div></div>
  <div class="kc-process-item"><div class="kc-process-name">UV Coating</div><div class="kc-process-en">过 UV</div><div class="kc-process-desc">Spot UV adds gloss — powerful contrast with matte base</div></div>
  <div class="kc-process-item"><div class="kc-process-name">Matt + Spot UV</div><div class="kc-process-en">哑膜 + 局部UV</div><div class="kc-process-desc">Most popular premium combo: matte background, glossy LOGO</div></div>
</div>`
    }
  ]
},

// ── CH08 ────────────────────────────────────────────
{
  id: 'ch08', order: 8,
  titleZh: '业务规则与报价', titleEn: 'Business Rules & Pricing',
  icon: '💼', estimatedMinutes: 10,
  sections: [
    {
      headingZh: 'MOQ 关键数字', headingEn: 'Key MOQ Numbers',
      contentZh: `
<div class="kc-intro">以下数字是业务员接单过程中必须熟记的关键规则。</div>
<table class="kc-table">
  <thead><tr><th>类别</th><th>数量/规则</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>公模 MOQ（标准款）</td><td><strong>10,000 pcs</strong></td><td>现有公模瓶型，最低起订量</td></tr>
    <tr><td>定制款 MOQ</td><td><strong>20,000 – 30,000 pcs</strong></td><td>新开模定制款，数量更高</td></tr>
    <tr><td>每种工艺/LOGO MOQ</td><td><strong>10,000 pcs/种</strong></td><td>多种颜色或多款 LOGO 各自独立计算；老客户可协商至 5,000 pcs</td></tr>
    <tr><td>库存产品推荐门槛</td><td><strong>≥ 5,000 pcs</strong></td><td>5K–10K 之间推荐热销款（称「热销品」，不称库存）</td></tr>
    <tr><td>中套 – 标准色 MOQ</td><td><strong>10,000 pcs</strong></td><td>金色 / 银色标准款</td></tr>
    <tr><td>中套 – 定制色 MOQ</td><td><strong>30,000 pcs</strong></td><td>完全定制颜色</td></tr>
    <tr><td>标牌 MOQ</td><td><strong>3,000 pcs</strong></td><td>标准金/银色起订量</td></tr>
  </tbody>
</table>
<div class="kc-two-col" style="margin-top:1rem">
  <div class="kc-col kc-col-a"><div class="kc-col-header">小单付款（金额 &lt; $10,000）</div><strong>订金 50%</strong><br>收到订金后安排生产</div>
  <div class="kc-col kc-col-b"><div class="kc-col-header">大单付款（金额 ≥ $10,000）</div><strong>订金 30%</strong><br>尾款必须在出货前结清，无特殊约定不得先出货</div>
</div>`,
      contentEn: `
<div class="kc-intro">These are the key numbers every sales person must memorize when taking orders.</div>
<table class="kc-table">
  <thead><tr><th>Category</th><th>Quantity / Rule</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Stock Mold MOQ</td><td><strong>10,000 pcs</strong></td><td>Existing mold bottles, minimum order quantity</td></tr>
    <tr><td>Custom Mold MOQ</td><td><strong>20,000 – 30,000 pcs</strong></td><td>New mold development, higher quantity required</td></tr>
    <tr><td>Per Process/LOGO MOQ</td><td><strong>10,000 pcs/type</strong></td><td>Each color or LOGO counts separately; long-term clients may negotiate 5,000 pcs</td></tr>
    <tr><td>Stock Product Threshold</td><td><strong>≥ 5,000 pcs</strong></td><td>5K–10K: recommend as "popular items" (never call it "stock")</td></tr>
    <tr><td>Collar – Standard Color MOQ</td><td><strong>10,000 pcs</strong></td><td>Gold / Silver standard</td></tr>
    <tr><td>Collar – Custom Color MOQ</td><td><strong>30,000 pcs</strong></td><td>Fully custom color</td></tr>
    <tr><td>Name Plate MOQ</td><td><strong>3,000 pcs</strong></td><td>Standard gold/silver minimum order</td></tr>
  </tbody>
</table>
<div class="kc-two-col" style="margin-top:1rem">
  <div class="kc-col kc-col-a"><div class="kc-col-header">Small Order (< $10,000)</div><strong>50% Deposit</strong><br>Production starts after deposit received</div>
  <div class="kc-col kc-col-b"><div class="kc-col-header">Large Order (≥ $10,000)</div><strong>30% Deposit</strong><br>Balance must be paid before shipment — no exceptions without special agreement</div>
</div>`
    },
    {
      headingZh: '报价类型', headingEn: 'Price Types (Incoterms)',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>缩写</th><th>全称</th><th>包含范围</th></tr></thead>
  <tbody>
    <tr><td><strong>EXW</strong></td><td>Ex Works / 出厂价</td><td>仅产品成本，不含任何运费；客户自行安排提货</td></tr>
    <tr><td><strong>FOB</strong></td><td>Free On Board / 离岸价</td><td>产品 + 国内港口装船前所有费用（货代、报关、内陆运输等），约 ¥2,000</td></tr>
    <tr><td><strong>CIF</strong></td><td>Cost, Insurance & Freight / 到岸价</td><td>FOB + 国际海运 / 空运费 + 保险费</td></tr>
    <tr><td><strong>DDP</strong></td><td>Delivered Duty Paid / 门到门</td><td>全包：产品 + 国内货代 + 国际运费 + 目的地关税及当地税费</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Term</th><th>Full Name</th><th>What's Included</th></tr></thead>
  <tbody>
    <tr><td><strong>EXW</strong></td><td>Ex Works</td><td>Product cost only, no freight — client arranges pickup</td></tr>
    <tr><td><strong>FOB</strong></td><td>Free On Board</td><td>Product + all costs to load at Chinese port (forwarder, customs, inland transport) ~¥2,000</td></tr>
    <tr><td><strong>CIF</strong></td><td>Cost, Insurance & Freight</td><td>FOB + international sea/air freight + insurance</td></tr>
    <tr><td><strong>DDP</strong></td><td>Delivered Duty Paid</td><td>All-inclusive: product + domestic forwarder + international freight + destination duties & taxes</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: '付款方式', headingEn: 'Payment Methods',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>类型</th><th>全称</th><th>说明与注意事项</th></tr></thead>
  <tbody>
    <tr><td><strong>TT</strong></td><td>Bank Transfer / 电汇</td><td>下单付 30% 定金，出货前付 70% 尾款；银行手续费约 $20–$50</td></tr>
    <tr><td><strong>PayPal</strong></td><td>PayPal Online</td><td>⚠️ 手续费 4.5%，报价时须考虑</td></tr>
    <tr><td><strong>WU</strong></td><td>Western Union / 西联</td><td>欧洲常见；适合小额 ≤ $2,000；手续费由客户承担</td></tr>
    <tr><td><strong>L/C</strong></td><td>Letter of Credit / 信用证</td><td>按客户要求，条件需事前协商</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Type</th><th>Full Name</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td><strong>TT</strong></td><td>Bank Transfer</td><td>30% deposit on order, 70% balance before shipment; bank fee ~$20–$50</td></tr>
    <tr><td><strong>PayPal</strong></td><td>PayPal Online</td><td>⚠️ 4.5% transaction fee — must factor into quotation</td></tr>
    <tr><td><strong>WU</strong></td><td>Western Union</td><td>Common in Europe; suitable for small amounts ≤ $2,000; fees borne by client</td></tr>
    <tr><td><strong>L/C</strong></td><td>Letter of Credit</td><td>Per client requirements, terms must be negotiated upfront</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: '电梯话术（一分钟公司介绍）', headingEn: 'Elevator Pitch (1-Minute Intro)',
      contentZh: `
<div class="kc-quote">
  <div class="kc-quote-label">🇨🇳 中文参考话术</div>
  「我们是 Fonli，专注高端香水包装超过 10 年，提供玻璃瓶、瓶盖、喷头、盒子的 ODM/OEM 定制服务，自有工厂和设计团队，主要服务欧美和中东的香水品牌。」
</div>
<div class="kc-quote" style="margin-top:.75rem">
  <div class="kc-quote-label">🌍 English Reference</div>
  "We are Fonli — your one-stop perfume packaging expert. We specialize in high-end ODM/OEM packaging, including glass bottles, caps, sprayers, and boxes. With over 10 years of experience, our own factory and design team serve premium fragrance brands in Europe, the US, and the Middle East."
</div>`,
      contentEn: `
<div class="kc-quote">
  <div class="kc-quote-label">🌍 English Elevator Pitch</div>
  "We are Fonli — your one-stop perfume packaging expert. We specialize in high-end ODM/OEM packaging, including glass bottles, caps, sprayers, and boxes. With over 10 years of experience, our own factory and design team serve premium fragrance brands in Europe, the US, and the Middle East."
</div>
<div class="kc-quote" style="margin-top:.75rem">
  <div class="kc-quote-label">🇨🇳 中文版本</div>
  「我们是 Fonli，专注高端香水包装超过 10 年，提供玻璃瓶、瓶盖、喷头、盒子的 ODM/OEM 定制服务，自有工厂和设计团队，主要服务欧美和中东的香水品牌。」
</div>`
    }
  ]
},

// ── CH09 ────────────────────────────────────────────
{
  id: 'ch09', order: 9,
  titleZh: '中英文词汇手册', titleEn: 'Bilingual Glossary',
  icon: '📖', estimatedMinutes: 12,
  sections: [
    {
      headingZh: '产品中英文对照', headingEn: 'Product Vocabulary',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>英文</th><th>中文</th><th>海关编码</th></tr></thead>
  <tbody>
    <tr><td>Flint bottles / Plain bottles</td><td>毛瓶（玻璃）</td><td>7010909000</td></tr>
    <tr><td>White opal glass</td><td>高白料玻璃</td><td>—</td></tr>
    <tr><td>Lid / Cap</td><td>盖子</td><td>—</td></tr>
    <tr><td>Plastic Cap</td><td>塑料盖</td><td>3923500000</td></tr>
    <tr><td>Surlyn Cap</td><td>沙林盖</td><td>3923500000</td></tr>
    <tr><td>K-Resin / K Materials</td><td>K 料盖</td><td>—</td></tr>
    <tr><td>Zamac Cap (Zinc Alloy)</td><td>锌合金盖</td><td>8309900000</td></tr>
    <tr><td>Wooden Cap</td><td>木盖</td><td>4421909010</td></tr>
    <tr><td>Aluminium Cap</td><td>电化铝盖</td><td>8309900000</td></tr>
    <tr><td>Magnetic Cap</td><td>磁吸盖</td><td>—</td></tr>
    <tr><td>Collar / Ring</td><td>中套</td><td>9616 1000 00</td></tr>
    <tr><td>Pump / Sprayer</td><td>喷头</td><td>9616 1000 00</td></tr>
    <tr><td>Crimp Pump</td><td>卡口喷头</td><td>—</td></tr>
    <tr><td>Screw Neck</td><td>螺口</td><td>—</td></tr>
    <tr><td>Nozzle</td><td>喷嘴</td><td>—</td></tr>
    <tr><td>Dip-tube</td><td>导管</td><td>—</td></tr>
    <tr><td>Vial</td><td>小瓶（1–10 ml）</td><td>—</td></tr>
    <tr><td>Tassel</td><td>流苏</td><td>3926400000</td></tr>
    <tr><td>Swarovski crystals</td><td>施华洛世奇水晶</td><td>—</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>English</th><th>Chinese (中文)</th><th>HS Code</th></tr></thead>
  <tbody>
    <tr><td>Flint bottles / Plain bottles</td><td>毛瓶（玻璃）</td><td>7010909000</td></tr>
    <tr><td>White opal glass</td><td>高白料玻璃</td><td>—</td></tr>
    <tr><td>Lid / Cap</td><td>盖子</td><td>—</td></tr>
    <tr><td>Plastic Cap</td><td>塑料盖</td><td>3923500000</td></tr>
    <tr><td>Surlyn Cap</td><td>沙林盖</td><td>3923500000</td></tr>
    <tr><td>Zamac Cap</td><td>锌合金盖</td><td>8309900000</td></tr>
    <tr><td>Wooden Cap</td><td>木盖</td><td>4421909010</td></tr>
    <tr><td>Collar / Ring</td><td>中套</td><td>9616 1000 00</td></tr>
    <tr><td>Pump / Sprayer</td><td>喷头</td><td>9616 1000 00</td></tr>
    <tr><td>Crimp Pump</td><td>卡口喷头</td><td>—</td></tr>
    <tr><td>Nozzle</td><td>喷嘴</td><td>—</td></tr>
    <tr><td>Dip-tube</td><td>导管</td><td>—</td></tr>
    <tr><td>Vial</td><td>小瓶（1–10 ml）</td><td>—</td></tr>
    <tr><td>Tassel</td><td>流苏</td><td>3926400000</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: '工艺中英文对照', headingEn: 'Process Vocabulary',
      contentZh: `
<table class="kc-table">
  <thead><tr><th>英文</th><th>中文</th></tr></thead>
  <tbody>
    <tr><td>Color coating / Lacquering</td><td>喷涂</td></tr>
    <tr><td>Solid color coating</td><td>实色喷涂</td></tr>
    <tr><td>Transparent color coating</td><td>透明喷涂</td></tr>
    <tr><td>Gradient color coating</td><td>渐变喷涂</td></tr>
    <tr><td>Rubber coating / Soft touch</td><td>橡胶漆</td></tr>
    <tr><td>Metalizing / Metallization</td><td>电镀（水镀）</td></tr>
    <tr><td>Vacuum metalizing</td><td>真空镀</td></tr>
    <tr><td>Frosting / Frosted</td><td>蒙沙</td></tr>
    <tr><td>Hot Stamping / Gold blocking</td><td>烫金</td></tr>
    <tr><td>Silkscreen printing</td><td>丝印</td></tr>
    <tr><td>Sand-blasting</td><td>喷沙</td></tr>
    <tr><td>Etch</td><td>蚀刻</td></tr>
    <tr><td>Transfer / Decal</td><td>转印 / 贴花</td></tr>
    <tr><td>Flocking / Velvet</td><td>植绒</td></tr>
    <tr><td>Engraving / Deboss</td><td>雕花（凹进）</td></tr>
    <tr><td>Embossing</td><td>压花（凸出）</td></tr>
    <tr><td>Cracking</td><td>裂纹效果</td></tr>
    <tr><td>Anodized</td><td>氧化（铝专用）</td></tr>
    <tr><td>UV Printing</td><td>UV 打印</td></tr>
    <tr><td>Polished by hand</td><td>手工抛光</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>English</th><th>Chinese (中文)</th></tr></thead>
  <tbody>
    <tr><td>Color coating / Lacquering</td><td>喷涂</td></tr>
    <tr><td>Solid color coating</td><td>实色喷涂</td></tr>
    <tr><td>Gradient color coating</td><td>渐变喷涂</td></tr>
    <tr><td>Rubber coating / Soft touch</td><td>橡胶漆</td></tr>
    <tr><td>Metalizing / Metallization</td><td>电镀</td></tr>
    <tr><td>Frosting</td><td>蒙沙</td></tr>
    <tr><td>Hot Stamping</td><td>烫金</td></tr>
    <tr><td>Silkscreen printing</td><td>丝印</td></tr>
    <tr><td>Sand-blasting</td><td>喷沙</td></tr>
    <tr><td>Etching</td><td>蚀刻</td></tr>
    <tr><td>Transfer / Decal</td><td>转印</td></tr>
    <tr><td>Flocking / Velvet</td><td>植绒</td></tr>
    <tr><td>Embossing</td><td>压花（凸）</td></tr>
    <tr><td>Debossing / Engraving</td><td>雕花（凹）</td></tr>
    <tr><td>Cracking</td><td>裂纹效果</td></tr>
    <tr><td>Anodized</td><td>氧化（铝）</td></tr>
    <tr><td>UV Printing</td><td>UV 打印</td></tr>
  </tbody>
</table>`
    }
  ]
}

]; // end CHAPTERS

// ── Question Bank ────────────────────────────────────
const QUESTIONS = [
  { id:'q001', chapterId:'ch01', type:'single', difficulty:'easy',
    questionZh:'菲利包装的主营业务是什么？',
    questionEn:'What is Fonli Packaging\'s main business?',
    options:[
      {zh:'香水液体研发',en:'Perfume liquid R&D'},
      {zh:'高端香水包装 ODM/OEM 定制',en:'High-end perfume packaging ODM/OEM'},
      {zh:'零售连锁店管理',en:'Retail chain management'},
      {zh:'香水品牌运营',en:'Perfume brand operation'}
    ], answer:1,
    explanationZh:'菲利包装专注高端香水及化妆品包装的 ODM/OEM 定制，提供玻璃瓶、瓶盖、喷头、盒子一站式服务。',
    explanationEn:'Fonli Packaging specializes in high-end perfume and cosmetic packaging ODM/OEM, providing one-stop service for bottles, caps, pumps, and boxes.' },

  { id:'q002', chapterId:'ch01', type:'single', difficulty:'easy',
    questionZh:'菲利包装的生产基地位于哪里？',
    questionEn:'Where is Fonli Packaging\'s production base located?',
    options:[
      {zh:'上海市浦东新区',en:'Pudong, Shanghai'},
      {zh:'广州市番禺区',en:'Panyu, Guangzhou'},
      {zh:'东莞市虎门镇',en:'Humen Town, Dongguan'},
      {zh:'深圳市南山区',en:'Nanshan, Shenzhen'}
    ], answer:2,
    explanationZh:'菲利包装的生产基地位于中国东莞市虎门镇。',
    explanationEn:'Fonli Packaging\'s production base is in Humen Town, Dongguan City, China.' },

  { id:'q003', chapterId:'ch01', type:'single', difficulty:'medium',
    questionZh:'以下哪类客户优先级最高（★★★）？',
    questionEn:'Which customer type has the highest priority (★★★)?',
    options:[
      {zh:'小散客/仅问价',en:'One-off price inquiries'},
      {zh:'国外香水包材设计公司',en:'Foreign packaging design companies'},
      {zh:'自有香水品牌（欧美、中东）',en:'Own perfume brands (EU/Middle East)'},
      {zh:'灌装公司/区域代理商',en:'Filling companies / regional distributors'}
    ], answer:2,
    explanationZh:'自有香水品牌客户有清晰定位与新品计划，是最优质的客户，优先级最高。',
    explanationEn:'Own fragrance brands have clear positioning and new product plans — highest quality clients, top priority.' },

  { id:'q004', chapterId:'ch02', type:'single', difficulty:'easy',
    questionZh:'定制项目流程第几步是"报价确认"？',
    questionEn:'In the custom project process, which step is "Cost Analysis / Quotation Confirmation"?',
    options:[{zh:'第2步',en:'Step 2'},{zh:'第3步',en:'Step 3'},{zh:'第4步',en:'Step 4'},{zh:'第5步',en:'Step 5'}],
    answer:2,
    explanationZh:'流程：01设计构思→02原型渲染→03 3D打样→04报价确认→05模具与样品→06大货生产。',
    explanationEn:'Process: 01 Design Concept → 02 Prototyping → 03 3D Mockup → 04 Cost Analysis → 05 Mould & Sample → 06 Mass Production.' },

  { id:'q005', chapterId:'ch03', type:'single', difficulty:'easy',
    questionZh:'香水瓶最常见的颈口规格（FEA）是多少？',
    questionEn:'What is the most common FEA neck size for perfume bottles?',
    options:[{zh:'FEA 13mm',en:'FEA 13mm'},{zh:'FEA 15mm',en:'FEA 15mm'},{zh:'FEA 18mm',en:'FEA 18mm'},{zh:'FEA 20mm',en:'FEA 20mm'}],
    answer:1,
    explanationZh:'15mm 是最常规的标准颈口规格。',
    explanationEn:'15mm is the most standard neck size.' },

  { id:'q006', chapterId:'ch03', type:'single', difficulty:'medium',
    questionZh:'"高白料玻璃"的英文是？',
    questionEn:'What is the English term for "高白料玻璃"?',
    options:[
      {zh:'Flint Glass',en:'Flint Glass'},
      {zh:'White Opal Glass',en:'White Opal Glass'},
      {zh:'Crystal Glass',en:'Crystal Glass'},
      {zh:'Borosilicate Glass',en:'Borosilicate Glass'}
    ], answer:1,
    explanationZh:'高白料玻璃英文为 White Opal Glass，透明度高，折射效果好，适合高端定制。',
    explanationEn:'White Opal Glass — high clarity, excellent refraction, suitable for premium custom products.' },

  { id:'q007', chapterId:'ch03', type:'single', difficulty:'medium',
    questionZh:'卡口（Crimp）和螺口（Screw）有什么重要区别？',
    questionEn:'What is an important difference between Crimp and Screw neck types?',
    options:[
      {zh:'只有尺寸不同',en:'Only different in size'},
      {zh:'两者可以互换使用',en:'They can be used interchangeably'},
      {zh:'不可互换，下单前必须与客户确认',en:'Not interchangeable — must confirm with client before ordering'},
      {zh:'螺口比卡口贵',en:'Screw type is more expensive than Crimp'}
    ], answer:2,
    explanationZh:'卡口和螺口结构完全不同，不可互换。下单前务必与客户确认封口方式，否则会导致产品无法组装。',
    explanationEn:'Crimp and Screw have completely different structures and cannot be swapped. Must confirm with client before ordering to avoid assembly issues.' },

  { id:'q008', chapterId:'ch03', type:'single', difficulty:'hard',
    questionZh:'"OFC" 代表什么？',
    questionEn:'What does "OFC" stand for?',
    options:[
      {zh:'Official Functional Capacity',en:'Official Functional Capacity'},
      {zh:'Over Flow Capacity（溢流容量）',en:'Over Flow Capacity'},
      {zh:'Original Factory Code',en:'Original Factory Code'},
      {zh:'Output Final Check',en:'Output Final Check'}
    ], answer:1,
    explanationZh:'OFC = Over Flow Capacity（溢流容量），是香水瓶容量的标准计量方式，不同于满口容量（Brimful Capacity）。',
    explanationEn:'OFC = Over Flow Capacity — the standard measurement for perfume bottle volume, different from Brimful Capacity.' },

  { id:'q009', chapterId:'ch04', type:'single', difficulty:'easy',
    questionZh:'中东高端市场最常用的盖子材料是？',
    questionEn:'Which cap material is most popular in the Middle East high-end market?',
    options:[
      {zh:'Wood（木盖）',en:'Wood'},
      {zh:'Surlyn（沙林）',en:'Surlyn'},
      {zh:'Zamak（锌合金）',en:'Zamak (Zinc Alloy)'},
      {zh:'PP（聚丙烯）',en:'PP'}
    ], answer:2,
    explanationZh:'Zamak 锌合金重量感好，电镀效果出色，代表品质感，是中东高端市场常用材料。',
    explanationEn:'Zamak zinc alloy has good weight and excellent plating — the weight feel represents quality, making it popular in Middle East premium market.' },

  { id:'q010', chapterId:'ch04', type:'single', difficulty:'medium',
    questionZh:'磁吸盖的常规磁力规格是？',
    questionEn:'What are the common magnet strength specifications for magnetic caps?',
    options:[
      {zh:'N20 / N30',en:'N20 / N30'},
      {zh:'N42 / N52',en:'N42 / N52'},
      {zh:'N60 / N72',en:'N60 / N72'},
      {zh:'N10 / N15',en:'N10 / N15'}
    ], answer:1,
    explanationZh:'磁吸盖常规磁力大小为 N42 / N52，需在打样阶段确认，磁力过强或过弱都会影响体验。',
    explanationEn:'Standard magnet strength for magnetic caps is N42 / N52. Must be confirmed at sampling stage — too strong or weak will affect user experience.' },

  { id:'q011', chapterId:'ch05', type:'single', difficulty:'easy',
    questionZh:'喷头（Spray Pump）最标准的颈口尺寸是？',
    questionEn:'What is the most standard neck size for spray pumps?',
    options:[{zh:'13mm',en:'13mm'},{zh:'15mm',en:'15mm'},{zh:'18mm',en:'18mm'},{zh:'20mm',en:'20mm'}],
    answer:1,
    explanationZh:'15mm 是最常规的标准喷头颈口规格。',
    explanationEn:'15mm is the most standard neck size for spray pumps.' },

  { id:'q012', chapterId:'ch05', type:'single', difficulty:'medium',
    questionZh:'以下哪种喷头适合旅行装/航空限制规格？',
    questionEn:'Which type of pump is suitable for travel size / airline-restricted products?',
    options:[
      {zh:'卡口式（Crimp Pump）',en:'Crimp Pump'},
      {zh:'螺口式（Screw Type）',en:'Screw Type'},
      {zh:'两种都可以',en:'Both'},
      {zh:'真空泵（Airless Pump）',en:'Airless Pump'}
    ], answer:1,
    explanationZh:'螺口式喷头可以锁定，防止旅行中误喷，适合旅行装和航空限制规格产品。',
    explanationEn:'Screw type can be locked to prevent accidental spray during travel — suitable for travel size and airline-compliant products.' },

  { id:'q013', chapterId:'ch07', type:'single', difficulty:'easy',
    questionZh:'以下哪种盒子成本最低，适合大量零售单品？',
    questionEn:'Which box type has the lowest cost and is best for high-volume retail products?',
    options:[
      {zh:'翻盖精品盒 Book Shape',en:'Rigid Box – Book Shape'},
      {zh:'木盒 Wooden Box',en:'Wooden Box'},
      {zh:'抽屉盒 Drawer',en:'Rigid Box – Drawer'},
      {zh:'折叠卡盒 Folding Box',en:'Folding Box / Soft Box'}
    ], answer:3,
    explanationZh:'折叠卡盒成本较低，适合零售单品，量大首选。',
    explanationEn:'Folding Box (Soft Box) has lower cost, suitable for retail single items, best choice for high volumes.' },

  { id:'q014', chapterId:'ch08', type:'single', difficulty:'easy',
    questionZh:'公模现货款（标准款）的最低起订量（MOQ）是多少？',
    questionEn:'What is the minimum order quantity (MOQ) for stock mold (standard) products?',
    options:[
      {zh:'5,000 pcs',en:'5,000 pcs'},
      {zh:'10,000 pcs',en:'10,000 pcs'},
      {zh:'20,000 pcs',en:'20,000 pcs'},
      {zh:'30,000 pcs',en:'30,000 pcs'}
    ], answer:1,
    explanationZh:'公模现有瓶型 MOQ 为 10,000 pcs；定制开模款 MOQ 为 20,000–30,000 pcs。',
    explanationEn:'Stock mold MOQ is 10,000 pcs; custom new mold MOQ is 20,000–30,000 pcs.' },

  { id:'q015', chapterId:'ch08', type:'single', difficulty:'medium',
    questionZh:'PayPal 付款需要注意什么？',
    questionEn:'What should you be aware of when the client pays by PayPal?',
    options:[
      {zh:'没有手续费，非常划算',en:'No fee, very cost-effective'},
      {zh:'有 4.5% 手续费，报价时须考虑',en:'4.5% transaction fee — must factor into quotation'},
      {zh:'只能用于欧洲客户',en:'Only for European clients'},
      {zh:'最低付款额为 $5,000',en:'Minimum payment is $5,000'}
    ], answer:1,
    explanationZh:'PayPal 手续费为 4.5%，在对客户报价时需要考虑进去，否则会影响利润。',
    explanationEn:'PayPal charges 4.5% transaction fee — this must be factored into the client quotation to protect profit margins.' },

  { id:'q016', chapterId:'ch08', type:'single', difficulty:'hard',
    questionZh:'"DDP" 报价包含哪些内容？',
    questionEn:'What does a "DDP" quotation include?',
    options:[
      {zh:'仅产品成本',en:'Product cost only'},
      {zh:'产品 + 国内港口装船费',en:'Product + domestic port loading costs'},
      {zh:'产品 + 国内费用 + 国际运费',en:'Product + domestic costs + international freight'},
      {zh:'全包：产品 + 货代 + 国际运费 + 目的地关税及税费',en:'All-inclusive: product + forwarder + international freight + destination duties & taxes'}
    ], answer:3,
    explanationZh:'DDP = Delivered Duty Paid，是门到门报价，包括所有费用：产品成本 + 国内货代 + 国际运费 + 目的地关税及当地税费。',
    explanationEn:'DDP = Delivered Duty Paid — door-to-door pricing including all costs: product + domestic forwarder + international freight + destination duties and local taxes.' },

  { id:'q017', chapterId:'ch09', type:'single', difficulty:'easy',
    questionZh:'"Dip-tube" 中文是？',
    questionEn:'What is the Chinese term for "Dip-tube"?',
    options:[{zh:'喷嘴',en:'Nozzle'},{zh:'弹簧',en:'Spring'},{zh:'导管（吸管）',en:'Dip-tube (导管)'},{zh:'密封圈',en:'Gasket'}],
    answer:2,
    explanationZh:'Dip-tube = 导管（吸管），是伸入瓶底吸取香水液体的细管。',
    explanationEn:'Dip-tube = 导管，the thin tube extending into the bottle bottom to draw out perfume liquid.' },

  { id:'q018', chapterId:'ch09', type:'single', difficulty:'easy',
    questionZh:'"Frosting" 对应的中文工艺是？',
    questionEn:'What is the Chinese term for "Frosting"?',
    options:[{zh:'烫金',en:'Hot Stamping'},{zh:'植绒',en:'Flocking'},{zh:'蒙沙/喷沙',en:'Frosting (蒙沙)'},{zh:'丝印',en:'Silk Screen'}],
    answer:2,
    explanationZh:'Frosting / Frosted = 蒙沙，产生磨砂质感，低调奢华，欧美市场常见。',
    explanationEn:'Frosting = 蒙沙 — creates a matte texture, understated luxury, common in European and US markets.' },

  { id:'q019', chapterId:'ch03', type:'single', difficulty:'hard',
    questionZh:'玻璃瓶 A 结构和 B 结构的主要区别是？',
    questionEn:'What is the main difference between bottle Structure A and Structure B?',
    options:[
      {zh:'A 结构有盖子，B 结构没有盖子',en:'Type A has a cap, Type B does not'},
      {zh:'A 结构带肩套和铝牌，B 结构带中套',en:'Type A has shoulder + plate, Type B has collar'},
      {zh:'A 结构用于圆瓶，B 结构用于方瓶',en:'Type A for round bottles, Type B for square bottles'},
      {zh:'A 结构更贵，B 结构更便宜',en:'Type A is more expensive, Type B is cheaper'}
    ], answer:1,
    explanationZh:'A 结构：盖子 + 喷头 + 肩套（Shoulder）+ 瓶子 + 铝牌，中东风格常见。B 结构：盖子 + 喷头 + 中套（Collar）+ 瓶子，欧美风格常见。',
    explanationEn:'Type A: Cap + Pump + Shoulder + Bottle + Name Plate (common in Middle East style). Type B: Cap + Pump + Collar + Bottle (common in European/US style).' },

  { id:'q020', chapterId:'ch08', type:'single', difficulty:'medium',
    questionZh:'中套定制颜色的 MOQ 是多少？',
    questionEn:'What is the MOQ for custom-color collars?',
    options:[
      {zh:'5,000 pcs',en:'5,000 pcs'},
      {zh:'10,000 pcs',en:'10,000 pcs'},
      {zh:'20,000 pcs',en:'20,000 pcs'},
      {zh:'30,000 pcs',en:'30,000 pcs'}
    ], answer:3,
    explanationZh:'中套标准金/银色 MOQ 为 10,000 pcs；完全定制颜色 MOQ 更高，为 30,000 pcs。',
    explanationEn:'Collar standard gold/silver MOQ is 10,000 pcs; fully custom color MOQ is higher at 30,000 pcs.' }
];
