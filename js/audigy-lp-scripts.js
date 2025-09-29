jQuery(function($) {
   
  
  setTimeout(function(){
    
    if( $('.nf-form-cont').length )
    var form_title = $('.nf-form-title h3').html();

    if( $('.hidden-container #nf-field-135-wrap').length || $('.hidden-container #nf-field-128-wrap').length || $('.hidden-container #nf-field-141-wrap').length ){
      $('body').addClass('ghx_nf_form');
    }

   // $('.ghx_nf_form input[type="submit"]').attr("disabled", true);


  }, 300);

  if (typeof Marionette !== 'undefined') // Any scope
  {
      var mySubmitController = Marionette.Object.extend( {
        
        initialize: function() {
          this.listenTo( Backbone.Radio.channel( 'forms' ), 'submit:response', this.actionSubmit );
        },

        actionSubmit: function( response ) {

          var nf_form_title = $('.nf-form-title').html();


          if( $('.ghx_nf_form').length && nf_form_title!='Save My Spot')
          {
            $('.ghx-app').addClass('loading');
            $('.ghx-audigy-app-content').html('<div style="position:relative;width:100%;min-height:260px;"><img src="/wp-content/plugins/audigy-ghx/assets/icons/loading.gif" style="position:absolute;top:-50px;bottom:0px;left:0px;width:60px !important;height:60px;right:0px;margin:auto;"></div>');
          }
          else if(nf_form_title=='Save My Spot'){
              $('.nf-form-layout form').hide();
              $('.nf-response-msg').show();
              $('.nf-response-msg').html('<p>Your spot on the screener has been saved! Check your email for a link to pick up right where you left off.</p>')
              $('.ghx-nf-cont').addClass('form_submitted');
                    
          }


        },

      });
  }


  // On Document Ready...
  $( document ).ready( function( $ ) {
      new mySubmitController();
  });
  

  document.addEventListener('nfFormSubmitResponse', function(event) {
    // Optional: restrict to a specific form ID
    var formId = event.detail.response.data.form_id;

    if (formId == 16) { // Replace with your actual form ID
        console.log('Ninja Form submitted successfully!');
        
        // ✅ Your custom logic here
        alert("Thanks! Your submission was successful.");
        
        // Example: redirect to thank-you page
        // window.location.href = "/thank-you";
    }
});


//console.log(localStorage.getItem('ghx_nf_saved_data'));



// alert( localStorage.getItem('ghx_nf_saved_data') )
setTimeout(function(){

  
var nf_form_title = $('.nf-form-title').html();

var jsonData = jQuery.parseJSON( localStorage.getItem('ghx_nf_saved_data') );


if( $('.ghx_nf_form').length && nf_form_title!='Save My Spot')
var idValue = jsonData.data.lpData.id;

if( $('.ghx_nf_form').length && nf_form_title=='Save My Spot')
var idValue = jsonData.id;


  $('#nf-field-128,#nf-field-135,#nf-field-141').val(localStorage.getItem('ghx_nf_saved_data'));

  if( $('.ghx_nf_form').length && nf_form_title!='Save My Spot')
  $('#nf-field-129,#nf-field-136').val(idValue);

  if( $('.ghx_nf_form').length && nf_form_title=='Save My Spot')
  $('#nf-field-143').val(idValue);


}, 2000);

let checkguid = new URLSearchParams(window.location.search)

if(checkguid.has('guid'))
{
  let guid = checkguid.get('guid')
  window.sessionStorage.setItem('spot_id',guid)
}

const ajax_url = window.site_location_obj.ajax_url;



 
$('.unsubscribe_butt').click(function(){
    
    let email_id = $(this).data("email");
    
     $.ajax({
          method: "POST",
          url: ajax_url,
          data: {
            action: "audigy_lp_email_logs",
            email: email_id,
          },
          success: function(data) {
                 $('.form-widget-sidebar').show();
                 var myModal = new bootstrap.Modal(document.getElementById('c-form-response'), {
                    keyboard: false
                  })
                  myModal.show();
            }
        
        })
        
    });
    

});



