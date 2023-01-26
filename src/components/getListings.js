import Axios from "axios";

async function getListings(collection_id){
   let tokenAddresses = []
    console.log(`Fetching Token Address of All Listed ${collection_id}`)
   for(let i = 0; i < 1500; i += 20){
    let {data} = await Axios.get(`https://api-mainnet.magiceden.dev/v2/collections/${collection_id}/listings?offset=${i}&limit=20&sort=price`)
    if(data === '[ ]'){
        break
    }
    for(let k = 0; k < data.length; k++){
        tokenAddresses.push(data[k].tokenAddress)
    }
   }
   let retStr = "[\n"
   for(let g = 0; g < tokenAddresses.length; g++){
    if(g === tokenAddresses.length){
        retStr +=`"${tokenAddresses.length}"\n`
    }
    else {
        retStr += `"${tokenAddresses[g]}",\n`
    }
   }
   retStr += "]"
   console.log(retStr)
}


export {getListings}