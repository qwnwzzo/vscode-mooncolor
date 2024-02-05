import * as vscode from 'vscode';

import { MAPPING_COMMANDS, MOON_COLOR_ID } from './enums';
import { renderColorForWorkspace, updateMoonColorIdForWorkspace } from './render';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('moon.changeColor', async () => {
		let selected = await vscode.window.showQuickPick(
			Object.keys(MAPPING_COMMANDS).map((key: string) => MAPPING_COMMANDS[key]),
			{
				placeHolder: 'Pick a favourite color',
				onDidSelectItem: (item: any) => {
					renderColorForWorkspace(item.color);
				}
			}
		)
		if (selected) {
			renderColorForWorkspace(selected.color);
			updateMoonColorIdForWorkspace(selected.id);
			vscode.window.showInformationMessage("color updated!");
			return;
		}
		const orginalMoonColorId = vscode.workspace.getConfiguration().get(MOON_COLOR_ID);
		if (orginalMoonColorId) {
			renderColorForWorkspace(MAPPING_COMMANDS[orginalMoonColorId as string].color);
			return;
		}
		renderColorForWorkspace({});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
