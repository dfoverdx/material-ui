import * as React from 'react';
import { InternalStandardProps as StandardProps } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { SxProps } from '@material-ui/system';
import { TreeViewClasses } from './treeViewClasses';

export interface TreeViewPropsBase extends StandardProps<React.HTMLAttributes<HTMLUListElement>> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TreeViewClasses>;
  /**
   * The default icon used to collapse the node.
   */
  defaultCollapseIcon?: React.ReactNode;
  /**
   * The default icon displayed next to a end node. This is applied to all
   * tree nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultEndIcon?: React.ReactNode;
  /**
   * Expanded node ids. (Uncontrolled)
   * @default []
   */
  defaultExpanded?: string[];
  /**
   * The default icon used to expand the node.
   */
  defaultExpandIcon?: React.ReactNode;
  /**
   * The default icon displayed next to a parent node. This is applied to all
   * parent nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultParentIcon?: React.ReactNode;
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable?: boolean;
  /**
   * If `true` selection is disabled.
   * @default false
   */
  disableSelection?: boolean;
  /**
   * Expanded node ids. (Controlled)
   */
  expanded?: string[];
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id?: string;
  /**
   * Callback fired when tree items are focused.
   *
   * @param {object} event The event source of the callback **Warning**: This is a generic event not
   * a focus event.
   * @param {string} value of the focused node.
   */
  onNodeFocus?: (event: React.SyntheticEvent, nodeId: string) => void;
  /**
   * Callback fired when tree items are expanded/collapsed.
   *
   * @param {object} event The event source of the callback.
   * @param {array} nodeIds The ids of the expanded nodes.
   */
  onNodeToggle?: (event: React.SyntheticEvent, nodeIds: string[]) => void;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export interface MultiSelectTreeViewProps extends TreeViewPropsBase {
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is `true` this takes an array of strings; when `false` (default) a string.
   * @default []
   */
  defaultSelected?: string[];
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is `true` this takes an array of strings; when `false` (default) a string.
   */
  selected?: string[];
  /**
   * If `true` `ctrl` and `shift` will trigger multiselect.
   * @default false
   */
  multiSelect?: true;
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {object} event The event source of the callback
   * @param {string[]|string} nodeIds of the selected nodes. When `multiSelect` is `true`
   * this is an array of strings; when `false` (default) a string.
   */
  onNodeSelect?: (event: React.SyntheticEvent, nodeIds: string[]) => void;
}

export interface SingleSelectTreeViewProps extends TreeViewPropsBase {
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is `true` this takes an array of strings; when `false` (default) a string.
   * @default []
   */
  defaultSelected?: string;
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is `true` this takes an array of strings; when `false` (default) a string.
   */
  selected?: string;
  /**
   * If `true` `ctrl` and `shift` will trigger multiselect.
   * @default false
   */
  multiSelect?: false;
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {object} event The event source of the callback
   * @param {string[]|string} nodeId of the selected nodes. When `multiSelect` is `true`
   * this is an array of strings; when `false` (default) a string.
   */
  onNodeSelect?: (event: React.SyntheticEvent, nodeId: string) => void;
}

export type TreeViewProps = SingleSelectTreeViewProps | MultiSelectTreeViewProps;

/**
 *
 * Demos:
 *
 * - [Tree View](https://material-ui.com/components/tree-view/)
 *
 * API:
 *
 * - [TreeView API](https://material-ui.com/api/tree-view/)
 */
export default function TreeView(props: TreeViewProps): JSX.Element;
