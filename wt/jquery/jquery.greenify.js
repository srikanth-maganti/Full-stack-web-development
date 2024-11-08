(function($){
    // $.fn.greenify=function(){
    //     this.css("color","red");
    // }
    $.fn.greenify= function() {
        return this.each(function() {
        //    alert('Tag Name:"' + $(this).prop("tagName") + '".');
             $(this).css("background-color","green");
        });
     };

}(jQuery));


<p class='btn text-primary bg-prim'>gfhjhkjjh</p>