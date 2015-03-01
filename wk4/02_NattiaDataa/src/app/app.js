function MovieController($scope){
	$scope.movies = [
		{
			name: 'Honey, I Shrunk the Kids',
			link: 'http://www.imdb.com/title/tt0097523',
			release: 1989,
			description: 'The scientist father of a teenage girl and boy accidentally shrinks his and two other neighborhood teens to the size of insects. Now the teens must fight diminutive dangers as the father searches for them.',
			director: 'Joe Johnston',
			roles: [
				{
					role: 'Wayne Szalinski',
					actor: 'Rick Moranis'
				},
				{
					role: 'Diane Szalinski',
					actor: 'Marcia Strassman'
				},
				{
					role: 'Mae Thompson',
					actor: 'Kristine Sutherland'
				}
			]
		},
		{
			name: 'The Lord of the Rings: The Fellowship of the Ring',
			link: 'http://www.imdb.com/title/tt0120737',
			release: 2001,
			description: 'A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.',
			director: 'Peter Jackson',
			oscarAwards: [
    			'Best Cinematography',
    			'Best Makeup',
    			'Best Music, Original Score',
    			'Best Effects, Visual Effects'
			],
			roles: [
				{
					role: 'Frodo',
					actor: 'Elijah Wood'
				},
				{
					role: 'Sam',
					actor: 'Sean Astin'
				},
				{
					role: 'Pippin',
					actor: 'Billy Boyd'
				},
				{
					role: 'Merry',
					actor: 'Dominic Monaghan'
				},
				{
					role: 'Aragorn',
					actor: 'Viggo Mortensen'
				},
				{
					role: 'Legolas',
					actor: 'Orlando Bloom'
				}
			]
		},
		{
			name: 'My Neighbor Totoro',
			link: 'http://www.imdb.com/title/tt0096283',
			release: 1988,
			description: 'When two girls move to the country to be near their ailing mother, they have adventures with the wonderous forest spirits who live nearby.'
			director: 'Hayao Miyazaki',
			roles: [
				{
					role: 'Kanta',
					actor: 'Toshiyuki Amagasa'
				},
				{
					role: 'Michiko',
					actor: 'Brianne Brozey'
				},
				{
					role: 'Mei',
					actor: 'Cheryl Chase'
				},
				{
					role: 'Satsuki',
					actor: 'Dakota Fanning'
				}
			]
		}
	];
}