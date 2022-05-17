function cloud() {
    var art = String.raw`
            .-~~~-.             
    .- ~ ~-(       )_ _         
   /                     ~ -.   
  |                           \ 
   \                         .' 
     ~- . _____________ . -~    
    `
    return(  
        <div>
            <pre class="cloud">{art}</pre>
        </div>
    )
}
export{cloud as default};
/*
          .-~~~-.
  .- ~ ~-(       )_ _
 /                     ~ -.
|                           \
 \                         .'
   ~- . _____________ . -~
   */