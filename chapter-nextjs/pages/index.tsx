import { useState, useEffect } from 'react';

export default function Home () {
	const [repositories, setRepositories] = useState<string[]>([]);
	
	useEffect(() => {
		fetch('https://api.github.com/users/dsoldera/repos')
			.then(response => response.json())
			.then(data => {
				const repositoryNames = data.map((item) => item.name);
				setRepositories(repositoryNames);
			});
	}, []);
	
	return (
			<main>
				<ul>
					{repositories.map(repo => (
						<li key={repo}>{repo}</li>
					))}
				</ul>
			</main>
		)
	}
