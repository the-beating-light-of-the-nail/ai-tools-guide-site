// 域名统一 308 到正主裸域 aiworkagent.org（2026-10-04 翻转：此前 www 为正主）
// 挂两个自定义域名：www.aiworkagent.org、ai-work-guide.cdqyfdbymn.me（旧子域）
// 无资产 worker：请求必进 fetch，重定向对全部路径生效。
export default {
  fetch(request) {
    const url = new URL(request.url)
    return Response.redirect('https://aiworkagent.org' + url.pathname + url.search, 308)
  },
}
