/**
 * Braces Valid
 * Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: 
 * W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . "D(i{a}l[ t]o)n{e" => false . "A(1)s[O (n]0{t) 0}k" => false .
 */

 function bracesValid(str) {
     var braces = 0, parens = 0, brackets = 0, arr = [];
     for(var i = 0; i < str.length; i++) {
         switch(str[i]) {
            case "(":
                parens++;
                arr.push(str[i]);
                break;
            case ")":
                parens--;
                if(arr[arr.length-1] == "(") {
                    arr.pop();
                }
                break;
            case "{":
                braces++;
                arr.push(str[i]);
                break;
            case "}":
                braces--;
                if(arr[arr.length-1] == "{") {
                    arr.pop();
                }
                break;
            case "[":
                brackets++;
                arr.push(str[i]);
                break;
            case "]":
                brackets--;
                if(arr[arr.length-1] == "[") {
                    arr.pop();
                }
                break;
         }
         if(parens < 0 || braces < 0 || brackets < 0) {
             console.log("Early closing symbol");
             return false;
         }
     } 
     if(parens != 0 || braces != 0 || brackets != 0) {
         console.log("Unclosed opening symbol's");
         return false;
     } else if(arr.length > 0) {
         console.log("Symbol's not in order");
         return false;
     } else {
         return true;
     }
 }
 console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));
 console.log(bracesValid("D(i{a}l[ t]o)n{e"));
 console.log(bracesValid("A(1)s[O (n]0{t) 0}k"));