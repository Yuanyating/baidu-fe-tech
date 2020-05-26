function Dishes(name,price,cost){
    this.name = name
    this.price = price
    this.cost = cost
}
let menuList = (function() {
    var menu = []
    var dish1 = new Dishes("蒜香小龙虾",25,80)
    var dish2 = new Dishes("酸辣土豆丝",8,25)
    var dish3 = new Dishes("虎皮尖椒",12,28)
    var dish4 = new Dishes("麻将拉皮",5,20)
    var dish5 = new Dishes("素烩汤",12,18)

    menu.push(dish1)
    menu.push(dish2)
    menu.push(dish3)
    menu.push(dish4)
    menu.push(dish5)

    return {
        Select: function() {
            return menu[Math.floor(Math.random() * menu.length)]
        }
    }
})()
