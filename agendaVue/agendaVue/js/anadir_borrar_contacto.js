new Vue({
    el: '#app',
    data: {
        newContact: {
            name: '',
            email: '',
            phone: ''
        },
        contacts: [
            { id: 1, name: 'John Doe', email: 'john.doe@deusto.es', phone: '555555555' },
            { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555123456' },
        ]
    },
    methods: {
        addContact() {
            if (this.newContact.name && this.newContact.email && this.newContact.phone) {
                this.contacts.push({
                    id: this.contacts.length + 1,
                    name: this.newContact.name,
                    email: this.newContact.email,
                    phone: this.newContact.phone
                });
                this.newContact.name = '';
                this.newContact.email = '';
                this.newContact.phone = '';
            } else {
                alert('Por favor, completa todos los campos.');
            }
        },
        removeContact(index) {
            this.contacts.splice(index, 1);
        }
    }
});
