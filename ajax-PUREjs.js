
function ajax(obj){
  var req = new XMLHttpRequest();

  if(obj.opt.responseType){
    req.responseType = obj.opt.responseType;
  }
  req.onreadystatechange=function(){
    switch(req.readyState){
      case 0:
        if(obj.isUnset){
          obj.isUnset();
        }
        break;
      case 1:
        if(obj.isOpened){
          obj.isOpened();
        }
        break;
      case 2:
        if(obj.issetHeaders){
          obj.issetHeaders(req.getAllResponseHeaders());
        }
        break;
      case 3:
        if(obj.isLoading){
          obj.isLoading(req);
        }
        break;
      case 4:
        if(obj.isDone){
          obj.isDone(req);
        }
    }
  };
  req.open(obj.opt.method, obj.opt.urlAction, true);
  if(obj.opt.headers){
    for(x=0; x < Object.keys(obj.opt.headers).length; x++){
      pos = Object.keys(obj.opt.headers)[x];
      req.setRequestHeader(pos, obj.opt.headers[pos]);
    }
  }
  var data = (obj.opt.data && obj.opt.data !== "") ? obj.opt.data : null;
  req.send(data);
}
