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




[2458697.7219792,1.571531348388217, 'point { fill-color: #a52714; }'],
[2458697.7235069,1.5686953735986768, 'point { fill-color: #a52714; }'],
[2458697.7250231,1.5772372257464118, 'point { fill-color: #a52714; }'],
[2458697.7265394,1.5647795849387043, 'point { fill-color: #a52714; }'],
[2458697.7280671,1.5602291006479012, 'point { fill-color: #a52714; }'],
[2458697.7296181,1.5580280266402438, 'point { fill-color: #a52714; }'],
[2458697.7311458,1.5553466079891038, 'point { fill-color: #a52714; }'],
[2458697.7326736,1.5624956003354824, 'point { fill-color: #a52714; }'],
[2458697.7341898,1.5623564605282152, 'point { fill-color: #a52714; }'],
[2458697.7357176,1.564497222480674, 'point { fill-color: #a52714; }'],
[2458697.7395255,1.561573461756415, 'point { fill-color: #a52714; }'],
[2458697.7410417,1.564063716173275, 'point { fill-color: #a52714; }'],
[2458697.7425579,1.5649107218825535, 'point { fill-color: #a52714; }'],
[2458697.7440856,1.5592303416601696, 'point { fill-color: #a52714; }'],
[2458697.7456019,1.5654213438281066, 'point { fill-color: #a52714; }'],
[2458697.7471412,1.5606048217001898, 'point { fill-color: #a52714; }'],
[2458697.7486458,1.5625469897374002, 'point { fill-color: #a52714; }'],
[2458697.7501736,1.5620478816514867, 'point { fill-color: #a52714; }'],
[2458697.7516898,1.5633229817401813, 'point { fill-color: #a52714; }'],
[2458697.7532060,1.5684569383587348, 'point { fill-color: #a52714; }'],
[2458697.7547454,1.5627482210418377, 'point { fill-color: #a52714; }'],
[2458697.7562500,1.5628213923551733, 'point { fill-color: #a52714; }'],
[2458697.7577662,1.5629191093910855, 'point { fill-color: #a52714; }'],
[2458697.7592824,1.5621516202443686, 'point { fill-color: #a52714; }'],
[2458697.7608102,1.558063178258526, 'point { fill-color: #a52714; }'],
[2458697.7623495,1.5572509171905002, 'point { fill-color: #a52714; }'],
[2458697.7638542,1.5597964808247284, 'point { fill-color: #a52714; }'],
[2458697.7653819,1.564075501964262, 'point { fill-color: #a52714; }'],
[2458697.7669097,1.5647815038789334, 'point { fill-color: #a52714; }'],
[2458697.7684375,1.5664334791356767, 'point { fill-color: #a52714; }'],
[2458697.7699884,1.5632408166088552, 'point { fill-color: #a52714; }'],
[2458697.7715046,1.5637154379069043, 'point { fill-color: #a52714; }'],
[2458697.7730208,1.5662161696281565, 'point { fill-color: #a52714; }'],
[2458697.7745370,1.5638905893567192, 'point { fill-color: #a52714; }'],
[2458697.7760648,1.5679086767630075, 'point { fill-color: #a52714; }'],
[2458697.7776157,1.571765887599759, 'point { fill-color: #a52714; }'],
[2458697.7791319,1.572235495405612, 'point { fill-color: #a52714; }'],
[2458697.7806366,1.573613432857614, 'point { fill-color: #a52714; }'],
[2458697.7821528,1.5696673787873892, 'point { fill-color: #a52714; }'],
[2458697.7836690,1.5738894845607345, 'point { fill-color: #a52714; }'],
[2458697.7852199,1.5699278851846903, 'point { fill-color: #a52714; }'],
[2458697.7867477,1.5698129158097627, 'point { fill-color: #a52714; }'],
[2458697.7882639,1.5662301033958137, 'point { fill-color: #a52714; }'],
[2458697.7897917,1.5693882068927218, 'point { fill-color: #a52714; }'],
[2458697.7913079,1.5647636826527407, 'point { fill-color: #a52714; }'],
[2458697.7928704,1.56426679788875, 'point { fill-color: #a52714; }'],
[2458697.7943750,1.5683342389016135, 'point { fill-color: #a52714; }'],
[2458697.7959028,1.564441058979394, 'point { fill-color: #a52714; }'],
[2458697.7974190,1.5635860632956369, 'point { fill-color: #a52714; }'],
[2458697.8004861,1.5656036096649917, 'point { fill-color: #a52714; }'],
[2458697.8020023,1.566978487422324, 'point { fill-color: #a52714; }'],
[2458697.8035069,1.5678593248989163, 'point { fill-color: #a52714; }'],
[2458697.8050347,1.5638863850298323, 'point { fill-color: #a52714; }'],
[2458697.8065509,1.5670488226099029, 'point { fill-color: #a52714; }'],
[2458697.8251736,1.5423911726191055, 'point { fill-color: #a52714; }'],
[2458697.8266898,1.5404388400347913, 'point { fill-color: #a52714; }'],
[2458697.8282176,1.534471210401826, 'point { fill-color: #a52714; }'],
[2458697.8297338,1.5342096423125773, 'point { fill-color: #a52714; }'],
[2458697.8312616,1.5354173188079228, 'point { fill-color: #a52714; }'],
[2458697.8328125,1.5331860760112528, 'point { fill-color: #a52714; }'],
[2458697.8343403,1.528803523379381, 'point { fill-color: #a52714; }'],
[2458697.8358681,1.531220686025045, 'point { fill-color: #a52714; }'],
[2458697.8373958,1.5282056349918647, 'point { fill-color: #a52714; }'],
[2458697.8389120,1.5258621423294751, 'point { fill-color: #a52714; }'],
[2458697.8629745,1.5185204548381621, 'point { fill-color: #a52714; }'],
[2458697.8645023,1.5280017798444996, 'point { fill-color: #a52714; }'],
[2458697.8660648,1.535816506270434, 'point { fill-color: #a52714; }'],
[2458697.8675810,1.5390569675523809, 'point { fill-color: #a52714; }'],
[2458697.8691088,1.5462676122926602, 'point { fill-color: #a52714; }'],
[2458697.8706481,1.5515955098981005, 'point { fill-color: #a52714; }'],
[2458697.8721759,1.5461993155824465, 'point { fill-color: #a52714; }'],
[2458697.8737037,1.555763866399994, 'point { fill-color: #a52714; }'],
[2458697.8752315,1.5550877293034897, 'point { fill-color: #a52714; }'],
[2458697.8767477,1.5571552278355612, 'point { fill-color: #a52714; }'],
[2458697.8782986,1.5586944765170598, 'point { fill-color: #a52714; }'],
[2458697.8798148,1.562674232578319, 'point { fill-color: #a52714; }'],
[2458697.8813310,1.5540836473276465, 'point { fill-color: #a52714; }'],
[2458697.8828472,1.5498710278584158, 'point { fill-color: #a52714; }'],
[2458697.8843634,1.5490516835302746, 'point { fill-color: #a52714; }'],
[2458697.8859028,1.5554013549053707, 'point { fill-color: #a52714; }'],
[2458697.8874306,1.5502901105699662, 'point { fill-color: #a52714; }'],
[2458697.8889468,1.5559393563516235, 'point { fill-color: #a52714; }'],
[2458697.8904745,1.5556308204457707, 'point { fill-color: #a52714; }'],
[2458697.8920023,1.5523241928274847, 'point { fill-color: #a52714; }'],
[2458697.8935532,1.5536261503687796, 'point { fill-color: #a52714; }'],
[2458697.8981250,1.5476448793870883, 'point { fill-color: #a52714; }'],
[2458697.8996528,1.5459114776079557, 'point { fill-color: #a52714; }'],
[2458697.9012037,1.541792443426941, 'point { fill-color: #a52714; }'],
[2458697.9027315,1.544100114029394, 'point { fill-color: #a52714; }'],
[2458697.9057523,1.549687138684346, 'point { fill-color: #a52714; }'],
[2458697.9072801,1.5492779654672921, 'point { fill-color: #a52714; }'],
[2458697.9088310,1.540330367293359, 'point { fill-color: #a52714; }'],
[2458697.9103588,1.5495054759784244, 'point { fill-color: #a52714; }'],
[2458697.9118866,1.5553399782061343, 'point { fill-color: #a52714; }'],
[2458697.9134028,1.5514052768249855, 'point { fill-color: #a52714; }'],
[2458697.9149306,1.5557084130624024, 'point { fill-color: #a52714; }'],
[2458697.9179977,1.5482136487424452, 'point { fill-color: #a52714; }'],
[2458697.9195255,1.5469221407728075, 'point { fill-color: #a52714; }'],
[2458697.9225579,1.5424725011551412, 'point { fill-color: #a52714; }'],
[2458697.9301968,1.5418060277152206, 'point { fill-color: #a52714; }'],
[2458697.9332523,1.5508680065513207, 'point { fill-color: #a52714; }'],
[2458697.9426042,1.5522452421681538, 'point { fill-color: #a52714; }'],
[2458697.9456366,1.547496392061001, 'point { fill-color: #a52714; }'],
[2458697.9471875,1.5525164375924188, 'point { fill-color: #a52714; }'],
[2458697.9502315,1.5584345694301627, 'point { fill-color: #a52714; }'],
[2458697.9517593,1.542889820029375, 'point { fill-color: #a52714; }'],
[2458697.9548380,1.5607518468621606, 'point { fill-color: #a52714; }'],
[2458697.9563542,1.5569440668931955, 'point { fill-color: #a52714; }'],
[2458697.9593981,1.546510486180807, 'point { fill-color: #a52714; }'],
[2458697.9609144,1.5552688635536533, 'point { fill-color: #a52714; }'],
[2458697.9639699,1.5521140348410845, 'point { fill-color: #a52714; }'],
[2458697.9654861,1.5556676621331103, 'point { fill-color: #a52714; }'],
[2458697.9670139,1.5442659188641361, 'point { fill-color: #a52714; }'],
[2458697.9700810,1.5509766610015836, 'point { fill-color: #a52714; }'],
[2458697.9731134,1.5540562366552326, 'point { fill-color: #a52714; }'],
[2458697.9746412,1.554070847170415, 'point { fill-color: #a52714; }'],
[2458697.9761574,1.5499273403947305, 'point { fill-color: #a52714; }'],
[2458697.9792245,1.5548313214511233, 'point { fill-color: #a52714; }'],
[2458697.9822685,1.569563381713126, 'point { fill-color: #a52714; }'],
[2458697.9837963,1.558886383853929, 'point { fill-color: #a52714; }'],

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
				hAxis: { title: 'Time', minValue: 2458697.7219792, maxValue: 2458697.9837963 },
				vAxis: { title: 'Relative Brightness', minValue: 1.5, maxValue: 1.57 },
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
			console.log(headerobj);
			console.log(headerobj.JDOBS);
			return headerobj;
		}

		function closeModal(){
			document.getElementById("modal_wrapper").style.display = "none";
		}
	


