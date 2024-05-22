function generateShape(integer){
    let shape = [];
    for(let i = 0; i < integer; ++i){
      shape.push('+'.repeat(integer))
    }
    return shape.join('\n')
  }