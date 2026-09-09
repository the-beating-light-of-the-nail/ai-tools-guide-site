<script setup lang="ts">
import { SKILL_ZIP_URL } from './skins-data'
</script>

<template>
  <section id="make" class="section section--make">
    <div class="make-head">
      <span class="kicker">进阶 · 给爱折腾的你</span>
      <h2>🛠️ 学习制作皮肤</h2>
      <p>现成的看腻了？你自己也能造。安装 <b>skin-generator</b> Skill 后，给 AI 一张图，它就会自动取色并按五层 CSS 架构生成标准 <code>.wbskin</code> 皮肤包。</p>
    </div>
    <div class="make-steps-grid">
      <div class="make-step">
        <div class="make-step-icon">🧩</div>
        <h4>安装 Skill</h4>
        <p>把 skill 放进 WorkBuddy 的 Skills 目录，重启 WorkBuddy 即可在对话中调用。</p>
      </div>
      <div class="make-step">
        <div class="make-step-icon">🖼️</div>
        <h4>给图生成</h4>
        <p>在对话里上传任意参考图，说一句「帮我做个 WorkBuddy 皮肤」。</p>
      </div>
      <div class="make-step">
        <div class="make-step-icon">🚀</div>
        <h4>导出应用</h4>
        <p>生成 <code>.wbskin</code> 后导入皮肤管理器，点「应用」即可换上新皮肤。</p>
      </div>
    </div>
    <div class="make-demo">
      <div class="make-demo-card">
        <div class="make-demo-bar">
          <span class="dot r"></span>
          <span class="dot y"></span>
          <span class="dot g"></span>
          <span class="make-demo-title">WorkBuddy · Agent 对话演示</span>
        </div>
        <div class="make-demo-body">
          <div class="chat-row user">
            <div class="chat-avatar">🧑</div>
            <div>
              <div class="chat-bubble">用这张图帮我做一个 WorkBuddy 皮肤</div>
              <div class="chat-meta">你 · 刚刚</div>
            </div>
          </div>
          <div class="chat-row bot">
            <div>
              <div class="chat-bubble">
                收到！已分析图片主色，正在生成五层 CSS 主题… ✅ 完成
                <br />
                <b>赛博霓虹.wbskin</b>
                <br />
                <span class="muted">暗色主题 · 毛玻璃面板 · 霓虹强调色</span>
              </div>
              <div class="chat-meta">AI Agent · 刚刚</div>
            </div>
            <div class="chat-avatar">🤖</div>
          </div>
          <div class="chat-row bot">
            <div>
              <div class="chat-bubble">把它导入皮肤管理器，点「应用」就能换上了。需要我帮你再做一版浅色主题吗？</div>
              <div class="chat-meta">AI Agent · 刚刚</div>
            </div>
            <div class="chat-avatar">🤖</div>
          </div>
        </div>
      </div>
      <a class="btn btn-primary btn-lg" :href="SKILL_ZIP_URL" download>下载 skin-generator Skill（.zip）</a>
    </div>
  </section>
</template>
