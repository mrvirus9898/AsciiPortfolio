
function scrolldown() {
    var art = String.raw`
    ________                  ___________   ________                        
    __  ___/_____________________  /__  /   ___  __ \________      ________ 
    _____ \_  ___/_  ___/  __ \_  /__  /    __  / / /  __ \_ | /| / /_  __ \
    ____/ // /__ _  /   / /_/ /  / _  /     _  /_/ // /_/ /_ |/ |/ /_  / / /
    /____/ \___/ /_/    \____//_/  /_/      /_____/ \____/____/|__/ /_/ /_/ 
    `
    return(  
        <div>
            <pre class="asciiworldbanner">
            {art}</pre>
            </div>
    )
}

export{scrolldown as default};

/*
________                  ___________   ________                        
__  ___/_____________________  /__  /   ___  __ \________      ________ 
_____ \_  ___/_  ___/  __ \_  /__  /    __  / / /  __ \_ | /| / /_  __ \
____/ // /__ _  /   / /_/ /  / _  /     _  /_/ // /_/ /_ |/ |/ /_  / / /
/____/ \___/ /_/    \____//_/  /_/      /_____/ \____/____/|__/ /_/ /_/ 
*/