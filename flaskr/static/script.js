$(document).ready(function(){
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('select').formSelect();
    $('.modal').modal();
    $('.tooltipped').tooltip();
});

function postDelete(url) {
    console.log(url);
    $.ajax({
        type: "POST",
        url: url,
        success: (data) => {
            console.log('success'), data;
            window.location.replace("/");
        }
    });
}