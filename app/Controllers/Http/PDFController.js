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
                heights:[110],
                body: [
                    [
                        {text:'Image Here',color:'white',fillColor:'black'}, 
                        
                        {
                            ul: [
                                {text:'.',color:'black',fontSize: 12},
                            {text:[{text:'Name: ',color:'white',fontSize: 16,	bold: true},{text:'Jane Doe',color:'white',fontSize: 16,}]},
                            {text:'.',color:'black',fontSize: 5},
                            {text:[{text:'Student ID: ',color:'white',fontSize: 16,	bold: true},{text:'919000123',color:'white',fontSize: 16,}]},
                            {text:'.',color:'black',fontSize: 5},
                            {text:[{text:'Email: ',color:'white',fontSize: 16,	bold: true},{text:'s123456@nwmissouri.edu',color:'white',fontSize: 16,}]},
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
                widths: [528],
                heights:[15,35,10],
                body: [
                    [{text:'.',color:'#d1d3d4',fillColor:'#d1d3d4'},],
                    [
                        
                        {text:'MS Example Degree Approved Program Plan',fillColor:'#d1d3d4',fontSize: 20,alignment: 'center'}, 
                    ],
                    [{text:'.',color:'white',fillColor:'white'},],
                    
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
			widths: [240, 80, 180],
			heights:[32],
			body: [
                [
                    {text:'Course Title',alignment: 'center',color:'white',fillColor:'black',bold: true},
                     {text:'Course #',alignment: 'center',fillOpacity:0.60,color:'white',fillColor:'black',bold: true},
                      {text:'Semester-Block-Term',alignment: 'center',color:'white',fillColor:'black',bold: true}],
            ],
            
		},
		
	},
	{
		style: 'tableExample2',
		table: {
            widths: [246, 80, 186],
            heights:[24,24,24,24,24,24,24,24,24,24],
			body: [
				[
					{text: 'Insert Course Title 1',color:'white',fillColor:'#007357',bold: true,height:22},
					{text: 'ABC 1111',color:'white',fillOpacity:0.60,fillColor:'#007357',bold: true,height:22},
					{text: 'Semester-1-2020',color:'white',fillColor:'#007357',},
					],
                    [
                        {text: 'Insert Course Title 1',color:'black',fillColor:'#f1f2f2',bold: true},
                        {text: 'ABC 1111',color:'black',fillOpacity:0.60,fillColor:'#f1f2f2',bold: true},
                        {text: 'Semester-1-2020',color:'black',fillColor:'#f1f2f2',},
                        ],
                        [
                            {text: 'Insert Course Title 1',color:'black',fillColor:'#d1d3d4',bold: true},
                            {text: 'ABC 1111',color:'black',fillOpacity:0.60,fillColor:'#d1d3d4',bold: true},
                            {text: 'Semester-1-2020',color:'black',fillColor:'#d1d3d4',},
                            ],
                            [
                                {text: 'Insert Course Title 1',color:'white',fillColor:'#007357',bold: true},
                                {text: 'ABC 1111',color:'white',fillOpacity:0.60,fillColor:'#007357',bold: true},
                                {text: 'Semester-1-2020',color:'white',fillColor:'#007357',},
                                ],
                                [
                                    {text: 'Insert Course Title 1',color:'black',fillColor:'#f1f2f2',bold: true},
                                    {text: 'ABC 1111',color:'black',fillOpacity:0.60,fillColor:'#f1f2f2',bold: true},
                                    {text: 'Semester-1-2020',color:'black',fillColor:'#f1f2f2',},
                                    ],
                                    [
                                        {text: 'Insert Course Title 1',color:'black',fillColor:'#d1d3d4',bold: true},
                                        {text: 'ABC 1111',color:'black',fillOpacity:0.60,fillColor:'#d1d3d4',bold: true},
                                        {text: 'Semester-1-2020',color:'black',fillColor:'#d1d3d4',},
                                        ],
                                        [
                                            {text: 'Insert Course Title 1',color:'white',fillColor:'#007357',bold: true},
                                            {text: 'ABC 1111',color:'white',fillOpacity:0.60,fillColor:'#007357',bold: true},
                                            {text: 'Semester-1-2020',color:'white',fillColor:'#007357'},
                                            ],
                                            [
                                                {text: 'Insert Course Title 1',color:'black',fillColor:'#f1f2f2',bold: true},
                                                {text: 'ABC 1111',color:'black',fillOpacity:0.60,fillColor:'#f1f2f2',bold: true},
                                                {text: 'Semester-1-2020',color:'black',fillColor:'#f1f2f2'},
                                                ],
                                                [
                                                    {text: 'Insert Course Title 1',color:'black',fillColor:'#d1d3d4',bold: true},
                                                    {text: 'ABC 1111',color:'black',fillOpacity:0.60,fillColor:'#d1d3d4',bold: true},
                                                    {text: 'Semester-1-2020',color:'black',fillColor:'#d1d3d4'},
                                                    ],
                                                    [
                                                        {text: 'Insert Course Title 1',color:'white',fillColor:'#007357',bold: true,height:22},
                                                        {text: 'ABC 1111',color:'white',fillOpacity:0.60,fillColor:'#007357',bold: true,height:22},
                                                        {text: 'Semester-1-2020',color:'white',fillColor:'#007357',},
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
        table:{
            widths: [100, 100, 150,150],
			body: [[
				{
					
                    text: 'CatPaws',
                    color:'#007357'
				},
				{
					
                    text: 'Northwest360',
                    color:'#007357'
				},
				{
					
                    text: 'Online Programs Home Page',
                    color:'#007357'
				},
				{
					
                    text: 'Graduate Office:660-562-1144',
                    color:'#007357'
				},]
				
            ],  
        },
        layout: 'noBorders',
        fillColor:'#d1d3d4'
        
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
            
            fontSize: 10,
     
            
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