//getElement.. 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const aTagF = document.getElementsByClassName('first');
const aTagL = document.getElementsByClassName('last');
console.log(mainTag, hTag[0], contentsCls[0], boxId);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
console.log(aTagF, aTagF[0],aTagL);
//[ES6]querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
// const aTagQ = document.querySelector('a'); //첫번째만 읽음 > 키워드 추가(All)
const aTagQ = document.querySelectorAll('a'); //두개 이상일 때 모두 인식 > index 써서 대상 인식하기
console.log(mainTagQ, hTagQ, contentsClsQ,boxIdQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTag[2]);

// querySelector, querySelectorAll
// 객체가 2개 이상일 때 태그 작성 순서상 한개만 인식하고 싶다면
// == querySelector(dom)
// 객체가 2개 이상일 때 모두 잡아서 구분해서 사용하고 싶다면
// == querySelectorAll(dom)[index]
const firstClsQ = document.querySelector('.first');
console.log(firstClsQ);
const lastClsQ = document.querySelectorAll('.last');
console.log(lastClsQ[0]);
