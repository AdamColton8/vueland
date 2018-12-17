<template>
    <!--<div>-->
        <!--&lt;!&ndash;<button v-on:click="isHidden = true">Hide the text below</button>&ndash;&gt;-->
        <!--<button v-on:click="isHidden = !isHidden">Toggle hide and show</button>-->

        <!--&lt;!&ndash;<h1>Hide me on click event!</h1>&ndash;&gt;-->
        <!--&lt;!&ndash;<button id="show-modal" @click="showModal = true">Show Modal</button>&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash; use the modal component, pass in the prop &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<modal v-if="showModal" @close="showModal = false">&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;&ndash;&gt;-->
        <!--&lt;!&ndash;you can use custom content here to overwrite&ndash;&gt;-->
        <!--&lt;!&ndash;default content&ndash;&gt;-->
        <!--&lt;!&ndash;&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<h3 slot="header">custom header</h3>&ndash;&gt;-->
        <!--&lt;!&ndash;</modal>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="modal-template">&ndash;&gt;-->
        <!--<transition name="Modal" v-if="!isHidden">-->
            <!--<div class="modal-mask">-->
                <!--<div class="modal-wrapper">-->
                    <!--<div class="modal-vue">-->

                        <!--<img src="../assets/img/icon/strmodal.png" alt="#" class="img-responsive strmodal hidden-xs">-->
                        <!--<button class="modal-default-button" v-on:click="isHidden = !isHidden">-->
                            <!--OK-->
                        <!--</button>-->
                        <!--<button class="remodal-close" style="right: 0"></button>-->
                        <!--<div class="success"><span>Спасибо за заявку!</span></div>-->
                        <!--<div class="row">-->
                            <!--<div class="modal_title col-xs-12 hidden-sm hidden-md hidden-lg">-->
                                <!--<h2 class="h2">Заказать<br><span class="span__tech-title">расчет<br> </span>стоимости-->
                                <!--</h2>-->
                                <!--<div class="decr__title">Для рассчета стоимости оставьте свои контакты-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="col-md-6 col-sm-6 col-xs-12">-->
                                <!--<div class="modal__form-box">-->
                                    <!--<form action="index.html#" class="form-callback">-->
                                        <!--<div class="form__title">Ваше имя</div>-->
                                        <!--<input type="name" name="name" placeholder="Иван">-->
                                        <!--<div class="form__title">Ваш телефон</div>-->
                                        <!--<input type="phone" name="phone" required placeholder="+7(___)___-__-__">-->
                                        <!--<button type="submit" class="btn-form">Заказать расчет стоимости</button>-->
                                    <!--</form>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="col-md-6 col-sm-6 hidden-xs">-->
                                <!--<div class="modal_title">-->
                                    <!--<h2 class="h2">Заказать<br><span class="span__tech-title">расчет<br> </span>стоимости-->
                                    <!--</h2>-->
                                    <!--<div class="decr__title">Для рассчета стоимости оставьте свои контакты-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->

                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</transition>-->


    <!--</div>-->
    <div></div>
</template>

<script>
    export default {
        name: "Modal",

        // template: '#modal-template',
        data() {
            return {
                // showModal: false
                isHidden: true,
            }
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

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
