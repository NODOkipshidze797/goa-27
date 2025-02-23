def print_matrix_info(matrix):
    n = len(matrix)

    print("სვეტები:")
    for col in range(n):
        column = [matrix[row][col] for row in range(n)]
        print(column)

    print("რიგები:")
    for row in matrix:
        print(row)

    print("დიაგონალები:")
    main_diagonal = [matrix[i][i] for i in range(n)]
    anti_diagonal = [matrix[i][n - i - 1] for i in range(n)]
    print("მთავარი დიაგონალი:", main_diagonal)
    print("მეორადი დიაგონალი:", anti_diagonal)

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print_matrix_info(matrix)
