from django.urls import path
from .views import RealtorListView, RealtorView, TopSellersView

urlpatterns = [
    path('', RealtorListView.as_view()),
    path('topseller', TopSellersView.as_view()),
    path('<pk>', RealtorView.as_view()),
]