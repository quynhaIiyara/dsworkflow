import React from 'react';

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: 12,
  marginTop: 16,
};

const cellStyle: React.CSSProperties = {
  border: '1px solid #EEEEF2',
  borderRadius: 8,
  padding: 12,
  fontFamily: '"Inter", -apple-system, sans-serif',
  fontSize: 12,
  background: '#FFFFFF',
};

const nameStyle: React.CSSProperties = {
  fontWeight: 600,
  color: '#1A1A22',
};

const valueStyle: React.CSSProperties = {
  color: '#8A8A96',
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: 11,
};

// ── Colours ────────────────────────────────────────────────────────────────
type ColourGroup = Record<string, Record<string, string>>;

export function ColourSwatchGrid({ tokens }: { tokens: ColourGroup }) {
  const rows = Object.entries(tokens).flatMap(([group, values]) =>
    Object.entries(values).map(([shade, hex]) => ({ group, shade, hex })),
  );

  return (
    <div style={gridStyle}>
      {rows.map(({ group, shade, hex }) => (
        <div key={`${group}.${shade}`} style={cellStyle}>
          <div
            style={{
              height: 48,
              background: hex,
              borderRadius: 6,
              border: '1px solid #EEEEF2',
              marginBottom: 8,
            }}
          />
          <div style={nameStyle}>
            colors.{group}.{shade}
          </div>
          <div style={valueStyle}>{hex}</div>
        </div>
      ))}
    </div>
  );
}

// ── Spacing / Radii (numeric scale) ────────────────────────────────────────
export function ScaleSwatchGrid({
  tokens,
  namespace,
  render,
}: {
  tokens: Record<string, number>;
  namespace: string;
  render: (px: number) => React.ReactNode;
}) {
  return (
    <div style={gridStyle}>
      {Object.entries(tokens).map(([name, px]) => (
        <div key={name} style={cellStyle}>
          <div
            style={{
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
              background: '#F7F7FA',
              borderRadius: 6,
            }}
          >
            {render(px)}
          </div>
          <div style={nameStyle}>
            {namespace}.{name}
          </div>
          <div style={valueStyle}>{px}px</div>
        </div>
      ))}
    </div>
  );
}

// ── Typography (font-size table) ───────────────────────────────────────────
export function TypeScaleTable({ tokens }: { tokens: Record<string, number> }) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: 16,
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '8px 12px', color: '#8A8A96', fontSize: 11 }}>
            NAME
          </th>
          <th style={{ textAlign: 'left', padding: '8px 12px', color: '#8A8A96', fontSize: 11 }}>
            SIZE
          </th>
          <th style={{ textAlign: 'left', padding: '8px 12px', color: '#8A8A96', fontSize: 11 }}>
            SAMPLE
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, px]) => (
          <tr key={name} style={{ borderTop: '1px solid #EEEEF2' }}>
            <td style={{ padding: '12px', fontFamily: '"JetBrains Mono", monospace', fontSize: 12 }}>
              typography.size.{name}
            </td>
            <td style={{ padding: '12px', color: '#8A8A96', fontFamily: '"JetBrains Mono", monospace', fontSize: 12 }}>
              {px}px
            </td>
            <td style={{ padding: '12px', color: '#1A1A22', fontSize: px }}>The quick brown fox</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
