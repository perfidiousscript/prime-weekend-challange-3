var values = {};

$(document).ready(function(){
    $('#submit').on('click', function(event){
        event.preventDefault(event);
        stripForm($(this).parent('form'));
    });
});

event.preventDefault

function stripForm(formEntry){

    console.log(formEntry);
    $.each($(formEntry).serializeArray(), function(i,field){
        values[field.name] = field.value;
    });
    $(formEntry).find("input[type=text]").val("");
    console.log(values);
}