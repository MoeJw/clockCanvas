node2 =new Node(200,200,70,6) // the circle
one =new line(200,200,250,200)
//var x=[130,144,144,158,200,200,242,256,256,270]
//var y=[150,108,192,94,206,80,220,94,206,108,192,150]
var count=0
angle=18
flag=1
var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
 timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
return seconds
}

function eq(cx=200,cy=200,r=60){
    if(false){
       // angle=0
       
    }else{
        angle=angle+0.0025  
        requestAnimationFrame(Frame)
       
    }
   
   
     if(end()==2){
        x = cx + r * Math.cos(angle)
        y = cy + r * Math.sin(angle)
        one.Sx=x
        one.Sy=y
        one.ex=200
        one.ey=200 
        flag=1
         
     }
         
        
   
    console.log(angle)
}


function Frame(){
    if(flag){
        start()
        flag=0
    }
         
    eq()
                      
    text.clearRect(0,0,window.innerWidth,window.innerHeight);
    
    node2.draw2()
    one.draw()
   
    
       
}






Frame()