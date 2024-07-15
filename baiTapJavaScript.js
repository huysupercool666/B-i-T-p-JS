function cook(ingredient1, ingredient2) {
  if (ingredient1 === "milk" && ingredient2 === "egg") {
    return "cake 1";
  } else if (ingredient1 === "egg") {
    return "omelette";
  } else if (ingredient1 === "beef") {
    function cookBeef() {
      let beefCookedCount = 0;
      return function () {
        beefCookedCount += 1;
        if (beefCookedCount === 1) {
          return "rare";
        }
        return function () {
          if (beefCookedCount === 2) {
            return "medium";
          }
          return function () {
            if (beefCookedCount === 3) {
              return "well done";
            }
            return function () {
              if (beefCookedCount === 4) {
                return "burnt";
              }
              return function () {
                if (beefCookedCount === 5) {
                  return "trash";
                }
              };
            };
          };
        };
      };
    }
    return cookBeef();
  } else {
    return "burnt";
  }
}

// console.log(cook());
// console.log(cook("milk", "egg"));
// console.log(cook("egg"));

const beefPlate = cook("beef");
console.log(beefPlate("beef"));
console.log(beefPlate("beef")());
console.log(beefPlate("beef")()());
console.log(beefPlate("beef")()()());
console.log(beefPlate("beef")()()()());
