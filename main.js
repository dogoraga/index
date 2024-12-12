const subjects=["Bild","Biologi","Engelska","Fysik","Geografi","Hemkunskap","Historia","Idrott och h\xe4lsa","Kemi","Matematik","Moderna spr\xe5k","Musik","Religionskunskap","Samh\xe4llskunskap","Sl\xf6jd","Svenska","Teknik"],grades={A:20,B:17.5,C:15,D:12.5,E:10,F:0},subjectsDiv=document.getElementById("subjects");subjects.forEach(e=>{let a=document.createElement("div");a.classList.add("subject-row"),a.innerHTML=`
    <label for="${e}">${e}</label>
    <select id="${e}" name="${e}">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
    </select>
  `,subjectsDiv.appendChild(a)});const languageToggle=document.getElementById("language-toggle"),languageSelect=document.getElementById("Moderna spr\xe5k");languageToggle.addEventListener("change",()=>{languageToggle.checked?languageSelect.disabled=!1:(languageSelect.disabled=!0,languageSelect.value="F")}),document.getElementById("calculate-btn").addEventListener("click",()=>{let e=0,a=!1,t=["Engelska","Matematik","Svenska"];subjects.forEach(n=>{let l=document.getElementById(n).value;e+=grades[l],t.includes(n)&&"F"===l&&(a=!0)}),languageToggle.checked||(e-=grades.F),document.getElementById("merit-score").textContent=e;let n="";a?n="Du m\xe5ste ha godk\xe4nt i all av det 3 grund \xe4mnen f\xf6r att n\xe5 en officiel gyminasie, du kan ans\xf6ka till introductions programmen, d\xe4r kan du tr\xe4na up dig sj\xe4lv ovh n\xe5 den minimala betygen f\xf6r en gyminasie":e<200?n="Det finns m\xe5nga olika program du kan v\xe4lja mellan. Tryck p\xe5 knappen nedan f\xf6r att hitta bra program f\xf6r dina merit po\xe4ng":e>=200&&e<300?n="Fantastiskt, du har en stabilt betyg och du har v\xe4ldigt m\xe5nga program du kan v\xe4lja mellan. Tryck p\xe5 knappen nedan f\xf6r att hitta bra program f\xf6r dina merit po\xe4ng":e>=300&&(n="Du har en av det h\xf6gsta betyget som en elev kan ha, med 300 merit po\xe4ng kan du ans\xf6ka till mer \xe4n 90-98% av alla programmeer som existerar. Tryck p\xe5 knappen nedan f\xf6r att hitta bra program f\xf6r dina merit po\xe4ng"),document.getElementById("message").textContent=n;let l=document.getElementById("link-container"),i="Hitta dina dr\xf6m programmer h\xe4r.",g="https://ednia.se/gymnasier/goteborg";e>=200&&(g="https://ednia.se/gymnasier/goteborg");let r=document.createElement("a");r.href=g,r.textContent=i,r.target="_blank",l.innerHTML="",l.appendChild(r)});

var cookieBannerSliderPos = 0;

function showCookieBanner() {
    var cookiebanner = document.getElementById("cookiebanner");
    var dialogHeight = parseInt(cookiebanner.offsetHeight);
    cookiebanner.style.bottom = (cookieBannerSliderPos - dialogHeight) + "px";
    cookieBannerSliderPos += 4;
    if (cookieBannerSliderPos < dialogHeight) {
        setTimeout(function () {
            showCookieBanner();
        }, 1);
    } else {
        cookieBannerSliderPos = 0;
        cookiebanner.style.bottom = "0px";
    }
}

function hideCookieBanner() {
    var cookiebanner = document.getElementById("cookiebanner");
    cookiebanner.style.display = "none";
}
