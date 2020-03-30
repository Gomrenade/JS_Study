(function ( window ) {
    var utils = {
        makeid : function ( length ) {
            var text     = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            
            for ( var i = 0; i < length; i++ ) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            
            return text;
        }
    };
    
    window.app = window.app || {};
    window.app.utils = utils;
})(window);