
//dynamic team category 

const teamCategory=document.getElementById("teamCategory");

let category=` <li class="nav-item active" data-option-value="*">
<a class="nav-link text-1 text-uppercase active" href="#">Show All</a>
</li> `
team_category.map((item, index)=>{
    let splittedData=item.split(" ");
    let joinData=splittedData.join("-").toLowerCase()
  category+=`<li class="nav-item active" data-option-value="${joinData}">
  <a class="nav-link text-1 text-uppercase active" href="#">${item}</a>
</li>`
})
teamCategory.innerHTML=category;

//catch the teammmber list from tema page

const teamList=document.querySelector("#teamList") ;

let allMember=""
teamMember.map((data, index)=>{
  let splittedData=data.category.split(" ");
  let joinData=splittedData.join("-").toLowerCase();
    allMember+=`
    <div class="col-12 col-sm-6 col-lg-3 isotope-item ${joinData}">
                <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
                  <span class="thumb-info-wrapper">
                    <a href="about-me.html">
                      <img src="${data.photo}" class="img-fluid" alt="">
                      <span class="thumb-info-title">
                        <span class="thumb-info-inner">${data.name}</span>
                        <span class="thumb-info-type">${data.skill}</span>
                      </span>
                    </a>
                  </span>
                  <span class="thumb-info-caption">
                    <span class="thumb-info-caption-text">${data.desc}</span>
                    <span class="thumb-info-social-icons mb-4">

                    ${
                        `facebook` in data.social 
                        ? `<a target="_blank" href="${data.social.facebook}">
                        <i class="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                      </a>`:""
                    }
                    

                    ${
                        "linkedin" in data.social
                        ? `<a href="${data.social.linkedin}">
                        <i class="fab fa-linkedin-in"></i>
                        <span>Linkedin</span>
                      </a>`:""
                    }
                    ${
                        "twitter" in data.social
                        ? `<a href="${data.social.twitter}">
                        <i class="fab fa-twitter"></i>
                        <span>Linkedin</span>
                      </a>`:""
                    }
                      


                    </span>
                  </span>
                </span>
              </div>
    `
});

teamList.innerHTML=allMember;
