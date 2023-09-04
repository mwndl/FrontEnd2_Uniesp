import os
# Entrada dos dados da altura e gênero de 15 pessoas
alturas = []
generos = []

for i in range(15):
  os.system('cls')
  altura = float(input("Insira a altura da pessoa {}: ".format(i + 1)))
  genero = input("Insira o gênero da pessoa {} (H ou M): ".format(i + 1))
  alturas.append(altura)
  generos.append(genero)

# A maior e a menor altura do grupo
maior_altura = max(alturas)
menor_altura = min(alturas)

# Média de altura dos homens
soma_altura_homens = 0
numero_homens = 0
for i in range(15):
  if generos[i] == "H":
    soma_altura_homens += alturas[i]
    numero_homens += 1
media_altura_homens = soma_altura_homens / numero_homens

# Descobrir qual o num. de mulheres (retira o total de homens das 15 buscas)
numero_mulheres = 15 - numero_homens

# Print dos resultados
os.system('cls')
print("A maior altura do grupo é {}.".format(maior_altura))
print("A menor altura do grupo é {}.".format(menor_altura))
print("A média de altura dos homens é {}.".format(media_altura_homens))
print("O número de mulheres é {}.".format(numero_mulheres))
