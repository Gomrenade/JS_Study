(function ( window ) {
    function View ( template ) {
        this.template = template;
        
        this.ENTER_KEY  = 13;
        this.ESCAPE_KEY = 27;
        
        this.todoListEl = document.querySelector('#todo-list');
        this.inputEl    = document.querySelector('#todo-input');
    }
    
    View.prototype.render = function ( viewCmd, params ) {
        var that         = this;
        var viewCommands = {
            clearInput: function () {
                that.inputEl.value = '';
            },
            addItem   : function () {
                var temp = document.createElement('temp');
                temp.innerHTML = that.template.createTemplate([params]);
                that.todoListEl.appendChild(temp.children[0]);
                temp = null;
            },
            removeItem : function () {
                var item = that.todoListEl.querySelector('[data-id=' + params.id + ']');
                that.todoListEl.removeChild(item);
            },
            editItem : function () {
                var item = that.todoListEl.querySelector('[data-id=' + params.id + ']');
                item.querySelector('label').innerText = params.text;
            },
        };
        viewCommands[ viewCmd ]();
    };
    
    View.prototype.getItemEl = function ( id ) {
        return this.todoListEl.querySelector('[data-id=' + id + ']');
    };
    
    View.prototype.addEvent = function ( eventName, handler, options ) {
        options = options || {};
        var that = this;
        switch (eventName) {
            case 'addItem':
                this.inputEl.addEventListener('keydown', function ( e ) {
                    if ( e.keyCode === that.ENTER_KEY ) {
                        e.preventDefault();
                        handler(this.value);
                    }
                });
                break;
            case 'toggleCheck':
                var itemEl = this.getItemEl(options.id);
                itemEl.querySelector('.toggle').addEventListener('click', function ( e ) {
                    var checked = this.checked;
                    handler(options.id, checked);
                });
                break;
            case 'removeItem':
                var itemEl = this.getItemEl(options.id);
                itemEl.querySelector('.destroy').addEventListener('click', function ( e ) {
                    handler(options.id);
                });
                break;
            case 'editItem':
                var itemEl = this.getItemEl(options.id);
                itemEl.querySelector('.edit').addEventListener('click', function () {
                    var text = prompt('수정할 내용을 입력하세요', options.text);
                    if ( !text ) {
                        return;
                    }
                    handler(options.id, text);
                });
                break;
            default:
                break;
            
        }
    };
    
    window.app      = window.app || {};
    window.app.View = View;
})(window);