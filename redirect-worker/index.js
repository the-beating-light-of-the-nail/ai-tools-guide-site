// 旧子域 ai-work-guide.cdqyfdbymn.me → 正主裸域 aiworkagent.org 恒 308
//（2026-10-04 起仅承担这一个旧别名；www 的 → 裸域已上收为 zone Redirect Rule，
//  www 本体挂主 worker 作 DNS 锚。cdqyfdbymn.me 是另一 zone，规则得在那边建，
//  暂由本 worker 承担）。无资产 worker：请求必进 fetch，重定向对全部路径生效。
export default {
  fetch(request) {
    const url = new URL(request.url)
    return Response.redirect('https://aiworkagent.org' + url.pathname + url.search, 308)
  },
}
