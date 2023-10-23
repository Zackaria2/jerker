import { Helmet } from 'react-helmet-async';

import ProductsView  from 'src/sections/properties/view/user-view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Properties | Minimal UI </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
