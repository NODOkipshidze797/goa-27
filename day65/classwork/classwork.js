const obj = {
    row_0: [2, 4, 6, 8, 10], 
    row_1: [1, 3, 5, 7, 9]   
  };

  const evenNumbers = obj.row_0;
  const oddNumbers = obj.row_1;

  for (let i = 0; i < Math.min(evenNumbers.length, oddNumbers.length); i++) {
    console.log(`Even: ${evenNumbers[i]}, Odd: ${oddNumbers[i]}`);
    }
  