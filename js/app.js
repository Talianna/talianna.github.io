
let app = new Vue({

    el: '#app',
    data: {

        show: false,
        showMenu: false,
 
        error: null,
        name: null,
        email: null,
        message: null,

        activeClass: 'active',
        errorClass: 'error',

        sendMEssage: false,

        newsMail: null,
        newsMailErr: null,

       items :
        [
            // 'Menu',
            // 'gfgfg',
            // 'Mendsdsu',
            // 'Medsdnu',
            // 'Mdssenu',
            // 'Medssdnu'

            {
                name: "Menu",
                children: [{
                    name: "Menu 1"
                }, {
                    name: "Menu 1"
                }, {
                    name: "Menu 1"
                }, {
                    name: "Menu 1"
                }]
            }
            ,
            {
                name: "Menu",
                children: [{
                    name: "Menu 2"
                }, {
                    name: "Menu 2"
                }, {
                    name: "Menu 2"
                }, {
                    name: "Menu 2"
                }]
            }
            ,
            {
                name: "Menu",
                children: [{
                    name: "Menu 3"
                }, {
                    name: "Menu 3"
                }, {
                    name: "Menu 3"
                }, {
                    name: "Menu 3"
                }]
            }
            ,
            {
                name: "Menu",
                children: [{
                    name: "Menu 4"
                }, {
                    name: "Menu 4"
                }, {
                    name: "Menu 4"
                }, {
                    name: "Menu 4"
                }]
            }
        ]
        ,

    isFolder: true,


    isOpen: false

},

methods: {

    checkForm: function () {

        // const formIsValid = this.name && !this.invalidName(this.name) && this.email && this.validEmail(this.email) && this.message;
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

        // var re = /[a-zA-Zа-яА-ЯёЁ ]+/;
        // return re.test(name);
    },
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
    },


    toggle: function () {
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
    }

},

computed: {

    // isFolder: function () {
    //     return this.item.children && this.item.children.length;
    // },


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
    },

    newsMailIsValid () {
        return !!this.newsMail && !!this.validEmail(this.newsMail);
    }
}

});