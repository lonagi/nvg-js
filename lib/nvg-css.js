class nvgs
{
  static countEls = [];
  static enabled = true;

  constructor(obj2, scroll_when2,direction2)
  {
    if(scroll_when2!="") 
      this.scroll_when = 90;
    else
      this.scroll_when = scroll_when2;

    if(direction2!="") 
      this.direction = 1;
    else
      this.direction = direction2;

    if(obj2!="")
    {
      this.obj = obj2;
    }
    else 
      this.obj = "";

    $(this.obj).addClass("fade");
    $(this.obj).removeClass("show");
    $(this.obj).addClass("hide");
    setTimeout(function(){$(this.obj).css("transform","translate(1000px,-10000px)");},500);

    nvgs.countEls.push(this);
  }

static elsoft(element)
{
  var scroll = $(window).scrollTop();
    if(element.direction==1)
    {
      if(scroll>=element.scroll_when)
    {
      nvgs.sh5df543(element.obj);
    }
   else
    {
     nvgs.hds5df543(element.obj);
    }
    }
    else
    {
      if(scroll<=element.scroll_when)
    {
      nvgs.sh5df543(element.obj);
    }
   else
    {
      nvgs.hds5df543(element.obj);
    }
    }
}

static sh5df543(objj)
{
  $(objj).addClass("show");
  $(objj).removeClass("hide");
  setTimeout(function(){$(objj).css("transform","translate(0px,0px)");},400);
}

static hds5df543(objj)
{
 $(objj).removeClass("show");
 $(objj).addClass("hide");
 setTimeout(function(){$(objj).css("transform","translate(1000px,-10000px)");},400);
}

}

$(window).scroll(function ()
{
if(nvgs.enabled)
{
    nvgs.countEls.forEach(function(element)
  {
  nvgs.elsoft(element);
});
}

});