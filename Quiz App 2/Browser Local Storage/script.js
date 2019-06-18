var quizController = (function() {

    // localStorage.setItem('data', [1, 2, 3, 4]);
    localStorage.setItem('data', JSON.stringify([1, 2, 3, 4]));
    localStorage.setItem('data', JSON.stringify({name: 'John'}));
    localStorage.removeItem('data');
    console.log(JSON.parse(localStorage.getItem('data')));
    // console.log(localStorage.getItem('data'));
    // console.log(typeof localStorage.getItem('data'));

})();

var UIController = (function() {

    

})();

var controller = (function(quizCtrl, UICtrl) {

    

})(quizController, UIController);











