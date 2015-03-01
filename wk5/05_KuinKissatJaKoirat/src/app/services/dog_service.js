CatDogApp.service('Dog', function(){
	this.all = function(){
		return [
			{
				breed: 'Kultainennoutaja',
				description: 'Kultainennoutaja on yksi kuudesta noutajarodusta. Kultaisianoutajia on yleisesti olemassa kahta päälinjaa: näyttelylinjaista ja metsästyslinjaista. Suomessa koirat ovat useimmiten näyttelytyyppisiä.'
			},
			{
				breed: 'Whippet',
				description: 'Whippet on maailmalla vinttikoirista yleisin, myös köyhän miehen greyhoundiksi kutsuttu keskikokoinen koira.lähde? Rodun nimi tulee englannin kielen sanoista whip tail, ruoskahäntä.'
			},
			{
				breed: 'Tanskandoggi',
				description: 'Tanskandoggi on alun perin nykyisen Saksan alueella kehittynyt koirarotu. Se on Saksan kansallisrotu.[1] Tanskandoggi on irlanninsusikoiran (urokset korkeampia, nartut matalampia) ohella kaikkein korkein koirarotu.'
			},
			{
				breed: 'Silkkiterrieri',
				description: 'Silkkiterrieri on pienikokoinen terrieri: sen säkäkorkeuden tulisi rotumääritelmän mukaan olla 23–26 cm, nartuilla se voi olla hieman vähemmän. Silkkiterrieri painaa normaalisti noin 4–5 kiloa. Sen pää on pidempi kuin yorkshirenterrierin, mutta lyhyempi kuin australianterrierin.'
			},
			{
				breed: 'Puli',
				description: 'Puli on vanhimpia unkarilaisista paimenkoirista. Se on todennäköisesti aasialaista alkuperää ja saapunut nykyisen Unkarin alueelle vaeltavien paimentolaisten mukana. Joidenkin lähteiden mukaan pulien esi-isistä on ollut merkkejä jo n. 4000–6000 eaa.'
			}
		]
	}
});