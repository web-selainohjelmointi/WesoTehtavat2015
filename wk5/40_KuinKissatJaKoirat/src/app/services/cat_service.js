CatDogApp.service('Cat', function(){
	this.all = function(){
		return [
			{
				breed: 'Eksoottinen lyhytkarva',
				description: 'Eksoottisen lyhytkarvan turkki on tiheä ja samettisen pehmeä, luonne koiramaisen seurallinen. Rakenne on roteva ja litteänaamainen kuten persialaisella. Rotumääritelmä on turkin pituutta lukuun ottamatta yhtenevä persialaisen rotumääritelmän kanssa.'
			},
			{
				breed: 'Abessinialainen',
				description: 'Abessinialainen on leikkisä ja hieman pienikokoista puumaa muistuttava kissarotu. Se on yksi vanhimmista tunnetuista kissaroduista, ja sen tunnusmerkki on turkin ticking-kuviointi.'
			},
			{
				breed: 'Burmilla',
				description: 'Burmilla on chinchillavärisen persialaisen ja burma-kissarotujen risteytys. Rodun kehitys alkoi vuonna 1981 Englannissa. Jotkin kasvattajat Tanskassa ja Englannissa ovat keskittyneet tosissaan burmillan jalostamiseen.'
			},
			{
				breed: 'Devon rex',
				description: 'Devon rex on kissarotu, joka syntyi Englannissa 1960-luvulla. Sen ulkonäkö on erikoinen ja luonteeltaan Devon rex on leikkisä ja seurallinen.'
			},
			{
				breed: 'Kartusiaani',
				description: 'Kartusiaani (Chartreux) on kissarotu. Se on vanha ranskalainen alkuperäisrotu, joka tunnetaan ainakin 1500-luvulta alkaen. Kantamuodoltaan kartusiaani on rekisteröimätön lyhytkarva.'
			}	
		]
	}
});