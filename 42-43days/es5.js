function Restaurant(property) {
    this.content = property.content;//座位数量
    this.money = property.money;//金钱
    this.staff = property.staff;
}
Restaurant.prototype.hire = function(worker){
    this.staff.push(worker.name)
}
Restaurant.prototype.fire = function(worker) {
    this.staff.map((item,index) => {
        if(item == worker.name){
            this.staff.splice(index,1)
        }
    })
}
function Staff(name,salary) {
    id = id + 1;
    this.id = id;
    this.name = name;
    this.salary = salary;
}
function Waiter(name,salary) {
    Staff.call(this,name,salary) 
}
Waiter.prototype.work = function(work) {
    if(typeof(work) == "array"){

    }else {
        //上菜
    }
}
function Cook(name,salary) {
    Staff.call(this,name,salary)
}
Cook.prototype.work = function() {

}
function Customer() {
}
Customer.prototype.order = function() {

}
Customer.prototype.eat = function() {
    
}
function Dishes(name,cost,price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}