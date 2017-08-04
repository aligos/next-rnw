import Document, { Head, Main, NextScript } from "next/document";
import { AppRegistry } from "react-native-web";

export default class MyDocument extends Document {
	static async getInitialProps({ renderPage }) {
		AppRegistry.registerComponent("Main", () => Main);
		const { stylesheet } = AppRegistry.getApplication("Main");
		const page = renderPage();
		const styles = (
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
		);
		return { ...page, styles };
	}

	render() {
		return (
			<html>
				<Head>
					<title>My page</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
