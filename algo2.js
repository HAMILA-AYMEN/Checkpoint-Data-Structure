//Problem 1, Solution 1

function sum(arr1,arr2){
    
    let sum=0
    arr1.sort();
    arr2.sort();
    
   

   let i = 0, j = 0, k = 0;
        while (i < arr1.length && j < arr2.length) {
   
           
            if (arr1[i] < arr2[j]) {
                sum=sum+arr1[i]
                i++;
                k++;
            }
            else if (arr2[j] < arr1[i]) {
                sum=sum+arr2[j]
                
                k++;
                j++;
            }
   
           
            else {
                i++;
                j++;
            }
        }
   
        
    return sum
    }


//Problem 1, Solution 2




//Problem 2, Solution 1
    function sum(arr1,arr2){
    
        let sum=0
        arr1.sort();
        arr2.sort();
        
       
    
       for(let i=0;i<arr1.length;i++){
    
            for(let j=0;j<arr2.length;j++){
                if(arr1[i]===arr2[j]){
                    sum=sum+arr1[i]
                    sum=sum+arr2[j]
                }
            }
       }
            
        return sum
        }







//Problem 2, Solution 2


 function sum(arr1,arr2)
{
      let sum = 0;
     
    
    let hash = new Map();
    
    
    for(let i = 0; i <arr1.length; i++)
    {
        if (!hash.has(arr1[i]))
        {
            hash.set(arr1[i], 1);
        }
        else
        {
            hash.set(arr1[i], hash.get(arr1[i]) + 1);
        }
    }
    
    
    for(let i = 0; i <arr2.length; i++)
    {
        if (!hash.has(arr2[i]))
        {
            hash.set(arr2[i], 1);
        }
        else
        {
            hash.set(arr2[i], hash.get(arr2[i]) + 1);
        }
    }
    
    
  
    for(let [key, value] of hash.entries())
    {
        if(value == 2)
        {
            sum += key * 2;
        }
    }
    return sum;
}