// https://leetcode.com/problems/binary-tree-inorder-traversal/

// left, root, right
var inorderTraversal = function(root) {
    let stack = [];
    let res = [];

    while(root !== null || stack.length !== 0) {
        while(root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}

inorderTraversal([1,null,2,3])