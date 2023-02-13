$(document).ready(function() {
    let PosicaoQueScrollAparece = 0;
    let aside = $('.desktop-sidebar')
    let footer = $('footer')
    let offsetAsideOriginal = aside.offset().top
    console.log('offset aside OG: ', Math.trunc(offsetAsideOriginal))

    $(window).resize(function () {
        console.log('--------------------------------')
        aside.removeClass('sticky')
        aside.removeClass('non-sticky')
        aside.removeAttr('style');
        offsetAsideOriginal = aside.offset().top
        console.clear()
        console.log('offset aside OG: ', Math.trunc(offsetAsideOriginal))
        makeSideBarSticky()
    });

    window.onscroll = function() {scrollFunction(), makeSideBarSticky()};

    function makeSideBarSticky() {
        if (window.innerWidth < 1024) {
            return;
        }
        let offsetAsideTop = aside.offset().top;
        let alturaAside = aside.height();
        let offFooterTop = footer.offset().top;
        let footerAltura = footer.height();
        let alturaBody = $('body').height();
        let posicao = ((alturaBody - alturaAside) - footerAltura) + 45

        if (offFooterTop - (window.pageYOffset + 70) <= alturaAside) {
            aside.removeClass('sticky')
            aside.addClass('non-sticky')
            aside.css('top', `${posicao}px`)
        } else if ((window.pageYOffset + 70  > offsetAsideTop) || (window.pageYOffset + 70 < offsetAsideTop && aside.hasClass('non-sticky')) ) {
            aside.removeClass('non-sticky')
            aside.addClass("sticky");
            aside.removeAttr('style');
        } else if ( (window.pageYOffset + 70 < offsetAsideTop && !aside.hasClass('non-sticky')) || (offsetAsideTop <= offsetAsideOriginal) ) {
            aside.removeClass('sticky')
        }
    }

    makeSideBarSticky()

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