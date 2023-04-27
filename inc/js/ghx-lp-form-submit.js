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
          $('.lp-leads-form-button').removeAttr('disabled');
      } else{
         $('.lp-leads-form-button').attr('disabled','disabled');
      }
   
 }

jQuery(function($) {

  $(function() {

    //console.log()
    
    
    
    //alert(window.getLpData().value.screenerResults);
    

    /*setTimeout(_=> {
        console.log('setTimeout', window.getLpData())
    }, 1000)*/
    
    
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
    


   /*setTimeout(function(){
     $('input[name="first-name"]').val(firstName);
     $('input[name="last-name"]').val(lastName);
     $('input[name="email-address"]').val(email);
     $('.wpcf7-number').val(phone);
  }, 2300);*/
    
      
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
      
      let extId    = $('link[rel="shortlink"]').attr('href');
      let formData = $('#lp-leads-form').serializeArray();
      
      let locId    = extId.split("=");
      
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
            locId: locId[1],
            formData : formData,
            lp_data:window.getLpData(),
            spot_id: sessionStorage.getItem("spot_id"),
            lp_randId: generateLPId()
          }
          
        }).done(function( response ) {
          
          
            grecaptcha.reset();

            $('.form-widget-sidebar').addClass('submitted');
            $('.form-widget-sidebar .wpcf7').html('<p align="center" style="margin:auto !Important;">Thank you for using HearingLoss.com.<br>Someone from '+$('.banner-content h1').html()+' will reach out to you shortly.</p>');

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
    
    
    
    
    function unserialize(data){  
    // Takes a string representation of variable and recreates it    
    //   
    // version: 810.114  
    // discuss at: http://phpjs.org/functions/unserialize  
    // +     original by: Arpad Ray (mailto:arpad@php.net)  
    // +     improved by: Pedro Tainha (http://www.pedrotainha.com)  
    // +     bugfixed by: dptr1988  
    // +      revised by: d3x  
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)  
    // %            note: We feel the main purpose of this function should be to ease the transport of data between php & js  
    // %            note: Aiming for PHP-compatibility, we have to translate objects to arrays   
    // *       example 1: unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');  
    // *       returns 1: ['Kevin', 'van', 'Zonneveld']  
    // *       example 2: unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}');  
    // *       returns 2: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}  
      
    var error = function (type, msg, filename, line){throw new window[type](msg, filename, line);};  
    var read_until = function (data, offset, stopchr){  
        var buf = [];  
        var chr = data.slice(offset, offset + 1);  
        var i = 2;  
        while(chr != stopchr){  
            if((i+offset) > data.length){  
                error('Error', 'Invalid');  
            }  
            buf.push(chr);  
            chr = data.slice(offset + (i - 1),offset + i);  
            i += 1;  
        }  
        return [buf.length, buf.join('')];  
    };  
    var read_chrs = function (data, offset, length){  
        buf = [];  
        for(var i = 0;i < length;i++){  
            var chr = data.slice(offset + (i - 1),offset + i);  
            buf.push(chr);  
        }  
        return [buf.length, buf.join('')];  
    };  
    var _unserialize = function (data, offset){  
        if(!offset) offset = 0;  
        var buf = [];  
        var dtype = (data.slice(offset, offset + 1)).toLowerCase();  
          
        var dataoffset = offset + 2;  
        var typeconvert = new Function('x', 'return x');  
        var chrs = 0;  
        var datalength = 0;  
          
        switch(dtype){  
            case "i":  
                typeconvert = new Function('x', 'return parseInt(x)');  
                var readData = read_until(data, dataoffset, ';');  
                var chrs = readData[0];  
                var readdata = readData[1];  
                dataoffset += chrs + 1;  
            break;  
            case "b":  
                typeconvert = new Function('x', 'return (parseInt(x) == 1)');  
                var readData = read_until(data, dataoffset, ';');  
                var chrs = readData[0];  
                var readdata = readData[1];  
                dataoffset += chrs + 1;  
            break;  
            case "d":  
                typeconvert = new Function('x', 'return parseFloat(x)');  
                var readData = read_until(data, dataoffset, ';');  
                var chrs = readData[0];  
                var readdata = readData[1];  
                dataoffset += chrs + 1;  
            break;  
            case "n":  
                readdata = null;  
            break;  
            case "s":  
                var ccount = read_until(data, dataoffset, ':');  
                var chrs = ccount[0];  
                var stringlength = ccount[1];  
                dataoffset += chrs + 2;  
                  
                var readData = read_chrs(data, dataoffset+1, parseInt(stringlength));  
                var chrs = readData[0];  
                var readdata = readData[1];  
                dataoffset += chrs + 2;  
                if(chrs != parseInt(stringlength) && chrs != readdata.length){  
                    error('SyntaxError', 'String length mismatch');  
                }  
            break;  
            case "a":  
                var readdata = {};  
                  
                var keyandchrs = read_until(data, dataoffset, ':');  
                var chrs = keyandchrs[0];  
                var keys = keyandchrs[1];  
                dataoffset += chrs + 2;  
                  
                for(var i = 0;i < parseInt(keys);i++){  
                    var kprops = _unserialize(data, dataoffset);  
                    var kchrs = kprops[1];  
                    var key = kprops[2];  
                    dataoffset += kchrs;  
                      
                    var vprops = _unserialize(data, dataoffset);  
                    var vchrs = vprops[1];  
                    var value = vprops[2];  
                    dataoffset += vchrs;  
                      
                    readdata[key] = value;  
                }  
                  
                dataoffset += 1;  
            break;  
            default:  
                error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);  
            break;  
        }  
        return [dtype, dataoffset - offset, typeconvert(readdata)];  
    };  
    return _unserialize(data, 0)[2];  
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
   
        
    function prepareData(formData, locData, pracData, resultsData, questionnaireData, ghxinfo, postalcode,birthyear, lpId) {
      let retVal = {};
      
      
      if(lpId)
      var lp_id = lpId;
      else
      var lp_id = generateLPId();
      
      formData.forEach( item => {
        switch (item.name) {
          case 'balance':
            retVal.leadType = item.value;
            break;
          case 'first-name':
          case 'firstName':
            retVal.firstName = item.value;
            break;
          case 'last-name':
          case 'lastName':
            retVal.lastName = item.value;
            break;
          case 'email-address':
          case 'email':
            retVal.email = item.value;
            break;
          case 'phone-number':
          case 'phone':
            retVal.phone =item.value;
            break;
          default:
            // code
        }
      });
      
      
      return {
        ...retVal,
        id: lp_id,
        birthYear:birthyear,
        message: null,
        postalCode: postalcode,
        city: null,
        state: null,
        geoLatitude: 0,
        geoLongtitude: 0,
        timestamp: Date.now(),
        origin: {
            "consentInfo": {
              "firstName": retVal.firstName,
              "lastName": retVal.lastName
            },
            "submissionType": ghxinfo,
            "formName": "ContactProvider",
            "formUrl": $(location).attr('href')
        },
        screenerResults: resultsData,
        questionnaireResults:questionnaireData,
        locationInfo: locData,
        practiceInfo: pracData
      }
    }
    
    function generateLPId() {
      return `${Math.floor(Math.random() * 99999)}${Date.now()}`;
    }
  });
});