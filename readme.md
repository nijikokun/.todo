              _             _       
        ____ | |           | |      
       / __ \| |_  ___   __| | ___  
      / / _` | __|/ _ \ / _` |/ _ \ 
     | | (_| | |_| (_) | (_| | (_) |
      \ \__,_|\__|\___/ \__,_|\___/ 
       \____/       A .todo syntax
       
@todo is a file format syntax created for todo-lists and minimalists.

I created this when making a project and on windows all todo-list programs are bulky, and don't support exporting.
So I created @todo, a syntax for .todo files.

**Wait, if this is a syntax.. why is it on github?**

Good question, I put this on github because when I made @todo syntax, I created a notepad++ language file to support it. 
I am releasing that along with the languages details.

The n++ user language supports both light displays and dark displays, tweaking may be needed for custom stylers.

To use it, Click the icon in your toolbar that has a lightning bolt coming from an application > click import > navigate to the xml > open.
It should now be imported, to use from now on, click Language > look near the bottom for @todo, it will automatically parse .todo files.

**Language Semantics**

The at symbol (@) signifies a category, currently @todo n++ syntaxhighlighter supports the following: (In no order)

    @todo, @done, @soon, @in-progress, @completed, @working, @unfinished, @uncompleted

The hash tag (#) allows you to tag specific words to easily identify them like so:

    Created a #language parser for @todo
    
For headers, put a # before your word like so:

    # To be done
    
For conversion to .md as seen on iConomy simply place 4 spaces before your @tagged lines.

*Commenting*

To create comments, all you have to do is use the double-dash (--) or block comments:

    -/
      this is a comment
    /-
