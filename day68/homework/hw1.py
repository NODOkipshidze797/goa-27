def text_input_history():
    history = set()  

    while True:
        user_input = input("შეიყვანეთ ტექსტი (ან დაწერეთ 'გასვლა' გამოსვლისთვის): ")
        
        if user_input.lower() == "გასვლა":  
            print("პროგრამა დასრულებულია.")
            break

        if user_input in history: 
            print("ეს ტექსტი უკვე შეყვანილია, სცადეთ სხვა ტექსტი.")
        else:
            history.add(user_input) 
            print("ტექსტი დამახსოვრებულია.")
