def get_even_numbers(arr):
    even_numbers = []
    for sublist in arr:
        for number in sublist:
            if number % 2 == 0:
                even_numbers.append(number)
    
    return even_numbers
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
result = get_even_numbers(arr)
print(result) 
