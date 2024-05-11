const { getContactListApi, addContactApi } = require("../(api)/contactApi");

class PayeeContacts {
    constructor(contacts) {
        this.sortContacts(contacts)
    }

    sortContacts(contacts) {
        const favContacts = [];
        const otherContacts = [];
        

        contacts.forEach(user => {
            if(user.isFav) {
                favContacts.push(user);
                return;
            }

            otherContacts.push(user);
        })

        const sortContacts = (user1, user2) => {
            const name1 = user1.firstname + user1.lastName;
            const name2 = user2.firstname + user2.lastName;

            return name1.localeCompare(name2);
        }

        favContacts = favContacts.sort(sortContacts);

        otherContacts = otherContacts.sort(sortContacts);

        this.payeeList = [...favContacts, ...otherContacts]
    }

    addContact(contact) {
        this.payeeList.push(contact);
        this.sortContacts(this.payeeList);
    }

    editContact(contact) {
        this.payeeList = this.payeeList.map(user => {
            if(user.accountNumber !== contact.accountNumber) {
                return contact;
            }
        });

        this.sortContacts(this.payeeList);
    }

    deleteContact(contact) {
        this.payeeList = this.payeeList.filter(user => {
            return user.accountNumber !== contact.accountNumber
        });

        this.sortContacts(this.payeeList);
    }

    getContactList() {
        return this.payeeList;
    }
}

const initiateContactsDataStore = async () => {
    const contacts = await getContactListApi();

    const contactsDataStore = new PayeeContacts(contacts);

    window.contactsDataStore = contactsDataStore;
}

const getContactDataStoreInstance = () => {
    return window.contactsDataStore;
}

const addPayee = async (contact) => {
    const contactsDataStore = getContactDataStoreInstance();

    let result = await addContactApi(contact);

    if(result) {
        contactsDataStore.addContact(contact)
    }
}

export {initiateContactsDataStore, addPayee}