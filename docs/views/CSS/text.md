# 文本

::: tip 说明
文本样式
:::

### 文本超出显示省略号

::: code-group

```css [单行文本]
/* 需要固定宽度 */
.ellipsis {
  width: 200px; /* 设置固定宽度 */
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 显示省略号 */
}
```

```css [多行文本]
.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 限制显示行数 */
  -webkit-box-orient: vertical;
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 显示省略号 */
}
```

:::

### 文本颜色渐变

**从上到下渐变：**

```js
background: linear-gradient(to bottom, #ff0000, #000000);
-webkit-background-clip: text;
color: transparent;
```

### 字母大小写

> 仅改变样式，不改变源数据

**首字母大写：**

```js
text-transform: capitalize;
```

**全字母大写：**

```js
text-transform: uppercase;
```

**全字母小写：**

```js
text-transform: lowercase;
```

### 小于 12px 文字

```js
function setSmallText(element, targetSize) {
  const scale = targetSize / 12; // 基于12px计算缩放比例
  element.style.fontSize = "12px";
  element.style.transform = `scale(${scale})`;
  element.style.transformOrigin = "left center"; // 根据需求调整原点
  element.style.display = "inline-block"; // 必须设置为inline-block或block
}
const smallText = document.getElementById("my-text");

setSmallText(smallText, 8);
```

### 插入换行

> 在 Unicode 中，0x000A 字符是专门控制换行的。在 CSS 中，我们可以写为 \000A 或 \A,我们可以用它来作为 ::after 伪元素的内容，并将其添加到指定元素的尾部，实现换行效果。

::: code-group

```html [HTML]
<div class="content">
  <span class="br">山有木兮木有枝，</span>
  <span class="br">心悦君兮君不知。</span>
</div>
```

```css [CSS]
.content {
  & .br::after {
    content: "\A";
    white-space: pre;
  }
}
```

:::

### 英文长文本换行

> 文字长度超出不折行一般发生在最后一个字符是英文单词或连写的数字，使用以上设置会使单词折断。

> 行内元素不生效

::: code-group

```css [CSS]
.long-text {
  white-space: pre-line;
  word-wrap: break-word;
}
```

:::

### 文字模糊

::: details 解释

> - text-shadow
>
>   - 只模糊文字，不影响其他元素
>   - 通过调整第三个参数（模糊半径）控制模糊程度
>
> - filter
>
>   - 会模糊整个元素（包括文字、边框、背景等）

:::

::: code-group

```css [text-shadow]
.blur-text {
  color: transparent; /* 使文字本身透明 */
  text-shadow: 0 0 8px #000; /* 创建模糊阴影效果 */
}
```

```css [filter]
.filter-blur {
  filter: blur(3px); /* 数值越大越模糊 */
}
```

:::

### 空心文字

::: details 解释

> - text-stroke
>
>   - 可以调整描边宽度和颜色
>
> - text-outline
>
>   - 可以通过增加更多阴影点来使描边更平滑

:::

::: code-group

```css [text-stroke]
.hollow-text {
  -webkit-text-stroke: 2px #000; /* 宽度和颜色 */
  color: transparent; /* 使文字内部透明 */
  /* 或者保留填充色 */
  /* color: white; */
}
```

```css [text-shadow]
.text-outline {
  color: white; /* 文字填充色 */
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0
      #000; /* 四个方向的阴影 */
}
```

:::

### 多行文本展开收起

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .wrapper {
        display: flex;
        margin: 50px auto;
        width: 800px;
        overflow: hidden;
        border-radius: 8px;
        padding: 15px;
        box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      }

      .text {
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        /* display: flex; */
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        position: relative;
      }

      .text::before {
        content: "";
        height: calc(100% - 24px);
        float: right;
      }

      .text::after {
        content: "";
        width: 999vw;
        height: 999vw;
        position: absolute;
        box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
        margin-left: -100px;
      }

      .btn {
        float: right;
        clear: both;
        margin-left: 10px;
        font-size: 16px;
        padding: 0 8px;
        background: #3f51b5;
        line-height: 24px;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        /* margin-top: -30px; */
      }

      .btn::before {
        content: "展开";
      }

      .exp {
        display: none;
      }

      .exp:checked + .text {
        -webkit-line-clamp: 999;
      }

      .exp:checked + .text::after {
        visibility: hidden;
      }

      .exp:checked + .text .btn::before {
        content: "收起";
      }
    </style>
  </head>

  <body>
    <div class="app">
      <div class="wrapper">
        <input id="exp1" class="exp" type="checkbox" />
        <div class="text">
          <label class="btn" for="exp1"></label>
          韩老一仍慷到后但两嗣德韩起打陈，满轻必，和学来爱救责彷衣卅见动么的罪司之百当龄，
          系下服冷护重皇无书太归元兮九，次也够了的，恨老人考秦传王何子下陀尘亓在落，锐的应葬我陀是妙助降才失秦惊房她胜能，
          只丈者人家之的不大帮，说妄他定诗变今够见耐书予德我，吴台药视不郭对是不和人到上的也极，在要不书太在国后章冇不仆胜秦，
          在何间动辜词给帮人设，原为感而当战沉逃我德尚无明褒得，绪怒洪畴而能，公要相氏，给圣房留人怒。
        </div>
      </div>
    </div>
  </body>
</html>
```

### 控制用户是否可以选择文本内容

::: details 解释

> - auto（默认值）
>
>   - 文本是否可选取决于浏览器默认行为，通常可以选中。
>
> - none
>
>   - 禁止用户选择文本，常用于按钮、图标等不希望被复制的元素。
>
> - text
>
>   - 允许选择文本，即使父元素设置了 user-select: none。
>
> - all
>
>   - 点击元素时会自动选中全部内容（比如一键复制场景）。
>
> - contain（部分浏览器支持）
>
>   - 选择受限于元素边界（比如在 div 内只能整体选中，不能部分选中）。

:::
::: code-group

```css [none]
.no-select {
  user-select: none; /* 禁止选中文本 */
}
```

:::
