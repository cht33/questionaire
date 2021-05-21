from django.views.decorators.http import require_http_methods
from django.http  import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import QueryModel, Questions

# 问题在数据集中的起始序号
QUSETION_START_POS = 0

# 问题总数
QUSETION_NUM = 10000

# 是否打乱问题顺序
QUESTION_SHUFFLE = True

# 数据集和结果保存路径
QUESTION_DATA = 'data/example.txt'
SAVE_PATH = 'data/results/'

all_questions = Questions(QUESTION_DATA, QUESTION_SHUFFLE)
model = QueryModel(QUSETION_START_POS, QUSETION_NUM, all_questions)

# Create your views here.
@require_http_methods(["POST"])
@csrf_exempt
def login(request):
    print(request.POST.get('userName'))
    userName = request.POST.get('userName')
    if model.has_user(userName):
        qid = model.get_user_ques_id(userName)
    else:
        model.add_new_user(userName)
        qid = 0
    questionNum = len(model)
    return JsonResponse({ 'qid': qid, 'questionNum': questionNum })

@require_http_methods(["POST"])
@csrf_exempt
def question(request):
    userName = request.POST.get('userName')
    curr_qid = model.get_user_ques_id(userName)
    qid = int(request.POST.get('qid'))
    grade = request.POST.get('grade')
    if grade != None:
        timeCost = request.POST.get('timeCost')
        model.set_ans(userName, qid-1, int(grade), timeCost)
        if qid <= curr_qid:
            return JsonResponse({ 'repost': True })

    t = model.get_question(qid)
    if t == None:
        model.save(userName, SAVE_PATH)
        return JsonResponse({ 'ended': True })
    else:
        t['qid'] = model.get_user_ques_id(userName)
        return JsonResponse(t)