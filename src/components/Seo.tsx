import { Helmet } from 'react-helmet-async';
import { URL } from "../data/data";
import { SEOProps } from "../types/types";

const Seo: React.FC<SEOProps> = ({
  metaDescription,
  title,
  image: metaImage,
  theme,
}) => {
  // const image = metaImage && metaImage.src ? `${metaImage.src}` : null;
  return (
<Helmet>
      <html data-theme={theme} data-react-helmet="true" />
      <title>{title}</title>
      <meta name="title" content={title} data-react-helmet="true" />
      <meta
        name="description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta
        property="og:image"
        content={metaImage.src}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta property="og:url" content={URL} data-react-helmet="true" />
    </Helmet>
  );
};

export default Seo;
