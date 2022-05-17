function asciibanner(ltr) {
    var art = String.raw`
 _______  _______  _______ __________________            _______  _______  _        ______  
(  ___  )(  ____ \(  ____ \\__   __/\__   __/  |\     /|(  ___  )(  ____ )( \      (  __  \ 
| (   ) || (    \/| (    \/   ) (      ) (     | )   ( || (   ) || (    )|| (      | (  \  )
| (___) || (_____ | |         | |      | |     | | _ | || |   | || (____)|| |      | |   ) |
|  ___  |(_____  )| |         | |      | |     | |( )| || |   | ||     __)| |      | |   | |
| (   ) |      ) || |         | |      | |     | || || || |   | || (\ (   | |      | |   ) |
| )   ( |/\____) || (____/\___) (______) (___  | () () || (___) || ) \ \__| (____/\| (__/  )
|/     \|\_______)(_______/\_______/\_______/  (_______)(_______)|/   \__/(_______/(______/ 
    `
    return(  
        <div>
            <pre class="asciiworldbanner">{art}</pre>
        </div>
    )
}


export{asciibanner as default};

/*

          <h3><pre class="village"> _______  _______  _______ __________________            _______  _______  _        ______ </pre></h3> 
          <h3><pre class="village">(  ___  )(  ____ \(  ____ \\__   __/\__   __/  |\     /|(  ___  )(  ____ )( \      (  __  \</pre></h3>                                                                                                  
          <h3><pre class="village">| (   ) || (    \/| (    \/   ) (      ) (     | )   ( || (   ) || (    )|| (      | (  \  )</pre></h3> 
          <h3><pre class="village">| (___) || (_____ | |         | |      | |     | | _ | || |   | || (____)|| |      | |   ) |</pre></h3> 
          <h3><pre class="village">|  ___  |(_____  )| |         | |      | |     | |( )| || |   | ||     __)| |      | |   | |</pre></h3> 
          <h3><pre class="village">| (   ) |      ) || |         | |      | |     | || || || |   | || (\ (   | |      | |   ) |</pre></h3> 
          <h3><pre class="village">| )   ( |/\____) || (____/\___) (______) (___  | () () || (___) || ) \ \__| (____/\| (__/  )</pre></h3> 
          <h3><pre class="village">|/     \|\_______)(_______/\_______/\_______/  (_______)(_______)|/   \__/(_______/(______/ </pre></h3>

          function getLetter(ltr){
    switch(ltr){
        case 'W':
            return(
            <div>
                <h3><pre class="village">         </pre></h3> 
                <h3><pre class="village">|\     /|</pre></h3>                                                                                                  
                <h3><pre class="village">| )   ( |</pre></h3> 
                <h3><pre class="village">| | _ | |</pre></h3> 
                <h3><pre class="village">| |( )| |</pre></h3> 
                <h3><pre class="village">| || || |</pre></h3> 
                <h3><pre class="village">| () () |</pre></h3> 
                <h3><pre class="village">(_______)</pre></h3>
            </div>
            );
        case 'A':
            return(
                <div>
                    <h3><pre class="village"> _______ </pre></h3> 
                    <h3><pre class="village">(  ___  )</pre></h3>                                                                                                  
                    <h3><pre class="village">| (   ) |</pre></h3> 
                    <h3><pre class="village">| (___) |</pre></h3> 
                    <h3><pre class="village">|  ___  |</pre></h3> 
                    <h3><pre class="village">| (   ) |</pre></h3> 
                    <h3><pre class="village">| )   ( |</pre></h3> 
                    <h3><pre class="village">|/     \|</pre></h3>
                </div>
            );
        case 'S':
            return(
                <div>
                    <h3><pre class="village"> _______ </pre></h3> 
                    <h3><pre class="village">(  ____ \</pre></h3>                                                                                                  
                    <h3><pre class="village">| (    \/</pre></h3> 
                    <h3><pre class="village">| (_____ </pre></h3> 
                    <h3><pre class="village">(_____  )</pre></h3> 
                    <h3><pre class="village">      ) |</pre></h3> 
                    <h3><pre class="village">/\____) |</pre></h3> 
                    <h3><pre class="village">\_______)</pre></h3>                
                </div>
                );
        case 'C':
            return(<div>
                <h3><pre class="village"> _______ </pre></h3> 
                <h3><pre class="village">(  ____ \</pre></h3>                                                                                                  
                <h3><pre class="village">| (    \/</pre></h3> 
                <h3><pre class="village">| |      </pre></h3> 
                <h3><pre class="village">| |      </pre></h3> 
                <h3><pre class="village">| |      </pre></h3> 
                <h3><pre class="village">| (____/\</pre></h3> 
                <h3><pre class="village">(_______/</pre></h3>
            </div>);
        case 'I':
            return(<div>
                <h3><pre class="village">_________</pre></h3> 
                <h3><pre class="village">\__   __/</pre></h3>                                                                                                  
                <h3><pre class="village">   ) (   </pre></h3> 
                <h3><pre class="village">   | |   </pre></h3> 
                <h3><pre class="village">   | |   </pre></h3> 
                <h3><pre class="village">   | |   </pre></h3> 
                <h3><pre class="village">___) (___</pre></h3> 
                <h3><pre class="village">\_______/</pre></h3>
            </div>);
        case 'O':
            return(<div>
                <h3><pre class="village"> _______ </pre></h3> 
                <h3><pre class="village">(  ___  )</pre></h3>                                                                                                  
                <h3><pre class="village">| (   ) |</pre></h3> 
                <h3><pre class="village">| |   | |</pre></h3> 
                <h3><pre class="village">| |   | |</pre></h3> 
                <h3><pre class="village">| |   | |</pre></h3> 
                <h3><pre class="village">| (___) |</pre></h3> 
                <h3><pre class="village">(_______)</pre></h3>
            </div>);
        case 'R':
            return(<div>
                <h3><pre class="village"> _______ </pre></h3> 
                <h3><pre class="village">(  ____ )</pre></h3>                                                                                                  
                <h3><pre class="village">| (    )|</pre></h3> 
                <h3><pre class="village">| (____)|</pre></h3> 
                <h3><pre class="village">|     __)</pre></h3> 
                <h3><pre class="village">| (\ (   </pre></h3> 
                <h3><pre class="village">| ) \ \__</pre></h3> 
                <h3><pre class="village">|/   \__/</pre></h3>
            </div>);
        case 'D':
            return(<div>
                <h3><pre class="village"> ______  </pre></h3> 
                <h3><pre class="village">(  __  \ </pre></h3>                                                                                                  
                <h3><pre class="village">| (  \  )</pre></h3> 
                <h3><pre class="village">| |   ) |</pre></h3> 
                <h3><pre class="village">| |   | |</pre></h3> 
                <h3><pre class="village">| |   ) |</pre></h3> 
                <h3><pre class="village">| (__/  )</pre></h3> 
                <h3><pre class="village">(______/ </pre></h3>
            </div>);
        case 'L':
            return(<div>
                <h3><pre class="village"> _       </pre></h3> 
                <h3><pre class="village">( \      </pre></h3>                                                                                                  
                <h3><pre class="village">| (      </pre></h3> 
                <h3><pre class="village">| |      </pre></h3> 
                <h3><pre class="village">| |      </pre></h3> 
                <h3><pre class="village">| |      </pre></h3> 
                <h3><pre class="village">| (____/\</pre></h3> 
                <h3><pre class="village">(_______/</pre></h3>
            </div>);
    }
}


          */