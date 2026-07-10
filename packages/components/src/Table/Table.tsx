import React, { createContext, forwardRef, useContext, type ReactNode } from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { styles, cellStyles, textStyles } from './Table.styles';

export type TableVariant = 'default' | 'striped';
export type TableSize = 'sm' | 'md' | 'lg';
export type TableCellAlign = 'left' | 'center' | 'right';

type TableContextValue = {
  size: TableSize;
};

const TableContext = createContext<TableContextValue>({ size: 'md' });

type CellContextValue = {
  isHeader: boolean;
  align: TableCellAlign;
};

const CellContext = createContext<CellContextValue>({ isHeader: false, align: 'left' });

export type TableProps = ViewProps & {
  variant?: TableVariant;
  size?: TableSize;
  children: ReactNode;
};

export type TableHeaderProps = ViewProps & {
  children: ReactNode;
};

export type TableRowProps = ViewProps & {
  children: ReactNode;
  /** Internal — set by `Table` when `variant='striped'`. Do not pass directly. */
  _striped?: boolean;
};

export type TableCellProps = {
  children: ReactNode;
  align?: TableCellAlign;
  /** Relative width vs. sibling cells. Defaults to 1. */
  flex?: number;
};

const TableRoot = forwardRef<View, TableProps>(function Table(
  { variant = 'default', size = 'md', children, style, ...rest },
  ref,
) {
  let bodyRowIndex = 0;
  const processed = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (child.type === TableRow) {
      const striped = variant === 'striped' && bodyRowIndex % 2 === 1;
      bodyRowIndex += 1;
      return React.cloneElement(child as React.ReactElement<TableRowProps>, { _striped: striped });
    }
    return child;
  });

  return (
    <TableContext.Provider value={{ size }}>
      <View
        ref={ref}
        accessibilityRole="none"
        style={[styles.container, style]}
        {...rest}
      >
        {processed}
      </View>
    </TableContext.Provider>
  );
});
TableRoot.displayName = 'Table';

export const TableHeader = forwardRef<View, TableHeaderProps>(function TableHeader(
  { children, style, ...rest },
  ref,
) {
  return (
    <View ref={ref} accessibilityRole="none" style={[styles.header, style]} {...rest}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <CellContext.Provider
            value={{
              isHeader: true,
              align: (child.props as TableCellProps).align ?? 'left',
            }}
          >
            {child}
          </CellContext.Provider>
        );
      })}
    </View>
  );
});
TableHeader.displayName = 'Table.Header';

export const TableRow = forwardRef<View, TableRowProps>(function TableRow(
  { children, style, _striped = false, ...rest },
  ref,
) {
  return (
    <View
      ref={ref}
      accessibilityRole="none"
      style={[styles.row, _striped && styles.rowStriped, style]}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <CellContext.Provider
            value={{
              isHeader: false,
              align: (child.props as TableCellProps).align ?? 'left',
            }}
          >
            {child}
          </CellContext.Provider>
        );
      })}
    </View>
  );
});
TableRow.displayName = 'Table.Row';

export const TableCell = forwardRef<View, TableCellProps>(function TableCell(
  { children, align = 'left', flex = 1 },
  ref,
) {
  const { size } = useContext(TableContext);
  const { isHeader } = useContext(CellContext);

  return (
    <View
      ref={ref}
      style={[cellStyles.base, cellStyles[`size_${size}`], cellStyles[`align_${align}`], { flex }]}
    >
      {typeof children === 'string' || typeof children === 'number' ? (
        <Text
          style={[
            isHeader ? textStyles.header : textStyles.body,
            textStyles[`size_${size}`],
            textStyles[`align_${align}`],
          ]}
        >
          {isHeader ? String(children).toUpperCase() : children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
});
TableCell.displayName = 'Table.Cell';

type TableComponent = typeof TableRoot & {
  Header: typeof TableHeader;
  Row: typeof TableRow;
  Cell: typeof TableCell;
};

export const Table = TableRoot as TableComponent;
Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
