const fs = require('fs')

const product = {
    title: 'Ford Fiesta Titanium',
    price: 950000,
    thumbnail: 'insert url here'
}

class Archivo {
    constructor (archivo) {
        this.archivo = `${archivo}.txt`;      
    }
    
    async read() {
        
        let emptyArray = []
        try {
            if (this.archivo) {
                let data = await fs.promises.readFile(`${this.archivo}`, 'utf-8', (data) => {
                return data
                })
                emptyArray = JSON.parse(data)
            } 
            console.log(emptyArray);
            return(emptyArray)
                 
        } catch (error) {
            return(emptyArray);
        }
    }

    async save(datos) {
        let array = await this.read(this.archivo)
        let getID = datos
        getID.id = array.length + 1
        array.push(getID)
            
        fs.promises.writeFile(`${this.archivo}`, `${JSON.stringify(array)}`)
        .then(console.log('Archivo guardado'))
        
    }

    delete() {
        fs.unlink(`${this.archivo}`, err => {
                if (err) {
                console.log('El archivo no existe.')
            } else {console.log('Archivo borrado')} 
        }) 
    }
           
}
        
let newProduct = new Archivo('productos')


newProduct.save(product)
//newProduct.read()
//newProduct.delete()