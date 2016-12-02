phonon.options({
    navigator: {
        defaultPage: 'home',
        animatePages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: './tpl'
    },
    i18n: null // for this example, we do not use internationalization
});


var app = phonon.navigator();

/**
 * The activity scope can be defined inside the page tag, but it is not necessary in our example.
*/
app.on({page: 'home', preventClose: false, content: null});

/**
 * On the second page, we define the activity scope inside pagetwo.tag
 * You can use readyDelay to add a small delay between the OnCreate and the OnReady callbacks
 * preventClose is true, so we have to define the close event (see pagetwo.tag)
*/
app.on({page: 'pagetwo', preventClose: true, content: null, readyDelay: 1});
app.on({page: 'pizza', preventClose: true, content: null});

// Let's go!
app.start();


phonon.question = function (text, title) {
    var question = riot.mount('question')[0]
    console.log('question', question)

    var myDialog = phonon.dialog('#dialog-question');
    console.log(question, myDialog)
    myDialog.open()
    question.opts.text = text
    question.opts.title = title
    question.update()
    return myDialog
}
