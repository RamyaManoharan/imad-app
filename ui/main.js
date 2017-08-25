var button=document.getElementById('counter');
button.onclick=function()
{
   var r= new XMLHttpRequest();
   
   r.onreadystatechange = function()
   {
       if(r.readyState===XMLHttpRequest.DONE){
       if(r.readyStatus===200){
           var counter=r.responseText;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
       }
       }
       
   };
   r.open('GET',"http://ramyamano15.imad.hasura-app.io/counter",true );
   r.send(null);
};