nvg_cook.getCookie = function(name)
{
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

nvg_cook.setCookie = function(name, value, options)
{
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires)
  {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }

  if (expires && expires.toUTCString)
    options.expires = expires.toUTCString();

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options)
  {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
};

nvg_cook.deleteCookie = function(name)
{
  nvg_cook.setCookie(name, "", {
    expires: -1
  });
};

function nvg_cook(inputId, expire)
{
	this.delMe = function()
	{
		localStorage.removeItem(this.inputId.slice(1));
	};

  this.clear = function()
  {
    this.delMe();
    $(this.inputId).val('');
  };

  if(expire === undefined)
    this.expire = 86400;
  else
    this.expire = expire;

  this.inputId = inputId;

  $(this.inputId).bind('input', function()
  {
    localStorage.setItem(this.id, $(this).val());
    nvg_cook.setCookie("ede56579ee9d437820a0f9"+this.id,1,{expires: this.expire});
  });

  if(nvg_cook.getCookie("ede56579ee9d437820a0f9"+this.inputId.slice(1))==1)
    $(this.inputId).val(localStorage.getItem(this.inputId.slice(1)));
}