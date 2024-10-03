$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    const emailPhone = $("#email").val();

    if (emailPhone === "") {
      $("#invalid_email").text("Trường này không được để trống!!");
      $("#invalid_email").css("color", "red");
      return false;
    } else if (IsEmail(emailPhone) === false) {
      $("#invalid_email").text("Email hoặc số điện thoại không hợp lệ!!");
      $("#invalid_email").css("color", "red");
      return false;
    } else {
      $("#invalid_email").text("Tuyệt vời!!");
      $("#invalid_email").css("color", "green");
      return true;
    }
    return false;
  });

  $("#email").keyup(function () {
    let val = $(this).val();
    let id = $(this).attr("id");
    if (val == "") {
      $("#" + id + " + p").text("Bạn chưa nhập dữ liệu");
      $("#" + id + " + p").css("color", "red");
    } else {
      $("#" + id + " + p").text("Có thể chưa đúng cú pháp email");
      $("#" + id + " + p").css("color", "green");
    }
  });

  function IsEmail(emailPhone) {
    const regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(emailPhone)) {
      return false;
    } else {
      return true;
    }
  }

  // function checkPhoneNumber() {
  //   var flag = false;
  //   var phone = $("#email").val().trim(); // ID của trường Số điện thoại
  //   phone = phone.replace("(+84)", "0");
  //   phone = phone.replace("+84", "0");
  //   phone = phone.replace("0084", "0");
  //   phone = phone.replace(/ /g, "");
  //   if (phone != "") {
  //     var firstNumber = phone.substring(0, 2);
  //     if ((firstNumber == "09" || firstNumber == "08") && phone.length == 10) {
  //       if (phone.match(/^\d{10}/)) {
  //         flag = true;
  //       }
  //     } else if (firstNumber == "01" && phone.length == 11) {
  //       if (phone.match(/^\d{11}/)) {
  //         flag = true;
  //       }
  //     }
  //   }
  //   return flag;
  // }
});
