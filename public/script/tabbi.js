//variables

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

const getfromStorage = localStorage.getItem('objCard');
const tabbiObj = JSON.parse(getfromStorage);
function ready() {
    createTabbi(tabbiObj);
    document.getElementById('submit-rqst').addEventListener('click',submitRequest);
}

const getValue = (id) => {
    return document.getElementById(id).textContent;
}

function createTabbi(tabbiObj) {
    const newCard = document.createElement('div');
    newCard.classList.add('container');
    newCard.innerHTML = `
        <p id="reward">${tabbiObj.reward} </p>
        <p id="description">${tabbiObj.des} </p>
        <button type="submit" id="submit-rqst">Submit Request</button>
        <small id="subreq">${parseInt(tabbiObj.submittedRequests)} submitted requests</small>
        <small id="densubs">${tabbiObj.deniedRequests} denied submissions</small>
    `;
    document.querySelector('main').append(newCard);

}

async function submitRequest() {
    getDetails(tabbiObj)
    var subreq = tabbiObj.submittedRequests +=1;
    localStorage.setItem('objCard',JSON.stringify(tabbiObj));

    const tabbi = getValue('description')
    const reward = getValue('reward')

    const postInfo = {
        id:'',
        tabbi: tabbi,
        reward: reward,
        subReq: subreq,
        status:'pending'
    }
    console.log(postInfo);
    const options = {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postInfo)
    }

    const res = await fetch('/tabbisubmit', options);
    const rjdata = await res.json()
    console.log(rjdata);

}

function getDetails(tabbiObj) {
    console.log(tabbiObj);
}