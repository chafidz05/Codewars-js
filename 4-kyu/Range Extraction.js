function solution(nums) {
  nums = nums.map((v, i) =>
    nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? "-" : v
  );
  return nums
    .filter((v, i) => v != "-" || nums[i - 1] != "-")
    .join(",")
    .replace(/,-,/g, "-");
}