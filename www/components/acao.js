// This is a JavaScript file
function retorno(){

}
function retorno2(buttonIndex) {
 // navigator.notification('Botao Clicado'+buttonIndex);
if(buttonIndex == 1){
  navigator.notification.alert("Sim");
  navigator.notification.beep(1);
}else{
    navigator.notification.alert("Não");
  navigator.notification.beep(2);
}
}
$(document).on("click","#alerta",function(){
  //navigator.notification.alert("Olá Mundo- Meu Primeiro App!",retorno,"Aviso","OK!");
  //navigator.notification.beep(2);
  navigator.notification.confirm("Escolha uma Opçao",retorno2,"Titulo",['Sim','Não']);
});
$(document).on("click","#vibrar",function(){
  navigator.vibrate(3000);
});
$(document).on("click","#LerCodigo",function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("Resultado da Leitura\n" +
                "Resultado: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert("Falha no Scanning : " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Coloque um código de barras dentro da área de digitalização", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});