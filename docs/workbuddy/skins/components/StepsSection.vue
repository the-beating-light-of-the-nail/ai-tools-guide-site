<script setup lang="ts">
import { MGR_DMG_URL } from './skins-data'
</script>

<template>
  <section id="steps" class="section">
    <div class="section-head">
      <span class="kicker">3 步上手</span>
      <h2>挑皮肤、下皮肤、用皮肤</h2>
      <p>不想折腾？照着这三步来，几分钟就能换上新皮肤。</p>
    </div>
    <ol class="steps">
      <li class="step">
        <div class="step-num">1</div>
        <div class="step-body">
          <h3>下载皮肤管理器 App</h3>
          <p>一个纯桌面应用（macOS <code>.dmg</code>），不依赖浏览器。双击打开后拖进「应用程序」即可安装。</p>
          <a class="btn btn-primary btn-sm" :href="MGR_DMG_URL" target="_blank" rel="noopener">下载 .dmg（约 103 MB）</a>
        </div>
      </li>
      <li class="step">
        <div class="step-num">2</div>
        <div class="step-body">
          <h3>浏览并下载喜欢的皮肤</h3>
          <p>往下翻到「皮肤画廊」，挑你中意的那一款，点一下就能下载 <code>.wbskin</code> 皮肤包。</p>
          <a class="link" href="#gallery">去画廊挑皮肤 ↓</a>
        </div>
      </li>
      <li class="step">
        <div class="step-num">3</div>
        <div class="step-body">
          <h3>在管理器中导入并应用</h3>
          <p>打开皮肤管理器，把 <code>.wbskin</code> 拖进去（或点「导入」），再点「应用」即可换肤。随时可「恢复默认」。</p>
          <span class="pill pill--mgr">提示：App 已预装 3 款皮肤，下载的会自动加入列表</span>
        </div>
      </li>
    </ol>
    <div class="flow-strip">
      <span class="flow-node">① 下载 App</span>
      <span class="flow-arrow">→</span>
      <span class="flow-node">② 挑皮肤下载</span>
      <span class="flow-arrow">→</span>
      <span class="flow-node">③ 导入并应用</span>
    </div>
  </section>
</template>
