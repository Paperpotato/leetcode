# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def rangeSumBST(self, root, low, high):
        """
        :type root: TreeNode
        :type low: int
        :type high: int
        :rtype: int
        """
        #check if root is a node, return if not
        if root == None: return 0
        #check if root value is greater than high. IF HIGH, THEN OUTSIDE OF RANGE. RECURSIVELY CALL FUNCTION WITH LEFT NODE. RECURSIVELY CALLED FUNCTION WILL RETURN 0 IF NULL
        if root.val > high: return self.rangeSumBST(root.left, low, high)
        if root.val < low: return self.rangeSumBST(root.right, low, high)
        #return root value + child recursively called child nodes. If they're null, will just return 0 
        return root.val + self.rangeSumBST(root.left, low, high) + self.rangeSumBST(root.right, low, high)


        