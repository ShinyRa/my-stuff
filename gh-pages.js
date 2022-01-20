import { publish } from 'gh-pages';
import dotenv from 'dotenv';

dotenv.config();

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'git@github.com:ShinyRa/my-stuff.git',
		user: {
			name: process.env.GP_USER,
			email: process.env.GP_EMAIL
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
