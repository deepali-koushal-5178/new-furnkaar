import en from "../../locales/en.json";
export default function Head() {
  return <>
    <title>{en.siteTitle}</title>
    <meta name="description" content={en.metaDescription || ""} />
  </>;
}
