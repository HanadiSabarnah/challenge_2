$('#submit').on('click', (event) => {
    var text = $('#data').val()

    $.ajax({
        type: "POST",
        url: "/",
        datatype: 'json',
    })
})
