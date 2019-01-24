
//var x=[130,144,144,158,200,200,242,256,256,270]
//var y=[150,108,192,94,206,80,220,94,206,108,192,150]
/*  so one radian is eq to 57.2925 right,
    we need to make a function to convert the Minute to  the Hour range in Clock
    ....     
    2-->30
    1   60
    12   90
    11   120
    10   150
    9    180
    8    210
    7    240
    6    270
    5    300
    4    330
    3    360/0


*/
node2 =new Node(200,200,120,6) // the circle
one =new line(200,200,250,200)
Minutes =new line(200,200,200,150)
Hours=new line(200,200,250,200)
var currentdate=null
var timeList=null
var count=0
angle=18
flag=1
flag_on_Changing_Hour=0

var startTime, endTime;
count=0
function setTime(){
    currentdate = new Date(); 
     var datetime =   currentdate.getHours() + " "  
                + currentdate.getMinutes() + " " 
                + currentdate.getSeconds();
        timeList=datetime.split(" ")
        timeList[2]=parseInt(timeList[2])
        timeList[1]=parseInt(timeList[1])
        timeList[0]=parseInt(timeList[0])
        temp=12
        timeList[0]=12
        timeList[1]=0
       
        x = 195 + 70 * Math.cos(-Hour_Minute(timeList[0],timeList[1]))   ///  -convert(180)/2
        y = 206 + 70 * Math.sin(-Hour_Minute(timeList[0],timeList[1]))   ///
        Hours.Sx=x
        Hours.Sy=y
        Hours.ex=195
        Hours.ey=206

        x = 195 + 70 * Math.cos(-Hour_Minute(timeList[0],timeList[1]))   ///  -convert(180)/2
        y = 206 + 70 * Math.sin(-Hour_Minute(timeList[0],timeList[1]))   ///


        

       
            console.log(x,y)
        

}
setTime() /// setTime on load

function convert_Hours_to_dgree(Hour){
    var diff=0;
    /*if(Hour>3){
        diff=Hour-3
        Hour=diff*30
        return Hour
    }else{
        diff=3-Hour
        Hour=diff*30
        return Hour
    }*/
    diff=3-Hour
    Hour=diff*30
    return Hour
}
function Minute_(Minute){

}
function Hour_Minute(Hour,Minute){
    if(Minute==60){
        Hour++
        flag_on_Changing_Hour=1
        Minute=0

        
    }else{
        Minute=(convert(Minute)/2)
    }
    Hour=convert(convert_Hours_to_dgree(Hour))
    //console.log(Hour+Minute)    
   
        
        return  Hour+Minute
    
   
   
}

function convert(number){   /// will this to convert form Radian to dgree obviously :)
    number=number/57.295779513
    return number
}
function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
 timeDiff /= 1000;

  // get seconds 
  var seconds = timeDiff//Math.round(timeDiff);
  //console.log(seconds + " seconds");
return seconds
}

function eq(cx=200,cy=200,r=100){
    if(false){
       // angle=0
        
    }else{
        angle=angle+0.0025  
       // requestAnimationFrame(Frame)
       
    }
   
    
     if(true){
       /* x = cx + r * Math.cos(-Hour_Minute(8,60))   ///  -convert(180)/2
        y = cy + r * Math.sin(-Hour_Minute(8,60))   ///
        
         

    
        Minutes.Sx=x
        Minutes.Sy=y
        Minutes.ex=200
        Minutes.ey=200
        flag=1
        count++*/
       
         
     }
         
       
   
}


function Frame(){
    if(flag){
        start()
        flag=0
    }
         
    eq()
                      
   // text.clearRect(0,0,window.innerWidth,window.innerHeight);
    
    node2.draw2()
    //one.draw()
        //Minutes.draw()
    Hours.draw()
   
    
       
}





Frame()

/*
Last Sync: 20/1/2019 @ 20:20:33
Last Sync: 20/ @ 20:27:44
Last Sync: 20 28 44
            H  M   S
*/