import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return <div>Category: {category}</div>;
};

export default Category;
