var values = {};

$(document).ready(function(){
    $('#operators').on('click','.operation', function(event){
        event.preventDefault(event);
        stripForm($('form'));
    });
});

function stripForm(formEntry){
    console.log(formEntry);
    $.each($(formEntry).serializeArray(), function(i,field){
        values[field.name] = field.value;
    });
    $(formEntry).find("input[type=text]").val("");
    console.log(values);
}