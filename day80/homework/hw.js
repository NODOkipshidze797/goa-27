// 1. unshift - ამატებს ელემენტ(ებ)ს მასივის დასაწყისში
let arr1 = [2, 3, 4];
arr1.unshift(1);
console.log(arr1); // [1, 2, 3, 4]

// 2. shift - შლის პირველ ელემენტს და აბრუნებს მას
let arr2 = [1, 2, 3, 4];
let firstElement = arr2.shift();
console.log(arr2); // [2, 3, 4]
console.log(firstElement); // 1

// 3. splice - ამატებს, შლის ან ცვლის ელემენტებს მასივში
let arr3 = [1, 2, 3, 4];
arr3.splice(2, 1, "a", "b"); // 2-ე ინდექსიდან შლის 1 ელემენტს და ამატებს "a", "b"
console.log(arr3); // [1, 2, "a", "b", 4]

// 4. slice - იღებს მასივის ნაწილს (არ ცვლის ორიგინალს)
let arr4 = [1, 2, 3, 4, 5];
let slicedArr = arr4.slice(1, 4); // იღებს ელემენტებს 1-დან 4-მდე (4 არ შედის)
console.log(slicedArr); // [2, 3, 4]

// 5. concat - აერთიანებს მასივებს
let arr5a = [1, 2, 3];
let arr5b = [4, 5, 6];
let mergedArr = arr5a.concat(arr5b);
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

// 6. sort - ალაგებს მასივს (სტრიქონულად ნაგულისხმევად)
let arr6 = [3, 1, 4, 2];
arr6.sort();
console.log(arr6); // [1, 2, 3, 4]

// 7. reverse - აბრალებს მასივს
let arr7 = [1, 2, 3, 4];
arr7.reverse();
console.log(arr7); // [4, 3, 2, 1]

// 8. join - აერთიანებს მასივის ელემენტებს სტრიქონად
let arr8 = ["Hello", "World"];
let joinedString = arr8.join(" ");
console.log(joinedString); // "Hello World"
