function welcometo() {
    var art = String.raw`
___       __    ______                                 ________      
__ |     / /_______  /__________________ ________      ___  __/_____ 
__ | /| / /_  _ \_  /_  ___/  __ \_  __ '__ \  _ \     __  /  _  __ \
__ |/ |/ / /  __/  / / /__ / /_/ /  / / / / /  __/     _  /   / /_/ /
____/|__/  \___//_/  \___/ \____//_/ /_/ /_/\___/      /_/    \____/ 
    `
    return(  
        <div>
            <pre class="welcometo">{art}</pre>
            </div>
    )
}
export{welcometo as default};
/*
___       __    ______                                 ________      
__ |     / /_______  /__________________ ________      ___  __/_____ 
__ | /| / /_  _ \_  /_  ___/  __ \_  __ `__ \  _ \     __  /  _  __ \
__ |/ |/ / /  __/  / / /__ / /_/ /  / / / / /  __/     _  /   / /_/ /
____/|__/  \___//_/  \___/ \____//_/ /_/ /_/\___/      /_/    \____/ 
*/