// 旧域名统一 301 到主域名 www.aiworkagent.org
// 挂两个自定义域名：aiworkagent.org（裸域）、ai-work-guide.cdqyfdbymn.me（旧子域）
export default {
  fetch(request) {
    const url = new URL(request.url)
    return Response.redirect('https://www.aiworkagent.org' + url.pathname + url.search, 301)
  },
}
