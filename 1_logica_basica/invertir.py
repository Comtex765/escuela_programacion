def swap_text(s):
    result = ''
    for letter in s:
        if letter == letter.upper():
            result += letter.lower()
        else:
            result += letter.upper()
    
    return result

array = 'CamBIAnDo LaS lETRas'

print(swap_text(array))
