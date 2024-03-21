def virusIndices(p, v):

    indices = []
    for i in range(len(p) - len(v)+1):
        substr_p = p[i:i+len(v)]
        mismatch_count = sum(1 for a, b in zip(substr_p, v) if a != b)
        if mismatch_count <= 1:
            indices.append(i)

   
    if indices:
        print(*indices)
    else:
        print("No Match!")

t = int(input().strip())
for _ in range(t):
    patient, virus = input().strip().split()
    virusIndices(patient,virus)
