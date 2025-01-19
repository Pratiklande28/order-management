//generate sample javascript code
//Add signup Functionality
export const signup= async (email , password) => {
    try {
        const response = await fetch('http://localhost:3000/signup',{
        method : 'POST',
    headers:{
'Content-Type':'applicatin/json',
    },
    body : JSON.stringify ({email , password}),
});
const data = await response.json();
return data;
    } catch (error){
        console.error('Error signin up : ', error);

    }
        

    };
/**add signup Exceptions */











