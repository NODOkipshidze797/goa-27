function domainName(url) {
  
    if (url.startsWith("http://")) {
        url = url.slice(7); 
    } else if (url.startsWith("https://")) {
        url = url.slice(8); 
    }

  
    if (url.startsWith("www.")) {
        url = url.slice(4);
    }

   
    const domain = url.split('.')[0]; 

    return domain;
}


console.log(domainName("http://github.com/carbonfive/raygun"));
