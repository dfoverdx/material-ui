import * as React from 'react';

/**
 * @typedef TreeContextNodeRange
 * @property {string} start
 * @property {string} end
 * @property {string} current
 *
 * @typedef TreeContextNode
 * @property {string} id
 * @property {number} index
 * @property {string?} parentId
 * @property {boolean} expandable
 * @property {string} idAttribute
 * @property {boolean} disabled
 *
 * @typedef TreePreviewContextType
 * @property {{
 *  defaultCollapseIcon: React.ReactNode;
 *  defaultExpandIcon: React.ReactNode;
 *  defaultParentIcon: React.ReactNode;
 *  defaultEndIcon: React.ReactNode;
 * }} icons
 * @property {(event: React.SyntheticEvent, id: string) => void} focus
 * @property {(event: React.SyntheticEvent, value?: boolean | null) => void} toggleExpansion
 * @property {(id: string) => boolean} isExpanded
 * @property {(id: string) => boolean} isExpandable
 * @property {(id: string) => boolean} isFocused
 * @property {(id: string) => boolean} isSelected
 * @property {(id: string) => boolean} isDisabled
 * @property {(event: React.SyntheticEvent, id: string, multiple?: boolean) => boolean} selectNode
 * @property {(event: React.SyntheticEvent, nodes: TreeContextNodeRange, stacked?: boolean) => void} selectRange
 * @property {boolean} multiSelect
 * @property {boolean} disabledItemsFocusable
 * @property {(id: string, firstChar: string) => void} mapFirstChar
 * @property {(id: string) => void} unMapFirstChar
 * @property {(node: TreeContextNode) => void} registerNode
 * @property {(id: string) => void} unregisterNode
 * @property {string?} treeId
 */
/**
 * @ignore - internal component.
 * @type {React.Context<TreePreviewContextType>}
 */
const TreeViewContext = React.createContext({});

if (process.env.NODE_ENV !== 'production') {
  TreeViewContext.displayName = 'TreeViewContext';
}

export default TreeViewContext;
