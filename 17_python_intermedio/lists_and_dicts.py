def run():
    my_list = [1, "Hello", True, 4.5]
    my_dict = { "firstname": "Fernando", "lastname": "Novillo" }

    super_list = [
        { "firstname": "Fernando", "lastname": "Novillo" },
        { "firstname": "Arturo", "lastname": "Rodriguez" },
        { "firstname": "Diego", "lastname": "Lopez" },
        { "firstname": "Juan", "lastname": "Ruiz" },
        { "firstname": "Sebas", "lastname": "Ochoa" }
    ]

    super_dict={
        "natural_nums": [1,2,3,4,5,6,7,8,9],
        "integer_nums": [-3,-2,-1,0,1,2,3],
        "floating_nums":[1.1,1.2,1.3,1.4]
    }

    for key, value in super_dict.items():
        print(key, " - ", value)
    

if __name__ == '__main__':
    run()