import datetime

from django.db import models

class Notes(models.Model):     
    notes = models.TextField()
    
    duedate = models.DateField(auto_now=False, auto_now_add=False)  
    date1 = models.DateField(auto_now=False, auto_now_add=False)