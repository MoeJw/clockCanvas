angle=-Minute_(timeList[2])

flag=1
count=0
function start() {
    startTime = new Date();
  };
  
  function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
  timeDiff /= 1000;
  
    // get seconds 
    //var seconds = timeDiff//Math.round(timeDiff);
    //console.log(seconds + " seconds");
  return timeDiff
  }

function eq(cx=200,cy=200,r=100){

    if(flag){
        start()
        flag=0
    }

    if(false){
       // angle=0
        
    }
    //console.log(angle)
   
    
     if(true){
         /*if(angle>=60){
             angle=0
         }*/    
         setTime()
       //  x = 195 +90 * Math.cos(angle)   ///  -convert(180)/2
        //y = 206 + 90 * Math.sin(angle)   ///
        
         
        //console.log(count)
    count++
        secondes.Sx=x
        secondes.Sy=y
        secondes.ex=195
        secondes.ey=206
        flag=1
        count++
        requestAnimationFrame(Frame)
         
     }
         
       
   
}


function Frame(){
    
         
    eq()
                      
    text.clearRect(0,0,window.innerWidth,window.innerHeight);
    
    node2.draw2()
    //one.draw()
        Minutes.draw()
    Hours.draw()
    secondes.draw()
   
    
       
}





Frame()