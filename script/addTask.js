if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
}
else {
    ready()
}

function ready() {
    const getId = (id) => {
        return document.getElementById(id);
    }
    const getValue = (id) => {
        return document.getElementById(id).value;
    }

    const postTitle = getValue('post-title');
    const taskReward = getValue('post-cost');

    const postBtn = getId('post')

    postBtn.addEventListener('click', getFormData);

    function getFormData() {
        //create the object
        const xhr = new XMLHttpRequest();

        //open the connection
        xhr.open('GET','data.json', true);

        //execute the function
        xhr.onload = function () {
            if(this.status === 200){
                loadData(this.responseText);
            }
        }

        //send the request
        xhr.send();

        postData()
    }

    function loadData(response) {
        const newTabbi = {
            id : "",
            description : "",
            reward : "",
            status : 'unset'
        }

        const postTitle = getValue('post-title');
        const taskReward = parseFloat((getValue('post-cost')*100)/ 100);
        const dataSet = JSON.parse(response)
        const postId = dataSet.length + 1;
        
        

        newTabbi.id = postId;
        newTabbi.description = postTitle;
        newTabbi.reward = taskReward;

        dataSet.push(newTabbi)
        localStorage.setItem('dataSet', JSON.stringify(dataSet))
    }

    function postData() {
        const jsonString = localStorage.getItem('dataSet')
        console.log(jsonString)
        const xhr = new XMLHttpRequest();

        //open the connection
        xhr.open('POST','data.json', true);

        //setRequestHeader

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(jsonString)
        

    }

}