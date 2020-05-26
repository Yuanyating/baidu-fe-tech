function createCheckbox(wrapper,option){
    var content = ""
    var checkAll = "<label><input type='checkbox' data-checkbox-type='all' />全选</label>"
    content += checkAll;
    option.map(item => {
        var checkbox = "<label><input type='checkbox' data-checkbox-type='single' value="+item.value+" />"+item.text+"</label>"
        content += checkbox
    })
    wrapper.innerHTML = content
    //checkbox点击事件
    wrapper.onclick = function(e) {
        var target = e.target;
        target.setAttribute("checked",true)
        if(target["type"] == "checkbox"){
            var checkboxType = target.getAttribute("data-checkbox-type")
            if( checkboxType == "all"){ //全选选项
                var inputs = wrapper.getElementsByTagName("input")
                if(target.checked == true){
                    for(var i=0; i<inputs.length; i++){
                        inputs[i].checked = true
                    }
                } else {
                    target.click()
                }     
            } 
            else {
                //点击最后一个未被选中的选项时，全选框√
                //有一个未被选中，全选框不√
                //不允许取消最后一个勾选项
                var inputs = wrapper.getElementsByTagName("input")
                var allCheck
                var flag = true, exflag = true
                for(var i=0; i<inputs.length; i++){
                    if((inputs[i].getAttribute("data-checkbox-type") == "single")){
                        if(inputs[i].checked != true){
                            flag = false
                        } else {
                            exflag = false
                        }
                    }else{
                        allCheck = inputs[i]
                    }
                }
                if(flag){
                    allCheck.checked = true
                }
                else if(allCheck.checked == true){
                        allCheck.click()
                }
                if(exflag){
                    target.checked = true
                }
            }
        }
        var data = getData()
        if(data.length != 0){
            renderTable(data, regionSelectedLength, productSelectedLength)
        } 
    }
}