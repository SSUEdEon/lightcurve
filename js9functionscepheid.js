		var backgroundLocation;
		var targetCount;
		var comp1Count;
		var comp2Count;

		google.charts.load('current', { 'packages': ['corechart'] });
		//Use this to create a chart for SN2014 something in M83. After three
		//images have been procesed, offer to show the use this graph instead of
		//their own. Explain what the purpose is, then link to the next activity.

		var counter = 0;
		values = [
			['Time', 'Julian Date, Relative Brightness', {'type': 'string', 'role': 'style'}]

		]
		
		var auto = false;
		var prepopulatedChartData = [

[2458671.73337962963,4.668713341053145, 'point { fill-color: #a52714; }'],
[2458671.739212962966,4.511269079807582, 'point { fill-color: #a52714; }'],
[2458671.74219907408,3.851766902887305, 'point { fill-color: #a52714; }'],
[2458671.74587962963,3.8935558948618114, 'point { fill-color: #a52714; }'],
[2458671.76241898148,4.537996966146083, 'point { fill-color: #a52714; }'],
[2458671.76532407408,4.501577635406166, 'point { fill-color: #a52714; }'],
[2458671.76831018519,3.6720262884504713, 'point { fill-color: #a52714; }'],
[2458671.786157407405,4.331342424051714, 'point { fill-color: #a52714; }'],
[2458671.791979166665,4.427483330918035, 'point { fill-color: #a52714; }'],
[2458671.794953703706,4.042027871268424, 'point { fill-color: #a52714; }'],
[2458671.797997685186,4.007094478046951, 'point { fill-color: #a52714; }'],
[2458672.74136574074,3.5337519054984456, 'point { fill-color: #a52714; }'],
[2458672.74428240741,3.5267276416680535, 'point { fill-color: #a52714; }'],
[2458672.75016203704,3.62639331300484, 'point { fill-color: #a52714; }'],
[2458672.75166666666,3.6077752613255964, 'point { fill-color: #a52714; }'],
[2458672.78942129629,3.3246434609574362, 'point { fill-color: #a52714; }'],
[2458672.79263888889,3.3211477590497664, 'point { fill-color: #a52714; }'],
[2458672.79857638889,3.5335751276178846, 'point { fill-color: #a52714; }'],
[2458672.80008101852,3.544366950730261, 'point { fill-color: #a52714; }'],
[2458672.84384259259,3.8325622088535756, 'point { fill-color: #a52714; }'],
[2458673.77706018519,3.1714111122411017, 'point { fill-color: #a52714; }'],
[2458673.78318287037,3.2475284210836795, 'point { fill-color: #a52714; }'],
[2458673.78634259259,3.297631396422094, 'point { fill-color: #a52714; }'],
[2458673.789375,3.293220727539298, 'point { fill-color: #a52714; }'],
[2458673.80695601852,2.8567044120270606, 'point { fill-color: #a52714; }'],
[2458673.80986111111,2.8444465926275155, 'point { fill-color: #a52714; }'],
[2458673.81283564815,3.3037609913650554, 'point { fill-color: #a52714; }'],
[2458673.81586805556,3.2987924087954723, 'point { fill-color: #a52714; }'],
[2458677.7340625,2.5750952085838836, 'point { fill-color: #a52714; }'],
[2458677.73695601852,2.593329360390803, 'point { fill-color: #a52714; }'],
[2458677.74145833333,2.6072346611083437, 'point { fill-color: #a52714; }'],
[2458677.74296296296,2.586825245031486, 'point { fill-color: #a52714; }'],
[2458677.78337962963,2.569418527074923, 'point { fill-color: #a52714; }'],
[2458677.78628472222,2.5985783468506978, 'point { fill-color: #a52714; }'],
[2458677.78927083333,2.593893205636285, 'point { fill-color: #a52714; }'],
[2458677.79230324074,2.608429954877073, 'point { fill-color: #a52714; }'],
[2458677.829363425924,3.0853549933519977, 'point { fill-color: #a52714; }'],
[2458677.832280092596,3.011579372291188, 'point { fill-color: #a52714; }'],
[2458677.83675925926,2.5818468636586562, 'point { fill-color: #a52714; }'],
[2458678.71381944444,3.0006782513596093, 'point { fill-color: #a52714; }'],
[2458678.71962962963,2.9899252998119996, 'point { fill-color: #a52714; }'],
[2458678.72261574074,2.6727202434435746, 'point { fill-color: #a52714; }'],
[2458678.725648148145,2.6772770086505404, 'point { fill-color: #a52714; }'],
[2458678.73918981481,3.0055024409232796, 'point { fill-color: #a52714; }'],
[2458678.745,3.0221605650087318, 'point { fill-color: #a52714; }'],
[2458678.74799768518,2.7106033969264383, 'point { fill-color: #a52714; }'],
[2458678.75103009259,2.7171942967089935, 'point { fill-color: #a52714; }'],
[2458678.76516203704,2.8788423890499786, 'point { fill-color: #a52714; }'],
[2458678.76806712963,2.85299032772635, 'point { fill-color: #a52714; }'],
[2458678.77396990741,2.7292149578531752, 'point { fill-color: #a52714; }'],
[2458678.77701388889,2.7543795047280586, 'point { fill-color: #a52714; }'],
[2458679.704409722224,4.199793914828417, 'point { fill-color: #a52714; }'],
[2458679.71090277778,4.353904693605386, 'point { fill-color: #a52714; }'],
[2458679.740960648145,3.4941221648011975, 'point { fill-color: #a52714; }'],
[2458682.787314814814,3.777484737522747, 'point { fill-color: #a52714; }'],
[2458693.72755787037,3.8510678706173658, 'point { fill-color: #a52714; }'],
[2458695.77365740741,3.1247184705302806, 'point { fill-color: #a52714; }'],
[2458695.779502314814,3.05835151580205, 'point { fill-color: #a52714; }'],
[2458695.78099537037,3.0461801928811796, 'point { fill-color: #a52714; }'],
[2458695.79662037037,3.001159943427789, 'point { fill-color: #a52714; }'],
[2458695.800208333334,2.9600385307753037, 'point { fill-color: #a52714; }'],
[2458695.80603009259,3.034037326832863, 'point { fill-color: #a52714; }'],
[2458695.80752314815,3.0206446487039953, 'point { fill-color: #a52714; }'],
[2458696.71128472222,2.624800524563046, 'point { fill-color: #a52714; }'],
[2458696.71418981482,2.6851833365428806, 'point { fill-color: #a52714; }'],
[2458696.72012731482,2.884416948254245, 'point { fill-color: #a52714; }'],
[2458696.72163194444,2.901446707404706, 'point { fill-color: #a52714; }'],
[2458696.73681712963,2.6000756410496138, 'point { fill-color: #a52714; }'],
[2458696.73972222222,2.555749397221475, 'point { fill-color: #a52714; }'],
[2458696.74561342593,2.9035833710862033, 'point { fill-color: #a52714; }'],
[2458696.747141203705,2.8919448289073224, 'point { fill-color: #a52714; }'],
[2458696.770902777775,2.947848116453193, 'point { fill-color: #a52714; }'],
[2458696.77380787037,2.915825966799796, 'point { fill-color: #a52714; }'],
[2458696.7796875,2.8576068805705646, 'point { fill-color: #a52714; }'],
[2458696.7812037037,2.85134938431134, 'point { fill-color: #a52714; }'],
[2458696.78273148148,2.852447492242362, 'point { fill-color: #a52714; }'],
[2458696.79981481482,2.6861387199295033, 'point { fill-color: #a52714; }'],
[2458696.80571759259,2.8453686704619683, 'point { fill-color: #a52714; }'],
[2458696.80724537037,2.8488678490644173, 'point { fill-color: #a52714; }'],
[2458698.73378472222,2.526058002386177, 'point { fill-color: #a52714; }'],
[2458698.73738425926,2.670030887630783, 'point { fill-color: #a52714; }'],
[2458698.74335648148,2.5970406954729137, 'point { fill-color: #a52714; }'],
[2458698.746354166666,2.6158670209970696, 'point { fill-color: #a52714; }'],
[2458698.76802083333,2.81415498443336, 'point { fill-color: #a52714; }'],
[2458698.77449074074,2.750877907833126, 'point { fill-color: #a52714; }'],
[2458698.77744212963,2.5693059191388894, 'point { fill-color: #a52714; }'],
[2458698.780439814815,2.5743399314213042, 'point { fill-color: #a52714; }'],
[2458699.71855324074,3.3181784717875775, 'point { fill-color: #a52714; }'],
[2458699.72145833333,3.2951339961034716, 'point { fill-color: #a52714; }'],
[2458699.725960648146,2.845580202244866, 'point { fill-color: #a52714; }'],
[2458699.727476851855,2.8550199369102827, 'point { fill-color: #a52714; }'],
[2458699.76273148148,3.3018974637406235, 'point { fill-color: #a52714; }'],
[2458699.76561342592,3.2673304704724604, 'point { fill-color: #a52714; }'],
[2458699.7700462963,2.8370574742840997, 'point { fill-color: #a52714; }'],
[2458699.77153935185,2.817134784332414, 'point { fill-color: #a52714; }'],
[2458699.79298611111,3.0944560649076838, 'point { fill-color: #a52714; }'],
[2458699.79880787037,3.053234577121049, 'point { fill-color: #a52714; }'],
[2458699.80333333334,2.8705608903665327, 'point { fill-color: #a52714; }'],
[2458700.76005787037,4.862665914474671, 'point { fill-color: #a52714; }'],
[2458700.76935185185,4.896378605533059, 'point { fill-color: #a52714; }'],
[2458700.77234953704,3.7101633739469646, 'point { fill-color: #a52714; }'],
[2458700.775416666664,3.7051614081792317, 'point { fill-color: #a52714; }'],
[2458700.79666666667,4.418911993097653, 'point { fill-color: #a52714; }'],
[2458700.80253472222,4.365464492201537, 'point { fill-color: #a52714; }'],
[2458700.80550925926,3.7256711927033477, 'point { fill-color: #a52714; }'],
[2458700.80856481481,3.7190285696439984, 'point { fill-color: #a52714; }'],
[2458706.743472222224,2.2033166064573337, 'point { fill-color: #a52714; }'],
[2458706.74996527778,2.3311150665650158, 'point { fill-color: #a52714; }'],
[2458706.75292824074,2.9081597577893517, 'point { fill-color: #a52714; }'],
[2458706.7544212963,2.922613467501935, 'point { fill-color: #a52714; }'],
[2458711.746296296296,4.946775665794272, 'point { fill-color: #a52714; }'],
[2458711.74989583333,4.998872447139296, 'point { fill-color: #a52714; }'],
[2458711.75572916667,3.9394750389050994, 'point { fill-color: #a52714; }'],
[2458711.7572337963,3.965374427636492, 'point { fill-color: #a52714; }'],
[2458711.80537037037,4.161435151075659, 'point { fill-color: #a52714; }'],
[2458711.808287037034,4.132214133868827, 'point { fill-color: #a52714; }'],
[2458711.81490740741,4.0090174231350995, 'point { fill-color: #a52714; }'],
[2458711.816400462965,4.0111239223908175, 'point { fill-color: #a52714; }'],
[2458716.69900462963,2.8233180835549754, 'point { fill-color: #a52714; }'],
[2458716.71695601852,2.944162638560214, 'point { fill-color: #a52714; }'],
[2458716.7184837963,2.9297550986600807, 'point { fill-color: #a52714; }'],
[2458716.72001157407,2.951715208802014, 'point { fill-color: #a52714; }'],
[2458718.718726851854,2.519160621727655, 'point { fill-color: #a52714; }'],
[2458718.721770833334,2.577594429572848, 'point { fill-color: #a52714; }'],
[2458718.72766203704,2.576740178669439, 'point { fill-color: #a52714; }'],
[2458718.730729166666,2.601045701035257, 'point { fill-color: #a52714; }'],
[2458718.76940972222,2.1945295213553173, 'point { fill-color: #a52714; }'],
[2458718.772997685184,2.2113104485442667, 'point { fill-color: #a52714; }'],
[2458718.77884259259,2.612235948753389, 'point { fill-color: #a52714; }'],
[2458718.7818287037,2.599541754129746, 'point { fill-color: #a52714; }'],
[2458721.83,5.890588194045739, 'point { fill-color: #a52714; }'],
[2458721.839467592596,3.7653028325675577, 'point { fill-color: #a52714; }'],
[2458722.73094907407,4.770931056572482, 'point { fill-color: #a52714; }'],
[2458722.73974537037,4.064742527062617, 'point { fill-color: #a52714; }'],
[2458722.78047453704,4.273927543737261, 'point { fill-color: #a52714; }'],
[2458722.78341435185,4.233525446593945, 'point { fill-color: #a52714; }'],
[2458724.7153587963,3.6256439408137724, 'point { fill-color: #a52714; }'],
					]

		
		// google.charts.setOnLoadCallback(drawChart); < use this if you want to draw something when the chart loads
		
		function drawCompleteChart() {
			var i;
			for (i = 0; i < prepopulatedChartData.length; i++){
			values.push(prepopulatedChartData[i]);
}
			drawChart();
			
		}


		function drawChart() {
			var headerData = readAndParseHeader();
			var headerDate = headerData.JDOBS;
			var convertDate = parseFloat(headerDate)

			values.push([convertDate, targetCount / ((comp1Count + comp2Count) / 2), null]);
			prepopulatedChartData.push([convertDate, targetCount / ((comp1Count + comp2Count) / 2), null]);
			var stats = google.visualization.arrayToDataTable(values);
			var options = {
				title: 'Time vs. Relative Brightness',
				hAxis: { title: 'Time (Julian Date)', minValue: 2458671.73337962963, maxValue: 2458724.7153587963 },
				vAxis: { title: 'Relative Brightness', minValue: 2, maxValue: 5 },
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
			var annulusString = `annulus(${selectedCoordinatesSplit[0]}, ${selectedCoordinatesSplit[1]}, 14, 20)`;
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
					//this conditional eliminates descriptors without values, which some software adds in
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
	




