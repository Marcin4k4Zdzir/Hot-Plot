const articles = {
    dicaprio: {
        title: 'Leonardo DiCaprio zachwyca na ekranie i poza nim',
        lead: 'Geniusz kina i wieczny amant Hollywood wciąż rozpala wyobraźnię fanów. Choć Hollywood zmienia się nie do poznania, jedna rzecz pozostaje stała: magnetyzm Leonardo DiCaprio. Aktor, który od dekad wybiera role z chirurgiczną precyzją, znów jest na ustach wszystkich. Tym razem jednak nie chodzi tylko o jego genialny warsztat, ale o styl życia, który dla wielu jest definicją współczesnego luksusu i... tajemnicy.',
        imageSource: 'https://images.immediate.co.uk/production/volatile/sites/60/2024/10/leonardo-dicaprio-i-vittoria-ceretti-a33a46f.png?quality=90&crop=149px,0px,1621px,1080px&resize=980,654',
        text: '<p>DiCaprio od lat stosuje tę samą strategię – rzadko udziela wywiadów, unika ścianek, które nie są związane z premierami filmowymi, a mimo to każda jego aktywność staje się „breaking newsem”. Ostatnio fotoreporterzy wypatrzyli go na kolacji w jednej z najbardziej ekskluzywnych restauracji w Beverly Hills. Mimo legendarnej już czapki z daszkiem naciągniętej nisko na oczy, fani bez trudu rozpoznali laureata Oscara. Towarzyszyła mu grupa bliskich znajomych, w tym kilka znanych twarzy ze świata mody, co natychmiast wywołało lawinę spekulacji o nowym romansie.</p><p>Jednak Leo to nie tylko podboje miłosne. Branża huczy o jego kolejnej współpracy z Martinem Scorsese. Podobno aktor przygotowuje się do roli, która ma mu przynieść drugą statuetkę Akademii. „On nie gra postaci, on się nią staje” – donoszą osoby z planu. Poza planem DiCaprio pozostaje jednak nieuchwytnym marzycielem, który każdą wolną chwilę spędza na swoim jachcie lub angażując się w projekty ratujące planetę. Czy kiedykolwiek się ustatkuje? Fani mają nadzieję, że nie – bo „wieczny kawaler” w wydaniu Leo to postać, którą Hollywood kocha najbardziej.</p>'
    }
}

document.querySelector('.article-title').innerHTML = articles.dicaprio.title;
document.querySelector('.article-lead').innerHTML = articles.dicaprio.lead;
document.querySelector('.article-image').src = articles.dicaprio.imageSource;
document.querySelector('.article-text').innerHTML = articles.dicaprio.text;