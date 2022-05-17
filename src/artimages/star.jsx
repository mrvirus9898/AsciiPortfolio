function star() {
    var art = String.raw`
 .       . 
 +  :      .            
           :       _    
       .   !   '  (_)   
          ,|.'          
-  -- ---(-O-)--- --  - 
         ,'|' .         
       ,   !    .       
           :       :  " 
           .     --+--  
 .:        .       !    
    `
    return(  
        <div>
            <pre class="star">{art}</pre>
        </div>
    )
}
export{star as default};

/*

   .       . 
 +  :      .
           :       _
       .   !   '  (_)
          ,|.' 
-  -- ---(-O-`--- --  -
         ,`|'`.
       ,   !    .
           :       :  " 
           .     --+--
 .:        .       !

 */