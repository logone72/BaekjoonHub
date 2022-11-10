function solution(ingredients) {
  let wrappingStack = [];
  let wrappedBurgerCount = 0;

  for (const ingredient of ingredients) {
    addToWrappingStack(ingredient);
  }

  function addToWrappingStack(_ingredient) {
    if (_ingredient)
      wrappingStack.push(_ingredient);

    if (wrappingStack.length < 4)
      return;

    if (wrappingStack.length >= 4) {
      if (wrappingStack.at(-1) === 1 && 
          wrappingStack.at(-2) === 3 && 
          wrappingStack.at(-3) === 2 && 
          wrappingStack.at(-4) === 1) {
          
          wrappingStack.pop();
          wrappingStack.pop();
          wrappingStack.pop();
          wrappingStack.pop();
          wrappedBurgerCount += 1;

        addToWrappingStack();
      }
    }
  }

  return wrappedBurgerCount;
}