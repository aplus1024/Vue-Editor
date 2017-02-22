CKEDITOR.editorConfig = function( config ) {
  config.toolbar = [
    { name: 'styles', items: ['Format'] },
    { name: 'basicstyles', items: [ 'Bold', 'Italic' ] },
    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList' ] },
    { name: 'colors', items: [ 'TextColor' ] },
    { name: 'font', items: [ 'FontSize' ] },
    { name: 'links', items: [ 'Link', 'Unlink' ] },
    { name: 'insert', items: [ 'Table' ] },
    //{ name: 'document', items: [ 'Source' ] }
    //{ name: 'colors', items: [ 'Bold', 'Italic' ] },
    //{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    //{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
    //{ name: 'links', groups: [ 'links' ] },
    //{ name: 'insert', groups: [ 'insert' ] },
    //{ name: 'forms', groups: [ 'forms' ] },
    //{ name: 'tools', groups: [ 'tools' ] },
    //{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
    //{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    //{ name: 'others', groups: [ 'others' ] },
    //{ name: 'colors', groups: [ 'colors' ] },
    //{ name: 'about', groups: [ 'about' ] }
  ],

  config.floatSpaceDockedOffsetY = 10,

  config.removePlugins = 'dragdrop,basket'

  //config.removeButtons = 'Underline,Subscript,Superscript,Cut,Redo,Undo,Copy,Paste,PasteText,PasteFromWord,Styles,RemoveFormat,Scayt,Anchor,Image,HorizontalRule,SpecialChar,Maximize,Outdent,Indent,Blockquote,About';
}