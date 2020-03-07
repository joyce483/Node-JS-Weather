//callback is used in asynchronous instead of a return statement.

const add = ((a,b,c)=>{
    setTimeout(()=>{
        c(a+b);
    },7000);
    
});

add(2,1,(c)=>{
    console.log(c);
});

