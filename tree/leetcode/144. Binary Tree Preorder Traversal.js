https://leetcode.com/problems/binary-tree-preorder-traversal/

// root,left,right

var preorderTraversal = function(root) {
    if(!root) return [];
    let stack =[];
    let res= []
    stack.push(root);
    while(stack.length !== 0){
        root = stack.pop()
        res.push(root.val)
        if(root.right !==null){
            stack.push(root.right)
        }
        if(root.left !==null){
            stack.push(root.left)
        }
    }
    return res;
};