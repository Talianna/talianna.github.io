<?php
    $h1 = 'Главная страница';
    $title = 'Jewelry Shop';
    $year = '2019';
?>

    <!DOCTYPE html>

    <html>

    <head>
        <meta charset="utf-8">
        <title>
            <?php
            echo $title;
            ?>
        </title>
        <link rel="stylesheet" href="styles/style.css">
    </head>

    <body>
        <header>
            <div id="headerInside">
                <div id="logo"></div>
                <div id="companyName">Jewelry Shop</div>
                <div id="navWrap">
                    <a href="#">Главная</a>
                    <a href="#">Магазин</a>
                </div>
            </div>
        </header>

        <main>
            <div id="mainInside">
                <p>
                    <?php
                    echo "Добро пожаловать в наш магазин!";
                    ?>
                        <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellat modi exercitationem id error commodi fuga aspernatur facilis, natus at doloribus tempore, tempora magnam non.
                </p>
                <h1>
                    <?php
                    echo $h1;
                    ?>
                </h1>
                <img src="img/bracelet.jpg" alt="bracelet">
            </div>
        </main>

        <footer>
            <div id="footerInside">
                <?php
                echo $year;
                ?>
            </div>
        </footer>
    </body>

    </html>
