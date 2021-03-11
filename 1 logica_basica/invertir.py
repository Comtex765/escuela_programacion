def swap_text(s):
    result = ''
    for letter in s:
        if letter == letter.upper():
            result += letter.lower()
        else:
            result += letter.upper()
    
    return result

array = 'HolA ComO ESTAs'

print(swap_text(array))