let theWaiter = (function(){
    let instance = null

    function Waiter(name, salary) {
        Employee.call(this,name,salary)
    }
    extend(Waiter,Employee)
    Waiter.prototype = {
        oneWork: function(course) {
            if(course instanceof Array){
                console.log("服务员"+this.name+"将订单交给厨师");
                theCook().getOrder(course)
            } else {
                console.log("服务员"+this.name+"正在将【"+course.name+"】上菜给客人")
                customerList.list[0].getCourse(course)
            }
        },
        callByCus: function(customer) {
            console.log("服务员"+this.name+"被客人呼叫，开始点菜")
            
            this.oneWork(customer.Order())

        },
        callByCook: function(course) {
            console.log("服务员"+this.name+"被厨师呼叫上菜")
            this.oneWork(course)
        }
    }
    return function(name, salary){
        if(!instance) {
            instance = new Waiter(name, salary)
        }
        return instance
    }
})()