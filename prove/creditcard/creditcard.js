// get a reference to the form. We can access all the named form inputs through the form element.
var theForm=document.querySelector('#checkoutForm')

//validations and errors

function displayError(m){
  // display error message
  document.querySelector('.errors').textContent=m
}

function isCardNumberValid(n){
  // normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
  return n==='1234123412341234'
}

// Set TOTAL from query string if provided (e.g., ?total=199)
;(function(){
  var el=document.querySelector('.order-total')
  if(!el)return
  var p=new URLSearchParams(window.location.search)
  var t=p.get('total')
  if(t){el.textContent='TOTAL: $'+t}
})()

function submitHandler(e){
  e.preventDefault()
  var err=''
  displayError('')

  var cardNumber=document.querySelector('#creditCardNumber')
  // allow users to type spaces/dashes; check digits after stripping
  var cardNum=cardNumber.value.replace(/[\s-]/g,'').trim()

  if(!/^\d{16}$/.test(cardNum)){
    err+='Card number must be 16 digits\n'
  }else if(!isCardNumberValid(cardNum)){
    err+='Card number is not valid\n'
  }

  var y=Number(document.querySelector('#year').value)
  var m=Number(document.querySelector('#month').value)
  var now=new Date()
  var cy=now.getFullYear()
  var cm=now.getMonth()+1

  if(m<1||m>12){err+='Expiration month must be 01-12\n'}

  var fy=2000+y
  if(fy<cy||(fy===cy&&m<=cm)){err+='Card is expired\n'}

  if(err!==''){
    displayError(err)
    return
  }

  // Success: mimic the form project behavior (replace UI and hide button)
  var stack=document.querySelector('.card-stack')
  stack.classList.add('success')
  stack.innerHTML='<h2>Thank you for your purchase.</h2>'

  var f=document.querySelector('.stack-footer')
  if(f)f.classList.add('hide')
}

document.querySelector('#checkoutForm').addEventListener('submit',submitHandler)
