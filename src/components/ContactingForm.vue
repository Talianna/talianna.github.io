<template>
  
    <div class="mailing__form contactForm">

        <form id="mailingForm" method="POST" @submit.prevent="checkForm" novalidate="true">

            <div class="contactForm__fields">
                <div>
                    <div v-if="this.invalidName(this.name)" class="contact contact_mess">Цифры в имени не допустимы</div>
                    <div v-if="!this.name" class="contact contact_mess"> {{ error }} </div>

                    <p class="contact"><label for="name">Имя</label></p>
                    <input id="name" maxlength="30" type="text" name="name" required tabindex="1" v-model="name" :class="[(!error || nameIsValid) ? activeClass : errorClass]">
                </div>

                <div>
                    <div v-if="this.email && !this.validEmail(this.email)" class="contact contact_mess">Некорректный email</div>
                    <div v-if="!this.email" class="contact contact_mess"> {{ error }} </div>

                    <input id="email" maxlength="30" type="email" name="email" required tabindex="2" placeholder="example@mail.com" v-model="email" :class="[!error || emailIsValid ? activeClass : errorClass]">
                </div>
            </div>

            <div v-if="!messageIsValid" class="contact contact_mess"> {{ error }} </div>

            <textarea name="message" cols="30" rows="10" maxlength="400" tabindex="3" placeholder="Комментарии" required v-model="message" :class="[!error ||  messageIsValid ? activeClass : errorClass]"></textarea>

            <button class="button" type="submit" id="submit" value="подписаться" tabindex="4">подписаться</button>
        </form>

        <div class="checkedFields" v-if="allFieldsAreValid">
            Заявка отправлена
        </div>
        <div class="response" v-if="sendMessage">
            <img src="../assets/done.svg" alt="done">
            Уважаемый {{ this.name }}, <br>
            спасибо за подписку!
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            show: false,

            error: null,
            name: null,
            email: null,
            message: null,

            activeClass: 'active',
            errorClass: 'error',

            sendMessage: false

            // newsMail: null,
            // newsMailErr: null
        }
    },
    methods: {

    checkForm: function () {
        const formIsValid = this.nameIsValid && this.emailIsValid && this.messageIsValid;

        if (formIsValid) {
            console.log('Form submitted');
            this.sendMEssage = true;
        } else {
            console.log('Invalid form');
        }

        if (!this.name) {
            this.error = 'Заполните поле';
        }
        if (!this.email) {
            this.error = 'Заполните поле';
        }
        if (!this.message) {
            this.error = 'Заполните поле';
        }
    },

    invalidName: function (name) {
        var re = /[0-9]+/;
        return re.test(name);
    },

    validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    // mailingForm: function () {

    //     const newsFormIsValid = this.newsMailIsValid;

    //     if (newsFormIsValid) {
    //         console.log('Form submitted');
    //     } else {
    //         console.log('Invalid form');
    //     }

    //     if (!this.newsMail) {
    //         this.newsMailErr = 'Заполните поле';
    //     } else {
    //         this.newsMailErr = null;
    //     }
    // },

      toggle(el) {
        el.hidden ? el.hidden = !el.hidden : this.$set(el, 'hidden', true);
        // console.log(el)
    }
},
computed: {

    nameIsValid() {
        return !!this.name && !this.invalidName(this.name);
    },
    emailIsValid() {
        return !!this.email && !!this.validEmail(this.email);
    },
    messageIsValid() {
        return !!this.message;
    },
    allFieldsAreValid() {
        return !!this.name && !this.invalidName(this.name) && !!this.email && !!this.validEmail(this.email) && !!this.message;
    }

    // newsMailIsValid () {
    //     return !!this.newsMail && !!this.validEmail(this.newsMail);
    // }
}

}
</script>



<style>

</style>