$(document).ready(function() {

    $('.m-catalog__carousel').owlCarousel({
        autoPlay: 3000,
        dots: true,
        loop: true,
        items: 6,
        slideBy: 6,
        nav: true,
        navText: '',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            400: {
                items: 2,
                nav: false,
                slideBy: 2
            },
            700: {
                items: 4,
                nav: true,
                loop: false,
                slideBy: 4
            },
            1200: {
                items: 5,
                nav: true,
                loop: false,
                slideBy: 5
            },
            1400: {
                items: 6,
                nav: true,
                loop: false,
                slideBy: 6
            },
        }
    });

    $('.news__carousel').owlCarousel({
        autoPlay: 3000,
        dots: true,
        loop: true,
        items: 4,
        nav: false,
        navText: '',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            400: {
                items: 2,
                nav: false
            },
            700: {
                items: 2,
                nav: false,
                loop: false
            },
            1200: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    })
});


$('#exc1').mouseover(function() {
    $('#exc_point2, #exc_point').text('1');
    $('#exc_text').text('На протяжении своей истории кофейни неоднократно запрещали власти различных стран. Наиболее известен запрет в Мекке в 1511 году и в Англии в 1675 году. Как правило, власти считали кофейни источником революционных мыслей и местом сбора заговорщиков.');
});

$('#exc2').mouseover(function() {
    $('#exc_point2, #exc_point').text('2');
    $('#exc_text').text('Кофе содержит более 1200 химических соединений, более половины из которых отвечают за вкусовые качества получаемого напитка.');
});

$('#exc3').mouseover(function() {
    $('#exc_point2, #exc_point').text('3');
    $('#exc_text').text('Кофе – один из самых торгуемых товаров на мировых биржах. По объему его опережает только нефть.');
});

$('#exc4').mouseover(function() {
    $('#exc_point2, #exc_point').text('4');
    $('#exc_text').text('Каждый год в мире выпивается более 500 млрд. чашек кофе. Более половины – за завтраком');
});

$('#exc5').mouseover(function() {
    $('#exc_point2, #exc_point').text('5');
    $('#exc_text').text('C точки зрения потребления кофе на душу населения в год лидируют страны Северной Европы – Финляндия (12 кг), Норвегия (9,9 кг), Исландия (9 кг). Россия на 13 месте в этом списке (6.3кг).');
});

$('#exc6').mouseover(function() {
    $('#exc_point2, #exc_point').text('6');
    $('#exc_text').text('Слово американо появилось в годы Второй мировой войны, когда американские солдаты в Европе стали добавлять в эспрессо кипяток, чтобы разбавить крепкий напиток.');
});

$('#exc7').mouseover(function() {
    $('#exc_point2, #exc_point').text('7');
    $('#exc_text').text('Первая веб-камера была разработана в Кембриджском университете, чтобы определять на расстоянии, заполнена или пуста университетская кофеварка.');
});

$('#exc8').mouseover(function() {
    $('#exc_point2, #exc_point').text('8');
    $('#exc_text').text('Кофе светлой обжарки содержит больше кофеина, чем темной. - Кофеин числится среди запрещенных веществ в списке, утвержденном Международным олимпийским комитетом, вместе со стероидами и кокаином. Употребление более 5 чашек кофе (12 микрограмм на 1 миллилитр мочи) считается МОК попыткой спортсмена получить преимущество в спортивной борьбе.');
});
