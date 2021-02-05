$(function(){

    // sistema de pesquisa

    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 70000
    var preco_pesquisa = 0

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })

    $(document).mouseup(function(){
        isDrag = false;

        enableTextSelection() //quando soltar o botão de arrastar // corrigindo bug
        
    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();

            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elBase.width())
                mouseX = elBase.width();

            //barra de progresso
            $('.pointer-barra').css('left',(mouseX-13)+'px');
            var currentValue = (mouseX / elBase.width() * 100);
            $('.barra-preco-fill').css('width',currentValue+'%');

            //TODO: ajustar o formato do preço
            preco_atual = (currentValue/100) * preco_maximo;
            preco_atual = formatarPreco(preco_atual);
            $('.preco_pesquisa').html('R$'+preco_atual);
        }
    })

    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2);
        preco_arr = preco_atual.split('.');

        var novo_preco = formatarTotal(preco_arr);

        return novo_preco;
    }

    // primeiro eu formatoi para ver se é menor que mil
    // depois verifico sé é menor que 10.000 e assim formato
    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000){
            return preco_arr[0]+','+preco_arr[1];
        }else if(preco_arr[0] < 10000){
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1];
        }
        else{
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+','+preco_arr[1];
        }
    }

    // 
    function disableTextSelection(){
        $("body").css("-webkit-user-select","none");
        $("body").css("-moz-user-select","none");
        $("body").css("-ms-user-select","none");
        $("body").css("-o-user-select","none");
        $("body").css("user-select","none");
    }

    function enableTextSelection(){
        $("body").css("-webkit-user-select","auto");
        $("body").css("-moz-user-select","auto");
        $("body").css("-ms-user-select","auto");
        $("body").css("-o-user-select","auto");
        $("body").css("user-select","auto");
    }



    // mini img wraper style="background-color:rgb(210,210,210);"


    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1; //maximo que podemos chegar
    var curIndex = 0; //posição atual

    initSlider();
    navigateSlider();
    clickSlider();
    function initSlider(){
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');
        elScroll.css('width', amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%');
    }


    // navegação no slider
    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                // console.log("chegamos até o fim");
            }
        });

        // para o slider voltar
        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                // console.log("chegamos até o fim");
            }
        });
    }

    // ao clicar na imagem
    function clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color','transparent');
            $(this).css('background-color','rgb(210,210,210)');
            var img = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image',img);
        })
        
        $('.mini-img-wraper').eq(0).click();

    }

    // clicar e ir para a div de contato com base ni atributo goto
    $('[goto=contato]').click(function(){
        $('nav a').css('color','black'); // troca a cor dos links não selecionados
        $(this).css('color','#EB2D2D');  // deixa o link selecionado do header em vermelho
        $('html,body').animate({'scrollTop':$('#contato').offset().top});
        return false;
    })

})