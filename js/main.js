$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    
    $('form').on('submit', function(e) {
        e.preventDefault()
        let nome = $('#nome')
        let telefone = $('#telefone')
        let nomeValido = false
        let telefoneValido = false

        if (!nome.val() == '') {
            nomeValido = true
        }

        if (telefone.val().length === 15) {
            telefoneValido = true
        }

        if (nomeValido && telefoneValido) {
            $('form button').css("background-color", "green")
            $('form button').html('SUCESSO')

        }
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Este campo é obrigatório."
            },
            email: {
                required: "Este campo é obrigatório."
            }
        }
    })
})