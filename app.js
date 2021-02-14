const quiz = [
{
  question:"ゲーム市場、最も売れたゲーム機は次の打ちどれ？",
  answers : [
    "スーパーファミコン",
    "プレイテーション2",
    "ファミコン",
    "ニンテンドーDS"
  ],
  correct : "ニンテンドーDS",
},{
  question:"色の三原色ではない色は？",
  answers : [
    "青",
    "緑",
    "赤",
    "黃"
  ],
  correct : "黃",
},{
  question:"たい焼きは、元々は鯛の形ではありませんでした。どんな形をしていたでしょうか？",
  answers : [
    "ウサギ",
    "カメ",
    "ヒヨコ",
    "人形"
  ],
  correct : "カメ",
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// オブジェクトを定数にするので定数名の頭に＄をつける
// 定数$buttonにbuttonのタグを定義
const $button = document.getElementsByTagName("button");
const buttonLength =$button.length;
// 問題文と選択肢を定義
const setupQuiz = () => {
  // 定数の文字列を反映させる
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

// ボタンをクリックしたら正解判定
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    // 問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！')
  }

};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};

