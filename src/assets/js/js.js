function init_plugins(){
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar,.nav-header, #container').toggleClass('active');
        });                
    });
}