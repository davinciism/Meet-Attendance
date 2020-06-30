document.addEventListener('DOMContentLoaded', function() {

    console.log("test");

    //Side Menu for Mobile View
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav, {
        edge: 'left',
        draggable: true,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    });


    //Login Bottom Sheet Modal
    var modal = document.getElementById('modal1');
    var modalInstance = M.Modal.init(modal, {dismissable: false});
    var openModal1 = document.getElementById('openModal1').addEventListener('click', () => {
        modalInstance.open();
    });
    var openModal2 = document.getElementById('openModal2').addEventListener('click', () => {
        modalInstance.open();
    });
    var openModal3 = document.getElementById('openModal3').addEventListener('click', () => {
        modalInstance.open();
    });

});


