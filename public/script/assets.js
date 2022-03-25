getData()
function getFromStorage() {

    let storageArray;
    const arrayLS = localStorage.getItem('task')
    if(arrayLS === null) {
        storageArray = [];
    }
    else {
        storageArray = arrayLS;
    }
    return storageArray;
}

async function getData() {
    const response = await fetch('/api');
    const data = await response.json()
    console.log(data)

    if(data.length == 0 ) {
        const newCard = document.createElement('div');
        newCard.classList.add('no-feed')
        newCard.innerHTML = `
            <div class="no-feed">
                <h2>No feed available at this time</h2>
            </div>
        `;
        document.getElementById('feed').append(newCard) 
    }
    else {
        for(var i =0; i <data.length; i++){
            description = data[i].description
            reward = data[i].reward
            elapsedTime = data[i].timeStamp
    
            const newCard = document.createElement('div');
            newCard.classList.add('card')
            newCard.innerHTML = `
            <div class="user">
                <img src="./icons/person-circle.svg" alt="">
                <span class="useraccount">@user_name001</span>
                <span class="time_posted"> ${elapsedTime} </span>
            </div>
            <div class="content">
                <p class="task-title">${description}</p>
            </div>
            <div class="reward">
                <p>Reward : v$ ${reward}</p>
            </div>
            `;
            document.getElementById('feed').append(newCard);
        }
    }
}





const card = document.getElementsByClassName('card');
for(var i= 0; i < card.length; i++){
    var cardClicked = card[i]
    cardClicked.addEventListener('click',(e) => {
        const targetCard = e.target.parentElement.parentElement
        
        const tabbiUser = targetCard.querySelector('.user').textContent
        const tabbiText = targetCard.querySelector('.task-title').textContent
        const tabbiReward = targetCard.querySelector('.reward').textContent
        
        console.log(tabbiReward, tabbiText, tabbiUser);
    })
}

const useDet = {
    tusername: '',
    tpassword: '',
    isLoggedIn: false
}
const taskDet = {
title : "",
description: "",
reward: 0
}

const taskArray = [taskDet]
const useArr = [useDet]


if(localStorage.loginCred == null || localStorage.loginCred == undefined) {
localStorage.loginCred
localStorage.setItem('loginCred', JSON.stringify(useArr))
localStorage.setItem('task',JSON.stringify(taskArray))
}
else{
// console.log(false); 
}

const getId = (id) => {
    return document.getElementById(id);
}

getId('profile').addEventListener('click', () => {
    const isUserLogged = JSON.parse(localStorage.getItem('loginCred'))[0].isLoggedIn
    if(isUserLogged == true) {
        window.location.href = './pages/profile.html'
    }
    else if(isUserLogged == null || isUserLogged == undefined || isUserLogged == false) {
        window.location.href = './pages/login.html'
    }
})
getId('addtask').addEventListener('click', () => {
const isUserLogged = JSON.parse(localStorage.getItem('loginCred'))[0].isLoggedIn
    if(isUserLogged == true) {
        window.location.href = './pages/addtask.html'
    }
    else if(isUserLogged == null || isUserLogged == undefined || isUserLogged == false) {
        window.location.href = './pages/login.html'
    }
})