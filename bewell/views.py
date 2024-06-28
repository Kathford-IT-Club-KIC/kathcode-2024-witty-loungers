from django.shortcuts import render


def home(request):
    context = {
    }
    return render(request,'home.html',context)

def survey(request):
    if request.method == 'POST':
        age = request.POST.get('age')
        gender = request.POST.get('gender')
        height = request.POST.get('height')
        weight = request.POST.get('weight')
        print('age',age)
        print('gender',gender)
        print('height',height)
        print('weight',weight)
    context = {}
    return render(request,'survey.html',context)
