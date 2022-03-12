class PriorityQueue {
    constructor() {
      this.values = []
    }
    enqueue(val, priority) {
      let newNode = new Node(val, priority)
      this.values.push(newNode)
      this.bubbleUp()
    }
  
    bubbleUp() {
      var idx = this.values.length - 1
  
      const element = this.values[idx]
  
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2)
        let parent = this.values[parentIdx]
        if (element.priority >= parent.priority) break
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx = parentIdx
      }
    }
  
    dequeue() {
      const min = this.values[0]
      const end = this.values.pop()
      if (this.values.length > 0) {
        this.values[0] = end
        // trickle down
        this.sinkDown()
      }
      return min
    }
    sinkDown() {
      let idx = 0
      const length = this.values.length
      const element = this.values[0]
      while (true) {
        let leftChildIdx = 2 * idx + 1
        let rightChildIdx = 2 * idx + 2
        let leftChild, rightChild
        let swap = null
  
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx]
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx
          }
        }
  
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx]
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx
          }
        }
  
        if (swap === null) break
        this.values[idx] = this.values[swap]
        this.values[swap] = element
  
        idx = swap
      }
    }
  }

//   최소 이진 힙을 작성한다. - 낮은 숫자 일 수록 높은 우선 순위를 갖고 있는 것을 의미한다.
// 각 노드는 val(값)과 priority(우선순위)를 갖는다. 우선 순위를 사용해 heap을 구현한다.
// Enqueue 메소드는 값과 우선 순위를 받으며, 새로운 노드를 생성하고 우선순위에 따라 적절한 위치에 추가한다.
// Dequeue 메소드는 root 요소를 제거하고, 반환하며, 우선순위를 사용해 힘을 재정리한다.
// class PriorityQueue {