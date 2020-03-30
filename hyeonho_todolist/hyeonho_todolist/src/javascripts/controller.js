(function ( window ) {
    function Controller ( model, view ) {
        this.model = model;
        this.view  = view;
        this.init();
        this.addEvents();
    }
    
    Controller.prototype.init = function () {
        var that     = this;
        var listItem = this.model.get();
        if ( !listItem ) {
            return;
        }
        Object.keys(listItem).forEach(function ( key, i ) {
            that.view.render('addItem', listItem[ key ]);
            that.view.addEvent('toggleCheck', function ( id, checked ) {
                that.toggleCheck(id, checked);
            }, { id: key });
            that.view.addEvent('removeItem', function ( id ) {
                that.removeItem(id);
            }, { id: key });
            that.view.addEvent('editItem', function ( id, text ) {
                that.editItem(id, text);
            }, { id: key, text : listItem[key].text });
        });
    };
    
    Controller.prototype.addEvents = function () {
        var that = this;
        this.view.addEvent('addItem', function ( value ) {
            that.addItem(value);
        });
        //        this.view.addEvent('toggleCheck', function ( item ) {
        //            that.toggleCheck(item.id, item.checked);
        //        });
        //        this.view.bind('removeItem', function ( item ) {
        //            that.removeItem(item.id);
        //        });
    };
    
    Controller.prototype.addItem = function ( value ) {
        var that = this;
        
        if ( value.trim() === '' ) {
            return;
        }
        
        that.model.create(value, function ( newItem ) {
            that.view.render('clearInput');
            that.view.render('addItem', newItem);
            that.view.addEvent('toggleCheck', function ( id, checked ) {
                that.toggleCheck(id, checked);
            }, { id: newItem.id });
            that.view.addEvent('removeItem', function ( id ) {
                that.removeItem(id);
            }, { id: newItem.id });
        });
    };
    
    Controller.prototype.removeItem = function ( id ) {
        var that = this;
        that.model.remove(id, function () {
            that.view.render('removeItem', { id: id });
        });
    };
    
    Controller.prototype.editItem = function ( id, text ) {
        var that = this;
        that.model.update(id, { text : text }, function () {
            that.view.render('editItem', { id: id, text : text });
        });
    };
    
    Controller.prototype.toggleCheck = function ( id, checked ) {
        var that = this;
        that.model.update(id, { checked: checked });
    };
    
    // Export to window
    window.app            = window.app || {};
    window.app.Controller = Controller;
})(window);