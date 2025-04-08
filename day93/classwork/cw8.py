from functools import reduce
numbers = [4, 7, 10, 3, 6]
sum_all = reduce(lambda x, y: x + y, numbers)
print(sum_all)  # seikribeba da miigebs 30
