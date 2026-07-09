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
<div class="kc-highlight-box">⚠️ 关键提示：接单时必须与客户确认是 A 结构还是 B 结构，结构不同则配件完全不同，直接影响报价！</div>
<div class="kc-intro" style="margin-top:12px">实物参考图：</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_002.jpg" class="kc-img" loading="lazy" alt="A 结构香水瓶（肩套 + 铝牌）"><p class="kc-img-caption">A 结构香水瓶（肩套 + 铝牌）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_001.jpg" class="kc-img" loading="lazy" alt="B 结构香水瓶（中套）"><p class="kc-img-caption">B 结构香水瓶（中套）</p></div></div></div>`,
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
<div class="kc-highlight-box">⚠️ Key: Always confirm with client whether they need Structure A or B — different structures require completely different components and affect pricing!</div>
<div class="kc-intro" style="margin-top:12px">Reference photos:</div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_002.jpg" class="kc-img" loading="lazy" alt="Structure A Bottle (Shoulder + Name Plate)"><p class="kc-img-caption">Structure A Bottle (Shoulder + Name Plate)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_001.jpg" class="kc-img" loading="lazy" alt="Structure B Bottle (Collar)"><p class="kc-img-caption">Structure B Bottle (Collar)</p></div></div></div>`
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_000.jpg" class="kc-img" loading="lazy" alt="透喷渐变"><p class="kc-img-caption">透喷渐变</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_050.jpg" class="kc-img" loading="lazy" alt="实喷效果"><p class="kc-img-caption">实喷效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_003.jpg" class="kc-img" loading="lazy" alt="玻璃瓶总览"><p class="kc-img-caption">玻璃瓶总览</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_049.jpg" class="kc-img" loading="lazy" alt="UV 电镀（金属光泽）"><p class="kc-img-caption">UV 电镀（金属光泽）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_048.jpg" class="kc-img" loading="lazy" alt="蒙砂（雾面效果）"><p class="kc-img-caption">蒙砂（雾面效果）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_047.jpg" class="kc-img" loading="lazy" alt="植绒（绒布触感）"><p class="kc-img-caption">植绒（绒布触感）</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_046.jpg" class="kc-img" loading="lazy" alt="裂纹工艺"><p class="kc-img-caption">裂纹工艺</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_045.jpg" class="kc-img" loading="lazy" alt="烫金工艺"><p class="kc-img-caption">烫金工艺</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_044.jpg" class="kc-img" loading="lazy" alt="丝印工艺"><p class="kc-img-caption">丝印工艺</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_043.jpg" class="kc-img" loading="lazy" alt="橡胶漆（哑面）"><p class="kc-img-caption">橡胶漆（哑面）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_042.jpg" class="kc-img" loading="lazy" alt="镭射工艺"><p class="kc-img-caption">镭射工艺</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_041.jpg" class="kc-img" loading="lazy" alt="转印工艺"><p class="kc-img-caption">转印工艺</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_040.jpg" class="kc-img" loading="lazy" alt="UV 打印工艺"><p class="kc-img-caption">UV 打印工艺</p></div></div></div>`,
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_000.jpg" class="kc-img" loading="lazy" alt="Transparent Gradient Coating"><p class="kc-img-caption">Transparent Gradient Coating</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_050.jpg" class="kc-img" loading="lazy" alt="Solid Color Coating"><p class="kc-img-caption">Solid Color Coating</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_003.jpg" class="kc-img" loading="lazy" alt="Glass Bottle Overview"><p class="kc-img-caption">Glass Bottle Overview</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_049.jpg" class="kc-img" loading="lazy" alt="UV Plating (Metallic)"><p class="kc-img-caption">UV Plating (Metallic)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_048.jpg" class="kc-img" loading="lazy" alt="Frosting (Matte)"><p class="kc-img-caption">Frosting (Matte)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_047.jpg" class="kc-img" loading="lazy" alt="Flocking (Velvet Touch)"><p class="kc-img-caption">Flocking (Velvet Touch)</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_046.jpg" class="kc-img" loading="lazy" alt="Cracking Effect"><p class="kc-img-caption">Cracking Effect</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_045.jpg" class="kc-img" loading="lazy" alt="Hot Stamping"><p class="kc-img-caption">Hot Stamping</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_044.jpg" class="kc-img" loading="lazy" alt="Silk Screen"><p class="kc-img-caption">Silk Screen</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_043.jpg" class="kc-img" loading="lazy" alt="Rubber Coating (Matte)"><p class="kc-img-caption">Rubber Coating (Matte)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_042.jpg" class="kc-img" loading="lazy" alt="Laser / Holographic"><p class="kc-img-caption">Laser / Holographic</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_041.jpg" class="kc-img" loading="lazy" alt="Transfer / Decal"><p class="kc-img-caption">Transfer / Decal</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_040.jpg" class="kc-img" loading="lazy" alt="UV Printing"><p class="kc-img-caption">UV Printing</p></div></div></div>`
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_039.jpg" class="kc-img" loading="lazy" alt="ABS / Zamak 合金盖"><p class="kc-img-caption">ABS / Zamak 合金盖</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_038.jpg" class="kc-img" loading="lazy" alt="K 料（Surlyn / Acrylic）"><p class="kc-img-caption">K 料（Surlyn / Acrylic）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_037.jpg" class="kc-img" loading="lazy" alt="Wood 木盖"><p class="kc-img-caption">Wood 木盖</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_036.jpg" class="kc-img" loading="lazy" alt="Magnetic 磁吸盖"><p class="kc-img-caption">Magnetic 磁吸盖</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_035.jpg" class="kc-img" loading="lazy" alt="Rock 岩石纹盖"><p class="kc-img-caption">Rock 岩石纹盖</p></div></div></div>`,
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_039.jpg" class="kc-img" loading="lazy" alt="ABS / Zamak Cap"><p class="kc-img-caption">ABS / Zamak Cap</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_038.jpg" class="kc-img" loading="lazy" alt="K Resin (Surlyn / Acrylic)"><p class="kc-img-caption">K Resin (Surlyn / Acrylic)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_037.jpg" class="kc-img" loading="lazy" alt="Wood Cap"><p class="kc-img-caption">Wood Cap</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_036.jpg" class="kc-img" loading="lazy" alt="Magnetic Cap"><p class="kc-img-caption">Magnetic Cap</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_035.jpg" class="kc-img" loading="lazy" alt="Rock Texture Cap"><p class="kc-img-caption">Rock Texture Cap</p></div></div></div>`
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_034.jpg" class="kc-img" loading="lazy" alt="卡口式喷头（Crimp Pump）"><p class="kc-img-caption">卡口式喷头（Crimp Pump）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_033.jpg" class="kc-img" loading="lazy" alt="螺口式喷头（Screw Pump）"><p class="kc-img-caption">螺口式喷头（Screw Pump）</p></div></div></div>`,
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_034.jpg" class="kc-img" loading="lazy" alt="Crimp Pump (卡口式)"><p class="kc-img-caption">Crimp Pump (卡口式)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_033.jpg" class="kc-img" loading="lazy" alt="Screw Pump (螺口式)"><p class="kc-img-caption">Screw Pump (螺口式)</p></div></div></div>`
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_032.jpg" class="kc-img" loading="lazy" alt="标准中套（金 / 银）"><p class="kc-img-caption">标准中套（金 / 银）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_031.jpg" class="kc-img" loading="lazy" alt="定制肩套（A 结构）"><p class="kc-img-caption">定制肩套（A 结构）</p></div></div></div>`,
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_032.jpg" class="kc-img" loading="lazy" alt="Standard Collar (Gold / Silver)"><p class="kc-img-caption">Standard Collar (Gold / Silver)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_031.jpg" class="kc-img" loading="lazy" alt="Custom Shoulder Collar (Structure A)"><p class="kc-img-caption">Custom Shoulder Collar (Structure A)</p></div></div></div>`
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_015.jpg" class="kc-img" loading="lazy" alt="铝标牌样品"><p class="kc-img-caption">铝标牌样品</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_014.jpg" class="kc-img" loading="lazy" alt="铝标上瓶效果"><p class="kc-img-caption">铝标上瓶效果</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_013.jpg" class="kc-img" loading="lazy" alt="不锈钢标牌样品"><p class="kc-img-caption">不锈钢标牌样品</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_012.jpg" class="kc-img" loading="lazy" alt="锌合金标牌样品"><p class="kc-img-caption">锌合金标牌样品</p></div></div></div>`,
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_015.jpg" class="kc-img" loading="lazy" alt="Aluminum Plate Sample"><p class="kc-img-caption">Aluminum Plate Sample</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_014.jpg" class="kc-img" loading="lazy" alt="Aluminum Plate on Bottle"><p class="kc-img-caption">Aluminum Plate on Bottle</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_013.jpg" class="kc-img" loading="lazy" alt="Stainless Steel Plate"><p class="kc-img-caption">Stainless Steel Plate</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_012.jpg" class="kc-img" loading="lazy" alt="Zinc Alloy Plate"><p class="kc-img-caption">Zinc Alloy Plate</p></div></div></div>`
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_011.jpg" class="kc-img" loading="lazy" alt="翻盖盒（Book Shape）"><p class="kc-img-caption">翻盖盒（Book Shape）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_010.jpg" class="kc-img" loading="lazy" alt="抽屉盒（Drawer）"><p class="kc-img-caption">抽屉盒（Drawer）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_009.jpg" class="kc-img" loading="lazy" alt="天地盒（Top & Bottom）"><p class="kc-img-caption">天地盒（Top & Bottom）</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_008.jpg" class="kc-img" loading="lazy" alt="木盒（Wooden Box）"><p class="kc-img-caption">木盒（Wooden Box）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_007.jpg" class="kc-img" loading="lazy" alt="圆筒盒（Cylinder）"><p class="kc-img-caption">圆筒盒（Cylinder）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_006.jpg" class="kc-img" loading="lazy" alt="折叠盒（Soft Box）"><p class="kc-img-caption">折叠盒（Soft Box）</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_005.jpg" class="kc-img" loading="lazy" alt="试香纸（Blotter）"><p class="kc-img-caption">试香纸（Blotter）</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_004.jpg" class="kc-img" loading="lazy" alt="纸袋（Paper Bag）"><p class="kc-img-caption">纸袋（Paper Bag）</p></div></div></div>`,
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
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_011.jpg" class="kc-img" loading="lazy" alt="Book Shape Box"><p class="kc-img-caption">Book Shape Box</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_010.jpg" class="kc-img" loading="lazy" alt="Drawer Box"><p class="kc-img-caption">Drawer Box</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_009.jpg" class="kc-img" loading="lazy" alt="Top & Bottom Box"><p class="kc-img-caption">Top & Bottom Box</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_008.jpg" class="kc-img" loading="lazy" alt="Wooden Box"><p class="kc-img-caption">Wooden Box</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_007.jpg" class="kc-img" loading="lazy" alt="Cylinder Box"><p class="kc-img-caption">Cylinder Box</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_006.jpg" class="kc-img" loading="lazy" alt="Soft Box (Folding)"><p class="kc-img-caption">Soft Box (Folding)</p></div></div></div>
<div class="kc-img-row"><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_005.jpg" class="kc-img" loading="lazy" alt="Blotter (试香纸)"><p class="kc-img-caption">Blotter (试香纸)</p></div></div><div class="kc-img-cell"><div class="kc-img-wrap"><img src="images/img_004.jpg" class="kc-img" loading="lazy" alt="Paper Bag (纸袋)"><p class="kc-img-caption">Paper Bag (纸袋)</p></div></div></div>`
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
{
  id: 'ch10', order: 10,
  titleZh: '双语词汇手册（附录A-D）', titleEn: 'Bilingual Glossary (Appendices A–D)',
  icon: '🔤', estimatedMinutes: 20,
  sections: [
    {
      headingZh: `附录A：常见产品中英文词汇`, headingEn: `Appendix A: Product Vocabulary`,
      contentZh: `
<div class="kc-intro">业务员必须熟记以下中英文对照，与海外客户沟通时确保术语准确。</div>
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>中文</th><th>海关编码 (HS Code)</th></tr></thead>
  <tbody>
    <tr><td>Flint bottles / Plain bottles</td><td>毛瓶（玻璃）</td><td>7010909000</td></tr>
    <tr><td>White Opal Glass</td><td>高白料（玻璃）</td><td>—</td></tr>
    <tr><td>Lid / Cap</td><td>盖子</td><td>—</td></tr>
    <tr><td>Plastic Cap</td><td>塑料盖子</td><td>3923500000</td></tr>
    <tr><td>Surlyn Cap</td><td>沙林盖</td><td>3923500000</td></tr>
    <tr><td>K-Resin / K Materials</td><td>K料盖子</td><td>—</td></tr>
    <tr><td>Acrylic Cap</td><td>亚克力盖</td><td>3923500000</td></tr>
    <tr><td>Crystal Cap</td><td>水晶盖</td><td>—</td></tr>
    <tr><td>Zamac Cap (Zinc Alloy)</td><td>锌铝合金盖</td><td>8309900000</td></tr>
    <tr><td>Wooden Cap</td><td>木盖</td><td>4421909010</td></tr>
    <tr><td>Aluminium Cap</td><td>电化铝盖</td><td>8309900000</td></tr>
    <tr><td>Collar / Ring</td><td>中套</td><td>9616100000</td></tr>
    <tr><td>Pump / Sprayer</td><td>喷头</td><td>9616100000</td></tr>
    <tr><td>Crimp Pump</td><td>卡口喷头</td><td>—</td></tr>
    <tr><td>Crimp Neck</td><td>卡口</td><td>—</td></tr>
    <tr><td>Screw Neck</td><td>螺口</td><td>—</td></tr>
    <tr><td>Nozzle</td><td>喷嘴</td><td>—</td></tr>
    <tr><td>Dip-tube</td><td>吸管（导管）</td><td>—</td></tr>
    <tr><td>Airless Pump</td><td>真空泵</td><td>—</td></tr>
    <tr><td>Crimping Machine</td><td>封口机</td><td>—</td></tr>
    <tr><td>Vial</td><td>小瓶（1–10 ml）</td><td>—</td></tr>
    <tr><td>Tassel</td><td>流苏</td><td>3926400000</td></tr>
    <tr><td>Swarovski Crystals</td><td>施华洛世奇水晶</td><td>—</td></tr>
    <tr><td>Surlyn Ring</td><td>沙林中套</td><td>—</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Sales reps must memorize the following bilingual glossary for accurate communication with overseas clients.</div>
<table class="kc-table">
  <thead><tr><th>English</th><th>Chinese</th><th>HS Code</th></tr></thead>
  <tbody>
    <tr><td>Flint bottles / Plain bottles</td><td>毛瓶（玻璃）</td><td>7010909000</td></tr>
    <tr><td>White Opal Glass</td><td>高白料（玻璃）</td><td>—</td></tr>
    <tr><td>Lid / Cap</td><td>盖子</td><td>—</td></tr>
    <tr><td>Plastic Cap</td><td>塑料盖子</td><td>3923500000</td></tr>
    <tr><td>Surlyn Cap</td><td>沙林盖</td><td>3923500000</td></tr>
    <tr><td>K-Resin / K Materials</td><td>K料盖子</td><td>—</td></tr>
    <tr><td>Acrylic Cap</td><td>亚克力盖</td><td>3923500000</td></tr>
    <tr><td>Crystal Cap</td><td>水晶盖</td><td>—</td></tr>
    <tr><td>Zamac Cap (Zinc Alloy)</td><td>锌铝合金盖</td><td>8309900000</td></tr>
    <tr><td>Wooden Cap</td><td>木盖</td><td>4421909010</td></tr>
    <tr><td>Aluminium Cap</td><td>电化铝盖</td><td>8309900000</td></tr>
    <tr><td>Collar / Ring</td><td>中套</td><td>9616100000</td></tr>
    <tr><td>Pump / Sprayer</td><td>喷头</td><td>9616100000</td></tr>
    <tr><td>Crimp Pump</td><td>卡口喷头</td><td>—</td></tr>
    <tr><td>Crimp Neck</td><td>卡口</td><td>—</td></tr>
    <tr><td>Screw Neck</td><td>螺口</td><td>—</td></tr>
    <tr><td>Nozzle</td><td>喷嘴</td><td>—</td></tr>
    <tr><td>Dip-tube</td><td>吸管（导管）</td><td>—</td></tr>
    <tr><td>Airless Pump</td><td>真空泵</td><td>—</td></tr>
    <tr><td>Crimping Machine</td><td>封口机</td><td>—</td></tr>
    <tr><td>Vial</td><td>小瓶（1–10 ml）</td><td>—</td></tr>
    <tr><td>Tassel</td><td>流苏</td><td>3926400000</td></tr>
    <tr><td>Swarovski Crystals</td><td>施华洛世奇水晶</td><td>—</td></tr>
    <tr><td>Surlyn Ring</td><td>沙林中套</td><td>—</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `附录B：常见工艺中英文词汇`, headingEn: `Appendix B: Process Vocabulary`,
      contentZh: `
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>中文</th></tr></thead>
  <tbody>
    <tr><td>Color coating / Lacquering</td><td>喷涂</td></tr>
    <tr><td>Solid color coating</td><td>实色喷涂</td></tr>
    <tr><td>Transparent color coating</td><td>透明喷涂（透喷）</td></tr>
    <tr><td>Gradient color coating</td><td>渐变喷涂</td></tr>
    <tr><td>Rubber coating / Soft touch</td><td>橡胶漆</td></tr>
    <tr><td>Metalizing / Metallization</td><td>电镀（水镀）</td></tr>
    <tr><td>Vacuum metalizing</td><td>真空镀</td></tr>
    <tr><td>Galvanized plating</td><td>电镀</td></tr>
    <tr><td>Electroplating chrome</td><td>镀铬</td></tr>
    <tr><td>Polished by hand</td><td>手工抛光</td></tr>
    <tr><td>Frosting / Frosted</td><td>蒙沙</td></tr>
    <tr><td>Hot Stamping / Gold blocking</td><td>烫金</td></tr>
    <tr><td>Silkscreen printing / Silk print</td><td>丝印</td></tr>
    <tr><td>Sand-blasting</td><td>喷沙</td></tr>
    <tr><td>Etch</td><td>蚀刻</td></tr>
    <tr><td>Decal / Burnt-out</td><td>烧花 / 贴花纸</td></tr>
    <tr><td>Transfer</td><td>转印</td></tr>
    <tr><td>Laser</td><td>激光</td></tr>
    <tr><td>Flocking / Velvet</td><td>植绒</td></tr>
    <tr><td>Engraving / Deboss</td><td>雕花（凹进去）</td></tr>
    <tr><td>Embossing</td><td>压花（凸出来）</td></tr>
    <tr><td>Epoxy</td><td>滴胶</td></tr>
    <tr><td>Brush finished</td><td>拉丝</td></tr>
    <tr><td>Cracking</td><td>裂纹效果</td></tr>
    <tr><td>Enamel / Soft Enamel</td><td>珐琅 / 仿珐琅</td></tr>
    <tr><td>Electrophoresis</td><td>电泳</td></tr>
    <tr><td>Anodized</td><td>氧化（铝专用）</td></tr>
    <tr><td>UV Printing</td><td>UV 打印</td></tr>
    <tr><td>Off-set Printing</td><td>平印</td></tr>
    <tr><td>Lighting Coating</td><td>光学镀</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>English</th><th>Chinese</th></tr></thead>
  <tbody>
    <tr><td>Color coating / Lacquering</td><td>喷涂</td></tr>
    <tr><td>Solid color coating</td><td>实色喷涂</td></tr>
    <tr><td>Transparent color coating</td><td>透明喷涂（透喷）</td></tr>
    <tr><td>Gradient color coating</td><td>渐变喷涂</td></tr>
    <tr><td>Rubber coating / Soft touch</td><td>橡胶漆</td></tr>
    <tr><td>Metalizing / Metallization</td><td>电镀（水镀）</td></tr>
    <tr><td>Vacuum metalizing</td><td>真空镀</td></tr>
    <tr><td>Frosting / Frosted</td><td>蒙沙</td></tr>
    <tr><td>Hot Stamping / Gold blocking</td><td>烫金</td></tr>
    <tr><td>Silkscreen printing</td><td>丝印</td></tr>
    <tr><td>Sand-blasting</td><td>喷沙</td></tr>
    <tr><td>Etch</td><td>蚀刻</td></tr>
    <tr><td>Decal / Transfer</td><td>转印 / 贴花</td></tr>
    <tr><td>Laser</td><td>激光</td></tr>
    <tr><td>Flocking / Velvet</td><td>植绒</td></tr>
    <tr><td>Engraving / Deboss</td><td>雕花（凹）</td></tr>
    <tr><td>Embossing</td><td>压花（凸）</td></tr>
    <tr><td>Epoxy</td><td>滴胶</td></tr>
    <tr><td>Brush finished</td><td>拉丝</td></tr>
    <tr><td>Cracking</td><td>裂纹效果</td></tr>
    <tr><td>Enamel / Soft Enamel</td><td>珐琅 / 仿珐琅</td></tr>
    <tr><td>Anodized</td><td>氧化（铝专用）</td></tr>
    <tr><td>UV Printing</td><td>UV 打印</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `附录C：纸盒术语 & 通用行业术语`, headingEn: `Appendix C: Box & Industry Terms`,
      contentZh: `
<div class="kc-intro">纸盒类型与工艺术语：</div>
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>中文</th><th>海关编码</th></tr></thead>
  <tbody>
    <tr><td>Top and bottom tuck carton / Folding box</td><td>折叠卡盒</td><td>4819200000</td></tr>
    <tr><td>Rigid box</td><td>手工精品盒</td><td>4819200000</td></tr>
    <tr><td>Lid and base box</td><td>天地盒</td><td>—</td></tr>
    <tr><td>Cylinder box</td><td>圆筒盒</td><td>—</td></tr>
    <tr><td>Wooden box</td><td>木盒</td><td>—</td></tr>
    <tr><td>Paper Bag</td><td>纸袋</td><td>4819400000</td></tr>
    <tr><td>Perfume scent cards / Blotter</td><td>试香纸</td><td>—</td></tr>
    <tr><td>Corrugated paper</td><td>瓦楞纸 / 坑纸</td><td>—</td></tr>
    <tr><td>EVA liner</td><td>EVA 内托</td><td>—</td></tr>
    <tr><td>Hot stamping / Foil stamping</td><td>热烫 / 烫色</td><td>—</td></tr>
    <tr><td>Embossing / Debossing</td><td>激凸 / 压凹</td><td>—</td></tr>
    <tr><td>Glossy Lamination</td><td>光胶</td><td>—</td></tr>
    <tr><td>Matt Lamination</td><td>哑胶</td><td>—</td></tr>
    <tr><td>UV Coating</td><td>过 UV</td><td>—</td></tr>
    <tr><td>CMYK</td><td>四色印刷</td><td>—</td></tr>
    <tr><td>Pantone No.</td><td>单色印刷（潘通色号）</td><td>—</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">通用行业术语：</div>
<table class="kc-table">
  <thead><tr><th>英文 (English)</th><th>中文</th></tr></thead>
  <tbody>
    <tr><td>Tolerance</td><td>公差</td></tr>
    <tr><td>OFC (Over Flow Capacity)</td><td>容量（溢流容量）</td></tr>
    <tr><td>Brimful Capacity</td><td>满口容量</td></tr>
    <tr><td>Joint Line</td><td>合模线</td></tr>
    <tr><td>Bubbles</td><td>气泡</td></tr>
    <tr><td>Cracks</td><td>破裂</td></tr>
    <tr><td>Chips</td><td>碎裂</td></tr>
    <tr><td>Rejection rate</td><td>报废率</td></tr>
    <tr><td>Piston</td><td>活塞</td></tr>
    <tr><td>Upper Spring</td><td>弹簧</td></tr>
    <tr><td>Gasket</td><td>垫圈</td></tr>
    <tr><td>Dip-tube length</td><td>吸管长度</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Box vocabulary:</div>
<table class="kc-table">
  <thead><tr><th>English</th><th>Chinese</th><th>HS Code</th></tr></thead>
  <tbody>
    <tr><td>Top and bottom tuck carton / Folding box</td><td>折叠卡盒</td><td>4819200000</td></tr>
    <tr><td>Rigid box</td><td>手工精品盒</td><td>4819200000</td></tr>
    <tr><td>Lid and base box</td><td>天地盒</td><td>—</td></tr>
    <tr><td>Cylinder box</td><td>圆筒盒</td><td>—</td></tr>
    <tr><td>Wooden box</td><td>木盒</td><td>—</td></tr>
    <tr><td>Paper Bag</td><td>纸袋</td><td>4819400000</td></tr>
    <tr><td>Perfume scent cards / Blotter</td><td>试香纸</td><td>—</td></tr>
    <tr><td>Corrugated paper</td><td>瓦楞纸</td><td>—</td></tr>
    <tr><td>EVA liner</td><td>EVA 内托</td><td>—</td></tr>
    <tr><td>Glossy Lamination</td><td>光胶</td><td>—</td></tr>
    <tr><td>Matt Lamination</td><td>哑胶</td><td>—</td></tr>
    <tr><td>UV Coating</td><td>过 UV</td><td>—</td></tr>
    <tr><td>CMYK</td><td>四色印刷</td><td>—</td></tr>
    <tr><td>Pantone No.</td><td>单色印刷</td><td>—</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px">General industry terms:</div>
<table class="kc-table">
  <thead><tr><th>English</th><th>Chinese</th></tr></thead>
  <tbody>
    <tr><td>Tolerance</td><td>公差</td></tr>
    <tr><td>OFC (Over Flow Capacity)</td><td>溢流容量</td></tr>
    <tr><td>Brimful Capacity</td><td>满口容量</td></tr>
    <tr><td>Joint Line</td><td>合模线</td></tr>
    <tr><td>Bubbles</td><td>气泡</td></tr>
    <tr><td>Cracks</td><td>破裂</td></tr>
    <tr><td>Chips</td><td>碎裂</td></tr>
    <tr><td>Rejection rate</td><td>报废率</td></tr>
    <tr><td>Piston</td><td>活塞</td></tr>
    <tr><td>Gasket</td><td>垫圈</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `附录D：MOQ与关键业务规则`, headingEn: `Appendix D: MOQ & Key Business Rules`,
      contentZh: `
<div class="kc-intro">业务员在接单过程中必须掌握的关键数字和规则：</div>
<table class="kc-table">
  <thead><tr><th>类别</th><th>数量 / 规则</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>公模 MOQ（标准款）</td><td><strong>10,000 pcs</strong></td><td>公模现有瓶型，最低起订量</td></tr>
    <tr><td>定制款 MOQ</td><td><strong>20,000 – 30,000 pcs</strong></td><td>新开模定制款，数量更高</td></tr>
    <tr><td>每种工艺 / LOGO MOQ</td><td><strong>10,000 pcs / 种</strong></td><td>多种颜色或多款 LOGO 各自独立计算；老客户可协商至 5,000 pcs</td></tr>
    <tr><td>库存产品推荐门槛</td><td>≥ 5,000 pcs</td><td>数量 5K–10K 之间推荐热销款；介绍时称「热销品」，不称库存</td></tr>
    <tr><td>中套 – 标准色 MOQ</td><td>10,000 pcs</td><td>金色 / 银色标准款</td></tr>
    <tr><td>中套 – 定制色 MOQ</td><td>30,000 pcs</td><td>完全定制颜色起订量</td></tr>
    <tr><td>标牌（Custom Plate）MOQ</td><td>3,000 pcs</td><td>标准金 / 银色起订量</td></tr>
    <tr><td>付款 – 小单</td><td>订金 <strong>50%</strong>（金额 < $10,000）</td><td>收到订金后安排生产</td></tr>
    <tr><td>付款 – 大单</td><td>订金 <strong>30%</strong>（金额 ≥ $10,000）</td><td>尾款必须在出货前结清，无特殊约定不得先出货</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:16px">
  <strong>一分钟公司介绍话术（电梯话术）</strong><br><br>
  <em>中文参考话术：</em><br>
  「我们是 Fonli（菲利包装），专注高端香水包装超过 10 年，提供玻璃瓶、瓶盖、喷头、盒子的 ODM/OEM 定制服务，自有工厂和设计团队，主要服务欧美和中东的香水品牌。」<br><br>
  <em>English version:</em><br>
  "We are Fonli — your one-stop perfume packaging expert. We specialize in high-end ODM/OEM packaging, including glass bottles, caps, sprayers, and boxes. With over 10 years of experience, our own factory and design team serve premium fragrance brands in Europe, the US, and the Middle East."
</div>`,
      contentEn: `
<div class="kc-intro">Key numbers and rules every sales rep must master during order intake:</div>
<table class="kc-table">
  <thead><tr><th>Category</th><th>Quantity / Rule</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Stock Mold MOQ</td><td><strong>10,000 pcs</strong></td><td>Existing bottle shapes, minimum order quantity</td></tr>
    <tr><td>Custom Mold MOQ</td><td><strong>20,000 – 30,000 pcs</strong></td><td>New custom mold; higher quantity required</td></tr>
    <tr><td>Per Process / LOGO MOQ</td><td><strong>10,000 pcs</strong></td><td>Each color or LOGO counted separately; existing clients may negotiate to 5,000 pcs</td></tr>
    <tr><td>Stock product recommendation threshold</td><td>≥ 5,000 pcs</td><td>For 5K–10K orders, recommend bestsellers — never call them "stock"</td></tr>
    <tr><td>Collar – Standard Color MOQ</td><td>10,000 pcs</td><td>Gold / silver standard</td></tr>
    <tr><td>Collar – Custom Color MOQ</td><td>30,000 pcs</td><td>Fully custom color</td></tr>
    <tr><td>Name Plate MOQ</td><td>3,000 pcs</td><td>Standard gold / silver</td></tr>
    <tr><td>Payment – Small Orders</td><td><strong>50%</strong> deposit (< $10,000)</td><td>Production starts after deposit received</td></tr>
    <tr><td>Payment – Large Orders</td><td><strong>30%</strong> deposit (≥ $10,000)</td><td>Balance must be cleared before shipment — no exceptions without prior agreement</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:16px">
  <strong>1-Minute Company Pitch (Elevator Speech)</strong><br><br>
  "We are Fonli — your one-stop perfume packaging expert. We specialize in high-end ODM/OEM packaging, including glass bottles, caps, sprayers, and boxes. With over 10 years of experience, our own factory and design team serve premium fragrance brands in Europe, the US, and the Middle East."<br><br>
  <em>中文版：</em><br>
  「我们是 Fonli（菲利包装），专注高端香水包装超过 10 年，提供玻璃瓶、瓶盖、喷头、盒子的 ODM/OEM 定制服务，自有工厂和设计团队，主要服务欧美和中东的香水品牌。」
</div>`
    }
  ]
},
{
  id: 'ch11', order: 11,
  titleZh: '销售SOP标准流程', titleEn: 'Sales SOP Standard Process',
  icon: '🗂️', estimatedMinutes: 25,
  sections: [
    {
      headingZh: `公司定位与业务员三大目标`, headingEn: `Company Positioning & Sales Objectives`,
      contentZh: `
<div class="kc-intro">菲利包装的核心定位：我们不是"通用瓶子供应商"，而是「香水品牌的包装方案联合设计方 + 稳定生产基地」。</div>
<div class="kc-highlight-box">
  <strong>公司核心优势（必须能背出来）</strong><br>
  ① 超过 10+ 年香水包材经验，深耕欧美、中东市场<br>
  ② 自有工厂 + 设计团队，从设计到量产全掌控<br>
  ③ ODM/OEM 定制能力，服务中高端品牌
</div>
<table class="kc-table">
  <thead><tr><th>目标</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td><strong>目标 1：高质量项目数</strong></td><td>有清晰需求、进入打样/开模阶段的项目数量</td></tr>
    <tr><td><strong>目标 2：高客单 & 高毛利</strong></td><td>以中高端客户为主，强调设计与工艺价值，避免纯价格战</td></tr>
    <tr><td><strong>目标 3：重点市场深耕</strong></td><td>在欧美、中东建立并维护有持续新品计划的核心客户</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">
  <strong>目标客户优先级</strong><br>
  ✅ 一级：自有香水品牌（欧美/中东）、香水代工厂（OEM/ODM）<br>
  ✅ 二级：区域代理/贸易商、国外香水包材设计公司<br>
  ❌ 不优先：单次小散客、仅问价无明确项目计划者
</div>`,
      contentEn: `
<div class="kc-intro">Fonli's core positioning: Not just a "generic bottle supplier" — we are a fragrance brand's <strong>packaging co-design partner + reliable production base</strong>.</div>
<div class="kc-highlight-box">
  <strong>Core Advantages (memorize these)</strong><br>
  ① 10+ years in perfume packaging, expertise in EU, US & Middle East markets<br>
  ② Own factory + design team — full control from design to mass production<br>
  ③ ODM/OEM customization capability for mid-to-high-end brands
</div>
<table class="kc-table">
  <thead><tr><th>Goal</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>Goal 1: High-quality project count</strong></td><td>Projects with clear requirements that have entered sampling/tooling stage</td></tr>
    <tr><td><strong>Goal 2: High value & high margin</strong></td><td>Focus on mid-to-high-end clients; emphasize design value, avoid price wars</td></tr>
    <tr><td><strong>Goal 3: Key market depth</strong></td><td>Build and maintain core clients in EU/US and Middle East with ongoing new product plans</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">
  <strong>Target Client Priority</strong><br>
  ✅ Tier 1: Own fragrance brands (EU/US/Middle East), OEM/ODM factories<br>
  ✅ Tier 2: Regional distributors, overseas packaging design companies<br>
  ❌ De-prioritize: One-time small buyers, price-only inquiries with no clear project
</div>`
    },
    {
      headingZh: `六大SOP阶段总览`, headingEn: `6 SOP Stages Overview`,
      contentZh: `
<div class="kc-intro">业务员的工作分为 6 个标准阶段，必须熟记整条主线：</div>
<div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">市场与客户定位</div><div class="kc-step-desc">确定目标客户类型优先级，了解市场定位（欧美/中东，中高端）</div></div></div>
<div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">线索获取与初筛</div><div class="kc-step-desc">来源管理（展会/转介绍等），按优先级筛选：有明确时间表、接受定制、有预算</div></div></div>
<div class="kc-step"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">深度需求沟通与方案销售</div><div class="kc-step-desc">必问清单：品牌定位、香水类型/容量、风格偏好、出口国家、量与预算；输出专业包装方案</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">打样 / 开模项目管理</div><div class="kc-step-desc">打样前邮件确认3D/效果图、LOGO位置、颜色、容量；打样中拍照更新进度；每套样品有编号</div></div></div>
<div class="kc-step"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">大货生产与交付管理</div><div class="kc-step-desc">大货前确认：对版样、规格工艺、包装方式；掌握3个关键节点：开始/中期/完工；出货前抽检并拍照</div></div></div>
<div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">复盘与长期客户维护</div><div class="kc-step-desc">A级客户每月沟通+每季度新品推荐；B级每1-2个月推送；C级节日/展会前后联系</div></div></div>`,
      contentEn: `
<div class="kc-intro">The sales workflow is divided into 6 standard stages — memorize the full process flow:</div>
<div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">Market & Client Positioning</div><div class="kc-step-desc">Identify target client priority tiers; understand market positioning (EU/US/Middle East, mid-to-high-end)</div></div></div>
<div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">Lead Generation & Pre-screening</div><div class="kc-step-desc">Manage sources (trade shows, referrals etc.); prioritize leads with clear timelines, custom requirements, and budget</div></div></div>
<div class="kc-step"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">In-depth Needs Analysis & Solution Selling</div><div class="kc-step-desc">Must-ask checklist: brand positioning, fragrance type/volume, style preference, export country, MOQ and budget; deliver professional packaging proposals</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">Sampling / Tooling Project Management</div><div class="kc-step-desc">Confirm via email before sampling: 3D renders, logo placement, color, volume; send photos during sampling; each sample set must be numbered</div></div></div>
<div class="kc-step"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">Mass Production & Delivery</div><div class="kc-step-desc">Pre-production checks: counter sample, spec & process, packaging method; track 3 key milestones: start/mid-point/completion; inspect and photograph before shipment</div></div></div>
<div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">Review & Long-term Client Care</div><div class="kc-step-desc">A-tier: monthly communication + quarterly new product recommendations; B-tier: push every 1–2 months; C-tier: contact around holidays and trade shows</div></div></div>`
    },
    {
      headingZh: `日常行为标准`, headingEn: `Daily & Weekly Work Standards`,
      contentZh: `
<table class="kc-table">
  <thead><tr><th>频率</th><th>必做事项</th></tr></thead>
  <tbody>
    <tr><td><strong>每日</strong></td><td>① 处理所有未回复邮件/消息（当天清零）<br>② 更新每个项目状态（至少一句话：进度/下一步）<br>③ 主动触达至少 5 个高潜在客户</td></tr>
    <tr><td><strong>每周</strong></td><td>① 梳理在手项目（按阶段：需求中/打样中/等确认/大货中/已收货）<br>② 向主管汇报：新立项数、推进阶段数、遇到的阻碍</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">
  <strong>行为底线（不可逾越）</strong><br>
  ❌ 不随意承诺交期与工艺效果——所有承诺基于工厂确认<br>
  ❌ 不一味压价，损害长期合作与项目质量<br>
  ✅ 帮助客户理解"为什么这个包装值得这个价格"
</div>
<div class="kc-highlight-box" style="margin-top:12px">
  <strong>展会现场必问三个问题</strong><br>
  1. 您是品牌方 / 工厂 / 贸易商？<br>
  2. 主要市场是哪里？定位中端还是高端？<br>
  3. 近期有新系列或新品牌的上新计划吗？
</div>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>Frequency</th><th>Required Actions</th></tr></thead>
  <tbody>
    <tr><td><strong>Daily</strong></td><td>① Reply to all pending emails/messages (zero backlog each day)<br>② Update every project status (at least one line: progress/next step)<br>③ Proactively reach out to at least 5 high-potential clients</td></tr>
    <tr><td><strong>Weekly</strong></td><td>① Review all active projects by stage (needs assessment / sampling / awaiting confirmation / mass production / delivered)<br>② Report to manager: new projects started, projects advanced, blockers encountered</td></tr>
  </tbody>
</table>
<div class="kc-highlight-box" style="margin-top:12px">
  <strong>Non-negotiable Standards</strong><br>
  ❌ Never promise delivery dates or process results without factory confirmation<br>
  ❌ Never cut prices to the point of damaging quality or long-term relationships<br>
  ✅ Help clients understand why this packaging is worth the price
</div>
<div class="kc-highlight-box" style="margin-top:12px">
  <strong>3 Must-Ask Questions at Trade Shows</strong><br>
  1. Are you a brand owner, factory, or trading company?<br>
  2. What is your main market? Mid-range or high-end positioning?<br>
  3. Do you have any new series or brand launches planned soon?
</div>`
    }
  ]
},
{
  id: 'ch12', order: 12,
  titleZh: '常见问题解答（FAQ）', titleEn: 'Frequently Asked Questions',
  icon: '💡', estimatedMinutes: 20,
  sections: [
    {
      headingZh: `客户沟通类常见问题`, headingEn: `Client Communication FAQs`,
      contentZh: `
<div class="kc-intro">以下是实际业务中最常遇到的问题与标准处理方法，新人必须熟记。</div>
<table class="kc-table">
  <thead><tr><th>#</th><th>问题</th><th>标准处理方法</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>什么时候要客户提供 LOGO？</strong></td><td>① 客户有明确项目且有合作意向时<br>② 客户发来设计稿要我们帮设计时<br>③ 客户确认瓶子报价后，要LOGO做效果图激发下单意愿<br>❌ 切忌一开始就要LOGO</td></tr>
    <tr><td>2</td><td><strong>什么时候加客户 WhatsApp？</strong></td><td>① 邮件来回多次且客户积极互动时<br>② 客户邮件回复很及时<br>③ 客户签名中有手机号可主动添加<br>⚠️ 新业务员建议暂不用WhatsApp，容易出错</td></tr>
    <tr><td>3</td><td><strong>如何判断目标客户？</strong></td><td>优先：灌装公司、国外化妆品贸易公司、Niche品牌、国外香水包材设计公司<br>⚠️ 香精公司不一定是目标客户</td></tr>
    <tr><td>4</td><td><strong>客户数量达不到MOQ怎么办？</strong></td><td>① 推荐热销品（库存款）——介绍时说"热销品"而非"库存"<br>② 说出行业MOQ和同行标准，引导增加数量<br>③ 对比1万和5千的报价，让客户自选</td></tr>
    <tr><td>5</td><td><strong>客户要很多样品怎么回复？</strong></td><td>① 尽量满足客户所选样品<br>② 转被动为主动：推我们常做的热销品<br>③ 寄样最少3–5款，必须符合客户市场风格</td></tr>
    <tr><td>6</td><td><strong>报价后客户没有回复怎么办？</strong></td><td>① 从多方面分析客户性质（中间商/终端商）<br>② 跟进3封邮件无回复，可提出寄样吸引注意<br>③ 有新设计热销品可发给客户看<br>④ 长期不回复：每月跟进一次，关注社媒动态</td></tr>
    <tr><td>7</td><td><strong>客户礼貌性回复"以后有机会合作"怎么跟进？</strong></td><td>① 回复时必须抛出1–2个问题深入了解客户（网站、市场、社媒等）<br>② 客户不回问题也要继续问，不问永远不会了解</td></tr>
    <tr><td>8</td><td><strong>客户在没有任何信息时要求我们帮忙设计？</strong></td><td>① 答应帮忙，但先请客户简单介绍自己（公司名、网站、市场）<br>② 新客户最多只免费设计1款<br>③ 贸易公司：1款免费，多出来的收费（下单后可返还设计费）</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Most common situations in real business and the standard response for each.</div>
<table class="kc-table">
  <thead><tr><th>#</th><th>Question</th><th>Standard Approach</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>When to ask for the client's LOGO?</strong></td><td>① When there's a clear project and cooperation intent<br>② When client sends design files asking for our help<br>③ After client confirms bottle and price — get LOGO for a mockup to motivate ordering<br>❌ Never ask for LOGO at the very first contact</td></tr>
    <tr><td>2</td><td><strong>When to add client on WhatsApp?</strong></td><td>① After multiple email exchanges with active client engagement<br>② Client replies to emails promptly<br>③ Phone number in client's email signature<br>⚠️ New sales staff: avoid WhatsApp early — easy to make mistakes</td></tr>
    <tr><td>3</td><td><strong>How to identify target clients?</strong></td><td>Priority: filling companies, overseas cosmetics trading companies, niche brands, overseas packaging design companies<br>⚠️ Fragrance formula companies are not always target clients</td></tr>
    <tr><td>4</td><td><strong>Client quantity below MOQ — what to do?</strong></td><td>① Recommend stock products ("best sellers" not "stock")<br>② State industry MOQ standards to guide client to increase quantity<br>③ Show price comparison at 10K vs 5K to let client choose</td></tr>
    <tr><td>5</td><td><strong>Client wants many samples — how to respond?</strong></td><td>① Accommodate client's selections as much as possible<br>② Shift from reactive to proactive: push our bestselling styles<br>③ Send minimum 3–5 samples matching client's market style</td></tr>
    <tr><td>6</td><td><strong>No reply after sending quotation — what to do?</strong></td><td>① Analyze client type (intermediary vs. end brand)<br>② After 3 follow-up emails with no reply, offer samples to regain attention<br>③ Share new designs or hot products that fit their market<br>④ Long-term silence: follow up monthly, monitor social media</td></tr>
    <tr><td>7</td><td><strong>Client gives polite "maybe later" reply?</strong></td><td>① Always include 1–2 questions to learn more about the client<br>② Even if they don't answer, keep asking — it's the only way to know</td></tr>
    <tr><td>8</td><td><strong>Client asks for design with zero info provided?</strong></td><td>① Agree to help but first ask for brief introduction (company, website, market)<br>② New clients: maximum 1 free design<br>③ Trading companies: 1 free design, charge for extras (refundable after order)</td></tr>
  </tbody>
</table>`
    },
    {
      headingZh: `出货与报价类常见问题`, headingEn: `Shipping & Quoting FAQs`,
      contentZh: `
<table class="kc-table">
  <thead><tr><th>#</th><th>问题</th><th>标准处理方法</th></tr></thead>
  <tbody>
    <tr><td>9</td><td><strong>每种工艺/LOGO MOQ 是多少？</strong></td><td>一般 10,000 pcs 一个工艺；老客户/新客户对价格不敏感时可灵活降至 5,000 pcs</td></tr>
    <tr><td>10</td><td><strong>如何避免装货出错？</strong></td><td>① 装货前打印装箱单，提前核对一遍<br>② 装完柜后仔细核对数量<br>③ 确认无误后再封柜（封条卡上后不能再开柜）</td></tr>
    <tr><td>11</td><td><strong>出口时有哪些特殊要求需注意？</strong></td><td>① 沙特阿拉伯：必须有CO证书，外箱必须有 MADE IN CHINA 字样<br>② CIF：必须加上目的港；FOB：必须加上出口港<br>③ 出口欧洲：必须使用欧洲规格托盘（80×120mm）<br>④ 货量约8个托盘但不足一个20尺柜：建议走整柜，散货目的港清关费用很高</td></tr>
    <tr><td>12</td><td><strong>PI / Quotation / Sales Contract 需注意什么？</strong></td><td>① 核查金额是否正确<br>② 所有单证显示报价条款（EXW/FOB/CIF），金额一致<br>③ 付款方式：金额 < $10,000 → 订金50%；≥ $10,000 → 订金30%</td></tr>
    <tr><td>13</td><td><strong>什么时候主动发 PI 给客户？</strong></td><td>客户对价格、质量等各方面都已确认时，主动发PI可加快进程</td></tr>
    <tr><td>14</td><td><strong>谈妥1万数量后客户实际只有几千，如何跟进？</strong></td><td>① 转换问题：提议打手板(mockup)给客户确认，转移注意力<br>② 提供1万 vs 5千的报价对比，促使客户达到MOQ</td></tr>
    <tr><td>15</td><td><strong>如何让邮件标题更吸引大客户？</strong></td><td>标题中加入：容量（如50ml）+ 材质特征（如锌合金盖）+ 工艺细节（如滴胶）</td></tr>
  </tbody>
</table>`,
      contentEn: `
<table class="kc-table">
  <thead><tr><th>#</th><th>Question</th><th>Standard Approach</th></tr></thead>
  <tbody>
    <tr><td>9</td><td><strong>MOQ per process/LOGO?</strong></td><td>Generally 10,000 pcs per process; can be flexible to 5,000 pcs for existing clients or price-insensitive new clients</td></tr>
    <tr><td>10</td><td><strong>How to avoid loading errors?</strong></td><td>① Print packing list before loading and verify<br>② Double-check quantities after loading the container<br>③ Only seal container after confirming everything (cannot re-open once sealed)</td></tr>
    <tr><td>11</td><td><strong>Special export requirements to know?</strong></td><td>① Saudi Arabia: CO certificate required; outer box must say MADE IN CHINA<br>② CIF: must include destination port; FOB: must include export port<br>③ Europe: must use European pallet size (80×120mm)<br>④ ~8 pallets but under a 20ft container: recommend full container; LCL destination clearance fees are high</td></tr>
    <tr><td>12</td><td><strong>What to check in PI/Quotation/Contract?</strong></td><td>① Verify amounts are correct<br>② All documents show trade terms (EXW/FOB/CIF) and amounts match<br>③ Payment: &lt;$10,000 → 50% deposit; ≥$10,000 → 30% deposit</td></tr>
    <tr><td>13</td><td><strong>When to proactively send PI?</strong></td><td>When client has confirmed price, quality, and all details — sending PI proactively speeds up the process</td></tr>
    <tr><td>14</td><td><strong>Client agreed to 10K but can only do a few thousand?</strong></td><td>① Pivot: propose a physical mockup (hand model) to refocus client<br>② Show price comparison at 10K vs 5K to motivate reaching MOQ</td></tr>
    <tr><td>15</td><td><strong>How to make email subject lines catch big clients' attention?</strong></td><td>Include in subject: volume (e.g. 50ml) + material feature (e.g. zinc alloy cap) + process detail (e.g. epoxy)</td></tr>
  </tbody>
</table>`
    }
  ]
},
{
  id: 'ch13', order: 13,
  titleZh: '金属产品重量计算（附录E）', titleEn: 'Metal Weight Calculation (Appendix E)',
  icon: '⚖️', estimatedMinutes: 10,
  sections: [
    {
      headingZh: `材料密度 & 重量计算公式`, headingEn: `Material Density & Weight Formula`,
      contentZh: `
<div class="kc-intro">计算金属标牌、盖子等金属产品重量，有助于核对报价和物流运费。</div>
<div class="kc-highlight-box">
  <strong>重量计算公式：</strong><br>
  <code>长（mm）× 宽（mm）× 厚度（mm）× 密度 ÷ 1000 = 重量（g）</code><br><br>
  <em>示例：铝标牌 50×30mm，厚度 1.5mm</em><br>
  → 50 × 30 × 1.5 × 2.79 ÷ 1000 = <strong>6.28 g</strong>
</div>
<table class="kc-table" style="margin-top:16px">
  <thead><tr><th>材料</th><th>密度 (g/cm³)</th><th>常见应用</th></tr></thead>
  <tbody>
    <tr><td><strong>铝 (Aluminium)</strong></td><td>2.79</td><td>铝标牌、中套、电化铝盖</td></tr>
    <tr><td><strong>铁 / 不锈钢 (Iron / Stainless Steel)</strong></td><td>7.9</td><td>不锈钢标牌</td></tr>
    <tr><td><strong>铜 (Copper)</strong></td><td>8.9</td><td>特殊定制件（较少用）</td></tr>
    <tr><td><strong>锌合金 (Zamac / Zinc Alloy)</strong></td><td>6.8</td><td>锌合金盖、锌合金标牌</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px"><strong>常用铝标牌厚度规格：</strong></div>
<table class="kc-table">
  <thead><tr><th>用途</th><th>厚度</th></tr></thead>
  <tbody>
    <tr><td>常规铝标牌</td><td>0.3 mm</td></tr>
    <tr><td>立体感（凸字/凹字）</td><td>0.4 – 0.5 mm</td></tr>
    <tr><td>锌合金标牌</td><td>1.5 – 3 mm</td></tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Calculating metal weights helps verify quotations and estimate shipping costs.</div>
<div class="kc-highlight-box">
  <strong>Weight Formula:</strong><br>
  <code>Length (mm) × Width (mm) × Thickness (mm) × Density ÷ 1000 = Weight (g)</code><br><br>
  <em>Example: Aluminum plate 50×30mm, thickness 1.5mm</em><br>
  → 50 × 30 × 1.5 × 2.79 ÷ 1000 = <strong>6.28 g</strong>
</div>
<table class="kc-table" style="margin-top:16px">
  <thead><tr><th>Material</th><th>Density (g/cm³)</th><th>Common Uses</th></tr></thead>
  <tbody>
    <tr><td><strong>Aluminium</strong></td><td>2.79</td><td>Aluminum plates, collars, aluminum caps</td></tr>
    <tr><td><strong>Iron / Stainless Steel</strong></td><td>7.9</td><td>Stainless steel name plates</td></tr>
    <tr><td><strong>Copper</strong></td><td>8.9</td><td>Special custom parts (rare)</td></tr>
    <tr><td><strong>Zamac / Zinc Alloy</strong></td><td>6.8</td><td>Zamac caps and name plates</td></tr>
  </tbody>
</table>
<div class="kc-intro" style="margin-top:16px"><strong>Common aluminum plate thicknesses:</strong></div>
<table class="kc-table">
  <thead><tr><th>Use</th><th>Thickness</th></tr></thead>
  <tbody>
    <tr><td>Standard aluminum plate</td><td>0.3 mm</td></tr>
    <tr><td>3D effect (emboss/deboss)</td><td>0.4 – 0.5 mm</td></tr>
    <tr><td>Zamac plate</td><td>1.5 – 3 mm</td></tr>
  </tbody>
</table>`
    }
  ]
},
{
  id: 'ch14', order: 14,
  titleZh: '付款方式与报价类型（附录F+G）', titleEn: 'Payment Methods & Pricing Terms (Appendix F+G)',
  icon: '💳', estimatedMinutes: 15,
  sections: [
    {
      headingZh: `附录F：付款方式类型`, headingEn: `Appendix F: Payment Methods`,
      contentZh: `
<div class="kc-intro">公司接受的收款方式分为以下 4 种：</div>
<table class="kc-table">
  <thead><tr><th>类型</th><th>全称</th><th>说明与注意事项</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>TT</strong></td>
      <td>Bank Transfer / 电汇</td>
      <td>最常用方式。一般为下单后付 30% 定金，出货前付 70% 尾款。银行转账手续费约 20–50 美金（基于付款金额和合作情况决定是否收取）</td>
    </tr>
    <tr>
      <td><strong>PayPal</strong></td>
      <td>PayPal Online Payment</td>
      <td>给客户 PayPal 账号付款，或在 PayPal 后台制作付款账单。<br>⚠️ <strong>注意：手续费为 4.5%</strong>，需在报价时将此费用考虑进去</td>
    </tr>
    <tr>
      <td><strong>WU</strong></td>
      <td>Western Union / 西联汇款</td>
      <td>欧洲市场常见。提供收款人名称即可接收。适合 <strong>小额付款（2,000 美金以下）</strong>，手续费由客户方承担</td>
    </tr>
    <tr>
      <td><strong>L/C</strong></td>
      <td>Letter of Credit / 信用证</td>
      <td>按照客户要求处理，具体情况具体分析。我们可接受信用证付款，条件需事前协商</td>
    </tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">The company accepts 4 types of payment:</div>
<table class="kc-table">
  <thead><tr><th>Type</th><th>Full Name</th><th>Notes</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>TT</strong></td>
      <td>Bank Transfer / 电汇</td>
      <td>Most common. Typically 30% deposit upon order, 70% balance before shipment. Bank transfer fee approx. $20–50 (may or may not be charged depending on amount and relationship)</td>
    </tr>
    <tr>
      <td><strong>PayPal</strong></td>
      <td>PayPal Online Payment</td>
      <td>Client pays to our PayPal account or via PayPal invoice.<br>⚠️ <strong>Fee: 4.5%</strong> — must factor into the quoted price</td>
    </tr>
    <tr>
      <td><strong>WU</strong></td>
      <td>Western Union</td>
      <td>Common in European market. Only requires recipient name. Best for <strong>small payments (under $2,000)</strong>. Transfer fees borne by the client.</td>
    </tr>
    <tr>
      <td><strong>L/C</strong></td>
      <td>Letter of Credit / 信用证</td>
      <td>Handled case by case per client requirements. We can accept L/C — terms must be negotiated in advance.</td>
    </tr>
  </tbody>
</table>`
    },
    {
      headingZh: `附录G：客户报价的价格类型`, headingEn: `Appendix G: Price / Trade Term Types`,
      contentZh: `
<div class="kc-intro">报价一般含以下 4 种价格类型，需根据客户要求选择合适的报价方式：</div>
<table class="kc-table">
  <thead><tr><th>缩写</th><th>全称</th><th>包含范围与说明</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>EXW</strong></td>
      <td>Ex Works / 出厂价</td>
      <td>做完货后的价格，不含任何运费、税费等；客户自行安排提货</td>
    </tr>
    <tr>
      <td><strong>FOB</strong></td>
      <td>Free On Board / 离岸价</td>
      <td>产品成本 + 在国内港口装船前产生的所有费用（货代、报关、内陆运输等），约 2,000 RMB 左右</td>
    </tr>
    <tr>
      <td><strong>CIF</strong></td>
      <td>Cost, Insurance & Freight / 到岸价</td>
      <td>FOB 基础上 + 海运或空运到客户国家的运费 + 保险费；具体运费需按货量咨询</td>
    </tr>
    <tr>
      <td><strong>DDP</strong></td>
      <td>Delivered Duty Paid / 门到门价</td>
      <td>所有费用全包：产品成本 + 国内货代 + 国际运费 + 目的地关税及当地税费</td>
    </tr>
  </tbody>
</table>`,
      contentEn: `
<div class="kc-intro">Quotations generally include 4 price types. Choose the appropriate one based on the client's requirements:</div>
<table class="kc-table">
  <thead><tr><th>Term</th><th>Full Name</th><th>What's Included</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>EXW</strong></td>
      <td>Ex Works</td>
      <td>Product price only — no freight or taxes. Client arranges their own collection.</td>
    </tr>
    <tr>
      <td><strong>FOB</strong></td>
      <td>Free On Board</td>
      <td>Product cost + all domestic charges up to loading at the export port (freight forwarder, customs, inland transport) — approx. RMB 2,000</td>
    </tr>
    <tr>
      <td><strong>CIF</strong></td>
      <td>Cost, Insurance & Freight</td>
      <td>FOB + international sea/air freight to client's country + insurance — actual freight depends on cargo volume</td>
    </tr>
    <tr>
      <td><strong>DDP</strong></td>
      <td>Delivered Duty Paid</td>
      <td>All-in price: product cost + domestic freight + international shipping + destination duties and local taxes</td>
    </tr>
  </tbody>
</table>`
    }
  ]
},
{
  id: 'ch15', order: 15,
  titleZh: '客户成单12步流程（附录H）', titleEn: 'Order Completion Process — 12 Steps (Appendix H)',
  icon: '📋', estimatedMinutes: 15,
  sections: [
    {
      headingZh: `完整成单流程（12步）`, headingEn: `Full Order Process (12 Steps)`,
      contentZh: `
<div class="kc-intro">从询盘到订单归档的完整标准流程，每个步骤都有明确的动作要求：</div>
<div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">客户询盘 Inquire</div><div class="kc-step-desc">了解客户具体需求信息：产品类型、数量、设计要求、目标市场等</div></div></div>
<div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">客户报价 Quotation</div><div class="kc-step-desc">基于客户询盘做出报价，并协商交期、付款方式、包装方式等</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">确认订单 PI or Invoice</div><div class="kc-step-desc">给客户做形式合同（PI / Proforma Invoice）或商业发票（CI / Invoice）</div></div></div>
<div class="kc-step"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">客户付定金 Deposit</div><div class="kc-step-desc">一般为 30% 定金；特殊情况特殊处理，客户也可一次性付清</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">下单生产 Produce</div><div class="kc-step-desc">跟单生产，注意产品质量和交期，随时告知客户具体生产情况（拍照/视频更新）</div></div></div>
<div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">产品完成 Finished</div><div class="kc-step-desc">通知客户付尾款（如谈的是见提单付款则省略此步）</div></div></div>
<div class="kc-step"><div class="kc-step-num">07</div><div class="kc-step-body"><div class="kc-step-title">询问货代 Forwarder</div><div class="kc-step-desc">确认运输方式（海运 / 空运 / 快递 / 国内交货）；询问客户是否有指定货代；快递需提前确认客户国际快递账号</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">08</div><div class="kc-step-body"><div class="kc-step-title">订舱报关 Booking</div><div class="kc-step-desc">联系货代订舱，填写订舱单；提供客户合同发票、装箱单；通知报关公司制作报关资料</div></div></div>
<div class="kc-step"><div class="kc-step-num">09</div><div class="kc-step-body"><div class="kc-step-title">入仓交货 Delivery</div><div class="kc-step-desc">联系司机入仓，到仓库交单卸货</div></div></div>
<div class="kc-step"><div class="kc-step-num">10</div><div class="kc-step-body"><div class="kc-step-title">开船跟单 Sailing</div><div class="kc-step-desc">开船后联系货代索取提单；如客户需要 FA 或其他相关证件，通知货代协助制作</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">11</div><div class="kc-step-body"><div class="kc-step-title">领取提单 B/L</div><div class="kc-step-desc">领取提单并寄给客户（通知客户付尾款，如已付则略）；电放提单则发邮件给客户</div></div></div>
<div class="kc-step"><div class="kc-step-num">12</div><div class="kc-step-body"><div class="kc-step-title">订单完成 Done</div><div class="kc-step-desc">确认客户收货，订单归档</div></div></div>
<div class="kc-highlight-box" style="margin-top:16px">
  <strong>关键节点提醒：</strong><br>
  ⚠️ 步骤3（PI）：所有细节确认后才开单——数量、工艺、颜色、包装均需书面确认<br>
  ⚠️ 步骤4（定金）：<strong>收到定金后才安排生产</strong>，切勿提前生产<br>
  ⚠️ 步骤8（报关）：出口沙特须有CO证书；出口欧洲须用欧规托盘（80×120mm）<br>
  ⚠️ 步骤11（提单）：正本提单控货，未收到尾款前不可放单（除非约定电放）
</div>`,
      contentEn: `
<div class="kc-intro">Complete standard order flow from inquiry to archive — each step has clear required actions:</div>
<div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">Inquire</div><div class="kc-step-desc">Understand client's specific requirements: product type, quantity, design requirements, target market, etc.</div></div></div>
<div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">Quotation</div><div class="kc-step-desc">Issue quotation based on client inquiry; negotiate lead time, payment terms, and packaging requirements</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">03</div><div class="kc-step-body"><div class="kc-step-title">Confirm Order — PI or Invoice</div><div class="kc-step-desc">Issue Proforma Invoice (PI) or Commercial Invoice (CI) to client — all specs, processes, colors, and packaging must be confirmed in writing</div></div></div>
<div class="kc-step"><div class="kc-step-num">04</div><div class="kc-step-body"><div class="kc-step-title">Deposit Payment</div><div class="kc-step-desc">Typically 30% deposit; special situations handled case by case; client may also pay in full</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">05</div><div class="kc-step-body"><div class="kc-step-title">Production</div><div class="kc-step-desc">Follow up production closely — monitor quality and delivery timeline; keep client updated with photos/videos throughout</div></div></div>
<div class="kc-step"><div class="kc-step-num">06</div><div class="kc-step-body"><div class="kc-step-title">Production Complete</div><div class="kc-step-desc">Notify client to pay balance (skip if payment terms are "against B/L")</div></div></div>
<div class="kc-step"><div class="kc-step-num">07</div><div class="kc-step-body"><div class="kc-step-title">Freight Forwarder</div><div class="kc-step-desc">Confirm shipping method (sea / air / express / local delivery); ask if client has designated forwarder; for express, confirm client's international courier account in advance</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">08</div><div class="kc-step-body"><div class="kc-step-title">Booking & Customs</div><div class="kc-step-desc">Contact forwarder to book space; provide commercial invoice and packing list; notify customs broker to prepare export documents</div></div></div>
<div class="kc-step"><div class="kc-step-num">09</div><div class="kc-step-body"><div class="kc-step-title">Delivery to Warehouse</div><div class="kc-step-desc">Arrange truck to deliver to warehouse; hand over goods and documents</div></div></div>
<div class="kc-step"><div class="kc-step-num">10</div><div class="kc-step-body"><div class="kc-step-title">Sailing</div><div class="kc-step-desc">After departure, request Bill of Lading from forwarder; arrange any additional certificates (FA, CO, etc.) as required by client</div></div></div>
<div class="kc-step kc-step-highlight"><div class="kc-step-num">11</div><div class="kc-step-body"><div class="kc-step-title">Bill of Lading (B/L)</div><div class="kc-step-desc">Obtain B/L and send to client (notify client to pay balance if not yet paid); for telex release, send email confirmation to client</div></div></div>
<div class="kc-step"><div class="kc-step-num">12</div><div class="kc-step-body"><div class="kc-step-title">Order Complete</div><div class="kc-step-desc">Confirm client received goods; archive the order</div></div></div>
<div class="kc-highlight-box" style="margin-top:16px">
  <strong>Key Checkpoints:</strong><br>
  ⚠️ Step 3 (PI): Issue only after ALL details confirmed in writing — specs, process, color, packaging<br>
  ⚠️ Step 4 (Deposit): <strong>Never start production before deposit is received</strong><br>
  ⚠️ Step 8 (Customs): Saudi Arabia requires CO certificate; Europe requires EU standard pallets (80×120mm)<br>
  ⚠️ Step 11 (B/L): Original B/L controls cargo release — do not release without balance payment (unless telex release was agreed)
</div>`
    }
  ]
},

];

