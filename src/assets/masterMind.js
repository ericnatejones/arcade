export function createSolution(){
    const colors = ["red", "black", "green", "red", "yellow", "blue", "orange"]
    const final = []
    final.push(colors[Math.floor(Math.random() * colors.length)])
    final.push(colors[Math.floor(Math.random() * colors.length)])
    final.push(colors[Math.floor(Math.random() * colors.length)])
    final.push(colors[Math.floor(Math.random() * colors.length)])
    return final
}

