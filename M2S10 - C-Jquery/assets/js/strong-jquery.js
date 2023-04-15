//$ hace referencia a jquery

$(document).ready(function () {
    //selectores: clase, id, etiqueta, name
    $('.btn-success').click(function () {
        $('#text-bold').show()
    })
    $('#alert').click(function () {
        alert('Hola soy el boton alert')
    })
    $('.btn-danger').click(function () {
        alert('Hola soy el boton danger')
    })

    //funciones:
    $('.btn-warning').click(function () {
        $('#text-bold').hide()
    })
    //toggle
    $('#btn-toggle').click(function () {
        $('#text-bold').toggle()
    })
    //$(element).is(":visible");
    //$(element).is(":hidden");
    $('#btn-check-visible').click(function () {
        if ($('#text-bold').is(":visible")) {
            $('#text-bold').hide()
        } else {
            $('#text-bold').show()
        }
    })
    $('#btn-input').dblclick(function () {
        let valor = $('#example').val()
        alert(valor)
    })
    //checkbox
    $('#btn-foods').click(function () {
        let arrayFoods = []
        $('input[name=foods]:checked').each(function () {
            arrayFoods.push(this.value)
        })
        alert(arrayFoods)
    })
    $('#btn-add').click(function () {
        $(this).addClass('bg-orange')
        $('#show-elements').append('<p>Hola</p>')
    })
})