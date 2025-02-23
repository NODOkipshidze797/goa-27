def round_to_zeros(number):
    while len(set(str(number)[1:])) > 1 or str(number)[1] != '0':
        number += 1
    return number

input_number = int(input("შეიყვანეთ რიცხვი: "))
result = round_to_zeros(input_number)
print(f"შედეგი: {result}")
