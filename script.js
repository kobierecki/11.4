function Phone(brand, price, color) {
    this.brand= brand;
    this.price= price;
    this.color = color;
}

Phone.prototype.GetWaranty = function(){
        return 0.1 * this.price;
}

Phone.prototype.printinfo = function() {  
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " extended waranty cost: " + this.GetWaranty());
}

var iPhone6s = new Phone("Apple", 2250, "silver");
var samsungGalagyS6 = new Phone("Samsung", 2150, "black");
var onePlusOne = new Phone("OnePlus", 1250, "yellow");

iPhone6s.printinfo();