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

postBtn.addEventListener('click', addTabbi);


async function addTabbi() {
    const postTitle = getValue('post-title');

    const taskReward = getValue('post-cost');
    const resID = await fetch('/UIDapi');
    const UID = await resID.json()
    const date =`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`

    const postInfo = {
        description: '',
        reward: '',
        status: 'pending',
        timeStamp : date,
        userID : UID
    }

    postInfo.description = postTitle;
    postInfo.reward = taskReward;

    const options = {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postInfo)
    }

    const res = await fetch('/api', options);
    const rjdata = await res.json()
    return rjdata
}

// }