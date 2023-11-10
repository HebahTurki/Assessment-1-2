function billingFunction(){
  if (document.getElementById('same').checked){
    var name = document.getElementById('shippingName');
    var Zip = document.getElementById('shippingZip');
    document.getElementById('billingName').value = name.value;
    document.getElementById('billingZip').value = Zip.value;
  }else{
    document.getElementById('billingName').value = " ";
    document.getElementById('billingZip').value = " ";
  }
}