function createArrayFromObject(obj) {
    const quantity = obj.quantity; 
    const element = obj.element;   
 
    return Array(quantity).fill(element);
  }
  

  const inputObject = {
    quantity: 5,   
    element: "A"  
  };
  
  const resultArray = createArrayFromObject(inputObject);
  console.log(resultArray);
    