var jobs =[
    {avatar:'Untitled.jpg', company:'hyper yek', title:'senior Frontend Developer', description:'3000$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'samim', title:'Fullstack Developer', description:'4500$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'snap', title:'Junior Frontend Developer', description:'2500$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'tosan', title:'Junior Frontend Developer', description:'2700$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'drNext', title:'Softwear Test Engineer', description:'4000$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'oxin', title:'Softwear Engineer', description:'3000$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'fidan', title:'Junior Backend Developer', description:'2300$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'maxim', title:'Junior Frontend Developer', description:'2000$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'spotify', title:'Softwear Test Engineer', description:'4000$', lable:['html','css','vue']},
    {avatar:'Untitled.jpg', company:'sound cloud', title:'Fullstack Developer', description:'4700$', lable:['html','css','vue']},
]


var temp, i, a, jobs_list ;
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

    for (a = 0; a <jobs[i].lable.length; a++) {
    lable[a] = document.importNode(lable, true);
    lable[a].textContent += jobs[i].lable[a];
  }
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
    '<div class="job_lable">' + lable[0].outerHTML + '  ' + lable[1].outerHTML + ' ' + lable[2].outerHTML + '</div>' +
    '</div>');
 
  }


  