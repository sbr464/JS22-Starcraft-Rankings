$(document).ready(function() {

    var Sdata = [
  {
    "username": "ridiculus",
    "fullname": "Acton Williamson",
    "region": "Europe",
    "race": "Zerg",
    "wins": 40,
    "losses": 234
  },
  {
    "username": "purus",
    "fullname": "Felix Bennett",
    "region": "Europe",
    "race": "Zerg",
    "wins": 152,
    "losses": 380
  },
  {
    "username": "interdum",
    "fullname": "Stacy Ferrell",
    "region": "Korea",
    "race": "Zerg",
    "wins": 22,
    "losses": 136
  },
  {
    "username": "Mauris",
    "fullname": "Olivia Higgins",
    "region": "Europe",
    "race": "Terran",
    "wins": 279,
    "losses": 374
  },
  {
    "username": "odio",
    "fullname": "Addison Scott",
    "region": "Europe",
    "race": "Zerg",
    "wins": 62,
    "losses": 249
  },
  {
    "username": "scelerisque",
    "fullname": "Olivia Ruiz",
    "region": "America",
    "race": "Terran",
    "wins": 283,
    "losses": 24
  },
  {
    "username": "varius",
    "fullname": "Ulla Boyer",
    "region": "Korea",
    "race": "Protoss",
    "wins": 362,
    "losses": 437
  },
  {
    "username": "nisi",
    "fullname": "Giacomo Holden",
    "region": "Korea",
    "race": "Zerg",
    "wins": 41,
    "losses": 461
  },
  {
    "username": "tempus",
    "fullname": "Palmer Barton",
    "region": "Korea",
    "race": "Terran",
    "wins": 489,
    "losses": 249
  },
  {
    "username": "Cras",
    "fullname": "Quamar Benson",
    "region": "Korea",
    "race": "Protoss",
    "wins": 451,
    "losses": 27
  },
  {
    "username": "Aliquam",
    "fullname": "Ali Robbins",
    "region": "Europe",
    "race": "Zerg",
    "wins": 445,
    "losses": 306
  },
  {
    "username": "non",
    "fullname": "Alan Osborne",
    "region": "Korea",
    "race": "Terran",
    "wins": 36,
    "losses": 455
  },
  {
    "username": "neque",
    "fullname": "Martena Sykes",
    "region": "Europe",
    "race": "Zerg",
    "wins": 94,
    "losses": 426
  },
  {
    "username": "Phasellus",
    "fullname": "Lana Reed",
    "region": "Europe",
    "race": "Protoss",
    "wins": 423,
    "losses": 186
  },
  {
    "username": "mauris",
    "fullname": "Gil Dyer",
    "region": "Korea",
    "race": "Zerg",
    "wins": 87,
    "losses": 290
  },
  {
    "username": "mi",
    "fullname": "Basil Moses",
    "region": "America",
    "race": "Zerg",
    "wins": 486,
    "losses": 95
  },
  {
    "username": "nisl",
    "fullname": "Cullen Hale",
    "region": "Korea",
    "race": "Terran",
    "wins": 372,
    "losses": 359
  },
  {
    "username": "sit",
    "fullname": "Roary Martin",
    "region": "Korea",
    "race": "Protoss",
    "wins": 406,
    "losses": 111
  },
  {
    "username": "ullamcorper",
    "fullname": "Faith Hart",
    "region": "Korea",
    "race": "Terran",
    "wins": 45,
    "losses": 135
  },
  {
    "username": "arcu",
    "fullname": "Sacha Dodson",
    "region": "Europe",
    "race": "Terran",
    "wins": 228,
    "losses": 463
  },
  {
    "username": "erat",
    "fullname": "Jada Noel",
    "region": "Europe",
    "race": "Zerg",
    "wins": 196,
    "losses": 243
  },
  {
    "username": "vulputate",
    "fullname": "Rinah Foley",
    "region": "Europe",
    "race": "Terran",
    "wins": 391,
    "losses": 428
  },
  {
    "username": "Fusce",
    "fullname": "Noble Washington",
    "region": "Europe",
    "race": "Terran",
    "wins": 174,
    "losses": 492
  },
  {
    "username": "malesuada",
    "fullname": "Brynn Hopkins",
    "region": "America",
    "race": "Terran",
    "wins": 162,
    "losses": 66
  },
  {
    "username": "enim",
    "fullname": "Garth Larsen",
    "region": "Europe",
    "race": "Zerg",
    "wins": 219,
    "losses": 417
  },
  {
    "username": "felis",
    "fullname": "Zelda Mendez",
    "region": "Europe",
    "race": "Protoss",
    "wins": 168,
    "losses": 131
  },
  {
    "username": "neque",
    "fullname": "Tad Mcmillan",
    "region": "Europe",
    "race": "Protoss",
    "wins": 426,
    "losses": 307
  },
  {
    "username": "turpis",
    "fullname": "Jemima Walsh",
    "region": "America",
    "race": "Protoss",
    "wins": 81,
    "losses": 280
  },
  {
    "username": "dapibus",
    "fullname": "Amery Zamora",
    "region": "Europe",
    "race": "Terran",
    "wins": 449,
    "losses": 8
  },
  {
    "username": "turpis",
    "fullname": "Christopher Gonzalez",
    "region": "Europe",
    "race": "Protoss",
    "wins": 165,
    "losses": 72
  },
  {
    "username": "metus",
    "fullname": "Samson Yates",
    "region": "Europe",
    "race": "Zerg",
    "wins": 373,
    "losses": 21
  },
  {
    "username": "facilisis",
    "fullname": "Regan Cooper",
    "region": "Korea",
    "race": "Protoss",
    "wins": 190,
    "losses": 396
  },
  {
    "username": "luctus",
    "fullname": "Claudia Orr",
    "region": "Korea",
    "race": "Terran",
    "wins": 386,
    "losses": 81
  },
  {
    "username": "nulla",
    "fullname": "Remedios Keller",
    "region": "America",
    "race": "Zerg",
    "wins": 470,
    "losses": 271
  },
  {
    "username": "lobortis",
    "fullname": "Derek Fischer",
    "region": "America",
    "race": "Zerg",
    "wins": 11,
    "losses": 126
  },
  {
    "username": "et",
    "fullname": "Chaney Mitchell",
    "region": "Europe",
    "race": "Protoss",
    "wins": 246,
    "losses": 97
  },
  {
    "username": "nec",
    "fullname": "Abraham Whitney",
    "region": "America",
    "race": "Terran",
    "wins": 325,
    "losses": 162
  },
  {
    "username": "felis",
    "fullname": "Kennedy Ellis",
    "region": "America",
    "race": "Zerg",
    "wins": 148,
    "losses": 193
  },
  {
    "username": "ut",
    "fullname": "Tarik Hendrix",
    "region": "America",
    "race": "Terran",
    "wins": 192,
    "losses": 459
  },
  {
    "username": "mi",
    "fullname": "Nolan Hensley",
    "region": "Europe",
    "race": "Terran",
    "wins": 158,
    "losses": 87
  },
  {
    "username": "egestas",
    "fullname": "Charity Schmidt",
    "region": "Korea",
    "race": "Zerg",
    "wins": 54,
    "losses": 129
  },
  {
    "username": "blandit",
    "fullname": "Briar Macias",
    "region": "Korea",
    "race": "Terran",
    "wins": 291,
    "losses": 96
  },
  {
    "username": "mollis",
    "fullname": "Lael Mayo",
    "region": "Korea",
    "race": "Zerg",
    "wins": 202,
    "losses": 113
  },
  {
    "username": "consectetuer",
    "fullname": "Hasad Lloyd",
    "region": "Korea",
    "race": "Terran",
    "wins": 100,
    "losses": 51
  },
  {
    "username": "sodales",
    "fullname": "Keith Craft",
    "region": "Europe",
    "race": "Protoss",
    "wins": 319,
    "losses": 281
  },
  {
    "username": "justo",
    "fullname": "Elmo Carlson",
    "region": "America",
    "race": "Protoss",
    "wins": 349,
    "losses": 51
  },
  {
    "username": "ornare",
    "fullname": "Donovan Kline",
    "region": "Korea",
    "race": "Protoss",
    "wins": 211,
    "losses": 12
  },
  {
    "username": "turpis",
    "fullname": "Hiroko Daugherty",
    "region": "Europe",
    "race": "Protoss",
    "wins": 178,
    "losses": 74
  },
  {
    "username": "a",
    "fullname": "Karen Rodriguez",
    "region": "Europe",
    "race": "Zerg",
    "wins": 458,
    "losses": 307
  },
  {
    "username": "Sed",
    "fullname": "Ella French",
    "region": "Europe",
    "race": "Terran",
    "wins": 424,
    "losses": 423
  },
  {
    "username": "pharetra",
    "fullname": "Duncan England",
    "region": "Korea",
    "race": "Terran",
    "wins": 346,
    "losses": 214
  },
  {
    "username": "Nam",
    "fullname": "Camilla Rocha",
    "region": "America",
    "race": "Zerg",
    "wins": 156,
    "losses": 209
  },
  {
    "username": "primis",
    "fullname": "Rosalyn George",
    "region": "Europe",
    "race": "Terran",
    "wins": 174,
    "losses": 292
  },
  {
    "username": "rhoncus",
    "fullname": "Cassidy Holden",
    "region": "Europe",
    "race": "Protoss",
    "wins": 313,
    "losses": 73
  },
  {
    "username": "pede",
    "fullname": "Leo Shaw",
    "region": "Europe",
    "race": "Protoss",
    "wins": 85,
    "losses": 472
  },
  {
    "username": "ligula",
    "fullname": "Rowan Duke",
    "region": "America",
    "race": "Protoss",
    "wins": 443,
    "losses": 51
  },
  {
    "username": "Quisque",
    "fullname": "Kermit Howard",
    "region": "America",
    "race": "Terran",
    "wins": 433,
    "losses": 253
  },
  {
    "username": "iaculis",
    "fullname": "Cooper Callahan",
    "region": "Korea",
    "race": "Terran",
    "wins": 353,
    "losses": 15
  },
  {
    "username": "massa",
    "fullname": "Wallace Cook",
    "region": "Europe",
    "race": "Zerg",
    "wins": 219,
    "losses": 280
  },
  {
    "username": "a",
    "fullname": "Oliver House",
    "region": "America",
    "race": "Protoss",
    "wins": 69,
    "losses": 385
  },
  {
    "username": "orci",
    "fullname": "Armand Mooney",
    "region": "America",
    "race": "Terran",
    "wins": 244,
    "losses": 55
  },
  {
    "username": "sed",
    "fullname": "Blair Santana",
    "region": "America",
    "race": "Terran",
    "wins": 137,
    "losses": 123
  },
  {
    "username": "Etiam",
    "fullname": "Azalia Odonnell",
    "region": "Europe",
    "race": "Terran",
    "wins": 473,
    "losses": 24
  },
  {
    "username": "eget",
    "fullname": "Hamilton Coffey",
    "region": "Europe",
    "race": "Protoss",
    "wins": 490,
    "losses": 477
  },
  {
    "username": "Nunc",
    "fullname": "Mia Hopper",
    "region": "Korea",
    "race": "Terran",
    "wins": 262,
    "losses": 135
  },
  {
    "username": "lobortis",
    "fullname": "Carol Lott",
    "region": "America",
    "race": "Terran",
    "wins": 18,
    "losses": 298
  },
  {
    "username": "interdum",
    "fullname": "Nerea Lopez",
    "region": "Korea",
    "race": "Protoss",
    "wins": 385,
    "losses": 173
  },
  {
    "username": "facilisis",
    "fullname": "Samuel Gardner",
    "region": "America",
    "race": "Terran",
    "wins": 386,
    "losses": 40
  },
  {
    "username": "erat",
    "fullname": "Lynn Mclaughlin",
    "region": "Europe",
    "race": "Protoss",
    "wins": 34,
    "losses": 294
  },
  {
    "username": "fringilla",
    "fullname": "Lilah Meyers",
    "region": "America",
    "race": "Zerg",
    "wins": 262,
    "losses": 336
  },
  {
    "username": "Duis",
    "fullname": "Nehru Horne",
    "region": "Korea",
    "race": "Zerg",
    "wins": 247,
    "losses": 11
  },
  {
    "username": "ultricies",
    "fullname": "Faith Rosario",
    "region": "America",
    "race": "Zerg",
    "wins": 160,
    "losses": 314
  },
  {
    "username": "consectetuer",
    "fullname": "Julie Pace",
    "region": "Europe",
    "race": "Protoss",
    "wins": 359,
    "losses": 417
  },
  {
    "username": "ridiculus",
    "fullname": "Mercedes Graves",
    "region": "Europe",
    "race": "Zerg",
    "wins": 374,
    "losses": 86
  },
  {
    "username": "tortor",
    "fullname": "Eliana Nguyen",
    "region": "America",
    "race": "Terran",
    "wins": 221,
    "losses": 330
  },
  {
    "username": "mauris",
    "fullname": "Melanie Witt",
    "region": "America",
    "race": "Zerg",
    "wins": 114,
    "losses": 398
  },
  {
    "username": "dolor",
    "fullname": "Illiana Lancaster",
    "region": "America",
    "race": "Zerg",
    "wins": 73,
    "losses": 358
  },
  {
    "username": "aliquam",
    "fullname": "Rashad Irwin",
    "region": "Europe",
    "race": "Terran",
    "wins": 318,
    "losses": 290
  },
  {
    "username": "pharetra",
    "fullname": "Griffin Atkinson",
    "region": "America",
    "race": "Protoss",
    "wins": 137,
    "losses": 168
  },
  {
    "username": "Suspendisse",
    "fullname": "Paki Marks",
    "region": "Korea",
    "race": "Protoss",
    "wins": 46,
    "losses": 468
  },
  {
    "username": "adipiscing",
    "fullname": "Amelia Bolton",
    "region": "Korea",
    "race": "Terran",
    "wins": 115,
    "losses": 283
  },
  {
    "username": "placerat",
    "fullname": "Aubrey Cooper",
    "region": "America",
    "race": "Terran",
    "wins": 191,
    "losses": 37
  },
  {
    "username": "sem",
    "fullname": "Sharon Goff",
    "region": "Europe",
    "race": "Zerg",
    "wins": 274,
    "losses": 292
  },
  {
    "username": "eget",
    "fullname": "Robin Norris",
    "region": "Europe",
    "race": "Terran",
    "wins": 209,
    "losses": 385
  },
  {
    "username": "arcu",
    "fullname": "Amery Abbott",
    "region": "Korea",
    "race": "Protoss",
    "wins": 198,
    "losses": 486
  },
  {
    "username": "ligula",
    "fullname": "Harding Gould",
    "region": "Korea",
    "race": "Protoss",
    "wins": 30,
    "losses": 3
  },
  {
    "username": "tempus",
    "fullname": "Maggie Macias",
    "region": "Korea",
    "race": "Terran",
    "wins": 337,
    "losses": 310
  },
  {
    "username": "molestie",
    "fullname": "Daryl Barlow",
    "region": "Europe",
    "race": "Protoss",
    "wins": 343,
    "losses": 258
  },
  {
    "username": "enim",
    "fullname": "Tana Tyler",
    "region": "Europe",
    "race": "Protoss",
    "wins": 253,
    "losses": 173
  },
  {
    "username": "Cras",
    "fullname": "Nell Hebert",
    "region": "America",
    "race": "Protoss",
    "wins": 416,
    "losses": 107
  },
  {
    "username": "nisi",
    "fullname": "Guinevere Swanson",
    "region": "Europe",
    "race": "Protoss",
    "wins": 324,
    "losses": 408
  },
  {
    "username": "justo",
    "fullname": "Mikayla Kirk",
    "region": "America",
    "race": "Terran",
    "wins": 424,
    "losses": 28
  },
  {
    "username": "purus",
    "fullname": "Drew Marks",
    "region": "America",
    "race": "Zerg",
    "wins": 275,
    "losses": 117
  },
  {
    "username": "mi",
    "fullname": "Pascale Bernard",
    "region": "Korea",
    "race": "Terran",
    "wins": 237,
    "losses": 29
  },
  {
    "username": "eu",
    "fullname": "Myra Parsons",
    "region": "America",
    "race": "Zerg",
    "wins": 399,
    "losses": 77
  },
  {
    "username": "nulla",
    "fullname": "Katelyn Acevedo",
    "region": "America",
    "race": "Protoss",
    "wins": 449,
    "losses": 95
  },
  {
    "username": "vel",
    "fullname": "Melyssa Price",
    "region": "Korea",
    "race": "Terran",
    "wins": 239,
    "losses": 391
  },
  {
    "username": "diam",
    "fullname": "Hanna Duke",
    "region": "Europe",
    "race": "Protoss",
    "wins": 134,
    "losses": 464
  },
  {
    "username": "ultrices",
    "fullname": "Madeson Pickett",
    "region": "Europe",
    "race": "Zerg",
    "wins": 90,
    "losses": 392
  },
  {
    "username": "commodo",
    "fullname": "Kibo Oliver",
    "region": "Korea",
    "race": "Terran",
    "wins": 18,
    "losses": 407
  }
];

 // $(document).click(function() {
 //    $(window).resize();
 //  }); 

    $('#table_1').dataTable( {
        "displayLength": 50,
        "ajax": {
            "url": "media/js/starcraft-data.txt",
            "dataSrc": ""
        },
        "columns": [
            { "data": "username" },
            { "data": "fullname" },
            { "data": "region" },
            { "data": "race" },
            { "data": "wins" },
            { "data": "losses" }
        ]
    } );


// report1

var countries = _.pluck(Sdata,'region');



var counts = _.countBy(countries, _.identity);
// console.log(counts);

var values = _.values(counts);
// console.log(values);

var labels = _.keys(counts);
// console.log(labels);

var data = {
  labels: labels,
  series: values
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 20,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 10,
    chartPadding: 20
  }]
];

