var app1 = new Vue({
    el: '#app',  
    data: {

        newName: '',
        newEmail: '',
        newTelephone: '',

        contacts: [
            { name: 'John Doe', email: 'john.doe@deusto.es', telephone: '555555555' },
            { name: 'Pavel Blanco Argollo', email: 'p.blanco@seznam.cz', telephone: '420773230523' },
        ]
    },
    methods: {
        deleteContact: function(index) {
            this.contacts.splice(index, 1);
        },

        
    saveContact: function() {
        if (this.newName && this.newEmail && this.newTelephone) {
            this.contacts.push({
                name: this.newName,
                email: this.newEmail,
                telephone: this.newTelephone
            });

            this.newName = '';
            this.newEmail = '';
            this.newTelephone = '';
        }
    }
    }
});

