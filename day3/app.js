let global="전역";

if(global === "전역"){
    let global="지역";
    console.log(global);  
}
console.log(global)
const globalVar="전역";

const number=20;
const name=`yeji's age is ${number}`;

console.log(name)

//null
//undefined
//NaN

// 참조 대이터 타입
const num1=1;
const num2=2;
const num3=3;

//const arr=[1,2,3];
const studnet={
    name:"yeji",
    age:40
}
console.log(studnet)

// 객체
// 1. 키 값으로 문자, Symbol 이라는 일부 자료형만 허용
// 2. 정렬과 관여X
// 3. 안의 데이터를 살표보려면, 키값을 통해 배열을 얻어서 배열을 순회
// 4. 키 값 사용 등 직접 사이즈를 판별
const studnetMap=new Map();
studnetMap.set("name","jibok")

// 맵
// 1. 키값으로 모든~! 데이터 타입을 허용
// 2. 삽입된 순서대로 정렬
// 3. map.size로 크기 확인
console.log(studnetMap)
console.log(studnet['name']);
console.log(studnet.name);

const arr=[1,1,0,0,3];

const setArr=new Set();
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);

console.log(setArr)

//연산자
// 산술, 증강, 대입, 비교, 논리(비트,Nullish)

//산술
//a/b=>목
//a%b=>나머지
//** 지수 연산

//증감()
let age=8;
age+=1;
age++;
//비교 연산자
//<><= >=
//==(단순 값 비교)VS===(자료형까지 비교)
//!==

//논리 연산자
//AND => && OR=>||, NOT=>!

//삼항
// 조건? 참일때 실행결과: 거짓일때 실행결과
const result=2<3?"참":"거짓";

// 대입 연산자
// &&=
// ||=
const nums=[10,20];
function sum(a,b){
    return a+b;
}

console.log(sum(...nums));
console.log(...arr)

if(arr[0]===10){
    // 참일 때 실행
}else if(arr[0]===1){
    // 두번째 조건이 참일 때 실행
}else{
    // 거짓일 때 실행
}

switch(arr[0]){
    case 10:
        //
        console.log("10")
        break;
    case 1:
        console.log("1")
        break;
    default:
        console.log('dksla')
        //
}