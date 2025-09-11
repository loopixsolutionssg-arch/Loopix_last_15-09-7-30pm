import * as React from "react";

const FALLBACK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
  <rect width='100%' height='100%' fill='%23f3f4f6' />
  <g transform='translate(0,0)'>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-family='Inter, Arial, sans-serif' font-size='24'>Image not available</text>
  </g>
</svg>
`)}
`;

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
  fallback?: string;
};

export default function SmartImage({ src, fallback, alt, ...rest }: SmartImageProps) {
  const [current, setCurrent] = React.useState<string | undefined>(src);
  React.useEffect(() => setCurrent(src), [src]);
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallback) setCurrent(fallback);
    else setCurrent(FALLBACK_SVG);
    if (rest.onError) rest.onError(e);
  };
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...rest}
      src={current}
      alt={alt}
      loading={rest.loading || "lazy"}
      decoding={(rest as any).decoding || "async"}
      onError={onError}
      crossOrigin="anonymous"
      style={{ display: "block", ...((rest as any).style || {}) }}
    />
  );
}
