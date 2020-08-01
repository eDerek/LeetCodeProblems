import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class Subsets {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new LinkedList<>();
        ans.add(new LinkedList<>());
        backtrack(ans, new LinkedHashSet<>(), nums, null);
        // List<List<Integer>> result = new ArrayList<List<Integer>>();
        // result.addAll(ans);
        return ans;
    }

    public void backtrack(List<List<Integer>> ans, Set<Integer> usedSet, int[] nums, Integer lastNum){
        if(usedSet.size() == nums.length){
            return;
        }
        for(int num : nums){
            if(usedSet.contains(num) || (lastNum != null && num < lastNum)){
                continue;
            }

            usedSet.add(num);

            LinkedList<Integer> tempList = new LinkedList<>();
            tempList.addAll(usedSet);
            // if(!ans.contains(tempList)){
                ans.add(tempList);
            // }

            backtrack(ans, usedSet, nums, num);
            usedSet.remove(num);
        }
    }

    public static void main(String[] args){
        List<List<Integer>> list = new Subsets().subsets(new int[]{1,2,3,4,5});
        System.out.println(list);
        System.out.println(list.size());
    }
}