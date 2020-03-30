(function ( window ) {
    var model;
    function Todo () {
        this.store      = new app.Store();
        this.model      = new app.Model(this.store);
        this.template   = new app.Template();
        this.view       = new app.View(this.template);
        this.controller = new app.Controller(this.model, this.view);
    }
    
    var todo = new Todo();
    
})(window);