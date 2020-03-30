/*jshint laxbreak:true */
(function ( window ) {
    var htmlEscapes = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '\'': '&#x27;',
        '`' : '&#x60;'
    };
    
    var escapeHtmlChar = function ( chr ) {
        return htmlEscapes[ chr ];
    };
    
    var reUnescapedHtml    = /[&<>"'`]/g;
    var reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);
    
    var escape = function ( string ) {
        return (string && reHasUnescapedHtml.test(string))
            ? string.replace(reUnescapedHtml, escapeHtmlChar)
            : string;
    };
    
    function Template () {
        this.defaultTemplate =
            '<li class="todo-item" data-id="{{id}}">' +
            '    <input class="toggle" type="checkbox" {{checked}}/>' +
            '    <label>{{value}}</label>' +
            '    <button class="edit">' +
            '       <picture>' +
            '           <img src="../todolist/src/style/image/edit.svg"/>' +
            '       </picture>' +
            '    </button>' +
            '    <button class="destroy"></button>' +
            '</li>';
    }
    
    Template.prototype.createTemplate = function ( data ) {
        var i, l;
        var view = '';
        
        for ( i = 0, l = data.length; i < l; i++ ) {
            var template = this.defaultTemplate;
            var checked  = '';
            
            if ( data[ i ].checked ) {
                checked = 'checked';
            }
            
            template = template.replace('{{id}}', data[ i ].id);
            template = template.replace('{{value}}', escape(data[ i ].text));
            template = template.replace('{{checked}}', checked);
            
            view = view + template;
        }
        
        return view;
    };
    
    window.app          = window.app || {};
    window.app.Template = Template;
})(window);