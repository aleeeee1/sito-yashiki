(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,,function(e,a,t){},,,,,,,function(e,a,t){},,,,function(e){e.exports=JSON.parse('[{"img_path":"/images/nigiri-salmone-1.jpg","name":"Nigiri al salmone","description":"Riso con salmone","ALY":true,"number":123,"nPieces":2,"limited":false,"surgelato":true},{"img_path":"/images/nigiri-tonno-1.jpg","name":"Nigiri al tonno","description":"Riso con tonno","ALY":true,"number":124,"nPieces":2,"limited":true,"surgelato":false}]')},function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),l=t(16),o=t.n(l),r=t(12),c=(t(25),t(1)),s=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],d=function(e){var a=e.children,t=e.type,i=e.onClick,l=e.buttonStyle,o=e.buttonSize,r=e.linkTo,d=s.includes(l)?l:s[0],u=m.includes(o)?o:m[0];return n.a.createElement(c.b,{to:r,className:"btn-mobile"},n.a.createElement("button",{className:"btn ".concat(d," ").concat(u),onClick:i,type:t},a))};t(31);var u=function(){var e=Object(i.useState)(!1),a=Object(r.a)(e,2),t=a[0],l=a[1],o=Object(i.useState)(!0),s=Object(r.a)(o,2),m=s[0],u=s[1],p=function(){return l(!1)},E=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(i.useEffect)((function(){E()}),[]),window.addEventListener("resize",E),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar-container"},n.a.createElement(c.b,{to:"/home",className:"navbar-logo",onClick:p},n.a.createElement("div",null,n.a.createElement("img",{src:"images/LOGO-YASHIKI-orizzontale.png",alt:"YASHIKI",width:"180",height:"60"}))),n.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},n.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),n.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{to:"/home",className:"nav-links",onClick:p},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{to:"/pranzo",className:"nav-links",onClick:p},"Men\xf9 pranzo")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{to:"/cena",className:"nav-links",onClick:p},"Men\xf9 cena")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{to:"/cena",className:"nav-links",onClick:p},"Takeaway")),n.a.createElement("li",null,n.a.createElement(c.b,{to:"/info",className:"nav-links-mobile",onClick:p},"Info"))),m&&n.a.createElement(d,{linkTo:"/info",buttonStyle:"btn--outline"},"Info"))))};t(8),t(32);var p=function(){return n.a.createElement("div",{id:"cont"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"left-1 box icon"},n.a.createElement("i",{className:"fas fa-qrcode"})),n.a.createElement("div",{className:"left-2 box"},n.a.createElement("h1",{className:"subtitle"},"Scannerizza il QrCode."),n.a.createElement("p",{className:"description"},"Abbiamo digitalizzato ",n.a.createElement("br",null)," il men\xf9 per la vostra ",n.a.createElement("br",null)," comodit\xe0 e sicurezza."))),n.a.createElement("div",{className:"center"},n.a.createElement("div",{className:"center-1 box icon"},n.a.createElement("i",{className:"fas fa-calendar-check"})),n.a.createElement("div",{className:"center-2 box"},n.a.createElement("h1",{className:"subtitle"},"Sempre aperti."),n.a.createElement("h1",{className:"description"},"Da luned\xec a domenica ",n.a.createElement("br",null)," Yashiki non vi abbandona mai "))),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"right-1 box icon"},n.a.createElement("i",{className:"fas fa-shipping-fast"})),n.a.createElement("div",{className:"right-2 box"},n.a.createElement("h1",{className:"subtitle"},"Take away & domicilio"),n.a.createElement("h1",{className:"description"},"I nostri piatti sono disponibli per l'asporto e ",n.a.createElement("br",null)," la consegna a domicilio"))),n.a.createElement("div",{className:"offers"},n.a.createElement("div",{className:"offers-1 box icon"},n.a.createElement("i",{className:"fas fa-star"})),n.a.createElement("div",{className:"offers-2 box"},n.a.createElement("h1",{className:"subtitle"},"Hai visto le offerte?"),n.a.createElement("p",{className:"description"},"Puoi trovarle in ",n.a.createElement(c.b,{to:"/takeaway-n-offers"},"questa")," pagina."))))};t(33);var E=function(){return n.a.createElement("div",{className:"hero-container"},n.a.createElement("h1",null,"Yashiki"),n.a.createElement("p",null,"Ristorante giapponese"),n.a.createElement("div",{className:"hero-btns"},n.a.createElement(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",linkTo:"/pranzo"},"Men\xf9 pranzo"),n.a.createElement(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",linkTo:"/cena"},"Men\xf9 cena")))};t(34);var v=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"link-container"},n.a.createElement("p",{className:"big-footer-title"},"Info"),n.a.createElement(c.b,{to:"/info",className:"footer-link-items"},"Orari"),n.a.createElement("br",null),n.a.createElement(c.b,{to:"/info",className:"footer-link-items"},"Dove siamo"),n.a.createElement("br",null),n.a.createElement(c.b,{to:"/info",className:"footer-link-items"},"Numero di telefono"),n.a.createElement("br",null),n.a.createElement(c.b,{to:"/ToS",className:"footer-link-items"},"Privacy & Cookies"),n.a.createElement("p",{className:"copyright-text"},"(C) 2021 Yashiki Ristorante Giapponese")),n.a.createElement("div",{className:"other-stuff-container"},n.a.createElement(c.b,{to:"/home",className:"footer-logo"},"Yashiki"),n.a.createElement("br",null),n.a.createElement(c.b,{to:{pathname:"https://www.instagram.com/yashiki_sushi/?hl=it"},className:"footer-icon ig",target:"_blank"},n.a.createElement("i",{class:"fab fa-instagram"})),n.a.createElement(c.b,{to:{pathname:"https://www.instagram.com/yashiki_sushi/?hl=it"},className:"footer-icon",target:"_blank"},n.a.createElement("i",{class:"fab fa-facebook fb"}))))};var f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,null),n.a.createElement(p,null),n.a.createElement(v,null))},g=t(2);t(15);var b=function(e){return n.a.createElement("div",{className:"product-content"},n.a.createElement("div",{className:"image-container"},n.a.createElement("img",{className:"product-image",src:e.src}),n.a.createElement("div",{class:"image-label ".concat(e.limited)},n.a.createElement("i",{class:"fa fa-circle"}))),n.a.createElement("h3",{className:"product-title"},e.title),n.a.createElement("h6",{className:"price"},"AYCE: ",n.a.createElement("i",{className:"".concat(e.icon)})),n.a.createElement("p",{className:"product-description"},e.description),n.a.createElement("p",{className:"numCount"},"N. di pezzi totale: ",e.nPieces),n.a.createElement("div",{className:"div-color bottone"},"Numero: \xa0",e.number))};var h=function(){return n.a.createElement("div",{className:"cards"},n.a.createElement("h1",null,"Check out these EPIC Destinations!"),n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("ul",{className:"cards__items"},n.a.createElement(b,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/pranzo"}),n.a.createElement(b,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/pranzo"})),n.a.createElement("ul",{className:"cards__items"},n.a.createElement(b,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/pranzo"}),n.a.createElement(b,{src:"images/img-4.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/pranzo"}),n.a.createElement(b,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/pranzo"})))))};function N(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null))}t(35);var z=t(19);function I(){var e=document.getElementById("dots"),a=document.getElementById("more"),t=document.getElementById("read-more-btn");"none"===e.style.display?(e.style.display="",t.innerHTML="Mostra di pi\xf9",a.style.display="none"):(e.style.display="none",t.innerHTML="Mostra di meno",a.style.display="inline")}function T(){var e=document.getElementById("dots1"),a=document.getElementById("more1"),t=document.getElementById("read-more-btn1");"none"===e.style.display?(e.style.display="",t.innerHTML="Mostra di pi\xf9",a.style.display="none"):(e.style.display="none",t.innerHTML="Mostra di meno",a.style.display="inline")}var k=function(){return n.a.createElement("div",{className:"cena-container"},n.a.createElement("h1",{className:"big-Title"},"All You Can Eat ",n.a.createElement("br",null)," 20.90\u20ac"),n.a.createElement("div",{className:"info-container-cena"},n.a.createElement("p",{className:"various-info 1"},"Coperto: 2\u20ac"),n.a.createElement("p",{className:"various-info 2"},"I bambini sotto i 120cm pagano met\xe0"),n.a.createElement("p",{className:"various-info symbol"},"I piatti con il simbolo: ",n.a.createElement("i",{class:"fa fa-circle"})," sono ordinabili al massimo 3 volte"),n.a.createElement("p",{className:"various-info 4"},"Il cibo \xe8 vita e non va sprecato. ",n.a.createElement("br",null)," Eventuali eccessi verranno conteggiati ai prezzi di listino."),n.a.createElement("p",{className:"various-info warning 5"},"Per evitare spiacevoli inconvenienti",n.a.createElement("span",{id:"dots"},"...")," ",n.a.createElement("span",{id:"more"},"si prega di informare preventivamente il nostro personale nel caso di allergie o intolleranze alimentari o nel caso in cui si stia seguendo una dieta vegetariana. Siamo preparati per consigliarti nel migliore dei modi. Tutti i piatti potrebbero presentare tracce di sesamo o soia e contengono glutammato di sodio. I vini e le bevande possono contenere solfiti."," "),n.a.createElement("br",null),n.a.createElement("button",{onClick:I,id:"read-more-btn"},"Mostra di pi\xf9")),n.a.createElement("p",{className:"various-info warning 6"},"Alcuni ingredienti dei nostri piatti",n.a.createElement("span",{id:"dots1"},"..."),n.a.createElement("span",{id:"more1"}," ","contrassegnati con un (*) potrebbero essere surgelati all\u2019origine o acquistati freschi e surgelati da noi con abbattitore di temperatura per la corretta conservazione nel rispetto della normativa sanitaria"," ")," ","\xa0",n.a.createElement("button",{onClick:T,id:"read-more-btn1"},"Mostra di pi\xf9"))),n.a.createElement("div",{className:"gallery"},z.map((function(e){return n.a.createElement(b,{src:e.img_path,title:"".concat(e.name," ").concat(e.surgelato?"*":""),description:e.description,AYCE:"AYCE: ",icon:e.ALY?"fas fa-check-circle":"fas fa-times-circle",number:e.number,nPieces:e.nPieces,limited:e.limited?"":"invisible"})}))))};function y(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null))}t(36);var A=function(){return n.a.createElement("div",{id:"info-cont"},n.a.createElement("div",{className:"info-panel box-1"},n.a.createElement("h1",{className:"_title"},"Info e orari"),n.a.createElement("div",{className:"info_section"},n.a.createElement("div",{className:"open-time section"},n.a.createElement("h1",{className:"_subtitle"},"Non ho ancora finito cazzo guardi cogloine")))),n.a.createElement("div",{className:"map box-1"},n.a.createElement("iframe",{title:"mappacartina",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.320766869771!2d7.753048815294499!3d44.97779457378808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47880c0cf3ff3597%3A0xe59f6240a597c5fa!2sYashiki%20Ristorante%20Giapponese!5e0!3m2!1sit!2sit!4v1630415221749!5m2!1sit!2sit",className:"mappa"})))};var L=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(A,null))};t(37);var w=function(){return n.a.createElement("div",null,n.a.createElement("p",{className:"beginning centered"},"NOTE LEGALI, PRIVACY POLICY e POLITICA Cookie",n.a.createElement("br",null),"ai sensi del Regolamento Europeo 679/2016 (GDPR)"),n.a.createElement("p",{className:"last-update centered"},"ultimo aggiornamento in data  29/05/2020"),n.a.createElement("h1",{className:"title"},"POLITICA DEI COOKIES"),n.a.createElement("div",{className:"content important"},"Questo sito non utilizza coockies di tracciamento di alcun genere. ",n.a.createElement("br",null)," I soli cookies utilizzati sono quelli tecnici necessari al funzionamento del sito."),n.a.createElement("h1",{className:"title"},"NOTE LEGALI"),n.a.createElement("div",{className:"content"},"Tutti contenuti del sito, siano essi testuali, fotografici o multimediali sono stati approvati dal Titolare del Sito che ne dichiara la propriet\xe0 intellettuale e/o il diritto di utilizzo per gli scopi perseguiti da questo sito."),n.a.createElement("h1",{className:"title"},"INFORMATIVA SULLA PRIVACY"),n.a.createElement("div",{className:"content"},n.a.createElement("ol",{id:"elenco",type:"1"},n.a.createElement("li",null,"Trattamento dei dati personali ",n.a.createElement("br",null),"Il Titolare del sito manifesta la pi\xf9 alta attenzione nei confronti della protezione dei dati personali, avendo adottato misure adeguate e necessarie alla tutela dei dati e alla conservazione degli stessi in virt\xf9  dell\u2019applicazione  della disciplina nazionale ed europea di riferimento e avendo esaminato  ogni rischio  connesso  alle attivit\xe0  sopra  richiamate. L'accesso ad alcune sezioni del sito e/o eventuali richieste di informazioni o di servizi da parte degli utenti del sito potranno essere subordinati all'inserimento di dati personali il cui trattamento da parte del  Titolare  del sito,  quale Titolare del trattamento, avverr\xe0 nel rispetto del Regolamento generale sulla protezione dei dati (Regolamento UE 2016/679)  e  della normativa   nazionale   vigente   in   materia   cui   il   Titolare   del   sito   si   \xe8   sempre   adeguato. La presente informativa ha lo scopo di consentire agli utenti di conoscere, anche prima di accedere alle varie sezioni del sito e di conferire i propri dati, in che modo il Titolare del sito tratta i dati personali degli utenti e sar\xe0 comunque necessario che l\u2019utente ne prenda visione prima che egli conferisca propri dati personali compilando gli appositi spazi nelle varie sezioni del sito, fornendo consenso al trattamento dei propri dati."),n.a.createElement("li",null,"Finalit\xe0 del trattamento ",n.a.createElement("br",null),"Secondo le esigenze di volta in volta manifestate dall\u2019utente che accede alle varie sezioni del sito, le finalit\xe0 del trattamento dei dati personali conferiti direttamente dagli utenti mediante la compilazione dei moduli on-line potranno essere le seguenti:",n.a.createElement("ol",{type:"a",className:"elenco"},n.a.createElement("li",null,"erogare il servizio richiesto, con tutti servizi connessi e associati a qualsiasi titolo;"),n.a.createElement("li",null,"previo consenso dell\u2019utente e fino alla revoca dello stesso, effettuare attivit\xe0 di marketing quali, (in via meramente esemplificativa ma non esaustiva) l'invio di materiale promozionale e pubblicitario, svolgimento di connesse analisi statistiche circa l'utilizzo da parte degli utenti di questo sito allo scopo di migliorare i servizi e prodotti offerti e l'esperienza di navigazione); ci\xf2 potrebbe avvenire a mezzo di e-mail, fax, mms e sms, come detto previo specifico consenso e fino alla revoca dello stesso;"),n.a.createElement("li",null,"inviare newsletter (email informative a carattere periodico e/o occasionale) per ricevere aggiornamenti su tutte le novit\xe0 del sito e tante altre notizie sui servizi offerti dal Titolare del sito e sulle eventuali promozioni in corso (sezione \u201cAbbonati alla newsletter\u201d del sito);"),n.a.createElement("li",null,"rispondere alle richieste degli utenti in relazione a prodotti/servizi offerti dal Titolare del sito."))))),n.a.createElement("h1",{className:"title"},"MODALITA' E DURATA DEL TRATTAMENTO"),n.a.createElement("div",{className:"content"},"I dati personali saranno trattati in forma prevalentemente automatizzata, con logiche strettamente correlate alle predette finalit\xe0, dal personale e da collaboratori di Yashiki di Zhou Aiyane dalle imprese espressamente nominate come responsabili del trattamento.Al di fuori di queste ipotesi i dati non saranno comunicati a terzi n\xe8 diffusi, se non nei casi specificamente previsti dal diritto nazionale o dell'Unione europea. I dati verranno trattati per tutta la durata dei rapporti contrattuali instaurati e anche successivamente, per il tempo in cui il titolare sia soggetto a obblighi di conservazione per finalit\xe0 giuridiche fiscali o per altre finalit\xe0, previsti, da norme di legge e/o regolamentari."),n.a.createElement("h1",{className:"title"},"NATURA DEL CONFERIMENTO DEI DATI PERSONALI DEGLI UTENTI"),n.a.createElement("div",{className:"content"},"Il conferimento dei dati personali \xe8 facoltativo. Qualora esso si rendesse necessario, verr\xe0 richiesta all'utente una sua accettazione esplicita al trattamento dei dati. I dati personali trattati a seguito di approvazione esplicita da parte dell'utente, saranno solo ed esclusivamente quei dati che sono indispensabili all'erogazione del servizio richiesto dall'utente stesso al Titolare del sito.L'utente \xe8 informato circa il fatto che l'eventuale mancato consenso al trattamento dei suoi dati personali pu\xf2 rendere impossibile al Titolare del sito, l'erogazione del servizio richiesto.Si informa  inoltre l'utente  che  il  mancato,  parziale o  inesatto  conferimento dei  dati  personali  facoltativi, qualora venissero richiesti, non comporta alcuna conseguenza."),n.a.createElement("h1",{className:"title"},"CATEGORIE DI DATI PERSONALI OGGETTO DEL TRATTAMENTO"),n.a.createElement("div",{className:"content"},"I sistemi informatici e le procedure software preposte al funzionamento del sito stesso acquisiscono, oltre ai dati personali conferiti direttamente dagli utenti (quali nome, cognome, indirizzo postale, di posta elettronica, numero di contatto telefonico ecc.) in fase di connessione al sito, indirettamente alcuni dati personali la cui trasmissione  \xe8 implicita nell\u2019uso dei protocolli di comunicazione di Internet.Tali dati vengono trattati al solo fine di effettuare indagini statistiche anonime."),n.a.createElement("h1",{className:"title"},"CATEGORIE DI SOGGETTI CHE POTRANNO VENIRE A CONOSCENZA DEI DATI PERSONALI DEGLI UTENTI"),n.a.createElement("div",{className:"content"},"I dati personali potranno  essere  portati a  conoscenza  di dipendenti  o  collaboratori (per  \"collaboratori\"  si inteno qui anche le aziende specializzate  che  collaborano con  il  Titolare del  sito  allo sviluppo  commerciale  della propria  attivit\xe0  -es. societ\xe0  di  invio newsletter  )  dell'Ufficio Marketing  del  Titolare (si  noti  che con  la definizione Ufficio Marketing si vuole qui intendere non necessariamente un'unit\xe0 produttiva definita specificatamente nell'organigramma Aziendale bens\xec la o le persone incaricate dal Titolare al trattamento dei dati di attendere alle attivit\xe0 di sviluppo commerciale e strategico proprie dell'attivit\xe0 di marketing cos\xec come comunemente intesa) che, operando sotto la diretta autorit\xe0 di quest\u2019ultimo, sono nominati responsabili o incaricati del trattamento ai sensi degli artt. 28 e 29 del Regolamento europeo e che riceveranno al  riguardo  adeguate istruzioni  operative;  lo stesso  avverr\xe0 \u2013 a cura dei Responsabili nominati dal Titolare - nei confronti dei dipendenti o collaboratori dei Responsabili."),n.a.createElement("h1",{className:"title"},"AMBITO DI COMUNICAZIONE O DIFFUSIONE DEI DATI PERSONALI DEGLI UTENTI"),n.a.createElement("div",{className:"content"},"I dati personali forniti direttamente dagli utenti mediante la compilazione dei moduli on-line non saranno mai e per nessuna ragione (salvo quelle previste da obblighi di Legge) comunicati a terzi o diffusi in assenza di un consenso espresso dell'utente."),n.a.createElement("h1",{className:"title"},"TITOLARE E RESPONSABILE DEL TRATTAMENTO"),n.a.createElement("div",{className:"content"},"Il Titolare al trattamento dei dati \xe8: Zhou Aiyang ",n.a.createElement("br",null),"L'utente pu\xf2 contattare il Titolare al trattamento dei dati nelle seguenti modalit\xe0: ",n.a.createElement("br",null),"a mezzo email all'indirizzo: a mezzo posta all'indirizzo: Yashiki di Zhou Aiyang - Via Torino, 167 - Trofarello (TO)"),n.a.createElement("h1",{className:"title"},'I DIRITTI DEGLI UTENTI ("Persone Interessate" - secondo definizione Reg. Eu. 679/2016)'),n.a.createElement("div",{className:"content"},"Il Regolamento europeo riconosce il diritto dell'interessato (la persona che conferisce i propri dati) di chiedere al  Titolare del trattamento (qui sopra identificato) l'accesso ai propri dati personali e di ottenerne una copia.In particolare, ai sensi dell'art. 15 del Regolamento, ciascun interessato ha il diritto di ottenere dal Titolare del trattamento la conferma che sia o meno in corso un trattamento di dati personali che lo riguardano e, in tal caso, di ottenere l'accesso ai dati personali e ad una serie di altre informazioni, quali:",n.a.createElement("ol",{type:"a"},n.a.createElement("li",null,"le finalit\xe0 del trattamento;"),n.a.createElement("li",null,"le categorie di dati personali in questione;"),n.a.createElement("li",null,"i  destinatari o  le  categorie di  destinatari  a cui  i  dati personali  sono  stati o  saranno  comunicati,   in particolare se destinatari di paesi terzi o organizzazioni internazionali;"),n.a.createElement("li",null,"quando possibile, il periodo di conservazione dei dati personali previsto oppure, se non \xe8 possibile, i criteri utilizzati per determinare tale periodo;")),"L'interessato ha anche il diritto di chiedere al titolare del trattamento la rettifica o la cancellazione dei propri dati personali, ai sensi degli articoli 16 e 17 del Regolamento, o la limitazione del trattamento dei dati personali che lo riguardano o di opporsi al loro trattamento ai sensi degli articoli 18 e 21.Il Regolamento prevede, all'art. 20, anche il diritto alla portabilit\xe0 dei propri dati.Sono espressamente riconosciuti altres\xec tutti i diritti accordati dalla disciplina nazionale.Ogni interessato pu\xf2 revocare il consenso al trattamento e proporre reclamo al Garante della Privacy, ai sensi della disciplina vigente."),n.a.createElement("h1",{className:"title"},"MODALIT\xc0 DI ESERCIZIO DEI DIRITTI DI CUI AGLI ARTICOLI DA 15 A 22 DEL REGOLAMENTO E PER CONOSCERE L\u2019ELENCO DEI RESPONSABILI DEL TRATTAMENTO"),n.a.createElement("div",{className:"content"},"L\u2019utente  potr\xe0,  in qualunque  momento,  esercitare i  diritti  di cui  agli  articoli da  15  a 22  del  Regolamento nonch\xe8 conoscere l\u2019elenco completo dei Responsabili  facendone richiesta  contattando  il Titolare  nei  modi qui  sopra specificati.L\u2019utente, inoltre, qualora vi abbia consentito, potr\xe0 opporsi al trattamento per le finalit\xe0 di cui alla lettera b) (attivit\xe0 di marketing) effettuato mediante l\u2019indirizzo di posta elettronica dell\u2019utente stesso, cliccando su un apposito \u201c",n.a.createElement("i",null,"link"),"\u201d presente in ogni messaggio di posta elettronica (",n.a.createElement("i",null,"link"),' di "disiscrizione").Annotazione: "',n.a.createElement("i",null,"link"),'" \xe8 il termine tecnico con il quale si definiscono i collegamenti iper-testuali presenti in un sito internet o in altri tipi di comunicazione elettronica. Normalmente tali collegamenti sono evidenziati da una sottolineatura o dal cambiamento in colore o in dimensioni del testo qualora l\'utente vi sovrapponga il puntatore del mouse (normalmente una freccetta che muta in manina alla sovrapposizione su un "',n.a.createElement("i",null,"link"),'")Modalit\xe0 di modifica del \u201cprofilo\u201d dell\u2019utenteL\u2019utente potr\xe0, in qualunque momento modificare  i dati  forniti  o cancellare  il  proprio profilo,  se  presente, servendosi dell\'apposita funzionalit\xe0 "Modifica dati" presente sul sito, oppure inviando un messaggio di posta elettronica all\'indirizzo del Titolare al trattamento dei dati sopra specificato.'),n.a.createElement("h1",{className:"title"},"I BOTTONI dei Social Networks"),n.a.createElement("div",{className:"content"},"bottoni dei Social networks sono bottoni (hyperlinks visualizzati come icone con il logo del Social Network a cui puntano) che permettono di rendere pi\xf9 immediata ed agevole la condivisione dei contenuti sulle pi\xf9 comuni piattaforme social. Qui di seguito i dettagli dei principali servizi:",n.a.createElement("ol",{type:"1"},n.a.createElement("li",null,"Google",n.a.createElement("ul",{className:"elenco"},n.a.createElement("li",null,"Pulsante +1 e widget sociali di Google+ (Google Inc.)"),n.a.createElement("li",null,"Il pulsante +1 e i widget sociali di Google+ (tra cui i commenti)")),"sono servizi di interazione con il social network Google+, forniti da Google Inc. ",n.a.createElement("br",null),"Dati personali raccolti: Cookie e Dati di utilizzo. ",n.a.createElement("br",null),"Luogo del trattamento : USA ",n.a.createElement("br",null),"Privacy Policy - ",n.a.createElement("a",{href:"https://policies.google.com/privacy?hl=it"},"https://policies.google.com/privacy?hl=it")),n.a.createElement("li",null,"Facebook",n.a.createElement("ul",{className:"elenco"},n.a.createElement("li",null,'Pulsante "Mi Piace" e widget sociali di Facebook (Facebook, Inc.)'),"sono servizi di interazione con il social network Facebook, forniti da Facebook, Inc. ",n.a.createElement("br",null),"Dati personali raccolti: Cookie e Dati di utilizzo. ",n.a.createElement("br",null),"Luogo del trattamento : USA ",n.a.createElement("br",null),"Privacy Policy - ",n.a.createElement("a",{href:"https://www.facebook.com/privacy/explanation"},"https://www.facebook.com/privacy/explanation"))),n.a.createElement("li",null,"Twitter",n.a.createElement("ul",{className:"elenco"},n.a.createElement("li",null,"Pulsante Tweet e widget sociali di Twitter (Twitter, Inc.)"),"sono servizi di interazione con il social network Twitter, forniti da Twitter, Inc.  ",n.a.createElement("br",null),"Dati personali raccolti: Cookie e Dati di utilizzo. ",n.a.createElement("br",null),"Luogo del trattamento : USA ",n.a.createElement("br",null),"Privacy Policy - ",n.a.createElement("a",{href:"https://twitter.com/it/privacy"},"https://twitter.com/it/privacy"))),n.a.createElement("li",null,"Linkedin",n.a.createElement("ul",{className:"elenco"},n.a.createElement("li",null,"Pulsante e widget sociali di Linkedin (Linkedin Corp.)"),"sono servizi di interazione con il social network Linkedin, forniti da Linkedin Inc. ",n.a.createElement("br",null),"Dati personali raccolti: Cookie e Dati di navigazione ed utilizzo. ",n.a.createElement("br",null),"Luogo del Trattamento: USA ",n.a.createElement("br",null),"Privacy Policy - ",n.a.createElement("a",{href:"https://www.linkedin.com/legal/privacy-policy"},"https://www.linkedin.com/legal/privacy-policy"))),n.a.createElement("li",null,"Tripadvisor",n.a.createElement("ul",{className:"elenco"},n.a.createElement("li",null,"Pulsante e widget sociali di TripAdvisor (TripAdvisor LLC)"),"sono servizi di interazione con la piattaforma di recensioni TripAdvisor, forniti da TripAdvisorLLC. ",n.a.createElement("br",null),"Privacy Policy - ",n.a.createElement("a",{href:"https://tripadvisor.mediaroom.com/IT-privacy-policy"},"https://tripadvisor.mediaroom.com/IT-privacy-policy"))))))};var O=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,null))};t(38);var C=function(){return n.a.createElement("div",{className:"error-page"},n.a.createElement("h1",{className:"big-title"},"404"),n.a.createElement("p",{className:"error-description"},"Questa pagina ",n.a.createElement("br",null)," non esiste!"),n.a.createElement(c.b,{to:"/home"},n.a.createElement("button",{className:"back-to-home"},"Torna alla home")),n.a.createElement("br",null),n.a.createElement("i",{className:"fas fa-exclamation-triangle error-icon"}))};var R=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C,null))};var S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(u,null),n.a.createElement(g.d,null,n.a.createElement(g.b,{path:"/home",component:f}),n.a.createElement(g.b,{path:"/pranzo",component:N}),n.a.createElement(g.b,{path:"/cena",component:y}),n.a.createElement(g.b,{path:"/info",component:L}),n.a.createElement(g.b,{path:"/ToS",component:O}),n.a.createElement(g.b,{path:!0,exact:"/"},n.a.createElement(g.a,{to:"/home"})),n.a.createElement(g.b,{component:R}))))};o.a.render(n.a.createElement(S,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.290b2e67.chunk.js.map