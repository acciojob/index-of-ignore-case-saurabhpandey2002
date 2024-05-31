function indexOfIgnoreCase(s1, s2) {
    // write your code here
      s1=s1.toLowerCase();
      s2=s2.toLowerCase();
      let substringans=[];
      let result=0;
      for(let i=0;i<s1.length-1;i++)
          {
              for(let j=i;j<s1.length;j++)
                  {
                      substringans.push(s1.substring(i,j+1));
                  }
          }
          let ans=substringans.filter((ele)=>
          {
            return ele == s2;
          })
        if(ans[0]==undefined)
        {
            result=-1;
        }
        else{
            for(let i=0;i<s1.length;i++)
            {
                if(s2.charAt(0)==s1.charAt(i)&& s2.charAt(1)==s1.charAt(i+1))
                {
                    result=i;
                }
            }
        }
        return result;
  }

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));