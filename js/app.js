var pizzaTitles = ['Four Loop', 'Conditional Love', 'The DOM','Conjunction Function'];

var pizzaPrice = [44.44, 22.14, 16.99, 17.02];

var pizzaDesc = ['Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!', 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!', 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!', 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'];


var forLoop = {
  name: "Four Loop",
  price: 44.44,
  description: 'Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!'
};

var conditionalLove = {
  name: "Condition Love",
  price: 22.14,
  description: 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!'
};

var theDom = {
  name: "The DOM",
  price: 16.99,
  description: 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!'
};

var conjunctionFunction = {
  name: "Conjunction Function",
  price: 17.02,
  description: 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'
};

var diffSpecials = ["Conditional Love", "Blood, sweat, and tears", "Nothing, actually","Buy one pizza, get the other at full price!", "EVERYTHING IS FREE!"]



var targetSpecial = document.getElementsByClassName("sectionTitle");
var createSpecial = document.createElement("p");
createSpecial.id = "randomSpecial";
createSpecial.innerHTML = diffSpecials[Math.floor(Math.random() * diffSpecials.length)];
targetSpecial[0].appendChild(createSpecial);


var targetPizza = document.getElementsByClassName("pizza")
console.log(targetPizza);
function createMenu(name, desc, price){
  for(var i = 0; i<name.length; i++){
    var createPizzaName = document.createElement("div");
    createPizzaName.className = "pizzaName";
    createPizzaName.innerHTML = name[i];
    targetPizza[0].appendChild(createPizzaName);
    var createPizzaDesc = document.createElement("p");
    createPizzaDesc.className = "description";
    createPizzaDesc.innerHTML = desc[i];
    targetPizza[0].appendChild(createPizzaDesc);
    var createPizzaPrice = document.createElement("p");
    createPizzaPrice.className = "price";
    createPizzaPrice.innerHTML = price[i];
    targetPizza[0].appendChild(createPizzaPrice);

/*    createPizzaName.className = "pizzaName";
    createPizzaName.innerHTML = name[i];
    targetPizza[0].appendChild(createPizzaName);
    var createPizzaDesc = document.createElement("p");
    createPizzaDesc.className = "description";
    createPizzaDesc.innerHTML = desc[i];
    targetPizza[i].appendChild(createPizzaDesc);
    var createPizzaPrice = document.createElement("p");
    createPizzaPrice.className = "price";
    createPizzaPrice.innerHTML = price[i];
    targetPizza[i].appendChild(createPizzaPrice);*/
  }
}

createMenu(pizzaTitles, pizzaDesc, pizzaPrice);

/*var createPizzaName = document.createElement("p");
var createPizzaDesc = document.createElement("p");
var createPizzaPrice = document.createElement("p");

function createMenu(name){
  createPizzaName.className = "pizzaName";
  createPizzaName.innerHTML = name.name;
  targetPizza[0].appendChild(createPizzaName);
  createPizzaDesc.className = "description";
  createPizzaDesc.innerHTML = name.description;
  targetPizza[0].appendChild(createPizzaDesc);
  createPizzaPrice.className = "price";
  createPizzaPrice.innerHTML = name.price;
  targetPizza[0].appendChild(createPizzaPrice);
}

createMenu(forLoop);

*/