# select下拉框

分开引入html,css,js

#### 使用须知
1,右侧三角为图片，自行更换。

2,点击后，会把当前点击li标签的data-id,和data-val赋值给input，默认为data-id和data-val,可自行添加修改

3,获取元素的data-属性:

obj.dataset.key(在默认例子中key为id或者val,obj为输入框对象);

即在默认例子中获取当前data-id属性：document.getElementById("select1").getElementById("imitationSelect").dataset.id;