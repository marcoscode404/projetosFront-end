<?php session_start() ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Front da pagina do facebook</title>
    <link rel = "preconnect" href = "https://fonts.gstatic.com">
    <link href = "https://fonts.googleapis.com/css2? family = Roboto + Slab: wght @ 300 & display = swap "rel =" stylesheet ">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header>
        <div class="center">
            <div class="logo">
                <h2>facebook</h2>
            </div>
            <!--logo-->

            <form method="post" class="form-login">
                <div class="form-element">
                    <p>Email ou telefone</p>
                    <input type="email"  placeholder="vinicius@gmai.com"/>
                </div>
                <!-- form-element -->

                <div class="form-element">
                    <p>senha</p>
                    <input type="password" placeholder="************">
                </div>
                <!-- form-element -->

                <div class="form-element">
                    <input type="submit" name="acao" value="Enviar" />
                </div>
                <!-- form-element-->

            </form>
            <!-- form-login -->
            <div class="clear"></div>
        </div>
        <!-- center -->
    </header>
    <!-- header -->

    <section class="main">
        <div class="center">
            <div class="img-pessoas">
                <img src="img/img.png"  width="40%" alt="imagem central" />
            </div>
            <!-- img-pessoas -->


            <div class="teste">
            <div class="abrir-conta">
                <h2>Abra sua conta</h2>
                <h3>É gratuito e sempre será</h3>

                <form class="criar-conta">
                    <div class="w50">
                        <input class="input" placeholder="Nome" type="text">
                    </div>
                    <!-- w50 -->

                    <div class="w50">
                        <input class="input" placeholder="Sobrenome" type="text">
                    </div>
                    <!-- w50 -->

                    <div class="w100">
                        <input placeholder="Email" type="email">
                    </div>
                    <!-- w100 -->

                    <div class="w100">
                        <input placeholder="Senha" type="password">
                    </div>
                    <!-- w100 -->

                    <div class="w100">
                        <h2>Data de Nascimento</h2>
                        <select class="nascimento" name="nascimenti-dia" id="">
                            <?php
                                for($i = 1; $i <= 31; $i++){
                            ?>
                            <option value="?php echo $i; ?>"><?php echo $i; ?></option>
                            <?php } ?>
                            <!-- codigo php para os dias -->
                        </select>
                        <!-- section nascimento -->

                        <select class="nascimento" name="nascimento-mes" id="">
                            <option value="0">janeiro</option>
                        </select>
                        <!-- section  -->


                        <select class="nascimento" name="nascimento-ano" id="">
                            <?php
                                for($i = 1960; $i <= 2021; $i++){
                            ?>
                            <!-- php para o mes -->
                            <option value="?php echo $i; ?>"><?php echo $i; ?></option>
                            <?php } ?>

                        </select>
                        <!-- section  -->

                        <div class="clear"></div>
                    </div>

                    <div class="w100">
                        <div class="input-radio">
                             <input type="radio" name="sexo" value="masculino">
                             <h2>Masculino</h2>  
                        </div>
                        <!-- radio -->

                        <div class="input-radio">
                             <input type="radio" name="sexo" value="feminino">
                             <h2>Feminino</h2>  
                        </div>
                        <!-- radio -->
                        <div class="clear"></div>
                    </div>
                    <!-- w100 -->


                    <div class="w100">
                        <input type="submit" name="acao" value="Cadastre-se">
                    </div>
                    <!-- w100 -->

                    <div class="clear"></div>
                    <!-- limpando flutuação -->
                   </div><!--teste-->
                </form>
                <!-- form criar conta -->
            </div>
            <!-- abrir conta -->

            <div class="clear"></div>
            <!-- clear -->
        </div>
        <!-- /center -->
    </section>
    <!-- section main -->


    <section class="linguas">
        <div class="center">
            <a class="selected-lingua" href="#">Portugês (BR)|</a>
            <a  href="#">English (US)|</a>
            <a  href="#">Españo|</a>
            <a  href="#">Français (France) |</a>
            <a  href="#">Italiano|</a>
            <a  href="#">Deutsch|</a>
            <a  href="#">中文(简体)|</a>
            <a  href="#">日本語</a>
        </div>

        <div  class="center"> 
            <a  href="#">Cadastre-se</a>
            <a  href="#">Compartilhe</a>
            <a  href="#">Facebook-lite</a>
            <a  href="#">ViniCode</a>
            <a  href="#">Programação web</a>
            <a  href="#">Grupos</a>
            <a  href="#">Criar pagina</a>
            <a  href="#">Desenvolvedores</a>
            <a  href="#">Pessoas</a>
            <a  href="#">jogos</a>
            <a  href="#">Locais</a>
            <a  href="#">Paginas</a>
            <a  href="#">Messenger</a>
            <a  href="#">Instagram</a>
            <a  href="#">Messenger</a>
            <a  href="#">Facebook Pay</a>
            <a  href="#">Ajuda</a>
            <a  href="#">obre</a>
            <a  href="#">Criar Página</a>
            <a  href="#">Criar anúncio</a>
            
            <h4>Facebook © 2021</h4>
        </div>
    </section>

    
</body>
</html>