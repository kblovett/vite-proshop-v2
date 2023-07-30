import React from 'react';

import { useGetProductsQuery } from '../slices';
import { Product } from '../components';

import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  return isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h3>{error?.data?.message || error.error}</h3>
  ) : (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products?.map((product) => (
          <Col key={product?._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export { HomeScreen };
