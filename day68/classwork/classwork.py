while True:
    try:
       
        num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
        
        
        num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
        
       
        product = num1 * num2
        print(f"ნამრავლი: {product}")
        
       
        user_input = input("თუ გსურთ პროგრამიდან გამოსვლა, აკრიფეთ 'exit'. თუ არა, გააგრძელეთ: ").strip().lower()
        if user_input == 'exit':
            print("პროგრამა დასრულდა. ნახვამდის!")
            break
    except ValueError:
        print("შეცდომა: გთხოვთ, შეიყვანეთ ვალიდური რიცხვი.")
