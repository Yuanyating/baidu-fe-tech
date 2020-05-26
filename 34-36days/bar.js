function createSvg(svgWrapper,data) {
    clearSvg(svgWrapper)
    const width = 600
    const height = 200
    let itemWidth = 0.05 * width
    let spaceWidth = 0.07 * width
    let colorArr = ['60acfc', '32d3eb', '5bc49f', 'feb64d', 'ff7c7c',
     '9287e7','60acfc', '32d3eb', '5bc49f', 'feb64d', 'ff7c7c', '9287e7'];
    
    //获取柱中的最大值
    let max = Math.max(...data) * 0.95
    //数据像素的比例
    let scale = height / max

    var svgHTML = '<svg width="'+width+'" \
    height="'+height+'" \
    version="1.1" \
    xmlns="http://www.w3.org/2000/svg"></svg>'
    svgWrapper.insertAdjacentHTML('afterbegin',svgHTML)

    let xline = '<line x1="0" y1="'+height+'" \
    x2="'+width+'" y2="'+height+'" \
    stroke-width="5" fill="transparent" stroke="#000" />'
    let yline = '<line x1="0" y1="0" \
    x2="0" y2="' + height + '"\
    stroke-width="5" fill="transparent" stroke="#000"/>'
    let svg = document.querySelector('svg')
    svg.insertAdjacentHTML('afterbegin',xline)
    svg.insertAdjacentHTML('afterbegin',yline)
    let rectHTML = ''
    for(let i=0; i<data.length; i++) {
        let rectH = scale * data[i]
        rectHTML += '<rect x="'+(spaceWidth * (i+1)) + '\
        " y="' + (height-rectH) + '" \
        width="' + itemWidth + '" height="'+rectH+'" \
        fill="#'+colorArr[i]+'" />'
    }
    svg.insertAdjacentHTML('beforeend',rectHTML)
}
function clearSvg(svgWrapper) {
    let svg = svgWrapper.querySelector('svg')
    if(svg){
        svg.remove()
    }
}