import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from google.cloud.firestore_v1.base_query import FieldFilter
import pandas as pd 
import matplotlib.pyplot as plt
import numpy as np
import scipy as stats

cred = credentials.Certificate("./admin-sdk.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

row_list = []
row_of_gpa = []

cities_ref = db.collection("opinions")
docs = (
    db.collection("opinions")
    # .where(filter=FieldFilter("gpa", "==", 3.72))
    .stream()
)


for doc in docs:
    dict = doc.to_dict()
    print(f"{doc.id} => {dict['gpa']} => {dict['numAnswered']}")

    new_dict = {'UUID': doc.id, 'gpa' : dict['gpa'], 'responses': dict['numAnswered']}
    row_list.append(new_dict)
    # print(f"{doc.id} => {doc.to_dict()}")

df = pd.DataFrame(row_list)

slope, intercept, r_value, p_value, std_err = stats.linregress(x, y)
line = slope * dict['gpa'] + intercept

df.columns = ['UUID', 'gpa', 'responses']
df.to_csv('/Users/kelvinj/Downloads/irvington-high-school-opinions-results.csv')

plt.scatter(x=df['gpa'], y=df['responses'])
plt.show()





