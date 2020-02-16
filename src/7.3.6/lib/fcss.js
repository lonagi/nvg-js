nvgs.countEls = [];
nvgs.enabled = true;

nvgs.setFix = function(el, wh, ofx, ofy)
{
  $(el).css("position","fixed");
  $(el).css("z-index","1001");

  if(wh[0]=="t")
    $(el).css("top",ofy+"px");
  else if(wh[0]=="b")
    $(el).css("bottom",ofy+"px");

  if(wh[1]=="l")
    $(el).css("left",ofx+"px");
  else if(wh[1]=="r")
    $(el).css("right",ofx+"px");
  else if(wh[1]=="c")
    $(el).css("left",(50+ofx)+"%");
}

function nvgs(obj2, scroll_when2, direction2, scroll_when2_2)
{
  nvgs.sh5df543 = function(objj)
  {
    $(objj).css("display",'inherit');
    $(objj).stop();
    $(objj).animate({
      opacity: 1
    },150);
    /*setTimeout(function(){},200);*/
  }

  nvgs.hds5df543 = function(objj)
  {
    $(objj).stop();
    $(objj).animate({
      opacity: 0
    },150);
    setTimeout(function(){$(objj).css("display",'none')},155);
  }

  nvgs.elsoft = function(element)
  {
    var scroll = $(window).scrollTop();

    if(element.direction == 1)
    {
      if(scroll >= element.scroll_when)
      {
        if(this.needshf) {
          nvgs.sh5df543(element.obj);
          this.needshf = false;
        }
      }
      else
      {
        if(!this.needshf) {
          nvgs.hds5df543(element.obj);
          this.needshf = true;
        }
      }
    }
    else if(element.direction==0)
    {
      if(scroll<=element.scroll_when)
      {
        if(this.needshf) {
          nvgs.sh5df543(element.obj);
          this.needshf = false;
        }
      }
      else
      {
        if(!this.needshf) {
          nvgs.hds5df543(element.obj);
          this.needshf = true;
        }
      }
    }
    else
    {
      if(scroll >= element.scroll_when && scroll <= element.scroll_when2)
      {
        if(this.needshf) {
          nvgs.sh5df543(element.obj);
          this.needshf = false;
        }
      }
      else
      {
        if(!this.needshf) {
          nvgs.hds5df543(element.obj);
          this.needshf = true;
        }
      }
    }
  }

  if(obj2 == "")
    this.obj = "";
  else 
    this.obj = obj2;

  if(scroll_when2 !== "") 
    this.scroll_when = scroll_when2;
  else
    this.scroll_when = 90;

  if(scroll_when2_2 !== undefined) 
    this.scroll_when2 = scroll_when2_2;

  if(direction2 !== "") 
    this.direction = direction2;
  else 
    this.direction = 1;

  this.needshf = false;
  nvgs.elsoft(this);
  nvgs.countEls.push(this);
}

$(window).scroll(function ()
{
  if(nvgs.enabled === true)
  {
    nvgs.countEls.forEach(function(element)
    {
      nvgs.elsoft(element);   
    });
  }
});