const communitySelect = document.getElementById('communitySelect');
const personalInfoDiv = document.getElementById('personalInfo');
const form = document.getElementById('surveyForm');

communitySelect.addEventListener('change', function () {
  if (this.value) {
    personalInfoDiv.style.display = 'block';
  } else {
    personalInfoDiv.style.display = 'none';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!communitySelect.value) {
    alert('请先选择社区！');
    return;
  }
  // 这里可以添加代码将填写的数据发送到服务器端进行处理，目前只是简单验证
  alert('表单提交成功，可后续添加数据处理逻辑！');
});