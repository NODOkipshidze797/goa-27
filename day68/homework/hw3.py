def password_check():
    correct_password = "nodo2011"  
    while True:
        user_input = input("შეიყვანეთ პაროლი: ")
        if user_input == correct_password:  
            print("პაროლი სწორია! თქვენ წარმატებით შეხვდით სისტემაში.")
            break
        else:  
            print("პაროლი არასწორია, სცადეთ კიდევ ერთხელ.")

password_check()
