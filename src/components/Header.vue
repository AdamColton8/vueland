
<template>

    <header class="header" id="home">
        <div>
            <div>
                <!--<img v-for="image in images" :src="image.url" :alt="image.alt" />-->
            </div>
            
            <div>
                <slick
                        ref="slick"
                        :options="slickOptions">
                    <img v-for="image in images" :src="image.url" :alt="image.alt" />
                </slick>
            </div>
        </div>
        <div>
            
            <div v-if="!isHidden">
                <transition name="fade" v-if="show">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-vue">

                                <img src="../assets/img/icon/strmodal.png" alt="#"
                                     class="img-responsive strmodal hidden-xs">
                                <a class="cursor-pointer modal-default-button" v-on:click="isHidden = !isHidden">
                                    X
                                </a>
                                <button class="remodal-close" style="right: 0"></button>
                                <div class="success"><span>Спасибо за заявку!</span></div>
                                <div class="row">
                                    <div class="modal_title col-xs-12 hidden-sm hidden-md hidden-lg">
                                        <h2 class="h2">Заказать<br><span class="span__tech-title">расчет<br> </span>стоимости
                                        </h2>
                                        <div class="decr__title">Для рассчета стоимости оставьте свои контакты
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="modal__form-box">
                                            <form action="index.html#" class="form-callback">
                                                <div class="form__title">Ваше имя</div>
                                                <input type="text" name="name" placeholder="Иван" v-model="nameModalOne">
                                                <div class="form__title">Ваш телефон</div>
                                                <input type="text" name="phone" required placeholder="+7(___)___-__-__" v-model="phoneModalOne">
                                                <button type="submit" class="btn-form">Заказать расчет стоимости</button>
                                            </form>
                                        </div>
                                        <p><pre>data: {{$data | json 2}}</pre></p>
                                    </div>
                                    <div class="col-md-6 col-sm-6 hidden-xs">
                                        <div class="modal_title">
                                            <h2 class="h2">Заказать<br><span class="span__tech-title">расчет<br> </span>стоимости
                                            </h2>
                                            <div class="decr__title">Для рассчета стоимости оставьте свои контакты
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </transition>
            </div>



        </div>
        <div class="row">
            <div class="col-md-6 col-sm-5 col-xs-2">
                <div class="header__left">
                    <a href="index.html#" class="logo"><img src="../assets/img/logo.png" alt="мебель дизайн" class="logo__pic"></a>
                    <div class="logo__decr hidden-xs">
                        <p>Изготовление мебели <br>на заказ в Алматы</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-7 col-xs-10">
                <div class="header__right">
                    <div class="header__phone">
                        <div class="phone__icon hidden-xs"><img src="../assets/img/icon/phone_icon.png" alt="телефон"></div>
                        <a href="tel:+77272969017" class="phone hidden-xs"
                           data-form="Телефон: шапка сайта"
                           data-text="Оставить заявку"
                           data-remodal-target="modal3">+7(727) 296-90-17</a>
                        <a href="tel:+77272969017" class="phone hidden-lg hidden-md hidden-sm">+7(727) 296-90-17</a><br
                            class="hidden-lg hidden-md hidden-sm">
                        <p class="phone__span hidden-xs">/</p>
                        <a href="tel:+77017271660" class="phone hidden-xs"
                           data-form="Телефон: шапка сайта"
                           data-text="Оставить заявку"
                           data-remodal-target="modal3">+7-701-727-16-60</a>
                        <a href="tel:+77017271660" class="phone hidden-lg hidden-md hidden-sm">+7-701-727-16-60</a>
                    </div>
                    <div class="header__address hidden-xs">
                        <div class="address__decr">Алматы, Ниязбекова, 59</div>
                    </div>
                    <div class="header__hamburger">
                        <a class="hamburger" href="index.html#"><span class="line"></span></a>
                    </div>
                    <nav class="menu__slide">
                        <ul class="menu__list">
                            <li class="menu__item">
                                <a href="index.html#home" class="menu__link scrollto">Главная</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#section__technology" class="menu__link scrollto">Технологии</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#catalog" class="menu__link scrollto">Каталог</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#form" class="menu__link">Калькулятор</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#history" class="menu__link scrollto">О компании</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#portfolio" class="menu__link scrollto">Наши проекты</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#vslider" class="menu__link scrollto">Создание</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#comments" class="menu__link scrollto">Отзывы</a>
                            </li>
                            <li class="menu__item">
                                <a href="index.html#contacts" class="menu__link scrollto">Контакты</a>
                            </li>
                        </ul>
                        <div class="menu__close line-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.167" height="25.667"
                                 viewBox="0 0 25.167 25.667">
                                <path fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round"
                                      stroke-miterlimit="10" d="M24.167 1l-23 23.667"></path>
                                <path fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round"
                                      stroke-miterlimit="10" d="M16.196 16.636L24 24.667"></path>
                                <path fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round"
                                      stroke-miterlimit="10" d="M1 1l8.295 8.536"></path>
                            </svg>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-md-offset-1 col-sm-7 col-xs-12">
                    <div class="header__title">
                        <h1 class="h1"><span class="span__title">Эксклюзивная мебель<br></span> в Алматы на заказ<br> от
                            производителя<br> <span class="span__decr">по индивидуальным проектам</span></h1>
                    </div>
                    <div class="header__btn">
                        <a class="btn__link"
                           data-form="Заказать расчет стоимости"
                           data-text="Заказать расчет стоимости" v-on:click="isHidden = !isHidden" >Заказать расчет стоимости
                            <div class="btn"></div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-5 col-xs-12">
                    <div class="header__play">
                        <div class="play__decr">
                            Посмотреть <br>видео<br>
                            <span class="span__play">
							о компании
						</span>
                        </div>
                        <a href="https://www.youtube.com/watch?v=PvtILsWMmw4" class="play__link popup-youtube">
                            <span class="play__circle"></span>
                            <span class="play__circle-orange"></span>
                            <span class="circle__inner"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <ul class="header__list">
                        <li class="header__item">
                            Без посредников
                        </li>
                        <li class="header__item">
                            От 5 дней
                        </li>
                        <li class="header__item">
                            С гарантией 12 месяцев!
                        </li>
                    </ul>
                </div>
                <div class="col-md-1">

                </div>
            </div>
        </div>
        <div class='mouse-container'>
            <div class='mouse'>
                <span class='scroll-down'></span>
            </div>
            <span class="mous_decr">
			листайте вниз
		</span>
        </div>

    </header>
</template>

<script>
    import Slick from 'vue-slick';


    // import ModalOne from './Modal'
    export default {
        name: "Header",
        mounted () {
            // $('h1').addClass('1232323');
        },
        components: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            // ModalOne
            Slick
        },
        data () {
            return {
                images: [
                    { url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/TVE_La1_-_Logo_2008.png', alt: '1' },
                    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_TVE-2.svg/1200px-Logo_TVE-2.svg.png', alt: '2' },
                    { url: 'http://dnpr.com.ua/wp-content/uploads/2015/02/3.png', alt: '3' },
                    { url: 'https://www.brainz.org/wp-content/uploads/2017/06/4-1-600x477.png', alt: '4' },
                ],
                isHidden: true,
                show: true,
                nameModalOne: '',
                phoneModalOne: '',
                slickOptions: {
                    slidesToShow: 3,
                    // Any other options that can be got from plugin documentation
                },
            }
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },
        },
    }
</script>

<style scoped>
    .modal-vue {
        width: 55rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /*width: 100%;*/

        padding: 35px;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        color: #2b2e38;
        background: #fff;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .cursor-pointer{
        text-decoration: none;
        cursor: pointer;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

</style>