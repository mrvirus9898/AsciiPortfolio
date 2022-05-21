function hschemblock() {
    var art = String.raw`
   ___  _                _        _             
--|  _>| |_  ___ ._ _ _ <_> ___ _| |_ _ _  _ _ --
| | <__| . |/ ._>| ' ' || |<_-<  | | | '_>| | | |
| '___/|_|_|\___.|_|_|_||_|/__/  |_| |_|  '_. | |
|                                         <___' |
|                                               |
|                          ---           ---    |
|    Characterization      |/             \|    |
|    Organic Chemistry     ||    H        ||    |
|    Chemical Sampling     ||    |        ||    |
|    Inorganic Chemistry   ||H - C - O'Na+||    |
|    DOT/IATA Regulations  ||    |        ||    |
|    Hazard Analysis       ||    H        ||    |
|    Water Treatment       ||             ||    |
|                          |\_____________/|    |
|                                               |
-------------------------------------------------
    `
    return(  
        <div>
            <pre class="block">
            {art}</pre>
            </div>
    )
}

export{hschemblock as default};

/*
   ___  _                _        _             
--|  _>| |_  ___ ._ _ _ <_> ___ _| |_ _ _  _ _ --
| | <__| . |/ ._>| ' ' || |<_-<  | | | '_>| | | |
| '___/|_|_|\___.|_|_|_||_|/__/  |_| |_|  '_. | |
|                                         <___' |
|                                               |
|                          ---           ---    |
|    Characterization      |/             \|    |
|    Organic Chemistry     ||    H        ||    |
|    Chemical Sampling     ||    |        ||    |
|    Inorganic Chemistry   ||H - C - O'Na+||    |
|    DOT/IATA Regulations  ||    |        ||    |
|    Hazard Analysis       ||    H        ||    |
|    Physical Chemistry    ||             ||    |
|                          |\_____________/|    |
|                                               |
-------------------------------------------------

---           --- 
|/             \|
||    H        ||
||    |        ||
||H - C - O'Na+||
||    |        ||
||    H        ||
||             ||
||             ||
||             ||
----------------- 
⌬ ⌬

*/