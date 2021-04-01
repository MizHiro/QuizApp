// 問題文、選択肢、解答の内容を定義
const quiz = [
  {
    question: "\"refer\" means ...",
    answers: [
      'とにかく',
      '購入する',
      '参照する',
      '申し出る'
    ],
    correct: '参照する'
  },
  {
    question: "\"anyway\" means ...",
    answers: [
      'とにかく',
      '購入する',
      '参照する',
      '申し出る'
    ],
    correct: 'とにかく'
  },
  {
    question: "\"purchase\" means ...",
    answers: [
      'とにかく',
      '購入する',
      '参照する',
      '申し出る'
    ],
    correct: '購入する'
  }
]

let quizIndex = 0;

let score = 0;

const $btn = document.getElementsByTagName('button');

// オブジェクトをHTMLへ反映
const setupQuiz = () => {
  document.getElementById('js-quiz').textContent = quiz[quizIndex].question;

  for (let i = 0; i < $btn.length; i++) {
    $btn[i].textContent = quiz[quizIndex].answers[i];
  }
}
setupQuiz();

// 正誤判定→問題遷移の判定
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert('正解');
    score++;
  } else {
    alert('不正解');
  }

  quizIndex++;
  if (quizIndex < quiz.length) {
    setupQuiz();
  } else {
    alert('終了 Score：' + score + '/' + quiz.length);

  }
}

for (let i = 0; i < $btn.length; i++) {
  $btn[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}