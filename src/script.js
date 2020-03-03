 function myFunction(e)
{
   var ageVal = document.getElementById("age");
  
      var numbers =/[^0-9\.]/g;
      if(ageVal.value.match(numbers))
      {
       var filter =ageVal.value.replace(/[^0-9]/g, '');
       ageVal.value=filter;
      }

 };