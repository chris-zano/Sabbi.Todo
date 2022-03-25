if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
}
else {
    ready()
}

function ready() {
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
