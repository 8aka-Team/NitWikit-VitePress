import{_ as s,c as n,a5 as t,o as e}from"./chunks/framework.O9ad3XaM.js";const p="/assets/math_1.C2FmVgWL.png",l="/assets/%E6%8B%AC%E5%8F%B7.DU2-4wQA.png",u=JSON.parse('{"title":"数学运算","description":"","frontmatter":{"title":"数学运算","sidebar_position":5},"headers":[],"relativePath":"Java/advance/kether/math.md","filePath":"nitwikit/docs-java/advance/kether/math.md","lastUpdated":1727754229000}'),i={name:"Java/advance/kether/math.md"};function o(c,a,r,h,d,m){return e(),n("div",null,a[0]||(a[0]=[t(`<h1 id="数学运算" tabindex="-1">数学运算 <a class="header-anchor" href="#数学运算" aria-label="Permalink to &quot;数学运算&quot;">​</a></h1><h2 id="math" tabindex="-1">Math <a class="header-anchor" href="#math" aria-label="Permalink to &quot;Math&quot;">​</a></h2><p>详细请查看：<a href="https://www.yuque.com/sacredcraft/kether/action-math" target="_blank" rel="noreferrer">https://www.yuque.com/sacredcraft/kether/action-math</a></p><div class="language-kether vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kether</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 加法运算：等价于 1+2+3 = 6 */</span></span>
<span class="line"><span>math add [ 1 2 3 ]</span></span>
<span class="line"><span>math + [ 1 2 3 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 减法运算：等价于 9-5-1 = 3 */</span></span>
<span class="line"><span>math sub [ 9 5 1 ]</span></span>
<span class="line"><span>math - [ 9 5 1 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 乘法运算：等价于 3x2x5 = 30 */</span></span>
<span class="line"><span>math mul [ 3 2 5 ]</span></span>
<span class="line"><span>math * [ 3 2 5 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 除法运算：等价于 6÷2 = 3 */</span></span>
<span class="line"><span>math div [ 6 2 ]</span></span>
<span class="line"><span>math / [ 6 2 ]</span></span></code></pre></div><p>除了上面几种用法，Math 还有一种比较舒服的写法：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>​/* 计算 1 + 3 x 6 ÷ 3 - 2 */</span></span>
<span class="line"><span>math 1 + 3 * 5 / 6 - 2</span></span></code></pre></div><p>当然也可以用上一节学到的变量来运算</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/vul eval set a to 1 set b to 2 math &amp;a - &amp;b</span></span></code></pre></div><p><img src="`+p+'" alt=""></p><h2 id="calc" tabindex="-1">calc <a class="header-anchor" href="#calc" aria-label="Permalink to &quot;calc&quot;">​</a></h2><p>详细请查看：<a href="https://github.com/TabooLib/taboolib/blob/master/module/module-kether/src/main/kotlin/taboolib/module/kether/action/transform/ActionJexl3.kt" target="_blank" rel="noreferrer">https://github.com/TabooLib/taboolib/blob/master/module/module-kether/src/main/kotlin/taboolib/module/kether/action/transform/ActionJexl3.kt</a></p><ul><li><p>加法：a + b</p></li><li><p>减法：a - b</p></li><li><p>乘法：a * b</p></li><li><p>除法：a / b</p></li><li><p>取余：取余操作使用 % 符号。例如，计算 10 除以 3 的余数：10 % 3。</p></li></ul><p>当然也可以使用括号：</p><p><img src="'+l+'" alt=""></p>',14)]))}const k=s(i,[["render",o]]);export{u as __pageData,k as default};
