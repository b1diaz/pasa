function init_plugins(){
    $(document).ready(function () {
    //------- Funcion ocultar sidebar con boton menu ------------
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar,.nav-header, #container').toggleClass('active');
        });
        
    /* ------------
    $('#formRegistro').submit(function(e) {
        e.preventDefault();
        // Coding
        if($('#registroCondiciones').prop('checked')){
            $('#modalLogin').modal('toggle'); //or  $('#IDModal').modal('hide');
            return false;
            }
        });*/
    });
}
function ocultarSidebar() {
    $(document).ready(function(){
    //------- Funcion ocultar sidebar con click fuera de este ------------
        $( "#container" ).click(function() {
          if($('#sidebar').hasClass('active')){
            $('#sidebar,.nav-header, #container').toggleClass("active");
          }
          
        });
      });
}