// ── QUESTION BANK (interim - to be replaced after V3 approval) ──
const QUESTIONS = [

  // ── CH10: 扩展双语词汇 ──
  {
    id: 'q_ch10_01', chapterId: 'ch10', type: 'single', difficulty: 'easy',
    questionZh: '"Zamac Cap" 对应的中文是什么？',
    questionEn: 'What is the Chinese term for "Zamac Cap"?',
    optionsZh: ['沙林盖', '锌铝合金盖', '木盖', '亚克力盖'],
    optionsEn: ['Surlyn Cap', 'Zinc Alloy Cap', 'Wooden Cap', 'Acrylic Cap'],
    answer: 1,
    explanationZh: 'Zamac / Zamak 即锌铝合金，其盖子质感厚重，常用于高端香水。',
    explanationEn: 'Zamac/Zamak is zinc alloy — heavy and premium feel, commonly used for high-end perfume caps.'
  },
  {
    id: 'q_ch10_02', chapterId: 'ch10', type: 'single', difficulty: 'easy',
    questionZh: '"Transparent color coating" 对应哪种中文工艺？',
    questionEn: 'Which Chinese process does "Transparent color coating" correspond to?',
    optionsZh: ['实喷', '透喷', '渐变喷涂', '橡胶漆'],
    optionsEn: ['Solid coating', 'Transparent coating', 'Gradient coating', 'Rubber coating'],
    answer: 1,
    explanationZh: '透喷即透明喷涂，可透过瓶身看到玻璃内部，英文为 Transparent color coating。',
    explanationEn: 'Transparent color coating (透喷) allows you to see through the glass — distinct from solid (实喷) or gradient (渐变) coatings.'
  },
  {
    id: 'q_ch10_03', chapterId: 'ch10', type: 'single', difficulty: 'easy',
    questionZh: '"Flocking / Velvet" 对应哪种工艺？',
    questionEn: 'What does "Flocking / Velvet" refer to?',
    optionsZh: ['蒙砂', '植绒', '橡胶漆', '电镀'],
    optionsEn: ['Frosting', 'Flocking', 'Rubber coating', 'Metalizing'],
    answer: 1,
    explanationZh: '植绒（Flocking/Velvet）是在表面黏附短绒纤维，形成绒布质感。',
    explanationEn: 'Flocking/Velvet applies short fiber onto the surface to create a velvet texture.'
  },
  {
    id: 'q_ch10_04', chapterId: 'ch10', type: 'single', difficulty: 'medium',
    questionZh: '"Crimp Pump" 与 "Screw Neck" 的区别是什么？',
    questionEn: 'What is the difference between "Crimp Pump" and "Screw Neck"?',
    optionsZh: ['前者是卡口式，后者是螺口式', '前者是螺口式，后者是卡口式', '两者相同，只是叫法不同', '前者用于大瓶，后者用于小瓶'],
    optionsEn: ['Crimp = crimp neck style, Screw = screw neck style', 'Crimp = screw style, Screw = crimp style', 'Same thing, different names', 'Crimp for large bottles, Screw for small'],
    answer: 0,
    explanationZh: 'Crimp Pump（卡口式）需用封口机压合；Screw Neck（螺口式）可直接拧入，无需封口机。',
    explanationEn: 'Crimp pumps need a crimping machine to seal; Screw neck pumps thread in directly without a crimping machine.'
  },
  {
    id: 'q_ch10_05', chapterId: 'ch10', type: 'single', difficulty: 'medium',
    questionZh: '"Frosting / Frosted" 对应哪种工艺？',
    questionEn: 'What process does "Frosting / Frosted" describe?',
    optionsZh: ['烫金', '蒙砂', '植绒', '渐变喷涂'],
    optionsEn: ['Hot Stamping', 'Frosting', 'Flocking', 'Gradient coating'],
    answer: 1,
    explanationZh: '蒙砂（Frosting）是对玻璃表面进行磨砂处理，形成哑光不透明质感。',
    explanationEn: 'Frosting treats the glass surface to create a matte, translucent effect.'
  },
  {
    id: 'q_ch10_06', chapterId: 'ch10', type: 'single', difficulty: 'medium',
    questionZh: '以下哪个英文术语表示"试香纸"？',
    questionEn: 'Which English term means 试香纸 (fragrance test strip)?',
    optionsZh: ['Blotter / Scent card', 'Corrugated paper', 'Sleeve', 'Die Line'],
    optionsEn: ['Blotter / Scent card', 'Corrugated paper', 'Sleeve', 'Die Line'],
    answer: 0,
    explanationZh: '试香纸英文为 Blotter 或 Perfume scent card，用于让客户闻香。',
    explanationEn: 'Blotter or Perfume scent card is used for customers to test fragrance — not corrugated paper which is 瓦楞纸 for packaging.'
  },
  {
    id: 'q_ch10_07', chapterId: 'ch10', type: 'single', difficulty: 'medium',
    questionZh: '"Epoxy"在香水包材中指哪种工艺？',
    questionEn: 'What does "Epoxy" refer to in perfume packaging?',
    optionsZh: ['电镀', '滴胶', '珐琅', '蚀刻'],
    optionsEn: ['Metalizing', 'Epoxy / resin fill', 'Enamel', 'Etching'],
    answer: 1,
    explanationZh: '滴胶（Epoxy）是将透明树脂滴入 LOGO 凹槽，固化后呈现立体亮面效果。',
    explanationEn: 'Epoxy involves filling a recessed logo area with clear resin that cures to a glossy raised finish.'
  },
  {
    id: 'q_ch10_08', chapterId: 'ch10', type: 'single', difficulty: 'easy',
    questionZh: '"Lid and base box" 对应哪种纸盒？',
    questionEn: 'What box type is "Lid and base box"?',
    optionsZh: ['抽屉盒', '折叠盒', '天地盒', '圆筒盒'],
    optionsEn: ['Drawer box', 'Folding box', 'Lid and base box', 'Cylinder box'],
    answer: 2,
    explanationZh: '天地盒（Lid and base box）由盒盖（天）和盒底（地）两部分组成，常见于礼盒包装。',
    explanationEn: 'Lid and base box (天地盒) has a separate lid and base — commonly used for gift packaging.'
  },
  {
    id: 'q_ch10_09', chapterId: 'ch10', type: 'single', difficulty: 'hard',
    questionZh: '"OFC"（Over Flow Capacity）与"Brimful Capacity"有何区别？',
    questionEn: 'What is the difference between OFC (Over Flow Capacity) and Brimful Capacity?',
    optionsZh: ['OFC是溢流容量，Brimful是满口容量，两者意义相近但测量方式不同', '两者完全相同', 'OFC用于玻璃瓶，Brimful用于金属瓶', '只有Brimful是正式术语'],
    optionsEn: ['OFC = overflow capacity, Brimful = filled to rim — similar but measured differently', 'They are identical', 'OFC for glass bottles, Brimful for metal', 'Only Brimful is a formal term'],
    answer: 0,
    explanationZh: 'OFC（溢流容量）和满口容量（Brimful）都指装满瓶子的最大容量，是报关和规格确认时的重要参数。',
    explanationEn: 'Both refer to maximum fill capacity. These are important for customs documentation and spec confirmation.'
  },
  {
    id: 'q_ch10_10', chapterId: 'ch10', type: 'boolean', difficulty: 'easy',
    questionZh: '"Matt Lamination"（哑胶）比"Glossy Lamination"（光胶）的光泽度更高。',
    questionEn: '"Matt Lamination" has higher gloss than "Glossy Lamination."',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 1,
    explanationZh: '错误。哑胶（Matt Lamination）是哑光低光泽；光胶（Glossy Lamination）才是高光泽效果。',
    explanationEn: 'False. Matt Lamination is matte (low gloss); Glossy Lamination is the high-gloss option.'
  },
  {
    id: 'q_ch10_11', chapterId: 'ch10', type: 'single', difficulty: 'medium',
    questionZh: '"Gradient color coating" 对应哪种工艺？',
    questionEn: 'Which process does "Gradient color coating" describe?',
    optionsZh: ['实喷', '透喷', '渐变喷涂', '局部喷涂'],
    optionsEn: ['Solid coating', 'Transparent coating', 'Gradient coating', 'Partial coating'],
    answer: 2,
    explanationZh: '渐变喷涂（Gradient color coating）是颜色由深至浅或由一色过渡到另一色，常用于高端香水瓶。',
    explanationEn: 'Gradient color coating transitions from one color to another (or dark to light), common in high-end perfume bottle designs.'
  },
  {
    id: 'q_ch10_12', chapterId: 'ch10', type: 'single', difficulty: 'hard',
    questionZh: '"FEA 15"指的是什么？',
    questionEn: 'What does "FEA 15" refer to?',
    optionsZh: ['一种喷头型号，卡口口径15mm', '一种盖子材料规格', '一种玻璃瓶容量规格', '一种纸盒标准'],
    optionsEn: ['A crimp pump neck diameter of 15mm', 'A cap material specification', 'A glass bottle volume standard', 'A box packaging standard'],
    answer: 0,
    explanationZh: 'FEA 13/15/18/20 是欧标卡口（Crimp）喷头的口径规格，单位为毫米，FEA15 即口径15mm。',
    explanationEn: 'FEA 13/15/18/20 are European standard crimp neck diameters in millimeters — FEA 15 means 15mm crimp neck.'
  },

  // ── CH11: 销售SOP ──
  {
    id: 'q_ch11_01', chapterId: 'ch11', type: 'single', difficulty: 'easy',
    questionZh: '菲利包装的核心定位是什么？',
    questionEn: 'What is Fonli Packaging\'s core positioning?',
    optionsZh: ['通用瓶子供应商', '香水品牌的包装方案联合设计方 + 稳定生产基地', '最低价格的代工厂', '专门做公模的经销商'],
    optionsEn: ['Generic bottle supplier', 'Fragrance brand packaging co-design partner + reliable production base', 'Lowest-price OEM factory', 'Stock mold distributor'],
    answer: 1,
    explanationZh: '核心定位是"包装方案联合设计方 + 稳定生产基地"，不是通用瓶子供应商。',
    explanationEn: 'Core positioning is "packaging co-design partner + reliable production base" — not a generic bottle supplier.'
  },
  {
    id: 'q_ch11_02', chapterId: 'ch11', type: 'single', difficulty: 'easy',
    questionZh: '以下哪个是一级目标客户？',
    questionEn: 'Which of the following is a Tier 1 target client?',
    optionsZh: ['只问价格的单次散客', '自有香水品牌（欧美/中东）', '没有项目计划的新品牌', '只买库存款的贸易商'],
    optionsEn: ['One-time buyer asking for lowest price', 'Own fragrance brand (EU/US/Middle East)', 'New brand with no project plan', 'Trading company buying stock only'],
    answer: 1,
    explanationZh: '一级目标客户是自有香水品牌或香水 OEM/ODM 工厂，有清晰定位和新品计划。',
    explanationEn: 'Tier 1 clients are own fragrance brands or OEM/ODM factories with clear positioning and new product plans.'
  },
  {
    id: 'q_ch11_03', chapterId: 'ch11', type: 'single', difficulty: 'medium',
    questionZh: 'SOP 阶段 3 的核心任务是什么？',
    questionEn: 'What is the core task of SOP Stage 3?',
    optionsZh: ['出货与单证准备', '深度需求沟通与方案销售', '打样前确认3D图', '客户维护与复购'],
    optionsEn: ['Shipment and documentation', 'In-depth needs analysis and solution selling', 'Pre-sample 3D confirmation', 'Client retention and repeat orders'],
    answer: 1,
    explanationZh: '阶段3是深度需求沟通：必问品牌定位、风格、容量、量级等，并输出专业包装方案。',
    explanationEn: 'Stage 3 is in-depth needs analysis: ask about brand positioning, style, volume, MOQ, and deliver a professional packaging proposal.'
  },
  {
    id: 'q_ch11_04', chapterId: 'ch11', type: 'single', difficulty: 'medium',
    questionZh: '以下哪项是展会现场的必问问题之一？',
    questionEn: 'Which of the following is one of the 3 must-ask questions at trade shows?',
    optionsZh: ['您的公司创立了多少年？', '您近期有新系列或新品牌的上新计划吗？', '您目前的供应商是谁？', '您的工厂在哪里？'],
    optionsEn: ['How many years has your company been in business?', 'Do you have any new series or brand launches planned soon?', 'Who is your current supplier?', 'Where is your factory?'],
    answer: 1,
    explanationZh: '展会三必问：①您是品牌方/工厂/贸易商？②主要市场在哪里？定位中端还是高端？③近期有新系列上新计划吗？',
    explanationEn: 'The 3 must-ask questions: ① Brand/factory/trading company? ② Main market, mid or high-end? ③ Any new products planned soon?'
  },
  {
    id: 'q_ch11_05', chapterId: 'ch11', type: 'boolean', difficulty: 'easy',
    questionZh: '打样完成后，业务员可以根据自己的判断承诺客户交期，无需先与工厂确认。',
    questionEn: 'After sampling, a sales rep can promise delivery timelines based on personal judgment without checking with the factory first.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 1,
    explanationZh: '错误。行为底线之一：不随意承诺交期与工艺效果，所有承诺必须基于工厂确认。',
    explanationEn: 'False. One of the non-negotiable standards: never promise delivery or process results without factory confirmation.'
  },
  {
    id: 'q_ch11_06', chapterId: 'ch11', type: 'single', difficulty: 'medium',
    questionZh: 'A级客户的维护频率是什么？',
    questionEn: 'What is the client maintenance cadence for Tier A clients?',
    optionsZh: ['每季度联系一次', '每月至少一次沟通 + 每季度提供新品推荐', '节日前后联系', '每1–2个月推送新款'],
    optionsEn: ['Contact once per quarter', 'At least monthly communication + quarterly new product recommendations', 'Contact around holidays', 'Push new products every 1–2 months'],
    answer: 1,
    explanationZh: 'A级客户（核心品牌/大代工厂）：每月至少一次沟通，每季度提供新品包装趋势 + 新瓶型/工艺推荐。',
    explanationEn: 'A-tier clients: monthly communication minimum, quarterly updates on packaging trends and new product/process recommendations.'
  },
  {
    id: 'q_ch11_07', chapterId: 'ch11', type: 'single', difficulty: 'medium',
    questionZh: '大货生产前，必须完成哪3项最终确认？',
    questionEn: 'What 3 items must be confirmed before mass production begins?',
    optionsZh: ['3D图 + 颜色 + 价格', '对版样确认 + 规格工艺确认 + 包装方式确认', '客户签字 + 工厂签字 + 物流确认', 'LOGO + 尺寸 + 重量'],
    optionsEn: ['3D render + color + price', 'Counter sample + spec/process + packaging method confirmation', 'Client signature + factory signature + logistics confirmation', 'LOGO + dimensions + weight'],
    answer: 1,
    explanationZh: '大货前三项必确认：①对版样（含照片/视频/实物）②规格与工艺③包装方式（内托/彩盒/外箱）。',
    explanationEn: '3 pre-production must-confirms: ① counter sample (photo/video/physical) ② specs & processes ③ packaging method (insert/box/outer carton).'
  },
  {
    id: 'q_ch11_08', chapterId: 'ch11', type: 'single', difficulty: 'easy',
    questionZh: '业务员每日必须完成哪3件事？',
    questionEn: 'Which 3 things must a sales rep do every day?',
    optionsZh: ['发邮件 + 报价 + 打电话', '处理所有未回复邮件 + 更新项目状态 + 触达5个高潜在客户', '整理样品 + 更新报价单 + 参加会议', '跟进大货 + 准备单证 + 拍照'],
    optionsEn: ['Send emails + quote + call clients', 'Reply all emails + update project status + reach 5 high-potential clients', 'Organize samples + update quotation + attend meetings', 'Follow up production + prepare docs + take photos'],
    answer: 1,
    explanationZh: '每日三必做：①处理所有未回复邮件（当天清零）②更新每个项目状态 ③主动触达至少5个高潜在客户。',
    explanationEn: 'Daily 3 must-dos: ① clear all unanswered emails ② update every project status ③ proactively reach 5+ high-potential clients.'
  },
  {
    id: 'q_ch11_09', chapterId: 'ch11', type: 'single', difficulty: 'hard',
    questionZh: '打样时，样品寄出后应在多少天内要求客户给出反馈？',
    questionEn: 'After shipping samples, within how many days should client feedback be expected?',
    optionsZh: ['1–3天', '3–7天', '7–14天', '1个月'],
    optionsEn: ['1–3 days', '3–7 days', '7–14 days', '1 month'],
    answer: 1,
    explanationZh: '约定收到样品后 3–7 天内给出反馈，这是标准SOP要求，避免项目拖延。',
    explanationEn: 'SOP standard: agree with client to give feedback within 3–7 days of receiving samples, to avoid project delays.'
  },
  {
    id: 'q_ch11_10', chapterId: 'ch11', type: 'boolean', difficulty: 'medium',
    questionZh: '向主管的每周汇报内容应包括：本周新立项项目数、推进到新阶段的项目数、遇到的阻碍。',
    questionEn: 'The weekly manager report should include: new projects started, projects advanced to new stages, and blockers encountered.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。这是每周汇报的三项标准内容，让主管掌握团队整体推进情况。',
    explanationEn: 'True. These are the 3 standard weekly report items to keep management informed on team progress.'
  },

  // ── CH12: FAQ ──
  {
    id: 'q_ch12_01', chapterId: 'ch12', type: 'single', difficulty: 'easy',
    questionZh: '第一次联系新客户时，应该主动要求对方提供 LOGO 吗？',
    questionEn: 'Should you ask a new client for their LOGO on first contact?',
    optionsZh: ['是，越早拿到越好', '不，切忌一开始就要LOGO', '只要客户是品牌方就可以要', '看情况，随时可以要'],
    optionsEn: ['Yes, the sooner the better', 'No — never ask for LOGO at first contact', 'Only if the client is a brand', 'Depends, can ask anytime'],
    answer: 1,
    explanationZh: '切忌一开始就要客户LOGO。应在有明确合作意向时，或确认瓶型/报价后才请客户提供。',
    explanationEn: 'Never ask for LOGO at first contact. Request it only when there is clear cooperation intent or after bottle/pricing is confirmed.'
  },
  {
    id: 'q_ch12_02', chapterId: 'ch12', type: 'single', difficulty: 'medium',
    questionZh: '客户数量达到5000 pcs 但未到10000 pcs MOQ 时，正确做法是？',
    questionEn: 'Client wants 5,000 pcs but MOQ is 10,000. What is the correct approach?',
    optionsZh: ['直接拒绝', '推荐热销品（库存款），介绍时称为"热销品"而非"库存"', '降低MOQ到5000', '不接这个客户'],
    optionsEn: ['Decline directly', 'Recommend bestsellers (stock items) — call them "bestsellers" not "stock"', 'Lower MOQ to 5,000', 'Reject this client'],
    answer: 1,
    explanationZh: '库存产品介绍给客户时，要说"热销品"，切忌说成"库存"。5000 pcs可推荐热销品满足需求。',
    explanationEn: 'Introduce stock items as "bestsellers" — never as "stock." For 5,000 pcs, recommend bestsellers to accommodate the client.'
  },
  {
    id: 'q_ch12_03', chapterId: 'ch12', type: 'single', difficulty: 'medium',
    questionZh: '出口到沙特阿拉伯的货物有哪些特殊要求？',
    questionEn: 'What special requirements apply to shipments to Saudi Arabia?',
    optionsZh: ['必须有CE认证', '必须有CO证书，外箱必须标注 MADE IN CHINA', '必须使用欧洲规格托盘', '必须走整柜'],
    optionsEn: ['Must have CE certification', 'Must have CO certificate; outer box must state MADE IN CHINA', 'Must use European pallet size', 'Must be full container load'],
    answer: 1,
    explanationZh: '沙特要求：①必须提供CO（产地证）②外箱必须有 MADE IN CHINA 字样，否则清关会被阻。',
    explanationEn: 'Saudi Arabia requires: ① CO (Certificate of Origin) ② MADE IN CHINA printed on outer cartons — otherwise customs clearance will be blocked.'
  },
  {
    id: 'q_ch12_04', chapterId: 'ch12', type: 'single', difficulty: 'medium',
    questionZh: '订单金额小于10,000美金时，订金比例是多少？',
    questionEn: 'For orders under $10,000, what is the deposit percentage?',
    optionsZh: ['30%', '50%', '20%', '100%'],
    optionsEn: ['30%', '50%', '20%', '100%'],
    answer: 1,
    explanationZh: '小单（< $10,000）：订金50%；大单（≥ $10,000）：订金30%。尾款必须在出货前结清。',
    explanationEn: 'Small orders (< $10,000): 50% deposit. Large orders (≥ $10,000): 30% deposit. Balance must be cleared before shipment.'
  },
  {
    id: 'q_ch12_05', chapterId: 'ch12', type: 'single', difficulty: 'easy',
    questionZh: '寄样时，每次寄出的样品最少应该有几款？',
    questionEn: 'When shipping samples, what is the minimum number of styles to send?',
    optionsZh: ['1款', '2款', '3–5款', '10款以上'],
    optionsEn: ['1 style', '2 styles', '3–5 styles', '10+ styles'],
    answer: 2,
    explanationZh: '寄样最少3–5款，且必须是符合客户市场风格的款式，不要只寄一个样品。',
    explanationEn: 'Always send minimum 3–5 samples, and they must match the client\'s market style — never send just 1 sample.'
  },
  {
    id: 'q_ch12_06', chapterId: 'ch12', type: 'single', difficulty: 'medium',
    questionZh: '如何让邮件主题更容易吸引大客户打开？',
    questionEn: 'How to make email subject lines more likely to be opened by key clients?',
    optionsZh: ['写公司名称和联系方式', '加入容量 + 材质特征 + 工艺细节（如：50ml 锌合金盖 滴胶）', '只写"New product"', '标题越短越好'],
    optionsEn: ['Write company name and contact info', 'Include volume + material feature + process detail (e.g. 50ml zinc alloy cap epoxy)', 'Just write "New product"', 'Shorter is better'],
    answer: 1,
    explanationZh: '邮件标题要有具体产品信息：容量（如50ml）+ 材质（如锌合金盖）+ 工艺（如滴胶），才能引起专业客户兴趣。',
    explanationEn: 'Effective subject lines include specific product info: volume (50ml) + material (zinc alloy cap) + process (epoxy) to attract professional buyers.'
  },
  {
    id: 'q_ch12_07', chapterId: 'ch12', type: 'boolean', difficulty: 'medium',
    questionZh: '出口欧洲时，必须使用欧洲规格托盘（80×120mm）。',
    questionEn: 'Shipments to Europe must use European standard pallets (80×120mm).',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。出口欧洲必须使用欧洲规格托盘（80×120cm）；中国标准托盘尺寸不同，使用错误会影响清关和上架。',
    explanationEn: 'True. Europe requires 80×120cm standard pallets. Chinese standard pallets are different sizes and can cause customs/warehouse issues.'
  },
  {
    id: 'q_ch12_08', chapterId: 'ch12', type: 'single', difficulty: 'hard',
    questionZh: '在没有任何客户信息的情况下客户要求设计，对于贸易公司客户，正确做法是？',
    questionEn: 'A trading company client asks for design with no info provided. What is the correct approach?',
    optionsZh: ['免费提供所有设计', '做1款免费，多的收费，下单后可返还设计费', '直接拒绝设计服务', '先要求客户提供所有信息才开始'],
    optionsEn: ['Provide all designs for free', 'First design free, charge for extras — refundable after order', 'Refuse design service directly', 'Require all info before starting'],
    answer: 1,
    explanationZh: '贸易公司：1款免费设计，多的收费；同时要深挖其客户信息，了解市场，下单后可返还设计费。',
    explanationEn: 'For trading companies: 1 free design, charge for extras (refundable after order); probe deeper to understand their end client and market.'
  },
  {
    id: 'q_ch12_09', chapterId: 'ch12', type: 'single', difficulty: 'medium',
    questionZh: '客户谈妥1万数量后，实际只有几千，最好的跟进策略是？',
    questionEn: 'Client agreed to 10K but can only do a few thousand. Best follow-up strategy?',
    optionsZh: ['直接要求客户达到MOQ', '转换话题：提议打手板给客户确认，或对比1万vs5千的报价', '降低MOQ接受订单', '停止跟进此客户'],
    optionsEn: ['Demand client meets MOQ', 'Pivot: propose a physical mockup to refocus, or show 10K vs 5K price comparison', 'Accept lower MOQ', 'Stop following up'],
    answer: 1,
    explanationZh: '数量僵持时不要针锋相对：①提议打手板转移注意力 ②提供1万 vs 5千报价对比，让客户自己选择。',
    explanationEn: 'Don\'t confront directly: ① Offer a physical mockup to shift focus ② Show 10K vs 5K price comparison to let client decide.'
  },
  {
    id: 'q_ch12_10', chapterId: 'ch12', type: 'single', difficulty: 'hard',
    questionZh: '货量约8个托盘但不足一个20尺柜时，推荐的运输方式是？',
    questionEn: 'Cargo is about 8 pallets but doesn\'t fill a 20ft container — which shipping method is recommended?',
    optionsZh: ['走散货（LCL），更经济', '建议走整柜（FCL），因为目的港散货清关费用很高', '空运更划算', '根据客户要求决定'],
    optionsEn: ['LCL (less than container load) — more economical', 'Recommend FCL (full container) — destination port LCL clearance fees are high', 'Air freight is more cost-effective', 'Decide based on client preference'],
    answer: 1,
    explanationZh: '约8个托盘建议走整柜：目的港散货（LCL）清关费用极高，整柜虽略贵但综合更划算。',
    explanationEn: 'For ~8 pallets, recommend FCL: LCL destination clearance fees are very high, making FCL more cost-effective overall despite slightly higher freight.'
  }

];