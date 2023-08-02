//함수 생성 > 호출 
//함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼 수 없다!
//1. 생성 : function 함수명(매개변수명){재사용함수문법}
//2. 호출 : 함수명()
function func1(str){ //접속 회원 맞춤형 인사 함수생성
    console.log(`${str}님 어서오세요!`)
}
//생성함수 end
func1('홍길동')
func1('abc1234') //호출
//-----------------------------------
//함수 기능 : 리턴(return) 함수결과값 외부로 반환명령
function func2(a){
    return a+1 //값만 내보내는 함수 //리턴활용 함수 결과값만 외부로 반환
}
func2(50) //함수결과값을 출력하는 메서드가 없어 출력X
console.log(func2(50)) //함수결과를 호출앞 메서드에 의해 출력 O
// window.alert(func2(100))
document.write(func2(10))
//-----------------------------------
function func3(a, b){
    return a*b //함수 내 return 1개만 존재
}
console.log(func3(10,20))
console.log(func3(2,3))
//-----------------------------------
let total = 0
function func4(a){
    total = a
    total++
    return total
    total++ //return 뒤에 있는 js는 실행하지 못한다.
}
console.log(func4(10))
//-----------------------------------
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 //10+20=30
    num2 = a+b //20제거, 2+4=6
    num1 += num2 //30+6=36
    return num1 //36 외부반환
}
console.log(func5(2,4)) //36 함수호출
//-----------------------------------
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    // txtInput[0].style.backgroundColor = 'aqua'
    bg(txtInput[0],'yellow') //노랑
})
txtInput[1].addEventListener('focus',function(){
    // txtInput[1].style.backgroundColor = 'aqua'
    bg(txtInput[1],'blue') //파랑
})
txtInput[2].addEventListener('focus',function(){
    // txtInput[2].style.backgroundColor = 'aqua'
    bg(txtInput[2],'pink') //분홍
})
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터
function bg(target, color){
    return target.style.backgroundColor = color
}
//-----------------------------------
//관심상품, 알림설정 이미지에 마우스를 올렸을 때
//off -> on 이미지 변경
//마우스를 나갔을 때 on -> off 이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg) //변수 정상 확인
likeImg.addEventListener('mouseover', function(){
    console.log('over') //이벤트 정상 확인
    // likeImg.src = './images/heart_on.png'
    onOff(this,'heart','on') //이벤트 자체 현재 대상 = js 키워드 this 사용
})
likeImg.addEventListener('mouseout',function(){
    console.log('out') 
    // likeImg.src = '/images/heart_off.png'
    onOff(this,'heart','off')
})
ideaImg.addEventListener('mouseover', function(){
    // ideaImg.src = './images/idea_on.png'
    onOff(this,'idea','on')
})
ideaImg.addEventListener('mouseout',function(){
    // ideaImg.src = '/images/idea_off.png'
    onOff(this,'idea','off')
})
function onOff(target,name,status){
    return target.src = `./images/${name}_${status}.png`
}