const container = document.querySelector('.someProducts');
const product = document.querySelector('.product');


let dataSet = { 
    cap1: {itemName:'Block Space Top', price:"$40.00 USD", image:'./image/bt.jpg', value: 'Order', desc: '100% Cotton Knitted'},
    cap2: {itemName:'Puffer Jacket', price: "$200.00 USD", image: './image/p1.jpg', value: 'Order',desc: '100% Cotton Knitted'},
    cap3: {itemName: 'Pleated Mini Skirt', price: "$60.00 USD", image: './image/s1.jpg', value: 'Order',desc: '100% Cotton Knitted'}
}


let temp =  '';
let display = '';

for(let data in dataSet){
    if(dataSet[data].value == 'Out of Stock'){
        temp += `
        <div class='temp'>
        <img src = ${dataSet[data].image} class="img"  alt=${data} style = "Opacity:0.3"/>
        <h1>${dataSet[data].itemName}</h1>
        <h5>${dataSet[data].price}</h5>
        <input type='button' value = '${dataSet[data].value}' ${dataSet[data].disable} class='order'/>
        </div>
        
        `
    }
    else if(dataSet[data].rev){
        temp += `
        <div class='temp'>
        <img src = ${dataSet[data].image} class="img"  alt=${data}/>
        <h1>${dataSet[data].itemName}</h1>
        <h5>${dataSet[data].price}</h5>
        <input type='button' value = '${dataSet[data].value}' class='order' />
        </div>
        
        `
    }
    else{
    temp += `
    <div class='temp'>
    <img src = ${dataSet[data].image} class="img"  alt=${data}/>
    <h1>${dataSet[data].itemName}</h1>
    <h5>${dataSet[data].price}</h5>
    <input type='button' value = '${dataSet[data].value}' class='order' />
    </div>
    
    `
    console.log(data)
    }
}

product.innerHTML = temp;

