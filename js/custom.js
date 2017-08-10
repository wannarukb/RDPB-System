$(document).ready(function(){
  
    
    
    var nextTabID = 1;
    
  
     $('.nextBtn').click(function(){
        var curStep = $('#form-wizard .active').find('a'),
            curStepBtn = curStep.attr("href");
            curStep.removeClass('active');
        var currentStep = curStepBtn.replace('#tab-','');
        var currentID = parseInt(currentStep);
        if(currentID == 3){
             nextTabID = 1;
         }
        else{
             nextTabID = currentID+1; 
        }
       
        var nextStep = '#tab-' + nextTabID;
        console.log('nextStep > '+ nextStep);
         
         $('#form-wizard a[href="'+nextStep+'"]').tab('show');
         
    });
  
    
});


$(function() {

    function toggleChevron(e) {
        $(e.target)
                .prev('.section-title')
                .find(".fa")
                .toggleClass('rotate-icon');
    }
    
    $('.section').on('hide.bs.collapse', toggleChevron);
    $('.section').on('show.bs.collapse', toggleChevron);
})   
