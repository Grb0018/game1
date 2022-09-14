
    const firebaseConfig = {
      apiKey: "AIzaSyAFH2Ku4v8R-6-e_Q1Vvoa-HElepQ6UrSY",
      authDomain: "asteroid-ca79b.firebaseapp.com",
      databaseURL: "https://asteroid-ca79b-default-rtdb.firebaseio.com/",
      projectId: "asteroid-ca79b",
      storageBucket: "asteroid-ca79b.appspot.com",
      messagingSenderId: "88669616880",
      appId: "1:88669616880:web:b7702e3620be9a9ada6035",
      measurementId: "G-8RHJ1E5587"
    };
    firebase.initializeApp(firebaseConfig);
    // Reference messages collection
    function demo(){
        var a = document.getElementById('playername').value;
        var messagesRef = firebase.database().ref('player /' + a);
        messagesRef.set({
            score: fscore
        })
    };
    function getdata(){
        document.getElementById('player').innerHTML += `<span class="head">Loading ....</span>`;
        document.body.getElementsByClassName('link-2')[0].click();
    var leadsRef = firebase.database().ref();
    leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    childSnapshot.forEach(function(childchildSnapshot){ 
        var name = childchildSnapshot.key
        childchildSnapshot.forEach(function(childchildchildSnapshot){ 
            var score = childchildchildSnapshot.val();
            var a = {name: name, score: score};
            cc.push(a)
    })
    })
    });
});

var intchk = setInterval(()=>{
    if(cc.length>0){
        document.getElementById('player').innerHTML ='';
        document.getElementById('player').innerHTML += `<span class="head">Player's Details</span><div class="all"></div>`;
        setTimeout(()=>{for (let i = 0; i < cc.length; i++) {
            document.getElementsByClassName('all')[0].innerHTML += `
            <span class="detail" >
                <p>Player Name : ${cc[i].name}</p>
                <p>Score : ${cc[i].score}</p>
            </span>`
        }
        var h = -(parseInt($('.all').css('height')) + 60);
        $('.all').css({
            top : '30vh'
        });
        $('.all').animate({
            top: h
         },cc.length*2000)
        var animation = setInterval(()=>{
            $('.all').css({
                top : '41vh'
            });
            $('.all').animate({
               top: h
            },cc.length*2000)
        },(cc.length*2000)+50)
    },1200);
        
        
        
        clearInterval(intchk)
    }
},1000)
}
getdata();





 
