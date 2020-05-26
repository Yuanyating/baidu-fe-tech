let customerList = (function(){
    let customers = [];
    return {
        list: customers,
        joinIn: function(customer) {
            for(let i=0; i<customers.length; i++) {
                if(customers[i] === customer){
                    console.log("客人"+customer.name+"已经在队列中")
                    return;
                }
            }
            customers.push(customer)
        },
        stepIn: function() {
            if(customers.length > 0){
                customers[0].seat()
            }else {
                console.log("没有客人了")
            }
        },
        finish: function() {
            customers.shift()
            if(customers.length > 0){
                customers[0].seat()

            }else {
                console.log("没有客人了")
            }
        }
    }
})()