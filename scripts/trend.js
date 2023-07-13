const trend = document.querySelector('.trend');

const dataSet = ['./image/trend11.jpg', './image/trend2.jpg','./image/trend3.jpg','./image/trend6.jpg','./image/trend7.jpg','./image/trend8.jpg','./image/trend9.jpg','./image/trend10.jpg','./image/trend12.jpg']

let temp = '';

for(let data = 0; data < dataSet.length; data++){
    temp += `
    <div><img src = ${dataSet[data]} class="img"  alt=${dataSet[data]}/></div>
    `
}

trend.innerHTML = temp;