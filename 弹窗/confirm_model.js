/*
    head  头部信息
    content  要加入的内容（div）
    flag  是否添加确定取消按钮   true/false===不填
    callback  点击确定后要执行的函数
    width 要显示提示框的宽度
    height 要显示的提示框的高度
    cancelCallback 取消事件函数
 */
function confirmModalSelf(head, content, flag, callback, width, height, cancelCallback) {
    // 添加模态框用到的css
    const cssEle = document.createElement('style');
    cssEle.id = 'cameraCSSId';
    const cssContent = `*{
                            margin:0;
                            padding:0;
                            box-sizing: border-box;
                        }
                        .modal_header_1dNxf { 
                            display: flex; 
                            -webkit-box-orient: horizontal; 
                            flex-direction: row; 
                            flex-wrap: nowrap; 
                            -webkit-box-pack: start; 
                            justify-content: flex-start; 
                            height: 3.125rem; 
                            box-sizing: border-box; 
                            width: 100%; 
                        } 
                        .connection-modal_header_12IsA { 
                            background-color: white; 
                        } 
                        .modal_header-item-help_2F4to { 
                            margin-right: -4.75rem; 
                            z-index: 1; 
                        } 
                        .button_outlined-button_2f510 { 
                            cursor: pointer; 
                            border-radius: .25rem; 
                            display: flex; 
                            -webkit-box-orient: horizontal; 
                            -webkit-box-direction: normal; 
                            flex-direction: row; 
                            -webkit-box-align: center; 
                            align-items: center; 
                            padding-left: .75rem; 
                            user-select: none; 
                        } 
                        .modal_help-button_1F4rs { 
                            font-weight: normal; 
                            font-size: 0.75rem; 
                        } 
                        .button_icon_JhCuM { 
                            margin-right: .5rem; 
                            height: 1.5rem; 
                        } 
                        .button_content_3y79K { 
                            white-space: nowrap; 
                        } 
                        .modal_header-image_2c-LK { 
                            margin-right: 0.5rem; 
                        } 
                        .modal_header-item_1WbOm { 
                            display: flex; 
                            -webkit-box-align: center; 
                            align-items: center; 
                            padding: 1rem; 
                            text-decoration: none; 
                            color: hsla(0, 100%, 100%, 1); 
                            z-index:111;
                        } 
                        .modal_header-item-close_4akWi { 
                            flex-basis: 20rem; 
                            -webkit-box-pack: end; 
                            justify-content: flex-end; 
                            z-index: 1; 
                        } 
                        .close-button_close-button_t5jqt { 
                            display: flex; 
                            -webkit-box-align: center; 
                            align-items: center; 
                            -webkit-box-pack: center; 
                            justify-content: center; 
                            overflow: hidden; 
                            background-color: hsla(0, 0%, 0%, 0.15); 
                            border-radius: 50%; 
                            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
                            cursor: pointer; 
                            transition: all 0.15s ease-out; 
                        } 
                        .close-button_large_2cCrv:hover { 
                            -webkit-transform: scale(1.1, 1.1); 
                            -ms-transform: scale(1.1, 1.1); 
                            transform: scale(1.1, 1.1); 
                            -webkit-box-shadow: 0 0 0 4px hsla(0, 0%, 0%, 0.15); 
                            box-shadow: 0 0 0 4px hsla(0, 0%, 0%, 0.15); 
                        } 
                        .close-button_close-icon_ywCI5 { 
                            position: relative; 
                            margin: 0.25rem; 
                            user-select: none; 
                            transform-origin: 50%; 
                            transform: rotate(45deg); 
                        } 
                        .close-button_small_1L9aM .close-button_close-icon_ywCI5 { 
                            width: 50%; 
                        } 
                        .close-button_large_2cCrv .close-button_close-icon_ywCI5 { 
                              width: 0.75rem; 
                              height: 0.75rem; 
                              float:right;
                        } 
                        .modal_center { 
                            background: hsla(0, 100%, 100%, 1); 
                            height:100%; 
                        } 
                        .connection-modal_activityArea_PqYoO { 
                            height: 359; 
                            background-color: hsla(215, 100%, 65%, 0.1); 
                            display: flex; 
                            -webkit-box-pack: center; 
                            justify-content: center; 
                            -webkit-box-align: center; 
                            align-items: center; 
                        } 
                        .modal_center_content { 
                            width: 100%; 
                            height: 100%; 
                            display: flex; 
                            -webkit-box-orient: vertical; 
                            -webkit-box-direction: normal; 
                            flex-direction: column; 
                            justify-content: space-around; 
                            bacground:white;
                        } 
                        .modal_header-item-title_1N2BE { 
                            -webkit-box-flex: 1; 
                            flex-grow: 1; 
                            flex-shrink: 0; 
                            -webkit-box-pack: center; 
                            justify-content: center; 
                            user-select: none; 
                            letter-spacing: 0.4px; 
                            cursor: default; 
                            margin: 0 -20rem 0 0; 
                        }
                        ._btn{
                            display: inline-block;
                            padding: 6px 12px;
                            margin-bottom: 0;
                            font-weight: 400;
                            text-align: center;
                            white-space: nowrap;
                            vertical-align: middle;
                            -ms-touch-action: manipulation;
                            touch-action: manipulation;
                            cursor: pointer;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            background-image: none;
                            border: 1px solid transparent;
                            font-size: 12px;
                            line-height: 1.5;
                            border-radius: 3px;
                            outline: none;
                        }
                        ._btn-default{
                            background-color: #FFFFFF;
                            border-color: #ddd;
                            color: #444;
                            outline: none;
                        }
                        ._btn-success{
                            background-color: rgb(24, 144, 255);
                            border-color: rgb(24, 144, 255);
                            color: #FFFFFF;
                        }
                        ._btn-default:hover{
                            background-color:rgb(231, 231, 231);
                            transition: .5s;
                        }
                        ._btn-success:hover{
                            background-color: rgb(70, 166, 255);
                            border-color: rgb(70, 166, 255);
                        }
                        `;

    var _model=document.createElement("div");
    _model.style='height: 100%;position:relative;'
    var _model_input_determine=document.createElement("input");
    _model_input_determine.type='button';
    _model_input_determine.className='_btn _btn-success ';
    _model_input_determine.style="float:right;"
    _model_input_determine.id='_table_determine';
    _model_input_determine.value='确定';
    var _model_input_cancel=document.createElement("input");
    _model_input_cancel.className='_btn _btn-default ';
    _model_input_cancel.type = 'button';
    _model_input_cancel.id = 'table_cancle_cancel';
    _model_input_cancel.style = "margin: 0 10px;float:right;";
    _model_input_cancel.value = '取消';
    var input_contain = document.createElement("div");
    input_contain.className = "input_contain";
    input_contain.style = "position:absolute;bottom:18px;right:22px;"
    input_contain.appendChild(_model_input_determine)
    input_contain.appendChild(_model_input_cancel)
    // content.style.height = 60 + "%";
    _model.appendChild(content);
    if (flag) {
        _model.appendChild(input_contain);
    }
    cssEle.innerHTML = cssContent;
    document.querySelector("head").appendChild(cssEle);

    // 添加模态框用到的DIV,灰色背景
    const modalDiv = document.createElement('div');
    modalDiv.id = 'cameraDivId';
    modalDiv.style = 'position: fixed;top: 0;left: 0;background: rgba(0,0,0,0.3);width: 100%;height: 100%;transition:2s;z-index: 100;';
    //videoId模态框包裹1
    const videoId = document.createElement('div');
    videoId.id = 'videoId';
    videoId.style = 'padding-top: 50px;box-sizing: border-box; overflow: auto;z-index: 999;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 4px;\n' +
        // '    border: 1px solid #e6ebf5;\n' +
        '    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);\n' +
        '    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);background: white;';
    videoId.style.width = width || "270px";
    videoId.style.height = height || "180px";
    <!--模态框头部-->
    //头部包裹2
    var modal_header_1dNxf = document.createElement("div");
    modal_header_1dNxf.className = 'modal_header_1dNxf connection-modal_header_12IsA';
    modal_header_1dNxf.style = "position: absolute;top: 0;left: 0;"
    //头部包裹3
    var modal_header_item_1WbOm = document.createElement("div");
    modal_header_item_1WbOm.className = 'modal_header-item_1WbOm';
    modal_header_item_1WbOm.innerHTML = `<div id="cameraCloseId" class="close-button_close-button_t5jqt close-button_large_2cCrv">
                            <img class="close-button_close-icon_ywCI5" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==">
                        </div>`;
    modal_header_item_1WbOm.style="position: absolute;right: 0;";
    //头部包裹3
    var header=document.createElement("div");
    header.style='padding:15px;font-size: 18px;color: #303133;';
    header.innerHTML=head;
    //把3加到2里面
    modal_header_1dNxf.appendChild(header)
    modal_header_1dNxf.appendChild(modal_header_item_1WbOm);
    // 把2加到1里面
    videoId.appendChild(modal_header_1dNxf);
    // <!--模态框内容-->
    const modal_center = document.createElement('div');
    modal_center.className='modal_center';
    modal_center.innerHTML='<!--模态框内容-->';
    <!--模态框内容第二层-->
    var modal_center_content = document.createElement('div');
    modal_center_content.className = 'modal_center_content';

    modal_center_content.appendChild(_model);//content必须在createElement里面
    modal_center.appendChild(modal_center_content);
    videoId.appendChild(modal_center)
    modalDiv.appendChild(videoId)
    document.querySelector('body').appendChild(modalDiv);
    document.querySelector("#cameraCloseId").addEventListener('click', function () {
        close_model();
    })
    // 添加模态框关闭事件
    _model_input_cancel.addEventListener('click', function () {
        cancelCallback ? cancelCallback() : close_model();
    })
    _model_input_determine.addEventListener('click', function () {
        callback ? callback() : null;
    })
}
function close_model() {
    let cameraEle = document.getElementById('cameraDivId');
    cameraEle.style.visibility = 'hidden';
    cameraEle.style.display = 'none';
    document.querySelector('body').removeChild(cameraEle);
    document.querySelector('head').removeChild(document.getElementById('cameraCSSId'));
}