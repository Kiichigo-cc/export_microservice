f = open("input.txt", "r")
inputs = f.readlines()

f.close()

f = open("output.txt", "w")
f.write("======================\n\n")
f.write("       " + inputs[0] + "\n")
inputs.pop(0)

question_count = 0
for i in inputs:
    if 'Q.' in :
        question_count += 1
        inputs.remove(i)

print(question_count)
print(inputs)

for i in range(question_count):
    f.write("====* Question " + str(i + 1) + " *====\n")
    f.write("")