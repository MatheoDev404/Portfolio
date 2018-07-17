$(()=>{

    //NAVIGATION
    //  The function to change the class
    var changeClass = function (r,className1,className2) {
        var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
        if( regex.test(r.className) ) {
            r.className = r.className.replace(regex,' '+className2+' ');
        }
        else{
            r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
        }
        return r.className;
    };	
    
    //  Creating our button in JS for smaller screens
    var menuElements = document.getElementById('menu');
    menuElements.insertAdjacentHTML('afterBegin','<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i></button>');
    
    //  Toggle the class on click to show / hide the menu
    document.getElementById('menutoggle').onclick = function() {
        changeClass(this, 'navtoogle active', 'navtoogle');
    }

    document.onclick = function(e) {
        var mobileButton = document.getElementById('menutoggle'),
        buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;
        
        if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
            changeClass(mobileButton, 'navtoogle active', 'navtoogle');
        }
    }

    //Smooth scroll
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1000);
            }
        }
    });
    
    // ABOUT
    // Get scroll position
    function progressBar (bar,max){
        var scroll = this.scrollY;
        if(scroll > 2400){
            $(bar).css("width", max);
        }
    }



    // scrolls events
    $( window ).scroll(function() {
        
        // console.log(this.scrollY);
        var scroll = this.scrollY;
        // animation page accueil
        if((scroll >= 10) && (scroll < 965) ){
        }
    
        // nav fix
        if (scroll >= 966) {
           $('#menu').css({
            'position': 'fixed',
            'z-index': 5,
            'top': 0,
            'left': 0,
            'width': '100%'
           })
        }else{
            $('#menu').css({
                'position': 'static'
            })
        }

        // jauges compétences
        progressBar(".html-css-bar","90%");
        progressBar(".js-bar","80%");
        progressBar(".jquery-bar","80%");
        progressBar(".angular-bar","30%");
        progressBar(".php-bar","50%");
        progressBar(".mysql-bar","50%");

    });
    
});