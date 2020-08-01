import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class PermutationsImprove {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        backtrack(ans, new LinkedHashSet<>(), nums);
        return ans;
    }

    public void backtrack(List<List<Integer>> ans, Set<Integer> usedSet, int[] nums){
        if(usedSet.size() == nums.length){
            LinkedList<Integer> tempList = new LinkedList<>();
            tempList.addAll(usedSet);
            ans.add(tempList);
            return;
        }
        
        for(int num : nums){
            if(usedSet.contains(num)){
                continue;
            }
            
            usedSet.add(num);
            backtrack(ans, usedSet, nums);
            usedSet.remove(num);
        }
        
    }

    public static void main(String[] args){
        List<List<Integer>> list = new PermutationsImprove().permute(new int[]{1,2,3});
        System.out.println(list);
        System.out.println(list.size());
    }
}