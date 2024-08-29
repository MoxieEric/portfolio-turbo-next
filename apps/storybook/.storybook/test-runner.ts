import type { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
	tags: {
		// include: [],
		exclude: ['no-tests'],
		skip: ['skip-test', 'helper'],
	},
}

export default config
