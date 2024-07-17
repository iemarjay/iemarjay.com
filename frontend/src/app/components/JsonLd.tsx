// components/JsonLd.tsx
import Script from 'next/script'

interface JsonLdProps {
  data: object
}

const JsonLd = ({ data }: JsonLdProps) => (
  <Script
    id="json-ld"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    strategy="beforeInteractive"
  />
)

export default JsonLd
