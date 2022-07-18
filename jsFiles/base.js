var ii=window.localStorage;

for(var pp=0;pp<localStorage.length;pp++){
        
var valuee=localStorage.getItem(`NOTE-${pp}`);

var template=`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text">${valuee}</p>
 
</div>
</div>`

    
var ourContainer=document.getElementById("ourContainer");

ourContainer.innerHTML+=template;

    

}


var a=document.getElementById("floatingTextarea");

var i=window.localStorage.length;

var ourBtn=document.getElementById("ourBtn");

ourBtn.addEventListener('click',function(){

    var valuee=a.value;
    localStorage.setItem(`NOTE-${i}`,`${valuee}`);
    i++;

    
var template=`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text">${valuee}</p>
 
</div>
</div>`

    
var ourContainer=document.getElementById("ourContainer");

ourContainer.innerHTML+=template;

console.log(valuee);

})
