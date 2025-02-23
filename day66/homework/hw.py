def get_unique_elements(arr):
    return [x for x in arr if arr.count(x) == 1]

input_array = [1, 2, 2, 3, 4, 4, 5]
unique_elements = get_unique_elements(input_array)
print(unique_elements) 
