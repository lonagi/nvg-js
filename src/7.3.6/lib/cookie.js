class nvg_cook { constructor(inputId) { this.inputId = inputId; $(this.inputId).bind('input', function(){ localStorage.setItem(this.id, $(this).val()); nvg_cook.setCookie("to54523fgRem43432",1,{expires: 86400}); }); if(nvg_cook.getCookie("to54523fgRem43432")==1) $(this.inputId).val(localStorage.getItem(this.inputId.slice(1))); } delMe() { localStorage.removeItem(this.inputId.slice(1)); } static getCookie(name) { var matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" )); return matches ? decodeURIComponent(matches[1]) : undefined; } static setCookie(name, value, options) { options = options || {}; var expires = options.expires; if (typeof expires == "number" && expires) { var d = new Date(); d.setTime(d.getTime() + expires * 1000); expires = options.expires = d; } if (expires && expires.toUTCString) { options.expires = expires.toUTCString(); } value = encodeURIComponent(value); var updatedCookie = name + "=" + value; for (var propName in options) { updatedCookie += "; " + propName; var propValue = options[propName]; if (propValue !== true) { updatedCookie += "=" + propValue; } } document.cookie = updatedCookie; } static deleteCookie(name) { nvg_cook.setCookie(name, "", { expires: -1 }) } }