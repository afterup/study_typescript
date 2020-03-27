function add(n1: number, n2: number, showResult: boolean, resultPhrase: string){
  if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    throw new Error('Incorrect input');
  }

  const result = n1 + n2;
  if(showResult){
    return resultPhrase + result; 
  }else{
    return result + "";
  }
}

let n1 = 5;
const n2 = 3;
const showResult = true;
const resultPhrase = "Result is:";

/* 
  변수 초기화와 선언을 동시에 할 시 타입이 자동 지정되고,
  따로 선언하고 타입을 지정안해줄 시에는 any 타입을 가지게된다.
*/
let useName = "Use"; 
let number;
number = 4;

document.body.innerHTML = add(n1, n2, showResult, resultPhrase);
