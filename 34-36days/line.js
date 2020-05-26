function createCanvas(cvsWrapper, data) {
    clearLine(cvsWrapper)
    const width = 600
    const height = 200
    const stroke = 3
    const radius = 5
    
    const lineColor = '#60acfc'
    const circleColor = '#fff'
    let space = width * 0.08
    let max = Math.max(...data)
    let scale = height * 0.7 / max

    let canvas = '<canvas width="'+width+'" \
    height="'+height+'"></canvas>'
    cvsWrapper.innerHTML = canvas
    let ctx = document.querySelector('canvas').getContext('2d')
    ctx.lineWidth = stroke
    ctx.moveTo(1,0)
    ctx.lineTo(1,height)
    ctx.lineTo(width,height)
    ctx.stroke()

    ctx.strokeStyle = lineColor
    ctx.fillStyle = circleColor
    //用于存储上一个连接点
    let preX = ''
    let preY = ''
    let circleArr = []
    for(let i=0; i<data.length; i++){
        let lineHeight = data[i]*scale
        let positionY = height - lineHeight
        let newCircle = new Path2D()
        newCircle.arc(space * i, positionY,radius,0,Math.PI *2,true)
        circleArr.push(newCircle)
        if(i != 0){
            ctx.beginPath()
            ctx.moveTo(preX,preY)
            ctx.lineTo(space*i,positionY)
            ctx.stroke()
        }
        preX = space*i
        preY = positionY
    }
    circleArr.forEach(function(ele){
        ctx.fill(ele)
        ctx.stroke(ele)
    })
}
function clearLine(cvsWrapper) {
    let canvas = cvsWrapper.querySelector('canvas')
    if(canvas){
        canvas.remove()
    }
}