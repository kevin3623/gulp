$(function(){
  $('.close').on('click',closeEval)
  toggleName()
  evalStar()
  evalDescribe()
  $('#submit').on('click',submit)
})
function closeEval(){
  var params = { // 关闭评价，默认提交5星好评
    "caseId": getQueryVariable('caseId'),
    "content": "",
    "starLevel": "5",
    "editableTag": "",
    "anonymous": ""
  }
  addEvaluate(params, function(res){
    if(res.errorCode === '0'){
    } else{
      // $.myToast(res.value);
    }
    // history.go(-1)
    location.href = decodeURIComponent(getQueryVariable('currentUrl'))
  },function(){return false})
}
function toggleName(){
  var anonymityImge = ['./images/circle_noCheck.png', './images/cirlce_check.png']
  $('.right').toggle(function(){
    $(this).attr('data-checked', '0')
    $('#submit').text('匿名提交')
    $('.right img').attr('src', anonymityImge[1])
  },function(){
    $(this).attr('data-checked', '1')
    $('#submit').text('提交')
    $('.right img').attr('src', anonymityImge[0])
  })
}
function evalStar(){
  var starImg = ['./images/star_noChecked.png', './images/start_checked.png']
  var starMsg = ['非常不满意','不满意','满意','比较满意','非常满意']
  var editableTag = {
    dissatisfaction:['信息不准确','页面打开慢','办理效率低','流程较复杂'],
    satisfaction:['信息较准确','页面较流畅','办理较高效','流程较简洁'],
    quiteSatisfied:['信息准确','页面流畅','办理高效','安全可靠'],
  }
  $('.starEval img').on('click',function(event){
    var imgNum = Number($(this).attr('data-num')) // 点击对象对应的data-num属性
    console.log(imgNum);
    
    $('.textEval').text(starMsg[imgNum])
    $('.textEval').addClass('startChecked')
    $('.starEval').attr('data-star',imgNum + 1) // 用户评价的星星数量
    $('.starEval img').attr('src',starImg[0])
    for(var i = 0; i <= imgNum; i++){
      $($('.starEval img')[i]).attr('src', starImg[1])
    }
    if(imgNum < 2){
      // $('.evalDescribe span')
      editableTag.dissatisfaction.forEach(function(item,index){
        $($('.evalDescribe span')[index]).text(item)
      })
      $('#textarea').attr('placeholder', '请输入您的意见或建议（必填）')
      $('#evalText').text('至少30个字')
    }else if(imgNum === 2){
      // $('.evalDescribe span')
      editableTag.satisfaction.forEach(function(item,index){
        $($('.evalDescribe span')[index]).text(item)
      })
      $('#textarea').attr('placeholder', '请输入您的意见或建议')
      $('#evalText').text('')
    }else{
      editableTag.quiteSatisfied.forEach(function(item,index){
        $($('.evalDescribe span')[index]).text(item)
      })
      $('#textarea').attr('placeholder', '请输入您的意见或建议')
      $('#evalText').text('')
    }
  })
}
function evalDescribe(){
  for(var i=0;i<4;i++){
    $($('.evalDescribe span')[i]).toggle(function(){
      $(this).addClass('checked')
      // $('.evalDescribe').attr('data-tag', $(this).text())
    },function(){
      $(this).removeClass('checked')
      // $('.evalDescribe').attr('data-tag', $(this).text())
    })
  }
}
function submit(){
  if(!checkedEvalText()){ // 校验 输入框的文字
    return false
  }
  var anonymity = $('.right').attr('data-checked') // 是否匿名
  var star = $('.starEval').attr('data-star') // 星级
  // var evalDescribe =  $('.evalDescribe').attr('data-tag') // 评价标签
  var evalDescribe = [];
  var textareaVal =  $('#textarea').val() // 评价内容
  // $.ajax()
  for(var i = 0; i < $('.evalDescribe .checked').length; i++){
    evalDescribe.push($($('.evalDescribe .checked')[i]).text())
  }
  // $.myToast(textareaVal);
  var params = {
    "caseId": getQueryVariable('caseId'),
    "content": textareaVal,
    "starLevel": star,
    "editableTag": JSON.stringify(evalDescribe),
    "anonymous": anonymity
  }
  addEvaluate(params,function(res){
    // if (res.errorCode === '0') {
    // } else {
    //   $.myToast(res.value);
    // }
    // history.go(-1)
    location.href = getQueryVariable('currentUrl')
  },function(){
    $.myToast("服务器异常，请稍等");
  })
}

function getQueryVariable(variable){
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
  }
  return(false);
}
function checkedEvalText(){
  var star = Number($('.starEval').attr('data-star')) // 点击对象对应的data-num属性
  var evalText = $('#textarea').val()
  if(star < 1){
    $.myToast("请选择评价星级",2500);
    return false
  }
  if(evalText.length > 255){
    $.myToast("描述不得超过255个字",2500);
    return false
  }
  if(star <= 2 && evalText.length < 30){ // 差评
    $.myToast("差评描述至少30个字",2500);
    return false
  } else {
    return true
  }
}
function addEvaluate(params,successFun,errorFun){
  var url = '/api/h5gateway/evaluate/addEvaluate'
  $.ajax({
    type: 'POST',
    url: url,
    data: JSON.stringify(params),
    xhrFields: {
      withCredentials: true // 设置运行跨域操作
    },
    dataType:'json',
    contentType: "application/json;charset=UTF-8",
    success:function(res){
      successFun(res)
    },
    error: function(e){
      errorFun(e)
    }
  })
}