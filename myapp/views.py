from rest_framework import generics
from .serializers import NoteSerializer
from .models import Notes
from rest_framework.response import Response
from rest_framework import status

class NotesListCreateView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    queryset = Notes.objects.all()

class NotesDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer
    queryset = Notes.objects.all()
    lookup_field = 'pk'

class NotesCreateAPIView(generics.CreateAPIView):
    serializer_class = NoteSerializer
    queryset = Notes.objects.all()

class NoteDeleteView(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    queryset = Notes.objects.all()
    lookup_field = 'pk'

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"message": "Note deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
