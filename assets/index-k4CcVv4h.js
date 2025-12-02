(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();document.querySelector("#app").innerHTML=`
  <div class="landing-page">
    <nav class="top-nav">
      <div class="nav-container">
        <button class="nav-link active" data-page="1" onclick="goToPage(1)">Начало</button>
        <button class="nav-link" data-page="2" onclick="goToPage(2)">За нас</button>
        <button class="nav-link" data-page="3" onclick="goToPage(3)">Какво представлява</button>
        <button class="nav-link" data-page="4" onclick="goToPage(4)">Посети играта</button>
      </div>
    </nav>

    <div class="page active" id="page1">
      <div class="content">
        <h1 class="main-title">Опознай България</h1>
        <p class="subtitle">Интерактивна карта на България с въпроси за различни региони</p>
      </div>
    </div>

    <div class="page" id="page2">
      <div class="content">
        <h2>За нас</h2>
        <p class="description">Ние сме ученици от ПМГ "Христо Смирненски" гр. Перник и създадохме тази игра.</p>
      </div>
    </div>

    <div class="page" id="page3">
      <div class="content">
        <h2>Какво представлява</h2>
        <p class="description">Нашата уеб-игра ти предлага интерактивна карта на България, в която всеки регион крие свои въпроси. Избери област, отговори на трите предизвикателства и виж как картата се оцветява според резултата ти - червено при 0-1 верни отговора, жълто при 2 и зелено при 3. Забавно, лесно и идеално за опознаване на страната!</p>
      </div>
    </div>

    <div class="page" id="page4">
      <div class="content">
        <h2>Посети играта</h2>
        <p class="description">За да посетите играта, можете да сканирате QR кодът или да напишете "bulgaria-quiz.lovable.app" в търсачката Ви.</p>
        <div class="qr-placeholder">
          <img src="https://i.imgur.com/YJq7MLc.png" alt="QR Code" class="qr-image">
        </div>
      </div>
    </div>

    <div class="page-indicators">
      <span class="indicator active" data-page="1"></span>
      <span class="indicator" data-page="2"></span>
      <span class="indicator" data-page="3"></span>
      <span class="indicator" data-page="4"></span>
    </div>
  </div>
`;let i=1;window.goToPage=function(c){const t=i;i=c,document.getElementById(`page${t}`).classList.remove("active"),document.querySelector(`.nav-link[data-page="${t}"]`).classList.remove("active"),document.querySelector(`.indicator[data-page="${t}"]`).classList.remove("active"),document.getElementById(`page${i}`).classList.add("active"),document.querySelector(`.nav-link[data-page="${i}"]`).classList.add("active"),document.querySelector(`.indicator[data-page="${i}"]`).classList.add("active")};
