$(document).ready(()=>{
    $('.error').hide();
    $('.clicked-button').click(() => {
        var result;
        var in1 = parseInt($('#num1').val());
        var in2 = parseInt($('#num2').val());
        // alert(id);
        var op = event.target.id;
        if (isNaN(in1) || isNaN(in2)) {
            $('#total').next().show();
        }
        else{
            $('.error').hide();
        }
        if ((in1 != '') && (in2 != '') ) {
            
            if (op == "add") {
                result = parseInt(in1) + parseInt(in2);
            }else if (op == "subtract") {
                result = parseInt(in1) - parseInt(in2);
            }else if (op == "divide") {
                result = parseInt(in1) / parseInt(in2);
            }else if (op == "multiply") {
                result = parseInt(in1) * parseInt(in2);
            }
            $("#total").val(result);


        }else{
            $("#result").html("Please enter value 1 and value 2.");
    
        }
    });
  });


  document.getElementById("farmer").innerHTML=localStorage.getItem("id");