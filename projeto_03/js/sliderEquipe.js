$(function(){

    var delay = 5000;
    var curIndex = 0;
    var amt; //deixando variavel global

    initSlider();
    autoplay();

    function initSlider(){
        amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('sobre-autor').css('width',sizeBoxSingle+'%');
        $('.scroll-wraper').css('width',sizeContainer+'%');



        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background: rgb(170, 170, 170);"></span>')
            else
                $('.slider-bullets').append('<span></span>');
        }


    }

    //função de autoplay do slider
    function autoplay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);
        },delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)'); //bullets qunado é passado
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');  //bullets atual
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX});
    }


    // function para quando a janela do browser for ser minimizada o slider voltará para o inicio
    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })


})


                
               