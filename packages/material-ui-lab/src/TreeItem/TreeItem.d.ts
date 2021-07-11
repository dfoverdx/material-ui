import * as React from 'react';
import { InternalStandardProps as StandardProps, Theme } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { SxProps } from '@material-ui/system';
import { TreeItemClasses } from './treeItemClasses';
import { TreeItemContentProps } from './TreeItemContent';

interface TreeItemPropsBase
  extends StandardProps<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TreeItemClasses>;
  /**
   * The icon used to collapse the node.
   */
  collapseIcon?: React.ReactNode;
  /**
   * The component used for the content node.
   * @default TreeItemContent
   */
  ContentComponent?: React.JSXElementConstructor<TreeItemContentProps>;
  /**
   * Props applied to ContentComponent
   */
  ContentProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * If `true`, the node is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the node cannot be multi-selected in a `multiSelect` `TreeView`.
   */
  disableMultiSelect?: boolean;
  /**
   * The icon displayed next to a end node.
   */
  endIcon?: React.ReactNode;
  /**
   * The icon used to expand the node.
   */
  expandIcon?: React.ReactNode;
  /**
   * The icon to display next to the tree node's label.
   */
  icon?: React.ReactNode;
  /**
   * This prop isn't supported.
   * Use the `onNodeFocus` callback on the tree if you need to monitor a node's focus.
   */
  onFocus?: null;
  /**
   * The tree node label.
   */
  label?: React.ReactNode;
  /**
   * The id of the node.
   */
  nodeId: string;
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the
   * requirements for this component.
   * @default Collapse
   */
  TransitionComponent?: React.JSXElementConstructor<TransitionProps>;
  /**
   * Props applied to the transition element.
   * By default, the element is based on this
   * [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
   */
  TransitionProps?: TransitionProps;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

interface SingleSelectTreeItemProps extends TreeItemPropsBase {
  /**
   * If `true`, this node and its child nodes are multi-selectable.  If the parent `TreeView` is
   * multi-selectable, then this node's children are selected separately from other nodes.
   *
   * Ctrl+clicking this node will select/deselect all of its children.  To disable this behavior,
   * set `disableMultiSelect` on this node to `true`.
   *
   * @default false
   */
  multiSelectRoot?: false;
  /**
   * Callback fired when child nodes are selected/unselected when `multiSelectRoot` is `true`.
   *
   * @param {object} event The event source of the callback
   * @param {string[]} nodeIds of the selected nodes.
   * @default null
   */
  onNodeSelect?: null;
}

interface MultiSelectTreeItemProps extends TreeItemPropsBase {
  /**
   * If `true`, this node and its child nodes are multi-selectable.  If the parent `TreeView` is
   * multi-selectable, then this node's children are selected separately from other nodes.
   *
   * Ctrl+clicking this node will select/deselect all of its children.  To disable this behavior,
   * set `disableMultiSelect` on this node to `true`.
   *
   * @default false
   */
  multiSelectRoot: true;
  /**
   * Callback fired when child nodes are selected/unselected when `multiSelectRoot` is `true`.
   *
   * **Warning**: If you do not wish the parent `TreeView`'s `onNodeSelect()` to trigger, you must
   * call `event.stopPropagation()`.  If you do not, and the `TreeView` is not multi-selectable, its
   * callback must handle `nodeIds` of both `string` as `string[]`.
   *
   * @param {object} event The event source of the callback
   * @param {string[]} nodeIds of the selected nodes.
   * @default null
   */
  onNodeSelect?: (event: React.SyntheticEvent, nodeIds: string[]) => void;
}

export type TreeItemProps = SingleSelectTreeItemProps | MultiSelectTreeItemProps;

/**
 *
 * Demos:
 *
 * - [Tree View](https://material-ui.com/components/tree-view/)
 *
 * API:
 *
 * - [TreeItem API](https://material-ui.com/api/tree-item/)
 */
export default function TreeItem(props: TreeItemProps): JSX.Element;
