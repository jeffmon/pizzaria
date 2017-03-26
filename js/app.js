var pizzaName = ['Four Loop', 'Conditional Love', 'The DOM','Conjunciont Function'];

var price = [44.44, 22.14, 16.99, 17.02];

var description = ['Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!', 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!', 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!', 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'];


var forLoop = {
  price: 44.44,
  description: 'Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!'
};

var conditionalLove = {
  price: 22.14,
  description: 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!'
};

var theDom = {
  price: 16.99,
  description: 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!'
};

var conjunctionFunction = {
  price: 17.02,
  description: 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'
};

var diffSpecials = ["Conditional Love", "Blood, sweat, and tears", "Nothing, actually", "EVERYTHING IS FREE!"]



var targetSpecial = document.getElementsByClassName("sectionTitle");
var createSpecial = document.createElement("p");
createSpecial.id = "randomSpecial";
createSpecial.innerHTML = diffSpecials[Math.floor(Math.random() * diffSpecials.length)];
targetSpecial[0].appendChild(createSpecial);




