<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?$APPLICATION->ShowTitle()?></title>
    <meta name="description" content="">
    <!--link(rel='apple-touch-icon', href='apple-touch-icon.png')-->
    <?$APPLICATION->ShowHead()?>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&subset=cyrillic-ext" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&subset=cyrillic-ext" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/owl.theme.default.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/screen.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn"t work if you view the page via file:// -->
    <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
</head>

<body>
<?$APPLICATION->ShowPanel();?>
    <header class="header">
        <div class="header__top-container container">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-6 header__search">
                    <div class="row">
                        <div class="col-xs-12 header__search">
                            <input type="text" class="header__input" placeholder="Искать в каталоге">
                        </div>
                        <div class="col-md-6 col-xs-6 col-sm-6 header__account">
                            <a href="#"><i class="icon icon-account"></i> Вы <span href="#" title="Вы">(?)</span></a>
                        </div>
                        <div class="col-md-6 col-xs-6 col-sm-6 header__account header__account--cart">
                            <a href="#"><i class="icon icon-cart"></i> Корзина (0)</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 header__logo hidden-xs">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="header__call col-md-4 col-sm-4 col-xs-6">
                    <a href="tel:+7863456556">  +7 863 456-56-56 <i class="icon icon-call"></i></a>
                </div>
            </div>
        </div>
        <div class="header__container--menu header__container container">
            <div class="row">
                <div class="header__menu navbar navbar-inverse">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span lass="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">КОФЕМАШИНЫ<span>ˇ</span></a></li>
                            <li><a href="#">КОФЕ<span>ˇ</span></a></li>
                            <li><a href="#">ЧАЙ<span>ˇ</span></a></li>
                            <li><a href="#">АКСЕССУАРЫ<span>ˇ</span></a></li>
                            <li><a href="#">РЕМОНТ<span>ˇ</span></a></li>
                            <li><a href="#">АРЕНДА КОФЕМАШИН<span>ˇ</span></a></li>
                            <li><a href="#">КОНТАКТЫ<span>ˇ</span></a></li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
            </div>
        </div>
    </header>

   
