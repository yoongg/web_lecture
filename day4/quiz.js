const price=['2000','1000','5000','4000']

function getWonPrice(pricelist){
    const result = pricelist.filter(cash => Number(cash)>1000)
    const x = result.map(a => a+"원")
    return x;
}


console.log(getWonPrice(price))