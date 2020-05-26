//表格渲染
function renderTable(data,regionSelectedLength, productSelectedLength){  
    var table = document.createElement("table")
    var tablehead = document.createElement("tr")
    var tableheadContent;
    if(regionSelectedLength==1 && productSelectedLength!=1){
        tableheadContent = "<th>地区</th><th>商品</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>"
    }else {
        tableheadContent = "<th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>"
    }
    tablehead.innerHTML = tableheadContent
    table.appendChild(tablehead)
    data.map(item => {
        var tablebody = document.createElement("tr")
        var product = document.createElement("td")
        product.innerHTML = item.product
        var region = document.createElement("td")
        region.innerHTML = item.region
        if(regionSelectedLength==1 && productSelectedLength!=1){
            tablebody.appendChild(region)
            tablebody.appendChild(product)
        }else {
            tablebody.appendChild(product)
            tablebody.appendChild(region)
        }
        item.sale.map(acc => {
            var sale = document.createElement("td")
            sale.innerHTML = acc
            tablebody.appendChild(sale)
        })
        table.appendChild(tablebody)
    })
    tableWrapper.innerHTML = "<table>"+table.innerHTML+"</table>"

    
}

function tableLinkage(tr) {
    let data = []
    for(let i=2; i<tr.children.length; i++){
        data.push(Number(tr.children[i].innerHTML))
    }
    createSvg(svgWrapper, data)
    createCanvas(cvsWrapper, data)
}