if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready() {
    //variables
    const getfromStorage = localStorage.getItem('objCard');
    const tabbiObj = JSON.parse(getfromStorage);


    createTabbi(tabbiObj)

    document.getElementById('submit-rqst').addEventListener('click',submitRequest);
}


function createTabbi(tabbiObj) {
    const newCard = document.createElement('div');
    newCard.classList.add('container');
    newCard.innerHTML = `
        <p id="reward">${tabbiObj.reward} </p>
        <p id="description">${tabbiObj.des} </p>
        <button type="submit" id="submit-rqst">Submit Request</button>
        <small id="subs">13 submitted requests</small>
        <small>9 denied submissions</small>
    `;
    document.querySelector('main').append(newCard);
}

function submitRequest() {
    alert('your request is being processed for submission');
    document.getElementById('subs').textContent = '14 submitted requests';
}