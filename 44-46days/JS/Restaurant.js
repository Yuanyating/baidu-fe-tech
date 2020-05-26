function Restaurant(param) {
    this.name = param.name
    this.cash = param.cash
    this.seats = param.seats
    this.staff = param.staff
}

Restaurant.prototype = {
    hire: function(employee) {
        for(let i=0; i<this.staff.length; i++){
            if(this.staff[i] === employee){
                console.log("职员"+employee.name+"已经在职")
                return
            }
        }
        let len = this.staff.push(employee)
        employee.id = 1000 + len
    },

    fire: function(employee) {
        for(let i=0; i<this.staff.length; i++){
            if(this.staff[i] === employee){
                this.staff.splice(i,1)
                return;
            }
        }
        console.log("职员"+employee.name+"不在职员列表中")
    }
}