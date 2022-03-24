$(function () {
  $("#nav-icon").click(function () {
    $("#lists").slideToggle("slow");
  });
});

$("#all").click(function () {
  console.log("hi");
  $("#galery1").show();
  $("#des").removeAttr("class");
  $("#code").removeAttr("class");
  $("#app").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#all").attr("class", "f-active");

  $("#galery2").css({ display: "none" });
  $("#galery3").css({ display: "none" });
  $("#galery4").css({ display: "none" });
  $("#galery5").css({ display: "none" });
});

$("#des").click(function () {
  console.log("hi");
  $("#galery2").show();
  $("#galery1").css({ display: "none" });
  $("#all").removeAttr("class");
  $("#code").removeAttr("class");
  $("#app").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#des").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery3").css({ display: "none" });
  $("#galery4").css({ display: "none" });
  $("#galery5").css({ display: "none" });
});

$("#code").click(function () {
  console.log("hi");
  $("#galery3").show();
  $("#code").attr("class", "f-active");

  $("#all").removeAttr("class");
  $("#des").removeAttr("class");
  $("#app").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#code").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery2").css({ display: "none" });
  $("#galery4").css({ display: "none" });
  $("#galery5").css({ display: "none" });
});
$("#photo").click(function () {
  $("#galery4").show();

  $("#all").removeAttr("class");
  $("#des").removeAttr("class");
  $("#app").removeAttr("class");
  $("#code").removeAttr("class");
  $("#photo").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery2").css({ display: "none" });
  $("#galery5").css({ display: "none" });
  $("#galery3").css({ display: "none" });
});
$("#app").click(function () {
  console.log("hi");
  $("#galery5").show();

  $("#all").removeAttr("class");
  $("#des").removeAttr("class");
  $("#photo").removeAttr("class");
  $("#code").removeAttr("class");
  $("#app").attr("class", "f-active");

  $("#galery1").css({ display: "none" });
  $("#galery2").css({ display: "none" });
  $("#galery3").css({ display: "none" });
  $("#galery4").css({ display: "none" });
});
$("#more").click(function () {
  $("#galery3").slideToggle("3000").css({ display: "block" });
});
