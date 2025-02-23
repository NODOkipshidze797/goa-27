const people = [
    {
      name: "გიორგი",
      age: 12,
      height: 154,
      gender: "ბიჭი"
    },
    {
      name: "ნოდო",
      age: 13,
      height: 155,
      gender: "ბიჭი"
    },
    {
      name: "ანდრია",
      age: 13,
      height: 165,
      gender: "ბიჭი"
    }
  ];
  
  people.forEach(person => {
    console.log(`1) ადამიანი:
      სახელი: ${person.name},
      ასაკი: ${person.age},
      სიმაღლე: ${person.height} 
      სქესი: ${person.gender}`);
  });
  