import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class Permutations {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        backtrack(ans, new LinkedList<>(), new HashSet<>(), nums);
        return ans;
    }

    public void backtrack(List<List<Integer>> ans, LinkedList<Integer> cur, Set<Integer> usedSet, int[] nums){
        if(cur.size() == nums.length){
            LinkedList<Integer> tempList = new LinkedList<>();
            tempList.addAll(cur);
            ans.add(tempList);
            return;
        }
        // int currLength = cur.size();
        for(int num : nums){
            if(usedSet.contains(num)){
                continue;
            }
            
            usedSet.add(num);
            cur.add(num);
            backtrack(ans, cur, usedSet, nums);
            // System.out.println(cur+"---"+currLength);
            // for(int j=0;j<nums.length-currLength;j++){
                // System.out.println(j);
                int last = cur.getLast();
                cur.removeLast();
                usedSet.remove(last);
            // }
        }
        
    }

    public static void main(String[] args){
        List<List<Integer>> list = new Permutations().permute(new int[]{1,2,3,4});
        System.out.println(list);
        System.out.println(list.size());
    }
}