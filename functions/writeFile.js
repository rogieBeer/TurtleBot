module.exports = {
    writeFile: function () {
        const fs = require('fs') 
  

        let data = "Learning how to write in a file."
        

        fs.writeFile('output.txt', data, (err) => { 
                

        if (err) throw err; 
}) 
        
    }
}