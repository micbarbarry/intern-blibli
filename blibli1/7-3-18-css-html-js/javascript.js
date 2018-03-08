var ob = document.getElementsByClassName("imej");
var count = 0;
var flag=true;
auto();

function auto() {
  
    
     for (var i = 0; i < ob.length; i++) {
      ob[i].style.display = "none"; 
    }
 if (flag) { count++;}
   if (count > ob.length){
    	count=1;} 
    ob[count-1].style.display="block"; 
    setTimeout(auto,1500);
}

function stop()
{
flag = false; 
    

}
function start()
{
	flag=true;
}





function change(y){

	flag=false;
	slideshow(count=count+y);
}

function slideshow(x){
  
  
	if (x>ob.length){count = 1}
	if (x<0) {count = ob.length}
	if(x==0){count = ob.length}
	for(i=0;i<ob.length;i++){
		ob[i].style.display="none";

	}
	ob[count-1].style.display="block";
}
