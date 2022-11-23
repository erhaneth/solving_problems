'''
Given an integer array nums, 
return true if any value appears at least twice 
in the array, and return false if every 
element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true 
'''


def contains_duplicate_hash(nums):
    # using  a dictionary as a hash table
    hash_table = {}
    # loop over the numbers
    for num in nums:
        # if the number is found in the hash table
        if num in hash_table:
            # return true if found
            return True
        # otherwise add the number to table
        else:
            hash_table[num] = None
            print(hash_table)

    # return false if not found the duplicate
    return False


nums = [1, 2, 3, 4]
print(contains_duplicate_hash(nums))

nums = [1, 2, 3, 1, 3]
print(contains_duplicate_hash(nums))
