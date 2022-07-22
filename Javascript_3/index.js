const quiz =[
    {
        question : 'ゲーム市場、最も売れたゲーム機は次のうちどれ',
        answers:[
            'スーファミ',
            'プレステ2',
            'スイッチ',
            'DS'            
        ],
        correct : 'DS'
    },
    {
        question : 'ゲーム市場、最も売れたゲーム機は次のうちどれ',
        answers:[
            'スーファミ',
            'プレステ2',
            'スイッチ',
            'DS'            
        ],
        correct: 'スイッチ'
    },
    {
        question : 'ゲーム市場、最も売れたゲーム機は次のうちどれ',
        answers:[
            'スーファミ',
            'プレステ2',
            'スイッチ',
            'DS'            
        ],
        correct : 'プレステ2'

    }
]

const quizLength = quiz.length;
let quizIndex = 0;

/*
const answers = [
    'スーファミ',
    'プレステ2',
    'スイッチ',
    'DS'
];
const correct = 'DS';
*/


//定数にHTMLオブジェクトを定義する場合は頭に＄マークをつける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;



//画面にクイズ表示（リファクタリング後）
const setupQuiz = () =>{
    //定数の文字列をHTMLに反映させる
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    //ループインデックス
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++
    };
};

setupQuiz();

//画面にクイズ表示（リファクタリング前）
/*
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];
*/


//正誤判定の関数
const clickHandler =(e) => {
    if(correct===e.target.textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
    quizIndex++

    if(quizIndex<quizLength){
        //問題数があれば、こちらを実行
        setupQuiz();
    }else{
        //問題数がなければ、こちらを実行

    }
}
//正誤判定（リファクタリング後）

let handlerIndex = 0;

while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++
}

//正誤判定（リファクタリング前②）
/*
$button[0].addEventListener('click',(e)=>{
    clickHandler(e);
});

$button[1].addEventListener('click',(e)=>{
    clickHandler(e);
});

$button[2].addEventListener('click',(e)=>{
    clickHandler(e);
});

$button[3].addEventListener('click',(e)=>{
    clickHandler(e);
});
*/

//ボタンをクリックしたら正誤判定(リファクタリング前)

/*
$button[0].addEventListener('click',(e)=>{
    if(correct===e.target.textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});

$button[1].addEventListener('click',(e)=>{
    if(correct===e.target.textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});

$button[2].addEventListener('click',(e)=>{
    if(correct===e.target.textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});

$button[3].addEventListener('click',()=>{
    if(correct===$button[3].textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});
*/