const label = $('.calc__input')
const buttons = $('.buttons-wrapper');

for (let i = 0; i < buttons.children().length; i++){
  buttons.children(`#btn-${i}`).click(function () {
    label.val(label.val() + $(this).html());
  });
}

$('#btn-plus').click(function () {
  label.val(label.val() + $(this).html());
});
$('#btn-minus').click(function () {
  label.val(label.val() + $(this).html());
});
$('#btn-mult').click(function () {
  label.val(label.val() + $(this).html());
});
$('#btn-div').click(function () {
  label.val(label.val() + $(this).html());
});

$('#btn-equal').click(function () {
  label.val(eval(label.val()));
});
$('#btn-clear').click(function () {
  label.val('');
});
$('#btn-binary').click(function() {
label.val(binary(label.val()));
});
$('#btn-binary2').click(function() {
  label.val(binary2(label.val()));
  });

function binary(number){
  var binNumber=0;
  for(let i=0;number>=1; i++){

  
    binNumber+=((number%2)*(Math.pow(10,i)));
    number=number/2;
    number = Math.floor(number);
   
    
  }
 return binNumber;
}

function binary2(number){
  var decNumber=0;
  for(let i=0;number>=1; i++){

  
    if(number%10===1)
    decNumber+=Math.pow(2,i);
    number=number/10;
    number = Math.floor(number);
   
    
  }
 return decNumber;
}

