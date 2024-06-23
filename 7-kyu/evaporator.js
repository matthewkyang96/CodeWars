function evaporator(content, evap_per_day, threshold){
    let days = 0;
    let threshold_content = threshold * 0.01 * content
    while(content >= threshold_content){
      days ++;
      content -= evap_per_day * content * 0.01;
    }
    
    return days;
  }