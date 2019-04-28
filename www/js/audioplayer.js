
        var noOfRepetitions = 3;
        // Getting audio file name
        $('.audioplayer a').click(function() {
            window.filename = $(this).attr('filepath');
            // alert(filename);
        });


        function repeat3test()
        {
            myAudio = new Audio(filename); 
            myAudio.addEventListener('ended', function() {
                noOfRepetitions = noOfRepetitions-1;
                if (noOfRepetitions > 0) {
                    this.currentTime = 0;
                    this.play()};
                }, false);
                myAudio.play();
        }

        function repeatunlimited()
        {
            myAudio = new Audio(filename); 
            myAudio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            myAudio.play();
        }