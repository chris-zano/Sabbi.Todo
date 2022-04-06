// if(document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded',ready)
// }
// else {
//     ready()
// }

// function ready() {
const getId = (id) => {
    return document.getElementById(id);
}
const getValue = (id) => {
    return document.getElementById(id).value;
}



const postBtn = getId('post')

postBtn.addEventListener('click', getGeoLoc);
getTime()
function getTime() {
    const date = new Date()
    return date.toLocaleDateString() +' '+ date.toLocaleTimeString()
            
}

async function getGeoLoc(e) {
    e.preventDefault()

    const postTitle = getValue('post-title');
    const taskReward = getValue('post-cost');

    const postInfo = {
        description: '',
        reward: '',
        status: 'pending',
        timeStamp :getTime()
    }

    postInfo.description = postTitle;
    postInfo.reward = taskReward;
    console.log(postInfo);

    const options = {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postInfo)
    }

    const res = await fetch('/api', options);
    const rjdata = await res.json()
    console.log(rjdata);

}

// }