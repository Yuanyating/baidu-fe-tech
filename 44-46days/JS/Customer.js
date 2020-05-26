function Customer() {
    this.order = []
}
Customer.prototype = {
    seat: function() {
        console.log("客人入座，呼叫服务员")
        theWaiter().callByCus(this)
    },
    Order: function() {
        let course = menuList.Select();
        this.order.push(course)
        console.log("客人点了【"+course.name+"】")
        return [course]
    },
    Eat: function() {
        console.log("客人吃完了，离开")
        customerList.finish()
    },
    getCourse: function(course) {
        for(let i=0; i<this.order.length; i++){
            if(course === this.order[i]) {
                console.log("客人的【"+course.name+"】以上菜")
                this.order.splice(i,1)
                if(this.order.length == 0){
                    this.Eat();
                    return;
                }
            }
        }
    }
}