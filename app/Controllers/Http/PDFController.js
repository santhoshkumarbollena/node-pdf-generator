'use strict'

class PDFController {
    async demo({ params, auth, response }) {
        console.log("demo")
        // Define font files
var fonts = {
    	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
  };
  
  var PdfPrinter = require('pdfmake');
  var printer = new PdfPrinter(fonts);
  var fs = require('fs');
  
  var docDefinition = {
    // ...
    content: [
        {
            style: 'tableBlack',
            table: {
                widths: [200, 320],
                heights:[50],
                body: [
                    [
                        {text:'Image Here',color:'white',fillColor:'black'}, 
                        
                        {
                            ul: [
                            {text:'Name: Jane Doe',color:'white'},
                            {text:'Student Id: 919000123',color:'white'},
                            {text:'Email: s123456@nwmissouri.edu',color:'white'}
                                ],
                                fillColor:'black',
                                
                        },
                    ],
                    
                ]
            },
            layout: 'noBorders',
            color:'black'
            
        },
        {
            style: 'tableBlack',
            table: {
                widths: [30,490],
                heights:[20],
                body: [
                    [
                        {text:'',fillColor:'grey'},
                        {text:'MS Example Degree Approved Program Plan',fillColor:'grey'}, 
                    ],
                    
                ]
            },
            layout: 'noBorders'
            
        },
		{
			columns: [
				{
                    width: 500,
                    height:20,
					text: ' '
				},	
			]
		},
	
		{
		style: 'tableExample2',
		table: {
			widths: [200, 100, 200],
			heights:[25],
			body: [
                [
                    {text:'Course Title',alignment: 'center',color:'white',fillColor:'black',},
                     {text:'Course #',alignment: 'center',fillOpacity:0.60,color:'white',fillColor:'black'},
                      {text:'Semester-Block-Term',alignment: 'center',color:'white',fillColor:'black'}],
            ],
            
		},
		
	},
	{
		style: 'tableExample2',
		table: {
			widths: [200, 100, 200],
			body: [
				[
					{text: 'Insert Course Title 1',fillColor:'#006747'},
					{text: 'ABC 1111',fillOpacity:0.60,fillColor:'#006747'},
					{text: 'Semester-1-2020',fillColor:'#006747'},
					],
				['Insert Course Title 1', 'ABC 1111', 'Semester-1-2020'],
				['Insert Course Title 1', 'ABC 1111', 'Semester-1-2020'],
				[
					{text: 'Insert Course Title 1',fillColor:'#006747'},
					{text: 'ABC 1111',fillOpacity:0.60,fillColor:'#006747'},
					{text: 'Semester-1-2020',fillColor:'#006747'},
					],
				['Insert Course Title 1', 'ABC 1111', 'Semester-1-2020'],
				['Insert Course Title 1', 'ABC 1111', 'Semester-1-2020'],
				[
					{text: 'Insert Course Title 1',fillColor:'#006747'},
					{text: 'ABC 1111',fillOpacity:0.60,fillColor:'#006747'},
					{text: 'Semester-1-2020',fillColor:'#006747'},
					],
				['Insert Course Title 1', 'ABC 1111', 'Semester-1-2020'],
				['Insert Course Title 1', 'ABC 1111', 'Semester-1-2020'],
			]
		}
    },
    {
        columns: [
            {
                width: 500,
                height:20,
                text: ' '
            },	
        ]
    },
	{
        style: 'tableExample4',
			columns: [
				{
					width: 250,
					text: 'NW logo'
				},
				{
					ul: [
					' First time enrollment: your enrollment will be processed through the Registrar’s Office. You will receive notification after you have been enrolled. ',
					' Continuing student enrollment: ',
                    ' Log into CatPAWs using the following credentials: User ID is your 919# and your PIN will be your date of birth (MMDDYY or last 6 digits of your User ID) or PIN created after initial sign-on has been completed',
                    'Select Student: Add/Drop Classes: Select Term: Click Submit.',
                    ' Fill in the boxes with the CRN(s) necessary for your next selected course. '
						]
				},
				
				
			]
		},
		
	{
		style: 'tableExample3',
			columns: [
				{
					width: 100,
					text: 'CatPaws'
				},
				{
					width: 100,
					text: 'Northwest360'
				},
				{
					width: 100,
					text: 'Online Programs Home Page'
				},
				{
					width: 100,
					text: 'Graduate Office:660-562-1144'
				},
				
			]
		},
      ],
      styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
        },
        tableExample: {
            margin: [0, 5, 0, 15],
            alignment: 'center'
        },
        tableExample2: {
            margin: [0,0, 0, 0.1],
            border:0,
            alignment: 'center'
        },
        tableExample3: {
            
            fontSize: 10,
            alignment: 'center'
            
        },
        tableExample4: {
            
            fontSize: 8,
     
            
        },
        initialColumn: {
            color: 'blue',
            
        },
        tableOpacityExample: {
            margin: [0, 5, 0, 15],
            fillColor: 'blue',
            fillOpacity: 0.3
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        }
    },
  };
  
  var options = {
    // ...
  }
  
  var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
  pdfDoc.pipe(fs.createWriteStream('document.pdf'));
  pdfDoc.end();
  console.log("Genrated")
        response.ok("message");
    }


}

module.exports = PDFController