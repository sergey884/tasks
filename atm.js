function ATM(money, limit) {
	const nominalArr = ['50', '100', '500', '1000', '5000'];
	const nominalsAmount = {};
	const nlen = nominalArr.length;
	for (let i = 0; i < nlen; i++) {
		nominalsAmount[nominalArr[i]] = 0;
	}

	if (money % nominalArr[0] !== 0) { 
		throw new Error("Incorrect amount of money.");
	}

	let right = nlen - 1;
	while (money && right >= 0) {
		console.log('money: ', money);
		const current = nominalArr[right];
		if (limit[current] && money >= parseInt(current)) {
			money -= parseInt(current);
			nominalsAmount[current]++;
			limit[current]--;
		} else {
			right--;
		}
	}

	if (money > 0) { 
		throw new Error("ATM does not have enough money.");
	}
	
	return nominalsAmount;
}

const limit = {
	'5000' : 2,
	'1000' : 2,
	'500' : 3,
	'100' : 2,
	'50' : 10
};
console.log(ATM(7720, limit));