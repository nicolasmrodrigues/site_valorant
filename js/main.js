$(document).ready(function() {
    let PosicaoQueScrollAparece = 0;

    window.onscroll = function() {scrollFunction()};

    if (window.innerWidth < 767) {
        PosicaoQueScrollAparece = 450;
    } else {
        PosicaoQueScrollAparece = 820;
    }

    function scrollFunction() {
        if (document.body.scrollTop > PosicaoQueScrollAparece || document.documentElement.scrollTop > PosicaoQueScrollAparece) {
            $('#back-to-top-button').css("display", "block");
        } else {
            $('#back-to-top-button').css("display", "none");
        }
    }

    $('#back-to-top-button').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 500);
        
    });

    $('#telefone').mask('(00) 00000-0000');
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        let nome = $('#nome');
        let telefone = $('#telefone');
        let nomeValido = false;
        let telefoneValido = false;

        if (!nome.val() == '') {
            nomeValido = true;
        }

        if (telefone.val().length === 15) {
            telefoneValido = true;
        }

        if (nomeValido && telefoneValido) {
            $('form button').css("background-color", "green");
            $('form button').html('SUCESSO');
            $('form button').css("color", "white");

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