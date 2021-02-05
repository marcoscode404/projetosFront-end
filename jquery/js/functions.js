//Manipulando a posição no DOM
$(function(){

    // eq é a função que me dá a possibilidade de adcionar em apenas no elemento que eu quero 
    // colocar --> como no caso coloquei duas div.box  --> queria adcionar apenar em uma
    // ou em qual posição euq quero colocar
    // já o .append me permite adcionar
    // usando aqui a função append --> para adicionar conteudo/elemento que selecionarmos
    // $('.box div').eq(0).append('<h3>Meu teste</h3>');


    // desse modo de escrita me permite manipular o css do elemento 
    // var el = $('<h3>Meu conteudo</h3>').appendTo($('.box'));
    // el.css('color','red')

    // deixa o elemento no inicio
    //$('.box').prepend('<h3>olá mundo</h3>')

    //var el = $('<h3>Meu conteudo</h3>').prependTo($('.box')).css('color','red');


    //after --> como adicionar elemento depois das box
    // var t = '<p>meu conteudo apos a div box</p>';
    //$('.box').after(t)

    //before -->adiciona encima
    //$('.box').before(t)

    //me dá a possibilidade de manipular tambem o css
    // $(t).insertAfter($('.box')).css('color','red')
    // $(t).insertBefore($('.box')).css('color','red')


    // função remove --> serve para remover o elemento
    //função eq funciona como um array onde vc escolhe os elementos que quiser mecher
    // função setTimeout --> serve para colocar tempo de duração
    setTimeout(function(){
        $('.box').eq(0).remove();
    },3000);

});