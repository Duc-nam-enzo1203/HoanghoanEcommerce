$(document).ready(function () {
  $(".contact-form").validate({
    rules: {
      fullName: "required",
      Email: {
        required: true,
        minlength: 5,
        email: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      fullName: "Vui lòng nhập Họ tên",
      Email: "Vui lòng xem lại email",
      phone: "Vui lòng nhập số điện thoại",
    },
  });

  // check
  $("#submit").click(function () {
    if ($(".contact-form").validate()) {
      homeController.saveData();
    }
  });
});
