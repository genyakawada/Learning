
//変数の宣言
let unko ='Hello World';
unko = 'Hello World2!!';
console.log(unko);

//定数の宣言
const bigUnko ='Hello Japan';
console.log(bigUnko);


//定数に代入するとUncaught TypeError: Assignment to constant variable.エラーが出る
//bigUnko = 'hello Tokyo';

console.log(bigUnko);

//配列
let inoki = ['イーチ','にーい','さーん','ダーー！'];
console.log(inoki);
console.log(inoki[0]);
console.log(inoki[1]);
console.log(inoki[2]);
console.log(inoki[3]);

//ループ分
let index = 0;
while(index < 5){
    //繰り返したい命令
    console.log(index);
    index++; //index+1
};

//ループ分と配列
const inoki2 = ['イーチ','にーい','さーん','ダーー！'];

//let index = 0;
while(index < inoki2.length){  //=4
    //繰り返したい命令
    console.log(inoki2[index]);
    index++; //index+1
};

//if - else
if(inoki2.length > 5){
    console.log('ボンバイエ！');
}else{
    console.log('ボンバ、、、');
}

//関数
//const inoki2 = ['イーチ','にーい','さーん','ダーー！'];

const test = (arg) =>{
    if(inoki2.length > arg){
        console.log('ボンバイエ！');
    }else{
        console.log('ボンバ、、、');
    }   
};
test(0);
test(1);
test(2);
test(3);
test(4);
test(5);


//オブジェクト
const unko2 = {
    color:'pink',
    size:'Big',
    purfume:'mint',
    goToilet: () => {
        console.log('Hello Toilet!');
    }
};

console.log(unko2.color);
console.log(unko2.size);
console.log(unko2.purfume);

console.log(unko2.goToilet());


//特殊なオブジェクト
console.log(window);
console.log(document);

//window.alert('Hello World');

console.log(document.getElementsByTagName('button')[1].addEventListener('click',()=>{
    window.alert('Hello World');
}));


