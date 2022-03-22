if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else {
    ready()
}

function ready() {
    callTasks('trending');
    callTasks('latest');
    callTasks('recommendations');
    callTasks('following');


    function callTasks(id) {
        const trends =document.getElementById(id)
        const storagelocal = getFromStorage()
        const taskDet = JSON.parse(storagelocal);
        for(var i =0; i <taskDet.length; i++){
            title = taskDet[i].title
            description = taskDet[i].description
            reward = taskDet[i].reward
            const newCard = document.createElement('div')
            newCard.classList.add('section-cards')
            newCard.innerHTML = `
            <h3 class="card-title title">${title}</h3>
            <p class="card-reward">v$ ${reward}</p>
            <div class="who-posted">
                <div class="profile">
                    <img src="./icons/person-circle.svg" alt="userProfile" width="10px" height="10px">
                    <p>username</p>
                </div>
                <div class="views">
                    <img src="./icons/eye.svg" alt="viewCount" width="10px" height="10px">
                    <p>17.3k</p>
                </div>
            </div>
            `;
            trends.querySelector('.box').append(newCard)
        }
    }

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
}