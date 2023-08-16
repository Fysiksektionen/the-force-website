import React, { useState } from "react";
import logo from "./logo.png";
import NewsItem from "./NewsItem";
import moose from "./assets/moose.png";
import euler from "./assets/euler.png";
import openist from "./assets/openist.jpg";

function App() {
  return (
    <div style={{}}>
      <header
        style={{
          backgroundColor: "#ffd100",
          padding: "1rem",
          // minHeight: "100vh",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "serif",
          fontSize: "2rem",
          color: "black",
        }}
      >
        <a style={{ cursor: "pointer" }}>
          <img
            src={logo}
            alt="logo"
            style={{
              height: "10vh",
              marginTop: "4rem",
              rotate: "2.5deg",
            }}
          />
        </a>
        <hr
          style={{
            width: "60%",
            color: "black",
            height: "0.15rem",
            borderWidth: "0",
            backgroundColor: "black",
          }}
        ></hr>
        <p>Fysiksektionens daggblad. Beroende sedan 1932.</p>
      </header>

      <NewsItem
        headline="Älgar har väl också växtverk?"
        tagline="Eller varför jag började täcka skogsriset med krossad alvedon"
        text="Skogens konung är både ett mäktigt och fascinerande djur. Med sina 800kg och två meter i mankhöjd är den fullvuxna älgtjuren det största djuret du kan tänkas stöta på i de svenska skogarna, och den tar förstås upp en lika stor plats i den kulturella bilden av dessa. Det låter som ett liv i prakt och ståt, men finns det några baksidor till denna storhet? Jag bestämde mig för att undersöka frågan.\n

        Denna historia tar sin början under en middag i april. Tillsammans med ett par vänner intog jag denna kväll ett mål köttfärssås. Det är inte så speciellt i sig, men just denna gång var köttfärsen i fråga faktiskt älgfärs, och jag kan intyga att den var mycket god. Ämnet älg hängde alltså i luften när vi över målet talades vid och, omgiven av en aspirerande respektive examinerad jägare som jag var, började vi till sist tala om just älgen. Vi talade om hur den var mycket god och hur de blir så och så stora. Över detta ojade vi oss förstås lite kollektivt, för de blir verkligen Stora med stort s. Och inte bara blir de stora! Det går fort också, redan vid två års ålder var de könsmogna fick jag höra, och fullvuxna blir de redan som sjuåringar. Ungefär här slog den tanke som utgör själva kärnan till denna artikel mig. För om jag låg där i sängen som sjuåring och kved över min växtverk, hur, rent ut sagt överjävligt, måste inte den stackars älg-fjolårskalven mått där inne i skogen?\n
        
        Jag reste genast frågan och vi råkade i diskussion, men lyckades trots denna inte komma fram till huruvida älgar led något på detta vis. Kvällen fortskred och ämnet blev snart fåglar; vi spelade Wingspan. Jag kunde dock inte skaka av mig idén, och ett embryo till rubriken på denna artikel satt redan som brännmärkt i mitt minne. Det var några veckor därpå då jag på allvar började undersöka frågan medelst en sökning på Google. Att överhuvudtaget hitta relevanta resultat (d.v.s. sådana som handlar om älgar och växtverk och inte den ena eller andra separat) var svårt, och även de relevanta resultaten handlade uteslutande om de snabbt växande hornen. Här kan jag inflika att det verkar säkerställt att i varje fall dessa medför något slags värk. Mina efterforskningar tog mig vidare till hundar, för att potentiellt hitta något slags prejudikat, och där fanns viss forskning som pekade på existensen av växtvärk hos större hundraser. I slutändan var jag dock fast, och jag beslutade mig för att söka experthjälp.\n
        
        I ett samtal vänder jag mig till en av Sverigas främsta älgexperter: Göran Ericsson, känd för allmänheten bland annat för sin medverkan i SVT:s bevakning av den stora älgvandringen. “Intressant fråga, det är möjligt att de har det när musklerna sträcks ut, men det är inget vi vet”, svarar Ericsson när jag lägger fram mitt spörsmål. Jag har lidit ännu ett nederlag. Ungefär här borde jag nog gett upp, men jag gav ett sista halvhjärtat försök och frågade chatGPT. “There is no definitive answer to whether moose get growing pains or not, as there is limited research available on the topic”, inleder den, för att sedan tala om hornen. Kanske borde jag ha frågat Snapchats chatbot; har förstått att den är en mytoman av än större mått. Det gjorde jag dock ej, och hoppet om ett snabbt svar är nu fullkomligt dött. Jag kan enbart hoppas att denna artikel, detta mitt rop på hjälp, kan sporra någon ung och ambitiös student att i framtiden lysa ett ljus över detta eftersatta område av ekologin, detta skogens djuphav.\n
        
        Så varför började jag strö ut krossad alvedon i skogen? Jo, jag ljög. Att köpa tillräckligt med alvedon för att sprida ut den över ens ett litet skogsparti skulle kosta skjortan och ge mig en hel del blickar på apoteket. Och tänk bara på de stackars ekorrarna.
        "
        author="Eric Oldgren (aka redaktör), F-20 Fotnot"
        date="2023-05-20"
        image={moose}
      ></NewsItem>

      <NewsItem
        headline="Lösningsmetoder"
        text="Har de senaste tentorna varit svåra? Har tentarättaren skickats från djävulen själv? Frukta inte, här kommer räddningen! Som evig tentarättare har jag studerat lösningsmetoder och släpper i denna artikel de mest effektiva:\n

        Dimensionsanalys:\n
        Genom att undersöka dimensionen på svaret och på formlerna går det att göra utförl…\n
        
        Sannolikhetsteori:\n
        Är uppgiften en fråga inom sannolikhetslära inses svaret lätt. Läsaren bör inse att antingen händer det eller så händer det inte det följer då att sannolikheten är 50%. Det följer då att sannolikheten att du får A på tentan är med detta knep 50%, antingen får du A eller så får du något annat betyg. Denna metod funkar både i kursen sannstat samt inom statdaten vilket, enligt senaste undersökning, endast 25% av de som tar statdaten i år insett. \n
        
        Lösning\n
        Använd en stark syra för att lösa hela tentan, är hela tentan löst garanteras nämligen ett A på detta kursmoment. \n
        
        Huvudbonad\n
        Tycker du att syror är läskiga och promenader alldeles för fysiskt krävande behöver du inte oroa dig! Det finns fortfarande en beprövad metod använd av en av tidernas största matematiker. Den är dessutom väldigt simpel, allt du behöver göra är att sätta ett par kalsonger på ditt huvud. Oklart hur vetenskapen bakom detta funkar men resultaten går inte att förneka. Det är dessutom ett väldigt praktiskt tips då det inte krävs mycket förberedelse och har du mot förmodan glömt att ta med ett par extra kalsonger till tentan kan du alltid utnyttja toapausen till att placera dina underkläder på huvudet.\n
        
        Pengar\n
        På 1600-talet köpte L’Hopital en matematisk regel för derivering av sin lärare och hittills verkar det ha funkat väldigt bra för honom. När examinatorn gör sin vandring in i tentasalen du sitter i behöver du alltså bara hosta upp tillräckligt med pengar, har du tur döper hen om tentan efter dig också.\n
        
        Fantasi\n
        Men vad gör du om dina pengar inte räcker till? Använd fantasin och gör det så kreativt att ingen vågar ifrågasätta ditt resultat. Hardy sa angående Ramanujans approximation om pi “Formeln måste vara sann för om den inte är det skulle ingen ha fantasin nog att komma på den”. Du behöver alltså bara ge ett svar så orimligt och kreativt att du skrämmer rättaren till att lita mer på ditt svar än deras egen kunskap.\n
        
        Drömmar\n
        Om fantasin inte är bra nog finns det ytterligare knep man kan ta och vi kan återigen låna dessa från Ramanujan. Enligt Ramanujan själv uppenbarade sig många av hans matematiska formler för honom när han sov och om detta funkade för honom, varför skulle det inte funka för dig? Fastnar du på en fråga kan du alltså alltid ta en timme eller två och sova, förhoppningsvis väcker inte tentavakterna dig innan svaret uppenbarat sig.\n
        
        
        Äpple\n
        Ett äpple ska ha hjälpt Newtonn förstå gravitation, detta hjälpmedel som är tillåtet hjälpmedel på alla tentor kan därför utnyttjas på flera olika sätt. Det mest uppenbara är att du själv härleder alla formler från hur äpplet rör sig, hade du klarat detta hade du däremot inte läst såhär långt i denna artikel. *Vi fortsätter därför med ett annat förslag, genom att definiera varje symbol i texten mot äpplen av olika färger, tex x= 🍏, ∰=🍎osv, blir det svårare för tentarättaren att finna slarvfel i lösningen och riskerar därmed att ge dig rätt trots att du gjort fel. Är detta ett jobbigt alternativ för dig och du känner att du riskerar tappa bort dig finns det sista, men kanske mest effektiva knepet, kasta äpplet på tentavakterna så att de tar inspiration av Ramanujan. När tentavakterna söker uppenbarelser kan du snabbt ta fram en apple-pryl och googla svaret.\n
        
        Insändare rättad av \n
        Anonoym tentarättare \n
        𝔉-Betyg\n
        "
        date="2023-05-24"
        image={euler}
      ></NewsItem>

      <NewsItem
        headline="Att vara sjuk i Åre"
        tagline="eller De är bar å(re) åk"
        text="Fysiksektionen har en sedan många år etablerad tradition att resa till Åre på sportlovet. Med undantag för den coviddrabbade vintern 2020/2021 har denna resa återkommit årligen någon gång i månadsskiftet januari/februari, oftast sammanfallande (överfallande?) med Fusion. Den 28 februari i år var det dags igen. 48 förväntansfulla f-teknologer förpackades i en buss med slutdestination Åre by. Bland dessa resenärer fanns också undertecknad, om än en något till åren kommen f-teknolog. Under förväntan vilade dock en viss kymighet. Faktum var - jag var på en väg och samtidigt på väg att bli sjuk. Efter en fullgod natts sömn vaknade vi alla utvilade upp i ett solglansigt och vindstilla Åre. Haha, nej såklart inte. Efter en urkass natts osömn och det sista misslyckade försöket att somna om rullade vi in i ett mörkt, snöigt och blåsigt Åre. Nu var det dags att byta om och göra sig redo för skidåkning. Njut nu för fan. \n

        Dag 1 - åka skidor. Trodde du ja. Tillsammans med några andra fysiker gav jag mig ut i en snöpiskad pist. Swoosh, swoosh. Något var fel. Redan efter de tre första svängarna kände jag hur pulsen steg alltför mycket. Tittar ner på min pulsklocka och ser en onormalt hög puls. Abort. \n
        
        Så ligger man där i en 90 centimeter bred säng, avslagen, och tänker på alla de f-teknologer som är ute och lägger åttor i backarna. Slut på dag 1.\n
        
        Dag 2 - åka skidor. Trodde du ja. Fortfarande mer eller mindre däckad blir det ytterligare en dag i sängen. Eller ja, en halvdag. Då Åre är så mycket mer än en vanlig skidby kan man ju faktiskt göra saker där också. Efter ihopsamlandet av mig själv reste jag mig från min sedentära position och begav mig mot byn. Snide, våfflor och titta i skyltfönster gjorde även denna dag skild från meningslöshet. Men det måste ändå poängteras; resan gick till Åre och några skidor hade inte åkts än. Fortsatt molnigt, hård vind och snöfall.\n
        
        Ljus i vintermörkret fanns dock. En grannstuga bjöd på sällskap, dryck och bastu. Kvällen var gjord! Skred hem på kall isbark. \n
        
        Dag 3 - åka skidor. Ja! Han är sannerligen återuppstånden. Inga andra likheter i övrigt men äntligen. Vädret började också denna dag förvandlas till ett mer gynnsamt sådant. Vindarna mojnade och sprickor i molntäcket började uppstå. Efter lite varsam dagsåkning avslutades dagen med säsongens bästa åttor under Duveds kabinbana. Kan det bli bättre? \n
        
        Dag 4 - åka skidor. Ja! Svar på föregående fråga: Ja! Sista dagen valde himlen att klä av sig och visa sin blå mage. Med en stark sol i ögonen och hela systemet öppet blev denna dag en fantastisk avslutning på vad som initialt kändes som ytterligare en av de där skidsemesterkatastrofer som ibland uppstår. Om dessa kan ni bland annat läsa i tidigare vårnummer av denna tidning. Resor till Åre i sol begagnas inte alltid med sol som redaktör emeritus Martin Andrae kan berätta mer om också muntligen om ni nån gång träffar på honom. \n
        
        Ja. Sålunda förlöpte årets Åreresa ur en sjuk f-teknologs ögon. Nån annan hade kanske inte omdanat kronologin för dramaturgisk effekt. Men vad gör väl det tänkte jag när jag släckte lampan på nattåget tillbaka till Stockholm."
        author="Anonym badanka, F-X Funknown"
        date="2023-07-24"
      ></NewsItem>

      <NewsItem
        headline="Den anonyma openisten"
        text="De läser våra kurser, mikrar sina matlådor i konsulatet och sjunger dagligen Système International, openister finns på riktigt och de går mitt ibland oss!\n

        Ett nytt läsår innebär nya utmaningar och erfarenheter för var och varje f-teknolog. Men något märkligt verkar alltid ske för de som börjar årskurs två; “har klassen alltid varit så här stor?”, “har jag verkligen inte hunnit tala med den här trevliga gossen längst bak föreläsningssalen?”. Varje höst vid läsårets ingång rapporteras tidigare ettan i teknisk fysik och matematik ha ökat med cirka 20 individer respektive, utan uppenbar förklaring.\n
        
        The Force har utrett fenomenet och har ställt det bortom allt tvivel att det rör sig om en mycket specifik typ av “Skin Walker” (de: “Hautgänger” eller “Hautwechsler”) som genom något kallat Öppen Ingång varje år nästlar sig in på Kungliga Teckniska Högskolans högt ansedda civilingenjörsprogram. Enligt klassisk KTH mytologi är en Openist (ˈəʊ.pən ɪst) en teknolog som har möjlighet förvandlas till eller anta skepnaden av vilken sektionsmedlem som helst på campus valhallavägen. Begreppet används aldrig för färdiga civilingenjörer.\n
        
        Openisten känne tecknas av sin tillbakadragenhet när det gäller bevisföring, sin till synes tre ECTS-motsvarande kemikunskaper och lägre högskoleprovsresultat. Under fulsittningar lyckas sällan en openist anta fullständig skepnad av f-teknologen (troligen en direkt följd av intoxikation) och på delar av deras overaller framstår fläckvis den skarpa nyansen av röd, känt i folkmun som “vackert röd”.\n
        
        Om du skulle träffa på en person du misstänker har tagit en 6 hp-kurs som enbart omfattar väljandet av ingenjörsinriktning finns det ingen anledning att vara orolig, openisten är i regel harmlös så länge hen förblir oprovocerad. Interagerar du med en är det dock viktigt att aldrig nämna dess härkomst, varelsen blir snabbt hotfull och kan till och med anfalla om den inser att illusionen är bruten.\n
        
        Inga incidenter har rapporterats som direkt kan relateras till openister, men se er om en extra gång när ni passerar Hardox, fler varelser än bara bergsmän rör sig där inne…\n
        "
        author="Edvin Löthgren, F-19 Fasett"
        date="2023-03-03"
        image={openist}
      ></NewsItem>
    </div>
  );
}

export default App;
