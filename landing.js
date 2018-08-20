var Comida = {
    
    $btnDesayuno : $("#btnDesayuno"),
    $btnComida : $("#btnComida"),
    $btnCena : $("#btnCena"),
    
    init : function(){
        
        
        this.$btnDesayuno.click(function(){
            //alert("hola");
        });
        
        this.$btnComida.click(function(){
            //alert("adios");
        });
    }
    
};

$(document).ready(function(){
    
    Comida.init();
    
});