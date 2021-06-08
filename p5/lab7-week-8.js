// jshint esversion: 6
 
//define event handler
let main = function() {
  //dispatch on button id
 
	  if (this.id == "btn1") 
	  {
	    let x,y,z;
	    x= document.querySelector("div");
	    y= document.createElement("ol");
	    x.appendChild(y);
	  }

	  if (this.id == "btn2") 
	  {
	    let x,y,z, a;
	    x= document.querySelector("input");
	    y= document.querySelector("ol");
	    z= document.createElement("li");
	    a= x.value;
	    z.textContent=a;
	    y.appendChild(z);
	    x.value = "";
	   }

	if (this.id == "btn3") 
	{
	    let x,y,z;
	    x= document.querySelector("ol");
	    if(x.hasChildNodes())
	      {
	      y= x.lastChild;
	      x.removeChild(y);
	      }
        }
      	if (this.id == "btn4") 
	{
	    //handle button 1 here
	   let x,y,z,a;
	   x= document.querySelector("input");
	   y= document.querySelector("ol");
	   a= x.value;
	   y.setAttribute("type", a);
	   x.value = "";
	 }
	
};// end of main function
 
//register event handler
window.addEventListener("load", function() {
  let buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i)
    //when the button gets clicked, who ya gonna call?
    buttons[i].addEventListener("click", main);
});
