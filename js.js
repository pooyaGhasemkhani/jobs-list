var jobs =[
    {avatar:'Untitled.jpg', company:'hyper yek', title:'senior Frontend Developer', description:'3000$', lable:'vue.js'},
    {avatar:'Untitled.jpg', company:'samim', title:'Fullstack Developer', description:'4500$', lable:'c#'},
    {avatar:'Untitled.jpg', company:'snap', title:'Junior Frontend Developer', description:'2500$', lable:'react.js'},
    {avatar:'Untitled.jpg', company:'tosan', title:'Junior Frontend Developer', description:'2700$', lable:'vue.js'},
    {avatar:'Untitled.jpg', company:'drNext', title:'Softwear Test Engineer', description:'4000$', lable:'css'},
    {avatar:'Untitled.jpg', company:'oxin', title:'Softwear Engineer', description:'3000$', lable:'html'},
    {avatar:'Untitled.jpg', company:'fidan', title:'Junior Backend Developer', description:'2300$', lable:'java'},
    {avatar:'Untitled.jpg', company:'maxim', title:'Junior Frontend Developer', description:'2000$', lable:'css'},
    {avatar:'Untitled.jpg', company:'spotify', title:'Softwear Test Engineer', description:'4000$', lable:'html'},
    {avatar:'Untitled.jpg', company:'sound cloud', title:'Fullstack Developer', description:'4700$', lable:'c#'},
]


var temp, i, jobs_list ;
jobs_list = document.getElementsByClassName("jobs_list")
  temp = document.getElementsByTagName("template")[0];

  for (i = 0; i < jobs.length; i++) {
    var companyName = temp.content.querySelector(".job_company-name_p");
    var title = temp.content.querySelector(".job_title_p");
    var des = temp.content.querySelector(".job_description_p");
    var lable = temp.content.querySelector(".job_lable_p");

    companyName = document.importNode(companyName, true);
    companyName.textContent += jobs[i].company ;

    title = document.importNode(title, true);
    title.textContent += jobs[i].title;

    des = document.importNode(des, true);
    des.textContent += jobs[i].description;

    lable = document.importNode(lable, true);
    lable.textContent += jobs[i].lable;
    
    let jobList = document.querySelector('.job-list')
    jobList.insertAdjacentHTML("beforeend", 
    '<div class="job-card">' +
    '<div class="image-and-detail">'+
    '<div class="job_image">' + '<img class="job_image_img" src="' + jobs[i].avatar + '">' + '</div>' +
    '<div class="detail">'+
    '<div class="job_company-name">' + companyName.outerHTML + '</div>' + 
    '<div class="job_title">' + title.outerHTML + '</div>' +
    '<div class="job_description">' + des.outerHTML + '</div>' +
    '</div>'+
    '</div>'+
    '<div class="job_lable">' + lable.outerHTML + '</div>' +
    '</div>');
 
  }


  