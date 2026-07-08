// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Knowledge Base & Question Bank
//  Source: DOC-001 香水包装产品知识手册 V3
// ═══════════════════════════════════════════════════════

const CHAPTERS = [
  // ────────────────────────────────────────────────────
  {
    id: 'ch01', order: 1,
    titleZh: '公司介绍',
    titleEn: 'Company Introduction',
    estimatedMinutes: 10,
    sections: [
      {
        headingZh: '公司概况',
        headingEn: 'Company Overview',
        contentZh: `菲利包装（Fonli Packaging）是一家专注于香水及高端化妆品包装的专业制造商，拥有超过15年的行业经验。公司总部及工厂位于中国，服务全球客户，产品出口欧美、中东、东南亚等地区。`,
        contentEn: `Fonli Packaging (菲利包装) is a professional manufacturer specializing in perfume and high-end cosmetic packaging, with over 15 years of industry experience. Headquartered and manufactured in China, serving global clients with exports to Europe, Americas, Middle East, and Southeast Asia.`
      },
      {
        headingZh: '核心优势',
        headingEn: 'Core Strengths',
        contentZh: `• 一站式服务：从设计、打样、生产到出货，全流程管控\n• 自有工厂：不依赖外包，品质可控\n• 快速打样：标准打样周期7-15天\n• 小批量起订：支持MOQ 500-1000pcs起订\n• 定制能力：瓶型、颜色、印刷、配件全面定制`,
        contentEn: `• One-stop service: Design, sampling, production to shipment, full process control\n• Own factory: No outsourcing dependency, quality controllable\n• Fast sampling: Standard sampling cycle 7–15 days\n• Small MOQ: Supports MOQ 500–1000 pcs\n• Full customization: Bottle shape, color, printing, accessories`
      },
      {
        headingZh: '主要产品线',
        headingEn: 'Main Product Lines',
        contentZh: `1. 香水玻璃瓶（标准瓶 / 异形瓶 / 定制瓶）\n2. 香水盖（锌合金盖 / ABS盖 / 木盖 / 皮革盖）\n3. 香水泵头（标准泵 / 定制泵）\n4. 香水外包装盒（纸盒 / 礼盒 / 套装）\n5. 香水配件（领口 / 底座 / 标签）`,
        contentEn: `1. Perfume glass bottles (standard / special-shape / custom)\n2. Perfume caps (zinc alloy / ABS / wood / leather)\n3. Perfume pumps (standard / custom)\n4. Outer packaging boxes (carton / gift box / set)\n5. Perfume accessories (collar / base / label)`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch02', order: 2,
    titleZh: '定制工艺流程',
    titleEn: 'Custom Process Flow',
    estimatedMinutes: 12,
    sections: [
      {
        headingZh: '标准定制流程（12步）',
        headingEn: 'Standard Custom Process (12 Steps)',
        contentZh: `步骤1：需求沟通 — 了解客户产品定位、数量、预算、时间要求\n步骤2：方案提案 — 提供产品选型建议、参考图、报价\n步骤3：确认方案 — 客户确认款式、工艺、颜色\n步骤4：打样付款 — 客户支付打样费\n步骤5：3D效果图 — 提供渲染图供客户确认\n步骤6：样品制作 — 工厂开模/手板制作，7-15天\n步骤7：样品确认 — 客户收到样品后确认或提出修改\n步骤8：大货报价 — 基于确认样品出正式报价单\n步骤9：合同签署 — 签订采购合同/PI\n步骤10：预付款 — 客户支付定金（通常30%-50%）\n步骤11：大货生产 — 按合同生产，提供生产进度更新\n步骤12：出货尾款 — 验货通过后支付余款，安排出货`,
        contentEn: `Step 1: Requirement discussion — understand positioning, quantity, budget, timeline\nStep 2: Proposal — product selection, reference images, quotation\nStep 3: Confirm design — style, process, color confirmed\nStep 4: Sample payment — client pays sample fee\nStep 5: 3D rendering — provide render for confirmation\nStep 6: Sample production — mold opening / handcraft, 7–15 days\nStep 7: Sample confirmation — client confirms or requests revision\nStep 8: Bulk quotation — formal quote based on confirmed sample\nStep 9: Contract signing — purchase contract / PI signed\nStep 10: Deposit — client pays deposit (usually 30–50%)\nStep 11: Bulk production — production per contract with progress updates\nStep 12: Balance & shipment — balance paid after inspection, shipment arranged`
      },
      {
        headingZh: '打样周期与费用',
        headingEn: 'Sampling Lead Time & Cost',
        contentZh: `• 标准款打样：7-10个工作日，费用$100-$300（大货下单可抵扣）\n• 全新开模：15-25个工作日，费用$500-$3000（取决于复杂度）\n• 修改样品：3-7个工作日\n• 打样费通常在大货订单达到一定金额后全额抵扣`,
        contentEn: `• Standard sample: 7–10 business days, $100–$300 (deductible on bulk order)\n• New mold: 15–25 business days, $500–$3,000 (depends on complexity)\n• Revised sample: 3–7 business days\n• Sample fee usually fully deductible when bulk order reaches a threshold`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch03', order: 3,
    titleZh: '香水玻璃瓶',
    titleEn: 'Perfume Glass Bottles',
    estimatedMinutes: 20,
    sections: [
      {
        headingZh: '玻璃瓶材质与分类',
        headingEn: 'Glass Material & Classification',
        contentZh: `香水玻璃瓶按玻璃材质分为：\n• 钠钙玻璃（Soda-lime Glass）：最常见，成本低，适合大批量生产\n• 高硼硅玻璃（Borosilicate Glass）：耐高温、透明度高，成本较高\n• 铅晶质玻璃（Lead Crystal）：折射率高，光泽感强，高端市场使用\n\n按瓶型分为：\n• 标准瓶：方瓶、圆瓶、椭圆瓶等规则形状\n• 异形瓶：不规则造型，需要定制模具\n• 厚底瓶：底部加厚，视觉重量感强`,
        contentEn: `Perfume glass bottles by material:\n• Soda-lime glass: Most common, low cost, suitable for mass production\n• Borosilicate glass: Heat resistant, high transparency, higher cost\n• Lead crystal: High refractive index, strong luster, used in luxury market\n\nBy bottle shape:\n• Standard: Square, round, oval and other regular shapes\n• Special-shape: Irregular forms requiring custom molds\n• Thick-bottom: Thickened base for visual weight`
      },
      {
        headingZh: '表面处理工艺',
        headingEn: 'Surface Treatment Processes',
        contentZh: `• 烤漆（Spray Painting）：在瓶身喷涂颜色漆，颜色丰富，可做渐变\n• 电镀（Electroplating）：金属质感涂层，常见金色、银色、玫瑰金\n• 磨砂（Frosting/Sandblasting）：表面磨砂处理，磨砂/哑光质感\n• 烫金/烫银（Hot Stamping）：局部金属箔烫印，用于logo或图案\n• 丝印（Screen Printing）：直接在瓶身印刷图案或文字，颜色准确\n• 贴标（Labeling）：粘贴不干胶标签，灵活，适合小批量\n• UV印刷：高精度全彩印刷，可打印照片级图案\n• 酸蚀（Acid Etching）：用酸腐蚀出磨砂或凹陷图案，质感高级`,
        contentEn: `• Spray painting: Color coating on bottle, rich colors, gradient available\n• Electroplating: Metallic coating, common in gold, silver, rose gold\n• Frosting/Sandblasting: Surface frosted treatment, matte texture\n• Hot stamping: Partial metallic foil stamping for logo or pattern\n• Screen printing: Direct printing on bottle surface, accurate color\n• Labeling: Self-adhesive labels, flexible, suitable for small batches\n• UV printing: High-precision full-color printing, photo-quality patterns\n• Acid etching: Acid-carved frosted or recessed patterns, premium feel`
      },
      {
        headingZh: '规格参数',
        headingEn: 'Specifications',
        contentZh: `• 常见容量：5ml、10ml、15ml、20ml、30ml、50ml、60ml、75ml、100ml、125ml\n• 口径（瓶口内径）：常见13mm、15mm、17mm、18mm、20mm\n• 重量：5ml约15-20g，100ml约80-150g（视瓶壁厚度）\n• MOQ：标准款通常500-1000pcs，定制款2000-5000pcs起\n• 生产周期：大货20-35天`,
        contentEn: `• Common capacities: 5ml, 10ml, 15ml, 20ml, 30ml, 50ml, 60ml, 75ml, 100ml, 125ml\n• Neck diameter: Common 13mm, 15mm, 17mm, 18mm, 20mm\n• Weight: 5ml ~15–20g, 100ml ~80–150g (depends on wall thickness)\n• MOQ: Standard 500–1,000 pcs, custom 2,000–5,000 pcs\n• Lead time: Bulk order 20–35 days`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch04', order: 4,
    titleZh: '香水盖',
    titleEn: 'Perfume Caps',
    estimatedMinutes: 15,
    sections: [
      {
        headingZh: '盖子材质分类',
        headingEn: 'Cap Material Classification',
        contentZh: `• 锌合金盖（Zinc Alloy）：最主流，可电镀、喷漆，重量感强，品质感好。可做复杂造型。\n• ABS塑料盖：轻便、成本低，可注塑成各种形状，适合大众市场。\n• 铝合金盖：轻量、高档感，常见于欧洲品牌。\n• 木盖：天然木材，温润质感，环保，常用于小众香水。\n• 亚克力盖（Acrylic）：高透明度，水晶感，可做渐变色。\n• 皮革盖：包裹真皮或PU皮，奢华感，适合高端定制。`,
        contentEn: `• Zinc alloy cap: Most mainstream, can be electroplated/painted, heavy feel, premium quality. Complex shapes possible.\n• ABS plastic cap: Light, low cost, injection molded into various shapes, suitable for mass market.\n• Aluminum cap: Lightweight, premium feel, common in European brands.\n• Wood cap: Natural wood, warm texture, eco-friendly, popular in niche perfumes.\n• Acrylic cap: High transparency, crystal-like, can do gradient colors.\n• Leather cap: Real leather or PU wrapped, luxurious, suitable for high-end custom.`
      },
      {
        headingZh: '盖子工艺与配合',
        headingEn: 'Cap Processes & Fitting',
        contentZh: `• 配合方式：摩擦配合（最常见）、磁吸配合（高端）、螺纹配合\n• 电镀工艺：水电镀（环保，色泽稳定）、真空镀（镜面效果强）\n• 植绒：盖内植绒处理，防止划伤瓶子，提升质感\n• 内衬：盖内放置海绵/EVA内衬，保护瓶口\n• 重量：锌合金盖通常20-80g，ABS盖5-30g`,
        contentEn: `• Fitting types: Friction fit (most common), magnetic fit (premium), thread fit\n• Plating: Water electroplating (eco-friendly, stable color), vacuum plating (mirror effect)\n• Flocking: Velvet lining inside cap to prevent scratching bottle, enhances feel\n• Inner liner: Foam/EVA liner inside cap to protect bottle mouth\n• Weight: Zinc alloy cap typically 20–80g, ABS cap 5–30g`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch05', order: 5,
    titleZh: '香水泵头',
    titleEn: 'Perfume Pumps',
    estimatedMinutes: 12,
    sections: [
      {
        headingZh: '泵头类型',
        headingEn: 'Pump Types',
        contentZh: `• 标准喷雾泵（Spray Pump）：最常见，按压后产生细雾，出液量0.08-0.16ml/次\n• 滚珠泵：用于走珠香水（Roll-on），多用于小容量\n• 无气泵：真空设计，防氧化，常用于护肤品，香水较少使用\n• 定制泵：可定制颜色、规格、喷孔大小\n\n泵头规格参数：\n• 口径：13mm、15mm、17mm、18mm、20mm（需与瓶口匹配）\n• 管长：可根据瓶高定制，通常45-90mm\n• 出液量：0.08ml、0.10ml、0.12ml、0.16ml可选`,
        contentEn: `• Standard spray pump: Most common, creates fine mist, 0.08–0.16ml/press\n• Roll-on pump: For roll-on perfumes, mainly small capacity\n• Airless pump: Vacuum design, anti-oxidation, more common in skincare\n• Custom pump: Customizable color, spec, nozzle size\n\nPump specifications:\n• Neck size: 13mm, 15mm, 17mm, 18mm, 20mm (must match bottle)\n• Tube length: Customizable by bottle height, typically 45–90mm\n• Output: 0.08ml, 0.10ml, 0.12ml, 0.16ml options`
      },
      {
        headingZh: '泵头材质与表面处理',
        headingEn: 'Pump Material & Finish',
        contentZh: `• 材质：泵头主体ABS/PP，内部弹簧不锈钢，密封圈橡胶\n• 表面处理：电镀（金/银/枪黑）、喷漆、UV漆\n• 与盖子配套：泵头与盖子颜色/工艺需协调统一\n• 测试要求：需通过10000次按压测试`,
        contentEn: `• Material: ABS/PP body, stainless steel spring, rubber seal\n• Surface: Electroplating (gold/silver/gun-black), spray paint, UV coating\n• Coordination: Pump color/finish must match cap\n• Testing: Must pass 10,000-press test`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch06', order: 6,
    titleZh: '香水外包装盒',
    titleEn: 'Outer Packaging Boxes',
    estimatedMinutes: 15,
    sections: [
      {
        headingZh: '纸盒类型',
        headingEn: 'Box Types',
        contentZh: `• 天地盒（Lid & Base Box）：分上下两部分，开盖感强，常见礼盒\n• 抽屉盒（Drawer Box）：内盒像抽屉拉出，高端感\n• 翻盖盒（Flip-top Box）：连体翻盖，使用方便\n• 书型盒（Book-style Box）：像书本翻开，常用于套装\n• 手提袋（Paper Bag）：配套使用，提升礼品感`,
        contentEn: `• Lid & Base Box: Two-piece top and bottom, strong reveal feel, common gift box\n• Drawer Box: Inner tray slides out like a drawer, premium feel\n• Flip-top Box: Attached lid that flips open, convenient\n• Book-style Box: Opens like a book, common for sets\n• Paper Bag: Companion packaging, enhances gift presentation`
      },
      {
        headingZh: '纸张材质与印刷工艺',
        headingEn: 'Paper Material & Printing',
        contentZh: `材质选择：\n• 灰板纸（Greyboard）：硬挺，作为礼盒内芯\n• 铜版纸（Coated Paper）：表面光滑，印刷鲜艳\n• 特种纸：纹理纸、珠光纸、烫金纸等\n\n印刷工艺：\n• 四色印刷（CMYK）：全彩印刷\n• 专色印刷（Pantone）：颜色精准\n• 烫金/烫银：局部金属光泽\n• 覆膜：亮膜（光亮）/ 哑膜（哑光）/ 软触膜（丝绒触感）\n• 击凸/压凹（Emboss/Deboss）：浮雕或凹陷图案\n• UV局部上光：局部亮光效果`,
        contentEn: `Material:\n• Greyboard: Rigid, used as gift box core\n• Coated paper: Smooth surface, vivid printing\n• Specialty paper: Textured, pearlescent, foil papers\n\nPrinting:\n• 4-color (CMYK): Full-color printing\n• Spot color (Pantone): Precise color matching\n• Hot stamping: Partial metallic sheen\n• Lamination: Glossy / matte / soft-touch (velvet feel)\n• Emboss/Deboss: Raised or recessed pattern\n• UV spot coating: Selective gloss effect`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch07', order: 7,
    titleZh: '配件：领口、底座与标签',
    titleEn: 'Accessories: Collar, Base & Label',
    estimatedMinutes: 10,
    sections: [
      {
        headingZh: '领口（Collar/Surround）',
        headingEn: 'Collar / Surround',
        contentZh: `领口安装在瓶口与盖子之间，起装饰和密封辅助作用。\n• 材质：锌合金（最常见）、ABS、铝合金\n• 表面：电镀金/银/枪黑，可做镭射、拉丝效果\n• 功能：遮盖泵头金属部分，统一整体美观度\n• 款式：方形领口、圆形领口、弧形领口`,
        contentEn: `Collar is installed between bottle neck and cap, serving decoration and sealing assistance.\n• Material: Zinc alloy (most common), ABS, aluminum alloy\n• Surface: Gold/silver/gun-black plating, laser, brushed effects\n• Function: Covers pump metal parts, unifies overall aesthetics\n• Styles: Square collar, round collar, curved collar`
      },
      {
        headingZh: '底座（Base/Plinth）',
        headingEn: 'Base / Plinth',
        contentZh: `底座放置于瓶底，增加高度和稳定性，提升产品陈列效果。\n• 材质：锌合金、木材、亚克力、大理石纹ABS\n• 常见形状：方形、圆形、六角形\n• 与瓶身连接：双面胶、卡扣或磁吸`,
        contentEn: `Base is placed under the bottle to add height, stability, and enhance display effect.\n• Material: Zinc alloy, wood, acrylic, marble-look ABS\n• Common shapes: Square, round, hexagonal\n• Connection to bottle: Double-sided tape, snap-fit, or magnetic`
      },
      {
        headingZh: '标签（Label）',
        headingEn: 'Label',
        contentZh: `• 不干胶标签：铜版纸/透明PET/镭射材质，印刷后裁切贴附\n• 热收缩标（Shrink Sleeve）：套在瓶身后热缩紧贴\n• 颈标/绳标：挂绳+小卡片，高端香水常用\n• 品牌标贴：用于盒子封口，增强品牌感`,
        contentEn: `• Self-adhesive label: Coated paper / clear PET / laser material, printed and die-cut\n• Shrink sleeve: Sleeved over bottle then heat-shrunk\n• Neck tag/hang tag: Cord + small card, common in premium perfume\n• Brand seal: Used to seal box, enhances brand feel`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch08', order: 8,
    titleZh: '重量计算与产品报价',
    titleEn: 'Weight Calculation & Product Quotation',
    estimatedMinutes: 12,
    sections: [
      {
        headingZh: '产品重量计算公式',
        headingEn: 'Product Weight Formula',
        contentZh: `单套产品总重量 = 玻璃瓶重量 + 盖子重量 + 泵头重量 + 领口重量 + 底座重量 + 包装盒重量 + 内衬重量\n\n实际报价中常用毛重（Gross Weight）：\n毛重 = 净重 × 1.15（含包装材料，约+15%）\n\n示例：\n• 50ml标准瓶（含泵+盖+领口）净重约85g\n• 加外盒后毛重约150-200g/套\n• 1000套约150-200kg毛重`,
        contentEn: `Total weight per set = Glass bottle + Cap + Pump + Collar + Base + Box + Insert\n\nGross Weight (commonly used in quotation):\nGross Weight = Net Weight × 1.15 (including packaging, ~+15%)\n\nExample:\n• 50ml standard bottle (with pump + cap + collar) net weight ~85g\n• With outer box, gross weight ~150–200g/set\n• 1,000 sets ≈ 150–200kg gross weight`
      },
      {
        headingZh: '报价构成',
        headingEn: 'Quotation Structure',
        contentZh: `产品报价通常包含：\n1. 产品单价（Unit Price）：各组件成本 + 工厂利润\n2. 打样费（Sample Fee）：首次开发费用，通常大货可抵\n3. 模具费（Mold Fee）：定制款需要，一次性费用\n4. 印刷版费（Plate/Setup Fee）：印刷首次制版费\n5. 运费（Freight）：根据贸易条款（EXW/FOB/CIF/DDP）\n6. 银行手续费：T/T汇款约$20-50/笔`,
        contentEn: `Product quotation typically includes:\n1. Unit price: Component cost + factory margin\n2. Sample fee: Initial development cost, usually deductible from bulk order\n3. Mold fee: Required for custom designs, one-time charge\n4. Plate/setup fee: First-time print setup\n5. Freight: Based on trade terms (EXW/FOB/CIF/DDP)\n6. Bank charges: T/T wire ~$20–50 per transfer`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch09', order: 9,
    titleZh: '付款方式与贸易术语',
    titleEn: 'Payment Methods & Trade Terms',
    estimatedMinutes: 12,
    sections: [
      {
        headingZh: '常见付款方式',
        headingEn: 'Common Payment Methods',
        contentZh: `• T/T（电汇 Telegraphic Transfer）：最常见，安全可靠。通常30%定金+70%见提单副本。\n• PayPal：小额订单常用，手续费约3-5%，收款方承担费用。适合样品费收取。\n• 西联汇款（Western Union）：个人对个人转账，适合小金额紧急付款。\n• 信用证（L/C, Letter of Credit）：大额订单使用，银行信用担保，流程复杂，周期长。适合$50,000以上订单。`,
        contentEn: `• T/T (Telegraphic Transfer): Most common, safe and reliable. Typically 30% deposit + 70% on B/L copy.\n• PayPal: Common for small orders, ~3–5% fee borne by recipient. Suitable for sample payments.\n• Western Union: Person-to-person transfer, suitable for small urgent payments.\n• L/C (Letter of Credit): For large orders, bank-guaranteed, complex process, long cycle. Suitable for orders above $50,000.`
      },
      {
        headingZh: '贸易条款（Incoterms）',
        headingEn: 'Trade Terms (Incoterms)',
        contentZh: `• EXW（工厂交货）：买方承担全部运费和风险，从工厂门口开始。价格最低，但买方负责最多。\n• FOB（离岸价）：卖方负责将货物运至指定港口并装船，之后风险转移给买方。最常用。\n• CIF（成本+保险+运费）：卖方负责到目的港的运费和保险，到港后风险转买方。\n• DDP（完税后交货）：卖方承担到买方指定地点的全部费用包括进口税，价格最高，买方最省心。`,
        contentEn: `• EXW (Ex Works): Buyer bears all freight and risk from factory gate. Lowest price, buyer responsible for most.\n• FOB (Free On Board): Seller delivers to named port and loads ship; risk transfers to buyer. Most commonly used.\n• CIF (Cost, Insurance & Freight): Seller covers freight and insurance to destination port; risk transfers on arrival.\n• DDP (Delivered Duty Paid): Seller covers all costs including import duties to buyer's location. Highest price, easiest for buyer.`
      }
    ]
  },
  // ────────────────────────────────────────────────────
  {
    id: 'ch10', order: 10,
    titleZh: '客户服务与常见问题处理',
    titleEn: 'Customer Service & FAQ Handling',
    estimatedMinutes: 15,
    sections: [
      {
        headingZh: '客户常见问题与标准回答',
        headingEn: 'Common Customer Questions & Standard Answers',
        contentZh: `Q: MOQ是多少？\nA: 标准款500-1000pcs，定制款通常2000-5000pcs起。具体根据产品类型而定。\n\nQ: 打样要多久？费用多少？\nA: 标准款7-10个工作日，全新开模15-25天。费用$100-$3000，大货下单可抵扣。\n\nQ: 大货生产周期多长？\nA: 确认样品和付款后，通常20-35个工作日。旺季（10月-12月）需提前沟通。\n\nQ: 颜色能做到多准确？\nA: 我们使用Pantone色号配色，色差ΔE≤1.5。烤漆颜色可高度还原。\n\nQ: 包装可以定制logo吗？\nA: 可以。瓶身、盒子、配件均可做logo，包括印刷、烫金、蚀刻等工艺。\n\nQ: 质量有问题怎么办？\nA: 出货前100%外观检验+抽样功能测试。如有质量问题，提供照片/视频证明后，协商补货或退款。`,
        contentEn: `Q: What is the MOQ?\nA: Standard items 500–1,000 pcs; custom items typically 2,000–5,000 pcs. Depends on product type.\n\nQ: How long does sampling take and what is the cost?\nA: Standard 7–10 business days, new mold 15–25 days. Cost $100–$3,000, deductible on bulk order.\n\nQ: What is the bulk production lead time?\nA: After sample confirmation and payment, typically 20–35 business days. Communicate early during peak season (Oct–Dec).\n\nQ: How accurate is the color?\nA: We use Pantone color matching, ΔE≤1.5. Spray paint colors can be highly reproduced.\n\nQ: Can packaging be customized with our logo?\nA: Yes. Bottle, box, and accessories can all have logo via printing, hot stamping, etching, etc.\n\nQ: What if there is a quality issue?\nA: 100% appearance inspection + sampling functional test before shipment. If quality issue confirmed with photos/video, we negotiate replacement or refund.`
      },
      {
        headingZh: '跟进客户的技巧',
        headingEn: 'Tips for Following Up with Clients',
        contentZh: `• 报价后48小时内跟进，询问是否收到及有无疑问\n• 样品发出后，主动提供快递单号，并在预计到达日期后1天跟进确认\n• 客户未回复：间隔3天再次跟进，换一个切入点（如新款推荐、市场信息）\n• 长期客户：定期发送新产品开发信息、节日问候\n• 报价有效期：通常30天，临近到期提醒客户确认`,
        contentEn: `• Follow up within 48 hours after sending quotation to check receipt and questions\n• After sample shipment, proactively provide tracking number; follow up 1 day after estimated arrival\n• No reply from client: Follow up again after 3 days with a different angle (new product recommendation, market info)\n• Long-term clients: Regularly share new product developments and holiday greetings\n• Quotation validity: Usually 30 days; remind client as it approaches expiry`
      }
    ]
  }
];

// ═══════════════════════════════════════════════════════
//  QUESTION BANK
//  Types: 'single' | 'multiple' | 'boolean'
//  answer: index (single/boolean) or array of indices (multiple)
// ═══════════════════════════════════════════════════════

const QUESTIONS = [
  // ── Chapter 1: Company Introduction ───────────────────

  {
    id: 'q001', chapter: 'ch01', type: 'single',
    questionZh: '芳力包装主要专注于哪类产品的生产？',
    questionEn: 'What type of products does Fonli Packaging primarily specialize in?',
    optionsZh: ['汽车零部件', '香水及高端化妆品包装', '食品包装', '电子产品外壳'],
    optionsEn: ['Automotive parts', 'Perfume and high-end cosmetic packaging', 'Food packaging', 'Electronic enclosures'],
    answer: 1,
    explanationZh: '芳力包装是专注于香水及高端化妆品包装的专业制造商。',
    explanationEn: 'Fonli Packaging is a professional manufacturer specializing in perfume and high-end cosmetic packaging.'
  },
  {
    id: 'q002', chapter: 'ch01', type: 'single',
    questionZh: '芳力包装的标准打样周期是多少天？',
    questionEn: 'What is Fonli Packaging\'s standard sampling cycle?',
    optionsZh: ['3-5天', '7-15天', '20-30天', '45-60天'],
    optionsEn: ['3–5 days', '7–15 days', '20–30 days', '45–60 days'],
    answer: 1,
    explanationZh: '标准打样周期为7-15天。',
    explanationEn: 'Standard sampling cycle is 7–15 days.'
  },
  {
    id: 'q003', chapter: 'ch01', type: 'multiple',
    questionZh: '芳力包装的主要产品线包括哪些？（多选）',
    questionEn: 'Which of the following are main product lines of Fonli Packaging? (Multiple)',
    optionsZh: ['香水玻璃瓶', '香水盖', '香水外包装盒', '香水原液'],
    optionsEn: ['Perfume glass bottles', 'Perfume caps', 'Outer packaging boxes', 'Perfume liquid'],
    answer: [0, 1, 2],
    explanationZh: '芳力包装的主要产品线包括玻璃瓶、盖子、泵头、外包装盒和配件。香水原液不属于包装产品线。',
    explanationEn: 'Main product lines include glass bottles, caps, pumps, outer boxes, and accessories. Perfume liquid is not a packaging product.'
  },
  {
    id: 'q004', chapter: 'ch01', type: 'boolean',
    questionZh: '芳力包装支持MOQ 500-1000pcs起订。',
    questionEn: 'Fonli Packaging supports MOQ starting from 500–1,000 pcs.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。芳力包装支持小批量起订，MOQ 500-1000pcs。',
    explanationEn: 'True. Fonli supports small MOQ starting from 500–1,000 pcs.'
  },
  {
    id: 'q005', chapter: 'ch01', type: 'boolean',
    questionZh: '芳力包装依赖外包工厂进行生产，不拥有自有工厂。',
    questionEn: 'Fonli Packaging relies on outsourced factories for production and does not own its own factory.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 1,
    explanationZh: '错误。芳力包装拥有自有工厂，不依赖外包，品质可控。',
    explanationEn: 'False. Fonli owns its own factory with no outsourcing dependency and controllable quality.'
  },

  // ── Chapter 2: Custom Process ──────────────────────────

  {
    id: 'q006', chapter: 'ch02', type: 'single',
    questionZh: '在定制流程中，客户支付打样费之后的下一步是什么？',
    questionEn: 'In the custom process, what comes after the client pays the sample fee?',
    optionsZh: ['签订合同', '提供3D效果图', '安排出货', '支付尾款'],
    optionsEn: ['Sign contract', 'Provide 3D rendering', 'Arrange shipment', 'Pay balance'],
    answer: 1,
    explanationZh: '步骤4客户支付打样费后，步骤5是提供3D效果图供客户确认。',
    explanationEn: 'After step 4 (sample payment), step 5 is providing a 3D rendering for client confirmation.'
  },
  {
    id: 'q007', chapter: 'ch02', type: 'single',
    questionZh: '全新开模的打样周期通常是多少个工作日？',
    questionEn: 'How many business days does new mold sampling typically take?',
    optionsZh: ['3-5个工作日', '7-10个工作日', '15-25个工作日', '30-45个工作日'],
    optionsEn: ['3–5 business days', '7–10 business days', '15–25 business days', '30–45 business days'],
    answer: 2,
    explanationZh: '全新开模打样周期15-25个工作日。',
    explanationEn: 'New mold sampling takes 15–25 business days.'
  },
  {
    id: 'q008', chapter: 'ch02', type: 'boolean',
    questionZh: '定制流程共分为12个步骤，从需求沟通到出货尾款。',
    questionEn: 'The custom process consists of 12 steps, from requirement discussion to balance payment and shipment.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。标准定制流程共12个步骤。',
    explanationEn: 'True. The standard custom process consists of 12 steps.'
  },
  {
    id: 'q009', chapter: 'ch02', type: 'boolean',
    questionZh: '打样费在任何情况下都无法抵扣大货订单费用。',
    questionEn: 'Sample fees can never be deducted from bulk order costs under any circumstances.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 1,
    explanationZh: '错误。打样费通常在大货订单达到一定金额后可全额抵扣。',
    explanationEn: 'False. Sample fees are usually fully deductible when the bulk order reaches a threshold.'
  },
  {
    id: 'q010', chapter: 'ch02', type: 'multiple',
    questionZh: '以下哪些属于定制流程中的步骤？（多选）',
    questionEn: 'Which of the following are steps in the custom process? (Multiple)',
    optionsZh: ['3D效果图确认', '样品制作与确认', '大货生产', '原材料采购指导'],
    optionsEn: ['3D rendering confirmation', 'Sample production and confirmation', 'Bulk production', 'Raw material procurement guidance'],
    answer: [0, 1, 2],
    explanationZh: '3D效果图、样品制作、大货生产均属于12步定制流程。原材料采购指导不在流程中。',
    explanationEn: '3D rendering, sampling, and bulk production are all part of the 12-step process. Raw material guidance is not.'
  },

  // ── Chapter 3: Glass Bottles ────────────────────────────

  {
    id: 'q011', chapter: 'ch03', type: 'single',
    questionZh: '以下哪种玻璃材质折射率最高，常用于高端市场？',
    questionEn: 'Which glass material has the highest refractive index and is commonly used in the luxury market?',
    optionsZh: ['钠钙玻璃', '高硼硅玻璃', '铅晶质玻璃', '强化玻璃'],
    optionsEn: ['Soda-lime glass', 'Borosilicate glass', 'Lead crystal', 'Tempered glass'],
    answer: 2,
    explanationZh: '铅晶质玻璃折射率高，光泽感强，常用于高端市场。',
    explanationEn: 'Lead crystal has the highest refractive index and strong luster, used in the luxury market.'
  },
  {
    id: 'q012', chapter: 'ch03', type: 'single',
    questionZh: '香水玻璃瓶最常见的瓶口内径规格不包括以下哪项？',
    questionEn: 'Which of the following is NOT a commonly used perfume bottle neck diameter?',
    optionsZh: ['13mm', '15mm', '25mm', '18mm'],
    optionsEn: ['13mm', '15mm', '25mm', '18mm'],
    answer: 2,
    explanationZh: '常见瓶口内径为13mm、15mm、17mm、18mm、20mm，25mm不是常见规格。',
    explanationEn: 'Common neck diameters are 13mm, 15mm, 17mm, 18mm, 20mm. 25mm is not a standard size.'
  },
  {
    id: 'q013', chapter: 'ch03', type: 'multiple',
    questionZh: '以下哪些是香水玻璃瓶的表面处理工艺？（多选）',
    questionEn: 'Which of the following are surface treatment processes for perfume glass bottles? (Multiple)',
    optionsZh: ['烤漆', '磨砂', '酸蚀', '注塑'],
    optionsEn: ['Spray painting', 'Frosting', 'Acid etching', 'Injection molding'],
    answer: [0, 1, 2],
    explanationZh: '烤漆、磨砂、酸蚀都是玻璃瓶表面处理工艺。注塑是塑料加工工艺，不用于玻璃瓶表面处理。',
    explanationEn: 'Spray painting, frosting, and acid etching are all glass bottle surface treatments. Injection molding is a plastic process, not a glass surface treatment.'
  },
  {
    id: 'q014', chapter: 'ch03', type: 'boolean',
    questionZh: '丝印工艺（Screen Printing）可以直接在玻璃瓶身印刷图案或文字。',
    questionEn: 'Screen printing can directly print patterns or text onto the glass bottle surface.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。丝印是直接在瓶身印刷图案或文字的工艺，颜色准确。',
    explanationEn: 'True. Screen printing directly prints patterns or text on the bottle surface with accurate color.'
  },
  {
    id: 'q015', chapter: 'ch03', type: 'boolean',
    questionZh: '钠钙玻璃是最常见的香水玻璃瓶材质，适合大批量生产。',
    questionEn: 'Soda-lime glass is the most common perfume bottle material, suitable for mass production.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。钠钙玻璃最常见，成本低，适合大批量生产。',
    explanationEn: 'True. Soda-lime glass is most common, low cost, suitable for mass production.'
  },
  {
    id: 'q016', chapter: 'ch03', type: 'single',
    questionZh: '大货香水玻璃瓶的生产周期通常是多少天？',
    questionEn: 'What is the typical bulk production lead time for perfume glass bottles?',
    optionsZh: ['5-10天', '15-20天', '20-35天', '45-60天'],
    optionsEn: ['5–10 days', '15–20 days', '20–35 days', '45–60 days'],
    answer: 2,
    explanationZh: '大货生产周期通常20-35天。',
    explanationEn: 'Bulk production lead time is typically 20–35 days.'
  },

  // ── Chapter 4: Caps ────────────────────────────────────

  {
    id: 'q017', chapter: 'ch04', type: 'single',
    questionZh: '以下哪种盖子材质最主流，可以做出重量感强的质感？',
    questionEn: 'Which cap material is the most mainstream and provides a strong sense of weight?',
    optionsZh: ['ABS塑料', '锌合金', '木材', '亚克力'],
    optionsEn: ['ABS plastic', 'Zinc alloy', 'Wood', 'Acrylic'],
    answer: 1,
    explanationZh: '锌合金盖最主流，可电镀、喷漆，重量感强，品质感好。',
    explanationEn: 'Zinc alloy cap is the most mainstream, can be plated/painted, heavy feel, premium quality.'
  },
  {
    id: 'q018', chapter: 'ch04', type: 'single',
    questionZh: '盖子与瓶子的配合方式中，哪种常见于高端产品？',
    questionEn: 'Among cap-to-bottle fitting types, which is commonly found in premium products?',
    optionsZh: ['摩擦配合', '磁吸配合', '螺纹配合', '胶水固定'],
    optionsEn: ['Friction fit', 'Magnetic fit', 'Thread fit', 'Glue attachment'],
    answer: 1,
    explanationZh: '磁吸配合常见于高端产品，开合有仪式感。',
    explanationEn: 'Magnetic fit is common in premium products, providing a ceremonial open/close feel.'
  },
  {
    id: 'q019', chapter: 'ch04', type: 'boolean',
    questionZh: '盖子内植绒处理的主要目的是防止划伤瓶子并提升质感。',
    questionEn: 'The main purpose of flocking inside the cap is to prevent scratching the bottle and enhance feel.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。植绒处理防止划伤瓶子，同时提升整体质感。',
    explanationEn: 'True. Flocking prevents scratching the bottle and enhances the overall feel.'
  },
  {
    id: 'q020', chapter: 'ch04', type: 'multiple',
    questionZh: '以下哪些是常见的盖子材质？（多选）',
    questionEn: 'Which of the following are common cap materials? (Multiple)',
    optionsZh: ['锌合金', 'ABS塑料', '木材', '不锈钢板'],
    optionsEn: ['Zinc alloy', 'ABS plastic', 'Wood', 'Stainless steel sheet'],
    answer: [0, 1, 2],
    explanationZh: '锌合金、ABS塑料、木材均为常见盖子材质。不锈钢板不是常见盖子材质。',
    explanationEn: 'Zinc alloy, ABS plastic, and wood are all common cap materials. Stainless steel sheet is not.'
  },
  {
    id: 'q021', chapter: 'ch04', type: 'boolean',
    questionZh: '锌合金盖通常比ABS盖重量更大，质感更强。',
    questionEn: 'Zinc alloy caps are generally heavier than ABS caps and provide a stronger premium feel.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。锌合金盖通常20-80g，ABS盖5-30g，锌合金更重，质感更强。',
    explanationEn: 'True. Zinc alloy caps are typically 20–80g vs ABS 5–30g, making zinc alloy heavier with a stronger feel.'
  },

  // ── Chapter 5: Pumps ───────────────────────────────────

  {
    id: 'q022', chapter: 'ch05', type: 'single',
    questionZh: '标准喷雾泵每次按压出液量的常见范围是多少？',
    questionEn: 'What is the common output range per press for a standard spray pump?',
    optionsZh: ['0.01-0.05ml', '0.08-0.16ml', '0.5-1.0ml', '1.5-2.0ml'],
    optionsEn: ['0.01–0.05ml', '0.08–0.16ml', '0.5–1.0ml', '1.5–2.0ml'],
    answer: 1,
    explanationZh: '标准喷雾泵出液量为0.08-0.16ml/次。',
    explanationEn: 'Standard spray pump output is 0.08–0.16ml per press.'
  },
  {
    id: 'q023', chapter: 'ch05', type: 'boolean',
    questionZh: '泵头的口径必须与香水瓶的瓶口内径相匹配。',
    questionEn: 'The pump neck size must match the inner diameter of the perfume bottle mouth.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。泵头口径必须与瓶口匹配，否则无法密封安装。',
    explanationEn: 'True. The pump neck size must match the bottle mouth diameter, otherwise it cannot be sealed properly.'
  },
  {
    id: 'q024', chapter: 'ch05', type: 'single',
    questionZh: '泵头需要通过多少次按压测试才符合质量要求？',
    questionEn: 'How many press cycles must a pump pass to meet quality requirements?',
    optionsZh: ['1,000次', '5,000次', '10,000次', '50,000次'],
    optionsEn: ['1,000 presses', '5,000 presses', '10,000 presses', '50,000 presses'],
    answer: 2,
    explanationZh: '泵头需通过10,000次按压测试。',
    explanationEn: 'Pumps must pass a 10,000-press test.'
  },
  {
    id: 'q025', chapter: 'ch05', type: 'multiple',
    questionZh: '关于泵头管长，以下说法正确的是？（多选）',
    questionEn: 'Which statements about pump tube length are correct? (Multiple)',
    optionsZh: ['管长可根据瓶高定制', '通常范围45-90mm', '所有瓶子管长都一样', '管长影响液体能否吸尽'],
    optionsEn: ['Tube length can be customized by bottle height', 'Typical range 45–90mm', 'All bottles use the same tube length', 'Tube length affects whether liquid can be fully drawn up'],
    answer: [0, 1, 3],
    explanationZh: '管长可根据瓶高定制，通常45-90mm，且影响液体是否能被完全吸出。不同瓶子管长不同。',
    explanationEn: 'Tube length can be customized by bottle height, typically 45–90mm, and affects liquid draw. Different bottles have different tube lengths.'
  },

  // ── Chapter 6: Outer Boxes ─────────────────────────────

  {
    id: 'q026', chapter: 'ch06', type: 'single',
    questionZh: '以下哪种纸盒类型像抽屉一样拉出，常给人高端感？',
    questionEn: 'Which box type slides out like a drawer, commonly giving a premium impression?',
    optionsZh: ['天地盒', '抽屉盒', '翻盖盒', '书型盒'],
    optionsEn: ['Lid & Base Box', 'Drawer Box', 'Flip-top Box', 'Book-style Box'],
    answer: 1,
    explanationZh: '抽屉盒内盒像抽屉拉出，高端感强。',
    explanationEn: 'Drawer box slides out like a drawer, giving a premium feel.'
  },
  {
    id: 'q027', chapter: 'ch06', type: 'multiple',
    questionZh: '以下哪些是外包装盒的印刷工艺？（多选）',
    questionEn: 'Which of the following are printing processes for outer packaging boxes? (Multiple)',
    optionsZh: ['烫金', '覆膜', '击凸/压凹', '电镀'],
    optionsEn: ['Hot stamping', 'Lamination', 'Emboss/Deboss', 'Electroplating'],
    answer: [0, 1, 2],
    explanationZh: '烫金、覆膜、击凸/压凹都是纸盒常见印刷/后加工工艺。电镀是金属处理工艺，不用于纸盒。',
    explanationEn: 'Hot stamping, lamination, and emboss/deboss are common box printing/finishing processes. Electroplating is for metal, not boxes.'
  },
  {
    id: 'q028', chapter: 'ch06', type: 'boolean',
    questionZh: '软触膜（软触感覆膜）覆在纸盒表面后，触感类似丝绒。',
    questionEn: 'Soft-touch lamination applied to a box surface gives a velvet-like texture.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。软触膜（软触感覆膜）的触感类似丝绒，质感高端。',
    explanationEn: 'True. Soft-touch lamination provides a velvet-like texture, feeling premium.'
  },
  {
    id: 'q029', chapter: 'ch06', type: 'single',
    questionZh: 'Pantone色号用于什么类型的印刷？',
    questionEn: 'Pantone color numbers are used for which type of printing?',
    optionsZh: ['四色印刷（CMYK）', '专色印刷', '喷墨打印', '热转印'],
    optionsEn: ['4-color printing (CMYK)', 'Spot color printing', 'Inkjet printing', 'Thermal transfer'],
    answer: 1,
    explanationZh: 'Pantone色号用于专色印刷，颜色精准。',
    explanationEn: 'Pantone numbers are used in spot color printing for precise color accuracy.'
  },
  {
    id: 'q030', chapter: 'ch06', type: 'boolean',
    questionZh: '灰板纸（Greyboard）通常用作礼盒的内芯，使盒子更硬挺。',
    questionEn: 'Greyboard is typically used as the inner core of gift boxes to make them more rigid.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。灰板纸硬挺，用作礼盒内芯，提供结构支撑。',
    explanationEn: 'True. Greyboard is rigid and used as gift box core for structural support.'
  },

  // ── Chapter 7: Accessories ─────────────────────────────

  {
    id: 'q031', chapter: 'ch07', type: 'single',
    questionZh: '领口（Collar）安装在香水瓶的哪个位置？',
    questionEn: 'Where is the collar installed on a perfume bottle?',
    optionsZh: ['瓶底', '瓶口与盖子之间', '瓶身中部', '盖子顶部'],
    optionsEn: ['Bottom of bottle', 'Between bottle neck and cap', 'Middle of bottle body', 'Top of cap'],
    answer: 1,
    explanationZh: '领口安装在瓶口与盖子之间，起装饰和密封辅助作用。',
    explanationEn: 'The collar is installed between the bottle neck and cap for decoration and sealing assistance.'
  },
  {
    id: 'q032', chapter: 'ch07', type: 'boolean',
    questionZh: '底座的主要作用是增加产品高度、稳定性，并提升陈列效果。',
    questionEn: 'The main function of a base is to increase product height, stability, and enhance display effect.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。底座增加高度、稳定性，提升陈列效果。',
    explanationEn: 'True. The base adds height, stability, and enhances display effect.'
  },
  {
    id: 'q033', chapter: 'ch07', type: 'multiple',
    questionZh: '以下哪些可用于将底座与瓶身连接？（多选）',
    questionEn: 'Which of the following can be used to connect the base to the bottle? (Multiple)',
    optionsZh: ['双面胶', '卡扣', '磁吸', '焊接'],
    optionsEn: ['Double-sided tape', 'Snap-fit', 'Magnetic', 'Welding'],
    answer: [0, 1, 2],
    explanationZh: '双面胶、卡扣和磁吸都是底座与瓶身常见连接方式。焊接不用于此场合。',
    explanationEn: 'Double-sided tape, snap-fit, and magnetic are common methods. Welding is not used here.'
  },
  {
    id: 'q034', chapter: 'ch07', type: 'single',
    questionZh: '热收缩标（Shrink Sleeve）是如何固定在瓶身上的？',
    questionEn: 'How is a shrink sleeve label fixed onto the bottle?',
    optionsZh: ['用胶水粘贴', '套在瓶身后加热使其收缩紧贴', '用螺丝固定', '夹在瓶颈'],
    optionsEn: ['Glued on', 'Sleeved over bottle then heat-shrunk to fit', 'Fixed with screws', 'Clipped to bottle neck'],
    answer: 1,
    explanationZh: '热收缩标套在瓶身后经过加热后收缩紧贴瓶身。',
    explanationEn: 'Shrink sleeves are sleeved over the bottle then heat-shrunk to tightly conform to the shape.'
  },

  // ── Chapter 8: Weight & Quotation ─────────────────────

  {
    id: 'q035', chapter: 'ch08', type: 'single',
    questionZh: '计算产品毛重时，通常在净重基础上增加多少百分比？',
    questionEn: 'When calculating gross weight, what percentage is typically added to the net weight?',
    optionsZh: ['5%', '10%', '15%', '25%'],
    optionsEn: ['5%', '10%', '15%', '25%'],
    answer: 2,
    explanationZh: '毛重 = 净重 × 1.15，即净重加约15%。',
    explanationEn: 'Gross weight = net weight × 1.15, adding approximately 15%.'
  },
  {
    id: 'q036', chapter: 'ch08', type: 'boolean',
    questionZh: '模具费（Mold Fee）是一次性费用，只在定制款产品时需要支付。',
    questionEn: 'Mold fee is a one-time cost, only required for custom designed products.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。模具费是定制款需要支付的一次性费用。',
    explanationEn: 'True. Mold fee is a one-time charge required only for custom designs.'
  },
  {
    id: 'q037', chapter: 'ch08', type: 'multiple',
    questionZh: '产品报价通常包含哪些费用？（多选）',
    questionEn: 'What costs are typically included in a product quotation? (Multiple)',
    optionsZh: ['产品单价', '打样费', '模具费', '客户的市场推广费'],
    optionsEn: ['Unit price', 'Sample fee', 'Mold fee', 'Client\'s marketing expenses'],
    answer: [0, 1, 2],
    explanationZh: '产品报价包含单价、打样费、模具费、印刷版费、运费等。客户市场推广费不在报价范围内。',
    explanationEn: 'Quotation includes unit price, sample fee, mold fee, plate fee, freight, etc. Client marketing expenses are not included.'
  },
  {
    id: 'q038', chapter: 'ch08', type: 'single',
    questionZh: '50ml标准香水瓶（含泵+盖+领口）的净重大约是多少？',
    questionEn: 'What is the approximate net weight of a 50ml standard perfume bottle (with pump + cap + collar)?',
    optionsZh: ['约20g', '约85g', '约200g', '约500g'],
    optionsEn: ['~20g', '~85g', '~200g', '~500g'],
    answer: 1,
    explanationZh: '50ml标准瓶含泵+盖+领口净重约85g。',
    explanationEn: 'A 50ml standard bottle with pump + cap + collar has a net weight of approximately 85g.'
  },

  // ── Chapter 9: Payment & Trade Terms ──────────────────

  {
    id: 'q039', chapter: 'ch09', type: 'single',
    questionZh: 'T/T付款方式中，最常见的付款比例安排是什么？',
    questionEn: 'In T/T payment, what is the most common payment arrangement?',
    optionsZh: ['100%预付', '50%定金+50%见提单', '30%定金+70%见提单', '全部货到付款'],
    optionsEn: ['100% advance payment', '50% deposit + 50% on B/L', '30% deposit + 70% on B/L', 'Full payment on delivery'],
    answer: 2,
    explanationZh: 'T/T最常见安排为30%定金+70%见提单副本。',
    explanationEn: 'Most common T/T arrangement is 30% deposit + 70% upon receiving B/L copy.'
  },
  {
    id: 'q040', chapter: 'ch09', type: 'single',
    questionZh: 'PayPal付款的手续费大约是多少，由哪方承担？',
    questionEn: 'What is the approximate PayPal fee, and who bears it?',
    optionsZh: ['约1%，由买方承担', '约3-5%，由收款方承担', '约10%，由双方平摊', '免费'],
    optionsEn: ['~1%, borne by buyer', '~3–5%, borne by recipient', '~10%, split equally', 'Free'],
    answer: 1,
    explanationZh: 'PayPal手续费约3-5%，由收款方（供应商）承担。',
    explanationEn: 'PayPal charges ~3–5%, borne by the recipient (supplier).'
  },
  {
    id: 'q041', chapter: 'ch09', type: 'single',
    questionZh: 'FOB贸易条款下，货物装船后风险由谁承担？',
    questionEn: 'Under FOB terms, who bears the risk after goods are loaded onto the ship?',
    optionsZh: ['卖方（供应商）', '买方（客户）', '运输公司', '保险公司'],
    optionsEn: ['Seller (supplier)', 'Buyer (client)', 'Shipping company', 'Insurance company'],
    answer: 1,
    explanationZh: 'FOB条款下，货物装船后风险转移给买方。',
    explanationEn: 'Under FOB, risk transfers to the buyer once goods are loaded onto the ship.'
  },
  {
    id: 'q042', chapter: 'ch09', type: 'boolean',
    questionZh: 'DDP贸易条款下，卖方负责承担进口税和所有运输费用。',
    questionEn: 'Under DDP terms, the seller is responsible for import duties and all freight costs.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。DDP（完税后交货）卖方承担到买方指定地点的全部费用，包括进口税。',
    explanationEn: 'True. Under DDP, the seller covers all costs to the buyer\'s location, including import duties.'
  },
  {
    id: 'q043', chapter: 'ch09', type: 'multiple',
    questionZh: '以下哪些是公司支持的付款方式？（多选）',
    questionEn: 'Which of the following payment methods does the company support? (Multiple)',
    optionsZh: ['T/T电汇', 'PayPal', '西联汇款', '比特币'],
    optionsEn: ['T/T wire transfer', 'PayPal', 'Western Union', 'Bitcoin'],
    answer: [0, 1, 2],
    explanationZh: 'T/T、PayPal、西联汇款和信用证（L/C）是支持的付款方式。比特币不在其中。',
    explanationEn: 'T/T, PayPal, Western Union, and L/C are supported payment methods. Bitcoin is not.'
  },
  {
    id: 'q044', chapter: 'ch09', type: 'boolean',
    questionZh: 'EXW（工厂交货）是对买方最省心的贸易条款，买方责任最少。',
    questionEn: 'EXW (Ex Works) is the easiest trade term for buyers, with minimal buyer responsibility.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 1,
    explanationZh: '错误。EXW对买方责任最多——买方承担从工厂起的全部运费和风险。DDP才是买方最省心的条款。',
    explanationEn: 'False. EXW places the most responsibility on the buyer — buyer bears all freight and risk from factory gate. DDP is easiest for the buyer.'
  },
  {
    id: 'q045', chapter: 'ch09', type: 'single',
    questionZh: '信用证（L/C）最适合哪种规模的订单？',
    questionEn: 'Letter of Credit (L/C) is most suitable for which order size?',
    optionsZh: ['$500以下的样品费', '$5,000-$10,000的小订单', '$50,000以上的大额订单', '所有金额订单'],
    optionsEn: ['Sample fees under $500', 'Small orders $5,000–$10,000', 'Large orders above $50,000', 'All order sizes'],
    answer: 2,
    explanationZh: '信用证适合$50,000以上的大额订单，流程复杂但银行信用担保，安全性高。',
    explanationEn: 'L/C is suitable for large orders above $50,000. Complex process but bank-guaranteed, high security.'
  },

  // ── Chapter 10: Customer Service ──────────────────────

  {
    id: 'q046', chapter: 'ch10', type: 'single',
    questionZh: '报价后应在多少小时内跟进客户？',
    questionEn: 'How many hours after sending a quotation should you follow up with the client?',
    optionsZh: ['12小时内', '24小时内', '48小时内', '72小时内'],
    optionsEn: ['Within 12 hours', 'Within 24 hours', 'Within 48 hours', 'Within 72 hours'],
    answer: 2,
    explanationZh: '报价后48小时内跟进，询问是否收到及有无疑问。',
    explanationEn: 'Follow up within 48 hours after sending the quotation.'
  },
  {
    id: 'q047', chapter: 'ch10', type: 'boolean',
    questionZh: '颜色要求时，我们使用Pantone色号配色，色差标准为ΔE≤1.5。',
    questionEn: 'For color requirements, we use Pantone color matching with a color difference standard of ΔE≤1.5.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。使用Pantone色号配色，色差ΔE≤1.5。',
    explanationEn: 'True. We use Pantone color matching with ΔE≤1.5 color difference standard.'
  },
  {
    id: 'q048', chapter: 'ch10', type: 'single',
    questionZh: '客户未回复时，建议间隔多少天再次跟进？',
    questionEn: 'If a client does not reply, how many days should you wait before following up again?',
    optionsZh: ['1天', '3天', '7天', '14天'],
    optionsEn: ['1 day', '3 days', '7 days', '14 days'],
    answer: 1,
    explanationZh: '客户未回复时，建议间隔3天再次跟进，并换一个切入点。',
    explanationEn: 'If no reply, wait 3 days before following up again, using a different angle.'
  },
  {
    id: 'q049', chapter: 'ch10', type: 'boolean',
    questionZh: '出货前，我们对产品进行100%外观检验和抽样功能测试。',
    questionEn: 'Before shipment, we conduct 100% appearance inspection and sampling functional testing.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。出货前进行100%外观检验+抽样功能测试。',
    explanationEn: 'True. 100% appearance inspection + sampling functional test before shipment.'
  },
  {
    id: 'q050', chapter: 'ch10', type: 'single',
    questionZh: '报价有效期通常为多少天？',
    questionEn: 'What is the typical validity period of a quotation?',
    optionsZh: ['7天', '15天', '30天', '90天'],
    optionsEn: ['7 days', '15 days', '30 days', '90 days'],
    answer: 2,
    explanationZh: '报价有效期通常为30天，临近到期时要提醒客户确认。',
    explanationEn: 'Quotation validity is typically 30 days; remind the client as it approaches expiry.'
  },
  {
    id: 'q051', chapter: 'ch10', type: 'multiple',
    questionZh: '发现产品质量问题时，客户需要提供哪些证明材料？（多选）',
    questionEn: 'When a quality issue is found, what documentation should the client provide? (Multiple)',
    optionsZh: ['照片', '视频', '第三方检测报告', '客户的销售记录'],
    optionsEn: ['Photos', 'Videos', 'Third-party inspection report', 'Client\'s sales records'],
    answer: [0, 1],
    explanationZh: '提供照片/视频证明后协商补货或退款。第三方报告和销售记录不是标准要求。',
    explanationEn: 'Photos and videos are required for quality disputes. Third-party reports and sales records are not standard requirements.'
  },

  // ── Mixed/综合题 ───────────────────────────────────────

  {
    id: 'q052', chapter: 'ch03', type: 'single',
    questionZh: '以下哪种表面处理工艺能让玻璃瓶产生镜面金属效果？',
    questionEn: 'Which surface treatment gives a mirror metallic effect on glass bottles?',
    optionsZh: ['丝印', '酸蚀', '电镀', '磨砂'],
    optionsEn: ['Screen printing', 'Acid etching', 'Electroplating', 'Frosting'],
    answer: 2,
    explanationZh: '电镀（真空镀）可产生镜面金属效果，常见金色、银色等。',
    explanationEn: 'Electroplating (vacuum plating) produces a mirror metallic effect, commonly gold and silver.'
  },
  {
    id: 'q053', chapter: 'ch06', type: 'boolean',
    questionZh: 'UV局部上光工艺可以让纸盒的局部区域产生高亮光泽效果。',
    questionEn: 'UV spot coating can make specific areas of a box produce a high-gloss sheen effect.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。UV局部上光是在特定区域涂UV漆后固化，产生局部亮光效果。',
    explanationEn: 'True. UV spot coating applies UV varnish to specific areas, creating selective glossy effects.'
  },
  {
    id: 'q054', chapter: 'ch09', type: 'single',
    questionZh: 'CIF（成本+保险+运费）条款下，货物到达目的港后风险由谁承担？',
    questionEn: 'Under CIF terms, who bears the risk after goods arrive at the destination port?',
    optionsZh: ['卖方', '买方', '货代公司', '保险公司'],
    optionsEn: ['Seller', 'Buyer', 'Freight forwarder', 'Insurance company'],
    answer: 1,
    explanationZh: 'CIF条款下，卖方负责到目的港的运费和保险，到港后风险转移给买方。',
    explanationEn: 'Under CIF, the seller covers freight and insurance to destination port; risk transfers to buyer upon arrival.'
  },
  {
    id: 'q055', chapter: 'ch04', type: 'boolean',
    questionZh: '水电镀（水镀）比真空镀更环保，色泽也更稳定。',
    questionEn: 'Water electroplating is more eco-friendly than vacuum plating and provides more stable color.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。水电镀环保，色泽稳定；真空镀则镜面效果更强。',
    explanationEn: 'True. Water electroplating is eco-friendly with stable color; vacuum plating offers stronger mirror effect.'
  },
  {
    id: 'q056', chapter: 'ch02', type: 'single',
    questionZh: '样品确认后，客户下一步需要做什么？',
    questionEn: 'After sample confirmation, what is the client\'s next step?',
    optionsZh: ['直接开始生产', '等待大货报价', '安排出货', '支付尾款'],
    optionsEn: ['Start production directly', 'Wait for bulk quotation', 'Arrange shipment', 'Pay balance'],
    answer: 1,
    explanationZh: '步骤7样品确认后，步骤8是基于确认样品出正式大货报价单。',
    explanationEn: 'After step 7 (sample confirmation), step 8 is issuing a formal bulk quotation based on the confirmed sample.'
  },
  {
    id: 'q057', chapter: 'ch05', type: 'boolean',
    questionZh: '香水泵头的内部弹簧通常由不锈钢制成，以防腐蚀。',
    questionEn: 'The internal spring of a perfume pump is typically made of stainless steel to prevent corrosion.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。泵头内部弹簧为不锈钢，防腐蚀，耐用。',
    explanationEn: 'True. The internal spring is stainless steel to prevent corrosion and ensure durability.'
  },
  {
    id: 'q058', chapter: 'ch08', type: 'boolean',
    questionZh: '印刷版费（Plate/Setup Fee）每次下单都需要重新支付。',
    questionEn: 'Printing plate/setup fee must be paid again every time an order is placed.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 1,
    explanationZh: '错误。印刷版费是首次制版时的一次性费用，重复订购同款设计通常不需要再付。',
    explanationEn: 'False. Plate/setup fee is a one-time first-run cost; reordering the same design typically does not require paying again.'
  },
  {
    id: 'q059', chapter: 'ch07', type: 'boolean',
    questionZh: '颈标（颈挂/绳标）常用于小众香水，增加高端礼品感。',
    questionEn: 'Neck tags/hang tags are commonly used in niche perfumes to enhance the premium gift feel.',
    optionsZh: ['正确', '错误'],
    optionsEn: ['True', 'False'],
    answer: 0,
    explanationZh: '正确。颈标/绳标由挂绳+小卡片组成，常用于高端香水，提升礼品感。',
    explanationEn: 'True. Neck tags consist of a cord and small card, commonly used in premium perfumes to enhance gift presentation.'
  },
  {
    id: 'q060', chapter: 'ch10', type: 'multiple',
    questionZh: '以下哪些做法有助于维护长期客户关系？（多选）',
    questionEn: 'Which of the following help maintain long-term client relationships? (Multiple)',
    optionsZh: ['定期发送新产品信息', '节日问候', '主动提供报价有效期提醒', '只在客户主动联系时才回复'],
    optionsEn: ['Regularly share new product info', 'Holiday greetings', 'Proactively remind about quotation expiry', 'Only respond when client initiates contact'],
    answer: [0, 1, 2],
    explanationZh: '定期新产品信息、节日问候和报价到期提醒都有助于维护关系。被动等待客户联系不利于长期关系维护。',
    explanationEn: 'Regular updates, holiday greetings, and expiry reminders all help maintain relationships. Only responding reactively is not good practice.'
  }
];

// ═══════════════════════════════════════════════════════
//  EXAM CONFIG
// ═══════════════════════════════════════════════════════

const EXAM_CONFIG = {
  // 正式考试
  exam: {
    totalQuestions: 50,
    timeMinutes: 60,
    passingScore: 80,
    excellentScore: 95,
    maxAttempts: 3,
    cooldownHours: 24,
    // 题型分布 & 分值
    distribution: {
      single:   { count: 25, pointsEach: 2 },   // 50分
      multiple: { count: 15, pointsEach: 2 },   // 30分
      boolean:  { count: 10, pointsEach: 2 }    // 20分  → 合计100分
    }
  },
  // 随堂练习（每章）
  chapterQuiz: {
    questionsPerChapter: 5,
    timeMinutes: 10,
    passingScore: 60
  },
  // 模拟测试
  mockExam: {
    totalQuestions: 30,
    timeMinutes: 35,
    passingScore: 70
  }
};

// ═══════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════

/**
 * Get questions for a specific chapter
 */
function getChapterQuestions(chapterId) {
  return QUESTIONS.filter(q => q.chapter === chapterId);
}

/**
 * Pick N random questions from a pool (no duplicates)
 */
function pickRandom(pool, n) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

/**
 * Build a mock/exam question set respecting type distribution
 */
function buildExamSet(config) {
  const { distribution } = config;
  let set = [];
  for (const [type, { count }] of Object.entries(distribution)) {
    const pool = QUESTIONS.filter(q => q.type === type);
    set = set.concat(pickRandom(pool, count));
  }
  return set.sort(() => Math.random() - 0.5);
}

/**
 * Build chapter quiz set
 */
function buildChapterQuizSet(chapterId) {
  const pool = getChapterQuestions(chapterId);
  return pickRandom(pool, EXAM_CONFIG.chapterQuiz.questionsPerChapter);
}

/**
 * Build mock exam set
 */
function buildMockSet() {
  return pickRandom(QUESTIONS, EXAM_CONFIG.mockExam.totalQuestions);
}

/**
 * Score a completed exam
 * answers: { [questionId]: number | number[] }
 */
function scoreExam(questions, answers) {
  let correct = 0;
  const details = questions.map(q => {
    const userAnswer = answers[q.id];
    let isCorrect = false;
    if (q.type === 'multiple') {
      const sortedCorrect = [...q.answer].sort().join(',');
      const sortedUser = Array.isArray(userAnswer) ? [...userAnswer].sort().join(',') : '';
      isCorrect = sortedCorrect === sortedUser;
    } else {
      isCorrect = userAnswer === q.answer;
    }
    if (isCorrect) correct++;
    return { id: q.id, isCorrect, userAnswer, correctAnswer: q.answer };
  });
  const score = Math.round((correct / questions.length) * 100);
  return { score, correct, total: questions.length, details };
}

if (typeof module !== 'undefined') {
  module.exports = { CHAPTERS, QUESTIONS, EXAM_CONFIG, getChapterQuestions, pickRandom, buildExamSet, buildChapterQuizSet, buildMockSet, scoreExam };
}
