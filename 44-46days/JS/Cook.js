let theCook = (function() {
    let instance = null;

    function Cook(name,salary){
        Employee.call(this, name, salary)
        this.courseList = []
    }
    extend(Cook,Employee)
    Cook.prototype = {
        oneWork: function() {
            let course = this.courseList.shift()
            console.log("厨师"+this.name+"做好了【"+course.name+"】")
            theWaiter().callByCook(course)
        },
        getOrder: function(courseArr) {
            console.log("厨师"+this.name+"接到了订单");
            this.courseList = this.courseList.concat(courseArr)
            //开始做菜
            while(this.courseList.length > 0){
                this.oneWork()
            }
        }
    }
    return function(name, salary){
        if(!instance){
            instance = new Cook(name, salary)
        }
        return instance
    }
}())