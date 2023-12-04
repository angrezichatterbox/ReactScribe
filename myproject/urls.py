from django.urls import path
from myapp import views  
urlpatterns = [
    path('api/', views.NotesListCreateView.as_view(), name='notes-list-create'),
    path('api/<int:pk>/', views.NotesDetailAPIView.as_view(), name='notes-detail'),
    path('api/create/', views.NotesCreateAPIView.as_view(), name='notes-create'),
    path('api/<int:pk>/delete/', views.NoteDeleteView.as_view(), name='note-delete'),
]
