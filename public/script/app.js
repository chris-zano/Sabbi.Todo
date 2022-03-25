
export const writeFileJS = () => {
    const fs = require('fs')

    fs.readFile('./script/data.json', 'utf-8', (err,jsonString) => {
        if(err){
            console.log(err);
        }
        else{
            try{
                const data = JSON.parse(jsonString)
                data[1].reward = 'v$ 65.37'
                const newData = JSON.stringify(data,null,2)
                fs.writeFile('./script/data.json', newData, err => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log('File succefully written');
                    }
                })
                localStorage.setItem('dataJson',newData)
            }
            catch(err) {
                console.log('Error parsing JSON', err);
            }
        }

    })

}
