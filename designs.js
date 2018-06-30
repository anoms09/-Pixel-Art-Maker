// Select color input
var userColor=document.getElementById('colorPicker').value;
//onchange color value
$('#colorPicker').change(function(){
	userColor=document.getElementById('colorPicker').value;
});
// Select size input
var tableHeight=0; var tableWeight=0;
//When Submit button is clicked, run line 10 to 15 and call makedGrid()
$('#submit').click(function(){
	tableHeight=document.getElementById('inputHeight').value;
	tableHeight*=20;
	tableWeight=document.getElementById('inputWeight').value;
	tableWeight*=20;
	makeGrid();
});

//function below creates the rows and columns of the table
function createRowAndColumn(userweight, userheight){
	for (var i=1; i<=userheight; i+=20){
		row="row"+i;
		myRow="<tr id="+row+" ></tr>";
		$('#pixelCanvas').append(myRow);

		for (var j=1; j<=userweight; j+=20){
			var className=row+"col"+j;
			myCol="<td class="+className+" onclick=\"pickColor('"+className+"')\"></td>";
			$('#'+row).append(myCol);
		}
	}
}

//when a cell is picked, pickColor() changes the color of the cell
function pickColor(cellClass){
	cell='.'+cellClass;
	$(cell).css('background-color', userColor);
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {    
	//clear existing Table
	$('#pixelCanvas').children().remove();

	//create a table function     
	$('#pixelCanvas').attr('width', tableWeight);
	$('#pixelCanvas').attr('height', tableHeight);
	createRowAndColumn(tableWeight,tableHeight);
}
