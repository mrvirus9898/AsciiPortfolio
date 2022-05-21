
function scrolldown() {
    var art = String.raw`
    .    
    .    
  . ;.   
   .;    
  ;;.    
  ;.;;   
  ;;;;.  
  ;;;;;  
  ;;;;;  
  ;;;;;  
  ;;;;;  
  ;;;;;  
..;;;;;..
 ':::::' 
   ':'   
    `
    return(  
        <div>
            <pre class="scrolldown">
            {art}</pre>
            </div>
    )
}

export{scrolldown as default};

/*
     .
       .
   . ;.
    .;
     ;;.
   ;.;;
   ;;;;.
   ;;;;;
   ;;;;;
   ;;;;;
   ;;;;;
   ;;;;;
 ..;;;;;..
  ':::::'
    ':`
    */