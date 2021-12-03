import sys

print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultado são", 6, 23, 42)  # saída: Os resultados são 6 23 42
print("Maria", "João", "Miguel", "Ana")  # saída: Maria João Miguel Ana
print(
    "Maria", "João", "Miguel", "Ana", sep=", "
)  # saída: Maria, João, Miguel, Ana


# Saída em duas linhs
print("Em duas ")
print("linhas.")


# Saídas na mesma linha
print("Na mesma", end="")
print("linha.")

err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)
