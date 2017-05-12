function ATM(money, limit) {
	var nominalArr = ['50', '100', '500', '1000', '5000'];
	var nominalsAmount = {};
	var nlen = nominalArr.length;
	for (var i = 0; i < nlen; i++) {
		nominalsAmount[nominalArr[i]] = 0;
	}

	var mamount;
	while(money) {
		do {
			for (var k = nlen - 1; k; k--) {
				if (money < parseInt(nominalArr[0])) {
					throw new Error("You enter incorrect amount of money.");
					return;
				}
				if (money >= parseInt(nominalArr[k]) && limit[nominalArr[k]]){
					nominalsAmount[nominalArr[k]]++;
					limit[nominalArr[k]]--;
					money -= parseInt(nominalArr[k]);
					break;
				} 	
			}
		} while(false)
		
		mamount = 0;
		for (var key in limit) {
			mamount += limit[key];
		}
		if (money && !mamount) {
			throw new Error("ATM do not have enough money.");
			return;
		}
	}
	
	return nominalsAmount;
}

var limit = {
	'5000' : 2,
	'1000' : 2,
	'500' : 3,
	'100' : 0,
	'50' : 10
};
ATM(7750, limit);