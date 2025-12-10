import hi from "../../locales/hi.json";
export default function Head() {
  return <>
    <title>{hi.siteTitle}</title>
    <meta name="description" content={hi.metaDescription || ""} />
  </>;
}
