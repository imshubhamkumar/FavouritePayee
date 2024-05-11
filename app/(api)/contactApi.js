const addContactApi = async (contact) => {
    const form = new FormData();

    form.append("data", contact);

    let result = await fetch("/api/addcontact", {
        method: "post",
        body: form
    });

    return result.status === 200 ? true : false;
};

const editContactApi = async(contact) => {
    const form = new FormData();

    form.append("data", contact);

    let result = await fetch("/api/addcontact", {
        method: "put",
        body: form
    });

    return result.status === 200 ? true : false;
};

const deleteContactApi = async(contact) => {
    const form = new FormData();

    form.append("accountNumber", contact.accountNumber);

    let result = await fetch("/api/addcontact", {
        method: "delete",
        body: form
    });

    return result.status === 200 ? true : false;
};

const getContactListApi = async() => {
    let result = await fetch("/api/getContact");

    if(result.status === 200) {
        result = await result.json();
        return result;
    }

    return false;
};

export { addContactApi, editContactApi, deleteContactApi, getContactListApi };
