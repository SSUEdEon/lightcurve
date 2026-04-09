		var backgroundLocation;
		var targetCount;
		var comp1Count;
		var comp2Count;
		var supernovaValues = [];
		var prepopulatedChartData = [];

		//Use this to create a chart for SN2014 something in M83. After three
		//images have been procesed, offer to show the use this graph instead of
		//their own. Explain what the purpose is, then link to the next activity.

		var counter = 0;
		supernovaValues = [
			['Time', 'Julian Date, Relative Brightness', {'type': 'string', 'role': 'style'}]

		]
		var auto = false;
		prepopulatedChartData = [
			[2456673.904, 0.030432108, 'point { fill-color: #a52714; }'],
			[2456674.9, 0.057354394, 'point { fill-color: #a52714; }'],
			[2456675.9, 0.070630696, 'point { fill-color: #a52714; }'],
			[2456676.89, 0.140093962, 'point { fill-color: #a52714; }'],
			[2456677.89, 0.18430428, 'point { fill-color: #a52714; }'],
			[2456678.89, 0.271634703, 'point { fill-color: #a52714; }'],
			[2456679.88, 0.331858878, 'point { fill-color: #a52714; }'],
			[2456680.88, 0.411445949, 'point { fill-color: #a52714; }'],
			[2456683.869, 0.637464707, 'point { fill-color: #a52714; }'],
			[2456685.869, 0.695084938, 'point { fill-color: #a52714; }'],
			[2456686.865, 0.750515703, 'point { fill-color: #a52714; }'],
			[2456687.865, 0.791087208, 'point { fill-color: #a52714; }'],
			[2456688.855, 0.775112635, 'point { fill-color: #a52714; }'],
			[2456689.855, 0.790924543, 'point { fill-color: #a52714; }'],
			[2456690.855, 0.802591712, 'point { fill-color: #a52714; }'],
			[2456691.855, 0.784450501, 'point { fill-color: #a52714; }'],
			[2456692.844, 0.779905653, 'point { fill-color: #a52714; }'],
			[2456693.844, 0.770687958, 'point { fill-color: #a52714; }'],
			[2456694.845, 0.768217156, 'point { fill-color: #a52714; }'],
			[2456695.844, 0.708610077, 'point { fill-color: #a52714; }'],
			[2456696.835, 0.685586984, 'point { fill-color: #a52714; }'],
			[2456698.01, 0.7227411, 'point { fill-color: #a52714; }'],
			[2456698.835, 0.644798213, 'point { fill-color: #a52714; }'],
			[2456699.832, 0.596989119, 'point { fill-color: #a52714; }'],
			[2456700.878, 0.588991646, 'point { fill-color: #a52714; }'],
		]

		
		google.charts.load('current', { 'packages': ['corechart'] });
		// google.charts.setOnLoadCallback(supernovaDrawChart); < use this if you want to draw something when the chart loads
		
		function drawCompleteChart() {
			var i;
			for (i = 0; i < prepopulatedChartData.length; i++){
			supernovaValues.push(prepopulatedChartData[i]);
}
			supernovaDrawChart();
			
		}


		function supernovaDrawChart() {
			

			supernovaValues.push([getJulianDate(), targetCount / ((comp1Count + comp2Count) / 2), null]);
			prepopulatedChartData.push([getJulianDate(), targetCount / ((comp1Count + comp2Count) / 2), null]);
			var stats = google.visualization.arrayToDataTable(supernovaValues);
			var options = {
				title: 'Time vs. Relative Brightness',
				hAxis: { title: 'Time', minValue: 2456673.904, maxValue: 2456700.87805 },
				vAxis: { title: 'Relative Brightness', minValue: 1.4, maxValue: 1.6 },
				legend: 'none',
			};
			counter++;
			if(counter >= 3){
				promptForCompletedChart();
			}

			var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
			chart.draw(stats, options);
		}

		function promptForCompletedChart(){
			document.getElementById("modal_wrapper").style.display = "block";
			document.getElementById("last_text").style.display = "block";


		}

		function getBackgroundCountRegion() {
			var regionString = getSelectedRegionCoordinates();
			var backgroundCoordinates = getBackgroundCoordinates();
			if (regionString && backgroundCoordinates) {
				regionCount = JSON.parse(JS9.CountsInRegions(regionString, backgroundCoordinates, { cmdswitches: "-j" }));
				return regionCount.backgroundSubtractedResults[0].netCounts;
			} else {
				console.log("Error: Background not selected");
				return false;
			}

			var regionCoordinates = getSelectedRegionCoordinates();


		}


		function setBackgroundCount(object) {
			var objectCount = getBackgroundCountRegion();

			if (object == "target") {
				targetCount = objectCount;
				document.getElementById("demo").innerHTML = targetCount;
			}
			if (object == "comp1") {
				comp1Count = objectCount;
				document.getElementById("demo").innerHTML = comp1Count;
			}
			if (object == "comp2") {
				comp2Count = objectCount;
				document.getElementById("demo").innerHTML = comp2Count;
			}

			//remove text, remove parentheses, remove spaces, split by commas

		}

		function getJulianDate() {

			var headerData = readAndParseHeader();
			var headerDate = headerData.DATEOBS;
			var convertedDate = (Math.floor(dateToJulian(headerDate) * 100000) / 100000)
			return convertedDate

		}


		function getSelectedRegionCoordinates() {
			region = JS9.GetRegions("all")[0];
			var regionString;
			(region.wcsstr ? regionString = region.wcsstr : regionString = region.imstr);
			document.getElementById("demo").innerHTML = regionString;
			return regionString;

		}


		function getBackgroundCoordinates() {
			//Created an annulus, use that for background region
			//Note also that this only works if the selected region is a circle.

			var selectedCoordinates = getSelectedRegionCoordinates();
			strippedCoordinates = selectedCoordinates.replace(/[a-z]|\)|\(|\s/gi, '');
			var selectedCoordinatesSplit = strippedCoordinates.split(`,`);
			var annulusString = `annulus(${selectedCoordinatesSplit[0]}, ${selectedCoordinatesSplit[1]}, ${selectedCoordinatesSplit[2]}, ${parseInt(selectedCoordinatesSplit[2]) * 2})`;
			console.log
			return annulusString;

		}

		function dateToJulian(date) {

			if (!(date instanceof Date)) {
				date = new Date(date);
			}

			var julianDate = (date / 86400000) + 2440587.5;
			return julianDate;

		}

		function readAndParseHeader() {
			var rawHeaderText = JS9.GetFITSHeader();
			var regex1 = RegExp(".{80}", "g"); //FTS files have 80 byte lines, so we split by lines first
			var regex2 = RegExp("s*=s*"); //Our files have something = something on each relevant line, so we split that
			var headerArr = [];
			var array1;
			while ((array1 = regex1.exec(rawHeaderText)) !== null) {
				headerArr.push(array1[0]);
			}
			for (var i = 0; i < headerArr.length; i++) {
				headerArr[i] = headerArr[i].replace(/\s\s+/g, " ");
				headerArr[i] = headerArr[i].replace(/\/.*/g, "").trim();
				headerArr[i] = headerArr[i].split(regex2);
				headerArr[i][0] = headerArr[i][0].replace(/\.*\s*\-*/g, "");
				headerArr[i][0] = headerArr[i][0].replace(/-/g, ""); //dashes in keys will break queries
				headerArr[i][0] = headerArr[i][0].replace(/\s/g, "").trim();

				if (!headerArr[i][1]) {
					//this conditional eliminates descriptors without supernovaValues, which some software adds in
					headerArr.splice(i, 1);
				} else {
					headerArr[i][1] = headerArr[i][1].replace(/^\s+|\s+$/gm, "");
					headerArr[i][1] = headerArr[i][1].replace(/\s*'/gm, "").trim();
				}

			}
			var headerobjtemp = {};

			//Below, we need to convert our two dimensional array into an object
			for (var i = 0, iLen = headerArr.length; i < iLen; i++) {
				if (headerArr[i][0] && headerArr[i][1]) {
					headerobjtemp[headerArr[i][0]] = headerArr[i][1];
				}
			}
			headerobj = headerobjtemp;
			return headerobj;
		}

		function closeModal(){
			document.getElementById("modal_wrapper").style.display = "none";
		}
	




