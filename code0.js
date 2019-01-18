node =new Node(130,150,50,50)
node2 =new Node(200,200,70,250)
one =new line(200,0,300,200)
//var x=[130,144,144,158,200,200,242,256,256,270]
//var y=[150,108,192,94,206,80,220,94,206,108,192,150]
var count=0
angle=18
function eq(cx=200,cy=200,r=70){
    if(false){
       // angle=0
       
    }else{
        angle=angle+0.05
        requestAnimationFrame(Frame)
       
    }
    x = cx + r * Math.cos(angle)
    y = cy + r * Math.sin(angle)
   
    one.Sx=x
    one.Sy=y
    one.ex=200
    one.ey=200
    console.log(angle)
}

function Frame(){

    eq()
                      
    text.clearRect(0,0,window.innerWidth,window.innerHeight);
    
    node2.draw2()
    one.draw()
   
    
       
}





Frame()