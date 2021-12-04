file = open("arquivo.txt", mode="w")
# ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele
# já exista, sobrescrevendo o antigo.


# file = open("arquivo.txt", mode="w")
file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")


# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)


# Para escrever múltiplas linhas podemos utilizar a função writelines .
# A função espera que cada linha tenha seu próprio caractere de separação \n
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)


file.close()


# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo


# escrita
file = open("arquivo2.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo2.txt", mode="r")
for line in file:
    print(line)
    # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo
