
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
secondes =new line(200,200,250,200)
Minutes =new line(200,200,200,150)
Hours=new line(200,200,250,200)
var currentdate=null
var timeList=null
var count=0

flag_on_Changing_Hour=0

var startTime, endTime;
count=0
temp=0
nn=[]
timeList=[]
function setTime(){
    currentdate = new Date(); 
     var datetime =   currentdate.getHours() + " "  
                + currentdate.getMinutes() + " " 
                + currentdate.getSeconds();
        nn=datetime.split(" ")
        timeList[2]=parseInt(nn[2])
        timeList[1]=+parseInt(nn[1])
        timeList[0]=parseInt(nn[0])
        
        //temp=12
        //timeList[0]=12
       // timeList[1]=0
      //timeList[0]=
       //timeList[1]=5
        x = 195 + 60 * Math.cos(-Hour_Minute(timeList[0],nn[1]))   ///  -convert(180)/2
        y = 206 + 60 * Math.sin(-Hour_Minute(timeList[0],nn[1]))   ///
        Hours.Sx=x
        Hours.Sy=y
        Hours.ex=195
        Hours.ey=206
       
        temp=Minute_(timeList[1]+timeList[2]/60)
       console.log(timeList[1]+timeList[2]/60) 

        x = 195 +90 * Math.cos(-temp)   ///  -convert(180)/2
        y = 206 + 90 * Math.sin(-temp)   ///
    
        
        Minutes.Sx=x
        Minutes.Sy=y
        Minutes.ex=195
        Minutes.ey=206
    
        x = 195 +100 * Math.cos(-Minute_(timeList[2]))   ///  -convert(180)/2
        y = 206 + 100 * Math.sin( -Minute_(timeList[2]))   ///

        
         secondes.Sx=x
        secondes.Sy=y
        secondes.ex=195
        secondes.ey=206


        

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
  
  if(Minute<=15){
      return convert(90-Minute*6)
  }
  
  if(Minute>=16&&Minute<=30){
    
      return convert(360-(Minute-15)*6)//+Minute_(timeList[2])
}

if(Minute>=31&&Minute<=45){
    
    //console.log(360-(Minute))
    return convert(270-(Minute-30)*6)
}
if(Minute>=46&&Minute<=60){
   
    return convert(180-(Minute-45)*6)
}


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
   
        
        return  Hour-Minute
    
   
   
}

function convert(number){   /// will this to convert form Radian to dgree obviously :)
    number=number/57.295779513
    return number
}




/*
Last Sync: 20/1/2019 @ 20:20:33
Last Sync: 20/ @ 20:27:44
Last Sync: 20 28 44
            H  M   S
*/