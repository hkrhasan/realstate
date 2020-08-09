from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        name = data['name']
        email = data['email']
        subject = data['subject']
        message = data['message']
        mail_info = f'Name: {name}\nEmail: {email}\n\nMessage: {message}'
        try:
            send_mail( subject, mail_info, 'iammujhenhipata@gmail.com', ['iammujhenhipata@gmail.com'], fail_silently=False)
            contact = Contact(name=name, email=email, subject=subject, message=message)
            contact.save()

            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'error': 'Message failed to send'})
            
