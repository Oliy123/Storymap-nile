var config = {
    style: 'mapbox://styles/oliyad/ckwmopnru5qbd14mdqcs8c9g2',
    accessToken: 'pk.eyJ1Ijoib2xpeWFkIiwiYSI6ImNrdjdsa24wYzI5dW8ycG1zdGY3Nmdlc2kifQ.8CO7mcebHy1ivmhe25EQDg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'About Nile River and its Country ',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Oliyad Gamechu',
    footer: "Source: source citations, <p><a href=' https://visibleearth.nasa.gov/images/59656/the-nile-delta-egypt'> Source NASA Visible Earth </p> <p2>https://ethiopianembassy.be/facts/</p1>.",
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'NILE',
            //image: 'image.png',
            description: 'the longest river in the world, called the father of African rivers. It rises south of the Equator and flows northward through northeastern Africa to drain into the Mediterranean Sea. It has a length of about 4,132 miles (6,650 kilometres) and drains an area estimated at 1,293,000 square miles (3,349,000 square kilometres). A nile is a cobination of blue nail and white nile',
            location: {
              center: [37.48454, 13.83490],
              zoom: 4.18,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              // { layer: 'country',opacity: 1,duration: 50}
            ],
            onChapterExit: [
                // {layer: 'country',  opacity: 0}
            ]
        },
        {
            id: 'tana',
            alignment: 'right',
            hidden: false,
            title: ' Origin point of blue nile',
            //image: './path/to/image/source.png',
            description: "The blue nile's long journey begins in the heart of Ethiopia. The Blue Nile originates at Lake Tana which provides more than 86 percent of the water to the nile. The distance of the river from its source to its confluence, has been variously reported as being between 1,460 kilometres (910 mi) and 1,600 kilometres (990 mi). This uncertainty might result from the fact that the river flows through a series of virtually impenetrable gorges cut in the Ethiopian Highlands to a depth of some 1,500 metres (4,900 ft)—a depth comparable to that of the Grand Canyon of the Colorado River in the United States. According to materials published by the Central Statistical Agency, the Blue Nile has a total length of 1,450 kilometres (900 mi), of which 800 kilometres (500 mi) are inside Ethiopia.",
            location: {
              center: [37.38133, 11.63222],
              zoom: 8.36,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              // {layer: 'tana', opacity: .5,}
            ],
            onChapterExit: [
              // {layer: 'tana', opacity: 0}
            ]
        },
        {
            id: 'sudan',
            alignment: 'right',
            title: 'The triangle capital',
            image: 'images/khartoum-city.jpeg',
            description: "<p>The White Nile and the Blue Nile join one another forming a triangle around Sudan's capital city Khartoum. From there, the unified river will flow another 2,500 km before reaching the Mediterranean Sea.</p> <h1><iframe width='100%' height='auto' src='https://www.youtube.com/embed/G9M4h4Ir6jc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></h1>",
            location: {
              center: [32.50585, 15.64061],
                zoom: 16,
                pitch: 70,
                bearing: 172.00
            },
            onChapterEnter: [
              // {layer: 'layer-name', opacity: 1}
            ],
            onChapterExit: [
              // {layer: 'Layer-name', opacity: 0},{layer: "colSnake", opacity: 0,}
            ]
           },
           {
               id: 'egypt',
               alignment: 'right',
               title: 'Nile make the Egypt desert Bloom ',
               image: '',
               description: "<p>If you ever wondered if the expression 'Water makes the desert bloom' was true, there is no better proof than this satellite Image of the Nile Valley in Egypt. For thousands of years, the lower Nile valley (northern end) has been a cradle of civilization. Surrounded by deserts, the Nile river brings much-needed water to the land and people, making the valley into an oasis of agriculture and life</p> <h1></h1>",
               location: {
                 center: [31.12239, 30.85554],
                    zoom: 7,
                    pitch: 0.00,
                    bearing: 0.00
               },
               onChapterEnter: [
                 // {layer: 'layer-name', opacity: 1}
               ],
               onChapterExit: [
                 // {layer: 'Layer-name', opacity: 0},{layer: "colSnake", opacity: 0,}
               ]
              },

              {
                  id: 'dame',
                  alignment: 'right',
                  title: 'Blue Nile and Ethipoia ',
                  image: 'images/light.png',
                  description: "<p>Over the past 50 years, six Nile basin countries have built 25 dams and used them for hydroelectric power and irrigation. The most unfortunate Ethiopia contributes more than 86% of water to the Nile and does not benefit from it; instead negatively impacted by the Nile due to the blue Nile flood eroding a vast amount of fertile soil from the highland and carrying it to the desert of Egypt downstream as silt, turning the water dark brown. On April 2, 2011 Ethiopian People start construction of Grand Ethiopia Renaissance dam to light over rural area. </p> <p1>A Over 65 million Ethiopians do not have access to electricity. Rain fed agriculture on which over 80% of the population depends for subsistence is increasingly becoming unreliable. Ethiopia does not possess known significant amount of ground water resources or aquifers nor does it have access to sea water for desalination. Famine is a constant threat. Due to climate change, rain is erratic more frequently. With the country’s total energy production of less than 5000 MW and rising energy demand Ethiopia is suffering from energy insecurity. Therefore, the completion of the GERD will ensure </p2><p3><img src='images/Abye.gif' width='100%' height='auto'></p3> <ul style='list-style-type:square'><li>Increased electricity generation capacity to meet industrial and domestic energy demands</li><li>Enhanced opportunities for economic integration.</li><li>Improved electric energy access to Djibouti, Egypt, Eritrea, Kenya, Sudan, and Somalia.</li></ul>",
                  location: {
                    center: [35.09248, 11.21504],
                    zoom: 16,
                    pitch: 50,
                    bearing: 112.00
                  },
                  onChapterEnter: [
                    // {layer: 'layer-name', opacity: 1}
                  ],
                  onChapterExit: [
                    // {layer: 'Layer-name', opacity: 0},{layer: "colSnake", opacity: 0,}
                  ]
                 },





    ]
};
