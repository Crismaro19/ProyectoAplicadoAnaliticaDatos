from db import consulta

res = consulta('Select count(*) from dataSetMIAD dsm; ')
print(res)