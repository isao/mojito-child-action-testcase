YUI.add('MultiAction', function(Y, NAME) {

    Y.mojito.controllers[NAME] = {
        index: function(ac) { ac.done('index action'); },
        inst0: function(ac) { ac.done('inst2 action'); },
        other: function(ac) { ac.done('other action'); }
    };

}, '0.0.1', {requires: []});
