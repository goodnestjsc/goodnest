(function(){
  const privateCards={director:'e3fc2cbabd314db0919d924094d047fc',deputy:'9094568d601f47dbb1972c1bd6ee6304'};
  const text={
    vi:{stays:'Nhà nghỉ',availability:'Lịch phòng',company:'Công ty',contact:'Liên hệ',phone:'Gọi Goodnest',subhead:'10 không gian lưu trú được chăm chút tại Tokyo, để bạn cảm thấy như đang ở nhà.',calendar:'Kiểm tra lịch phòng.',calendarLead:'Chọn căn nhà, gửi ngày ở và số khách. Goodnest sẽ xác nhận lịch trống mới nhất.',available:'Các căn đang mở',check:'Kiểm tra lịch',view:'Xem căn nhà',contactTitle:'Cùng lên kế hoạch<br>cho chuyến ở của bạn.',contactLead:'Khi đặt trực tiếp, vui lòng ghi tên căn, ngày ở và số khách.',office:'Văn phòng'},
    en:{stays:'Stays',availability:'Availability',company:'Company',contact:'Contact',phone:'Call Goodnest',subhead:'Ten considered stays across Tokyo, made to feel like home.',calendar:'Check your stay.',calendarLead:'Choose a property, then send your dates and guest count. Goodnest will confirm the latest availability.',available:'Available homes',check:'Check availability',view:'View home',contactTitle:'Let’s plan<br>your stay.',contactLead:'For direct reservations, please include the property name, dates and guest count.',office:'Office'},
    ja:{stays:'宿泊施設',availability:'空室カレンダー',company:'会社情報',contact:'お問い合わせ',phone:'Goodnestに電話',subhead:'東京にある10の宿泊施設を、心を込めてご用意しています。',calendar:'滞在日程を確認する。',calendarLead:'物件を選び、宿泊日と人数をお送りください。Goodnestが最新の空室状況を確認します。',available:'ご利用いただける宿',check:'空室を確認',view:'物件を見る',contactTitle:'滞在のご相談を<br>承ります。',contactLead:'直接予約をご希望の場合は、物件名・宿泊日・人数をお知らせください。',office:'オフィス'}
  };
  const saved=(()=>{if(new URLSearchParams(location.search).get('profile'))return'en';try{return localStorage.getItem('goodnest-language')||'ja'}catch(e){return'ja'}})();
  const bamboo=homes.find(home=>home[0]==='Bamboo Glow Nook');
  if(bamboo)bamboo[5]='https://www.booking.com/hotel/jp/convenient-access-to-haneda-airport-onoue-building201.ja.html';
  const style=document.createElement('style');style.textContent=`
    .hero .wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(290px,.65fr);column-gap:54px;align-items:center}.hero h1{font-size:clamp(2.65rem,5vw,4.65rem);max-width:620px}.hero .eyebrow,.hero h1,.hero p{grid-column:1}.hero .finder{grid-column:1/-1}.hero-visual{grid-column:2;grid-row:1/4;margin:0;height:330px;overflow:hidden;border-radius:120px 0 0 0;box-shadow:18px 18px 0 #c9815d}.hero-visual img{width:100%;height:100%;object-fit:cover;display:block}.shared-header{position:sticky;top:0;z-index:20}.utility-hero{background:var(--forest);color:#fff;padding:72px 0}.utility-hero h1{font:400 clamp(2.7rem,6vw,5.3rem)/.96 Georgia,serif;margin:14px 0}.utility-hero p{max-width:620px;font-size:1.06rem}.utility-content{padding:64px 0}.utility-content h2,.utility-office h2{font:400 clamp(2rem,4vw,3.4rem)/1 Georgia,serif;margin:12px 0 26px}.utility-office{margin-top:56px;border-top:1px solid var(--line);padding-top:28px}@media(max-width:800px){.hero .wrap{display:block}.hero-visual{height:260px;margin:28px 0 0;border-radius:72px 0 0 0}.hero .finder{margin-top:28px}.shared-header .navlinks{display:none}}
  `;document.head.appendChild(style);
  function header(l){const t=text[l];return `<header class="shared-header"><nav class="wrap"><a href="./" class="brand header-brand-lockup"><img src="assets/architectural-nest-green.png" alt="Good Nest"><span class="header-brand-copy"><strong>GOOD NEST</strong><small>TOKYO STAYS</small></span></a><div class="navlinks"><a href="./#homes">${t.stays}</a><a href="?availability=1">${t.availability}</a><a href="?company=1">${t.company}</a><a href="?contact=1">${t.contact}</a></div><div class="langs"><button class="${l==='vi'?'active':''}" onclick="window.goodnestLanguage('vi')">VI</button><button class="${l==='en'?'active':''}" onclick="window.goodnestLanguage('en')">EN</button><button class="${l==='ja'?'active':''}" onclick="window.goodnestLanguage('ja')">日本語</button></div></nav></header>`}
  window.goodnestLanguage=function(l){try{localStorage.setItem('goodnest-language',l)}catch(e){};if(document.getElementById('homesGrid'))setLang(l);else location.reload()};
  const enhancedSetLang=setLang;
  setLang=function(l){
    enhancedSetLang(l);
    document.querySelectorAll('a[href="tel:+818033216457"]').forEach(a=>a.textContent=text[l].phone);
  };
  function utilities(l){const q=new URLSearchParams(location.search),t=text[l],main=document.querySelector('main');if(!main)return;if(q.get('availability')==='1'){main.innerHTML=`<section class="utility-hero"><div class="wrap"><div class="eyebrow">${t.availability}</div><h1>${t.calendar}</h1><p>${t.calendarLead}</p></div></section><section class="wrap utility-content"><div class="eyebrow">DIRECT BOOKING</div><h2>${t.available}</h2><div class="homes">${homes.filter(h=>publishedNames.has(h[0])).map((h,i)=>`<article class="home"><span class="num">${String(i+1).padStart(2,'0')} · ${h[1]}</span><h3>${h[0]}</h3><p class="meta">${h[3]} · ${propertyCopy[l].max} ${h[2]} ${propertyCopy[l].guests}</p><div class="actions"><a class="primary" href="mailto:booking.goodnest@outlook.com?subject=${encodeURIComponent('Availability — '+h[0])}">${t.check}</a><a href="?home=${homes.indexOf(h)+1}">${t.view}</a></div></article>`).join('')}</div></section>`}if(q.get('contact')==='1'){main.innerHTML=`<section class="utility-hero"><div class="wrap"><div class="eyebrow">${t.contact}</div><h1>${t.contactTitle}</h1><p>${t.contactLead}</p></div></section><section class="wrap utility-content"><div class="contact-options" style="max-width:760px"><a href="https://zalo.me/818033216457" target="_blank">Zalo</a><a href="https://m.me/vitamint4" target="_blank">Messenger</a><a href="viber://chat?number=%2B818033216457">Viber</a><a href="tg://resolve?phone=%2B818033216457">Telegram</a><a href="mailto:booking.goodnest@outlook.com">Email</a><a href="tel:+81476554695">${t.phone}</a></div><div class="utility-office"><div class="eyebrow">${t.office}</div><h2>千葉県印西市草深64-35</h2></div></section>`}}
  function localizeCompany(l){
    if(new URLSearchParams(location.search).get('company')!=='1')return;
    const tr={
      vi:{profile:'HỒ SƠ CÔNG TY',lead:'Doanh nghiệp dịch vụ lưu trú mang đến những trải nghiệm lưu trú thoải mái, an tâm tại khu vực Tokyo.',info:'THÔNG TIN CÔNG TY',outline:'Thông tin công ty',labels:['Tên công ty','Địa chỉ','Số điện thoại','Lĩnh vực kinh doanh','Khởi nghiệp','Thành lập pháp nhân','Mã số pháp nhân','Vốn điều lệ'],business:'Dịch vụ lưu trú<br>Vận hành cơ sở lưu trú và hỗ trợ đặt phòng tại khu vực Tokyo.',start:'Hộ kinh doanh GOODNEST: Tháng 2 năm 2025',incorporation:'Công ty cổ phần Good Nest: Ngày 15 tháng 5 năm 2026',capital:'3.000.000 yên',banks:'TÀI KHOẢN NGÂN HÀNG',bankTitle:'Ngân hàng giao dịch',leaders:'BAN ĐIỀU HÀNH',leaderTitle:'Người đại diện & Phó đại diện',rep:'Người đại diện',deputy:'Phó đại diện',card:'Mở danh thiếp'},
      en:{profile:'COMPANY PROFILE',lead:'A hospitality service company providing comfortable, dependable stays across the greater Tokyo area.',info:'COMPANY INFORMATION',outline:'Company overview',labels:['Company name','Address','Telephone','Business','Founded','Incorporated','Corporate number','Capital'],business:'Hospitality services<br>Accommodation operations and booking support across the Tokyo area.',start:'GOODNEST sole proprietorship: February 2025',incorporation:'Good Nest Co., Ltd.: May 15, 2026',capital:'¥3,000,000',banks:'BANK ACCOUNTS',bankTitle:'Banking partners',leaders:'LEADERSHIP',leaderTitle:'Representative & Deputy Representative',rep:'Representative',deputy:'Deputy Representative',card:'Open contact card'},
      ja:{profile:'COMPANY PROFILE',lead:'東京圏を中心に、心地よく安心できる宿泊体験を提供する宿泊サービス事業者です。',info:'COMPANY INFORMATION',outline:'会社概要',labels:['会社名','所在地','電話番号','事業内容','創業','法人設立','法人番号','資本金'],business:'宿泊サービス業<br>東京圏の宿泊施設の運営・予約サポート',start:'個人事業 GOODNEST：2025年2月',incorporation:'株式会社 Good Nest：2026年5月15日',capital:'300万円',banks:'BANK ACCOUNTS',bankTitle:'取引銀行',leaders:'LEADERSHIP',leaderTitle:'代表者・副代表者',rep:'代表者',deputy:'副代表',card:'連絡先カードを開く'}
    }[l],main=document.querySelector('main');if(!main)return;
    const sections=main.querySelectorAll(':scope > section'),hero=sections[0],info=sections[1],bank=sections[2],leaders=sections[3];
    hero.querySelector('.eyebrow').textContent=tr.profile;hero.querySelector('p').textContent=tr.lead;
    info.querySelector('.eyebrow').textContent=tr.info;info.querySelector('h2').textContent=tr.outline;
    [...info.querySelectorAll('dt')].forEach((node,i)=>node.textContent=tr.labels[i]);
    const dd=info.querySelectorAll('dd');dd[3].innerHTML=tr.business;dd[4].textContent=tr.start;dd[5].textContent=tr.incorporation;dd[7].textContent=tr.capital;
    bank.querySelector('.eyebrow').textContent=tr.banks;bank.querySelector('h2').textContent=tr.bankTitle;
    leaders.querySelector('.eyebrow').textContent=tr.leaders;leaders.querySelector('h2').textContent=tr.leaderTitle;
    leaders.remove();
  }
  function refreshCompanyHero(){
    if(new URLSearchParams(location.search).get('company')!=='1')return;
    const hero=document.querySelector('main > section:first-child .wrap');
    const grid=hero?.querySelector('div[style*="display:grid"]');if(!grid||grid.dataset.refreshed)return;
    const logo=grid.querySelector('img'),info=grid.querySelector(':scope > div');if(!logo||!info)return;
    const lockup=document.createElement('div');lockup.className='company-lockup';
    logo.style.height='160px';logo.style.width='160px';logo.style.maxWidth='160px';logo.style.objectFit='contain';
    info.querySelector('.eyebrow')?.remove();
    info.querySelector('h1').style.fontSize='clamp(2.2rem,4vw,3.65rem)';info.querySelector('h1').style.lineHeight='.96';
    lockup.append(logo,info);
    const visual=document.createElement('figure');visual.className='company-city-visual';visual.innerHTML='<img src="assets/tokyo-skytree-company.png" alt="Tokyo street at sunset with Tokyo Skytree">';
    grid.className='company-hero-grid';grid.style.cssText='';grid.dataset.refreshed='true';grid.append(lockup,visual);
    const companyStyle=document.createElement('style');companyStyle.textContent=`main > section:first-child:has(.company-hero-grid){padding:18px 0 28px!important}.company-hero-grid{display:grid!important;grid-template-columns:minmax(260px,.72fr) minmax(390px,1.28fr);gap:42px;align-items:center;margin-top:0}.company-lockup{display:grid;gap:8px;align-content:center}.company-lockup h1{margin:0!important}.company-lockup p{font-size:1rem!important}.company-city-visual{height:290px;margin:0;overflow:hidden;border-radius:90px 0 0 0;box-shadow:14px 14px 0 #c9815d}.company-city-visual img{width:100%;height:100%;object-fit:cover;display:block}@media(max-width:800px){.company-hero-grid{grid-template-columns:1fr}.company-city-visual{height:240px;border-radius:60px 0 0 0}}`;document.head.appendChild(companyStyle);
  }
  function updateDirectorProfile(){
    if(new URLSearchParams(location.search).get('profile')!=='director')return;
    const main=document.querySelector('.contact-card main'),buttons=main?.querySelector('.buttons');if(!main||!buttons)return;
    main.querySelector('h1').textContent='Tran Anh Khoa';
    main.querySelector('p').textContent='Director · Good Nest Co., Ltd.';
    buttons.innerHTML='<a href="tel:+819098257272">Call · +81 90-9825-7272</a><a href="https://zalo.me/819098257272" target="_blank" rel="noopener">Zalo</a><a href="https://m.me/itstar" target="_blank" rel="noopener">Messenger</a><a href="viber://chat?number=%2B819098257272">Viber</a><a href="tg://resolve?phone=%2B819098257272">Telegram</a><a href="mailto:goodnestcompany@gmail.com">goodnestcompany@gmail.com</a>';
  }
  function updateDeputyProfile(){
    if(new URLSearchParams(location.search).get('profile')!=='deputy')return;
    const main=document.querySelector('.contact-card main');if(!main)return;
    main.querySelector('h1').textContent='Dang Nguyen Vy Thao';
    main.querySelector('p').textContent='Deputy Representative · Good Nest Co., Ltd.';
  }
  function refreshProfileQr(){
    const profile=new URLSearchParams(location.search).get('profile'),token=privateCards[profile];if(!token)return;
    const images=document.querySelectorAll('.contact-card main img');if(images.length<2)return;
    const cardUrl=location.origin+location.pathname+'?profile='+profile+'&card='+token;
    images[1].src='https://api.qrserver.com/v1/create-qr-code/?size=220x220&data='+encodeURIComponent(cardUrl);
    images[1].alt='Private QR code for this Goodnest contact card';
  }
  if(document.getElementById('homesGrid')){
    copy.vi.subhead=text.vi.subhead;copy.en.subhead=text.en.subhead;copy.ja.subhead=text.ja.subhead;
    const image=document.createElement('figure');image.className='hero-visual';image.innerHTML='<img src="assets/tokyo-tower-hero.png" alt="Tokyo Tower at sunset">';document.querySelector('#top .wrap').appendChild(image);
    setLang(saved);document.querySelectorAll('a[href="tel:+818033216457"]').forEach(a=>a.textContent=text[saved].phone);document.querySelector('.footer .footer-grid > div:last-child')?.remove();
    const original=renderProperties;renderProperties=function(){original();const cards=[...document.querySelectorAll('#homesGrid .home')];cards.forEach((card,i)=>card.querySelector('.num').textContent=String(i+1).padStart(2,'0')+' · '+card.querySelector('.num').textContent.split(' · ')[1])};renderProperties();
  }else{const requestedProfile=new URLSearchParams(location.search).get('profile');if(requestedProfile&&privateCards[requestedProfile]!==new URLSearchParams(location.search).get('card')){document.body.innerHTML='<main style="min-height:100vh;display:grid;place-items:center;padding:40px;text-align:center"><div><h1 style="font:400 2.5rem Georgia,serif">Profile unavailable</h1><p>This contact card is available only through its private QR link.</p><a href="./">Return to Goodnest</a></div></main>'}else{document.body.insertAdjacentHTML('afterbegin',header(saved));utilities(saved);localizeCompany(saved);refreshCompanyHero();updateDirectorProfile();updateDeputyProfile();refreshProfileQr();document.querySelectorAll('.back-link,.contact-card .back').forEach(x=>x.remove())}}
  if(new URLSearchParams(location.search).get('home')==='16'&&bamboo&&!document.querySelector('.gallery-title .actions a[href*="booking.com"]')){document.querySelector('.gallery-title .actions')?.insertAdjacentHTML('beforeend',`<a target="_blank" rel="noopener" href="${bamboo[5]}">Booking.com</a>`)}
})();
