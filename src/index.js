import $ from "jquery";
import "./styles/main.scss";

$(document).ready(() => {
  $("#openPopup").click(() => {
    $("#popup").fadeIn();
  });

  $("#closePopup").click(() => {
    $("#popup").fadeOut();
  });
});
