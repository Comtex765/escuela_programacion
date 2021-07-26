def readText():
    text = input("Ingresa la frase que quieres transformar a morse: ")
    return text


def textToMorse(letter):

    code = {
        'a': "·-",
        'b': "-···",
        'c': "-·-·",
        'd': "-··",
        'e': "·",
        'f': "··-·",
        'g': "--·",
        'h': "····",
        'i': "··",
        'j': "·---",
        'k': "-·-",
        'l': "·-··",
        'm': "--",
        'n': "-·",
        'ñ': "--·--",
        'o': "---",
        'p': "·--·",
        'q': "--·-",
        'r': "·-·",
        's': "···",
        't': "-",
        'u': "··-",
        'v': "···-",
        'w': "·--",
        'x': "-··-",
        'y': "-·--",
        'z': "--··",
        ' ': "//",
        '1': "·----",
        '2': "··---",
        '3': "···--",
        '4': "····-",
        '5': "·····",
        '6': "-····",
        '7': "--···",
        '8': "---··",
        '9': "----·",
        '0': "-----"}
    print(code[letter], end='')
    print(' ', end='')


def run():
    sentence = readText()

    for i in range(0, len(sentence)):
        textToMorse(sentence[i].lower())
        if i == len(sentence) - 1:
            print(" ")

if __name__ == '__main__':
    run()
