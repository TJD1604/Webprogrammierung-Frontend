<script lang="ts">
// Import necessary components and styles
import { defineComponent } from 'vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import PicBackgroundComponent from '@/components/PicBackground/PicBackgroundComponent.vue'
import '../view.css'

// Define the DatenschutzView component
export default defineComponent({
  name: 'DatenschutzView',
  components: {
    FooterComponent,
    PicBackgroundComponent
  },
  data() {
    // Data properties for the DatenschutzView component
    return {
      // Configuration options for full-page component
      options: {
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3']
      },
      // Path to the background image
      imagePath: 'images/Datenschutz.jpg',
      // Title of the DatenschutzView component
      title: 'Datenschutzrichtlinien'
    }
  }
})
</script>


<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="position-relative">
          <PicBackgroundComponent :imagePath="imagePath" :title="title" />
        </div>
      </div>
      <div class="section">
        <div class="content-inner">
          <div class="textdev">
             <!-- Privacy Policy -->
            <h4>Allgemeiner Hinweis und Pflichtinformationen</h4>
            <h5>Benennung der verantwortlichen Stelle</h5>
            <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>
            <h5>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h5>
            <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
            <h5>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h5>
            <p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
            <h5>Recht auf Datenübertragbarkeit</h5>
            <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
            <h5>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h5>
            <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>
            <h5>SSL- bzw. TLS-Verschlüsselung</h5>
            <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>

            <h4>Kontaktformular</h4>
            <p>Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.</p>
            <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
            <p>Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.</p>

            <h4>Cookies</h4>
            <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
            <p>Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>
            <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>
            <p>Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.</p>

            <h4>Google Maps</h4>
            <h5>Art und Umfang der Verarbeitung</h5>
            <p>Wir verwenden zur Erstellung von Anfahrtsbeschreibungen den Kartendienst Google Maps. Google Maps ist ein Dienst der Google Ireland Limited, welcher auf unserer Website eine Karte darstellt. Wenn Sie auf diese Inhalte unserer Website zugreifen, stellen Sie eine Verbindung zu Servern der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland her, wobei Ihre IP-Adresse und ggf. Browserdaten wie Ihr User-Agent übermittelt werden. Diese Daten werden ausschließlich zu den oben genannten Zwecken und zur Aufrechterhaltung der Sicherheit und Funktionalität von Google Maps verarbeitet.</p>
            <h5>Zweck und Rechtsgrundlage</h5>
            <p>Der Einsatz von Google Maps erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.</p>
            <p>Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO vereinbart. Dies sind – sofern nicht anders angegeben – Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser Standardvertragsklauseln können Sie unter <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE">https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE</a> einsehen.</p>
            <p>Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung nach Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die Einwilligung im Consent Manager (oder sonstigen Formularen, Registrierungen etc.) erteilen. Wir weisen Sie darauf hin, dass bei Drittlandübermittlungen im Detail unbekannte Risiken (z.B. die Datenverarbeitung durch Sicherheitsbehörden des Drittlandes, deren genauer Umfang und deren Folgen für Sie wir nicht kennen, auf die wir keinen Einfluss haben und von denen Sie unter Umständen keine Kenntnis erlangen) bestehen können.</p>
            <h5>Speicherdauer</h5>
            <p>Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns beeinflussbar, sondern wird von Google Ireland Limited bestimmt. Weitere Hinweise finden Sie in der Datenschutzerklärung für Google Maps: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.</p>

            <h4>Google Web Fonts</h4>
            <h5>Art und Umfang der Verarbeitung</h5>
            <p>Wir verwenden Google Fonts von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, als Dienst zur Bereitstellung von Schriftarten für unser Onlineangebot. Um diese Schriftarten zu beziehen, stellen Sie eine Verbindung zu Servern von Google Ireland Limited her, wobei Ihre IP-Adresse übertragen wird.</p>
            <h5>Zweck und Rechtsgrundlage</h5>
            <p>Der Einsatz von Google Fonts erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.</p>
            <p>Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO vereinbart. Dies sind – sofern nicht anders angegeben – Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser Standardvertragsklauseln können Sie unter <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE">https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE</a> einsehen.</p>
            <p>Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung nach Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die Einwilligung im Consent Manager (oder sonstigen Formularen, Registrierungen etc.) erteilen. Wir weisen Sie darauf hin, dass bei Drittlandübermittlungen im Detail unbekannte Risiken (z.B. die Datenverarbeitung durch Sicherheitsbehörden des Drittlandes, deren genauer Umfang und deren Folgen für Sie wir nicht kennen, auf die wir keinen Einfluss haben und von denen Sie unter Umständen keine Kenntnis erlangen) bestehen können.</p>
            <h5>Speicherdauer</h5>
            <p>Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns beeinflussbar, sondern wird von Google Ireland Limited bestimmt. Weitere Hinweise finden Sie in der Datenschutzerklärung für Google Fonts: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.</p>

            <p><small>Quelle: Datenschutz-Konfigurator von <a href="https://www.mein-datenschutzbeauftragter.de" target="_blank">Mein-Datenschutzbeauftragter.de</a></small></p>
          </div>
        </div>
      </div>
      <div class="section">
        <FooterComponent />
      </div>
    </full-page>
  </div>
</template>
<style>
.subheading{
font-size: medium !important;
}
</style>