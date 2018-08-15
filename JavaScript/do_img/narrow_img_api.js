/*
* 生成并载入缩放后的图片。
* @param src 图片的src属性。
* @param width 图片的宽度。
* @param container 要添加到的元素。
* */
function newNarrowImage(src, width, container) {
  let img = newImage(src);
  loadElement(img);

  img.onload = () => {//图片必须先载入，否则无法访问图片属性
    let imgRatio = img.naturalWidth / img.naturalHeight;// 获取原图片长宽比例
    let canvas = document.createElement('canvas');// 创建一个画布容器
    let canvas_2d = canvas.getContext('2d');// 获取容器中的画板
    canvas.width = width;
    canvas.height = canvas.width / imgRatio;
    canvas_2d.drawImage(img, 0, 0, canvas.width, canvas.height);
    loadElement(canvas);

    let b64 = canvas.toDataURL('image/jpeg', 0.8);//将绘制后的图导出成 base64 格式的图片
    let img_b64 = newImage(b64);
    container.appendChild(img_b64);
    img_b64 = null;
  };
}

/*
* 载入指定的元素。
* @param element 要载入的元素。
* @param show 是否显示在body。
* */
function loadElement(element, show = false) {
  if (!show) {
    element.style = 'display:none;';
  }
  document.body.appendChild(element);
}

/*
* 返回指定路径的img元素。
* @param src 图片src属性。
* */
function newImage(src) {
  let img = new Image();// img元素
  img.src = src;

  if (src.indexOf('http') === 0) {// 当为线上图片时，需要设置 crossOrigin 属性
    img.crossOrigin = '*';//使用服务器访问本域的图片时，否则.toDataURL()会报错
  }
  return img;
}