import { ColumnDefinition } from '../../types';

interface FieldSelectorProps {
  label: string;
  value: string;
  columns: ColumnDefinition[];
  numericOnly?: boolean;
  onChange: (value: string) => void;
}

const formatColumnLabel = (column: ColumnDefinition) => {
  const parts = [column.name, column.type];
  if (column.unit) parts.push(column.unit);
  if (column.remark) parts.push(column.remark);
  return parts.join(' · ');
};

export const FieldSelector = ({ label, value, columns, numericOnly, onChange }: FieldSelectorProps) => {
  const options = numericOnly ? columns.filter((column) => column.type === 'Number') : columns;
  return (
    <label className="field-control">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">请选择字段</option>
        {options.map((column) => (
          <option key={column.name} value={column.name}>
            {formatColumnLabel(column)}
          </option>
        ))}
      </select>
    </label>
  );
};
