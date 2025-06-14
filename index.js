/**
 * Export Default Semantic Release shareable config
 */
module.exports = {
	branches: ['main', 'production', {name: 'next', channel: 'next'}],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/git',
		'@semantic-release/github',
	],
};
