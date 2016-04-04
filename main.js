javascript: (function() {

  // 回傳這個字用幾個位元組組成
  var countBytes = function(s){
    var c = 0, len = 0;
    c = s.charCodeAt(0);
    while( c > 0 ){
       len++;
       c = c >> 8;
    }
    return len;
  };

  var r = ['']; // 儲存分配好字數的列文字
  var c = ''; // 每次處理一個字的容器
  var l = 44; // 字數限制，半形文字的數量
  var el = 0; // countBytes回傳長度的容器
  var ri = 0; // 陣列r的索引號
  var fr = ''; // 最終的結果
  var cl = 0; // 第ri列當前累計了多少個字
  var p = window.prompt('首列要推嗎？（預設1）\n1: 推 3: 箭頭 2: 作者/CD中');
  var t = window.prompt('請輸入你要連推的內容');
  // 按字數切割每一個列存到r
  for(var i = 0, len = t.length; i < len; i++) {
    c = t[i];
    el = countBytes(c);
    if(cl + el > l) {
      ri++;
      r[ri] = '';
      r[ri] += c;
      cl = el;
    } else {
      r[ri] += c;
      cl += el;
    }
  }
  // 格式化
  for(var i = 0, len = r.length; i < len; i++) {
    if(i === 0){
      if(p === '2') {
        p = '';
      } else if(p === '3') {
        p = '3';
      } else {
        p = '1';
      }
      fr += 'X' + p + r[i] + '\ny\n';
    } else if(i === len - 1) {
      fr += 'X' + r[i] + '\ny\n ';
    } else {
      fr += 'X' + r[i] + '\ny\n';
    }
  }
  window.alert(fr);
})()
