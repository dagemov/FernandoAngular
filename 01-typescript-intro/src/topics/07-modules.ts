import {Product,TaxCalculationOptions,taxCalculation} from'./06-function-destructurie'

const shoppingCart:Product[] = [
    {
        description:'Nokia',
        price:100
    },
    {
        description:'iPad',
        price:200
    },
    {
        description:'Accer',
        price:800
    },
]

const taxCal:TaxCalculationOptions[] = [
    {
        tax:0.15,
        products:shoppingCart
    }
]
const [total,tax] = taxCalculation({
        tax:0.15,
        products:shoppingCart
})
    
        
    



console.log(taxCal)
console.log(total,tax)