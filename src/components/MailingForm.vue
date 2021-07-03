<template>
    <form id="mailingForm" class="mailingForm" method="POST" @submit.prevent="mailingForm" novalidate="true">

    <div v-if="this.newsMail && !this.validEmail(this.newsMail)" class="contact contact_mess contact_footer">Некорректный email</div>
    <div v-if="!this.newsMail" class="contact contact_mess contact_footer"> {{ newsMailErr }} </div>

    <input maxlength="30" type="email" name="email" required tabindex="1" placeholder="example@mail.com" v-model="newsMail" v-bind:class="[!newsMailErr || newsMailIsValid ? activeClass : errorClass]">

    <button class="button" type="submit" id="submitMailing" value="Ok" tabindex="2">Ok</button>

    </form>
</template>

<script>
export default {
       data() {
        return {
            // show: false,
// 
            // error: null,
            // name: null,
            // email: null,
            // message: null,

            activeClass: 'active',
            errorClass: 'error',

            // sendMessage: false,

            newsMail: null,
            newsMailErr: null
        }
    },
    methods: {

    // checkForm: function () {
    //     const formIsValid = this.nameIsValid && this.emailIsValid && this.messageIsValid;

    //     if (formIsValid) {
    //         console.log('Form submitted');
    //         this.sendMEssage = true;
    //     } else {
    //         console.log('Invalid form');
    //     }

    //     if (!this.name) {
    //         this.error = 'Заполните поле';
    //     }
    //     if (!this.email) {
    //         this.error = 'Заполните поле';
    //     }
    //     if (!this.message) {
    //         this.error = 'Заполните поле';
    //     }
    // },

    // invalidName: function (name) {
    //     var re = /[0-9]+/;
    //     return re.test(name);
    // },

    validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    mailingForm: function () {

        const newsFormIsValid = this.newsMailIsValid;

        if (newsFormIsValid) {
            console.log('Form submitted');
        } else {
            console.log('Invalid form');
        }

        if (!this.newsMail) {
            this.newsMailErr = 'Заполните поле';
        } else {
            this.newsMailErr = null;
        }
    }

    //   toggle(el) {
    //     el.hidden ? el.hidden = !el.hidden : this.$set(el, 'hidden', true);
    //     // console.log(el)
    // }
},
computed: {

    // nameIsValid() {
    //     return !!this.name && !this.invalidName(this.name);
    // },
    // emailIsValid() {
    //     return !!this.email && !!this.validEmail(this.email);
    // },
    // messageIsValid() {
    //     return !!this.message;
    // },
    // allFieldsAreValid() {
    //     return !!this.name && !this.invalidName(this.name) && !!this.email && !!this.validEmail(this.email) && !!this.message;
    // },

    newsMailIsValid () {
        return !!this.newsMail && !!this.validEmail(this.newsMail);
    }
}

}
</script>

<style>

</style>