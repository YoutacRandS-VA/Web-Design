$(document).ready(function validation(){
    $('.error').hide();
        $('#submit').click(function () {
            var name = $('#name').val();
            var email = $('#email').val();
            var password = $('#password').val();
    
            if (name == '') {
                $('#name').next().show();
                return false;
            }
            if (email == '') {
                $('#email').next().show();
                return false;
            }
            if (password == '') {
                $('#password').next().show();
                return false;
            }
            if (IsEmail(email) == false) {
                $('#invalid_email').show();
                return false;
            }
            else {
                $('.error').hide();
            }
            if (invpwd(password) == false) {
                $('#invalid_pwd').show();
                return false;
            }
            else {
                $('.error').hide();
            }
            $.post("", $("#myform").serialize(), function (response) {
                $('#myform').click( function () {
                    // $('#correct').html(response);
                    // $('#correct').fadeIn('slow');
                    window.location.href="secondpage.html"; 
                });
            });
            return false;
        });x
    
});




function IsEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@northeastern.edu$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}
function invpwd(pswd) {
    if (pswd.length < 8) {
        return false;
    } else {
        return true;
    }
}

// var formSubmit = document.getElementById('submit');
// var formFields = form.getElementsByTagName("input");
// if (formSubmit) {
//     formSubmit.addEventListener("click", function (event) {
//         var validationok = true;
//         for (var i = 0; i < formFields.length; i++) {
//             if (formFields[i].value == "") {
//                 validationok = false;
//                 window.location.replace('./secondpage.html')
//                 // Here you probably also want to give the user some kind 
//                 // of feedback by adding a class to the field or similar
//             }
//         }
//         // if (!validationOk) {
//         //     event.preventDefault();
//         // }
//     });
// }


function myfunc() {
    if(this.validation()==true){
    window.location.href="secondpage.html";  
    }
}

var updateTotal = function () {
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var num3 = parseInt($('#num3').val());

    if (isNaN(input1) || isNaN(input2)) {
        $('#total').text('Both inputs must be numbers');
    } else {
        $('#total').text(num1 + num2 + num3);
    }
}

s = true;

$(document).ready(function () {
    var result = 0;
    var in1 = parseInt($('#num1').val());
    var in2 = parseInt($('#num2').val());
    // var in3 = parseInt($('#num3').val());
    var op = $(this).html();
    if (isNaN(in1) || isNaN(in2) || isNaN(in3)) {
        $('#total').text('Both inputs must be numbers');
    } else {


        $('button').click(() => {

            if ((in1 != '') && (in2 != '')) {
                if (op == "#add") {
                    result = parseInt(in1) + parseInt(in2) + parseInt(in2);
                } else if (op == "#subtract") {
                    result = in1 - in2;
                } else if (op == "divide") {
                    result = in1 / in2;
                } else if (op == "multiply") {
                    result = in1 * in2;
                }
                $("#result").html("Result: " + result);
                $("#history").prepend("<span onclick='insert(this.innerHTML)'>" + in1 + "</span> " + op + " <span onclick='insert(this.innerHTML)'>" + in2 + "</span> = <span onclick='insert(this.innerHTML)'>" + result + "</span><br>");
                $("#one").val("");
                $("#two").val("");
            } else {
                $("#result").html("Please enter value 1 and value 2.");
            }
        });
    }
}); 