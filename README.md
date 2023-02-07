# Open Recall

This is an Open Source alternative to the Simply-Recall or other N-Back Task Games designed to improve working memory and cognitive abilities.

> Open Recall is a memory improvement Game based on N-Back Task. Research shows that N-Back training may lead to gains in fluid intelligence (IQ) and working memory ability (Soveri et al., 2017).

The N-Back task is a memory training game that is designed to improve working memory and cognitive abilities. To play the game, you will be presented with a sequence of items such as letters, numbers, or words. Your goal is to indicate whenever the current item matches the item that was presented "n" steps back in the sequence. The value of "n" determines the difficulty of the task. For example, if "n" is set to 1, you would need to recall the item that was presented one step back. If "n" is set to 2, you would need to recall the item that was presented two steps back, and so on. The game typically continues until you have completed a certain number of rounds or made a certain number of errors. To play, simply focus on the items as they are presented and try to recall the item that was presented "n" steps back. Good luck!

## Play it

You can play the game at [Open Recall On Vercel](https://open-recall.vercel.app/)

## Game

+ step 1: click `start` button.
+ step 2: set game time limit and level, and click `play` button.
+ step 3: enjoy the game.

> When Level = 2, you need to remember the previous two items. Suppose we have a list: Apple (n - 2), Banana (n - 1), Apple (n). Click yes because the current item is the same as the item two steps back.


<table>
    <tr>
        <th>Home</th>
        <th>Setting</th>
        <th>Guide</th>
    </tr>
    <tr>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-home.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-play.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-desc.png" /></td>
    </tr>
    <tr>
        <th>Playing</th>
        <th>Score</th>
        <th>History</th>
    </tr>
    <tr>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-game.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/open-recall-result.png" /></td>
        <td><img src="https://ch-open-sharing.oss-us-west-1.aliyuncs.com/open-recall/recall-history.png" /></td>
    </tr>

</table>


## Deploy

```bash
npm install
npm run build
```
