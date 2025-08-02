# 列表

- [纯 CSS 实现超过固定高度后出现展开折叠按钮](#实现超过固定高度后出现展开折叠按钮)
- [实现文字交融效果](#实现文字交融效果)
-

## 纯 CSS 实现超过固定高度后出现展开折叠按钮 {#实现超过固定高度后出现展开折叠按钮}

- **源码地址**
  - [https://juejin.cn/post/7202030221793165368](https://juejin.cn/post/7202030221793165368)
- **预览效果**
  - ![纯CSS实现超过固定高度后出现展开折叠按钮](/public/images/css/nb/纯CSS实现超过固定高度后出现展开折叠按钮.gif)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        height: 100%;
      }

      body {
        margin: 0;
        padding: 0 0 100px;
        display: flex;
        gap: 20px;
        justify-content: center;
        background: aliceblue;
      }

      .content {
        width: 400px;
        max-height: 230px;
        overflow: hidden;
        border-radius: 4px;
        outline: 2px dashed royalblue;
      }

      .section {
        display: flex;
      }

      pre {
        white-space: pre-wrap;
      }

      .content::before {
        content: "";
        width: 100px;
        height: 100%;
        float: left;
      }

      .btn {
        float: right;
        width: 100px;
        text-align: center;
        position: relative;
        left: calc(50% - 50px);
        transform: translateY(-100%);
        cursor: pointer;
      }

      .btn::after {
        content: "";
        display: block;
        height: 34px;
        background-color: #666;
        transition: 0.2s background-color;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E %3Cpath d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'%3E%3C/path%3E %3C/svg%3E")
          center/ 24px 24px no-repeat;
      }

      .btn:hover::after {
        background-color: royalblue;
      }

      .btn::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 34px;
      }

      .text {
        box-sizing: border-box;
        width: 100%;
        padding: 10px 15px;
        float: right;
        line-height: 1.5;
        margin: 0;
        margin-left: -100px;
        font-size: 18px;
        color: #232323;
        -webkit-mask: linear-gradient(red 150px, transparent 200px);
      }

      .content-check:checked + .content {
        max-height: fit-content;
      }

      .content-check:checked + .content .btn {
        left: auto;
        right: calc(50% - 50px);
      }

      .content-check:checked + .content .btn::after {
        transform: scaleY(-1);
      }

      .content-check:checked + .content .text {
        -webkit-mask: none;
      }
    </style>
  </head>
</html>
  <body>
    <div class="wrap">
      <h4>内容较多时</h4>
      <div class="section">
        <input class="content-check" type="checkbox" id="c1" hidden />
        <div class="content">
          <pre class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas eum maiores ab commodi quasi eveniet soluta officiis, nihil eius? Nostrum sit a facere iusto deleniti, voluptate nobis neque quisquam.
                    Hic totam fuga tenetur vero quas commodi laboriosam sapiente. Praesentium, sint fugit cumque omnis laudantium illo animi dolor id obcaecati, sequi, facilis nostrum tenetur temporibus! Commodi nesciunt excepturi eius repellendus.
                </pre
          >
          <label for="c1" class="btn"></label>
        </div>
      </div>
    </div>
    <div class="wrap">
      <h4>内容较少时</h4>
      <div class="section">
        <input class="content-check" type="checkbox" id="c2" hidden />
        <div class="content">
          <pre class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae inventore eius sequi? Ad quam dolor ipsam, dolore nesciunt quia porro officia saepe odio beatae sed aperiam minima assumenda? Accusamus, officia!
                </pre
          >
          <label for="c2" class="btn"></label>
        </div>
      </div>
    </div>
  </body>
</html>
```

## 纯 CSS 实现文字交融效果 {#实现文字交融效果}

- **源码地址**
  - [https://juejin.cn/post/7245316146336563261](https://juejin.cn/post/7245316146336563261)
- **预览效果**
  - ![纯CSS实现文字交融效果](/public/images/css/nb/纯CSS实现文字交融效果.gif)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background: #000;
      }

      .container {
        margin-top: 50px;
        text-align: center;
        background-color: #000;
        filter: contrast(30);
      }

      .text {
        font-size: 100px;
        letter-spacing: -50px;
        color: #fff;
        animation: showup 3s linear forwards;
      }

      @keyframes showup {
        0% {
          filter: blur(10px);
        }

        100% {
          letter-spacing: 10px;
          filter: blur(2px);
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <span class="text">Duyi Education</span>
    </div>
  </body>
</html>
```

## 文字雨动画

- **源码地址**
  - [https://juejin.cn/post/7270648629378367528](https://juejin.cn/post/7270648629378367528)
- **预览效果**
  - ![文字雨动画](/public/images/css/nb/文字雨动画.gif)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Text Rain Animation</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --body-color: #181c1f;
        --primary-color: #ffffff;
      }

      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: var(--body-color);
      }

      .container {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        /* 添加一个从下往上线性渐变的镜像效果，增加视觉层次感 */
        -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, transparent, transparent, #0005);
      }

      .cloud {
        position: relative;
        top: 50px;
        z-index: 100;

        /* 横向云朵 */
        width: 320px;
        height: 100px;
        background-color: var(--primary-color);
        border-radius: 100px;

        /* drop-shadow函数将阴影效果应用于投影图像 */
        filter: drop-shadow(0 0 30px var(--primary-color));
      }

      .cloud::before {
        content: "";
        /* 左侧小云朵 */
        width: 110px;
        height: 110px;
        background-color: var(--primary-color);
        border-radius: 50%;
        position: absolute;
        top: -50px;
        left: 40px;

        /* 右侧大云朵 */
        box-shadow: 90px 0 0 30px var(--primary-color);
      }

      .cloud .text {
        position: absolute;
        top: 40px;
        height: 20px;
        line-height: 20px;

        text-transform: uppercase;
        color: var(--primary-color);
        /* 为文字添加阴影，看上去发光，增加视觉效果 */
        text-shadow: 0 0 5px var(--primary-color), 0 0 15px var(--primary-color),
          0 0 30px var(--primary-color);
        transform-origin: bottom;
        animation: animate 2s linear forwards;
      }

      @keyframes animate {
        0% {
          transform: translateX(0);
        }

        70% {
          transform: translateY(290px);
        }

        100% {
          transform: translateY(290px);
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="cloud">
        <!-- <div class="text">a</div> -->
        <!-- <div class="text">b</div> -->
        <!-- <div class="text">c</div> -->
        <!-- 雨滴将会在这里出现 -->
      </div>
    </div>
  </body>
  <script>
    // 生成字母和数字数组
    function generateText() {
      const letters = [];
      const numbers = [];

      const a = "a".charCodeAt(0);

      for (let i = 0; i < 26; i++) {
        letters.push(String.fromCharCode(a + i));

        if (i < 9) {
          numbers.push(i + 1);
        }
      }

      return [...letters, ...numbers];
    }

    // 从生成的数组中随机取出一个字符
    function randomText() {
      const texts = generateText();
      const text = texts[Math.floor(Math.random() * texts.length)];

      return text;
    }

    function rainEffect() {
      const cloudEle = document.querySelector(".cloud");
      const textEle = document.createElement("div");

      textEle.innerText = randomText();
      textEle.classList.add("text");

      const left = Math.floor(Math.random() * 310);
      const size = Math.random() * 1.5;
      const duration = Math.random();
      const styleSheets = {
        left: `${left}px`,
        fontSize: `${0.5 + size}em`,
        animationDuration: `${1 + duration}s`,
      };
      Object.assign(textEle.style, styleSheets);

      cloudEle.appendChild(textEle);
      setTimeout(() => {
        cloudEle.removeChild(textEle);
      }, 2000);
    }

    // 每隔20ms创建一个雨滴元素
    setInterval(() => rainEffect(), 20);
  </script>
</html>
```
