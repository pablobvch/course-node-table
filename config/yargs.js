const argv = require('yargs')
            .option("b",{
                alias:"base",
                demandOption:true,
                type:"number",
                describe: "Es la base de la tabla de multiplicar"
            })
            .option("l",{
                alias:"listar",
                demandOption:true,
                type:"boolean",
                default:false,
                describe: "Muestra la tabla en consola"
            })
            .option("h",{
                alias:"hasta",
                default:10,
                type:"number",
                describe: "Indica la cantidad de filas a mostrar en la tabla"
            })
            .check((argv,options)=>{
                if ( isNaN(argv.b)){
                    throw"La base tiene que ser un numero"
                }
                if ( isNaN(argv.h)){
                    throw"El valor hasta tiene que ser un numero"
                }
                return true
            })
            .argv

module.exports = argv