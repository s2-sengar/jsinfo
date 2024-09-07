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
}

let genericTee = new GenericTee();
let eulerPath = [10, 1, -1, 2, 6, -1, 8, -1, -1, 3, -1, 4, -1, -1];
genericTee.buildGenericTree(eulerPath);
genericTee.displayGenericTree();
