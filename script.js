 //random color generator
 
 document.querySelectorAll(".box").forEach(
    e=>{
        let col1=Math.random();
        col1=col1*256;
        col1=Math.floor(col1)+1;
        console.log(col1);
    
        let col2=Math.random();
        col2=col2*256;
        col2=Math.floor(col2)+1;
    
        let col3=Math.random();
        col3=col3*256;
        col3=Math.floor(col3)+1;
    
        //col
        let cola=Math.random();
        cola=cola*256;
        cola=Math.floor(cola)+1;
    
        let colb=Math.random();
        colb=colb*256;
        colb=Math.floor(colb)+1;
    
        let colc=Math.random();
        colc=colc*256;
        colc=Math.floor(colc)+1;
     

        e.style.backgroundColor=`rgb(${col1}, ${col2}, ${col3})`;
        e.style.color=`rgb(${cola}, ${colb}, ${colc})`
    }
 )