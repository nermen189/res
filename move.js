// slide show for imgs
var slideShow = ["order.png","learn3.png","girl3.png","rate2.png"];
var i =0 ;
function $slide(){
var show = document.getElementById("menuslide");
show.src=slideShow[i];
if(i<slideShow.length -1){
    i++;
}
else{
    i=0;
}
setTimeout("$slide()",2500);
}
$slide();
//slide show for texts
var slideShow2 = ["You can order food from our site or download our app","Learn cooking in tasty academy to be one of us","Find more about our chefs in about part","Tell us about your opinion of our restaurant"];
var x =0 ;
function slide(){
var show2 = document.getElementById("textslide");
show2.innerHTML=slideShow2[x];
if(x<slideShow2.length -1){
    x++;
}
else{
    x=0;
}
setTimeout("slide()",2500);
}
slide();
//slide show for make difference in menu
var text1 = document.getElementById("p1"); 
var text2 = document.getElementById("p2"); 
var text3 = document.getElementById("p3"); 
var text4 = document.getElementById("p4"); 
var slideShow3 = [text1,text2,text3,text4];
var y =0 ;
function slide3(){
    slideShow3[y].style.color="blue";
    slideShow3[y].style.fontWeight="bold";
    if (y==1){
        slideShow3[0].style.color="black";   
    }
    if(y==2){
        slideShow3[0].style.color="black";  
        slideShow3[1].style.color="black";  
    }
    if(y==3){
        slideShow3[0].style.color="black";  
        slideShow3[1].style.color="black"; 
        slideShow3[2].style.color="black";  
    }
    if(y==0){
        slideShow3[3].style.color="black";  
    }
if(y<slideShow.length -1){
    y++;
}
else{
    y=0;
}

setTimeout("slide3()",2500);
}
slide3();
//the rest slide show
var slideShow4 = ["res1.jpg","res2.jpg","res3.jpg","res4.jpg","res5.jpg","res6.jpg"];
var t =0 ;
function slide4(){
var show4 = document.getElementById("restslide");
show4.src=slideShow4[t];
if(t<slideShow4.length -1){
    t++;
}
else{
    t=0;
}
setTimeout("slide4()",2000);
}
slide4();

//the dots slide
var draw1 = document.getElementById("c1"); 
var draw2 = document.getElementById("c2"); 
var draw3 = document.getElementById("c3"); 
var draw4 = document.getElementById("c4"); 
var draw5 = document.getElementById("c5"); 
draw1.style.display="none";
draw2.style.display="none";
draw3.style.display="none";
draw4.style.display="none";
draw5.style.display="none";
var slideShow5 = [draw1,draw2,draw3,draw4,draw5];
var u =0 ;
function slide5(){
    slideShow5[u].style.display="block";
    if(u==0){
        draw5.style.display="none";
        draw2.style.display="none";
        draw3.style.display="none";
        draw4.style.display="none"; 
    }
if(u<slideShow5.length -1){
    u++;
}
else{
    u=0;
}

setTimeout("slide5()",2000);
}
slide5();

// color for the heading 
  
  