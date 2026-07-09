// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Knowledge Base
//  Source: DOC-001 香水包装产品知识手册 V3.0  (2026.07.04)
// ═══════════════════════════════════════════════════════

const CHAPTERS = [

// ── CH01 ─────────────────────────────────────────────
{
  id: 'ch01', order: 1,
  titleZh: '关于菲利包装', titleEn: 'About Fonli Packaging',
  icon: '🏢', estimatedMinutes: 8,
  sections: [
    {
      headingZh: `公司概况`, headingEn: `Company Overview`,
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
<div class="kc-intro"><strong>Fonli Packaging</strong> is a professional ODM/OEM manufacturer specializing in high-end perfume and cosmetic packaging, with our own factory and design team providing full-chain service from custom design to mass production.</div>
<table class="kc-table">
  <tr><td class="kc-label">Main Business</td><td>High-end perfume packaging ODM/OEM — glass bottles, caps, pumps, boxes, one-stop service</td></tr>
  <tr><td class="kc-label">Experience</td><td>10+ years in perfume packaging industry</td></tr>
  <tr><td class="kc-label">Resources</td><td>Own factory + own design team, full quality control</td></tr>
  <tr><td class="kc-label">Positioning</td><td>Mid-to-high-end, emphasizing design and craftsmanship value</td></tr>
  <tr><td class="kc-label">Markets</td><td>Europe · USA · Middle East · Asia</td></tr>
  <tr><td class="kc-label">Certifications</td><td>ISO 9001-2015 · ISO 14001 · Sedex · FSC · Global Recycled Standard</td></tr>
  <tr><td class="kc-label">Factory</td><td>Humen Town, Dongguan City, China</td></tr>
</table>`
    },
    {
      headingZh: `三大核心优势`, headingEn: `Three Core Strengths`,
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
      headingZh: `目标客户群`, headingEn: `Target Customers`,
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
    <tr><td><span class="kc-badge kc-badge-red">★★★</span></td><td>Own Fragrance Brands (EU/Middle East)</td><td>Clear positioning & new product plans — best quality leads</td></tr>
    <tr><td><span class="kc-badge kc-badge-red">★★★</span></td><td>Perfume OEM/ODM Factories</td><td>Stable brand clients, high repeat order rate</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">★★☆</span></td><td>Filling Companies / Regional Distributors</td><td>Have channels and budget, stable volume</td></tr>
    <tr><td><span class="kc-badge kc-badge-orange">★★☆</span></td><td>Overseas Packaging Design Firms</td><td>Professional clients with high craft requirements</td></tr>
    <tr><td><span class="kc-badge kc-badge-gray">★☆☆</span></td><td>Small / Inquiry-only Customers</td><td>Low priority — invest resources cautiously</td></tr>
  </tbody>
</table>`
    }
  ]
},

// ── CH02 ─────────────────────────────────────────────
{
  id: 'ch02', order: 2,
  titleZh: '定制项目流程', titleEn: 'Custom Project Process',
  icon: '⚙️', estimatedMinutes: 10,
  sections: [
    {
      headingZh: `六步定制流程`, headingEn: `6-Step Custom Process`,
      contentZh: `
<div class="kc-intro">独特美观的玻璃香水瓶是香水销售的亮点——不仅能吸引客户，更是产品的加分项。Fonli 提供从设计到量产的完整定制服务，共分 <strong>6 个步骤</strong>。</div>
<div class="kc-steps">
  <div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">设计构思 Design Concept</div><div class="kc-step-desc">了解品牌定位、目标人群、风格方向，确定设计概念基础</div></div></div>
  <div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">原型渲染 Prototyping & Rendering</div><div class="kc-step-desc">设计团队出方案、探索造型与工艺，呈现给客户审阅</div></div></div>
  <div class="kc-step"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">3D 打样 3D Mockup</div><div class="kc-step-desc">3D 建模技术制作数字或实物手板，确认尺寸、形状和细节</div></div></div>
  <div class="kc-step"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">报价确认 Cost Analysis</div><div class="kc-step-desc">根据选材、工艺复杂度、数量提供透明报价，逐环节说明成本</div></div></div>
  <div class="kc-step kc-step-highlight"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">模具与样品 Mould & Sample</div><div class="kc-step-desc">报价确认后制作量产模具，工程师确保精度，出样品确认 — <strong>必须获得客户书面签字</strong></div></div></div>
  <div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">大货生产 Mass Production</div><div class="kc-step-desc">模具就绪后启动量产，全程品控，确保每件符合最高标准</div></div></div>
</div>`,
      contentEn: `
<div class="kc-intro">A unique and beautiful glass perfume bottle is the highlight of fragrance sales. Fonli provides complete custom service from design to mass production in <strong>6 steps</strong>.</div>
<div class="kc-steps">
  <div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">Design Concept</div><div class="kc-step-desc">Understand brand positioning, target audience, and style direction to establish the design concept</div></div></div>
  <div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">Prototyping & Rendering</div><div class="kc-step-desc">Design team creates proposals, exploring shapes and craftsmanship for client review</div></div></div>
  <div class="kc-step"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">3D Mockup</div><div class="kc-step-desc">3D modeling technology to create digital or physical prototypes, confirming dimensions and details</div></div></div>
  <div class="kc-step"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">Cost Analysis</div><div class="kc-step-desc">Transparent quotation based on materials, craft complexity, and quantity</div></div></div>
  <div class="kc-step kc-step-highlight"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">Mould & Sample</div><div class="kc-step-desc">After quotation confirmation, produce production moulds and samples — <strong>written client sign-off required before proceeding</strong></div></div></div>
  <div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">Mass Production</div><div class="kc-step-desc">Full quality control throughout production to ensure every piece meets the highest standards</div></div></div>
</div>`
    },
    {
      headingZh: `公模 vs 私模`, headingEn: `Stock Mold vs Private Mold`,
      contentZh: `
<div class="kc-intro">菲利包装提供两种合作模式，业务员需根据客户需求和数量推荐合适方案。</div>
<table class="kc-table">
  <thead><tr><th>对比项</th><th>公模现货（标准款）</th><th>私模定制（新开模款）</th></tr></thead>
  <tbody>
    <tr><td class="kc-label">瓶型归属</td><td>与其他品牌共用标准款</td><td>客户品牌专属，不与他人共用</td></tr>
    <tr><td class="kc-label">MOQ</td><td><strong>10,000 pcs</strong></td><td><strong>20,000 – 30,000 pcs</strong></td></tr>
    <tr><td class="kc-label">开模费</td><td>无（现有模具）</td><td>需支付一次性开模费</td></tr>
    <tr><td class="kc-label">交期</td><td>较短（模具已有）</td><td>较长（需开模）</td></tr>
    <tr><td class="kc-label">适合客户</td><td>预算有限、量不大、快速出货</td><td>有品牌意识、追求独特性、量大</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Fonli offers two cooperation modes. Sales staff should recommend the right option based on client needs and quantity.</div>
<table class="kc-table">
  <thead><tr><th>Comparison</th><th>Stock Mold (Standard)</th><th>Private Mold (Custom)</th></tr></thead>
  <tbody>
    <tr><td class="kc-label">Bottle Ownership</td><td>Shared standard mold with other brands</td><td>Exclusively owned by client brand</td></tr>
    <tr><td class="kc-label">MOQ</td><td><strong>10,000 pcs</strong></td><td><strong>20,000 – 30,000 pcs</strong></td></tr>
    <tr><td class="kc-label">Tooling Fee</td><td>None (existing mold)</td><td>One-time tooling fee required</td></tr>
    <tr><td class="kc-label">Lead Time</td><td>Shorter (mold ready)</td><td>Longer (mold creation needed)</td></tr>
    <tr><td class="kc-label">Best For</td><td>Limited budget, smaller quantity, fast delivery</td><td>Brand-conscious clients seeking uniqueness, larger volume</td></tr>
  </tbody>
</table>`
    }
  ]
},

// ── CH03 ─────────────────────────────────────────────
{
  id: 'ch03', order: 3,
  titleZh: '玻璃瓶', titleEn: 'Glass Bottle',
  icon: '🍶', estimatedMinutes: 15,
  sections: [
    {
      headingZh: `规格参数与材料`, headingEn: `Specifications & Materials`,
      contentZh: `
<div class="kc-intro">玻璃瓶是盛装香水的主体容器，也是整套包装中最大的视觉面，直接传递品牌风格与调性。</div>
<table class="kc-table">
  <thead><tr><th>容量</th><th>重量范围</th><th>生产交期</th><th>封口规格</th></tr></thead>
  <tbody>
    <tr><td>30 ml</td><td>80 – 150 g</td><td>50 – 60 天</td><td rowspan="3">Crimp（卡口）/ Screw（螺口）<br>颈口：FEA 13 / 15 / 18 / 20 mm</td></tr>
    <tr><td>50 ml</td><td>130 – 180 g</td><td>50 – 60 天</td></tr>
    <tr><td>100 ml</td><td>200 – 280 g</td><td>30 – 40 天</td></tr>
    <tr><td>定制规格</td><td>基于设计</td><td>基于设计</td><td>根据实际设计及开模情况确定</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>材料类型</th><th>英文</th><th>特点</th></tr></thead>
  <tbody>
    <tr><td><strong>高白料玻璃</strong></td><td>White Opal Glass</td><td>透明度高，折射效果好，显色准确；适合高端定制</td></tr>
    <tr><td>普通玻璃（毛瓶）</td><td>Flint Glass / Plain Bottles</td><td>通用玻璃，成本较低，适合公模现货款</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">The glass bottle is the main container for perfume and the largest visual surface of the entire packaging, directly conveying brand style and tone.</div>
<table class="kc-table">
  <thead><tr><th>Volume</th><th>Weight Range</th><th>Lead Time</th><th>Neck Finish</th></tr></thead>
  <tbody>
    <tr><td>30 ml</td><td>80 – 150 g</td><td>50 – 60 days</td><td rowspan="3">Crimp / Screw<br>FEA 13 / 15 / 18 / 20 mm</td></tr>
    <tr><td>50 ml</td><td>130 – 180 g</td><td>50 – 60 days</td></tr>
    <tr><td>100 ml</td><td>200 – 280 g</td><td>30 – 40 days</td></tr>
    <tr><td>Custom</td><td>Design-based</td><td>Design-based</td><td>Determined by design and mold</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>Material</th><th>Name</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td><strong>High-clarity Glass</strong></td><td>White Opal Glass</td><td>High transparency, excellent refraction, accurate color; suitable for high-end custom</td></tr>
    <tr><td>Standard Glass</td><td>Flint Glass / Plain Bottles</td><td>General glass, lower cost, suitable for stock mold products</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `装饰工艺`, headingEn: `Decoration Processes`,
      contentZh: `
<div class="kc-intro">香水瓶表面工艺直接影响产品的视觉效果和档次感，业务员必须熟悉每种工艺的效果与特点。</div>
<table class="kc-table">
  <thead><tr><th>工艺中文</th><th>工艺英文</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>喷涂</td><td>Color Coating / Painting</td><td>实色 / 透明 / 渐变 / 局部喷涂，可调配专属颜色</td></tr>
    <tr><td>UV 电镀</td><td>Metalizing / UV Plating</td><td>金属质感，增加档次感（金/银/玫瑰金等）</td></tr>
    <tr><td>蒙沙 / 喷沙</td><td>Frosting / Sand-blasting</td><td>磨砂质感，低调奢华，欧美市场常见</td></tr>
    <tr><td>植绒</td><td>Flocking / Velvet</td><td>天鹅绒触感，高端礼品感</td></tr>
    <tr><td>裂纹</td><td>Cracking</td><td>特殊纹理效果，艺术感强</td></tr>
    <tr><td>烫金 / 丝印</td><td>Hot Stamping / Silk Screen</td><td>常用于品牌 LOGO 印刷，每种工艺/LOGO 标准 MOQ 10,000 pcs</td></tr>
    <tr><td>橡胶漆</td><td>Rubber Coating / Soft Touch</td><td>柔软触感涂层，防滑且高级（哑面阻尼手感）</td></tr>
    <tr><td>蚀刻</td><td>Etching</td><td>表面纹理处理，适合特殊造型设计</td></tr>
    <tr><td>转印</td><td>Transfer / Decal</td><td>把印刷好的图案转印到瓶子上（贴花工艺）</td></tr>
    <tr><td>UV 打印</td><td>UV Printing</td><td>用打印机直接打印在玻璃瓶上，表面有颗粒感</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Surface treatments directly affect the visual impact and perceived quality of the bottle. Sales staff must be familiar with each process.</div>
<table class="kc-table">
  <thead><tr><th>Chinese</th><th>English</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>喷涂</td><td>Color Coating / Painting</td><td>Solid / transparent / gradient / partial coating — custom colors available</td></tr>
    <tr><td>UV 电镀</td><td>Metalizing / UV Plating</td><td>Metallic finish — gold, silver, rose gold, etc.</td></tr>
    <tr><td>蒙沙 / 喷沙</td><td>Frosting / Sand-blasting</td><td>Matte frosted texture, understated luxury, popular in EU/US markets</td></tr>
    <tr><td>植绒</td><td>Flocking / Velvet</td><td>Velvety soft touch, premium gift feel</td></tr>
    <tr><td>裂纹</td><td>Cracking</td><td>Special crackle texture, strong artistic effect</td></tr>
    <tr><td>烫金 / 丝印</td><td>Hot Stamping / Silk Screen</td><td>Common for brand LOGO printing; standard MOQ 10,000 pcs per process/LOGO</td></tr>
    <tr><td>橡胶漆</td><td>Rubber Coating / Soft Touch</td><td>Soft matte coating, anti-slip, premium damped feel</td></tr>
    <tr><td>蚀刻</td><td>Etching</td><td>Surface texture treatment for special design patterns</td></tr>
    <tr><td>转印</td><td>Transfer / Decal</td><td>Transfer pre-printed designs onto the bottle</td></tr>
    <tr><td>UV 打印</td><td>UV Printing</td><td>Direct print on glass bottle, slight surface texture</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `A/B 结构详解`, headingEn: `Structure A vs Structure B`,
      contentZh: `
<div class="kc-intro">香水瓶有两种常见装配结构，业务员必须熟练区分，直接影响配件选型和报价。</div>
<div class="kc-ab-wrap">
  <div class="kc-ab-box kc-ab-a">
    <div class="kc-ab-title">🅐 A 结构（带肩套 / 铝牌）</div>
    <div class="kc-ab-subtitle">中东高端风格常见</div>
    <ol class="kc-ab-list">
      <li>盖子（Cap）</li>
      <li>PP 垫片</li>
      <li>喷头（Pump）</li>
      <li>肩套（<strong>Shoulder</strong>）</li>
      <li>铝牌（<strong>Name Plate</strong>）</li>
      <li>玻璃瓶（Glass Bottle）</li>
    </ol>
    <div class="kc-ab-note">✦ 特点：肩套覆盖瓶肩，铝牌展示品牌，整体感强，多用于中东高端香水</div>
  </div>
  <div class="kc-ab-box kc-ab-b">
    <div class="kc-ab-title">🅑 B 结构（带中套）</div>
    <div class="kc-ab-subtitle">欧美现代风格常见</div>
    <ol class="kc-ab-list">
      <li>盖子（Cap）</li>
      <li>PP 垫片</li>
      <li>喷头（Pump）</li>
      <li>中套（<strong>Collar</strong>）</li>
      <li>玻璃瓶（Glass Bottle）</li>
    </ol>
    <div class="kc-ab-note">✦ 特点：中套套在瓶口喷头处，起装饰和固定双重作用，欧美现代简约风格常见</div>
  </div>
</div>
<div class="kc-highlight-box">⚠️ 关键提示：接单时必须与客户确认是 A 结构还是 B 结构，结构不同则配件完全不同，直接影响报价！</div>`,
      contentEn: `
<div class="kc-intro">Perfume bottles come in two common assembly structures. Sales staff must distinguish them clearly — the choice directly affects component selection and quotation.</div>
<div class="kc-ab-wrap">
  <div class="kc-ab-box kc-ab-a">
    <div class="kc-ab-title">🅐 Structure A (Shoulder + Name Plate)</div>
    <div class="kc-ab-subtitle">Common in Middle East high-end style</div>
    <ol class="kc-ab-list">
      <li>Cap</li>
      <li>PP Gasket</li>
      <li>Spray Pump</li>
      <li><strong>Shoulder</strong></li>
      <li><strong>Name Plate</strong></li>
      <li>Glass Bottle</li>
    </ol>
    <div class="kc-ab-note">✦ The shoulder covers the bottle neck; the name plate displays the brand — commonly used in Middle East luxury perfumes</div>
  </div>
  <div class="kc-ab-box kc-ab-b">
    <div class="kc-ab-title">🅑 Structure B (Collar)</div>
    <div class="kc-ab-subtitle">Common in European / American modern style</div>
    <ol class="kc-ab-list">
      <li>Cap</li>
      <li>PP Gasket</li>
      <li>Spray Pump</li>
      <li><strong>Collar</strong></li>
      <li>Glass Bottle</li>
    </ol>
    <div class="kc-ab-note">✦ The collar sits around the pump at the bottle neck, serving both decorative and stabilizing purposes — popular in modern EU/US styles</div>
  </div>
</div>
<div class="kc-highlight-box">⚠️ Key: Always confirm with client whether they need Structure A or B — different structures require completely different components and affect pricing!</div>`
    },
    {
      headingZh: `抛光工艺与品检要点 / 产品图片`, headingEn: `Polishing & QC / Product Images`,
      contentZh: `
<div class="kc-intro">以下为常见抛光工艺对比。</div>
<table class="kc-table">
  <thead><tr><th>工艺</th><th>英文</th><th>特点</th></tr></thead>
  <tbody>
    <tr><td><strong>手抛</strong></td><td>Hand Polishing</td><td>透明度极高，折射效果极好，棱角分明；适合高端香水包装，价格最高</td></tr>
    <tr><td>火抛</td><td>Fire Polishing</td><td>通透度高，表面瑕疵少，棱角比较圆滑；价格居中</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">品检要点：</div>
<table class="kc-table">
  <thead><tr><th>检查项</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>气泡（Bubbles）</td><td>玻璃生产过程中的气泡，验货时重点检查</td></tr>
    <tr><td>破裂 / 碎裂（Cracks / Chips）</td><td>运输或生产损坏，验货必检，封柜前逐箱确认</td></tr>
    <tr><td>容量标准（OFC）</td><td>以 OFC（Over Flow Capacity 溢流容量）为准，非满口容量</td></tr>
    <tr><td>公差（Tolerance）</td><td>瓶身 ±1mm，容量 ±3ml，重量 ±5g（正常范围）</td></tr>
    <tr><td>封口方式确认</td><td>卡口（Crimp）和螺口（Screw）不可互换，下单前必须确认</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">产品图片</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_000.jpg" class="kc-img" loading="lazy" alt="喷涂渐变效果"><p class="kc-img-caption">喷涂渐变效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_001.jpg" class="kc-img" loading="lazy" alt="产品工艺效果"><p class="kc-img-caption">产品工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_002.jpg" class="kc-img" loading="lazy" alt="产品工艺效果"><p class="kc-img-caption">产品工艺效果</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_050.jpg" class="kc-img" loading="lazy" alt="玻璃瓶展示"><p class="kc-img-caption">玻璃瓶展示</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_049.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_048.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_047.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_046.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_045.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_044.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_043.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_042.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_041.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_040.jpg" class="kc-img" loading="lazy" alt="工艺效果"><p class="kc-img-caption">工艺效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_003.jpg" class="kc-img" loading="lazy" alt="产品图"><p class="kc-img-caption">产品图</p></div></div></div>`,
      contentEn: `
<div class="kc-intro">Polishing process comparison:</div>
<table class="kc-table">
  <thead><tr><th>Process</th><th>English</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td><strong>Hand Polishing</strong></td><td>Hand Polishing</td><td>Highest transparency, best refraction, sharp edges; top-tier pricing</td></tr>
    <tr><td>Fire Polishing</td><td>Fire Polishing</td><td>High clarity, fewer surface defects, smoother edges; mid-range pricing</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">Quality Inspection Points:</div>
<table class="kc-table">
  <thead><tr><th>Check Item</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>Bubbles</td><td>Air bubbles formed during glass production — inspect carefully during QC</td></tr>
    <tr><td>Cracks / Chips</td><td>Production or transport damage — must check every carton before sealing container</td></tr>
    <tr><td>OFC Standard</td><td>Volume measured by OFC (Over Flow Capacity), not brimful capacity</td></tr>
    <tr><td>Tolerance</td><td>Bottle body ±1mm, volume ±3ml, weight ±5g (normal range)</td></tr>
    <tr><td>Neck Finish</td><td>Crimp and Screw are NOT interchangeable — must confirm before ordering</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">Product Images</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_000.jpg" class="kc-img" loading="lazy" alt="Color coating gradient"><p class="kc-img-caption">Color coating gradient</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_001.jpg" class="kc-img" loading="lazy" alt="Process effect"><p class="kc-img-caption">Process effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_002.jpg" class="kc-img" loading="lazy" alt="Process effect"><p class="kc-img-caption">Process effect</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_050.jpg" class="kc-img" loading="lazy" alt="Bottle display"><p class="kc-img-caption">Bottle display</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_049.jpg" class="kc-img" loading="lazy" alt="Effect sample"><p class="kc-img-caption">Effect sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_048.jpg" class="kc-img" loading="lazy" alt="Effect sample"><p class="kc-img-caption">Effect sample</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_047.jpg" class="kc-img" loading="lazy" alt="Effect"><p class="kc-img-caption">Effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_046.jpg" class="kc-img" loading="lazy" alt="Effect"><p class="kc-img-caption">Effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_045.jpg" class="kc-img" loading="lazy" alt="Effect"><p class="kc-img-caption">Effect</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_044.jpg" class="kc-img" loading="lazy" alt="Effect"><p class="kc-img-caption">Effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_043.jpg" class="kc-img" loading="lazy" alt="Effect"><p class="kc-img-caption">Effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_042.jpg" class="kc-img" loading="lazy" alt="Effect"><p class="kc-img-caption">Effect</p></div></div></div>`
    }
  ]
},

// ── CH04 ─────────────────────────────────────────────
{
  id: 'ch04', order: 4,
  titleZh: '香水盖', titleEn: 'Perfume Cap',
  icon: '🔵', estimatedMinutes: 12,
  sections: [
    {
      headingZh: `材料类型（9种）`, headingEn: `Cap Materials (9 Types)`,
      contentZh: `
<div class="kc-intro">香水盖是整套包装中客户手感最直接的部件，也是彰显品牌设计风格与档次的重要元素。</div>
<table class="kc-table">
  <thead><tr><th>序号</th><th>英文名</th><th>中文名</th><th>特点与卖点</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>ABS</td><td>ABS 工程塑料</td><td>可电镀/喷涂，性价比高，适合中端产品</td></tr>
    <tr><td>2</td><td>Zamak / Zinc Alloy</td><td>锌铝合金</td><td>重量感好，电镀效果出色；中东高端市场常用，质感高级</td></tr>
    <tr><td>3</td><td>Aluminium Oxide</td><td>电化铝</td><td>轻盈，哑光金属质感，色泽均匀自然</td></tr>
    <tr><td>4</td><td>K Materials</td><td>K 料（K 树脂）</td><td>高透明度，仿水晶效果，折射感佳</td></tr>
    <tr><td>5</td><td>Surlyn</td><td>沙林（离聚物）</td><td>高透明，可做通透水晶感；常见于欧式设计</td></tr>
    <tr><td>6</td><td>Acrylic</td><td>亚克力</td><td>透明或彩色，可雕刻花纹，视觉效果丰富</td></tr>
    <tr><td>7</td><td>PP</td><td>聚丙烯塑料</td><td>轻量，颜色丰富，经济实惠；适合简约风格或库存款</td></tr>
    <tr><td>8</td><td>Wood</td><td>木盖</td><td>自然质感，环保定位，欧美市场越来越受欢迎</td></tr>
    <tr><td>9</td><td>Magnetic</td><td>磁吸盖</td><td>开合顺滑，高级感强；适合高端定制款，常规磁力 N42/N52</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">The cap is the component clients touch most directly — it is a key element expressing brand design style and product grade.</div>
<table class="kc-table">
  <thead><tr><th>#</th><th>English</th><th>Chinese</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>ABS</td><td>ABS Engineering Plastic</td><td>Can be plated/painted, cost-effective, suitable for mid-range products</td></tr>
    <tr><td>2</td><td>Zamak / Zinc Alloy</td><td>锌铝合金</td><td>Heavy feel, excellent plating; preferred in Middle East high-end market</td></tr>
    <tr><td>3</td><td>Aluminium Oxide</td><td>电化铝</td><td>Lightweight, matte metallic look, natural even color</td></tr>
    <tr><td>4</td><td>K Materials</td><td>K 料</td><td>High transparency, crystal-like effect, good refraction</td></tr>
    <tr><td>5</td><td>Surlyn</td><td>沙林</td><td>High transparency, crystal-clear effect; popular in European designs</td></tr>
    <tr><td>6</td><td>Acrylic</td><td>亚克力</td><td>Transparent or colored, can be engraved, rich visual effects</td></tr>
    <tr><td>7</td><td>PP</td><td>聚丙烯</td><td>Lightweight, many colors, economical; suitable for minimalist or stock styles</td></tr>
    <tr><td>8</td><td>Wood</td><td>木盖</td><td>Natural texture, eco-friendly positioning, growing popularity in EU/US markets</td></tr>
    <tr><td>9</td><td>Magnetic</td><td>磁吸盖</td><td>Smooth open/close, premium feel; standard magnetic strength N42/N52</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `装饰工艺与品检 / 产品图片`, headingEn: `Decoration & QC / Product Images`,
      contentZh: `
<table class="kc-table">
  <thead><tr><th>工艺名称</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>水镀（Metalizing）</td><td>最常见，可做金/银/黑镍等，Zamak 和 ABS 最适合，金属感强</td></tr>
    <tr><td>UV 真空镀（UV Plating）</td><td>价格比水镀低，表面达到电镀效果；纹路上颜色均匀度相对较差</td></tr>
    <tr><td>喷涂（Color Coating）</td><td>哑光/亮光/橡胶漆，颜色完全自定义</td></tr>
    <tr><td>烫金（Hot Stamping）</td><td>LOGO 或花纹在盖子上呈现</td></tr>
    <tr><td>蚀刻 / 雕花（Etching / Engraving）</td><td>凹进去的花纹，高端感强</td></tr>
    <tr><td>压花（Embossing）</td><td>凸出来的花纹，立体视觉效果</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ 品检要点：电镀均匀度、批次色差需对比对版样；磁力过强或过弱均影响体验，需打样确认。</div>
<div class="kc-intro" style="margin-top:16px">产品图片</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_039.jpg" class="kc-img" loading="lazy" alt="香水盖展示"><p class="kc-img-caption">香水盖展示</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_038.jpg" class="kc-img" loading="lazy" alt="盖子样品"><p class="kc-img-caption">盖子样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_037.jpg" class="kc-img" loading="lazy" alt="盖子工艺"><p class="kc-img-caption">盖子工艺</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_036.jpg" class="kc-img" loading="lazy" alt="盖子效果"><p class="kc-img-caption">盖子效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_035.jpg" class="kc-img" loading="lazy" alt="盖子样品"><p class="kc-img-caption">盖子样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Process</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>Metalizing / Galvanization</td><td>Most common; gold/silver/black nickel; best on Zamak and ABS; strong metallic feel</td></tr>
    <tr><td>UV Vacuum Plating</td><td>Lower cost than water plating; achieves plating appearance; slightly less uniform on textured areas</td></tr>
    <tr><td>Color Coating</td><td>Matte/gloss/rubber coating; fully custom color</td></tr>
    <tr><td>Hot Stamping</td><td>LOGO or pattern stamped onto cap</td></tr>
    <tr><td>Etching / Engraving</td><td>Recessed patterns, high-end feel</td></tr>
    <tr><td>Embossing</td><td>Raised patterns, 3D visual effect</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ QC Notes: Compare plating uniformity and batch color against approved samples. Magnetic strength must be confirmed at sampling stage.</div>
<div class="kc-intro" style="margin-top:16px">Product Images</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_039.jpg" class="kc-img" loading="lazy" alt="Cap display"><p class="kc-img-caption">Cap display</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_038.jpg" class="kc-img" loading="lazy" alt="Cap sample"><p class="kc-img-caption">Cap sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_037.jpg" class="kc-img" loading="lazy" alt="Cap process"><p class="kc-img-caption">Cap process</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_036.jpg" class="kc-img" loading="lazy" alt="Cap effect"><p class="kc-img-caption">Cap effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_035.jpg" class="kc-img" loading="lazy" alt="Cap sample"><p class="kc-img-caption">Cap sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`
    }
  ]
},

// ── CH05 ─────────────────────────────────────────────
{
  id: 'ch05', order: 5,
  titleZh: '喷头', titleEn: 'Spray Pump',
  icon: '💨', estimatedMinutes: 10,
  sections: [
    {
      headingZh: `规格参数与部件构成`, headingEn: `Specifications & Components`,
      contentZh: `
<div class="kc-intro">喷头是控制香水喷出量与雾化效果的核心功能部件。标准颈口 15mm，标准出液量 0.10–0.12 ml/次。</div>
<table class="kc-table">
  <thead><tr><th>参数</th><th>规格</th></tr></thead>
  <tbody>
    <tr><td>颈口尺寸（Neck Size）</td><td>13 / 15 / 18 / 20 mm（<strong>15mm 为最常规</strong>）</td></tr>
    <tr><td>材料（Material）</td><td>铝（Aluminium）/ 塑料（Plastic）</td></tr>
    <tr><td>颜色</td><td>金色 / 银色 / 定制颜色</td></tr>
    <tr><td>封口方式</td><td>卡口款（Crimp）为主，另有螺口式（Screw）适合旅行款</td></tr>
    <tr><td>海关编码</td><td>9616 1000 00</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>序号</th><th>部件（中文）</th><th>部件（英文）</th><th>功能</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>压头</td><td>Actuator / Push Head</td><td>手指按压触发喷射</td></tr>
    <tr><td>2</td><td>喷嘴</td><td>Nozzle</td><td>雾化喷出口，决定喷雾角度和细腻度</td></tr>
    <tr><td>3</td><td>导管</td><td>Dip-tube / Intake Tube</td><td>伸入瓶底的细管，吸取香水液体</td></tr>
    <tr><td>4</td><td>弹簧</td><td>Upper Spring</td><td>提供回弹力，按压后自动复位</td></tr>
    <tr><td>5</td><td>泵体</td><td>Pump Body</td><td>主体压力腔，驱动液体上升</td></tr>
    <tr><td>6</td><td>活塞</td><td>Piston</td><td>在泵体内往复运动产生压力</td></tr>
    <tr><td>7</td><td>密封圈</td><td>Gasket</td><td>防止香水泄漏的密封件</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">The spray pump controls perfume output and atomization. Standard neck size is 15mm; standard dosage is 0.10–0.12 ml per actuation.</div>
<table class="kc-table">
  <thead><tr><th>Parameter</th><th>Specification</th></tr></thead>
  <tbody>
    <tr><td>Neck Size</td><td>13 / 15 / 18 / 20 mm (<strong>15mm most common</strong>)</td></tr>
    <tr><td>Material</td><td>Aluminium / Plastic</td></tr>
    <tr><td>Color</td><td>Gold / Silver / Custom</td></tr>
    <tr><td>Closure Type</td><td>Crimp (main), Screw type for travel/airline products</td></tr>
    <tr><td>HS Code</td><td>9616 1000 00</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>#</th><th>Part (EN)</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Actuator / Push Head</td><td>Finger-press trigger to activate spray</td></tr>
    <tr><td>2</td><td>Nozzle</td><td>Atomization outlet — determines spray angle and fineness</td></tr>
    <tr><td>3</td><td>Dip-tube / Intake Tube</td><td>Tube reaching to bottle bottom to draw liquid</td></tr>
    <tr><td>4</td><td>Upper Spring</td><td>Provides rebound force for auto-return after pressing</td></tr>
    <tr><td>5</td><td>Pump Body</td><td>Main pressure chamber driving liquid upward</td></tr>
    <tr><td>6</td><td>Piston</td><td>Reciprocating motion inside pump body to generate pressure</td></tr>
    <tr><td>7</td><td>Gasket</td><td>Sealing component to prevent leakage</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `喷头类型对比 / 品检 / 产品图片`, headingEn: `Pump Types & QC / Images`,
      contentZh: `
<table class="kc-table">
  <thead><tr><th>类型</th><th>卡口式 (Crimp Pump)</th><th>螺口式 (Screw Type)</th></tr></thead>
  <tbody>
    <tr><td>结构</td><td>压接卡固，不可拆卸</td><td>螺旋旋入，可锁定</td></tr>
    <tr><td>优点</td><td>使用方便，密封好，最常见</td><td>防止旅行中误喷，安全性高</td></tr>
    <tr><td>适用场景</td><td>日常零售款（绝大多数产品）</td><td>旅行装、航空限制规格</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ 注意：导管须根据瓶身高度定制，过长会折弯影响出液，过短会有死角残液。喷头颈口规格必须与瓶口匹配，下单前务必确认。</div>
<div class="kc-intro" style="margin-top:16px">产品图片</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_034.jpg" class="kc-img" loading="lazy" alt="喷头展示"><p class="kc-img-caption">喷头展示</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_033.jpg" class="kc-img" loading="lazy" alt="喷头样品"><p class="kc-img-caption">喷头样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Type</th><th>Crimp Pump</th><th>Screw Type</th></tr></thead>
  <tbody>
    <tr><td>Structure</td><td>Press-crimped, non-detachable</td><td>Screw-in, can be locked</td></tr>
    <tr><td>Advantage</td><td>Easy to use, good seal, most common</td><td>Prevents accidental spraying while traveling</td></tr>
    <tr><td>Best For</td><td>Standard retail products (most products)</td><td>Travel-size, airline-compliant products</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ Note: Dip-tube length must be customized to bottle height — too long causes bending, too short leaves residue. Neck size MUST match bottle neck before ordering.</div>
<div class="kc-intro" style="margin-top:16px">Product Images</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_034.jpg" class="kc-img" loading="lazy" alt="Spray pump display"><p class="kc-img-caption">Spray pump display</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_033.jpg" class="kc-img" loading="lazy" alt="Pump sample"><p class="kc-img-caption">Pump sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`
    }
  ]
},

// ── CH06 ─────────────────────────────────────────────
{
  id: 'ch06', order: 6,
  titleZh: '中套', titleEn: 'Collar / Ring',
  icon: '⭕', estimatedMinutes: 8,
  sections: [
    {
      headingZh: `规格参数与注意事项 / 产品图片`, headingEn: `Specifications & Notes / Images`,
      contentZh: `
<div class="kc-intro">中套（Collar / Ring）套在喷头与瓶口之间，起固定喷头和装饰美观的双重作用。</div>
<table class="kc-table">
  <thead><tr><th>参数</th><th>标准款</th><th>定制款</th></tr></thead>
  <tbody>
    <tr><td>颈口尺寸</td><td>15 mm</td><td>15 mm / 可定制</td></tr>
    <tr><td>材料</td><td>铝（Alu）/ 塑料</td><td>铝 / 锌合金（Zamac）/ 塑料</td></tr>
    <tr><td>颜色</td><td>金色 / 银色</td><td>金色 / 银色 / 完全定制</td></tr>
    <tr><td>MOQ</td><td>10,000 pcs（金/银色）</td><td>定制颜色 30,000 pcs；锌合金定制 10,000 pcs</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ 注意：中套内径须与瓶颈外径吻合，下单前需核对瓶颈尺寸。定制颜色 MOQ 为 30,000 pcs，数量不足时建议选金/银标准色。</div>
<div class="kc-intro" style="margin-top:16px">产品图片</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_032.jpg" class="kc-img" loading="lazy" alt="中套展示"><p class="kc-img-caption">中套展示</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_031.jpg" class="kc-img" loading="lazy" alt="中套样品"><p class="kc-img-caption">中套样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`,
      contentEn: `
<div class="kc-intro">The Collar (Ring) sits between the pump and bottle neck, serving both stabilization and decorative purposes.</div>
<table class="kc-table">
  <thead><tr><th>Parameter</th><th>Standard</th><th>Custom</th></tr></thead>
  <tbody>
    <tr><td>Neck Size</td><td>15 mm</td><td>15 mm / customizable</td></tr>
    <tr><td>Material</td><td>Aluminium / Plastic</td><td>Alu / Zamac / Plastic</td></tr>
    <tr><td>Color</td><td>Gold / Silver</td><td>Gold / Silver / Fully Custom</td></tr>
    <tr><td>MOQ</td><td>10,000 pcs (gold/silver)</td><td>Custom color: 30,000 pcs; Zamac custom: 10,000 pcs</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ Note: Collar inner diameter must match bottle neck outer diameter — verify before ordering. Custom color MOQ is 30,000 pcs; recommend standard gold/silver if quantity is insufficient.</div>
<div class="kc-intro" style="margin-top:16px">Product Images</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_032.jpg" class="kc-img" loading="lazy" alt="Collar display"><p class="kc-img-caption">Collar display</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_031.jpg" class="kc-img" loading="lazy" alt="Collar sample"><p class="kc-img-caption">Collar sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`
    }
  ]
},

// ── CH07 ─────────────────────────────────────────────
{
  id: 'ch07', order: 7,
  titleZh: '香水标牌', titleEn: 'Name Plate',
  icon: '🏷️', estimatedMinutes: 12,
  sections: [
    {
      headingZh: `标牌材料与规格`, headingEn: `Plate Materials & Specs`,
      contentZh: `
<div class="kc-intro">香水标牌（Name Plate）是贴附在瓶身的品牌装饰铭牌，承载品牌 LOGO 与香型名称，常见于中东风格高端香水。</div>
<table class="kc-table">
  <thead><tr><th>材料类型</th><th>英文</th><th>特点</th></tr></thead>
  <tbody>
    <tr><td>铝标牌</td><td>Aluminum Label</td><td>性价比高，平印工艺让标牌色彩丰富，适合大众定制</td></tr>
    <tr><td>不锈钢标牌</td><td>Stainless Steel Plate</td><td>常用腐蚀工艺，非常有质感，价格偏贵</td></tr>
    <tr><td>锌合金标牌</td><td>Zamac Plate</td><td>更有厚实感，配合锌合金盖子整体搭配性更好</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>参数</th><th>规格</th></tr></thead>
  <tbody>
    <tr><td>MOQ</td><td>3,000 pcs（标准金/银色）</td></tr>
    <tr><td>固定方式</td><td>背胶粘贴（常见）/ 嵌入式</td></tr>
    <tr><td>表面工艺</td><td>电镀、印刷、烫金、凹凸（Embossing/Debossing）、蚀刻</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">产品图片</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_015.jpg" class="kc-img" loading="lazy" alt="标牌效果"><p class="kc-img-caption">标牌效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_014.jpg" class="kc-img" loading="lazy" alt="标牌样品"><p class="kc-img-caption">标牌样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_013.jpg" class="kc-img" loading="lazy" alt="标牌展示"><p class="kc-img-caption">标牌展示</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_012.jpg" class="kc-img" loading="lazy" alt="标牌工艺"><p class="kc-img-caption">标牌工艺</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`,
      contentEn: `
<div class="kc-intro">The Name Plate is a brand decorative plaque attached to the bottle, carrying the brand LOGO and fragrance name — common in Middle East high-end perfumes.</div>
<table class="kc-table">
  <thead><tr><th>Material</th><th>English</th><th>Features</th></tr></thead>
  <tbody>
    <tr><td>Aluminum Plate</td><td>Aluminum Label</td><td>Cost-effective, rich color printing possible, suitable for general custom</td></tr>
    <tr><td>Stainless Steel</td><td>Stainless Steel Plate</td><td>Etching process, premium texture, higher cost</td></tr>
    <tr><td>Zinc Alloy</td><td>Zamac Plate</td><td>Thick and heavy feel, pairs well with Zamac caps</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>Parameter</th><th>Specification</th></tr></thead>
  <tbody>
    <tr><td>MOQ</td><td>3,000 pcs (standard gold/silver)</td></tr>
    <tr><td>Attachment</td><td>Adhesive backing (common) / Inset mounting</td></tr>
    <tr><td>Surface Process</td><td>Plating, printing, hot stamping, embossing/debossing, etching</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">Product Images</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_015.jpg" class="kc-img" loading="lazy" alt="Plate effect"><p class="kc-img-caption">Plate effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_014.jpg" class="kc-img" loading="lazy" alt="Plate sample"><p class="kc-img-caption">Plate sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_013.jpg" class="kc-img" loading="lazy" alt="Plate display"><p class="kc-img-caption">Plate display</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_012.jpg" class="kc-img" loading="lazy" alt="Plate process"><p class="kc-img-caption">Plate process</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`
    },
    {
      headingZh: `工艺详解（铝 / 不锈钢 / 锌合金）`, headingEn: `Process Details (Alu/Steel/Zamac)`,
      contentZh: `
<div class="kc-intro">铝标牌常规工艺流程图解：</div>
<table class="kc-table">
  <thead><tr><th>工艺</th><th>英文</th><th>说明</th><th>工艺图</th></tr></thead>
  <tbody>
    <tr><td>平印</td><td>Off-set Printing</td><td>可印渐变色、4C叠加等图案；注意颜色偏差需与对版样对比</td><td><div class="kc-img-wrap"><img src="images/img_030.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>UV 打印</td><td>Digital Printing</td><td>打印机打印在铝板上，油墨比较厚，墨点较大</td><td><div class="kc-img-wrap"><img src="images/img_029.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>丝印</td><td>Silk-screen Printing</td><td>油墨厚度介于平印和UV打印之间；适合闪粉等颗粒大的油墨</td><td><div class="kc-img-wrap"><img src="images/img_028.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>凸字 / 凹字</td><td>Embossing / Debossing</td><td>实现 3D 凸字/凹字 LOGO，需开字模</td><td><div class="kc-img-wrap"><img src="images/img_025.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>冲压</td><td>Stamping</td><td>使产品成形，冲出客户所需形状</td><td><div class="kc-img-wrap"><img src="images/img_024.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>光学镀</td><td>Lighting Coating</td><td>平面的 3D 立体效果，透明可掩盖印刷瑕疵</td><td><div class="kc-img-wrap"><img src="images/img_023.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>氧化</td><td>Anodized</td><td>仅适用于铝材质；颜色可调整；注意：容易出现变色、色差</td><td><div class="kc-img-wrap"><img src="images/img_022.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">不锈钢标牌工艺：</div>
<table class="kc-table">
  <thead><tr><th>工艺</th><th>英文</th><th>说明</th><th>工艺图</th></tr></thead>
  <tbody>
    <tr><td>腐蚀</td><td>Etching</td><td>地面有沙底效果，发白色哑光面；配合上色可做丰富效果</td><td><div class="kc-img-wrap"><img src="images/img_021.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>电镀</td><td>Metalizing / Galvanization</td><td>金色/亮枪色等电镀处理，质感极佳</td><td><div class="kc-img-wrap"><img src="images/img_020.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>上色 / 滴胶</td><td>Epoxy / Fill Up Colors</td><td>腐蚀后在凹槽填入颜色</td><td><div class="kc-img-wrap"><img src="images/img_019.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">锌合金标牌工艺：</div>
<table class="kc-table">
  <thead><tr><th>工艺</th><th>英文</th><th>说明</th><th>工艺图</th></tr></thead>
  <tbody>
    <tr><td>压铸</td><td>Die Casting</td><td>锌合金熔液注入模具成型</td><td><div class="kc-img-wrap"><img src="images/img_018.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>抛光</td><td>Polishing</td><td>去除毛坯氧化层和瑕疵，使表面光滑</td><td><div class="kc-img-wrap"><img src="images/img_017.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>仿珐琅</td><td>Soft Enamel</td><td>珐琅胶打磨后与金属面齐平，区别于普通上色</td><td><div class="kc-img-wrap"><img src="images/img_016.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Aluminum plate standard processes:</div>
<table class="kc-table">
  <thead><tr><th>Process</th><th>English</th><th>Description</th><th>Photo</th></tr></thead>
  <tbody>
    <tr><td>Offset Printing</td><td>Off-set Printing</td><td>Can print gradients and 4C patterns; compare color against approved sample</td><td><div class="kc-img-wrap"><img src="images/img_030.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>UV Printing</td><td>Digital Printing</td><td>Direct print on aluminum; thick ink with visible ink dots</td><td><div class="kc-img-wrap"><img src="images/img_029.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>Silk Screen</td><td>Silk-screen Printing</td><td>Medium ink thickness; suitable for glitter and large-particle inks</td><td><div class="kc-img-wrap"><img src="images/img_028.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>Embossing / Debossing</td><td>Embossing / Debossing</td><td>3D raised/recessed LOGO — requires character mold</td><td><div class="kc-img-wrap"><img src="images/img_025.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>Stamping</td><td>Stamping</td><td>Shape-forming punch press</td><td><div class="kc-img-wrap"><img src="images/img_024.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>Optical Coating</td><td>Lighting Coating</td><td>Flat 3D effect, transparent layer covers printing defects</td><td><div class="kc-img-wrap"><img src="images/img_023.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>Anodizing</td><td>Anodized</td><td>Aluminum only; adjustable color; note: prone to discoloration and scratching</td><td><div class="kc-img-wrap"><img src="images/img_022.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">Stainless Steel Plate Processes:</div>
<table class="kc-table">
  <thead><tr><th>Process</th><th>English</th><th>Description</th><th>Photo</th></tr></thead>
  <tbody>
    <tr><td>Etching</td><td>Etching</td><td>Sandy matte effect on surface; rich effects when combined with color fill</td><td><div class="kc-img-wrap"><img src="images/img_021.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>Plating</td><td>Metalizing / Galvanization</td><td>Gold/gun-metal plating for premium texture</td><td><div class="kc-img-wrap"><img src="images/img_020.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
    <tr><td>Epoxy / Color Fill</td><td>Epoxy / Fill Up Colors</td><td>Fill color into etched recesses</td><td><div class="kc-img-wrap"><img src="images/img_019.jpg" class="kc-img" loading="lazy" alt=""></div></td></tr>
  </tbody>
</table>`
    }
  ]
},

// ── CH08 ─────────────────────────────────────────────
{
  id: 'ch08', order: 8,
  titleZh: '香水盒', titleEn: 'Perfume Box',
  icon: '📦', estimatedMinutes: 12,
  sections: [
    {
      headingZh: `盒型分类（8种）/ 工艺 / 产品图片`, headingEn: `Box Types (8) / Processes / Images`,
      contentZh: `
<div class="kc-intro">香水外盒是消费者拿到产品时接触的第一个包装，也是品牌形象最终完整呈现的载体。</div>
<table class="kc-table">
  <thead><tr><th>序号</th><th>英文名称</th><th>中文名称</th><th>特点与适用场景</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Rigid Box – Book Shape</td><td>翻盖精品盒</td><td>磁吸或插扣开合，高档感强，常见于高端礼盒</td></tr>
    <tr><td>2</td><td>Rigid Box – Drawer Shape</td><td>抽屉盒</td><td>抽拉式设计，展示感强，中东高端市场流行</td></tr>
    <tr><td>3</td><td>Rigid Box – Top & Bottom</td><td>天地盒</td><td>上下盖形式，经典稳重，礼品装常用</td></tr>
    <tr><td>4</td><td>Cylinder Box</td><td>圆筒盒</td><td>适合圆形瓶型，造型独特</td></tr>
    <tr><td>5</td><td>Wooden Box</td><td>木盒</td><td>奢华定制，木料材质，高端收藏感</td></tr>
    <tr><td>6</td><td>Folding Box / Soft Box</td><td>折叠卡盒</td><td>成本较低，适合零售单品，量大选择</td></tr>
    <tr><td>7</td><td>Test Paper / Blotter</td><td>试香纸</td><td>展会或店头试香使用</td></tr>
    <tr><td>8</td><td>Paper Bag</td><td>手提纸袋</td><td>配套提袋，完成整套包装体验</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>工艺英文</th><th>工艺中文</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>Hot Stamping / Foil Stamping</td><td>热烫 / 烫色</td><td>LOGO 或花纹烫印，金/银/色铂效果</td></tr>
    <tr><td>Embossing / Debossing</td><td>激凸 / 压凹</td><td>立体压纹效果</td></tr>
    <tr><td>Glossy Lamination</td><td>光胶</td><td>光亮覆膜，显色鲜艳</td></tr>
    <tr><td>Matt Lamination</td><td>哑胶</td><td>磨砂覆膜，低调质感</td></tr>
    <tr><td>UV Coating</td><td>过 UV</td><td>局部 UV 增加光泽感，常与哑胶配合使用</td></tr>
    <tr><td>CMYK / Pantone</td><td>四色 / 单色印刷</td><td>CMYK 全彩；Pantone 精确色号</td></tr>
    <tr><td>Glossy + UV Spot</td><td>哑膜 + 局部 UV</td><td>最常见高端组合：背景哑，LOGO 亮</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ 注意：内托开槽须在瓶型确认后才能制作；出口欧洲须用欧规托盘 80×120mm。</div>
<div class="kc-intro" style="margin-top:16px">产品图片</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_011.jpg" class="kc-img" loading="lazy" alt="香水盒展示"><p class="kc-img-caption">香水盒展示</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_010.jpg" class="kc-img" loading="lazy" alt="盒型样品"><p class="kc-img-caption">盒型样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_009.jpg" class="kc-img" loading="lazy" alt="盒型效果"><p class="kc-img-caption">盒型效果</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_008.jpg" class="kc-img" loading="lazy" alt="盒型展示"><p class="kc-img-caption">盒型展示</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_007.jpg" class="kc-img" loading="lazy" alt="盒型样品"><p class="kc-img-caption">盒型样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_006.jpg" class="kc-img" loading="lazy" alt="盒型效果"><p class="kc-img-caption">盒型效果</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_005.jpg" class="kc-img" loading="lazy" alt="盒型展示"><p class="kc-img-caption">盒型展示</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_004.jpg" class="kc-img" loading="lazy" alt="盒型样品"><p class="kc-img-caption">盒型样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`,
      contentEn: `
<div class="kc-intro">The perfume box is the first packaging the consumer touches, and the final complete presentation of the brand image.</div>
<table class="kc-table">
  <thead><tr><th>#</th><th>English Name</th><th>Chinese Name</th><th>Features & Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Rigid Box – Book Shape</td><td>翻盖精品盒</td><td>Magnetic or tuck closure, premium feel, common in high-end gift boxes</td></tr>
    <tr><td>2</td><td>Rigid Box – Drawer Shape</td><td>抽屉盒</td><td>Pull-out design, strong display effect, popular in Middle East high-end market</td></tr>
    <tr><td>3</td><td>Rigid Box – Top & Bottom</td><td>天地盒</td><td>Classic lid-base form, stable, common in gift packaging</td></tr>
    <tr><td>4</td><td>Cylinder Box</td><td>圆筒盒</td><td>Suitable for round bottle shapes, unique style</td></tr>
    <tr><td>5</td><td>Wooden Box</td><td>木盒</td><td>Luxury custom, wooden material, premium collectible feel</td></tr>
    <tr><td>6</td><td>Folding Box / Soft Box</td><td>折叠卡盒</td><td>Lower cost, suitable for retail singles, good for large volumes</td></tr>
    <tr><td>7</td><td>Test Paper / Blotter</td><td>试香纸</td><td>Used for fragrance testing at trade shows or stores</td></tr>
    <tr><td>8</td><td>Paper Bag</td><td>手提纸袋</td><td>Complementary carry bag for complete packaging experience</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">⚠️ Note: Insert tray can only be made after bottle shape is confirmed. Export to Europe requires EU pallet size 80×120mm.</div>
<div class="kc-intro" style="margin-top:16px">Product Images</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_011.jpg" class="kc-img" loading="lazy" alt="Box display"><p class="kc-img-caption">Box display</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_010.jpg" class="kc-img" loading="lazy" alt="Box sample"><p class="kc-img-caption">Box sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_009.jpg" class="kc-img" loading="lazy" alt="Box effect"><p class="kc-img-caption">Box effect</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_008.jpg" class="kc-img" loading="lazy" alt="Box display"><p class="kc-img-caption">Box display</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_007.jpg" class="kc-img" loading="lazy" alt="Box sample"><p class="kc-img-caption">Box sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_006.jpg" class="kc-img" loading="lazy" alt="Box effect"><p class="kc-img-caption">Box effect</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_005.jpg" class="kc-img" loading="lazy" alt="Box display"><p class="kc-img-caption">Box display</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_004.jpg" class="kc-img" loading="lazy" alt="Box sample"><p class="kc-img-caption">Box sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_-01.jpg" class="kc-img" loading="lazy" alt=""></div></div></div>`
    }
  ]
},

// ── CH09 ─────────────────────────────────────────────
{
  id: 'ch09', order: 9,
  titleZh: '业务规则与词汇手册', titleEn: 'Business Rules & Glossary',
  icon: '📋', estimatedMinutes: 15,
  sections: [
    {
      headingZh: `常见产品词汇（中英对照）`, headingEn: `Product Vocabulary (Bilingual)`,
      contentZh: `
<div class="kc-intro">业务员必须熟记中英文对照词汇，与海外客户沟通时确保术语准确。</div>
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>中文</th><th>海关编码</th></tr></thead>
  <tbody>
    <tr><td>Flint bottles / Plain bottles</td><td>毛瓶（玻璃）</td><td>7010909000</td></tr>
    <tr><td>White Opal Glass</td><td>高白料玻璃</td><td>—</td></tr>
    <tr><td>Cap / Lid</td><td>盖子</td><td>—</td></tr>
    <tr><td>Zamac Cap (Zinc Alloy)</td><td>锌铝合金盖</td><td>8309900000</td></tr>
    <tr><td>Surlyn Cap</td><td>沙林盖</td><td>3923500000</td></tr>
    <tr><td>Wooden Cap</td><td>木盖</td><td>4421909010</td></tr>
    <tr><td>Collar / Ring</td><td>中套</td><td>9616 1000 00</td></tr>
    <tr><td>Pump / Sprayer</td><td>喷头</td><td>9616 1000 00</td></tr>
    <tr><td>Crimp Pump</td><td>卡口喷头</td><td>—</td></tr>
    <tr><td>Screw Neck</td><td>螺口</td><td>—</td></tr>
    <tr><td>Nozzle</td><td>喷嘴</td><td>—</td></tr>
    <tr><td>Dip-tube</td><td>吸管（导管）</td><td>—</td></tr>
    <tr><td>Airless Pump</td><td>真空泵</td><td>—</td></tr>
    <tr><td>OFC (Over Flow Capacity)</td><td>溢流容量</td><td>—</td></tr>
    <tr><td>Tolerance</td><td>公差</td><td>—</td></tr>
    <tr><td>Gasket</td><td>密封圈 / 垫圈</td><td>—</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">业务员必须熟记中英文对照词汇，与海外客户沟通时确保术语准确。</div>
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>Chinese</th><th>海关编码</th></tr></thead>
  <tbody>
    <tr><td>Flint bottles / Plain bottles</td><td>毛瓶（玻璃）</td><td>7010909000</td></tr>
    <tr><td>White Opal Glass</td><td>高白料玻璃</td><td>—</td></tr>
    <tr><td>Cap / Lid</td><td>盖子</td><td>—</td></tr>
    <tr><td>Zamac Cap (Zinc Alloy)</td><td>锌铝合金盖</td><td>8309900000</td></tr>
    <tr><td>Surlyn Cap</td><td>沙林盖</td><td>3923500000</td></tr>
    <tr><td>Wooden Cap</td><td>木盖</td><td>4421909010</td></tr>
    <tr><td>Collar / Ring</td><td>中套</td><td>9616 1000 00</td></tr>
    <tr><td>Pump / Sprayer</td><td>喷头</td><td>9616 1000 00</td></tr>
    <tr><td>Crimp Pump</td><td>卡口喷头</td><td>—</td></tr>
    <tr><td>Screw Neck</td><td>螺口</td><td>—</td></tr>
    <tr><td>Nozzle</td><td>喷嘴</td><td>—</td></tr>
    <tr><td>Dip-tube</td><td>吸管（导管）</td><td>—</td></tr>
    <tr><td>Airless Pump</td><td>真空泵</td><td>—</td></tr>
    <tr><td>OFC (Over Flow Capacity)</td><td>溢流容量</td><td>—</td></tr>
    <tr><td>Tolerance</td><td>公差</td><td>—</td></tr>
    <tr><td>Gasket</td><td>密封圈 / 垫圈</td><td>—</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `常见工艺词汇（中英对照）`, headingEn: `Process Vocabulary (Bilingual)`,
      contentZh: `
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>中文</th></tr></thead>
  <tbody>
    <tr><td>Color coating / Lacquering</td><td>喷涂</td></tr>
    <tr><td>Rubber coating / Soft touch</td><td>橡胶漆</td></tr>
    <tr><td>Metalizing / Metallization</td><td>电镀（水镀）</td></tr>
    <tr><td>Frosting / Frosted</td><td>蒙沙</td></tr>
    <tr><td>Hot Stamping / Gold blocking</td><td>烫金</td></tr>
    <tr><td>Silkscreen printing</td><td>丝印</td></tr>
    <tr><td>Sand-blasting</td><td>喷沙</td></tr>
    <tr><td>Etching / Etch</td><td>蚀刻</td></tr>
    <tr><td>Transfer / Decal</td><td>转印 / 贴花</td></tr>
    <tr><td>Flocking / Velvet</td><td>植绒</td></tr>
    <tr><td>Embossing / Debossing</td><td>激凸 / 压凹</td></tr>
    <tr><td>Hot Stamping / Foil Stamping</td><td>热烫 / 烫色</td></tr>
    <tr><td>Glossy Lamination</td><td>光胶</td></tr>
    <tr><td>Matt Lamination</td><td>哑胶</td></tr>
    <tr><td>UV Coating</td><td>过 UV</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>中文</th></tr></thead>
  <tbody>
    <tr><td>Color coating / Lacquering</td><td>喷涂</td></tr>
    <tr><td>Rubber coating / Soft touch</td><td>橡胶漆</td></tr>
    <tr><td>Metalizing / Metallization</td><td>电镀（水镀）</td></tr>
    <tr><td>Frosting / Frosted</td><td>蒙沙</td></tr>
    <tr><td>Hot Stamping / Gold blocking</td><td>烫金</td></tr>
    <tr><td>Silkscreen printing</td><td>丝印</td></tr>
    <tr><td>Sand-blasting</td><td>喷沙</td></tr>
    <tr><td>Etching / Etch</td><td>蚀刻</td></tr>
    <tr><td>Transfer / Decal</td><td>转印 / 贴花</td></tr>
    <tr><td>Flocking / Velvet</td><td>植绒</td></tr>
    <tr><td>Embossing / Debossing</td><td>激凸 / 压凹</td></tr>
    <tr><td>Hot Stamping / Foil Stamping</td><td>热烫 / 烫色</td></tr>
    <tr><td>Glossy Lamination</td><td>光胶</td></tr>
    <tr><td>Matt Lamination</td><td>哑胶</td></tr>
    <tr><td>UV Coating</td><td>过 UV</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `MOQ 与贸易术语`, headingEn: `MOQ & Trade Terms`,
      contentZh: `
<div class="kc-intro">关键 MOQ 和业务规则，接单必须熟记：</div>
<table class="kc-table">
  <thead><tr><th>类别</th><th>数量 / 规则</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>公模 MOQ（标准款）</td><td><strong>10,000 pcs</strong></td><td>现有瓶型，最低起订量</td></tr>
    <tr><td>定制款 MOQ</td><td><strong>20,000–30,000 pcs</strong></td><td>新开模定制款，数量更高</td></tr>
    <tr><td>每种工艺/LOGO MOQ</td><td><strong>10,000 pcs/种</strong></td><td>多种颜色或多款 LOGO 各自独立计算</td></tr>
    <tr><td>中套标准色 MOQ</td><td>10,000 pcs</td><td>金色/银色标准款</td></tr>
    <tr><td>中套定制色 MOQ</td><td>30,000 pcs</td><td>完全定制颜色</td></tr>
    <tr><td>标牌 MOQ</td><td>3,000 pcs</td><td>标准金/银色</td></tr>
    <tr><td>付款方式—小单</td><td>订金 50%（< $10,000）</td><td>收到订金后安排生产</td></tr>
    <tr><td>付款方式—大单</td><td>订金 30%（≥ $10,000）</td><td>尾款必须在出货前结清</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>缩写</th><th>全称</th><th>包含范围</th></tr></thead>
  <tbody>
    <tr><td><strong>EXW</strong></td><td>Ex Works / 出厂价</td><td>仅产品，客户自行提货，不含任何运费</td></tr>
    <tr><td><strong>FOB</strong></td><td>Free On Board / 离岸价</td><td>产品 + 国内货代 + 出口港装船费</td></tr>
    <tr><td><strong>CIF</strong></td><td>Cost, Insurance & Freight / 到岸价</td><td>FOB + 海运费 + 保险费</td></tr>
    <tr><td><strong>DDP</strong></td><td>Delivered Duty Paid / 门到门价</td><td>全包：产品 + 货代 + 国际运费 + 目的地关税</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Key MOQ and business rules every sales person must memorize:</div>
<table class="kc-table">
  <thead><tr><th>Category</th><th>Quantity / Rule</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Stock Mold MOQ</td><td><strong>10,000 pcs</strong></td><td>Existing bottle shapes, minimum order quantity</td></tr>
    <tr><td>Custom Mold MOQ</td><td><strong>20,000–30,000 pcs</strong></td><td>New custom mold, higher quantity required</td></tr>
    <tr><td>Per Process/LOGO MOQ</td><td><strong>10,000 pcs</strong></td><td>Each color or LOGO counted separately</td></tr>
    <tr><td>Collar Standard Color MOQ</td><td>10,000 pcs</td><td>Gold/Silver standard</td></tr>
    <tr><td>Collar Custom Color MOQ</td><td>30,000 pcs</td><td>Fully custom color</td></tr>
    <tr><td>Name Plate MOQ</td><td>3,000 pcs</td><td>Standard gold/silver</td></tr>
    <tr><td>Payment (small orders)</td><td>50% deposit (< $10,000)</td><td>Production starts after deposit received</td></tr>
    <tr><td>Payment (large orders)</td><td>30% deposit (≥ $10,000)</td><td>Balance must be settled before shipment</td></tr>
  </tbody>
</table>
<table class="kc-table" style="margin-top:12px">
  <thead><tr><th>Term</th><th>Full Name</th><th>What's Included</th></tr></thead>
  <tbody>
    <tr><td><strong>EXW</strong></td><td>Ex Works</td><td>Product only — buyer arranges all transport</td></tr>
    <tr><td><strong>FOB</strong></td><td>Free On Board</td><td>Product + domestic freight + export port loading</td></tr>
    <tr><td><strong>CIF</strong></td><td>Cost, Insurance & Freight</td><td>FOB + international shipping + insurance</td></tr>
    <tr><td><strong>DDP</strong></td><td>Delivered Duty Paid</td><td>All-in: product + freight + international shipping + destination duty</td></tr>
  </tbody>
</table>`
    }
  ]
},

];

// ── QUESTION BANK (interim - to be replaced after V3 approval) ──
const QUESTIONS = [];