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


const taskDet = JSON.parse(getFromStorage());



    for(var i =0; i <taskDet.length; i++){
        if(taskDet.length == 1 && taskDet[0].title == '') {
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
            title = taskDet[i].title
            description = taskDet[i].description
            reward = taskDet[i].reward

            const newCard = document.createElement('div');
            newCard.classList.add('card')
            newCard.innerHTML = `
            <div class="user">
                <img src="/icons/person-circle.svg" alt="">
                <span class="useraccount">@user_name001</span>
                <span class="time_posted">2h</span>
            </div>
            <div class="content">
                <p class="task-title">${title}</p>
            </div>
            <div class="reward">
                <p>Reward : v$ ${reward}</p>
            </div>
            `;
            document.getElementById('feed').append(newCard);
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