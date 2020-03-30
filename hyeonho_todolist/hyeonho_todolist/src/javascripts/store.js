(function ( window ) {
    window.app = window.app || {};
    
    function Store () {
        this.store = window.localStorage;
    }
    
    Store.prototype.getItem = function () {
        return JSON.parse(this.store.getItem('listItem'));
    };
    
    Store.prototype.setItem = function ( payload ) {
        this.store.setItem('listItem', JSON.stringify(payload));
    };
    
    window.app.Store = Store;
})(window);