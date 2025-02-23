def create_matrix(rows, cols):
    matrix = []
    count = 1
    for i in range(rows):
        row = []
        for j in range(cols):
            row.append(count)
            count += 1
        matrix.append(row)
    return matrix

result = create_matrix(2, 2)
print(result)  
