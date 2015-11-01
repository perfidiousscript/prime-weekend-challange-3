var values = {};

$(document).ready(function(){
        $('#operators').on('click','.operation', function(event) {
            event.preventDefault(event);
            values.operation = this.dataset.operation;
            console.log("The on click works");
            stripForm($('form'));
            $.ajax({
                url: '/calculate',
                type: 'POST',
                data: values
            });
        })
});


function stripForm(formEntry){
    $.each($(formEntry).serializeArray(), function(i,field){
        values[field.name] = field.value;
    });

    $(formEntry).find("input[type=text]").val("");
    console.log(values);
}

function answerOnDom(){
}