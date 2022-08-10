
const generateHTML = (array) => {
    console.log(array);
    let card = ``
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let extraItem = ``
    if (element.getRole()==="Manager"){
extraItem = `<p class="card-text">officeNumber${element.getOfficeNumber()}</p>`
    }
    else if (element.getRole()==="Engineer"){
        extraItem = `<p class="card-text">gitHub ${element.getGithub()}</p>`    
    }
    else {
        extraItem = `<p class="card-text">school ${element.getSchool()}</p>`
    }
    let template = `   <div class="col"><div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${element.getRole()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${element.getName()}</h6>
      <p class="card-text">${element.getId()}</p>
      <a href="mailto:${element.getEmail()}" class="card-link">${element.getEmail()}</a>
      ${
      extraItem 
      }
    </div>
  </div></div>`
  card+=template;
    
}
   return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
<div class="container">
  <!-- Content here -->
  <div class="row">
  ${card}
  
  </div>
</div>
  
 
  </body>
  </html>`;
}
module.exports = generateHTML