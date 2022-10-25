var a = function(){ //'a'라는 변수의 정의
    console.log('A');
}

function testfunc(callback){ //2.testfunc함수는 callback이라는 파라미터를 갖는다.
    callback(); //3.callback 함수를 실행해라
}
   
testfunc(a); //1.testfunc함수를 변수a를 넣어서 실행해라