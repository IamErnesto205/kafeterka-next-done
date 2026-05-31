import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podmínky zpracování osobních údajů – Kafeterka",
  robots: { index: false },
};

export default function PodminkyPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", marginBottom: 8 }}>
          Podmínky zpracování osobních údajů
        </h1>
        <p style={{ color: "var(--kf-muted)", marginBottom: 48 }}>Poslední aktualizace: 31. 5. 2026</p>

        <p>V Kafeterce si vážíme vašeho soukromí. Tyto podmínky vysvětlují, jak zpracováváme osobní údaje návštěvníků našeho webu, zákazníků a osob, které nás kontaktují kvůli objednávce dortu, rezervaci stolu nebo jinému dotazu.</p>

        <h2>1. Správce osobních údajů</h2>
        <p>Správcem osobních údajů je:</p>
        <p>
          <strong>Kafeterka</strong><br />
          Provozovatel: Lucie Pančochová<br />
          IČO: 09806041<br />
          Adresa: Mariánské nám. 308, 688 01 Uherský Brod 1<br />
          E-mail: <a href="mailto:kafeterka@email.cz">kafeterka@email.cz</a><br />
          Telefon: <a href="tel:+420774295710">774 295 710</a>
        </p>
        <p>Dále jen „správce" nebo „my".</p>

        <h2>2. Jaké osobní údaje zpracováváme</h2>
        <p>Zpracováváme pouze údaje, které nám sami poskytnete nebo které jsou nezbytné pro fungování webu. Může jít zejména o:</p>
        <ul>
          <li>jméno a příjmení,</li>
          <li>e-mailovou adresu,</li>
          <li>telefonní číslo,</li>
          <li>obsah zprávy zaslané přes kontaktní formulář,</li>
          <li>informace potřebné k objednávce dortu nebo rezervaci,</li>
          <li>případně technické údaje související s návštěvou webu, například cookies nebo základní provozní údaje.</li>
        </ul>

        <h2>3. Proč osobní údaje zpracováváme</h2>

        <h3>Vyřízení dotazu</h3>
        <p>Pokud nám napíšete přes kontaktní formulář, e-mail, Instagram nebo jiný komunikační kanál, použijeme vaše údaje k odpovědi na váš dotaz. <em>Právní základ: oprávněný zájem nebo jednání před uzavřením smlouvy.</em></p>

        <h3>Objednávka dortu nebo jiného produktu</h3>
        <p>Pokud si u nás objednáváte dort nebo jiný produkt, zpracováváme údaje potřebné k domluvě objednávky, termínu, velikosti, chuti, předání a případné další komunikaci. <em>Právní základ: plnění smlouvy nebo jednání před jejím uzavřením.</em></p>

        <h3>Rezervace stolu</h3>
        <p>Pokud si rezervujete stůl, můžeme zpracovávat vaše jméno, kontakt a informace potřebné k rezervaci. <em>Právní základ: plnění smlouvy nebo oprávněný zájem.</em></p>

        <h3>Plnění zákonných povinností</h3>
        <p>Některé údaje můžeme uchovávat kvůli účetnictví, daňovým povinnostem nebo případné ochraně našich práv. <em>Právní základ: plnění právní povinnosti a oprávněný zájem.</em></p>

        <h3>Fungování webu a cookies</h3>
        <p>Na webu mohou být používány technické cookies nutné pro správné fungování stránek. Pokud bychom používali analytické nebo marketingové cookies, budeme vás o tom informovat a tam, kde je to potřeba, si vyžádáme váš souhlas. <em>Právní základ: oprávněný zájem u technických cookies, případně souhlas u analytických nebo marketingových cookies.</em></p>

        <h2>4. Jak dlouho údaje uchováváme</h2>
        <p>Osobní údaje uchováváme pouze po dobu nezbytně nutnou:</p>
        <ul>
          <li>údaje z kontaktních zpráv po dobu potřebnou k vyřízení komunikace,</li>
          <li>údaje k objednávkám a rezervacím po dobu potřebnou k jejich vyřízení,</li>
          <li>účetní a daňové doklady po dobu stanovenou právními předpisy,</li>
          <li>údaje zpracovávané na základě souhlasu do jeho odvolání.</li>
        </ul>
        <p>Po uplynutí potřebné doby údaje smažeme nebo anonymizujeme.</p>

        <h2>5. Komu můžeme údaje předat</h2>
        <p>Vaše osobní údaje nepředáváme třetím stranám k prodeji ani je nezneužíváme k nevyžádanému marketingu. K údajům však mohou mít přístup někteří naši dodavatelé, kteří nám pomáhají s provozem webu, komunikací nebo účetnictvím. Může jít například o:</p>
        <ul>
          <li>poskytovatele webhostingu,</li>
          <li>správce webu,</li>
          <li>poskytovatele e-mailových služeb,</li>
          <li>účetní nebo daňového poradce,</li>
          <li>provozovatele sociálních sítí, pokud nás kontaktujete přes Instagram nebo Facebook.</li>
        </ul>
        <p>Snažíme se vybírat pouze takové partnery, kteří zajišťují odpovídající ochranu osobních údajů.</p>

        <h2>6. Sociální sítě</h2>
        <p>Na webu můžeme odkazovat na naše profily na Instagramu nebo Facebooku. Pokud nás kontaktujete přes sociální sítě, zpracování vašich údajů se řídí také pravidly dané platformy. Doporučujeme seznámit se s podmínkami ochrany osobních údajů příslušné sociální sítě.</p>

        <h2>7. Cookies</h2>
        <p>Cookies jsou malé soubory, které se ukládají ve vašem zařízení a pomáhají webu správně fungovat. Na našem webu mohou být používány zejména:</p>

        <h3>Technické cookies</h3>
        <p>Tyto cookies jsou nezbytné pro základní fungování webu. Bez nich by některé části webu nemusely fungovat správně.</p>

        <h3>Analytické cookies</h3>
        <p>Tyto cookies nám mohou pomáhat zjistit, jak návštěvníci web používají, abychom ho mohli zlepšovat. Použijeme je pouze tehdy, pokud jsou na webu skutečně nasazeny a pokud je k tomu potřeba souhlas, požádáme vás o něj.</p>

        <h3>Marketingové cookies</h3>
        <p>Tyto cookies slouží například k měření reklamy nebo personalizaci obsahu. Použijeme je pouze v případě, že jsou na webu nasazeny a že nám k tomu dáte souhlas.</p>

        <p>Nastavení cookies můžete kdykoliv změnit ve svém prohlížeči nebo přes nastavení cookies na našem webu, pokud je tato možnost dostupná.</p>

        <h2>8. Vaše práva</h2>
        <p>V souvislosti se zpracováním osobních údajů máte právo:</p>
        <ul>
          <li>požádat o přístup ke svým osobním údajům,</li>
          <li>požádat o opravu nepřesných údajů,</li>
          <li>požádat o výmaz údajů,</li>
          <li>požádat o omezení zpracování,</li>
          <li>vznést námitku proti zpracování,</li>
          <li>požádat o přenositelnost údajů,</li>
          <li>odvolat souhlas, pokud je zpracování založeno na souhlasu,</li>
          <li>podat stížnost u Úřadu pro ochranu osobních údajů.</li>
        </ul>
        <p>Kontaktní údaje Úřadu pro ochranu osobních údajů najdete na jeho <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">oficiálním webu</a>.</p>

        <h2>9. Jak nás kontaktovat</h2>
        <p>Pokud máte otázky ke zpracování osobních údajů nebo chcete uplatnit některé ze svých práv, kontaktujte nás:</p>
        <p>
          E-mail: <a href="mailto:kafeterka@email.cz">kafeterka@email.cz</a><br />
          Telefon: <a href="tel:+420774295710">774 295 710</a><br />
          Adresa: Mariánské nám. 308, 688 01 Uherský Brod 1
        </p>

        <h2>10. Změny těchto podmínek</h2>
        <p>Tyto podmínky můžeme čas od času aktualizovat, například kvůli změnám na webu, v našich službách nebo v právních předpisech. Aktuální verze bude vždy dostupná na této stránce.</p>
      </div>
    </main>
  );
}
