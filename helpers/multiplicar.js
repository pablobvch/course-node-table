const colors = require("colors")

const fs = require("fs")

const crearArchivo = async (base = 5, listar=false, hasta =10) => {

    try{
        
        let salida, consola = ""
        let nombreArchivo = `tabla-${base}.txt`

        for(let i=1; i<=hasta; i++){
            consola += `${base} ${"x".magenta} ${i} ${"=".magenta} ${base*i}\n`
            salida += `${base} x ${i} = ${base*i}\n`
        }
        
        if (listar){
            console.log(colors.green.bold("==========================="));
            console.log("     TABLA DEL".green,colors.blue.bold(base));
            console.log(colors.green.bold("===========================","\n"));
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/${nombreArchivo}`,salida);
        
        return nombreArchivo
    }
    catch (err){
        throw err
    }
    
}

module.exports = {crearArchivo}