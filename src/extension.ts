import * as vscode from 'vscode';
import { REACT, ANGULAR, VUE, JAVASCRIPT } from './color';

const REACT_ID = "mooon.reactColor";
const VUE_ID = "mooon.vueColor";
const ANGULAR_ID = "mooon.angularColor";
const JAVASCRIPT_ID = "mooon.javascriptColor";
const RESET_ID = "mooon.resetColor";

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('moon.changeColor', async () => {
		let selected = await vscode.window.showQuickPick([
            { label: "MOON: React", command: REACT_ID },
            { label: "MOON: Vue", command: VUE_ID },
			{ label: "MOON: Angular", command: ANGULAR_ID },
			{ label: "MOON: Javascript", command: JAVASCRIPT_ID },
			{ label: "MOON: RESET", command: RESET_ID },
        ])
		if (selected) {
			vscode.commands.executeCommand(selected.command);
		}
	});

	let reset = vscode.commands.registerCommand(RESET_ID, async () => {
		vscode.workspace.getConfiguration().update("workbench.colorCustomizations", {}, vscode.ConfigurationTarget.Workspace);

        vscode.window.showInformationMessage('Colors reset!');
	});

	let react = vscode.commands.registerCommand(REACT_ID, async () => {
		vscode.workspace.getConfiguration().update("workbench.colorCustomizations", REACT, vscode.ConfigurationTarget.Workspace);

        vscode.window.showInformationMessage('Colors updated!');
	});

	let vue = vscode.commands.registerCommand(VUE_ID, async () => {
		vscode.workspace.getConfiguration().update("workbench.colorCustomizations", VUE, vscode.ConfigurationTarget.Workspace);

        vscode.window.showInformationMessage('Colors updated!');
	});

	let angular = vscode.commands.registerCommand(ANGULAR_ID, async () => {
		vscode.workspace.getConfiguration().update("workbench.colorCustomizations", ANGULAR, vscode.ConfigurationTarget.Workspace);

        vscode.window.showInformationMessage('Colors updated!');
	});

	let javascript = vscode.commands.registerCommand(JAVASCRIPT_ID, async () => {
		vscode.workspace.getConfiguration().update("workbench.colorCustomizations", JAVASCRIPT, vscode.ConfigurationTarget.Workspace);

        vscode.window.showInformationMessage('Colors updated!');
	});

	context.subscriptions.push(disposable, reset, react, vue, angular, javascript);
}

// This method is called when your extension is deactivated
export function deactivate() {}
