class Restaurant {
    constructor(property){
        this.content = property.content
        this.money = property.money
        this.staff = property.staff
    }   
    hire = (worker) => {
        this.staff.push(worker.name)
    }
    fire = (worker) => {
        this.staff.map((item,index) => {
            if(item == worker.name){
                this.staff.splice(index,1)
            }
        })
    }
}


class Staff {
    constructor(name,salary){
        id = id + 1
        this.id = id
        this.name = name
        this.salary = salary
    }
}

class Waiter extends Staff {
    constructor(props){
        super(props)
    }
    work = (work) => {
        if(typeof(work) == "Array"){

        }else {

        }
    }
}
class Cook extends Staff {
    constructor(props){
        super(props)
    }
    work = (work) => {

    }
}
class Customer {
    order = () => {

    }
    eat = () => {

    }
}
class Dishes {
    constructor(name,cost,price){
        this.name = name
        this.cost = cost
        this.price = price
    }
}