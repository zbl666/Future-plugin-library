function alertModal(content,width,height){
    // 添加模态框用到的css
    const cssEle = document.createElement('style');
    cssEle.id = 'cameraCSSId';
    const cssContent = `.modal_header_1dNxf { 
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
                            background-color: hsla(163, 85%, 40%, 1); 
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
                        }`;
    cssEle.innerHTML = cssContent;
    document.querySelector("head").appendChild(cssEle);
    // 添加模态框用到的DIV,灰色背景
    const modalDiv = document.createElement('div');
    modalDiv.id = 'cameraDivId';
    modalDiv.style = 'position: fixed;top: 0;left: 0;background: rgba(0,0,0,0.3);width: 100%;height: 100%;';
    //videoId模态框包裹
    const videoId = document.createElement('div');
    videoId.id='videoId';
    videoId.style='padding-top: 50px;box-sizing: border-box; overflow: auto;z-index: 999;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);';
    videoId.style.width=width;
    videoId.style.height=height;
    <!--模态框头部-->
    videoId.innerHTML=`<!--模态框头部-->
                <div class="modal_header_1dNxf connection-modal_header_12IsA" style="position: absolute;top: 0;left: 0;">
                    <div class="modal_header-item_1WbOm "style="position: absolute;right: 0;">
                        <div id="cameraCloseId" class="close-button_close-button_t5jqt close-button_large_2cCrv">
                            <img class="close-button_close-icon_ywCI5" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==">
                        </div>    
                    </div>    
                </div>   `;
    <!--模态框内容-->
    const modal_center = document.createElement('div');
    modal_center.className='modal_center';
    modal_center.innerHTML='<!--模态框内容-->';
    <!--模态框内容第二层-->
    const modal_center_content = document.createElement('div');
    modal_center_content.className='modal_center_content';
    modal_center_content.innerHTML=content;
    modal_center.appendChild(modal_center_content);
    videoId.appendChild(modal_center)
    modalDiv.appendChild(videoId)
    document.querySelector('body').appendChild(modalDiv);
    // 添加模态框关闭事件
    document.getElementById('cameraCloseId').addEventListener('click',function () {
        const cameraEle = document.getElementById('cameraDivId');
        cameraEle.style.visibility = 'hidden';
        cameraEle.style.display = 'none';
        document.querySelector('body').removeChild(cameraEle);
        document.querySelector('head').removeChild(document.getElementById('cameraCSSId'));
    });
}
