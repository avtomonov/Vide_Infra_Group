import $ from "jquery";


$.fn.buttonFade = function (data) {
    var yPercentMousemove = 0,
        y = 0,
        self = this,
        backgroundColor = this.css("background-color"),
        elementOffsetTop = this[0].offsetTop,
        elementHeight = this.height(),
        minScale = data.minScale;

    if (data === "destroy") {
        $('[data-plugin="buttonFade"]').each(function () {
            $(this)[0].outerHTML = $(this)[0].outerHTML;
        });
        $('[data-plugin="buttonFade"]').removeAttr("style");
    } else {
        function mousemoveYScale() {
            y += yPercentMousemove - y;
            var scale = 1 - ((1 - minScale) * y) / 100;
            if (scale > 1) {
                scale = 1;
            }
            let gradientPercent = 100 - Math.round(y);
            let background = `linear-gradient(-90deg, ${backgroundColor} ${gradientPercent}%, ${backgroundColor} ${gradientPercent}%, rgba(255,255,255,1) ${gradientPercent}%)`;
            let translate = "scale(" + scale + ")";


            self.css({
                "-webit-transform": translate,
                "-moz-transform": translate,
                transform: translate,
                background: background,
            });

            window.requestAnimationFrame(mousemoveYScale);
        }

        document.addEventListener(
            "mousemove",
            (e) => {
                yPercentMousemove = ((e.clientY - (elementOffsetTop + elementHeight / 2)) / $(window).height()) * 100;
            },
            false
        );

        mousemoveYScale();
    }
};
