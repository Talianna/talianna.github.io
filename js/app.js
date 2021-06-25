//        var treeData = {
//         name: "Menu",
//         children: [
//             { name: "Menu",
//                 // children: [{name: "Menu"},{ name: "hello" },{ name: "wat" },{name: "wat"}]
//             },
//             { name: "Menu",
//             // children: [{name: "Menu"},{ name: "hello" },{ name: "wat" },{name: "wat"}]
//         },
//         { name: "Menu",
//         // children: [{name: "Menu"},{ name: "hello" },{ name: "wat" },{name: "wat"}]
//     },
//     { name: "Menu",
//     // children: [{name: "Menu"},{ name: "hello" },{ name: "wat" },{name: "wat"}]
// }
//         ]
//       };


//   Vue.component("tree-item", {
//     template: "#item-template",
//     props: {
//       item: Object
//     },
//     data: function() {
//       return {
//         isOpen: false
//       };
//     },
//     computed: {
//       isFolder: function() {
//         return this.item.children && this.item.children.length;
//       }
//     },
//     methods: {
//       toggle: function() {
//         if (this.isFolder) {
//           this.isOpen = !this.isOpen;
//         }
//       },
//       makeFolder: function() {
//         if (!this.isFolder) {
//           this.$emit("make-folder", this.item);
//           this.isOpen = true;
//         }
//       }
//     }
//   });


// var items = 
// {
// // [
//     // 'Menu',
//     // 'gfgfg',
//     // 'Mendsdsu',
//     // 'Medsdnu',
//     // 'Mdssenu',
//     // 'Medssdnu'

//     // {
//         name: "Menu",
//         children: [{
//             name: "Menu 1"
//         }, {
//             name: "Menu 1"
//         }, {
//             name: "Menu 1"
//         }, {
//             name: "Menu 1"
//         }]
//     // }
//     ,
//     // {
//         name: "Menu",
//         children: [{
//             name: "Menu 2"
//         }, {
//             name: "Menu 2"
//         }, {
//             name: "Menu 2"
//         }, {
//             name: "Menu 2"
//         }]
//     // }
//     ,
//     // {
//         name: "Menu",
//         children: [{
//             name: "Menu 3"
//         }, {
//             name: "Menu 3"
//         }, {
//             name: "Menu 3"
//         }, {
//             name: "Menu 3"
//         }]
//     // }
//     ,
//     // {
//         name: "Menu",
//         children: [{
//             name: "Menu 4"
//         }, {
//             name: "Menu 4"
//         }, {
//             name: "Menu 4"
//         }, {
//             name: "Menu 4"
//         }]
//     // }
// // ]
// }

let app = new Vue({

    el: '#app',
    data: {
        // return {
        //     isOpen: false
        //   };
        // props: {
        //     item: Object
        // },
        // treeData: treeData,


        // hello: 'Hello OOOO',
        show: false,

        // return {
        // form,
        // errors: [],

        // form 
        error: null,
        name: null,
        email: null,
        message: null,

        // nameErr: null,
        // // nameErr2: null,
        // mailErr: null,
        // messErr: null,

        // invalidEmail:null,

        // messageIsValid: null,

        // isActive: true,

        activeClass: 'active',
        errorClass: 'error',

        sendMEssage: false,

        newsMail: null,
        newsMailErr: null,

        // showComponent: false,
        isShowDropdown: false,
        // upHere: false,

        // items: items,

       items :
        // {
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
        // }
        ,
    // items: []

    isFolder: true,


    isOpen: false

},

methods: {
    //     methods: {
    //         submitForm () {

    //             // const nameIsValid = !!this.form.name;
    //             // const emailIsValid = !!this.form.email;

    //             const formIsValid = this.nameIsValid && this.emailIsValid;

    //             if (formIsValid) {
    //                 console.log ('Form submitted', this.form);

    //             } else {
    //                 console.log ('Invalid form');
    //             }
    //         }
    //     },
    checkForm: function () {

        // const formIsValid = this.name && !this.invalidName(this.name) && this.email && this.validEmail(this.email) && this.message;
        const formIsValid = this.nameIsValid && this.emailIsValid && this.messageIsValid;

        // const nameIsValid = !!this.form.name;
        // const emailIsValid = !!this.form.email;

        if (formIsValid) {

            // console.log ('Form submitted', this.form);
            console.log('Form submitted');

            this.sendMEssage = true;

            // return true;

        } else {
            console.log('Invalid form');
        }

        if (!this.name) {
            this.error = 'Заполните поле';
        }

        // else 

        // if 

        // (this.invalidName(this.name)) {
        //     this.nameErr = 'Цифры в имени не допустимы';
        // } else {
        //     this.nameErr = null;
        //     // this.nameErr2 = null;
        // }

        if (!this.email) {
            this.error = 'Заполните поле';
            // } else if (!this.validEmail(this.email)) {
            //     this.mailErr = 'Некорректный email';
            // } else {
            //     this.mailErr = null;
        }
        // invalidEmail = !this.validEmail(this.email);

        if (!this.message) {
            this.error = 'Заполните поле';
        }
        // else {
        //     this.messErr = null;
        // }

        // const formIsValid = this.nameIsValid && this.emailIsValid;

        //     if (formIsValid) {
        //         console.log ('Form submitted', this.form);

        //     } else {
        //         console.log ('Invalid form');
        //     }


        //   e.preventDefault();
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
            this.error = 'Заполните поле';
        } else {
            this.error = null;
        }
    },

    // getMailStyle: function (item) {
    //     return {
    //       color: item.color
    //     };
    //   },
    //       changeColor: function (event) {
    //         // e.preventDefault();
    //     event.target.style.color = 'red';
    //       },
    //       originalColor: function (event) {
    //         event.target.style.color = '#ccc';
    //       },
    //       showComponent: function () {
    //         // e.preventDefault();
    //    show = true;
    //       },

    // toggle(el) {
    //     el.hidden ? el.hidden : !el.hidden ;
    //     // console.log(el)
    // },

    showDropdown(item) {
        console.log(this.isShowDropdown);
        this.isShowDropdown = !this.isShowDropdown
        console.log(this.isShowDropdown);
    },

    // makeFolder: function (item) {
    //     Vue.set(item, "children", []);
    //     this.addItem(item);
    // },
    // addItem: function (item) {
    //     item.children.push({
    //         name: "new stuff"
    //     });
    // },



    toggle: function () {
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
    },

},

computed: {

    // isFolder: function () {
    //     return this.item.children && this.item.children.length;
    // },

    // isFolder: function () {
    //     return this.item;
    //     //  && this.item.children.length;
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

        // nameIsValid(); emailIsValid(); messageIsValid();

        //  checkForm();
    },

    newsMailIsValid () {
        // return !!this.newsMail;
        return !!this.newsMail && !!this.validEmail(this.newsMail);
    }
}

});