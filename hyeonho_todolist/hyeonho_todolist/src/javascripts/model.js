(function ( window ) {
    window.app = window.app || {};
    var utils  = window.app.utils || {};
    
    function Model ( store, view ) {
        this.store = store;
        this.view  = view;
    }
    
    Model.prototype.create = function ( value, cb ) {
        // 1. 모델 만들기
        var newItem            = {
            id     : 'todoitem_' + utils.makeid(10),
            text   : value,
            checked: false
        };
        // 2. 로컬스토리지에서 모델 데이터 불러와서(getItem)
        var listItem           = this.get() || {};
        // 3. 불러온 모델 데이터에 새로운 모델 데이터 추가
        listItem[ newItem.id ] = newItem;
        // 4. 로컬스토리지에 저장(setItem)
        this.save(listItem);
        cb && cb(newItem);
    };
    
    Model.prototype.save = function ( payload ) {
        // 서버 API 보냄(저장)
        // 우리는 서버가 없으니까 로컬스토리지에 저장
        this.store.setItem(payload);
    };
    
    Model.prototype.get = function () {
        return this.store.getItem();
    };
    
    Model.prototype.update = function ( id, attr, cb ) {
        var items   = this.get();
        var item    = items[ id ];
        items[ id ] = Object.assign(item, attr);
        this.save(items);
        cb && cb();
    };
    
    Model.prototype.remove = function ( id, cb ) {
        var items = this.get();
        delete items[ id ];
        this.save(items);
        cb && cb();
    };
    
    window.app.Model = Model;
})(window);