function captcha_callback(){

validCheck();
}  

function validCheck(){

  let valErr = 'false';

  $('#lp-leads-form .sidebar-form-field').each(function(){
    
      var email_val = $('#lp-leads-form .wpcf7-email').val();
      
       if (! $("#g-recaptcha-response").val() ) {
         valErr = valErr+'-true';
      }
      

      if($(this).find('.wpcf7-validates-as-required').val()=='')
      valErr = valErr+'-true';
     
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      email =  pattern.test(email_val) ? true: false;
      
      if(email==false)
      valErr = valErr+'-true';
       
  });
  
  if(valErr.indexOf('true') == -1){
    
    if( $('.lp-leads-form-button').length )
    $('.lp-leads-form-button').prop("disabled", false);
    
  } else{
     $('.lp-leads-form-button').attr('disabled','disabled');
  }

}

jQuery(function($) {

$(function() {


let lp_data = window.getLpData().value;


if (lp_data && typeof lp_data.firstName  !== "undefined"){
    var firstName = lp_data.firstName;
} else{
  var firstName = '';
}

if (lp_data && typeof lp_data.lastName  !== "undefined"){
  var lastName = lp_data.lastName;
} else{
  var lastName ='';
}

if (lp_data && typeof lp_data.email  !== "undefined"){
  var email = lp_data.email;
} else{
  var email ='';
}

 
if (lp_data && typeof lp_data.phone  !== "undefined"){
  var phone = lp_data.phone.replace(/[_\W]+/g, "");
} else{
  var phone = '';
}


  
const ajax_url = window.site_location_obj.ajax_url;

$('.lp-leads-form-button').attr('disabled','disabled');

 $('.lp-leads-form-button').addClass('v-btn--loading');


$('#lp-leads-form input,#lp-leads-form select').on("change", function(){
  
   validCheck();
    
});

$('#lp-leads-form input').on("keypress", function(){
  
   validCheck();
    
});

$('button.lp-leads-form-button').on("click", function(e) {
  
  $('#lp-leads-form .sidebar-form-field').addClass('disable_elem');
  
  $('.disable_elem').on('click', function() {
      return false;
  });
  
  e.preventDefault();
  let hasError = false;
  

  let formData = document.getElementById('lp-leads-form');
  let rules = formData.wpcf7.schema.rules;

  let fields = formData.querySelectorAll('.wpcf7-form-control');
  fields.forEach(field => {
    reset(formData, field);
    
    let require = true;
    let email = true;
    let number = true;
    const PHONE_NUMBER_LENGTH = 14;
    
    if (field.classList.contains('wpcf7-validates-as-required'))
      require = field.value ? true: false;
      
    if(!field.classList.contains('wpcf7-validates-as-required') && !field.value)
      return
      
    if (field.classList.contains('wpcf7-validates-as-email')) {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        email =  pattern.test(field.value) ? true: false;
    }
    
    setupErrorMessageByRule(formData, field.name, require, rules, 'required');
    
    setupErrorMessageByRule(formData, field.name, email, rules, 'email');
    
      
  if (! $("#g-recaptcha-response").val() ) {
    alert("Please confirm that you are not a robot to submit this form");
    return;
  }
    
    
    if (!require || !email || !number)
      hasError = true;
  })
  
  if (hasError)
    return;
    

    
  saveLpApi(formData);
    
});


$("#lp-leads-form input").on("keyup",function search(e) {
  
  if(e.keyCode == 8) {
        validCheck();
  }
  
});

function saveLpApi(form) {

  var locId = '';
  
  let formData = $('#lp-leads-form').serializeArray();
  
  if (typeof lp_plugin !== 'undefined')
  var locId    = lp_plugin.loc_id;
  
  $('.lp-leads-form-button').attr('disabled','disabled');
  $('.lp-leads-form-button').addClass('active');
  
  $.ajax({
    
      method: "POST",
      url: ajax_url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        action: "fetch_location_data",
        locId: locId,
        formData : formData,
        lp_data:window.getLpData(),
        spot_id: sessionStorage.getItem("spot_id"),
        lp_randId: generateLPId()
      }
      
    }).done(function( response ) {
      
        grecaptcha.reset();
        
      
        
        $('.form-widget-sidebar').addClass('submitted');
      
        $('.form-widget-sidebar .wpcf7').html('<p align="center" style="margin:auto !Important;">Thank you for using HearingLoss.com.<br>Someone from <b>'+$('.banner-content h1').html()+'</b> will reach out to you shortly.</p>');

        sessionStorage.removeItem('lp_data');
        sessionStorage.removeItem('spot_id');

        setTimeout(function () {
                
          var myModal = new bootstrap.Modal(document.getElementById('c-form-response'), {
            keyboard: false
          })
          myModal.show();    
                
        }, 2500);
        
      
        
        let fields = form.querySelectorAll('.wpcf7-form-control');
        
        fields.forEach(field => field.value = "")
        
        form.classList.remove('init');
        form.classList.remove('invalid');
        form.classList.add('sent');
        
        setTimeout(_=> {
          form.classList.remove('sent');
          form.classList.add('init');
        }, 5000)

    });
  
  
 
}


function setupErrorMessageByRule(formData, field, errorType, rules, rule) {
  if (!errorType) {
    reset(formData, field);
    
    let fieldRule = rules.find( item => item.rule === rule && item.field === field )
    
    if (fieldRule)
      setErrorMessage(formData, field, fieldRule.error)
  }
}

function setErrorMessage(e, field, message) {
  var r;
  const n = `${null===(r=e.wpcf7)||void 0===r?void 0:r.unitTag}-ve-${field}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
        o = e.querySelector(`.wpcf7-form-control-wrap[data-name="${field}"] .wpcf7-form-control`);
  e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${field}"]`).forEach((t => {

    if ("validating" === e.getAttribute("data-status") && !t.dataset.underValidation) return;
    const r = document.createElement("span");
    r.classList.add("wpcf7-not-valid-tip"), 
    r.setAttribute("aria-hidden", "true"), 
    r.insertAdjacentText("beforeend", message), 
    t.appendChild(r), 
    t.querySelectorAll("[aria-invalid]").forEach((e => {
      e.setAttribute("aria-invalid", "true") 
    })), 
    t.querySelectorAll(".wpcf7-form-control").forEach((e => {
      e.classList.add("wpcf7-not-valid"), 
      e.setAttribute("aria-describedby", n), 
      "function" == typeof e.setCustomValidity && e.setCustomValidity(message), 
      e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", (e => {
          r.setAttribute("style", "display: none")
      })),
      r.addEventListener("click", (e => {
          r.setAttribute("style", "display: none")
      })))
    }))
  }));
}

function reset(e, field) {
  var aa, rr;
  const nn = `${null===(aa=e.wpcf7)||void 0===aa?void 0:aa.unitTag}-ve-${field}`.replaceAll(/[^0-9a-z_-]+/gi, "");
  null === (rr = e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${nn}`)) || void 0 === rr || rr.remove(), 
  e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${field}"]`).forEach((e => {
      var t;
      null === (t = e.querySelector(".wpcf7-not-valid-tip")) || void 0 === t || t.remove(), 
      e.querySelectorAll("[aria-invalid]").forEach((e => {
        e.setAttribute("aria-invalid", "false")
      })), 
      e.querySelectorAll(".wpcf7-form-control").forEach((e => {
        e.removeAttribute("aria-describedby"), 
        e.classList.remove("wpcf7-not-valid"), 
        "function" == typeof e.setCustomValidity && e.setCustomValidity("")
      }))
  }))
}

function generateLPId() {
  return `${Math.floor(Math.random() * 99999)}${Date.now()}`;
}

});

});