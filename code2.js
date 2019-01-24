var can=document.getElementById("can");
can.width=window.innerWidth;
can.height=window.innerHeight;
can.style.background="#eee";
var counter=0;
text=can.getContext('2d');
var Rad=20;
var RangeLength=60;
var apperPostion=500;
var speed=5;
var sx=0;
var sy=0;
var ex=0;
var ey=0;
var flag=1;

function line(sx,sy,ex,ey){ //constructor of the line
	this.Sx=sx;//// postion of the start line
	this.Sy=sy;/////////////////////////////
	this.ex=ex;/// postion of the end of the line
	this.ey=ey;//////////////////////////////////
	this.draw=function(){
		text.beginPath();
		text.strokeStyle = '#FFA500';
		text.moveTo(this.Sx,this.Sy);
    text.lineTo(this.ex,this.ey);
    text.stroke();
	}
}
function Node(x,y,rad,val){  ///// constructor of the Node
	
	this.x=x; ///postion of the Node
	this.y=y;    ////////////////
	this.WhichWay=null;
	this.Radius=rad
	this.leftx=null;//////left child postion
	this.lefty=null;
	this.rightx=null;///right child postion
	this.righty=null;
	this.one=null;
	this.nextL=null
	this.nextR=null;
	this.one1=null;
	this.value=val;
	this.father=null;
	this.RangeLengthLx=40;
	this.RangeLengthLy=40;
	this.RangeLengthRx=40;
	this.RangeLengthRy=40;

	this.string=this.value+"";
	this.draw2=function(){
	
		text.beginPath();
		
		text.arc(this.x,this.y,this.Radius,0,Math.PI*2);
        text.fillStyle="blue";
		text.stroke();
		text.font = "10px Arial";
       text.fillText("",200,200);

	}
	
	for(var i=1;i<=12;i++){
		/*if(i<3){
			x = 200 + (rad-12)* Math.cos(Hour_Minute(i,0))   ///  -convert(180)/2
			y = 200 + 100* Math.sin(Hour_Minute(i,0))
		}else{
			x = 200 + 105* Math.cos(-Hour_Minute(i,0))   ///  -convert(180)/2
			y = 200 + 105* Math.sin(-Hour_Minute(i,0))   ///
		}
		if(i==12){
			x = 200 + 105* Math.cos(-Hour_Minute(i,0))   ///  -convert(180)/2
			y = 200 + (rad-12)* Math.sin(-Hour_Minute(i,0))   ///
		}
		if(i==11||i==3||i==4){
			x = 200 + 103* Math.cos(-Hour_Minute(i,0))   ///  -convert(180)/2
			y = 200 + (rad-12)* Math.sin(-Hour_Minute(i,0))   ///
		}*/
		
			x = 195 + 100* Math.cos(-Hour_Minute(i,0))   ///  -convert(180)/2
			y = 206 + 100* Math.sin(-Hour_Minute(i,0))   ///
		
			text.font = "19px Arial";
		if(i==3	){
			text.fillText(i,x,y+5);
		
		}else if(i==4){
			text.fillText(i,x,y+7);
		}else if(i==5){
			text.fillText(i,x-7,y);
		}else if(i==6){
			text.fillText(i,x-5,y);
		}
		//////
		else if(i==9){
			text.fillText(i,x,y+5);
		}else if(i==10){
			text.fillText(i,x-3,y+5);
		}else if(i==11){
			text.fillText(i,x-5,y+5);
		}else if(i==12){
			text.fillText(i,x-8,y);
		}
		
		else{
			text.fillText(i,x,y);
		}
			
		
		
		
		
		
	}
	


}

