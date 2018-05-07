$(document).ready(function ()  {
    //create an array
    var array = [];
    //begin the loop
    function test(num){

           for (i = 1; i <= num; i++) {
                //detect values divisble by 3, 5 and 15

               if (i % 3 === 0 && i % 5 === 0 ) {
                    //push to the array
                    console.log(i+" pingpong")
                    array.push("pingpong");
                }
                //detect values divisible by 3
                else if (i % 3 === 0) {
                    console.log(i+" ping")
                    array.push("ping");
                }
                //detect values divisible by 15
                else if (i % 5 === 0) {
                    console.log(i+" pong")
                    array.push("pong");
                }else{
                    array.push(i);
                }  }

           }


   $(".btn").click(function(event){
        event.preventDefault();
        
        array=[];

      $("#items").empty("");
       var passedNumber =  parseInt($("#num").val());

      test(passedNumber);
       array.forEach(function(e){
             $("#items").append($("<li>").html(e));

         });


    });
});
