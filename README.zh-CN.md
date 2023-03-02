<img src="https://ch-resources.oss-cn-shanghai.aliyuncs.com/images/lang-icons/icon128px.png" width="22px" /> [English](./README.md) | 简体中文

# Open Recall

Open Recall是一个开源的N-Back任务游戏，类似于Simply-Recall(ios 可下载)，旨在提高人脑的工作记忆(working memory)和认知能力。

> 研究表名N-Back训练可能会导致流体智力（IQ）和工作记忆能力（Soveri等人，2017）的提升。

N-Back 游戏是一款记忆训练游戏，通过不断呈现一系列的物体（如字母、数字或图片）来提高工作记忆和认知能力。玩家的任务是在当前物体与序列中“n”步前呈现的物体相匹配时进行回答。“n”的值决定了游戏的难度，例如：如果“n”设置为1，玩家需要回忆上一个物体；如果“n”设置为2，玩家需要回忆上上个物体。游戏一般持续到玩家完成规定的回合数或犯规次数。玩家只需要专注呈现的物体并试回忆“n”步前呈现的物体即可。

## 玩一玩

你可以使用 [Open Recall 在 Vercel 上的部署版](https://open-recall.vercel.app/)。如果你的网络无法访问，可以尝试在本地部署此项目。

## Game

+ 步骤 1: 点击 `start` 按钮.
+ 步骤 2: 设置游戏的难度和时长等, 完成后点击 `play` 按钮.
+ 步骤 3: 开始训练你的大脑吧!

<table>
    <tr>
        <th>主页</th>
        <th>设置界面</th>
        <th>引导</th>
    </tr>
    <tr>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-home.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-play.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-desc.png" /></td>
    </tr>
    <tr>
        <th>游戏界面</th>
        <th>评分</th>
        <th>历史战绩</th>
    </tr>
    <tr>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-game.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-result.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/recall-history.png" /></td>
    </tr>

</table>

> 当难度 = 2, 你需要记住上上一个物品. 例如我们有一个列表: 苹果 (n - 2), 香蕉 (n - 1), 苹果 (n). 当前的物品为苹果，由于它和上上一个物品相同，所以你需要回答 `yes`.


## 本地部署


```bash
npm install

# 生产环境
npm run build

# 开发环境
npm run dev

```
