/*
 * @todo SyntaxHighlighter Custom Brush
 *
 * @author: Nijikokun (@nijikokun) <nijikokun@gmail.com>
 * @copyright: 2011 Nijikokun
 * @version: 1.0
 *
 * @locations:
 * http://nijikokun.com/projects/@todo
 * https://github.com/Nijikokun/.todo
 */
SyntaxHighlighter.brushes.Custom = function(){
    var funcs = /\B(@todo|@unfinished|@uncompleted)/gmi;
    var keywords = /\B(@done|@finished|@completed)/gmi;
    var operators = /\B(@soon|@in-progress|@currently)/gmi;

    this.regexList = [
        { regex: /\((.*)\)$/gm,                       css: 'color2' },
        { regex: /--(.*)$/gm,                         css: 'comments' },
        { regex: /((^|\s)#(\w+)|(^|\s)#)/g,           css: 'color1' },
        { regex: new RegExp(funcs),                   css: 'keyword' },
        { regex: new RegExp(operators),               css: 'variable' },
        { regex: new RegExp(keywords),                css: 'value' }
    ];
};

SyntaxHighlighter.brushes.Custom.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Custom.aliases = ['todo', '@todo', '.todo', '2do', '.td', '@td', 'td'];