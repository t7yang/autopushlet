javascript: (function() {

      var countBytes = function(s){
        var c = 0, len = 0;
        c = s.charCodeAt(0);
        while( c > 0 ){
           len++;
           c = c >> 8;
        }
        return len;
      };

      var r = [''], c = '', l = 44, el = 0, ri = 0, fr = '', cl = 0;
      var p = window.confirm('首列要推嗎？');
      var t = window.prompt('請輸入你要連推的內容');
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
      for(var i = 0, len = r.length; i < len; i++) {
        if(i === 0){
          p ? p = '1' : p = 3;
          fr += 'X' + p + r[i] + '\ny\n';
        } else if(i === len - 1) {
          fr += 'X' + r[i] + '\ny\n ';
        } else {
          fr += 'X' + r[i] + '\ny\n';
        }
      }
      window.alert(fr);
    })()
