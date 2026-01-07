
class ApiClient{
    constructor()
    {
        this.baseUrl="http://localhost:3000/api/v1/users";
        this.defaultHeaders={
            "Content-Type": "application/json",
            "Accept":"application/json",
         };
    }

    async fetchApi(path,options)
    {
        const url=`${this.baseUrl}${path}`;
        const headers={ ...options,headers:{...this.defaultHeaders},credentials:'include'};
        
        try{
             const data=await fetch(url,headers);
            if(!data.ok)
            {
                throw new Error("fetch failed");
            }
            return data.json();
        }
        catch(err)
        {
            console.log("fetch failed");
            throw err;
        }
        
       
    }

    async  signup({name,email,password})
    {
        return await this.fetchApi("/register",{method:"POST",body:JSON.stringify({name,email,password})});
    }

    async  login({email,password})
    {
        return await this.fetchApi("/login",{method:"POST",body:JSON.stringify({email,password})});
    }

    
}

const ApiClients=new ApiClient();
export default ApiClients;

