def longestCommonPrefix(strs):
    if not strs:
        return ""

    # sort the strings in the list in lexicographic order
    strs.sort()

    # get the first and last strings in the sorted list
    first = strs[0]
    last = strs[-1]

    # initialize the longest common prefix to an empty string
    lcp = ""

    # loop through the characters in the first and last strings
    # and check if they are equal
    for i in range(min(len(first), len(last))):
        if first[i] == last[i]:
            lcp += first[i]
        else:
            break

    return lcp
