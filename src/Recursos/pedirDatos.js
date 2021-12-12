import { stock } from "../Components/Items/Stock/stock"


export default function pedirDatos ()   {



    return new Promise((resolve,reject) => {

    setTimeout (() =>{

        resolve(stock)
    
    },1000)

    })  

}


