const allb = ['./img/p_1.png','./img/p_2.png','./img/p_3.png','./img/p_4.png','./img/p_5.png','./img/p_6.png','./img/p_7.png']
var fscore = 0;
var click = 0;
var animation = 0;
var creating;
function gamestart2(){
     creating =  setInterval(()=>{
     var item = allb[Math.floor(Math.random()*allb.length)];
     var ball = document.createElement('a');
     var imgw =Math.floor(Math.random()* (5*vw));
     var h = imgw + 20*vh;
     if(imgw < 2*vw){imgw = 2*vw}
     ball.style.left =  Math.floor(Math.random()* screen.width) + 'px';
     ball.style.top = '-50vh' ;
     ball.style.borderBottomLeftRadius = '15%'
     ball.style.borderBottomRightRadius = '15%'
     ball.style.animation = 'down '+animation +'ms linear';
     ball.style.display ='flex'; ball.style.alignItems = 'flex-end';
     ball.style.height = h + 'px';
     ball.style.position = 'absolute';
     ball.style.animationDelay =  Math.floor(Math.random()* 3)+'s';
     ball.style.background = `linear-gradient(transparent, rgba(170, 170, 170, 0.363))`;
     ball.innerHTML = `<img src=${item} onclick='clk(event)' width='${imgw}' style='animation:rotate 4000ms linear infinite;position:relative;top:${1.5*vh}px'>`;
     if(ball != null){
        setTimeout(()=>{ball.remove()},(animation-700))
     }
     document.getElementById('box').appendChild(ball)
},1000)
    

}
window.onload=()=>{
    var audio = new Audio('./img/beyond.mp3');
    audio.play();
    audio.loop = true;
}
function clk(event){
    event.target.removeAttribute("onclick");
    if(parseInt($(event.target).css("width"))<screen.availWidth/100 *3){fscore = fscore+3}
    else{fscore++;}
    click++;
    $('#score').text(fscore)
    for (let i = 0; i < 5; i++) {
        var a = document.createElement('b');
        a.setAttribute('class','fire');
        a.setAttribute('id',`fire${i}`)
        a.style.top = 105*vh ;
        a.style.left = 50*vw ;
        document.getElementById('box').prepend(a)   
        setTimeout(()=>{
           document.getElementById(`fire${i}`).remove();  
        },40)
        setTimeout(()=>{
            event.target.setAttribute('src','./img/out.gif');
            event.target.style.animation = '';
            document.body.style.animation = 'shak 400ms linear';
            var audio = new Audio('./img/Boom.mp3')
            audio.play();
            setTimeout(()=>{document.body.style.animation ='';},1000)
            setTimeout(()=>{event.target.setAttribute('width','200');event.target.style.top='-2vh'},5) ;
            if(event.target.tagName === 'IMG'){
                event.target.parentNode.style.background = 'none';
            }else{
                event.target.style.background = 'none';
            }
            event.target.style.left = '-6vw';
            event.target.style.top = '12vh';
            setTimeout(()=>{event.target.remove()},700)
        },200)
        }
    $("#fire0").animate({top: event.clientY - 4*vh +'px',
                            left : event.clientX - 7.5*vw +'px'    
    },3);
    $("#fire1").animate({top: event.clientY - 4*vh +'px',
                            left : event.clientX - 7.5*vw +'px'    
    },20);
    $("#fire2").animate({top: event.clientY - 4*vh +'px',
                            left : event.clientX - 7.5*vw +'px'    
    },40);
    $("#fire3").animate({top: event.clientY - 4*vh +'px',
                            left : event.clientX - 7.5*vw +'px'    
    },50);
    $("#fire4").animate({top: event.clientY - 4*vh +'px',
                            left : event.clientX - 7.5*vw+'px'    
    },60);
   
}