class TreeNode {
  constructor(data) {
    this.data = data;
    this.child = [];
  }
}
class GenericTee {
  constructor() {
    this.root = null;
  }
  buildGenericTree(eulerPath) {
    let st = [];
    for (let i = 0; i < eulerPath.length; i++) {
      if (eulerPath[i] == -1) {
        st.pop();
        continue;
      }
      let node = new TreeNode(eulerPath[i]);
      if (st.length == 0) {
        this.root = node;
      } else {
        st[st.length - 1].child.push(node);
      }
      st.push(node);
    }
  }
  displayGenericTree() {
    this.displayGenericTreeHelper(this.root);
  }
  displayGenericTreeHelper(node) {
    let nodeRes = `${node.data} -> `;
    for (let i = 0; i < node.child.length; i++) {
      nodeRes += `${node.child[i].data}, `;
    }
    nodeRes += '.';
    console.log(nodeRes);
    for (let i = 0; i < node.child.length; i++) {
      this.displayGenericTreeHelper(node.child[i]);
    }
  }
  levelOrderTraversalGenericTree(){
    /**
     * It happens in three steps
     * 1. Remove
     * 2. Print
     * 3. Add childreen
     */
    let qu=[];
    qu.push(this.root);
    let ans=''
    while(qu.length>0){
        let node=qu.shift();
        for(let child of node.child){
            qu.push(child);
        }
        ans+=node.data+', '
    }
    console.log(ans);
  }
}

let genericTee = new GenericTee();
let eulerPath = [10, 1, -1, 2, 6, -1, 8, -1, -1, 3, -1, 4, -1, -1];
genericTee.buildGenericTree(eulerPath);
genericTee.displayGenericTree();
genericTee.levelOrderTraversalGenericTree();
