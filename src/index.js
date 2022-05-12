import store from "./store";
import * as action_creators from "./action_creators";

let tbody = document.querySelector('tbody');
let accountsBtn = document.querySelector('#accountsBtn');
let addAccountBtn = document.querySelector('#addAccountBtn');

let accountsView = document.querySelector('#accountsView');
let addAccountsView = document.querySelector('#addAccountsView');

let saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener('click', function () {
    store.dispatch(action_creators.ADD_NEW_ACCOUNTS_ACTION({
        id: document.querySelector('[placeholder="id"]').value,
        name: document.querySelector('[placeholder="name"]').value,
        phone: document.querySelector('[placeholder="phone"]').value,
        email: document.querySelector('[placeholder="email"]').value,
    }));
    store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION());

    document.querySelector('[placeholder="id"]').value = "";
    document.querySelector('[placeholder="name"]').value = "";
    document.querySelector('[placeholder="phone"]').value = "";
    document.querySelector('[placeholder="email"]').value = "";

})

window.addEventListener('load', () => {
    store.dispatch(action_creators.START())
})

store.subscribe(function () {
    displayAccounts();
    changeView();
})

addAccountBtn.addEventListener('click', function () {
    store.dispatch(action_creators.DISPLAY_ADD_ACCOUNT_ACTION());
})

accountsBtn.addEventListener('click', function () {
    //console.log('da');
    store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION())
})

function displayAccounts() {
    let accounts = store.getState().accountsData.accounts;
    console.log(accounts.length)
    let text = ``;
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        text += `
        <tr>
            <td>${account.id}</td>
            <td>${account.name}</td>
            <td>${account.phone}</td>
            <td>${account.email}</td>
            <td><button data-id="${account.id}" class="btn btn-danger delete">Delete</button></td>
        </tr>
        `;
    }
    tbody.innerHTML = text;
    let allDeleteBtns = document.querySelectorAll(".delete")
    for (let i = 0; i < allDeleteBtns.length; i++) {
        const btn = allDeleteBtns[i];
        btn.addEventListener('click', deleteAccount);
    }
}

function deleteAccount() {
    let id = this.getAttribute('data-id');
    store.dispatch(action_creators.DELETE_ACCOUNT_ACTION(id))
}

function changeView() {
    let view = store.getState().displayData.display;

    if (view == 1) {
        accountsView.style.display = 'block';
        addAccountsView.style.display = 'none';
    } else {
        accountsView.style.display = 'none';
        addAccountsView.style.display = 'block';
    }
}