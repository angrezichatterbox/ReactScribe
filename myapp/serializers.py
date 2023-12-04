# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from .models import Notes
 
# create a serializer class
class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notes
        fields = '__all__'
        
        