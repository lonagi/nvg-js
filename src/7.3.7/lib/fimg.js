nvgi.block_f = false;
nvgi.needToS = false;
nvgi.paste = false;
nvgi.ToS = "";

nvgi.getImg = function(pastee, callback)
{
  if(pastee.clipboardData == false)
  {
        if(typeof(callback) == "function")
        {
            callback(undefined);
        }
  }

    var files = pastee.clipboardData.items;

    if(files == undefined)
    {
        if(typeof(callback) == "function")
        {
            callback(undefined);
        }
    }

    for (var i = 0; i < files.length; i++)
    {
        if (files[i].type.indexOf("image") == -1) 
          continue;
        var blob = files[i].getAsFile();

        if(typeof(callback) == "function")
        {
          callback(blob);
        }
    }
};

nvgi.preLoad = function(elems, srcname, isCss)
{
  if(srcname===undefined || srcname === 0)
    srcname = "data-src";
  if(isCss===undefined)
    isCss = 0;

  var allClassElements = document.getElementsByClassName(elems);
  var allImages = [];
  var allImagesOld = [];
  var xCounter = [];

  for (var i = 0; i < allClassElements.length; i++)
  {
    var img = new Image();
    var x = allClassElements[i];
    var imageSrc = $(x).attr(srcname);
    img.src = imageSrc;
    allImages.push(img);
    allImagesOld.push(x);
    xCounter.push(i);
  }

  xCounter.forEach(function(ee){
    allImages[ee].onload = function()
    {
      if(isCss==0)
        $(allImagesOld[ee]).attr("src",allImages[ee].src);
      else
      {
        /*$(allImagesOld[ee]).css({"background-image":"url('"+allImages[ee].src+"')"});*/
        if($(allImagesOld[ee]).attr("style") == undefined)
          $(allImagesOld[ee]).attr("style","background-image: url('"+allImages[ee].src+"') !important");
        else
          $(allImagesOld[ee]).attr("style",$(allImagesOld[ee]).attr("style")+" background-image: url('"+allImages[ee].src+"') !important");
      }
    };
  });
};

nvgi.preLoadId = function(elem, srcname, isCss)
{
  if(srcname===undefined || srcname === 0)
      srcname = "data-src";
  if(isCss===undefined)
      isCss = 0;

  var img = new Image();
  var x = document.getElementById(elem);
  var imageSrc = $(x).attr(srcname);
  img.src = imageSrc;

  img.onload = function()
  {
    if(isCss==0)
      $(x).attr("src",img.src);
    else
    {
      /*$(x).css({"background-image":"url('"+allImages[ee].src+"')"});*/
      if($(x).attr("style") == undefined)
        $(x).attr("style","background-image: url('"+img.src+"') !important");
      else
        $(x).attr("style",$(x).attr("style")+" background-image: url('"+img.src+"') !important");
    } 
  };
};

function nvgi(){}

nvg_modal.framework = "bs";
function nvg_modal(mode, trigger, img, width_new)
{
  nvg_modal.prototype.create_window = function(mode, maxsizer, tg, img)
  {
    var parts = [];
    if(mode=="img2")
    {
      if(nvg_modal.framework == "bs")
      {
        parts.push('<div class="modal fade" id="'+tg.substring(1)+'_2" tabindex="-1" role="dialog" aria-hidden="true">');
        parts.push('<div class="modal-dialog" style="max-width: '+ maxsizer + 'px" role="document"><div style="background: none;" class="modal-content"><div style="border: none; background-color: snow; background-color: rgba(230,230,230,0.8);" class="modal-header">');
        parts.push('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        parts.push('<div class="modal-body"><img style="position: relative; width: 100%;" src="'+img+'"></div>');
        parts.push('</div></div></div>');
      }
    }
    else
    {
      if(nvg_modal.framework == "bs")
      {
        parts.push('<div class="modal fade" id="'+tg.substring(1)+'_2" tabindex="-1" role="dialog" aria-hidden="true">');
        parts.push('<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header">');
        parts.push('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        parts.push('<div class="modal-body"><img style="position: relative; width: 100%;" src="'+img+'"></div>');
        parts.push('</div></div></div>');
      }
    }
    return parts.join("");
  };

  if(width_new === undefined)
    width_new = 500;

  this.tg = trigger;
  this.img = img;

  if(mode == "img" || mode == "" || mode == "img2")
  {
    if(nvg_modal.framework == "bs")
    {
      $(this.tg).css("cursor","pointer");
      $(this.tg).attr("onclick","$('"+this.tg+"_2').modal('show');");      
      $("body").append(nvg_modal.prototype.create_window(mode,width_new,this.tg, this.img));
    }
  }
}

window.addEventListener("paste", function(e){

    if(nvgi.paste)
    {
    	nvgi.getImg(e, function(iblob){
        if(iblob)
        	{           
            var img = new Image();
            img.onload = function(){
            if(nvgi.needToS && nvgi.Tos != "")
            	$(nvgi.ToS).html(img);
            };

            nvgi.block_f = iblob;

            var URLObj = window.URL || window.webkitURL;
            img.src = URLObj.createObjectURL(iblob);
        }
    });
    }

}, false);