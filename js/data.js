
const CHAPTERS = [

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
    <img src="images/img_002.jpg" class="kc-img" style="width:100%;max-height:320px;object-fit:contain;border-radius:8px;margin-top:12px;cursor:zoom-in;display:block;" alt="A结构实物图（肩套+铝牌）" title="点击放大">
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
    <img src="images/img_001.jpg" class="kc-img" style="width:100%;max-height:320px;object-fit:contain;border-radius:8px;margin-top:12px;cursor:zoom-in;display:block;" alt="B结构实物图（中套）" title="点击放大">
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
    <img src="images/img_002.jpg" class="kc-img" style="width:100%;max-height:320px;object-fit:contain;border-radius:8px;margin-top:12px;cursor:zoom-in;display:block;" alt="Structure A (Shoulder + Name Plate)" title="Click to zoom">
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
    <img src="images/img_001.jpg" class="kc-img" style="width:100%;max-height:320px;object-fit:contain;border-radius:8px;margin-top:12px;cursor:zoom-in;display:block;" alt="Structure B (Collar)" title="Click to zoom">
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

const QUESTIONS = [
  {
    id: 'q_ch01_001',
    chapterId: 'ch01',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `菲利包装专注于（___）及化妆品包装的 ODM/OEM 制造，拥有自有（___）和自有（___）。`,
    questionEn: `菲利包装专注于（___）及化妆品包装的 ODM/OEM 制造，拥有自有（___）和自有（___）。`,
    answer: `高端香水 / 工厂 / 设计团队`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch01_002',
    chapterId: 'ch01',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `菲利包装提供哪些产品的一站式服务？`,
    questionEn: `菲利包装提供哪些产品的一站式服务？`,
    options: [
      { key: 'A', textZh: `香水液体+瓶子`, textEn: `香水液体+瓶子` },
      { key: 'B', textZh: `玻璃瓶+瓶盖+喷头+盒子`, textEn: `玻璃瓶+瓶盖+喷头+盒子` },
      { key: 'C', textZh: `仅玻璃瓶和瓶盖`, textEn: `仅玻璃瓶和瓶盖` },
      { key: 'D', textZh: `仅喷头和盒子`, textEn: `仅喷头和盒子` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch01_003',
    chapterId: 'ch01',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `菲利包装生产基地位于中国（___）省（___）市（___）镇。`,
    questionEn: `菲利包装生产基地位于中国（___）省（___）市（___）镇。`,
    answer: `广东省 / 东莞市 / 虎门镇`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch01_004',
    chapterId: 'ch01',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `菲利包装生产基地在哪里？`,
    questionEn: `菲利包装生产基地在哪里？`,
    options: [
      { key: 'A', textZh: `广州市番禺区`, textEn: `广州市番禺区` },
      { key: 'B', textZh: `深圳市宝安区`, textEn: `深圳市宝安区` },
      { key: 'C', textZh: `东莞市虎门镇`, textEn: `东莞市虎门镇` },
      { key: 'D', textZh: `上海市松江区`, textEn: `上海市松江区` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch01_005',
    chapterId: 'ch01',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `菲利包装的价格定位是（___），核心优势在于（___）而非低价竞争。`,
    questionEn: `菲利包装的价格定位是（___），核心优势在于（___）而非低价竞争。`,
    answer: `中高端 / 设计与工艺价值`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch01_006',
    chapterId: 'ch01',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `以下哪类客户被菲利包装列为最高优先级（★★★）？`,
    questionEn: `以下哪类客户被菲利包装列为最高优先级（★★★）？`,
    options: [
      { key: 'A', textZh: `仅询价的散客`, textEn: `仅询价的散客` },
      { key: 'B', textZh: `灌装工厂`, textEn: `灌装工厂` },
      { key: 'C', textZh: `自有香水品牌（欧美/中东）`, textEn: `自有香水品牌（欧美/中东）` },
      { key: 'D', textZh: `区域代理商`, textEn: `区域代理商` },
    ],
    answer: `C`,
    explanationZh: `自有品牌客户有清晰定位与新品计划，是最优质合作对象。`,
    explanationEn: `自有品牌客户有清晰定位与新品计划，是最优质合作对象。`,
  },
  {
    id: 'q_ch01_007',
    chapterId: 'ch01',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `菲利包装四大目标市场：（___）、（___）、（___）、（___）。`,
    questionEn: `菲利包装四大目标市场：（___）、（___）、（___）、（___）。`,
    answer: `欧洲 / 美国 / 中东 / 亚洲`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch01_008',
    chapterId: 'ch01',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下哪个不是菲利包装主要目标市场？`,
    questionEn: `以下哪个不是菲利包装主要目标市场？`,
    options: [
      { key: 'A', textZh: `欧洲`, textEn: `欧洲` },
      { key: 'B', textZh: `南美洲`, textEn: `南美洲` },
      { key: 'C', textZh: `中东`, textEn: `中东` },
      { key: 'D', textZh: `亚洲`, textEn: `亚洲` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch02_009',
    chapterId: 'ch02',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `定制项目流程共（___）步，第一步是（___），第六步是（___）。`,
    questionEn: `定制项目流程共（___）步，第一步是（___），第六步是（___）。`,
    answer: `6步 / 设计构思（Design Concept）/ 大货生产（Mass Production）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch02_010',
    chapterId: 'ch02',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `以下六步流程排序正确的是？`,
    questionEn: `以下六步流程排序正确的是？`,
    options: [
      { key: 'A', textZh: `设计构思→3D打样→原型渲染→报价→模具→大货`, textEn: `设计构思→3D打样→原型渲染→报价→模具→大货` },
      { key: 'B', textZh: `设计构思→原型渲染→3D打样→报价确认→模具与样品→大货生产`, textEn: `设计构思→原型渲染→3D打样→报价确认→模具与样品→大货生产` },
      { key: 'C', textZh: `报价→设计→打样→模具→生产→交货`, textEn: `报价→设计→打样→模具→生产→交货` },
      { key: 'D', textZh: `原型渲染→设计构思→报价→3D打样→生产→验货`, textEn: `原型渲染→设计构思→报价→3D打样→生产→验货` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch02_011',
    chapterId: 'ch02',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `大货生产必须在（___）完成并获得（___）后才能启动。`,
    questionEn: `大货生产必须在（___）完成并获得（___）后才能启动。`,
    answer: `模具与样品确认 / 客户书面签字`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch02_012',
    chapterId: 'ch02',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `大货生产前最关键的步骤是？`,
    questionEn: `大货生产前最关键的步骤是？`,
    options: [
      { key: 'A', textZh: `完成报价确认`, textEn: `完成报价确认` },
      { key: 'B', textZh: `完成3D打样`, textEn: `完成3D打样` },
      { key: 'C', textZh: `模具与样品确认并获客户书面签字`, textEn: `模具与样品确认并获客户书面签字` },
      { key: 'D', textZh: `原型渲染完成`, textEn: `原型渲染完成` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch02_013',
    chapterId: 'ch02',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `公模现货（标准款）MOQ = （___）pcs；私模定制（开模款）MOQ = （___）pcs。`,
    questionEn: `公模现货（标准款）MOQ = （___）pcs；私模定制（开模款）MOQ = （___）pcs。`,
    answer: `10,000 pcs / 20,000–30,000 pcs`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch02_014',
    chapterId: 'ch02',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `私模定制最主要的特点是？`,
    questionEn: `私模定制最主要的特点是？`,
    options: [
      { key: 'A', textZh: `比公模更便宜`, textEn: `比公模更便宜` },
      { key: 'B', textZh: `与其他品牌共用瓶型`, textEn: `与其他品牌共用瓶型` },
      { key: 'C', textZh: `需支付开模费且MOQ更高，瓶型完全专属客户`, textEn: `需支付开模费且MOQ更高，瓶型完全专属客户` },
      { key: 'D', textZh: `交期比公模短`, textEn: `交期比公模短` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch02_015',
    chapterId: 'ch02',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `公模的瓶型是（___）的；私模的瓶型是（___）的。`,
    questionEn: `公模的瓶型是（___）的；私模的瓶型是（___）的。`,
    answer: `与其他品牌共用标准款 / 客户品牌专属`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_016',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `香水瓶最常见的 FEA 颈口规格是（___）mm。`,
    questionEn: `香水瓶最常见的 FEA 颈口规格是（___）mm。`,
    answer: `15 mm`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_017',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `FEA 颈口规格最常用的是？`,
    questionEn: `FEA 颈口规格最常用的是？`,
    options: [
      { key: 'A', textZh: `FEA 13mm`, textEn: `FEA 13mm` },
      { key: 'B', textZh: `FEA 15mm`, textEn: `FEA 15mm` },
      { key: 'C', textZh: `FEA 18mm`, textEn: `FEA 18mm` },
      { key: 'D', textZh: `FEA 20mm`, textEn: `FEA 20mm` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_018',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"高白料玻璃" 的英文是（___）。`,
    questionEn: `"高白料玻璃" 的英文是（___）。`,
    answer: `White Opal Glass`,
    explanationZh: `透明度高，折射效果好`,
    explanationEn: `透明度高，折射效果好`,
  },
  {
    id: 'q_ch03_019',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"普通毛瓶" 的英文是（___）。`,
    questionEn: `"普通毛瓶" 的英文是（___）。`,
    answer: `Flint Glass / Plain Bottles`,
    explanationZh: `通用玻璃，成本较低`,
    explanationEn: `通用玻璃，成本较低`,
  },
  {
    id: 'q_ch03_020',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"溢流容量"的英文缩写是（___），全称是（___）。`,
    questionEn: `"溢流容量"的英文缩写是（___），全称是（___）。`,
    answer: `OFC / Over Flow Capacity`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_021',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `"OFC"代表什么？`,
    questionEn: `"OFC"代表什么？`,
    options: [
      { key: 'A', textZh: `Official Fill Capacity`, textEn: `Official Fill Capacity` },
      { key: 'B', textZh: `Over Flow Capacity`, textEn: `Over Flow Capacity` },
      { key: 'C', textZh: `Output Final Check`, textEn: `Output Final Check` },
      { key: 'D', textZh: `Original Fill Code`, textEn: `Original Fill Code` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_022',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `封口方式分为（___）和（___）两种，两者（___）互换。`,
    questionEn: `封口方式分为（___）和（___）两种，两者（___）互换。`,
    answer: `卡口（Crimp）/ 螺口（Screw）/ 不可`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_023',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `卡口（Crimp）和螺口（Screw）的关键区别是？`,
    questionEn: `卡口（Crimp）和螺口（Screw）的关键区别是？`,
    options: [
      { key: 'A', textZh: `只是尺寸不同`, textEn: `只是尺寸不同` },
      { key: 'B', textZh: `可以互换使用`, textEn: `可以互换使用` },
      { key: 'C', textZh: `结构完全不同，不可互换，必须下单前确认`, textEn: `结构完全不同，不可互换，必须下单前确认` },
      { key: 'D', textZh: `螺口比卡口便宜`, textEn: `螺口比卡口便宜` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_024',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `A 结构香水瓶的典型配件是（___）和（___），常见于（___）风格。`,
    questionEn: `A 结构香水瓶的典型配件是（___）和（___），常见于（___）风格。`,
    answer: `肩套（Shoulder）/ 铝牌（Name Plate）/ 中东高端`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_025',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `B 结构香水瓶的典型配件是（___），常见于（___）风格。`,
    questionEn: `B 结构香水瓶的典型配件是（___），常见于（___）风格。`,
    answer: `中套（Collar）/ 欧美现代`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_026',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下哪种配件组合属于 A 结构？`,
    questionEn: `以下哪种配件组合属于 A 结构？`,
    options: [
      { key: 'A', textZh: `中套（Collar）+喷头`, textEn: `中套（Collar）+喷头` },
      { key: 'B', textZh: `肩套（Shoulder）+铝牌（Name Plate）`, textEn: `肩套（Shoulder）+铝牌（Name Plate）` },
      { key: 'C', textZh: `天地盒+磁吸盖`, textEn: `天地盒+磁吸盖` },
      { key: 'D', textZh: `植绒内托+木盒`, textEn: `植绒内托+木盒` },
    ],
    answer: `B`,
    explanationZh: `A结构=肩套+铝牌（中东）；B结构=中套（欧美）。`,
    explanationEn: `A结构=肩套+铝牌（中东）；B结构=中套（欧美）。`,
  },
  {
    id: 'q_ch03_027',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `B 结构香水瓶的核心装饰配件是？`,
    questionEn: `B 结构香水瓶的核心装饰配件是？`,
    options: [
      { key: 'A', textZh: `肩套（Shoulder）`, textEn: `肩套（Shoulder）` },
      { key: 'B', textZh: `铝牌（Name Plate）`, textEn: `铝牌（Name Plate）` },
      { key: 'C', textZh: `中套（Collar）`, textEn: `中套（Collar）` },
      { key: 'D', textZh: `木盖`, textEn: `木盖` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_028',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `A结构和B结构的结构不同会直接影响（___）和（___）。`,
    questionEn: `A结构和B结构的结构不同会直接影响（___）和（___）。`,
    answer: `配件选型 / 产品报价`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_029',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中香水瓶瓶肩位置有一圈套件（肩套），瓶身另有金属铭牌，这是（___）结构香水瓶。`,
    questionEn: `图中香水瓶瓶肩位置有一圈套件（肩套），瓶身另有金属铭牌，这是（___）结构香水瓶。`,
    answer: `A 结构（Shoulder + Name Plate 中东高端风格）`,
    explanationZh: `A结构特征：肩套（Shoulder）覆盖瓶肩 + 铝牌（Name Plate）展示品牌，多见于中东高端香水。`,
    explanationEn: `A结构特征：肩套（Shoulder）覆盖瓶肩 + 铝牌（Name Plate）展示品牌，多见于中东高端香水。`,
  },
  {
    id: 'q_ch03_030',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `图中香水瓶瓶口喷头处套有一圈装饰圈，无铭牌，这是（___）结构香水瓶，核心配件叫（___）。`,
    questionEn: `图中香水瓶瓶口喷头处套有一圈装饰圈，无铭牌，这是（___）结构香水瓶，核心配件叫（___）。`,
    answer: `B 结构 / 中套（Collar / Ring）`,
    explanationZh: `B结构特征：中套（Collar）套在喷头底部，欧美现代简约风格常见。`,
    explanationEn: `B结构特征：中套（Collar）套在喷头底部，欧美现代简约风格常见。`,
  },
  {
    id: 'q_ch03_031',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中左图和右图分别展示两款香水瓶结构，请判断：左图属于哪种结构？`,
    questionEn: `图中左图和右图分别展示两款香水瓶结构，请判断：左图属于哪种结构？`,
    options: [
      { key: 'A', textZh: `A 结构（肩套+铝牌）`, textEn: `A 结构（肩套+铝牌）` },
      { key: 'B', textZh: `B 结构（中套）`, textEn: `B 结构（中套）` },
      { key: 'C', textZh: `两者相同，都是 A 结构`, textEn: `两者相同，都是 A 结构` },
      { key: 'D', textZh: `两者相同，都是 B 结构`, textEn: `两者相同，都是 B 结构` },
    ],
    answer: `B`,
    explanationZh: `左图(img_001)为B结构：瓶口有中套（Collar），无铭牌；右图(img_002)为A结构：有肩套和铭牌。`,
    explanationEn: `左图(img_001)为B结构：瓶口有中套（Collar），无铭牌；右图(img_002)为A结构：有肩套和铭牌。`,
  },
  {
    id: 'q_ch03_032',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"喷涂" 的英文是（___）。`,
    questionEn: `"喷涂" 的英文是（___）。`,
    answer: `Color Coating / Painting`,
    explanationZh: `可做实色/透明/渐变`,
    explanationEn: `可做实色/透明/渐变`,
  },
  {
    id: 'q_ch03_033',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"UV 电镀" 的英文是（___）。`,
    questionEn: `"UV 电镀" 的英文是（___）。`,
    answer: `Metalizing / UV Plating`,
    explanationZh: `金属质感，金/银/玫瑰金等`,
    explanationEn: `金属质感，金/银/玫瑰金等`,
  },
  {
    id: 'q_ch03_034',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"蒙沙 / 喷沙" 的英文是（___）。`,
    questionEn: `"蒙沙 / 喷沙" 的英文是（___）。`,
    answer: `Frosting / Sand-blasting`,
    explanationZh: `磨砂质感，低调奢华`,
    explanationEn: `磨砂质感，低调奢华`,
  },
  {
    id: 'q_ch03_035',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"植绒" 的英文是（___）。`,
    questionEn: `"植绒" 的英文是（___）。`,
    answer: `Flocking / Velvet`,
    explanationZh: `天鹅绒触感`,
    explanationEn: `天鹅绒触感`,
  },
  {
    id: 'q_ch03_036',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"裂纹" 的英文是（___）。`,
    questionEn: `"裂纹" 的英文是（___）。`,
    answer: `Cracking`,
    explanationZh: `特殊纹理效果`,
    explanationEn: `特殊纹理效果`,
  },
  {
    id: 'q_ch03_037',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"烫金" 的英文是（___）。`,
    questionEn: `"烫金" 的英文是（___）。`,
    answer: `Hot Stamping`,
    explanationZh: `常用于品牌 LOGO`,
    explanationEn: `常用于品牌 LOGO`,
  },
  {
    id: 'q_ch03_038',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"丝印" 的英文是（___）。`,
    questionEn: `"丝印" 的英文是（___）。`,
    answer: `Silk Screen / Silk-screen Printing`,
    explanationZh: `网版印刷`,
    explanationEn: `网版印刷`,
  },
  {
    id: 'q_ch03_039',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"橡胶漆" 的英文是（___）。`,
    questionEn: `"橡胶漆" 的英文是（___）。`,
    answer: `Rubber Coating / Soft Touch`,
    explanationZh: `哑面柔软防滑`,
    explanationEn: `哑面柔软防滑`,
  },
  {
    id: 'q_ch03_040',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"镭射" 的英文是（___）。`,
    questionEn: `"镭射" 的英文是（___）。`,
    answer: `Laser Engraving / Holographic`,
    explanationZh: `激光镭射效果，有深度感`,
    explanationEn: `激光镭射效果，有深度感`,
  },
  {
    id: 'q_ch03_041',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"转印" 的英文是（___）。`,
    questionEn: `"转印" 的英文是（___）。`,
    answer: `Transfer / Decal`,
    explanationZh: `图案转印到瓶身`,
    explanationEn: `图案转印到瓶身`,
  },
  {
    id: 'q_ch03_042',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"UV 打印" 的英文是（___）。`,
    questionEn: `"UV 打印" 的英文是（___）。`,
    answer: `UV Printing`,
    explanationZh: `打印机直接打印，表面有颗粒感`,
    explanationEn: `打印机直接打印，表面有颗粒感`,
  },
  {
    id: 'q_ch03_043',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"UV 电镀（UV Plating）"产生的视觉效果是（___）。`,
    questionEn: `"UV 电镀（UV Plating）"产生的视觉效果是（___）。`,
    answer: `金属光泽（金/银/玫瑰金等）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_044',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下哪种工艺产生金属光泽效果？`,
    questionEn: `以下哪种工艺产生金属光泽效果？`,
    options: [
      { key: 'A', textZh: `植绒（Flocking）`, textEn: `植绒（Flocking）` },
      { key: 'B', textZh: `蒙沙（Frosting）`, textEn: `蒙沙（Frosting）` },
      { key: 'C', textZh: `UV 电镀（UV Plating）`, textEn: `UV 电镀（UV Plating）` },
      { key: 'D', textZh: `橡胶漆（Rubber Coating）`, textEn: `橡胶漆（Rubber Coating）` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_045',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"植绒（Flocking）"的触感特征是（___）。`,
    questionEn: `"植绒（Flocking）"的触感特征是（___）。`,
    answer: `天鹅绒般柔软，高档礼品感`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_046',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `"Frosting（蒙沙）"的视觉质感是？`,
    questionEn: `"Frosting（蒙沙）"的视觉质感是？`,
    options: [
      { key: 'A', textZh: `金属光泽`, textEn: `金属光泽` },
      { key: 'B', textZh: `彩色渐变`, textEn: `彩色渐变` },
      { key: 'C', textZh: `磨砂哑光，低调奢华`, textEn: `磨砂哑光，低调奢华` },
      { key: 'D', textZh: `镜面反射`, textEn: `镜面反射` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_047',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"橡胶漆（Rubber Coating）"的手感和外观特点是（___）。`,
    questionEn: `"橡胶漆（Rubber Coating）"的手感和外观特点是（___）。`,
    answer: `哑光柔软，防滑，阻尼感强`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_048',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `哪种工艺最适合"永不褪色"的 Logo 刻制？`,
    questionEn: `哪种工艺最适合"永不褪色"的 Logo 刻制？`,
    options: [
      { key: 'A', textZh: `丝印（Silk Screen）`, textEn: `丝印（Silk Screen）` },
      { key: 'B', textZh: `热转印（Transfer）`, textEn: `热转印（Transfer）` },
      { key: 'C', textZh: `激光雕刻（Laser Engraving）`, textEn: `激光雕刻（Laser Engraving）` },
      { key: 'D', textZh: `橡胶漆`, textEn: `橡胶漆` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_049',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中香水瓶瓶身呈均匀透明蓝色，可透过玻璃看到内部，这属于（___）工艺。`,
    questionEn: `图中香水瓶瓶身呈均匀透明蓝色，可透过玻璃看到内部，这属于（___）工艺。`,
    answer: `透喷（Transparent Color Coating）`,
    explanationZh: `透喷工艺保留玻璃透明感，瓶身颜色均匀透明；与实喷（不透明）和渐变喷涂（透→有色过渡）不同。`,
    explanationEn: `透喷工艺保留玻璃透明感，瓶身颜色均匀透明；与实喷（不透明）和渐变喷涂（透→有色过渡）不同。`,
  },
  {
    id: 'q_ch03_050',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `图中香水瓶瓶身颜色均匀饱满，完全不透明，这属于（___）工艺。`,
    questionEn: `图中香水瓶瓶身颜色均匀饱满，完全不透明，这属于（___）工艺。`,
    answer: `实喷（Solid Color Coating / Painting）`,
    explanationZh: `实喷使瓶身颜色完全不透明；透喷保留透明感；渐变喷涂则是从透明到有色自然过渡。`,
    explanationEn: `实喷使瓶身颜色完全不透明；透喷保留透明感；渐变喷涂则是从透明到有色自然过渡。`,
  },
  {
    id: 'q_ch03_051',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `图中香水瓶瓶身呈现高度反光的金属镜面质感，此工艺最可能是？`,
    questionEn: `图中香水瓶瓶身呈现高度反光的金属镜面质感，此工艺最可能是？`,
    options: [
      { key: 'A', textZh: `蒙沙（Frosting）`, textEn: `蒙沙（Frosting）` },
      { key: 'B', textZh: `植绒（Flocking）`, textEn: `植绒（Flocking）` },
      { key: 'C', textZh: `UV 电镀（UV Plating）`, textEn: `UV 电镀（UV Plating）` },
      { key: 'D', textZh: `橡胶漆（Rubber Coating）`, textEn: `橡胶漆（Rubber Coating）` },
    ],
    answer: `C`,
    explanationZh: `UV电镀（UV Plating / Metalizing）产生金属镜面光泽，常用金/银/玫瑰金等颜色提升档次感。`,
    explanationEn: `UV电镀（UV Plating / Metalizing）产生金属镜面光泽，常用金/银/玫瑰金等颜色提升档次感。`,
  },
  {
    id: 'q_ch03_052',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中香水瓶瓶身表面均匀细腻，呈磨砂哑光质感，低调奢华，此为哪种工艺？`,
    questionEn: `图中香水瓶瓶身表面均匀细腻，呈磨砂哑光质感，低调奢华，此为哪种工艺？`,
    options: [
      { key: 'A', textZh: `喷涂（Color Coating）`, textEn: `喷涂（Color Coating）` },
      { key: 'B', textZh: `UV 电镀（UV Plating）`, textEn: `UV 电镀（UV Plating）` },
      { key: 'C', textZh: `蒙沙（Frosting / Sand-blasting）`, textEn: `蒙沙（Frosting / Sand-blasting）` },
      { key: 'D', textZh: `植绒（Flocking）`, textEn: `植绒（Flocking）` },
    ],
    answer: `C`,
    explanationZh: `蒙沙/喷沙工艺使玻璃表面产生磨砂效果，触感细腻，视觉低调奢华，欧美市场十分流行。`,
    explanationEn: `蒙沙/喷沙工艺使玻璃表面产生磨砂效果，触感细腻，视觉低调奢华，欧美市场十分流行。`,
  },
  {
    id: 'q_ch03_053',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中香水瓶表面触感类似天鹅绒，柔软温润，这是（___）工艺。`,
    questionEn: `图中香水瓶表面触感类似天鹅绒，柔软温润，这是（___）工艺。`,
    answer: `植绒（Flocking / Velvet）`,
    explanationZh: `植绒工艺将绒毛纤维喷附到涂有胶水的表面，产生天鹅绒触感，高档礼品感强。`,
    explanationEn: `植绒工艺将绒毛纤维喷附到涂有胶水的表面，产生天鹅绒触感，高档礼品感强。`,
  },
  {
    id: 'q_ch03_054',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `图中香水瓶瓶身布满细密龟裂状纹路，这是哪种装饰工艺？`,
    questionEn: `图中香水瓶瓶身布满细密龟裂状纹路，这是哪种装饰工艺？`,
    options: [
      { key: 'A', textZh: `蚀刻（Etching）`, textEn: `蚀刻（Etching）` },
      { key: 'B', textZh: `镭射（Laser Engraving）`, textEn: `镭射（Laser Engraving）` },
      { key: 'C', textZh: `裂纹（Cracking）`, textEn: `裂纹（Cracking）` },
      { key: 'D', textZh: `橡胶漆（Rubber Coating）`, textEn: `橡胶漆（Rubber Coating）` },
    ],
    answer: `C`,
    explanationZh: `裂纹工艺通过特殊漆料在干燥过程中产生龟裂纹路，视觉效果独特，艺术感强。`,
    explanationEn: `裂纹工艺通过特殊漆料在干燥过程中产生龟裂纹路，视觉效果独特，艺术感强。`,
  },
  {
    id: 'q_ch03_055',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `图中香水瓶瓶身的品牌 LOGO 呈金色金属箔片效果，这属于（___）工艺。`,
    questionEn: `图中香水瓶瓶身的品牌 LOGO 呈金色金属箔片效果，这属于（___）工艺。`,
    answer: `烫金（Hot Stamping / Foil Stamping）`,
    explanationZh: `烫金通过热压将金属箔转移到瓶身，LOGO 呈现金属光泽，常用于品牌名称、LOGO 装饰。`,
    explanationEn: `烫金通过热压将金属箔转移到瓶身，LOGO 呈现金属光泽，常用于品牌名称、LOGO 装饰。`,
  },
  {
    id: 'q_ch03_056',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中香水瓶瓶身图案/Logo 通过网版油墨印刷，层次清晰，此为哪种工艺？`,
    questionEn: `图中香水瓶瓶身图案/Logo 通过网版油墨印刷，层次清晰，此为哪种工艺？`,
    options: [
      { key: 'A', textZh: `烫金（Hot Stamping）`, textEn: `烫金（Hot Stamping）` },
      { key: 'B', textZh: `UV打印（UV Printing）`, textEn: `UV打印（UV Printing）` },
      { key: 'C', textZh: `丝印（Silk Screen）`, textEn: `丝印（Silk Screen）` },
      { key: 'D', textZh: `转印（Transfer）`, textEn: `转印（Transfer）` },
    ],
    answer: `C`,
    explanationZh: `丝印（Silk Screen）使用网版将油墨印刷到瓶身，可印刷各色油墨，适合较复杂图案。`,
    explanationEn: `丝印（Silk Screen）使用网版将油墨印刷到瓶身，可印刷各色油墨，适合较复杂图案。`,
  },
  {
    id: 'q_ch03_057',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `图中香水瓶外表面为哑光质感，手感柔软如橡胶，防滑，这是（___）工艺。`,
    questionEn: `图中香水瓶外表面为哑光质感，手感柔软如橡胶，防滑，这是（___）工艺。`,
    answer: `橡胶漆（Rubber Coating / Soft Touch）`,
    explanationZh: `橡胶漆又称软触感漆，哑光柔软，阻尼感强，深受注重手感的客户欢迎。`,
    explanationEn: `橡胶漆又称软触感漆，哑光柔软，阻尼感强，深受注重手感的客户欢迎。`,
  },
  {
    id: 'q_ch03_058',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中香水瓶表面有类似镭射全息效果，在不同角度呈现不同光泽，此为哪种工艺？`,
    questionEn: `图中香水瓶表面有类似镭射全息效果，在不同角度呈现不同光泽，此为哪种工艺？`,
    options: [
      { key: 'A', textZh: `丝印（Silk Screen）`, textEn: `丝印（Silk Screen）` },
      { key: 'B', textZh: `镭射（Laser / Holographic）`, textEn: `镭射（Laser / Holographic）` },
      { key: 'C', textZh: `烫金（Hot Stamping）`, textEn: `烫金（Hot Stamping）` },
      { key: 'D', textZh: `转印（Transfer）`, textEn: `转印（Transfer）` },
    ],
    answer: `B`,
    explanationZh: `镭射/全息工艺使表面产生多彩折射效果，视觉冲击力强，适合特殊系列香水。`,
    explanationEn: `镭射/全息工艺使表面产生多彩折射效果，视觉冲击力强，适合特殊系列香水。`,
  },
  {
    id: 'q_ch03_059',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中香水瓶瓶身印有精美花纹图案，该图案是预先印刷好后整体转移到瓶身上的，这是（___）工艺。`,
    questionEn: `图中香水瓶瓶身印有精美花纹图案，该图案是预先印刷好后整体转移到瓶身上的，这是（___）工艺。`,
    answer: `转印（Transfer / Decal）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch03_060',
    chapterId: 'ch03',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `图中香水瓶表面可见由打印机直接打印的图案，表面有轻微颗粒感，这是（___）工艺。`,
    questionEn: `图中香水瓶表面可见由打印机直接打印的图案，表面有轻微颗粒感，这是（___）工艺。`,
    answer: `UV 打印（UV Printing / Digital Printing）`,
    explanationZh: `UV打印使用紫外线固化油墨直接打印在瓶身，颜色丰富，但表面有颗粒感，批量成本较高。`,
    explanationEn: `UV打印使用紫外线固化油墨直接打印在瓶身，颜色丰富，但表面有颗粒感，批量成本较高。`,
  },
  {
    id: 'q_ch03_061',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `请看两张图：左图瓶身磨砂哑光，右图瓶身金属镜面光泽，请分别选出正确的工艺：`,
    questionEn: `请看两张图：左图瓶身磨砂哑光，右图瓶身金属镜面光泽，请分别选出正确的工艺：`,
    options: [
      { key: 'A', textZh: `左图=植绒，右图=喷涂`, textEn: `左图=植绒，右图=喷涂` },
      { key: 'B', textZh: `左图=蒙沙（Frosting），右图=UV电镀（UV Plating）`, textEn: `左图=蒙沙（Frosting），右图=UV电镀（UV Plating）` },
      { key: 'C', textZh: `左图=橡胶漆，右图=蒙沙`, textEn: `左图=橡胶漆，右图=蒙沙` },
      { key: 'D', textZh: `两张都是蒙沙工艺`, textEn: `两张都是蒙沙工艺` },
    ],
    answer: `B`,
    explanationZh: `磨砂哑光=蒙沙（Frosting）；金属镜面=UV电镀（UV Plating / Metalizing）。`,
    explanationEn: `磨砂哑光=蒙沙（Frosting）；金属镜面=UV电镀（UV Plating / Metalizing）。`,
  },
  {
    id: 'q_ch03_062',
    chapterId: 'ch03',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `请看两张图：左图天鹅绒触感，右图哑光柔软防滑，请分别识别正确工艺：`,
    questionEn: `请看两张图：左图天鹅绒触感，右图哑光柔软防滑，请分别识别正确工艺：`,
    options: [
      { key: 'A', textZh: `左图=蒙沙，右图=植绒`, textEn: `左图=蒙沙，右图=植绒` },
      { key: 'B', textZh: `左图=植绒（Flocking），右图=橡胶漆（Rubber Coating）`, textEn: `左图=植绒（Flocking），右图=橡胶漆（Rubber Coating）` },
      { key: 'C', textZh: `左图=橡胶漆，右图=蒙沙`, textEn: `左图=橡胶漆，右图=蒙沙` },
      { key: 'D', textZh: `两张都是植绒工艺`, textEn: `两张都是植绒工艺` },
    ],
    answer: `B`,
    explanationZh: `植绒（Flocking）触感如天鹅绒；橡胶漆（Rubber Coating）哑光防滑阻尼感。`,
    explanationEn: `植绒（Flocking）触感如天鹅绒；橡胶漆（Rubber Coating）哑光防滑阻尼感。`,
  },
  {
    id: 'q_ch04_063',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"锌铝合金盖（商品名）" 的英文是（___）。`,
    questionEn: `"锌铝合金盖（商品名）" 的英文是（___）。`,
    answer: `Zamak Cap / Zinc Alloy Cap`,
    explanationZh: `重量感强，中东高端市场首选`,
    explanationEn: `重量感强，中东高端市场首选`,
  },
  {
    id: 'q_ch04_064',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"沙林盖（杜邦离子型树脂）" 的英文是（___）。`,
    questionEn: `"沙林盖（杜邦离子型树脂）" 的英文是（___）。`,
    answer: `Surlyn Cap`,
    explanationZh: `高透明，欧美市场常用`,
    explanationEn: `高透明，欧美市场常用`,
  },
  {
    id: 'q_ch04_065',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"聚丙烯盖" 的英文是（___）。`,
    questionEn: `"聚丙烯盖" 的英文是（___）。`,
    answer: `PP Cap (Polypropylene)`,
    explanationZh: `轻量低成本`,
    explanationEn: `轻量低成本`,
  },
  {
    id: 'q_ch04_066',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"木盖" 的英文是（___）。`,
    questionEn: `"木盖" 的英文是（___）。`,
    answer: `Wooden Cap`,
    explanationZh: `自然质感，环保定位`,
    explanationEn: `自然质感，环保定位`,
  },
  {
    id: 'q_ch04_067',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"磁吸盖" 的英文是（___）。`,
    questionEn: `"磁吸盖" 的英文是（___）。`,
    answer: `Magnetic Cap`,
    explanationZh: `开合顺滑，高级感强`,
    explanationEn: `开合顺滑，高级感强`,
  },
  {
    id: 'q_ch04_068',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"K料盖" 的英文是（___）。`,
    questionEn: `"K料盖" 的英文是（___）。`,
    answer: `K Resin / Acrylic Cap`,
    explanationZh: `透明感强，常见欧美时尚款`,
    explanationEn: `透明感强，常见欧美时尚款`,
  },
  {
    id: 'q_ch04_069',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"Zamak（锌合金）"盖子的最大优势是（___）。`,
    questionEn: `"Zamak（锌合金）"盖子的最大优势是（___）。`,
    answer: `重量感强，电镀效果出色，代表品质感`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch04_070',
    chapterId: 'ch04',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `"Zamak（锌合金）"盖子最适合哪类市场？`,
    questionEn: `"Zamak（锌合金）"盖子最适合哪类市场？`,
    options: [
      { key: 'A', textZh: `大众低价日化`, textEn: `大众低价日化` },
      { key: 'B', textZh: `儿童香水`, textEn: `儿童香水` },
      { key: 'C', textZh: `中东高端香水市场`, textEn: `中东高端香水市场` },
      { key: 'D', textZh: `运动香水`, textEn: `运动香水` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch04_071',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"Surlyn（沙林）"盖子外观特点是（___）。`,
    questionEn: `"Surlyn（沙林）"盖子外观特点是（___）。`,
    answer: `高透明度，可做渐变色和内嵌装饰，水晶感`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch04_072',
    chapterId: 'ch04',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `"Surlyn（沙林）"盖子最受哪类客户青睐？`,
    questionEn: `"Surlyn（沙林）"盖子最受哪类客户青睐？`,
    options: [
      { key: 'A', textZh: `中东传统市场`, textEn: `中东传统市场` },
      { key: 'B', textZh: `欧美时尚香水品牌`, textEn: `欧美时尚香水品牌` },
      { key: 'C', textZh: `大众超市`, textEn: `大众超市` },
      { key: 'D', textZh: `儿童品牌`, textEn: `儿童品牌` },
    ],
    answer: `B`,
    explanationZh: `Surlyn透明感强，工艺灵活，深受欧美品牌喜爱。`,
    explanationEn: `Surlyn透明感强，工艺灵活，深受欧美品牌喜爱。`,
  },
  {
    id: 'q_ch04_073',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `磁吸盖常规磁力规格为（___）和（___）两种，必须在（___）阶段确认。`,
    questionEn: `磁吸盖常规磁力规格为（___）和（___）两种，必须在（___）阶段确认。`,
    answer: `N42 / N52 / 打样阶段`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch04_074',
    chapterId: 'ch04',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `磁力规格为什么必须在打样阶段确认？`,
    questionEn: `磁力规格为什么必须在打样阶段确认？`,
    options: [
      { key: 'A', textZh: `磁铁不影响产品质量`, textEn: `磁铁不影响产品质量` },
      { key: 'B', textZh: `磁力过强或过弱均影响开合体验，大货后更改成本极高`, textEn: `磁力过强或过弱均影响开合体验，大货后更改成本极高` },
      { key: 'C', textZh: `大货时再选更灵活`, textEn: `大货时再选更灵活` },
      { key: 'D', textZh: `磁力规格不影响成本`, textEn: `磁力规格不影响成本` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch04_075',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `图中展示的香水盖质感厚重，适合电镀，是中东高端香水市场首选材质，它是（___）材料盖。`,
    questionEn: `图中展示的香水盖质感厚重，适合电镀，是中东高端香水市场首选材质，它是（___）材料盖。`,
    answer: `Zamak（锌合金 / Zinc Alloy）盖`,
    explanationZh: `Zamak锌合金密度大、重量感强，可做精细造型和各种电镀工艺，是代表档次感的首选材质；ABS为轻量工程塑料，无法体现厚重感。`,
    explanationEn: `Zamak锌合金密度大、重量感强，可做精细造型和各种电镀工艺，是代表档次感的首选材质；ABS为轻量工程塑料，无法体现厚重感。`,
  },
  {
    id: 'q_ch04_076',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的香水盖具有高透明度，类似水晶折射效果，常用于欧美时尚香水，它最可能是（___）材料。`,
    questionEn: `图中展示的香水盖具有高透明度，类似水晶折射效果，常用于欧美时尚香水，它最可能是（___）材料。`,
    answer: `Surlyn（沙林）或 K 料（K Resin / Acrylic）`,
    explanationZh: `Surlyn和K料均有水晶般透明感，可做渐变色或内嵌装饰，深受欧美品牌青睐。`,
    explanationEn: `Surlyn和K料均有水晶般透明感，可做渐变色或内嵌装饰，深受欧美品牌青睐。`,
  },
  {
    id: 'q_ch04_077',
    chapterId: 'ch04',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的香水盖呈现木质纹理，自然质感，适合定位环保或自然风格的品牌，它是（___）盖。`,
    questionEn: `图中展示的香水盖呈现木质纹理，自然质感，适合定位环保或自然风格的品牌，它是（___）盖。`,
    answer: `Wood（木盖 / Wooden Cap）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch04_078',
    chapterId: 'ch04',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `图中展示的香水盖开合方式特别顺滑，带磁吸闭合，高级感强，它是哪种类型的盖？`,
    questionEn: `图中展示的香水盖开合方式特别顺滑，带磁吸闭合，高级感强，它是哪种类型的盖？`,
    options: [
      { key: 'A', textZh: `ABS 工程塑料盖`, textEn: `ABS 工程塑料盖` },
      { key: 'B', textZh: `Zamak 锌合金盖`, textEn: `Zamak 锌合金盖` },
      { key: 'C', textZh: `Magnetic 磁吸盖`, textEn: `Magnetic 磁吸盖` },
      { key: 'D', textZh: `Surlyn 沙林盖`, textEn: `Surlyn 沙林盖` },
    ],
    answer: `C`,
    explanationZh: `磁吸盖（Magnetic Cap）内置磁铁，开合顺滑静音，高端感强，磁力规格须在打样阶段确认。`,
    explanationEn: `磁吸盖（Magnetic Cap）内置磁铁，开合顺滑静音，高端感强，磁力规格须在打样阶段确认。`,
  },
  {
    id: 'q_ch04_079',
    chapterId: 'ch04',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中香水盖表面呈现特殊的岩石裂纹纹理，粗粝质感，它是哪种类型的盖？`,
    questionEn: `图中香水盖表面呈现特殊的岩石裂纹纹理，粗粝质感，它是哪种类型的盖？`,
    options: [
      { key: 'A', textZh: `木盖（Wood Cap）`, textEn: `木盖（Wood Cap）` },
      { key: 'B', textZh: `Zamak 电镀盖`, textEn: `Zamak 电镀盖` },
      { key: 'C', textZh: `Rock 岩石纹盖`, textEn: `Rock 岩石纹盖` },
      { key: 'D', textZh: `磁吸盖（Magnetic Cap）`, textEn: `磁吸盖（Magnetic Cap）` },
    ],
    answer: `C`,
    explanationZh: `Rock岩石纹盖表面经特殊处理，呈现天然岩石质感，适合硬朗风格的香水品牌。`,
    explanationEn: `Rock岩石纹盖表面经特殊处理，呈现天然岩石质感，适合硬朗风格的香水品牌。`,
  },
  {
    id: 'q_ch04_080',
    chapterId: 'ch04',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `请看两张图，左图盖子厚重有金属感，右图盖子透明有水晶感。请选出正确的材料对应：`,
    questionEn: `请看两张图，左图盖子厚重有金属感，右图盖子透明有水晶感。请选出正确的材料对应：`,
    options: [
      { key: 'A', textZh: `左图=Surlyn，右图=Zamak`, textEn: `左图=Surlyn，右图=Zamak` },
      { key: 'B', textZh: `左图=Zamak（锌合金），右图=Surlyn / K 料`, textEn: `左图=Zamak（锌合金），右图=Surlyn / K 料` },
      { key: 'C', textZh: `左图=PP塑料，右图=木盖`, textEn: `左图=PP塑料，右图=木盖` },
      { key: 'D', textZh: `两款都是 Zamak`, textEn: `两款都是 Zamak` },
    ],
    answer: `B`,
    explanationZh: `Zamak重量感强适合电镀；Surlyn/K料透明如水晶，各有其目标市场。`,
    explanationEn: `Zamak重量感强适合电镀；Surlyn/K料透明如水晶，各有其目标市场。`,
  },
  {
    id: 'q_ch05_081',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"喷头" 的英文是（___）。`,
    questionEn: `"喷头" 的英文是（___）。`,
    answer: `Spray Pump / Sprayer`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_082',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"导管（伸入瓶底的管）" 的英文是（___）。`,
    questionEn: `"导管（伸入瓶底的管）" 的英文是（___）。`,
    answer: `Dip-tube / Intake Tube`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_083',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"弹簧" 的英文是（___）。`,
    questionEn: `"弹簧" 的英文是（___）。`,
    answer: `Upper Spring / Spring`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_084',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"密封圈" 的英文是（___）。`,
    questionEn: `"密封圈" 的英文是（___）。`,
    answer: `Gasket`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_085',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"真空泵" 的英文是（___）。`,
    questionEn: `"真空泵" 的英文是（___）。`,
    answer: `Airless Pump`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_086',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"喷嘴" 的英文是（___）。`,
    questionEn: `"喷嘴" 的英文是（___）。`,
    answer: `Nozzle`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_087',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"活塞" 的英文是（___）。`,
    questionEn: `"活塞" 的英文是（___）。`,
    answer: `Piston`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_088',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"卡口式喷头" 的英文是（___）。`,
    questionEn: `"卡口式喷头" 的英文是（___）。`,
    answer: `Crimp Pump`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_089',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"螺口式喷头" 的英文是（___）。`,
    questionEn: `"螺口式喷头" 的英文是（___）。`,
    answer: `Screw Pump / Screw Type`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_090',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `喷头最标准的颈口尺寸是（___）mm，标准出液量为（___）ml/次。`,
    questionEn: `喷头最标准的颈口尺寸是（___）mm，标准出液量为（___）ml/次。`,
    answer: `15 mm / 0.10–0.12 ml/次`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_091',
    chapterId: 'ch05',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `喷头标准出液量（Dosage）是多少？`,
    questionEn: `喷头标准出液量（Dosage）是多少？`,
    options: [
      { key: 'A', textZh: `0.05 ml/次`, textEn: `0.05 ml/次` },
      { key: 'B', textZh: `0.10–0.12 ml/次`, textEn: `0.10–0.12 ml/次` },
      { key: 'C', textZh: `0.50 ml/次`, textEn: `0.50 ml/次` },
      { key: 'D', textZh: `1.00 ml/次`, textEn: `1.00 ml/次` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_092',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"导管（Dip-tube）"在喷头中的作用是（___）。`,
    questionEn: `"导管（Dip-tube）"在喷头中的作用是（___）。`,
    answer: `伸入瓶底，将香水从瓶底吸至喷头出口`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_093',
    chapterId: 'ch05',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `"真空泵（Airless Pump）"最适合哪类产品？`,
    questionEn: `"真空泵（Airless Pump）"最适合哪类产品？`,
    options: [
      { key: 'A', textZh: `大众日化香水`, textEn: `大众日化香水` },
      { key: 'B', textZh: `高端精华或需长保质期的产品`, textEn: `高端精华或需长保质期的产品` },
      { key: 'C', textZh: `儿童香水`, textEn: `儿童香水` },
      { key: 'D', textZh: `运动喷雾`, textEn: `运动喷雾` },
    ],
    answer: `B`,
    explanationZh: `真空泵通过活塞完全隔绝空气，防止内容物氧化变质。`,
    explanationEn: `真空泵通过活塞完全隔绝空气，防止内容物氧化变质。`,
  },
  {
    id: 'q_ch05_094',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"螺口式（Screw Type）"喷头的优势是（___）。`,
    questionEn: `"螺口式（Screw Type）"喷头的优势是（___）。`,
    answer: `可旋转锁定，防止旅行中误喷，符合航空安规`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_095',
    chapterId: 'ch05',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `哪种喷头适合旅行装？`,
    questionEn: `哪种喷头适合旅行装？`,
    options: [
      { key: 'A', textZh: `卡口式（Crimp Pump）`, textEn: `卡口式（Crimp Pump）` },
      { key: 'B', textZh: `螺口式（Screw Type）`, textEn: `螺口式（Screw Type）` },
      { key: 'C', textZh: `真空泵（Airless Pump）`, textEn: `真空泵（Airless Pump）` },
      { key: 'D', textZh: `普通按压泵`, textEn: `普通按压泵` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_096',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `卡口式（Crimp）和螺口式（Screw）喷头（___）互换，下单前必须确认。`,
    questionEn: `卡口式（Crimp）和螺口式（Screw）喷头（___）互换，下单前必须确认。`,
    answer: `不可`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_097',
    chapterId: 'ch05',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `接到客户喷头订单，以下哪个信息最关键需首先确认？`,
    questionEn: `接到客户喷头订单，以下哪个信息最关键需首先确认？`,
    options: [
      { key: 'A', textZh: `颜色`, textEn: `颜色` },
      { key: 'B', textZh: `是否带导管`, textEn: `是否带导管` },
      { key: 'C', textZh: `卡口（Crimp）还是螺口（Screw）型号`, textEn: `卡口（Crimp）还是螺口（Screw）型号` },
      { key: 'D', textZh: `喷嘴长短`, textEn: `喷嘴长短` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch05_098',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的是香水包装的核心功能零部件，负责将香水雾化喷出，标准颈口 15mm，它叫（___）。`,
    questionEn: `图中展示的是香水包装的核心功能零部件，负责将香水雾化喷出，标准颈口 15mm，它叫（___）。`,
    answer: `卡口式喷头（Crimp Pump / Sprayer）`,
    explanationZh: `卡口式喷头用金属卡环固定在瓶口，安装后不可拆卸，是最常见的喷头类型。`,
    explanationEn: `卡口式喷头用金属卡环固定在瓶口，安装后不可拆卸，是最常见的喷头类型。`,
  },
  {
    id: 'q_ch05_099',
    chapterId: 'ch05',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `图中展示的喷头底部可旋转锁定，防止旅行中误喷，符合航空安规，它是（___）喷头。`,
    questionEn: `图中展示的喷头底部可旋转锁定，防止旅行中误喷，符合航空安规，它是（___）喷头。`,
    answer: `螺口式喷头（Screw Pump / Screw Type）`,
    explanationZh: `螺口式喷头可拧入拧出，旅行装常用，旋转锁定后防止液体泄漏。`,
    explanationEn: `螺口式喷头可拧入拧出，旅行装常用，旋转锁定后防止液体泄漏。`,
  },
  {
    id: 'q_ch05_100',
    chapterId: 'ch05',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `请看两张图，左图为螺口式，右图为卡口式喷头。以下哪种说法正确？`,
    questionEn: `请看两张图，左图为螺口式，右图为卡口式喷头。以下哪种说法正确？`,
    options: [
      { key: 'A', textZh: `两种喷头可以互换使用`, textEn: `两种喷头可以互换使用` },
      { key: 'B', textZh: `螺口式（左图）可旋转锁定，卡口式（右图）固定安装后不可拆卸`, textEn: `螺口式（左图）可旋转锁定，卡口式（右图）固定安装后不可拆卸` },
      { key: 'C', textZh: `卡口式（右图）更适合旅行装`, textEn: `卡口式（右图）更适合旅行装` },
      { key: 'D', textZh: `两者都适合旅行装`, textEn: `两者都适合旅行装` },
    ],
    answer: `B`,
    explanationZh: `卡口（Crimp）和螺口（Screw）结构完全不同，不可互换，必须下单前与客户确认。`,
    explanationEn: `卡口（Crimp）和螺口（Screw）结构完全不同，不可互换，必须下单前与客户确认。`,
  },
  {
    id: 'q_ch06_101',
    chapterId: 'ch06',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"中套" 的英文是（___）。`,
    questionEn: `"中套" 的英文是（___）。`,
    answer: `Collar / Ring / Sleeve`,
    explanationZh: `套在喷头与瓶口之间的装饰固定圈（B结构）`,
    explanationEn: `套在喷头与瓶口之间的装饰固定圈（B结构）`,
  },
  {
    id: 'q_ch06_102',
    chapterId: 'ch06',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"肩套" 的英文是（___）。`,
    questionEn: `"肩套" 的英文是（___）。`,
    answer: `Shoulder / Shoulder Collar`,
    explanationZh: `套在瓶肩处的配件（A结构）`,
    explanationEn: `套在瓶肩处的配件（A结构）`,
  },
  {
    id: 'q_ch06_103',
    chapterId: 'ch06',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"中套（Collar）"的安装位置和主要作用是（___）。`,
    questionEn: `"中套（Collar）"的安装位置和主要作用是（___）。`,
    answer: `套在瓶口处，位于喷头与瓶身之间，起美化装饰和固定喷头的双重作用`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch06_104',
    chapterId: 'ch06',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `"Collar（中套）"主要用于哪种结构的香水瓶？`,
    questionEn: `"Collar（中套）"主要用于哪种结构的香水瓶？`,
    options: [
      { key: 'A', textZh: `A 结构（中东风格）`, textEn: `A 结构（中东风格）` },
      { key: 'B', textZh: `B 结构（欧美风格）`, textEn: `B 结构（欧美风格）` },
      { key: 'C', textZh: `两种都用`, textEn: `两种都用` },
      { key: 'D', textZh: `只用于木盖款式`, textEn: `只用于木盖款式` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch06_105',
    chapterId: 'ch06',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"肩套（Shoulder）"的安装位置是（___），主要用于（___）结构的香水瓶。`,
    questionEn: `"肩套（Shoulder）"的安装位置是（___），主要用于（___）结构的香水瓶。`,
    answer: `覆盖瓶肩（肩部）处 / A 结构`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch06_106',
    chapterId: 'ch06',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `中套标准金/银色 MOQ = （___）pcs；定制颜色 MOQ = （___）pcs。`,
    questionEn: `中套标准金/银色 MOQ = （___）pcs；定制颜色 MOQ = （___）pcs。`,
    answer: `10,000 pcs / 30,000 pcs`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch06_107',
    chapterId: 'ch06',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `中套完全定制颜色的 MOQ 是多少？`,
    questionEn: `中套完全定制颜色的 MOQ 是多少？`,
    options: [
      { key: 'A', textZh: `5,000 pcs`, textEn: `5,000 pcs` },
      { key: 'B', textZh: `10,000 pcs`, textEn: `10,000 pcs` },
      { key: 'C', textZh: `20,000 pcs`, textEn: `20,000 pcs` },
      { key: 'D', textZh: `30,000 pcs`, textEn: `30,000 pcs` },
    ],
    answer: `D`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch06_108',
    chapterId: 'ch06',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `图中展示的零部件套在喷头与瓶口之间，呈金色/银色，起装饰固定作用，它叫（___），用于（___）结构香水瓶。`,
    questionEn: `图中展示的零部件套在喷头与瓶口之间，呈金色/银色，起装饰固定作用，它叫（___），用于（___）结构香水瓶。`,
    answer: `标准中套（Standard Collar / Ring）/ B 结构`,
    explanationZh: `中套是B结构香水瓶的标志性配件，欧美现代简约风格常见，标准色金/银 MOQ=10,000pcs。`,
    explanationEn: `中套是B结构香水瓶的标志性配件，欧美现代简约风格常见，标准色金/银 MOQ=10,000pcs。`,
  },
  {
    id: 'q_ch06_109',
    chapterId: 'ch06',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的配件覆盖在香水瓶的肩部位置，用于 A 结构香水瓶，它叫做（___）。`,
    questionEn: `图中展示的配件覆盖在香水瓶的肩部位置，用于 A 结构香水瓶，它叫做（___）。`,
    answer: `定制肩套（Custom Shoulder Collar）`,
    explanationZh: `肩套是A结构的专属配件，覆盖瓶肩，常与铝牌（Name Plate）搭配使用，中东风格常见。`,
    explanationEn: `肩套是A结构的专属配件，覆盖瓶肩，常与铝牌（Name Plate）搭配使用，中东风格常见。`,
  },
  {
    id: 'q_ch06_110',
    chapterId: 'ch06',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `请看两图，左图配件覆盖瓶肩，右图配件套在瓶口喷头处。请判断：左图配件用于哪种结构？`,
    questionEn: `请看两图，左图配件覆盖瓶肩，右图配件套在瓶口喷头处。请判断：左图配件用于哪种结构？`,
    options: [
      { key: 'A', textZh: `A 结构（肩套，中东风格）`, textEn: `A 结构（肩套，中东风格）` },
      { key: 'B', textZh: `B 结构（中套，欧美风格）`, textEn: `B 结构（中套，欧美风格）` },
      { key: 'C', textZh: `两种结构都可以`, textEn: `两种结构都可以` },
      { key: 'D', textZh: `只用于圆形瓶型`, textEn: `只用于圆形瓶型` },
    ],
    answer: `A`,
    explanationZh: `左图(img_031)=定制肩套（Shoulder）用于A结构；右图(img_032)=标准中套（Collar）用于B结构。`,
    explanationEn: `左图(img_031)=定制肩套（Shoulder）用于A结构；右图(img_032)=标准中套（Collar）用于B结构。`,
  },
  {
    id: 'q_ch07_111',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"铝牌 / 标牌" 的英文是（___）。`,
    questionEn: `"铝牌 / 标牌" 的英文是（___）。`,
    answer: `Name Plate / Custom Plate`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_112',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"镜面铝" 的英文是（___）。`,
    questionEn: `"镜面铝" 的英文是（___）。`,
    answer: `Mirror Aluminum`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_113',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"拉丝铝" 的英文是（___）。`,
    questionEn: `"拉丝铝" 的英文是（___）。`,
    answer: `Brushed Aluminum`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_114',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"压铸" 的英文是（___）。`,
    questionEn: `"压铸" 的英文是（___）。`,
    answer: `Die Casting`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_115',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"抛光" 的英文是（___）。`,
    questionEn: `"抛光" 的英文是（___）。`,
    answer: `Polishing`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_116',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"腐蚀（不锈钢工艺）" 的英文是（___）。`,
    questionEn: `"腐蚀（不锈钢工艺）" 的英文是（___）。`,
    answer: `Etching`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_117',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"仿珐琅" 的英文是（___）。`,
    questionEn: `"仿珐琅" 的英文是（___）。`,
    answer: `Soft Enamel`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_118',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"浮雕" 的英文是（___）。`,
    questionEn: `"浮雕" 的英文是（___）。`,
    answer: `Embossing`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_119',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"凹雕" 的英文是（___）。`,
    questionEn: `"凹雕" 的英文是（___）。`,
    answer: `Debossing`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_120',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"氧化（铝专用）" 的英文是（___）。`,
    questionEn: `"氧化（铝专用）" 的英文是（___）。`,
    answer: `Anodized`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_121',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `香水标牌 MOQ = （___）pcs（标准金/银色）。`,
    questionEn: `香水标牌 MOQ = （___）pcs（标准金/银色）。`,
    answer: `3,000 pcs`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_122',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `标牌材料中，质感最厚实、最有重量感的是？`,
    questionEn: `标牌材料中，质感最厚实、最有重量感的是？`,
    options: [
      { key: 'A', textZh: `铝标牌（Aluminum）`, textEn: `铝标牌（Aluminum）` },
      { key: 'B', textZh: `不锈钢标牌（Stainless Steel）`, textEn: `不锈钢标牌（Stainless Steel）` },
      { key: 'C', textZh: `锌合金标牌（Zamak）`, textEn: `锌合金标牌（Zamak）` },
      { key: 'D', textZh: `塑料标牌`, textEn: `塑料标牌` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_123',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"激光雕刻（Laser Engraving）"相比丝印（Silk Screen）的最大优势是（___）。`,
    questionEn: `"激光雕刻（Laser Engraving）"相比丝印（Silk Screen）的最大优势是（___）。`,
    answer: `无需油墨，永不褪色，精度极高`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_124',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `哪种铝标牌工艺适合"Logo 永不褪色"的需求？`,
    questionEn: `哪种铝标牌工艺适合"Logo 永不褪色"的需求？`,
    options: [
      { key: 'A', textZh: `丝印（Silk Screen）`, textEn: `丝印（Silk Screen）` },
      { key: 'B', textZh: `激光雕刻（Laser Engraving）`, textEn: `激光雕刻（Laser Engraving）` },
      { key: 'C', textZh: `UV打印`, textEn: `UV打印` },
      { key: 'D', textZh: `电镀`, textEn: `电镀` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_125',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"仿珐琅（Soft Enamel）"与普通"上色（Epoxy）"最大的区别是（___）。`,
    questionEn: `"仿珐琅（Soft Enamel）"与普通"上色（Epoxy）"最大的区别是（___）。`,
    answer: `仿珐琅填充后经打磨，颜色与金属面齐平；普通上色（滴胶）颜色高于金属面`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_126',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `图中展示的是铝标牌印刷设备，可印渐变色和4C叠加图案，叫做（___）工艺。`,
    questionEn: `图中展示的是铝标牌印刷设备，可印渐变色和4C叠加图案，叫做（___）工艺。`,
    answer: `平印（Off-set Printing）`,
    explanationZh: `平印可印渐变色等复杂图案，是铝标牌最常用的印刷工艺之一。`,
    explanationEn: `平印可印渐变色等复杂图案，是铝标牌最常用的印刷工艺之一。`,
  },
  {
    id: 'q_ch07_127',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中设备将油墨直接喷涂在铝板上，墨点较大，此为哪种工艺？`,
    questionEn: `图中设备将油墨直接喷涂在铝板上，墨点较大，此为哪种工艺？`,
    options: [
      { key: 'A', textZh: `平印（Off-set Printing）`, textEn: `平印（Off-set Printing）` },
      { key: 'B', textZh: `UV 打印（Digital Printing）`, textEn: `UV 打印（Digital Printing）` },
      { key: 'C', textZh: `丝印（Silk Screen）`, textEn: `丝印（Silk Screen）` },
      { key: 'D', textZh: `氧化（Anodized）`, textEn: `氧化（Anodized）` },
    ],
    answer: `B`,
    explanationZh: `UV打印（Digital Printing）使用打印机直接在铝板上打印，油墨较厚，墨点较大。`,
    explanationEn: `UV打印（Digital Printing）使用打印机直接在铝板上打印，油墨较厚，墨点较大。`,
  },
  {
    id: 'q_ch07_128',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中展示丝网印刷工艺，此工艺特别适合印刷什么特殊材料？`,
    questionEn: `图中展示丝网印刷工艺，此工艺特别适合印刷什么特殊材料？`,
    options: [
      { key: 'A', textZh: `只适合印刷单色`, textEn: `只适合印刷单色` },
      { key: 'B', textZh: `特别适合含闪粉等颗粒较大的油墨`, textEn: `特别适合含闪粉等颗粒较大的油墨` },
      { key: 'C', textZh: `只能印刷白色`, textEn: `只能印刷白色` },
      { key: 'D', textZh: `只适合大面积底色`, textEn: `只适合大面积底色` },
    ],
    answer: `B`,
    explanationZh: `丝印油墨厚度介于平印和UV打印之间，针对闪粉等颗粒大的油墨，只有丝印才能完成。`,
    explanationEn: `丝印油墨厚度介于平印和UV打印之间，针对闪粉等颗粒大的油墨，只有丝印才能完成。`,
  },
  {
    id: 'q_ch07_129',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `图中铝标牌上的 Logo 向外凸起呈 3D 立体效果，此为（___）工艺；若图案向内凹陷则为（___）工艺。`,
    questionEn: `图中铝标牌上的 Logo 向外凸起呈 3D 立体效果，此为（___）工艺；若图案向内凹陷则为（___）工艺。`,
    answer: `凸字（Embossing / 激凸）/ 凹字（Debossing / 压凹）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_130',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `图中铝标牌表面处理形成了有颜色的氧化层，此为哪种工艺？`,
    questionEn: `图中铝标牌表面处理形成了有颜色的氧化层，此为哪种工艺？`,
    options: [
      { key: 'A', textZh: `电镀（Metalizing）`, textEn: `电镀（Metalizing）` },
      { key: 'B', textZh: `喷涂（Color Coating）`, textEn: `喷涂（Color Coating）` },
      { key: 'C', textZh: `氧化（Anodized）`, textEn: `氧化（Anodized）` },
      { key: 'D', textZh: `光学镀（Lighting Coating）`, textEn: `光学镀（Lighting Coating）` },
    ],
    answer: `C`,
    explanationZh: `氧化（Anodized）仅适用于铝材质，通过电化学氧化形成颜色氧化层，但容易出现色差。`,
    explanationEn: `氧化（Anodized）仅适用于铝材质，通过电化学氧化形成颜色氧化层，但容易出现色差。`,
  },
  {
    id: 'q_ch07_131',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中不锈钢标牌表面呈现细沙底哑光效果，此为（___）工艺。`,
    questionEn: `图中不锈钢标牌表面呈现细沙底哑光效果，此为（___）工艺。`,
    answer: `腐蚀（Etching）`,
    explanationZh: `不锈钢腐蚀工艺形成沙底哑光效果，配合上色可做丰富层次。`,
    explanationEn: `不锈钢腐蚀工艺形成沙底哑光效果，配合上色可做丰富层次。`,
  },
  {
    id: 'q_ch07_132',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `图中展示在标牌凹槽处填入彩色材料，此为哪种技术？`,
    questionEn: `图中展示在标牌凹槽处填入彩色材料，此为哪种技术？`,
    options: [
      { key: 'A', textZh: `电镀（Metalizing）`, textEn: `电镀（Metalizing）` },
      { key: 'B', textZh: `腐蚀（Etching）`, textEn: `腐蚀（Etching）` },
      { key: 'C', textZh: `上色/滴胶（Epoxy / Fill Up Colors）`, textEn: `上色/滴胶（Epoxy / Fill Up Colors）` },
      { key: 'D', textZh: `烫金（Hot Stamping）`, textEn: `烫金（Hot Stamping）` },
    ],
    answer: `C`,
    explanationZh: `滴胶/上色工艺在腐蚀后的凹槽中填入颜色，增加层次感。`,
    explanationEn: `滴胶/上色工艺在腐蚀后的凹槽中填入颜色，增加层次感。`,
  },
  {
    id: 'q_ch07_133',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的是锌合金标牌的第一道工序：将锌合金熔液注入模具成型，此为（___）工艺。`,
    questionEn: `图中展示的是锌合金标牌的第一道工序：将锌合金熔液注入模具成型，此为（___）工艺。`,
    answer: `压铸（Die Casting）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_134',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中工序在压铸后进行，通过打磨去除锌合金毛坯氧化层，使表面光滑，此为？`,
    questionEn: `图中工序在压铸后进行，通过打磨去除锌合金毛坯氧化层，使表面光滑，此为？`,
    options: [
      { key: 'A', textZh: `电镀（Metalizing）`, textEn: `电镀（Metalizing）` },
      { key: 'B', textZh: `氧化（Anodized）`, textEn: `氧化（Anodized）` },
      { key: 'C', textZh: `抛光（Polishing）`, textEn: `抛光（Polishing）` },
      { key: 'D', textZh: `腐蚀（Etching）`, textEn: `腐蚀（Etching）` },
    ],
    answer: `C`,
    explanationZh: `抛光是锌合金标牌压铸后的必须步骤，为后续电镀打底。`,
    explanationEn: `抛光是锌合金标牌压铸后的必须步骤，为后续电镀打底。`,
  },
  {
    id: 'q_ch07_135',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `图中标牌工艺将珐琅胶填入凹槽，经打磨后颜色与金属面齐平，此为（___）工艺，区别于普通滴胶。`,
    questionEn: `图中标牌工艺将珐琅胶填入凹槽，经打磨后颜色与金属面齐平，此为（___）工艺，区别于普通滴胶。`,
    answer: `仿珐琅（Soft Enamel）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_136',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示铝标牌成品样品，它贴附在香水瓶身上展示品牌，叫做（___），英文是（___）。`,
    questionEn: `图中展示铝标牌成品样品，它贴附在香水瓶身上展示品牌，叫做（___），英文是（___）。`,
    answer: `铝标牌（Aluminum Name Plate / Custom Plate）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch07_137',
    chapterId: 'ch07',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示铝标牌已安装到香水瓶上的完整效果，整体风格是（___）市场常见的香水风格。`,
    questionEn: `图中展示铝标牌已安装到香水瓶上的完整效果，整体风格是（___）市场常见的香水风格。`,
    answer: `中东高端（Middle East Luxury）`,
    explanationZh: `铝牌/金属标牌搭配A结构（肩套）是中东高端香水的标志性组合。`,
    explanationEn: `铝牌/金属标牌搭配A结构（肩套）是中东高端香水的标志性组合。`,
  },
  {
    id: 'q_ch07_138',
    chapterId: 'ch07',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `请看两张标牌图，哪张是不锈钢标牌（Stainless Steel）、哪张是锌合金标牌（Zinc Alloy / Zamak）？`,
    questionEn: `请看两张标牌图，哪张是不锈钢标牌（Stainless Steel）、哪张是锌合金标牌（Zinc Alloy / Zamak）？`,
    options: [
      { key: 'A', textZh: `左图=锌合金，右图=不锈钢`, textEn: `左图=锌合金，右图=不锈钢` },
      { key: 'B', textZh: `左图=不锈钢（Stainless Steel），右图=锌合金（Zinc Alloy / Zamak）`, textEn: `左图=不锈钢（Stainless Steel），右图=锌合金（Zinc Alloy / Zamak）` },
      { key: 'C', textZh: `两张都是铝标牌`, textEn: `两张都是铝标牌` },
      { key: 'D', textZh: `两张都是锌合金标牌`, textEn: `两张都是锌合金标牌` },
    ],
    answer: `B`,
    explanationZh: `左图(img_013)=不锈钢标牌；右图(img_012)=锌合金（Zamak）标牌，质感最厚实。`,
    explanationEn: `左图(img_013)=不锈钢标牌；右图(img_012)=锌合金（Zamak）标牌，质感最厚实。`,
  },
  {
    id: 'q_ch08_139',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"折叠卡盒" 的英文是（___）。`,
    questionEn: `"折叠卡盒" 的英文是（___）。`,
    answer: `Folding Box / Soft Box`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_140',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"翻盖精品盒（磁吸）" 的英文是（___）。`,
    questionEn: `"翻盖精品盒（磁吸）" 的英文是（___）。`,
    answer: `Rigid Box – Book Shape / Magnetic Closure`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_141',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"抽屉盒" 的英文是（___）。`,
    questionEn: `"抽屉盒" 的英文是（___）。`,
    answer: `Drawer Box / Rigid Box – Drawer Shape`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_142',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"天地盒" 的英文是（___）。`,
    questionEn: `"天地盒" 的英文是（___）。`,
    answer: `Rigid Box – Top & Bottom / Lid and Base Box`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_143',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"圆筒盒" 的英文是（___）。`,
    questionEn: `"圆筒盒" 的英文是（___）。`,
    answer: `Cylinder Box`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_144',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"木盒" 的英文是（___）。`,
    questionEn: `"木盒" 的英文是（___）。`,
    answer: `Wooden Box`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_145',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"试香纸" 的英文是（___）。`,
    questionEn: `"试香纸" 的英文是（___）。`,
    answer: `Test Paper / Blotter / Scent Card`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_146',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"手提纸袋" 的英文是（___）。`,
    questionEn: `"手提纸袋" 的英文是（___）。`,
    answer: `Paper Bag / Carrier Bag`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_147',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"EVA 泡棉内托" 的英文是（___）。`,
    questionEn: `"EVA 泡棉内托" 的英文是（___）。`,
    answer: `EVA Liner / EVA Foam Insert`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_148',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"坑纸内托" 的英文是（___）。`,
    questionEn: `"坑纸内托" 的英文是（___）。`,
    answer: `Corrugated Liner / Corrugated Paper Insert`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_149',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"热烫 / 烫色" 的英文是（___）。`,
    questionEn: `"热烫 / 烫色" 的英文是（___）。`,
    answer: `Hot Stamping / Foil Stamping`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_150',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"激凸 / 压凹" 的英文是（___）。`,
    questionEn: `"激凸 / 压凹" 的英文是（___）。`,
    answer: `Embossing / Debossing`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_151',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"光胶（覆膜）" 的英文是（___）。`,
    questionEn: `"光胶（覆膜）" 的英文是（___）。`,
    answer: `Glossy Lamination`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_152',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"哑胶（覆膜）" 的英文是（___）。`,
    questionEn: `"哑胶（覆膜）" 的英文是（___）。`,
    answer: `Matt Lamination`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_153',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"过 UV（局部 UV）" 的英文是（___）。`,
    questionEn: `"过 UV（局部 UV）" 的英文是（___）。`,
    answer: `UV Coating / UV Spot`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_154',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"四色印刷" 的英文是（___）。`,
    questionEn: `"四色印刷" 的英文是（___）。`,
    answer: `CMYK Printing`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_155',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"单色印刷（潘通色号）" 的英文是（___）。`,
    questionEn: `"单色印刷（潘通色号）" 的英文是（___）。`,
    answer: `Pantone Printing`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_156',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"折叠卡盒（Folding Box）"最大的优势是（___）。`,
    questionEn: `"折叠卡盒（Folding Box）"最大的优势是（___）。`,
    answer: `可折叠平铺，节省运输空间，成本最低，适合大批量零售产品`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_157',
    chapterId: 'ch08',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下哪种盒型成本最低、适合大批量零售？`,
    questionEn: `以下哪种盒型成本最低、适合大批量零售？`,
    options: [
      { key: 'A', textZh: `精品翻盖硬盒（Rigid Box）`, textEn: `精品翻盖硬盒（Rigid Box）` },
      { key: 'B', textZh: `木盒（Wooden Box）`, textEn: `木盒（Wooden Box）` },
      { key: 'C', textZh: `折叠卡盒（Folding Box）`, textEn: `折叠卡盒（Folding Box）` },
      { key: 'D', textZh: `抽屉盒（Drawer Box）`, textEn: `抽屉盒（Drawer Box）` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_158',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"精品硬盒（Rigid Box）"无法折叠的原因是（___）。`,
    questionEn: `"精品硬盒（Rigid Box）"无法折叠的原因是（___）。`,
    answer: `内含硬质灰板（Greyboard），结构固定`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_159',
    chapterId: 'ch08',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `"Drawer Box（抽屉盒）"最突出的体验特点是？`,
    questionEn: `"Drawer Box（抽屉盒）"最突出的体验特点是？`,
    options: [
      { key: 'A', textZh: `成本最低`, textEn: `成本最低` },
      { key: 'B', textZh: `推拉式开合体验独特，适合礼品套装`, textEn: `推拉式开合体验独特，适合礼品套装` },
      { key: 'C', textZh: `可折叠存放`, textEn: `可折叠存放` },
      { key: 'D', textZh: `只适合圆形瓶型`, textEn: `只适合圆形瓶型` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_160',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `香水外盒法规要求必须印制的五类信息：（①）、（②）、（③）、（④）、（⑤）。`,
    questionEn: `香水外盒法规要求必须印制的五类信息：（①）、（②）、（③）、（④）、（⑤）。`,
    answer: `①品牌名 ②净含量(ml/oz) ③INCI成分表 ④条形码(Barcode) ⑤原产地(Country of Origin)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_161',
    chapterId: 'ch08',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `哪种盒子工艺组合最常见于高端香水包装（背景哑、Logo 亮）？`,
    questionEn: `哪种盒子工艺组合最常见于高端香水包装（背景哑、Logo 亮）？`,
    options: [
      { key: 'A', textZh: `光胶+烫金`, textEn: `光胶+烫金` },
      { key: 'B', textZh: `哑胶+局部UV（Matt Lamination + UV Spot）`, textEn: `哑胶+局部UV（Matt Lamination + UV Spot）` },
      { key: 'C', textZh: `CMYK+光胶`, textEn: `CMYK+光胶` },
      { key: 'D', textZh: `Pantone+过UV`, textEn: `Pantone+过UV` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_162',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `图中香水盒的开合方式类似书本翻开，通常带磁吸扣，视觉高档，此盒型叫（___）。`,
    questionEn: `图中香水盒的开合方式类似书本翻开，通常带磁吸扣，视觉高档，此盒型叫（___）。`,
    answer: `翻盖精品盒（Rigid Box – Book Shape / Magnetic Closure）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_163',
    chapterId: 'ch08',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中香水盒为推拉式开合，展示感强，中东高端市场非常流行，它是？`,
    questionEn: `图中香水盒为推拉式开合，展示感强，中东高端市场非常流行，它是？`,
    options: [
      { key: 'A', textZh: `折叠卡盒（Folding Box）`, textEn: `折叠卡盒（Folding Box）` },
      { key: 'B', textZh: `天地盒（Lid and Base Box）`, textEn: `天地盒（Lid and Base Box）` },
      { key: 'C', textZh: `抽屉盒（Drawer Box）`, textEn: `抽屉盒（Drawer Box）` },
      { key: 'D', textZh: `圆筒盒（Cylinder Box）`, textEn: `圆筒盒（Cylinder Box）` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_164',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中香水盒分上下两部分，盖与底完全分离，此盒型叫（___），英文是（___）。`,
    questionEn: `图中香水盒分上下两部分，盖与底完全分离，此盒型叫（___），英文是（___）。`,
    answer: `天地盒 / Rigid Box – Top & Bottom（Lid and Base Box）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_165',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `图中展示的是香水礼盒，材质天然，带木纹质感，定位自然环保风格，它叫（___）。`,
    questionEn: `图中展示的是香水礼盒，材质天然，带木纹质感，定位自然环保风格，它叫（___）。`,
    answer: `木盒（Wooden Box）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_166',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的是（___）香水盒，外形为圆筒形状，英文名是（___）。`,
    questionEn: `图中展示的是（___）香水盒，外形为圆筒形状，英文名是（___）。`,
    answer: `圆筒盒 / Cylinder Box`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_167',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的香水盒可以折叠平铺储存，成本最低，适合大批量零售，它叫（___）。`,
    questionEn: `图中展示的香水盒可以折叠平铺储存，成本最低，适合大批量零售，它叫（___）。`,
    answer: `折叠卡盒（Folding Box / Soft Box）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_168',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `图中展示的是一种细长纸条，用于让顾客在购买前感受香水气味，它叫（___），英文是（___）。`,
    questionEn: `图中展示的是一种细长纸条，用于让顾客在购买前感受香水气味，它叫（___），英文是（___）。`,
    answer: `试香纸 / Blotter（Test Paper / Scent Card）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_169',
    chapterId: 'ch08',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `图中展示的是香水购买后配套赠送的手提袋，它叫（___），英文是（___）。`,
    questionEn: `图中展示的是香水购买后配套赠送的手提袋，它叫（___），英文是（___）。`,
    answer: `纸袋（Paper Bag / Carrier Bag）`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch08_170',
    chapterId: 'ch08',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `以下三款盒型，哪种盒型的开盒体验类似拉抽屉？`,
    questionEn: `以下三款盒型，哪种盒型的开盒体验类似拉抽屉？`,
    options: [
      { key: 'A', textZh: `最左边（翻盖盒 Book Shape）`, textEn: `最左边（翻盖盒 Book Shape）` },
      { key: 'B', textZh: `中间（抽屉盒 Drawer Box）`, textEn: `中间（抽屉盒 Drawer Box）` },
      { key: 'C', textZh: `最右边（天地盒 Top & Bottom）`, textEn: `最右边（天地盒 Top & Bottom）` },
      { key: 'D', textZh: `三款都有推拉体验`, textEn: `三款都有推拉体验` },
    ],
    answer: `B`,
    explanationZh: `抽屉盒（Drawer Box）推拉式开合，展示感最强，礼品套装中最受欢迎。`,
    explanationEn: `抽屉盒（Drawer Box）推拉式开合，展示感最强，礼品套装中最受欢迎。`,
  },
  {
    id: 'q_ch09_171',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"出厂价（买方自提）" 的英文是（___）。`,
    questionEn: `"出厂价（买方自提）" 的英文是（___）。`,
    answer: `EXW (Ex Works)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_172',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"离岸价" 的英文是（___）。`,
    questionEn: `"离岸价" 的英文是（___）。`,
    answer: `FOB (Free On Board)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_173',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"成本+保险+运费" 的英文是（___）。`,
    questionEn: `"成本+保险+运费" 的英文是（___）。`,
    answer: `CIF (Cost Insurance Freight)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_174',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"完税交货价（门到门全包）" 的英文是（___）。`,
    questionEn: `"完税交货价（门到门全包）" 的英文是（___）。`,
    answer: `DDP (Delivered Duty Paid)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_175',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"成本+运费（不含保险）" 的英文是（___）。`,
    questionEn: `"成本+运费（不含保险）" 的英文是（___）。`,
    answer: `CFR (Cost and Freight)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_176',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"电汇" 的英文是（___）。`,
    questionEn: `"电汇" 的英文是（___）。`,
    answer: `T/T (Telegraphic Transfer)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_177',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"信用证" 的英文是（___）。`,
    questionEn: `"信用证" 的英文是（___）。`,
    answer: `L/C (Letter of Credit)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_178',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"原始设备制造（按客户设计生产）" 的英文是（___）。`,
    questionEn: `"原始设备制造（按客户设计生产）" 的英文是（___）。`,
    answer: `OEM (Original Equipment Manufacturer)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_179',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"原始设计制造（供应商提供设计）" 的英文是（___）。`,
    questionEn: `"原始设计制造（供应商提供设计）" 的英文是（___）。`,
    answer: `ODM (Original Design Manufacturer)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_180',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"最低起订量" 的英文是（___）。`,
    questionEn: `"最低起订量" 的英文是（___）。`,
    answer: `MOQ (Minimum Order Quantity)`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_181',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"FOB（离岸价）"包含（___）、（___）和（___），不含国际运费和目的地关税。`,
    questionEn: `"FOB（离岸价）"包含（___）、（___）和（___），不含国际运费和目的地关税。`,
    answer: `产品成本 / 国内货代费 / 出口港装船费`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_182',
    chapterId: 'ch09',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `"FOB"和"CIF"最主要的区别是？`,
    questionEn: `"FOB"和"CIF"最主要的区别是？`,
    options: [
      { key: 'A', textZh: `CIF不含产品成本`, textEn: `CIF不含产品成本` },
      { key: 'B', textZh: `CIF额外包含国际运费和运输保险`, textEn: `CIF额外包含国际运费和运输保险` },
      { key: 'C', textZh: `CIF更便宜`, textEn: `CIF更便宜` },
      { key: 'D', textZh: `CIF只用于空运`, textEn: `CIF只用于空运` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_183',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"DDP（完税交货价）"是（___）全包报价，含产品、货代、（___）和（___）。`,
    questionEn: `"DDP（完税交货价）"是（___）全包报价，含产品、货代、（___）和（___）。`,
    answer: `门到门 / 国际运费 / 目的地关税及税费`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_184',
    chapterId: 'ch09',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `卖方承担所有费用到门的贸易术语是？`,
    questionEn: `卖方承担所有费用到门的贸易术语是？`,
    options: [
      { key: 'A', textZh: `EXW`, textEn: `EXW` },
      { key: 'B', textZh: `FOB`, textEn: `FOB` },
      { key: 'C', textZh: `CIF`, textEn: `CIF` },
      { key: 'D', textZh: `DDP`, textEn: `DDP` },
    ],
    answer: `D`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_185',
    chapterId: 'ch09',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `买方承担所有费用（自行提货）的贸易术语是？`,
    questionEn: `买方承担所有费用（自行提货）的贸易术语是？`,
    options: [
      { key: 'A', textZh: `EXW`, textEn: `EXW` },
      { key: 'B', textZh: `FOB`, textEn: `FOB` },
      { key: 'C', textZh: `CIF`, textEn: `CIF` },
      { key: 'D', textZh: `DDP`, textEn: `DDP` },
    ],
    answer: `A`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_186',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"PayPal"付款手续费为（___）%，报价时须将此成本计入售价。`,
    questionEn: `"PayPal"付款手续费为（___）%，报价时须将此成本计入售价。`,
    answer: `4.5 %`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_187',
    chapterId: 'ch09',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `PayPal 付款手续费是多少？`,
    questionEn: `PayPal 付款手续费是多少？`,
    options: [
      { key: 'A', textZh: `1.5%`, textEn: `1.5%` },
      { key: 'B', textZh: `2.5%`, textEn: `2.5%` },
      { key: 'C', textZh: `4.5%`, textEn: `4.5%` },
      { key: 'D', textZh: `6%`, textEn: `6%` },
    ],
    answer: `C`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_188',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `公模现货 MOQ = （___）pcs`,
    questionEn: `公模现货 MOQ = （___）pcs`,
    answer: `10,000 pcs`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_189',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `私模定制 MOQ = （___）pcs，需额外支付（___）。`,
    questionEn: `私模定制 MOQ = （___）pcs，需额外支付（___）。`,
    answer: `20,000–30,000 pcs / 一次性开模费`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_190',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `中套标准色 MOQ = （___）pcs；定制色 MOQ = （___）pcs。`,
    questionEn: `中套标准色 MOQ = （___）pcs；定制色 MOQ = （___）pcs。`,
    answer: `10,000 pcs / 30,000 pcs`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_191',
    chapterId: 'ch09',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `标牌（Name Plate）标准色 MOQ = （___）pcs。`,
    questionEn: `标牌（Name Plate）标准色 MOQ = （___）pcs。`,
    answer: `3,000 pcs`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch09_192',
    chapterId: 'ch09',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `以下 MOQ 信息哪项是错误的？`,
    questionEn: `以下 MOQ 信息哪项是错误的？`,
    options: [
      { key: 'A', textZh: `公模现货 MOQ = 10,000 pcs`, textEn: `公模现货 MOQ = 10,000 pcs` },
      { key: 'B', textZh: `私模定制 MOQ = 20,000–30,000 pcs`, textEn: `私模定制 MOQ = 20,000–30,000 pcs` },
      { key: 'C', textZh: `标牌标准色 MOQ = 3,000 pcs`, textEn: `标牌标准色 MOQ = 3,000 pcs` },
      { key: 'D', textZh: `中套定制色 MOQ = 10,000 pcs`, textEn: `中套定制色 MOQ = 10,000 pcs` },
    ],
    answer: `D`,
    explanationZh: `中套定制色 MOQ = 30,000 pcs（不是10,000），10,000 pcs是标准金/银色的MOQ。`,
    explanationEn: `中套定制色 MOQ = 30,000 pcs（不是10,000），10,000 pcs是标准金/银色的MOQ。`,
  },
  {
    id: 'q_ch10_193',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `卡口式喷头（Crimp Pump / Sprayer）`,
    explanationZh: `控制香水喷出量，标准颈口15mm，固定安装不可拆卸`,
    explanationEn: `控制香水喷出量，标准颈口15mm，固定安装不可拆卸`,
  },
  {
    id: 'q_ch10_194',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `螺口式喷头（Screw Pump / Screw Type）`,
    explanationZh: `可旋转锁定，防止误喷，适合旅行装`,
    explanationEn: `可旋转锁定，防止误喷，适合旅行装`,
  },
  {
    id: 'q_ch10_195',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `标准中套（Standard Collar / Ring）`,
    explanationZh: `B结构香水瓶标志性配件，欧美风格`,
    explanationEn: `B结构香水瓶标志性配件，欧美风格`,
  },
  {
    id: 'q_ch10_196',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `定制肩套（Custom Shoulder Collar）`,
    explanationZh: `A结构香水瓶专属配件，中东风格`,
    explanationEn: `A结构香水瓶专属配件，中东风格`,
  },
  {
    id: 'q_ch10_197',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `Zamak 锌合金盖（Zinc Alloy Cap）`,
    explanationZh: `重量感强，适合电镀，中东高端市场首选；区别于ABS轻量塑料`,
    explanationEn: `重量感强，适合电镀，中东高端市场首选；区别于ABS轻量塑料`,
  },
  {
    id: 'q_ch10_198',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `铝标牌（Aluminum Name Plate）`,
    explanationZh: `品牌铭牌，搭配A结构，中东高端常见`,
    explanationEn: `品牌铭牌，搭配A结构，中东高端常见`,
  },
  {
    id: 'q_ch10_199',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `翻盖精品盒（Rigid Box – Book Shape）`,
    explanationZh: `磁吸翻盖，视觉高档感强`,
    explanationEn: `磁吸翻盖，视觉高档感强`,
  },
  {
    id: 'q_ch10_200',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `UV 电镀（UV Plating / Metalizing）`,
    explanationZh: `金属镜面光泽，金/银/玫瑰金，高档感强`,
    explanationEn: `金属镜面光泽，金/银/玫瑰金，高档感强`,
  },
  {
    id: 'q_ch10_201',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `蒙砂（Frosting / Sand-blasting）`,
    explanationZh: `磨砂哑光，低调奢华，欧美市场流行`,
    explanationEn: `磨砂哑光，低调奢华，欧美市场流行`,
  },
  {
    id: 'q_ch10_202',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `植绒（Flocking / Velvet）`,
    explanationZh: `天鹅绒触感，高档礼品感`,
    explanationEn: `天鹅绒触感，高档礼品感`,
  },
  {
    id: 'q_ch10_203',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `裂纹（Cracking）`,
    explanationZh: `特殊龟裂纹路，艺术感强`,
    explanationEn: `特殊龟裂纹路，艺术感强`,
  },
  {
    id: 'q_ch10_204',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `烫金（Hot Stamping / Foil Stamping）`,
    explanationZh: `金属箔转印，Logo/品牌名称常用`,
    explanationEn: `金属箔转印，Logo/品牌名称常用`,
  },
  {
    id: 'q_ch10_205',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `平印（Off-set Printing）`,
    explanationZh: `铝标牌印刷，可印渐变色和4C图案`,
    explanationEn: `铝标牌印刷，可印渐变色和4C图案`,
  },
  {
    id: 'q_ch10_206',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `凸字工艺（Embossing / 激凸）`,
    explanationZh: `3D凸起Logo效果，需开字模`,
    explanationEn: `3D凸起Logo效果，需开字模`,
  },
  {
    id: 'q_ch10_207',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `此图展示的是（___）`,
    questionEn: `此图展示的是（___）`,
    answer: `压铸（Die Casting）`,
    explanationZh: `锌合金第一道工序，熔液注入模具`,
    explanationEn: `锌合金第一道工序，熔液注入模具`,
  },
  {
    id: 'q_ch10_208',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下三张图展示三种不同效果的香水瓶，请判断：呈现金属镜面光泽的是哪张图？`,
    questionEn: `以下三张图展示三种不同效果的香水瓶，请判断：呈现金属镜面光泽的是哪张图？`,
    options: [
      { key: 'A', textZh: `左图（透喷 Transparent Coating）`, textEn: `左图（透喷 Transparent Coating）` },
      { key: 'B', textZh: `中图（实喷 Solid Coating）`, textEn: `中图（实喷 Solid Coating）` },
      { key: 'C', textZh: `右图（UV 电镀 / UV Plating）`, textEn: `右图（UV 电镀 / UV Plating）` },
      { key: 'D', textZh: `三张都有金属光泽`, textEn: `三张都有金属光泽` },
    ],
    answer: `C`,
    explanationZh: `左图(img_000)=透明喷涂（透喷）；中图(img_050)=实色喷涂；右图(img_049)=UV电镀金属镜面光泽。`,
    explanationEn: `左图(img_000)=透明喷涂（透喷）；中图(img_050)=实色喷涂；右图(img_049)=UV电镀金属镜面光泽。`,
  },
  {
    id: 'q_ch10_209',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `图中两款香水瓶，左图为A结构，右图为B结构，以下描述正确的是？`,
    questionEn: `图中两款香水瓶，左图为A结构，右图为B结构，以下描述正确的是？`,
    options: [
      { key: 'A', textZh: `左图有中套（Collar），右图有肩套（Shoulder）`, textEn: `左图有中套（Collar），右图有肩套（Shoulder）` },
      { key: 'B', textZh: `左图有肩套（Shoulder）和铭牌，右图有中套（Collar）`, textEn: `左图有肩套（Shoulder）和铭牌，右图有中套（Collar）` },
      { key: 'C', textZh: `两款都是B结构`, textEn: `两款都是B结构` },
      { key: 'D', textZh: `两款都是A结构`, textEn: `两款都是A结构` },
    ],
    answer: `B`,
    explanationZh: `A结构(左图img_002)=肩套+铭牌，中东风格；B结构(右图img_001)=中套，欧美风格。`,
    explanationEn: `A结构(左图img_002)=肩套+铭牌，中东风格；B结构(右图img_001)=中套，欧美风格。`,
  },
  {
    id: 'q_ch10_210',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `图中两张图都展示喷头，左图为螺口式，右图为卡口式，以下说法正确的是？`,
    questionEn: `图中两张图都展示喷头，左图为螺口式，右图为卡口式，以下说法正确的是？`,
    options: [
      { key: 'A', textZh: `两种喷头可以互换使用`, textEn: `两种喷头可以互换使用` },
      { key: 'B', textZh: `螺口式（左图）可旋转锁定适合旅行装；卡口式（右图）固定安装`, textEn: `螺口式（左图）可旋转锁定适合旅行装；卡口式（右图）固定安装` },
      { key: 'C', textZh: `卡口式（右图）更适合旅行装`, textEn: `卡口式（右图）更适合旅行装` },
      { key: 'D', textZh: `螺口式价格更高`, textEn: `螺口式价格更高` },
    ],
    answer: `B`,
    explanationZh: ``,
    explanationEn: ``,
  },
  {
    id: 'q_ch10_211',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下四款盒型，哪款成本最低、可折叠平铺运输？`,
    questionEn: `以下四款盒型，哪款成本最低、可折叠平铺运输？`,
    options: [
      { key: 'A', textZh: `左一（翻盖精品盒 Rigid Box）`, textEn: `左一（翻盖精品盒 Rigid Box）` },
      { key: 'B', textZh: `左二（抽屉盒 Drawer Box）`, textEn: `左二（抽屉盒 Drawer Box）` },
      { key: 'C', textZh: `左三（折叠卡盒 Folding Box）`, textEn: `左三（折叠卡盒 Folding Box）` },
      { key: 'D', textZh: `右一（木盒 Wooden Box）`, textEn: `右一（木盒 Wooden Box）` },
    ],
    answer: `C`,
    explanationZh: `折叠卡盒(img_006)可折叠平铺，节省运输空间，成本最低，适合大批量零售。`,
    explanationEn: `折叠卡盒(img_006)可折叠平铺，节省运输空间，成本最低，适合大批量零售。`,
  },
  {
    id: 'q_ch10_212',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下两图：左图为标准中套（B结构），右图为定制肩套（A结构）。以下哪种说法最准确？`,
    questionEn: `以下两图：左图为标准中套（B结构），右图为定制肩套（A结构）。以下哪种说法最准确？`,
    options: [
      { key: 'A', textZh: `左图用于A结构，右图用于B结构`, textEn: `左图用于A结构，右图用于B结构` },
      { key: 'B', textZh: `左图（标准中套）用于B结构欧美风格，右图（肩套）用于A结构中东风格`, textEn: `左图（标准中套）用于B结构欧美风格，右图（肩套）用于A结构中东风格` },
      { key: 'C', textZh: `两款配件功能相同，只是颜色不同`, textEn: `两款配件功能相同，只是颜色不同` },
      { key: 'D', textZh: `两款都是中套（Collar）`, textEn: `两款都是中套（Collar）` },
    ],
    answer: `B`,
    explanationZh: `标准中套=B结构欧美风格；定制肩套=A结构中东风格。接单必须与客户确认结构！`,
    explanationEn: `标准中套=B结构欧美风格；定制肩套=A结构中东风格。接单必须与客户确认结构！`,
  },
  {
    id: 'q_ch10_213',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"蒙沙（磨砂质感）" 的英文是（___）。`,
    questionEn: `"蒙沙（磨砂质感）" 的英文是（___）。`,
    answer: `Frosting / Frosted`,
    explanationZh: `蒙沙对玻璃表面磨砂处理，呈低调哑光质感，欧美市场常见。`,
    explanationEn: `蒙沙对玻璃表面磨砂处理，呈低调哑光质感，欧美市场常见。`,
  },
  {
    id: 'q_ch10_214',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"植绒（绒布手感）" 的英文是（___）。`,
    questionEn: `"植绒（绒布手感）" 的英文是（___）。`,
    answer: `Flocking / Velvet`,
    explanationZh: `植绒在瓶身表面黏附短绒纤维，形成天鹅绒触感，高端礼品感强。`,
    explanationEn: `植绒在瓶身表面黏附短绒纤维，形成天鹅绒触感，高端礼品感强。`,
  },
  {
    id: 'q_ch10_215',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"烫金" 的英文是（___）。`,
    questionEn: `"烫金" 的英文是（___）。`,
    answer: `Hot Stamping / Gold Blocking / Foil Stamping`,
    explanationZh: `热压金属箔片，常用于 LOGO 印制，每种工艺标准 MOQ 10,000 pcs。`,
    explanationEn: `热压金属箔片，常用于 LOGO 印制，每种工艺标准 MOQ 10,000 pcs。`,
  },
  {
    id: 'q_ch10_216',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"丝印" 的英文是（___）。`,
    questionEn: `"丝印" 的英文是（___）。`,
    answer: `Silkscreen Printing / Silk Print`,
    explanationZh: `通过网版将油墨印刷在产品上，适合 LOGO 和图案精细印刷。`,
    explanationEn: `通过网版将油墨印刷在产品上，适合 LOGO 和图案精细印刷。`,
  },
  {
    id: 'q_ch10_217',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"电镀" 的英文是（___）。`,
    questionEn: `"电镀" 的英文是（___）。`,
    answer: `Metalizing / Metallization / Galvanized Plating`,
    explanationZh: `水镀（Galvanized）是最常用电镀方式，可做金色/银色/黑镍等效果。`,
    explanationEn: `水镀（Galvanized）是最常用电镀方式，可做金色/银色/黑镍等效果。`,
  },
  {
    id: 'q_ch10_218',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"渐变喷涂" 的英文是（___）。`,
    questionEn: `"渐变喷涂" 的英文是（___）。`,
    answer: `Gradient Color Coating`,
    explanationZh: `颜色从深到浅或从一色过渡到另一色，常见于高端香水瓶设计。`,
    explanationEn: `颜色从深到浅或从一色过渡到另一色，常见于高端香水瓶设计。`,
  },
  {
    id: 'q_ch10_219',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"透明喷涂（透喷）" 的英文是（___）。`,
    questionEn: `"透明喷涂（透喷）" 的英文是（___）。`,
    answer: `Transparent Color Coating`,
    explanationZh: `可透过涂层看到玻璃内部，区别于实色喷涂（Solid Color Coating）。`,
    explanationEn: `可透过涂层看到玻璃内部，区别于实色喷涂（Solid Color Coating）。`,
  },
  {
    id: 'q_ch10_220',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"橡胶漆" 的英文是（___）。`,
    questionEn: `"橡胶漆" 的英文是（___）。`,
    answer: `Rubber Coating / Soft Touch`,
    explanationZh: `表面柔软防滑，哑面阻尼手感，质感高级。`,
    explanationEn: `表面柔软防滑，哑面阻尼手感，质感高级。`,
  },
  {
    id: 'q_ch10_221',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"裂纹效果" 的英文是（___）。`,
    questionEn: `"裂纹效果" 的英文是（___）。`,
    answer: `Cracking`,
    explanationZh: `仿岩石开裂纹理效果，艺术感强，属特殊质感工艺。`,
    explanationEn: `仿岩石开裂纹理效果，艺术感强，属特殊质感工艺。`,
  },
  {
    id: 'q_ch10_222',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"滴胶" 的英文是（___）。`,
    questionEn: `"滴胶" 的英文是（___）。`,
    answer: `Epoxy`,
    explanationZh: `将透明树脂滴入 LOGO 凹槽，固化后呈现立体亮面效果。`,
    explanationEn: `将透明树脂滴入 LOGO 凹槽，固化后呈现立体亮面效果。`,
  },
  {
    id: 'q_ch10_223',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"锌铝合金盖" 的英文是（___）。`,
    questionEn: `"锌铝合金盖" 的英文是（___）。`,
    answer: `Zamac Cap / Zinc Alloy Cap`,
    explanationZh: `Zamak/Zamac 即锌铝合金，重量感好，中东高端市场常用。`,
    explanationEn: `Zamak/Zamac 即锌铝合金，重量感好，中东高端市场常用。`,
  },
  {
    id: 'q_ch10_224',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"沙林盖" 的英文是（___）。`,
    questionEn: `"沙林盖" 的英文是（___）。`,
    answer: `Surlyn Cap`,
    explanationZh: `高透明，仿水晶感，常见于欧式设计，沙林是离聚物材料。`,
    explanationEn: `高透明，仿水晶感，常见于欧式设计，沙林是离聚物材料。`,
  },
  {
    id: 'q_ch10_225',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"流苏" 的英文是（___）。`,
    questionEn: `"流苏" 的英文是（___）。`,
    answer: `Tassel`,
    explanationZh: `常通过龙虾扣（Lobster Clasp）挂在瓶身，海关编码 3926400000。`,
    explanationEn: `常通过龙虾扣（Lobster Clasp）挂在瓶身，海关编码 3926400000。`,
  },
  {
    id: 'q_ch10_226',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"封口机" 的英文是（___）。`,
    questionEn: `"封口机" 的英文是（___）。`,
    answer: `Crimping Machine`,
    explanationZh: `用于将卡口（Crimp）喷头压接固定在瓶口，卡口款必须使用封口机。`,
    explanationEn: `用于将卡口（Crimp）喷头压接固定在瓶口，卡口款必须使用封口机。`,
  },
  {
    id: 'q_ch10_227',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"试香纸" 的英文是（___）。`,
    questionEn: `"试香纸" 的英文是（___）。`,
    answer: `Blotter / Perfume Scent Card`,
    explanationZh: `展会或门店供客户试香使用，也是产品8种包装类型之一。`,
    explanationEn: `展会或门店供客户试香使用，也是产品8种包装类型之一。`,
  },
  {
    id: 'q_ch10_228',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"卡口喷头" 的英文是（___）。`,
    questionEn: `"卡口喷头" 的英文是（___）。`,
    answer: `Crimp Pump`,
    explanationZh: `Crimp Pump 压接卡固，不可拆卸，为日常零售款最常见封口方式。`,
    explanationEn: `Crimp Pump 压接卡固，不可拆卸，为日常零售款最常见封口方式。`,
  },
  {
    id: 'q_ch10_229',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"Rigid Box" 的中文是（___）。`,
    questionEn: `"Rigid Box" 的中文是（___）。`,
    answer: `手工精品盒`,
    explanationZh: `海关编码 4819200000，含翻盖书型（Book Shape）和抽屉盒（Drawer）等款式。`,
    explanationEn: `海关编码 4819200000，含翻盖书型（Book Shape）和抽屉盒（Drawer）等款式。`,
  },
  {
    id: 'q_ch10_230',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `"EVA Liner" 的中文是（___）。`,
    questionEn: `"EVA Liner" 的中文是（___）。`,
    answer: `EVA 内托（Ethylene Vinyl Acetate）`,
    explanationZh: `发泡材料，可定制切槽固定瓶身，常用于精品盒内部保护。`,
    explanationEn: `发泡材料，可定制切槽固定瓶身，常用于精品盒内部保护。`,
  },
  {
    id: 'q_ch10_231',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `"Matt Lamination" 的中文是（___）。`,
    questionEn: `"Matt Lamination" 的中文是（___）。`,
    answer: `哑胶`,
    explanationZh: `纸盒哑光覆膜，质感低调；相对应的是 Glossy Lamination（光胶）。`,
    explanationEn: `纸盒哑光覆膜，质感低调；相对应的是 Glossy Lamination（光胶）。`,
  },
  {
    id: 'q_ch10_232',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `"Blotter" 的中文是（___）。`,
    questionEn: `"Blotter" 的中文是（___）。`,
    answer: `试香纸`,
    explanationZh: `不要混淆 Blotter（试香纸）与 Corrugated paper（瓦楞纸）。`,
    explanationEn: `不要混淆 Blotter（试香纸）与 Corrugated paper（瓦楞纸）。`,
  },
  {
    id: 'q_ch10_233',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `公模标准款（现有瓶型）的最低起订量（MOQ）是_____ pcs。`,
    questionEn: `公模标准款（现有瓶型）的最低起订量（MOQ）是_____ pcs。`,
    answer: `10,000 pcs`,
    explanationZh: `定制款 MOQ 更高，为 20,000–30,000 pcs；公模款为 10,000 pcs。`,
    explanationEn: `定制款 MOQ 更高，为 20,000–30,000 pcs；公模款为 10,000 pcs。`,
  },
  {
    id: 'q_ch10_234',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `香水标牌（Custom Plate）的最低起订量是_____ pcs（标准金/银色）。`,
    questionEn: `香水标牌（Custom Plate）的最低起订量是_____ pcs（标准金/银色）。`,
    answer: `3,000 pcs`,
    explanationZh: `标牌 MOQ 较低（3K），中套标准色 MOQ 为 10K，定制色 MOQ 为 30K。`,
    explanationEn: `标牌 MOQ 较低（3K），中套标准色 MOQ 为 10K，定制色 MOQ 为 30K。`,
  },
  {
    id: 'q_ch10_235',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `当客户数量在 5,000–10,000 pcs 之间时，应推荐___；介绍时应称为"_____"而非"库存"。`,
    questionEn: `当客户数量在 5,000–10,000 pcs 之间时，应推荐___；介绍时应称为"_____"而非"库存"。`,
    answer: `热销款（库存产品）；"热销品"`,
    explanationZh: `说"热销品"而非"库存"，能更好地体现产品价值，避免客户产生低价联想。`,
    explanationEn: `说"热销品"而非"库存"，能更好地体现产品价值，避免客户产生低价联想。`,
  },
  {
    id: 'q_ch10_236',
    chapterId: 'ch10',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `菲利包装的一分钟电梯话术要点：公司名称、专注_____包装超过_____年、提供_____定制服务、自有_____和_____、主要市场为欧美和中东。`,
    questionEn: `菲利包装的一分钟电梯话术要点：公司名称、专注_____包装超过_____年、提供_____定制服务、自有_____和_____、主要市场为欧美和中东。`,
    answer: `高端香水；10；ODM/OEM；工厂；设计团队`,
    explanationZh: `电梯话术必须能在 1 分钟内清晰说完，包含公司定位、核心优势、目标市场三要素。`,
    explanationEn: `电梯话术必须能在 1 分钟内清晰说完，包含公司定位、核心优势、目标市场三要素。`,
  },
  {
    id: 'q_ch10_237',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `中套标准色（金/银）的 MOQ 是多少？`,
    questionEn: `中套标准色（金/银）的 MOQ 是多少？`,
    options: [
      { key: 'A', textZh: `3,000 pcs`, textEn: `3,000 pcs` },
      { key: 'B', textZh: `5,000 pcs`, textEn: `5,000 pcs` },
      { key: 'C', textZh: `10,000 pcs`, textEn: `10,000 pcs` },
      { key: 'D', textZh: `30,000 pcs`, textEn: `30,000 pcs` },
    ],
    answer: `C`,
    explanationZh: `标准色中套 MOQ 10K；定制颜色中套 MOQ 30K；锌合金材质定制 MOQ 10K。`,
    explanationEn: `标准色中套 MOQ 10K；定制颜色中套 MOQ 30K；锌合金材质定制 MOQ 10K。`,
  },
  {
    id: 'q_ch10_238',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `每种工艺或 LOGO 颜色的 MOQ 一般是多少？`,
    questionEn: `每种工艺或 LOGO 颜色的 MOQ 一般是多少？`,
    options: [
      { key: 'A', textZh: `5,000 pcs`, textEn: `5,000 pcs` },
      { key: 'B', textZh: `10,000 pcs`, textEn: `10,000 pcs` },
      { key: 'C', textZh: `20,000 pcs`, textEn: `20,000 pcs` },
      { key: 'D', textZh: `30,000 pcs`, textEn: `30,000 pcs` },
    ],
    answer: `B`,
    explanationZh: `每种颜色/工艺各自独立计算 MOQ（10K）；老客户特殊情况可协商至 5K。`,
    explanationEn: `每种颜色/工艺各自独立计算 MOQ（10K）；老客户特殊情况可协商至 5K。`,
  },
  {
    id: 'q_ch10_239',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `"Frosting" 对应哪种中文工艺？`,
    questionEn: `"Frosting" 对应哪种中文工艺？`,
    options: [
      { key: 'A', textZh: `烫金`, textEn: `烫金` },
      { key: 'B', textZh: `植绒`, textEn: `植绒` },
      { key: 'C', textZh: `蒙沙`, textEn: `蒙沙` },
      { key: 'D', textZh: `裂纹`, textEn: `裂纹` },
    ],
    answer: `C`,
    explanationZh: `Frosting = 蒙沙，磨砂哑光效果；Flocking = 植绒；Hot Stamping = 烫金。`,
    explanationEn: `Frosting = 蒙沙，磨砂哑光效果；Flocking = 植绒；Hot Stamping = 烫金。`,
  },
  {
    id: 'q_ch10_240',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `"Surlyn Cap" 的中文是什么？`,
    questionEn: `"Surlyn Cap" 的中文是什么？`,
    options: [
      { key: 'A', textZh: `锌铝合金盖`, textEn: `锌铝合金盖` },
      { key: 'B', textZh: `沙林盖`, textEn: `沙林盖` },
      { key: 'C', textZh: `木盖`, textEn: `木盖` },
      { key: 'D', textZh: `K料盖`, textEn: `K料盖` },
    ],
    answer: `B`,
    explanationZh: `Surlyn（沙林）是离聚物材料，高透明仿水晶感，欧式设计常见。`,
    explanationEn: `Surlyn（沙林）是离聚物材料，高透明仿水晶感，欧式设计常见。`,
  },
  {
    id: 'q_ch10_241',
    chapterId: 'ch10',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `折叠卡盒（Folding Box）的海关编码是？`,
    questionEn: `折叠卡盒（Folding Box）的海关编码是？`,
    options: [
      { key: 'A', textZh: `7010909000`, textEn: `7010909000` },
      { key: 'B', textZh: `3923500000`, textEn: `3923500000` },
      { key: 'C', textZh: `4819200000`, textEn: `4819200000` },
      { key: 'D', textZh: `9616100000`, textEn: `9616100000` },
    ],
    answer: `C`,
    explanationZh: `纸盒（精品盒/折叠盒）海关编码均为 4819200000；纸袋为 4819400000。`,
    explanationEn: `纸盒（精品盒/折叠盒）海关编码均为 4819200000；纸袋为 4819400000。`,
  },
  {
    id: 'q_ch13_242',
    chapterId: 'ch13',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `铝（Aluminium）的密度是_____ g/cm³。`,
    questionEn: `铝（Aluminium）的密度是_____ g/cm³。`,
    answer: `2.79 g/cm³`,
    explanationZh: `铝最轻，常用于铝标牌、中套、电化铝盖等；轻盈是其核心卖点。`,
    explanationEn: `铝最轻，常用于铝标牌、中套、电化铝盖等；轻盈是其核心卖点。`,
  },
  {
    id: 'q_ch13_243',
    chapterId: 'ch13',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `锌合金（Zamac / Zinc Alloy）的密度是_____ g/cm³。`,
    questionEn: `锌合金（Zamac / Zinc Alloy）的密度是_____ g/cm³。`,
    answer: `6.8 g/cm³`,
    explanationZh: `锌合金密度约为铝的 2.4 倍，重量感强是其核心卖点，中东高端市场喜爱。`,
    explanationEn: `锌合金密度约为铝的 2.4 倍，重量感强是其核心卖点，中东高端市场喜爱。`,
  },
  {
    id: 'q_ch13_244',
    chapterId: 'ch13',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `不锈钢（Stainless Steel）的密度是_____ g/cm³。`,
    questionEn: `不锈钢（Stainless Steel）的密度是_____ g/cm³。`,
    answer: `7.9 g/cm³`,
    explanationZh: `不锈钢密度仅次于铜，常用于不锈钢标牌，结合腐蚀工艺质感出众。`,
    explanationEn: `不锈钢密度仅次于铜，常用于不锈钢标牌，结合腐蚀工艺质感出众。`,
  },
  {
    id: 'q_ch13_245',
    chapterId: 'ch13',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `金属产品重量计算公式：长（mm）× 宽（mm）× _____（mm）× _____ ÷ 1000 = 重量（g）。`,
    questionEn: `金属产品重量计算公式：长（mm）× 宽（mm）× _____（mm）× _____ ÷ 1000 = 重量（g）。`,
    answer: `厚度；密度`,
    explanationZh: `公式：长×宽×厚×密度÷1000，单位换算：mm³ → cm³ 需除以 1000。`,
    explanationEn: `公式：长×宽×厚×密度÷1000，单位换算：mm³ → cm³ 需除以 1000。`,
  },
  {
    id: 'q_ch13_246',
    chapterId: 'ch13',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `铝标牌尺寸 50mm × 30mm，厚度 1.5mm，铝密度 2.79 g/cm³，计算其重量约为_____ g。`,
    questionEn: `铝标牌尺寸 50mm × 30mm，厚度 1.5mm，铝密度 2.79 g/cm³，计算其重量约为_____ g。`,
    answer: `6.28 g（50×30×1.5×2.79÷1000≈6.28）`,
    explanationZh: `计算步骤：50×30=1500，×1.5=2250，×2.79=6277.5，÷1000≈6.28g。`,
    explanationEn: `计算步骤：50×30=1500，×1.5=2250，×2.79=6277.5，÷1000≈6.28g。`,
  },
  {
    id: 'q_ch13_247',
    chapterId: 'ch13',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `常规铝标牌的厚度规格是？`,
    questionEn: `常规铝标牌的厚度规格是？`,
    options: [
      { key: 'A', textZh: `0.1 mm`, textEn: `0.1 mm` },
      { key: 'B', textZh: `0.3 mm`, textEn: `0.3 mm` },
      { key: 'C', textZh: `1.0 mm`, textEn: `1.0 mm` },
      { key: 'D', textZh: `1.5 mm`, textEn: `1.5 mm` },
    ],
    answer: `B`,
    explanationZh: `常规铝标牌厚 0.3mm；需要 3D 凸字/凹字效果的用 0.4–0.5mm；锌合金标牌厚 1.5–3mm。`,
    explanationEn: `常规铝标牌厚 0.3mm；需要 3D 凸字/凹字效果的用 0.4–0.5mm；锌合金标牌厚 1.5–3mm。`,
  },
  {
    id: 'q_ch13_248',
    chapterId: 'ch13',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `锌合金标牌常规厚度范围是？`,
    questionEn: `锌合金标牌常规厚度范围是？`,
    options: [
      { key: 'A', textZh: `0.3–0.5 mm`, textEn: `0.3–0.5 mm` },
      { key: 'B', textZh: `0.5–1.0 mm`, textEn: `0.5–1.0 mm` },
      { key: 'C', textZh: `1.5–3 mm`, textEn: `1.5–3 mm` },
      { key: 'D', textZh: `3–5 mm`, textEn: `3–5 mm` },
    ],
    answer: `C`,
    explanationZh: `锌合金标牌厚 1.5–3mm，厚实感强；铝标牌常规 0.3mm，最薄最轻。`,
    explanationEn: `锌合金标牌厚 1.5–3mm，厚实感强；铝标牌常规 0.3mm，最薄最轻。`,
  },
  {
    id: 'q_ch14_249',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `公司接受的 4 种付款方式是：_____、_____、_____、_____。`,
    questionEn: `公司接受的 4 种付款方式是：_____、_____、_____、_____。`,
    answer: `TT（电汇）、PayPal、WU（西联汇款）、L/C（信用证）`,
    explanationZh: `TT 是最常用方式；PayPal 需注意手续费；WU 适合小额；L/C 需提前协商条件。`,
    explanationEn: `TT 是最常用方式；PayPal 需注意手续费；WU 适合小额；L/C 需提前协商条件。`,
  },
  {
    id: 'q_ch14_250',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `通过 PayPal 收款时，需要在报价中额外考虑_____% 的手续费。`,
    questionEn: `通过 PayPal 收款时，需要在报价中额外考虑_____% 的手续费。`,
    answer: `4.5%`,
    explanationZh: `PayPal 手续费为 4.5%，报价时必须将此费用计入，否则会亏损。`,
    explanationEn: `PayPal 手续费为 4.5%，报价时必须将此费用计入，否则会亏损。`,
  },
  {
    id: 'q_ch14_251',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `西联汇款（Western Union）适合_____ 美金以下的小额付款，手续费由_____承担。`,
    questionEn: `西联汇款（Western Union）适合_____ 美金以下的小额付款，手续费由_____承担。`,
    answer: `2,000；客户`,
    explanationZh: `WU 在欧洲市场常见，只需提供收款人名称，小额付款快速便捷。`,
    explanationEn: `WU 在欧洲市场常见，只需提供收款人名称，小额付款快速便捷。`,
  },
  {
    id: 'q_ch14_252',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `订单金额小于 $10,000 时，订金比例为_____；金额 ≥ $10,000 时，订金比例为_____。`,
    questionEn: `订单金额小于 $10,000 时，订金比例为_____；金额 ≥ $10,000 时，订金比例为_____。`,
    answer: `50%；30%`,
    explanationZh: `尾款必须在出货前结清，无特殊约定不得先出货后收款。`,
    explanationEn: `尾款必须在出货前结清，无特殊约定不得先出货后收款。`,
  },
  {
    id: 'q_ch14_253',
    chapterId: 'ch14',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下哪种付款方式的手续费由卖方（我们）承担？`,
    questionEn: `以下哪种付款方式的手续费由卖方（我们）承担？`,
    options: [
      { key: 'A', textZh: `TT（电汇）`, textEn: `TT（电汇）` },
      { key: 'B', textZh: `Western Union（西联）`, textEn: `Western Union（西联）` },
      { key: 'C', textZh: `PayPal`, textEn: `PayPal` },
      { key: 'D', textZh: `L/C（信用证）`, textEn: `L/C（信用证）` },
    ],
    answer: `C`,
    explanationZh: `PayPal 手续费 4.5% 由收款方（我们）承担，需在报价中加入；WU 手续费由付款方（客户）承担。`,
    explanationEn: `PayPal 手续费 4.5% 由收款方（我们）承担，需在报价中加入；WU 手续费由付款方（客户）承担。`,
  },
  {
    id: 'q_ch14_254',
    chapterId: 'ch14',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `信用证（L/C）的正确英文全称是？`,
    questionEn: `信用证（L/C）的正确英文全称是？`,
    options: [
      { key: 'A', textZh: `Line of Credit`, textEn: `Line of Credit` },
      { key: 'B', textZh: `Letter of Confirmation`, textEn: `Letter of Confirmation` },
      { key: 'C', textZh: `Letter of Credit`, textEn: `Letter of Credit` },
      { key: 'D', textZh: `Local Credit`, textEn: `Local Credit` },
    ],
    answer: `C`,
    explanationZh: `L/C = Letter of Credit（信用证），是银行为买方担保付款的贸易融资工具。`,
    explanationEn: `L/C = Letter of Credit（信用证），是银行为买方担保付款的贸易融资工具。`,
  },
  {
    id: 'q_ch14_255',
    chapterId: 'ch14',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `以下说法正确的是？`,
    questionEn: `以下说法正确的是？`,
    options: [
      { key: 'A', textZh: `大单（≥$10,000）订金为 50%，小单为 30%`, textEn: `大单（≥$10,000）订金为 50%，小单为 30%` },
      { key: 'B', textZh: `小单（<$10,000）订金为 50%，大单为 30%`, textEn: `小单（<$10,000）订金为 50%，大单为 30%` },
      { key: 'C', textZh: `所有订单统一 30% 订金`, textEn: `所有订单统一 30% 订金` },
      { key: 'D', textZh: `信用证客户不需要预付订金`, textEn: `信用证客户不需要预付订金` },
    ],
    answer: `B`,
    explanationZh: `小单（<$10K）→ 50% 订金；大单（≥$10K）→ 30% 订金，尾款出货前结清。`,
    explanationEn: `小单（<$10K）→ 50% 订金；大单（≥$10K）→ 30% 订金，尾款出货前结清。`,
  },
  {
    id: 'q_ch14_256',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `EXW（出厂价）的含义是：_____，客户自行安排提货，不含任何_____。`,
    questionEn: `EXW（出厂价）的含义是：_____，客户自行安排提货，不含任何_____。`,
    answer: `货物做完后的出厂价格；运费和税费`,
    explanationZh: `EXW 是最基础的报价方式，卖方只负责将货物备好，其余均由买方负责。`,
    explanationEn: `EXW 是最基础的报价方式，卖方只负责将货物备好，其余均由买方负责。`,
  },
  {
    id: 'q_ch14_257',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `FOB（离岸价）在 EXW 基础上额外包含：_____，约合人民币_____左右。`,
    questionEn: `FOB（离岸价）在 EXW 基础上额外包含：_____，约合人民币_____左右。`,
    answer: `国内货代费、报关费、内陆运输费等（装船前所有费用）；2,000 元`,
    explanationZh: `FOB = 产品 + 出口港装船前产生的国内费用，是最常用的国际贸易报价方式之一。`,
    explanationEn: `FOB = 产品 + 出口港装船前产生的国内费用，是最常用的国际贸易报价方式之一。`,
  },
  {
    id: 'q_ch14_258',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `CIF（到岸价）= FOB + _____ + _____。`,
    questionEn: `CIF（到岸价）= FOB + _____ + _____。`,
    answer: `国际运费（海运或空运）；保险费`,
    explanationZh: `CIF 是 Cost, Insurance & Freight 的缩写，具体运费需按货量向货代询价。`,
    explanationEn: `CIF 是 Cost, Insurance & Freight 的缩写，具体运费需按货量向货代询价。`,
  },
  {
    id: 'q_ch14_259',
    chapterId: 'ch14',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `DDP（门到门价）包含所有费用，其中包括目的地的_____及当地_____。`,
    questionEn: `DDP（门到门价）包含所有费用，其中包括目的地的_____及当地_____。`,
    answer: `关税；税费`,
    explanationZh: `DDP = Delivered Duty Paid，是最全包的报价方式，客户无需承担任何额外费用。`,
    explanationEn: `DDP = Delivered Duty Paid，是最全包的报价方式，客户无需承担任何额外费用。`,
  },
  {
    id: 'q_ch14_260',
    chapterId: 'ch14',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `客户询问 CIF 报价时，以下哪项说法正确？`,
    questionEn: `客户询问 CIF 报价时，以下哪项说法正确？`,
    options: [
      { key: 'A', textZh: `CIF 不含保险费`, textEn: `CIF 不含保险费` },
      { key: 'B', textZh: `CIF = 产品价格，不含运费`, textEn: `CIF = 产品价格，不含运费` },
      { key: 'C', textZh: `CIF = FOB + 运费 + 保险`, textEn: `CIF = FOB + 运费 + 保险` },
      { key: 'D', textZh: `CIF 和 DDP 完全相同`, textEn: `CIF 和 DDP 完全相同` },
    ],
    answer: `C`,
    explanationZh: `CIF = Cost（产品）+ Insurance（保险）+ Freight（运费），客户到港后还需自行处理清关和关税。`,
    explanationEn: `CIF = Cost（产品）+ Insurance（保险）+ Freight（运费），客户到港后还需自行处理清关和关税。`,
  },
  {
    id: 'q_ch14_261',
    chapterId: 'ch14',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `哪种报价方式对买方最省事（全包含关税）？`,
    questionEn: `哪种报价方式对买方最省事（全包含关税）？`,
    options: [
      { key: 'A', textZh: `EXW`, textEn: `EXW` },
      { key: 'B', textZh: `FOB`, textEn: `FOB` },
      { key: 'C', textZh: `CIF`, textEn: `CIF` },
      { key: 'D', textZh: `DDP`, textEn: `DDP` },
    ],
    answer: `D`,
    explanationZh: `DDP（门到门价）对买方最省事，卖方承担所有费用直至送到客户指定地点，包括目的地关税。`,
    explanationEn: `DDP（门到门价）对买方最省事，卖方承担所有费用直至送到客户指定地点，包括目的地关税。`,
  },
  {
    id: 'q_ch14_262',
    chapterId: 'ch14',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `以下报价方式从"卖方责任最小"到"卖方责任最大"排序正确的是？`,
    questionEn: `以下报价方式从"卖方责任最小"到"卖方责任最大"排序正确的是？`,
    options: [
      { key: 'A', textZh: `EXW → FOB → CIF → DDP`, textEn: `EXW → FOB → CIF → DDP` },
      { key: 'B', textZh: `FOB → EXW → DDP → CIF`, textEn: `FOB → EXW → DDP → CIF` },
      { key: 'C', textZh: `DDP → CIF → FOB → EXW`, textEn: `DDP → CIF → FOB → EXW` },
      { key: 'D', textZh: `CIF → FOB → EXW → DDP`, textEn: `CIF → FOB → EXW → DDP` },
    ],
    answer: `A`,
    explanationZh: `EXW 卖方责任最小（仅出厂），DDP 卖方责任最大（送到目的地含关税），依次为 EXW→FOB→CIF→DDP。`,
    explanationEn: `EXW 卖方责任最小（仅出厂），DDP 卖方责任最大（送到目的地含关税），依次为 EXW→FOB→CIF→DDP。`,
  },
  {
    id: 'q_ch15_263',
    chapterId: 'ch15',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `客户成单标准流程共_____个步骤，从客户_____开始，到_____结束。`,
    questionEn: `客户成单标准流程共_____个步骤，从客户_____开始，到_____结束。`,
    answer: `12；询盘（Inquire）；订单完成归档（Done）`,
    explanationZh: `12步完整闭环：询盘→报价→确认PI→收定金→生产→完工→询货代→订舱→入仓→开船→提单→归档。`,
    explanationEn: `12步完整闭环：询盘→报价→确认PI→收定金→生产→完工→询货代→订舱→入仓→开船→提单→归档。`,
  },
  {
    id: 'q_ch15_264',
    chapterId: 'ch15',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `流程第 3 步"确认订单"时，需向客户出具_____（简称 PI）或商业发票（CI）。`,
    questionEn: `流程第 3 步"确认订单"时，需向客户出具_____（简称 PI）或商业发票（CI）。`,
    answer: `形式合同（Proforma Invoice）`,
    explanationZh: `PI = Proforma Invoice（形式合同），是正式开始执行订单的书面依据。`,
    explanationEn: `PI = Proforma Invoice（形式合同），是正式开始执行订单的书面依据。`,
  },
  {
    id: 'q_ch15_265',
    chapterId: 'ch15',
    type: 'fill',
    difficulty: 'hard',
    questionZh: `流程第 4 步"客户付定金"后，才能进入第 5 步_____ 阶段；收到定金前不得_____。`,
    questionEn: `流程第 4 步"客户付定金"后，才能进入第 5 步_____ 阶段；收到定金前不得_____。`,
    answer: `下单生产（Produce）；提前安排生产`,
    explanationZh: `收定金是启动生产的前提条件，这是公司财务风险控制的底线。`,
    explanationEn: `收定金是启动生产的前提条件，这是公司财务风险控制的底线。`,
  },
  {
    id: 'q_ch15_266',
    chapterId: 'ch15',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `流程第 7 步"询问货代"需要确认的信息包括：_____、是否有指定货代、以及快递需提前确认_____。`,
    questionEn: `流程第 7 步"询问货代"需要确认的信息包括：_____、是否有指定货代、以及快递需提前确认_____。`,
    answer: `运输方式（海运/空运/快递/国内交货）；客户的国际快递账号`,
    explanationZh: `快递账号需提前拿到，否则无法安排出货，会影响交期。`,
    explanationEn: `快递账号需提前拿到，否则无法安排出货，会影响交期。`,
  },
  {
    id: 'q_ch15_267',
    chapterId: 'ch15',
    type: 'fill',
    difficulty: 'medium',
    questionZh: `流程第 11 步领取提单（B/L）后，如果客户尚未付清尾款，应_____；若已约定电放提单，则_____。`,
    questionEn: `流程第 11 步领取提单（B/L）后，如果客户尚未付清尾款，应_____；若已约定电放提单，则_____。`,
    answer: `凭正本提单控货，通知客户付尾款后再放单；发邮件给客户确认电放`,
    explanationZh: `正本提单是控制货物的关键凭证，未收尾款前切勿放弃对提单的控制。`,
    explanationEn: `正本提单是控制货物的关键凭证，未收尾款前切勿放弃对提单的控制。`,
  },
  {
    id: 'q_ch15_268',
    chapterId: 'ch15',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `正本提单（Original B/L）的核心作用是？`,
    questionEn: `正本提单（Original B/L）的核心作用是？`,
    options: [
      { key: 'A', textZh: `证明货物已装船出发`, textEn: `证明货物已装船出发` },
      { key: 'B', textZh: `控制货物放行权，未付尾款前不可放单`, textEn: `控制货物放行权，未付尾款前不可放单` },
      { key: 'C', textZh: `向客户收取尾款的收据`, textEn: `向客户收取尾款的收据` },
      { key: 'D', textZh: `货代订舱的凭证`, textEn: `货代订舱的凭证` },
    ],
    answer: `B`,
    explanationZh: `正本提单控货：持单方才有权提货，未收尾款前不可放单，除非约定了电放（Telex Release）。`,
    explanationEn: `正本提单控货：持单方才有权提货，未收尾款前不可放单，除非约定了电放（Telex Release）。`,
  },
  {
    id: 'q_ch15_269',
    chapterId: 'ch15',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `出口到沙特阿拉伯，除常规单证外，还必须提供什么特殊证件？`,
    questionEn: `出口到沙特阿拉伯，除常规单证外，还必须提供什么特殊证件？`,
    options: [
      { key: 'A', textZh: `CE认证`, textEn: `CE认证` },
      { key: 'B', textZh: `CO证书（产地证），且外箱必须标注 MADE IN CHINA`, textEn: `CO证书（产地证），且外箱必须标注 MADE IN CHINA` },
      { key: 'C', textZh: `ISO证书`, textEn: `ISO证书` },
      { key: 'D', textZh: `SGS检测报告`, textEn: `SGS检测报告` },
    ],
    answer: `B`,
    explanationZh: `沙特要求：① CO（Certificate of Origin 产地证）② 外箱 MADE IN CHINA 字样，缺一会被拒绝清关。`,
    explanationEn: `沙特要求：① CO（Certificate of Origin 产地证）② 外箱 MADE IN CHINA 字样，缺一会被拒绝清关。`,
  },
  {
    id: 'q_ch15_270',
    chapterId: 'ch15',
    type: 'choice',
    difficulty: 'hard',
    questionZh: `出口到欧洲时，必须使用的托盘规格是？`,
    questionEn: `出口到欧洲时，必须使用的托盘规格是？`,
    options: [
      { key: 'A', textZh: `60 × 100 cm`, textEn: `60 × 100 cm` },
      { key: 'B', textZh: `80 × 120 cm`, textEn: `80 × 120 cm` },
      { key: 'C', textZh: `100 × 120 cm`, textEn: `100 × 120 cm` },
      { key: 'D', textZh: `100 × 140 cm`, textEn: `100 × 140 cm` },
    ],
    answer: `B`,
    explanationZh: `欧洲标准托盘为 80×120cm，与中国标准不同，错误规格会导致清关和仓库问题。`,
    explanationEn: `欧洲标准托盘为 80×120cm，与中国标准不同，错误规格会导致清关和仓库问题。`,
  },
  {
    id: 'q_ch15_271',
    chapterId: 'ch15',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `货量约 8 个托盘但不足一个 20 尺柜时，推荐哪种运输方式？`,
    questionEn: `货量约 8 个托盘但不足一个 20 尺柜时，推荐哪种运输方式？`,
    options: [
      { key: 'A', textZh: `散货（LCL）更经济，推荐散货`, textEn: `散货（LCL）更经济，推荐散货` },
      { key: 'B', textZh: `建议走整柜（FCL），目的港散货清关费用极高`, textEn: `建议走整柜（FCL），目的港散货清关费用极高` },
      { key: 'C', textZh: `空运更划算`, textEn: `空运更划算` },
      { key: 'D', textZh: `先问客户预算再决定`, textEn: `先问客户预算再决定` },
    ],
    answer: `B`,
    explanationZh: `约 8 个托盘推荐整柜（FCL）：目的港 LCL 散货清关费用极高，整柜综合成本更低。`,
    explanationEn: `约 8 个托盘推荐整柜（FCL）：目的港 LCL 散货清关费用极高，整柜综合成本更低。`,
  },
  {
    id: 'q_ch15_272',
    chapterId: 'ch15',
    type: 'choice',
    difficulty: 'easy',
    questionZh: `流程的哪个步骤中需要联系货代订舱并向报关公司提供单证资料？`,
    questionEn: `流程的哪个步骤中需要联系货代订舱并向报关公司提供单证资料？`,
    options: [
      { key: 'A', textZh: `第 6 步 — 产品完成`, textEn: `第 6 步 — 产品完成` },
      { key: 'B', textZh: `第 7 步 — 询问货代`, textEn: `第 7 步 — 询问货代` },
      { key: 'C', textZh: `第 8 步 — 订舱报关`, textEn: `第 8 步 — 订舱报关` },
      { key: 'D', textZh: `第 9 步 — 入仓交货`, textEn: `第 9 步 — 入仓交货` },
    ],
    answer: `C`,
    explanationZh: `第 8 步订舱报关：联系货代订舱、填订舱单，同时通知报关公司制作报关资料。`,
    explanationEn: `第 8 步订舱报关：联系货代订舱、填订舱单，同时通知报关公司制作报关资料。`,
  },
  {
    id: 'q_ch15_273',
    chapterId: 'ch15',
    type: 'choice',
    difficulty: 'medium',
    questionZh: `下列哪个选项正确描述了"电放提单（Telex Release）"？`,
    questionEn: `下列哪个选项正确描述了"电放提单（Telex Release）"？`,
    options: [
      { key: 'A', textZh: `通过电报发送实体提单`, textEn: `通过电报发送实体提单` },
      { key: 'B', textZh: `卖方电话通知货代放货，不需要提单`, textEn: `卖方电话通知货代放货，不需要提单` },
      { key: 'C', textZh: `无需寄送正本提单，货代在目的港凭电放指示放货，卖方以邮件通知客户`, textEn: `无需寄送正本提单，货代在目的港凭电放指示放货，卖方以邮件通知客户` },
      { key: 'D', textZh: `电子发票替代提单`, textEn: `电子发票替代提单` },
    ],
    answer: `C`,
    explanationZh: `电放（Telex Release）：卖方指示货代在目的港直接放货，客户无需提交正本提单；卖方发邮件确认即可。`,
    explanationEn: `电放（Telex Release）：卖方指示货代在目的港直接放货，客户无需提交正本提单；卖方发邮件确认即可。`,
  },
  {
    id: 'q_ch15_274',
    chapterId: 'ch15',
    type: 'fill',
    difficulty: 'easy',
    questionZh: `订单完成的最后一步（第12步）包括：确认_____，并将订单_____。`,
    questionEn: `订单完成的最后一步（第12步）包括：确认_____，并将订单_____。`,
    answer: `客户收货；归档`,
    explanationZh: `订单归档便于日后查询、售后处理和项目复盘，是良好订单管理的必要环节。`,
    explanationEn: `订单归档便于日后查询、售后处理和项目复盘，是良好订单管理的必要环节。`,
  },
];
