import * as vscode from 'vscode';
import { MOON_COLOR_ID } from './enums';

export const renderColorForWorkspace = (newColor: any) => {
  vscode.workspace.getConfiguration().update("workbench.colorCustomizations", newColor, vscode.ConfigurationTarget.Workspace);
};

export const updateMoonColorIdForWorkspace = (newColorId: any) => {
  vscode.workspace.getConfiguration().update(MOON_COLOR_ID, newColorId, vscode.ConfigurationTarget.Workspace);
};

