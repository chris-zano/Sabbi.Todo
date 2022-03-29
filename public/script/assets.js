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
                <p class="task-reward">Reward : v$ ${reward}</p>
            </div>
            `;
            document.getElementById('feed').append(newCard);
        }
    }
}





const card = document.querySelector('.feed');
card.addEventListener('click',(e) => {
    if(e.target.parentElement.classList.contains('card')) {
        cardClicked = e.target.parentElement
        console.log(cardClicked);
        
        const username = cardClicked.querySelector('.useraccount').textContent
        const cardDes = cardClicked.querySelector('.task-title').textContent
        const cardRwd = cardClicked.querySelector('.task-reward').textContent
        
        const objCard = {
            user : username,
            des: cardDes,
            reward : cardRwd
        }

        localStorage.setItem('objCard', JSON.stringify(objCard))
        setTimeout(() => {
            window.location = '/pages/tabbi.html'
        }, 1500);
    }
    else if(e.target.parentElement.parentElement.classList.contains('card')){
        cardClicked = e.target.parentElement.parentElement
        console.log(cardClicked);  
    }
})

const useDet = {
    tusername: '',
    tpassword: '',
    isLoggedIn: false
}

const useArr = [useDet]


if(localStorage.loginCred == null || localStorage.loginCred == undefined) {
localStorage.setItem('loginCred', JSON.stringify(useArr))
}
else{
console.log('error, cannot log user in');
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