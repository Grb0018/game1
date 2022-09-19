var playerName; 
const vh = screen.availHeight/100;
const vw = screen.availWidth/100;
let score = parseInt(document.getElementById('score').innerText)
function gamestart(){
document.getElementById('box').addEventListener('click',function(event){
    for (let i = 0; i < 5; i++) {
    var a = document.createElement('b');
    a.setAttribute('class','fire');
    a.setAttribute('id',`fire${i}`)
    a.style.top = 105*vh ;
    a.style.left = 50*vw ;
    document.getElementById('box').prepend(a)   
    setTimeout(()=>{
       document.getElementById(`fire${i}`).remove(); 
    },140)
    }
$("#fire0").animate({top: event.clientY - 4*vh +'px',
                     left : event.clientX - 7.5*vw +'px'    
},30);
$("#fire1").animate({top: event.clientY - 4*vh +'px',
                     left : event.clientX - 7.5*vw +'px'    
},60);
$("#fire2").animate({top: event.clientY - 4*vh +'px',
                     left : event.clientX - 7.5*vw +'px'    
},90);
$("#fire3").animate({top: event.clientY - 4*vh +'px',
                     left : event.clientX - 7.5*vw +'px'    
},120);
$("#fire4").animate({top: event.clientY - 4*vh +'px',
                     left : event.clientX - 7.5*vw +'px'    
},150);

})
}

let mode = document.body.querySelectorAll('.modal__btn');
mode.forEach(element => {
    var a = $(element).text();
    console.log(a)
    element.onclick = ()=>{
        if(document.getElementById('playername').value != ''){
            if(a==='Easy →'){animation=10000}
            else if(a==='Medium →'){animation=8000}
            else if(a==='Hard →'){animation=5500}
            $('#startscreen').fadeOut('700');
        setTimeout(()=>{
             playerName =  document.getElementById('playername').value;
            gamestart2();
        gamestart();
        gamestart3();
        },1000)
        }else{
            alert('Please Enter Your Name')
        } 
    };
});
const getUA = () => {
    let device = "Unknown";
    const ua = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
    }
    Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
    return device;
}
var orio = false;
document.body.onload = () =>{
document.getElementById('load').style.display = 'none';
if(navigator.userAgent.includes('Mobile')){
    if(window.innerHeight > window.innerWidth){
        $('#short').css({display: 'flex'});
        var sr = setInterval(()=>{
            if(window.innerHeight < window.innerWidth && orio==false){
                location.reload();
                orio=true;
                $('.all').css({animation: 'none'})
            }
        },50)
    }
}
else{
    $('#short').hide();
}
}



document.getElementsByClassName('link-1')[0].onclick = ()=>{
    var audio = new Audio('./img/beyond.mp3');
    audio.play();
    audio.loop = true;
   
}
