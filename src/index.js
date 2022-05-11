import store from "./store";
import * as action_creators from "./action_creators";

let tbody =  document.querySelector('tbody');
let accountsBtn = document.querySelector('#accountsBtn');
let addAccountBtn = document.querySelector('#addAccountBtn');

let accountsView = document.querySelector('#accountsView');
let addAccountsView = document.querySelector('#addAccountsView');

let saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener('click', function(){
    store.dispatch(action_creators.ADD_NEW_ACCOUNTS_ACTION({
        id: document.querySelector('[placeholder="id"]').value,
        name: document.querySelector('[placeholder="name"]').value,
        phone: document.querySelector('[placeholder="phone"]').value,
        email: document.querySelector('[placeholder="email"]').value,
    }));
    store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION());
})

window.addEventListener('load',()=>{
    store.dispatch(action_creators.START()) 
})

store.subscribe(function(){
    displayAccounts();
    changeView();
})

addAccountBtn.addEventListener('click', function(){
    store.dispatch(action_creators.DISPLAY_ADD_ACCOUNT_ACTION());
})

accountsBtn.addEventListener('click',function(){
    //console.log('da');
    store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION())
})

function displayAccounts() {
    let accounts = store.getState().accounts;
    let text = ``;
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        text += `
        <tr>
            <td>${account.id}</td>
            <td>${account.name}</td>
            <td>${account.phone}</td>
            <td>${account.email}</td>
        </tr>
        `;

        tbody.innerHTML = text;
        
    }
}

function changeView() {
    let view = store.getState().display;

    if(view == 1){
        accountsView.style.display = 'block';
        addAccountsView.style.display = 'none';
    }else{
        accountsView.style.display = 'none';
        addAccountsView.style.display = 'block';
    }
}