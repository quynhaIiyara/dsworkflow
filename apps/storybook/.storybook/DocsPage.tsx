import React from 'react';
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
  useOf,
} from '@storybook/blocks';

const pillBase: React.CSSProperties = {
  display: 'inline-block',
  padding: '2px 10px',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 0.2,
  marginLeft: 8,
  verticalAlign: 'middle',
  border: '1px solid transparent',
};

const statusColour: Record<string, { bg: string; fg: string; bd: string }> = {
  ready: { bg: '#E5F7EE', fg: '#1E7C4A', bd: '#B8E5C9' },
  beta: { bg: '#FCF1DC', fg: '#8A6100', bd: '#E8CE94' },
  deprecated: { bg: '#FCE9E8', fg: '#A32020', bd: '#F0BCB9' },
  draft: { bg: '#EEEEF2', fg: '#8A8A96', bd: '#DDDDE4' },
};

function StatusBadges() {
  // Resolve the current meta so we can read its parameters.
  const of = useOf('meta', ['meta']);
  const params = (of as any)?.preparedMeta?.parameters as
    | { status?: string; since?: string }
    | undefined;

  const status = params?.status;
  const since = params?.since;

  if (!status && !since) return null;

  return (
    <div style={{ marginTop: -12, marginBottom: 16 }}>
      {status ? (
        <span
          style={{
            ...pillBase,
            marginLeft: 0,
            marginRight: 8,
            background: (statusColour[status] ?? statusColour.draft).bg,
            color: (statusColour[status] ?? statusColour.draft).fg,
            borderColor: (statusColour[status] ?? statusColour.draft).bd,
          }}
        >
          {status}
        </span>
      ) : null}
      {since ? (
        <span
          style={{
            ...pillBase,
            marginLeft: 0,
            background: '#F7F7FA',
            color: '#8A8A96',
            borderColor: '#EEEEF2',
          }}
        >
          since {since}
        </span>
      ) : null}
    </div>
  );
}

export function CustomDocsPage() {
  return (
    <>
      <Title />
      <StatusBadges />
      <Description />
      <Primary />
      <Controls />
      <Stories />
    </>
  );
}
