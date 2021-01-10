import $ from "jquery";
$.fn.showBlock = function (data) {
     if (data === "destroy") {
       return this.each(function(){
         $(this)[0].outerHTML = $(this)[0].outerHTML;
       })
    } else {

        function elementInViewport(el){
            var bounds = el.getBoundingClientRect();
            var offset = 100;
            return (
                (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
                (window.innerHeight - offset - bounds.top > 0) && // Выше нижней
                (bounds.left + bounds.width > 0) && // Правее левой
                (window.innerWidth - bounds.left > 0)// Левее правой
            );
        }

        document.addEventListener("scroll", (e) => {
            var el = this[0];
            var inViewport = elementInViewport(el);
            if(inViewport){
                this.css({'opacity':'1', 'transition': '1s'});
            }else{
                this.css({'opacity':'0', 'transition': '1s'})
            }
        })


    }

   
};

