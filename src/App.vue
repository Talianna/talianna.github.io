<template>
    <div id="app">

        <header class="header">
            <div class="header__topBar">
                <div class="wrapper">
                    <div class="header__content">
                        <div>Режим работы</div>
                        <div>Правила посещения</div>
                    </div>
                </div>
            </div>
            <div class="header__nav">
                <div class="wrapper">
                    <div class="header__content nav">
                        <div class="nav__item logo">
                            <a href="index.html">LOGOTYPE</a>
                        </div>

                        <header-menu />

                        <div class="nav__item entrance">
                            <div><a href="#">Регистрация</a></div>
                            <div><a href="#">Вход</a></div>
                        </div>

                        <!-- <button class="menuButton" @click="showMenu = !showMenu"></button>
                        <div class="mobileMenu slideRight" v-show="showMenu">
                            <div class="mobileMenu__block">
                                <div class="nav__item logo logo_mobile">
                                    <a href="index.html">LOGOTYPE</a>
                                </div>
                                <span @click="showMenu = !showMenu"></span>

                                <nav class="nav__item menu_mobile">

                                    <div class="menu__dropdown" v-for="item of items" :item="item">

                                        <a class="menu__link" href="#" @click="toggle(item)">{{ item.name }}</a>
                                        <div class="dropDown dropDown_mobile" v-show="item.hidden">

                                            
                                            <div class="item" v-for="(child, index) in item.children" :key="index" :item="child">
                                            
                                            </div>
                                            -->

                        <!-- <a href="#" class="dropDown__link">SubMenu</a>
                                            <a href="#" class="dropDown__link">SubMenu</a>
                                            <a href="#" class="dropDown__link">SubMenu</a>
                                            <a href="#" class="dropDown__link">SubMenu</a>
                                            <a href="#" class="dropDown__link">SubMenu</a>

                                        </div>

                                    </div>
                                </nav>
                            </div> -->

                        <!-- <div class="mobileMenu__block">
                                <div class="nav__item entrance entrance_mobile">
                                    <div><a href="#">Регистрация</a></div>
                                    <div><a href="#">Вход</a></div>
                                </div>
                                <div class="header__content header__content_mobile">
                                    <div>Режим работы</div>
                                    <div>Правила посещения</div>
                                </div>
                            </div> -->
                        <!-- </div>  -->

                    </div>
                </div>
            </div>
        </header>
        <!--end header-->

        <main>
            <div class="sliderWrap">
                <div class="headSlider">

                    <div class="headSlider__item headSlider__item_1 sliderItem">
                        <a href="#">
                            <div class="wrapper">
                                <div class="sliderItem__content">
                                    <div>
                                        <div class="sliderItem__tag">анимация</div>
                                        <h1 class="sliderItem__title">Подготовка спрайтов для анимации в Unity</h1>
                                        <p class="sliderItem__text">
                                            Спрайты должны немного отличаться друг от друга, чтобы было заметно
                                            движение.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- <div class="headSlider__item headSlider__item_2 sliderItem">
                        <a href="#">
                            <div class="wrapper">
                                <div class="sliderItem__content">
                                    <div>
                                        <div class="sliderItem__tag">анимация</div>
                                        <h1 class="sliderItem__title">Подготовка спрайтов для анимации в Unity</h1>
                                        <p class="sliderItem__text">
                                            Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div> -->

                    <!-- <div class="headSlider__item headSlider__item_3 sliderItem">
                        <a href="#">
                            <div class="wrapper">
                                <div class="sliderItem__content">
                                    <div>
                                        <div class="sliderItem__tag">анимация</div>
                                        <h1 class="sliderItem__title">Подготовка спрайтов для анимации в Unity</h1>
                                        <p class="sliderItem__text">
                                            Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div> -->
                </div>
                <div class="sliderNav">
                    <div class="wrapper">
                        <div class="sliderItem__nav itemNav">
                            <div class="itemNav__bullets bullets"></div>
                        </div>

                    </div>
                </div>

            </div>
            <!--end headSlider-->

            <div class="about">
                <div class="wrapper">
                    <div class="about__content">
                        <h3 class="about__title"><a href="#">о компании</a></h3>
                        <div class="about__text">
                            <p>
                                Что-то более продвинутое делается с помощью покадровой анимации — когда для разных
                                состояний объекта (стоит, идет, в прыжке, атакует) создается несколько спрайтов
                                (двумерное изображение), которые сменяют друг друга с определенным интервалом.
                            </p>
                            <a href="#">подробнее
                                <img src="./assets/right_arrow.svg" alt="right_arrow">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--end about-->

            <div class="news">
                <div class="wrapper">
                    <div class="news__head newsHead">
                        <h3 class="newsHead__title"><a href="#">Новости</a></h3>
                        <a href="#" class="newsHead__link">Все новости</a>
                    </div>

                    <div class="news__wrap newsWrap">
                        <div class="newsWrap__item">
                            <img src="./assets/img_1.jpg" alt="img_1">
                            <div>1</div>
                        </div>
                        <div class="newsWrap__item">
                            <img src="./assets/img_2.jpg" alt="img_2">
                            <div>2</div>
                        </div>
                        <div class="newsWrap__item">
                            <img src="./assets/img_3_cropped.jpg" alt="img_3_cropped">
                            <div>3</div>
                        </div>
                    </div>

                    <div class="news__wrap newsWrap newsWrap_second" v-if="show">
                        <div class="newsWrap__item">
                            <img src="./assets/img_1.jpg" alt="img_1">
                            <div>1</div>
                        </div>
                        <div class="newsWrap__item">
                            <img src="./assets/img_2.jpg" alt="img_2">
                            <div>2</div>
                        </div>
                        <div class="newsWrap__item">
                            <img src="./assets/img_3_cropped.jpg" alt="img_3_cropped">
                            <div>3</div>
                        </div>
                    </div>

                    <div class="news__link" @click="show = !show" v-else>
                        показать еще
                    </div>
                </div>
            </div>
            <!--end news-->

            <div class="mailing">
                <div class="wrapper">
                    <div class="mailing__wrap">
                        <div class="mailing__corner">
                            <img src="./assets/RSS.svg" alt="RSS">
                        </div>
                        <h4 class="mailing__title">подпишитесь на рассылку</h4>

                        <contacting-form />

                    </div>
                </div>
            </div>
            <!--end mailing-->

        </main>

        <footer class="footer">
            <div class="footer__content">
                <div class="wrapper">
                    <div class="footerContent">
                        <div class="footerContent__title logo">
                            <a href="index.html">LOGOTYPE</a>
                        </div>
                        <div class="footerContent__wrap">
                            <div class="contacts contacts_left">
                                <div class="contacts__address">г. Москва, метро Бауманская, ул. Бауманская, дом 44</div>
                                <div class="contacts__phone"><a href="tel:+70000000000">+7 000 000 00 00</a></div>
                            </div>
                            <div class="contacts contacts_right">
                                <nav class="menu menu_footer">
                                    <a href="#">О компании</a>
                                    <a href="#">Партнёрская программа</a>
                                    <a href="#">Реклама</a>
                                    <a href="#">Пресс-центр</a>
                                    <a href="#">Вакансии</a>
                                    <a href="#">Помощь</a>
                                    <a href="#">Правила</a>
                                </nav>
                                <div class="contacts_bottom">
                                    <div class="contacts__socials">
                                        Мы в соц. сетях
                                        <div class="socials">
                                            <a href="#"><img src="./assets/facebook.svg" alt="facebook"></a>
                                            <a href="#"><img src="./assets/odnoklassniki.svg" alt="odnoklassniki"></a>
                                            <a href="#"><img src="./assets/instagram.svg" alt="instagram"></a>
                                        </div>
                                    </div>
                                    <div class="contacts__form">
                                        Подписка на новости
                                        <mailing-form />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__bottomBar">
                <div class="wrapper">
                    <div class="bottomBar">
                        <div class="bottomBar__item">&copy; ООО «Глобус», 2016 — 2019</div>
                        <div class="bottomBar__item">
                            <div><a href="#">Политика конфиденциальности</a></div>
                            <div><a href="#">Cookies</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
    
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue';
    import HeaderMenu from './components/HeaderMenu.vue';
    import ContactingForm from './components/ContactingForm.vue';
    import MailingForm from './components/MailingForm.vue';

    export default {
        name: 'App',
        components: {
            // HelloWorld,
            HeaderMenu,
            ContactingForm,
            MailingForm
        },
        data() {
            return {
                show: false
            }
        }
    }

</script>

<style lang="less">
    // #app {
    //   font-family: Avenir, Helvetica, Arial, sans-serif;
    //   -webkit-font-smoothing: antialiased;
    //   -moz-osx-font-smoothing: grayscale;
    //   text-align: center;
    //   color: #2c3e50;
    //   margin-top: 60px;
    // }
</style>