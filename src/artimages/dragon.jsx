
function dragon() {
    var art = String.raw`
       (  )   /\   _                 (                                           
        \ |  (  \ ( \.(               )                      _____               
      \  \ \  '  '   ) \             (  ___                 / _   \              
     (_'    \+   . x  ( .\            \/   \____-----------/ (o)   \_            
    - .-               \+  ;          (  O                           \____       
                              )        \_____________  '              \  /       
    (__                +- .( -'.- <. - _  VVVVVVV VV V\                 \/       
    (_____            ._._: <_ - <- _  (--  _AAAAAAA__A_/                  |     
      .    /./.+-  . .- /  +--  - .     \______________//_              \_______ 
      (__ ' /x  / x _/ (                                  \___'          \     / 
     , x / ( '  . / .  /                                      |           \   /  
        /  /  _/ /    +                                      /              \/   
       '  (__/                                             /                  \  
    `
    return(  
        <div>
            <pre class="moon">
            {art}</pre>
            </div>
    )
}

export{dragon as default};

/*
   (  )   /\   _                 (     
    \ |  (  \ ( \.(               )                      _____
  \  \ \  `  `   ) \             (  ___                 / _   \
 (_`    \+   . x  ( .\            \/   \____-----------/ (o)   \_
- .-               \+  ;          (  O                           \____
                          )        \_____________  `              \  /
(__                +- .( -'.- <. - _  VVVVVVV VV V\                 \/
(_____            ._._: <_ - <- _  (--  _AAAAAAA__A_/                  |
  .    /./.+-  . .- /  +--  - .     \______________//_              \_______
  (__ ' /x  / x _/ (                                  \___'          \     /
 , x / ( '  . / .  /                                      |           \   /
    /  /  _/ /    +                                      /              \/
   '  (__/                                             /                  \
          */