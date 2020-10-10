import java.util.Stack;

class Solution2 {
    public int calculate(String s) {
        s = s.replaceAll(" ","");
        char[] sArray = s.toCharArray();
        Stack<Integer> values = new Stack<Integer>();
        Stack<Character> opts = new Stack<Character>();
        int currVal = 0;

        for(char c : sArray){
            if(Character.isDigit(c)){
                // System.out.println(c+"~~~");
                currVal = currVal*10+Integer.parseInt(c+"");
                continue;
            }

            currVal = go(currVal, values, opts);
            // System.out.println(currVal+"-----");

            values.add(currVal);
            opts.add(c);
            currVal = 0;
        }
        currVal = go(currVal, values, opts);
        // System.out.println(currVal+"-----++");
        
        values.add(currVal);

        int result = values.get(0);
        for(int i=0;i<opts.size();i++){
            if (opts.get(i) == '+'){
                result += values.get(i+1);
            }else{
                result -= values.get(i+1);
            }
        }
        return result;
    }

    private int go(int currVal, Stack<Integer> values, Stack<Character> opts){
        if (opts.size() > 0 && opts.lastElement() == '*'){
            int lastVal = values.lastElement();
            values.pop();
            opts.pop();
            return lastVal*currVal;
        }
        if (opts.size() > 0 && opts.lastElement() == '/'){
            int lastVal = values.lastElement();
            values.pop();
            opts.pop();
            return lastVal/currVal;
        }
        return currVal;
    }

    public static void main(String[] args){
        Solution2 solution = new Solution2();
        System.out.println(solution.calculate("3+2*2"));
        System.out.println(solution.calculate("3/2"));
        System.out.println(solution.calculate(" 3+5 / 2 "));
        System.out.println(solution.calculate("3+5 / 2*3-8-9/3"));

        // System.out.println(10/3);
        // System.out.println(-10/3);
    }
}