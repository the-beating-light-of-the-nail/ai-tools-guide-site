<template>
  <section id="faq" class="section">
    <div class="section-head">
      <span class="kicker">FAQ</span>
      <h2>常见问题 &amp; 踩坑指南</h2>
    </div>
    <div class="faq-list">
      <details class="faq" open>
        <summary>💻 安装 / 打开时提示「Apple 无法验证开发者」「未签名」怎么办？</summary>
        <div class="faq-body">
          <p>当前 <b>WorkBuddy 皮肤管理器</b> 使用开发者<strong>自签名（ad-hoc）</strong>，没走 Apple 正式公证，macOS 会拦截——<b>不是软件有毒，是签名问题</b>。三种解决：</p>
          <div class="step-mini">
            <b>方式一（推荐）：右键 → 打开</b>
            <p>在「应用程序」里<strong>右键</strong>点「WorkBuddy 皮肤管理器」→「打开」，弹窗里再点「打开」。只需一次，之后双击即可。</p>
          </div>
          <div class="step-mini">
            <b>方式二：系统设置里「仍要打开」</b>
            <p><strong>系统设置 → 隐私与安全性</strong>，找到被拦截提示点「仍要打开」。</p>
          </div>
          <div class="step-mini">
            <b>方式三：终端清除隔离属性</b>
            <p><code>xattr -cr "/Applications/WorkBuddy 皮肤管理器.app"</code></p>
          </div>
        </div>
      </details>
      <details class="faq">
        <summary>📦 皮肤导入后看不到背景图 / 显示异常？</summary>
        <div class="faq-body">
          <p>确认：① 文件是标准 <code>.wbskin</code>（含 <code>skin.json</code> + <code>theme.css</code> + <code>images/</code>）；② 导入后<strong>点过「应用」</strong>；③ 部分皮肤依赖 WorkBuddy 特定版本 CSS 变量。异常可回「恢复默认」。</p>
        </div>
      </details>
      <details class="faq">
        <summary>🔁 重启 WorkBuddy 后皮肤没了？</summary>
        <div class="faq-body">
          <p>皮肤注入是<strong>内存级</strong>的：重启 WorkBuddy 需重新应用。在管理器再次点「应用」即可（管理器已记住你装了哪些皮肤）。</p>
        </div>
      </details>
      <details class="faq">
        <summary>🧩 skin-generator 怎么装到 WorkBuddy？</summary>
        <div class="faq-body">
          <p>把 <code>workbuddy-skin-generator.zip</code> 解压，文件夹放到 Skills 目录（用户级 <code>~/.workbuddy/skills/</code> 或项目级 <code>&lt;项目&gt;/.workbuddy/skills/</code>），重启 WorkBuddy 即可。</p>
        </div>
      </details>
    </div>
  </section>
</template>
