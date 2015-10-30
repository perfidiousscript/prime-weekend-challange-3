var values = {};

$(document).ready(function(){
    $()
});

function stripForm(formEntry){
    $.each($("formEntry").serializeArray(), function(i,field){
        values[field.name] = field.value;
    });
    $("formEntry").find("input[type=text]").val("");
}