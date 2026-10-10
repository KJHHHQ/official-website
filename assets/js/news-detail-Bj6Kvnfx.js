import{c as e,g as t,i as n,p as r,r as i}from"./mount-BkeTPVAF.js";import{t as a}from"./SiteShell-BKMNk-uy.js";var o={__name:`news-detail`,setup(o){return(o,s)=>(r(),n(a,{orbs:[`orb-1`,`orb-3`]},{default:t(()=>[...s[0]||=[i(`main`,null,[i(`section`,{class:`page-hero`,style:{"padding-bottom":`0`}},[i(`div`,{class:`container`},[i(`div`,{class:`article reveal`},[i(`nav`,{class:`breadcrumb`,style:{"margin-top":`0`}},[i(`a`,{href:`index.html`},`首页`),i(`svg`,null,[i(`use`,{href:`#i-chevron`})]),e(),i(`a`,{href:`intro.html#insights`},`技术笔记`),i(`svg`,null,[i(`use`,{href:`#i-chevron`})]),e(),i(`span`,null,`技术实践`)]),e(),i(`div`,{style:{"margin-top":`30px`}},[i(`span`,{class:`tag`},`技术实践`),e(),i(`span`,{class:`tag`,style:{"margin-left":`8px`}},`AI 前沿`)]),e(),i(`h1`,{class:`article-title`},`把企业文档做成 RAG 知识库，这 6 个坑别再踩`),e(),i(`div`,{class:`article-meta`},[i(`span`,null,[i(`svg`,null,[i(`use`,{href:`#i-users`})]),e(`湾流智能 · AI 应用团队`)]),e(),i(`span`,null,[i(`svg`,null,[i(`use`,{href:`#i-clock`})]),e(`2026-09-02 · 阅读约 8 分钟`)])]),e(),i(`div`,{class:`article-cover`})])])]),e(),i(`section`,{class:`section section-alt fit-reader`},[i(`div`,{class:`container`},[i(`div`,{class:`article reveal`},[i(`div`,{class:`prose`},[i(`p`,null,`
                最典型的场景：售后工程师手上积累了大量维修手册、故障案例和图纸。
                过去的做法是：遇到问题，翻 PDF，找不到就打电话问老师傅。老师傅一退休，经验就跟着走了。
              `),e(),i(`p`,null,[e(`
                我们要做的不是「接一个大模型」，而是让工程师`),i(`strong`,null,`在车间里敢直接用它给出的答案`),e(`。
                下面是我们踩过的坑，按影响大小排序——文中的数字来自其中一个项目的复盘，仅供参考。
              `)]),e(),i(`h2`,null,`坑一：语料没清洗就开始调模型`),e(),i(`p`,null,`
                最容易犯的错。企业给的文档里，往往混着大量扫描件、重复版本、废弃流程和只有老师傅看得懂的简称。
                直接灌进向量库，检索出来的答案经常来自作废的第三版手册——比没有答案更危险。
              `),e(),i(`blockquote`,null,`
                RAG 的效果上限，在清洗完语料的那一刻就定死了。后面怎么调参都只是在逼近这个上限，很难突破它。
              `),e(),i(`p`,null,`
                我们最终花了近三周做语料治理：去重、版本对齐、统一术语表、按机型和工序打标签。
                这部分工作枯燥，但它决定了后面所有环节的天花板。
              `),e(),i(`h2`,null,`坑二：权限没有跟着走`),e(),i(`p`,null,`
                原本只打算做一个全局问答，后来发现不同事业部、不同岗位能看的资料范围完全不同。
                如果一个普通工程师能通过提问绕出其他事业部的工艺参数，这在制造业是安全事故，不是产品缺陷。
              `),e(),i(`ul`,null,[i(`li`,null,[e(`文档入库时同步写入`),i(`strong`,null,`部门、岗位、机型、密级`),e(`四类元数据`)]),e(),i(`li`,null,`检索阶段先做权限过滤，再做相似度排序，顺序不能反`),e(),i(`li`,null,`所有问答留痕，可追溯到"谁在什么时候问了什么"`)]),e(),i(`h2`,null,`坑三：没有答案兜底机制`),e(),i(`p`,null,[e(`
                模型面对"不知道"的问题时，会努力编一个像样的答案。工程现场不能接受这件事。
                我们的规则很简单：`),i(`code`,null,`检索相似度低于阈值时，直接回答"资料里没有，请联系 XX"`),e(`，而不是让模型发挥。
              `)]),e(),i(`pre`,null,[i(`code`,null,`if top_score < CONFIDENCE_FLOOR:
        return "未在知识库中找到可靠依据，已转人工（工单已创建）"
    return answer_with_citations(top_chunks)`)]),e(),i(`h2`,null,`坑四：答案没有溯源`),e(),i(`p`,null,[e(`
                工程师不会因为模型语气自信就相信它。我们把每条答案后面都附上来源：文档名、章节、页码、更新时间，
                点开就能看到原文截图。上线这个功能后，回答采纳率有了明显提升——`),i(`strong`,null,`信任是设计出来的，不是引导出来的`),e(`。
              `)]),e(),i(`h3`,null,`坑五与坑六：忽略真实使用场景`),e(),i(`p`,null,`
                坑五是按 PC 思路做的界面。车间里大家用的是防爆平板和手套，大按钮、语音输入、离线缓存比任何炫酷交互都重要。
              `),e(),i(`p`,null,`
                坑六是没有设计反馈闭环。我们最后在每条答案下加了"有用 / 没用 + 一句话原因"，每周由专人把"没用"的样本回流到语料治理。
                知识库不是一次性交付物，它需要一直有人喂。
              `),e(),i(`h2`,null,`一张表总结`),e(),i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,{style:{width:`32%`}},`环节`),i(`th`,null,`关键动作`),i(`th`,{style:{width:`22%`}},`投入占比`)])]),e(),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,`语料治理`),i(`td`,null,`去重、版本对齐、术语统一、打标`),i(`td`,null,`约 35%`)]),e(),i(`tr`,null,[i(`td`,null,`权限与安全`),i(`td`,null,`元数据过滤、问答留痕、可追溯`),i(`td`,null,`约 20%`)]),e(),i(`tr`,null,[i(`td`,null,`检索与生成`),i(`td`,null,`阈值兜底、答案溯源、引用原文`),i(`td`,null,`约 25%`)]),e(),i(`tr`,null,[i(`td`,null,`体验与运营`),i(`td`,null,`移动端适配、反馈回流、每周治理`),i(`td`,null,`约 20%`)])])]),e(),i(`blockquote`,null,`
                如果预算只够做一件事，先把语料治理做扎实。模型能力会一直涨，但你的语料质量不会自己变好。
              `),e(),i(`p`,null,`
                如果你的企业也在考虑做内部知识库，欢迎把现状发给我们聊聊——第一次沟通免费，我们会告诉你哪些场景值得做、哪些暂时不值得。
              `)]),e(),i(`div`,{class:`author-box`},[i(`div`,{class:`face`},`苏`),e(),i(`div`,null,[i(`b`,null,`湾流智能 · AI 应用团队`),e(),i(`p`,null,`专注大模型在企业知识管理与流程自动化中的工程化落地，主导过多个制造业 RAG 项目交付。`)])]),e(),i(`div`,{class:`article-nav`},[i(`a`,{href:`intro.html#insights`},[i(`span`,null,`上一篇`),i(`b`,null,`我们把代码评审标准压缩成了一张清单`)]),e(),i(`a`,{href:`intro.html#insights`,class:`next`},[i(`span`,null,`下一篇`),i(`b`,null,`私有化部署还是调 API？一张表看懂`)])])])])]),e(),i(`section`,{class:`section section-tight`},[i(`div`,{class:`container`},[i(`div`,{class:`cta-band reveal`},[i(`div`,{class:`cta-flex`},[i(`div`,null,[i(`span`,{class:`eyebrow`},`Free Consultation`),e(),i(`h2`,{style:{"margin-top":`22px`}},[e(`你的企业`),i(`br`),e(`也值得一个敢用的知识库`)]),e(),i(`p`,{class:`lead`,style:{"margin-top":`20px`,"max-width":`520px`}},`把你的资料现状发给我们，我们给出可行性判断和大致投入区间。`)]),e(),i(`div`,{class:`cta-actions`},[i(`a`,{href:`about.html#leadForm`,class:`btn btn-primary btn-lg`,"data-magnet":``},[e(`免费评估需求 `),i(`svg`,null,[i(`use`,{href:`#i-arrow-right`})])]),e(),i(`a`,{href:`cases.html`,class:`btn btn-ghost btn-lg`},`查看相关案例`)])])])])])],-1)]]),_:1}))}};export{o as default};