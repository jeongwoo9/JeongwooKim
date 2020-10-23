function ajaxCaller(url,func){

  $.ajax({
    url : url,
    type : "GET",
    dataType:"json",
    success : function(data,status,xhr){
      console.log("success status : " + status);
      func(data);
    },
    error : function(jqXHR, textStatus, errorThrown){
      console.log("error textStatus : " + textStatus);
      console.log("error errorThrown : " + errorThrown);
    }
  })
}
