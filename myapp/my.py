import requests

url = 'http://127.0.0.1:8000/api/'
myobj = {
       
        "notes": "alpha",
        "duedate": "2023-11-23",
        "date1": "2023-11-23"
    },

x = requests.post(url, json = myobj)

print(x.text)