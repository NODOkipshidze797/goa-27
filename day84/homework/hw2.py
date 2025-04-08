def starting_mark(height):
    a = (10.67 - 9.45)/(1.83 - 1.52)
    b = 9.45 - 1.52 * a
    return round(height * a + b, 2)