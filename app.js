var budgetController = (function () {

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    };

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems : {
            exp: [],
            inc: []
        },
        totals : {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, des, val) {
            console.log("addItem running ...");
            var newItem, ID;

            if(data.allItems[type].length > 0)
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            else
                ID = 0;
            console.log(ID);
            console.log(des);
            console.log(val);

            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
        },
        testing: function() {
            console.log(data);
        }
    };
    
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
        // console.log(input.type);
        // console.log(input.description);
        // console.log(input.value);
        budgetController.addItem(input.type, input.description, input.value);
    };

    return {
        init: function() {
            console.log("Application started...");
            setupEventListeners();
        }
    }   

})(budgetController, UIController);

controller.init();















