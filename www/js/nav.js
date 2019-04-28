

        var config = {
            elementID: 'touchSwipe',
            elementWidth: 400, //px
            elementMaxWidth: 0.8, // *100%
            sideHookWidth: 44, //px
            moveSpeed: 0.2, //sec
            opacityBackground: 0.8,
            shiftForStart: 50, // px
            windowMaxWidth: 1024, // px
        }
        var touchSideSwipe = new TouchSideSwipe(config);

                $(function(){
                    var shrinkHeader = 20;
                    $(window).scroll(function() {
                        var scroll = getCurrentScroll();
                        var w = window.innerWidth;
                       
                            if ( scroll >= shrinkHeader ) {
                                $('.tss-label').hide();
                            } else 
                            {
                                $('.tss-label').show();

                            }
                    });
                    function getCurrentScroll() {
                        return window.pageYOffset || document.documentElement.scrollTop;
                    }
                });
