if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
}
else {
    ready()
}

function ready() {
    switchTabs()
    getUsername()
    getData()
}


function switchTabs() {
    document.getElementById('activity-tab').classList.add('hide-section')
    document.getElementById('wallet').classList.add('active-nav')
    


    document.getElementById('wallet').addEventListener('click',(e) => {
        document.getElementById('activity').classList.remove('active-nav')
        document.getElementById('activity-tab').classList.add('hide-section')
        document.getElementById('wallet-tab').classList.remove('hide-section')
        e.target.classList.add('active-nav')
    })
    document.getElementById('activity').addEventListener('click',(e) => {
        document.getElementById('wallet').classList.remove('active-nav')
        document.getElementById('wallet-tab').classList.add('hide-section')
        document.getElementById('activity-tab').classList.remove('hide-section')
        e.target.classList.add('active-nav')
    })
}

function getUsername() {
    document.getElementById('username').textContent = '@' + JSON.parse(localStorage.getItem('loginCred'))[0].tusername;
}

async function getData() {
    const response = await fetch('/tabbisubmit');
    const data = await response.json()

    if(data.length == 0 ) {
        const newCard = document.createElement('div');
        newCard.classList.add('no-feed')
        newCard.innerHTML = `
            <div class="no-feed">
                <h2>No tabbi available at this time</h2>
            </div>
        `;
        document.getElementById('activity-tab').append(newCard) 
    }
    else {        
        for(var i =0; i <data.length; i++){
            const tabbiDes = data[i].tabbi;
            const tabbireward = data[i].reward;
            const tabbiStatus = data[i].status;
            const tabbiSubmits = data[i].subReq;
            const newCard = document.createElement('div');
            newCard.classList.add('activity-details');
            newCard.innerHTML = `
                <p class="activity-description">${tabbiDes} </p>
                <p class="activity-reward">${tabbireward} </p>
                <p class="activity-status">${tabbiStatus} </p>
                <p class="activity-submits">${tabbiSubmits} </p>
            `;
            document.getElementById('activity-tab').append(newCard);
                
        }
    }
}