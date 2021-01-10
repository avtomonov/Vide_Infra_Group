import $ from "jquery";
import validate from "jquery-validation";

$.fn.formValidate = function (data) {
    if (data === "destroy") {
       return this.each(function(){
         var validator = $(this).validate();
         validator.destroy()
       })
    } else {
        $.validator.addMethod("notnumbers", function(value, element) {
        	if(!/[^\+\d]/.test(value)){
        		return true
        	}else{
        		return false
        	}
		})
		$.validator.messages.notnumbers = 'Invalid phone number';


        var validate = this.validate({
            rules: {
            	phone: {
            		minlength: 5,
            		notnumbers: true
            		
            	},
            	phone2: {
            		minlength: 5,
            		notnumbers: true, 
            		required: false
            		
            	},
                name: {
                    required: true
                }
            },
            submitHandler: function(form,e) {
            	e.preventDefault();
            	form.querySelectorAll('[data-success]')[0].style['display'] = 'flex';
            	$(form.querySelectorAll('[data-success]')[0]).click(function(){
            		$(this).hide()
            	})
            	return false;
        	}
        });

    }
};
