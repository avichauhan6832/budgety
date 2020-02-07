var budgetController = (function () {
    
})();

var UIController = (function(){

    var DOMString = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMString.inputType).value ,
                description: document.querySelector(DOMString.inputDescription).value,
                value: document.querySelector(DOMString.inputValue).value
            }
        },

        getDOMString: function() {
            return DOMString
        }
    }

})() ;

var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMString();
        
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 && event.which === 13) {
                ctrlAddItem();
            }
        });
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    };    

    var ctrlAddItem = function() {
        var input = UICtrl.getInput();
    };

    return {
        init: function() {
            console.log("Application started...");
            setupEventListeners();
        }
    }   

})(budgetController, UIController);

controller.init();