new Chartist.Pie('.ct-chart', data, options, responsiveOptions);


//report2

var data = {
  labels: labels,
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  ]
};

var options = {
  seriesBarDistance: 10
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart2', data, options, responsiveOptions);


// var data = {
//   series: values
// };

// var sum = function(a, b) { return a + b };

// new Chartist.Pie('.ct-chart', data, {
//   labelInterpolationFnc: function(value) {
//     return Math.round(value / data.series.reduce(sum) * 100) + '%';
//   }
// });

// // Our labels and three data series
// var data = {
//   labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
//   series: [
//     [5, 4, 3, 7, 5, 10],
//     [3, 2, 9, 5, 4, 6],
//     [2, 1, -3, -4, -2, 0]
//   ]

// };

// // We are setting a few options for our chart and override the defaults
// var options = {
//   // Don't draw the line chart points
//   showPoint: false,
//   // Disable line smoothing
//   lineSmooth: false,
//   // X-Axis specific configuration
//   axisX: {
//     // We can disable the grid for this axis
//     showGrid: false,
//     // and also don't show the label
//     showLabel: false
//   },
//   // Y-Axis specific configuration
//   axisY: {
//     // Lets offset the chart a bit from the labels
//     offset: 40,
//     // The label interpolation function enables you to modify the values
//     // used for the labels on each axis. Here we are converting the
//     // values into million pound.
//     labelInterpolationFnc: function(value) {
//       return '$' + value + 'm';
//     }
//   }
// };

// // All you need to do is pass your configuration as third parameter to the chart function

// new Chartist.Line('.ct-chart', data, options);


// use this code to fix the default data cleanse

// var labels = data.cols
// var items = data.data.map(function(item){
//     return _.object(labels, item);
// });

// console.log(JSON.stringify(items));


} );



