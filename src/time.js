 var t = 30 ;
 var cc = [];
function gamestart3(){
var tt =  setInterval(()=>{
    if(t<1){clearInterval(tt);
    clearInterval(creating);
    $('#endscreen').css({display: 'block'})
    document.querySelector('.yourscore').innerHTML += '  &nbsp; &nbsp; &nbsp; ' + document.getElementById('score').innerText;
    document.querySelector('.totalastroid').innerHTML +=  ` &nbsp;  &nbsp;  &nbsp; ` + click;
    demo();
    }else{t--;document.getElementById('time').innerText = t;document.body.style.overflowY='scroll'}
    },1000) 
}
  