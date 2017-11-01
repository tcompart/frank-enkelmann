import React from "react";
import PhoneNumber from "./PhoneNumber";
import Mail from "./Mail";

export default () => <div className='impressum'>
    <h1>Impressum</h1>
    <p>Angaben gemäß § 5 TMG</p>
    <p>
        Bollensdorff-Enkelmann GmbH <br/>
        Alt Zepernick 2<br/>
        16341 Panketal OT Zepernick <br/>
    </p>
    <p>
        <span className="glyphicon glyphicon-phone-alt" title="Telefon">
            <PhoneNumber number={"030 / 944 161 28"} />
        </span><br />
        <span className="glyphicon glyphicon-print" title="Fax">
            <PhoneNumber number={"030 / 944 161 29"} />
        </span><br />
        <span className="glyphicon glyphicon-envelope" title="E-Mail">
            <Mail mailTo="info@heizungneu.de"/>
        </span><br/>
    </p>
    <br/><br/>
    <p><strong>Registereintrag:</strong><br/>
        Eintragung im Handelsregister.<br/>
        Registergericht: Frankfurt/Oder<br/>
        Registernummer: HRB 10377 FF<br/>
    </p>
    <p><strong>Umsatzsteuer-ID:</strong><br/>
        Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: 06510602100<br/><br/>
        <br/>
    </p>
    <p><strong>Haftungsausschluss: </strong><br/><br/>
        <strong>Haftung für Inhalte</strong><br/><br/>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
        TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
        wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
        möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        <br/><br/>
        <strong>Haftung für Links</strong><br/><br/>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Links umgehend wentfernen.
        <br/><br/>
        <strong>Urheberrecht</strong><br/><br/>
        Die Betreiber der Seiten sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst erstellte
        sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
        dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        <br/><br/>
        <strong>Datenschutz</strong><br/><br/>
        Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben
        werden, erfolgt dies soweit möglich stets auf freiwilliger Basis. Die Nutzung der Angebote und Dienste ist,
        soweit möglich, stets ohne Angabe personenbezogener Daten möglich.
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
        Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.
    </p><br/>

</div>
