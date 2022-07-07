import Button from './button';
import SectionHeader from './SectionHeader';

const Categories = () => {
  return (
    <div>
      <SectionHeader title='Shop by Category' />

      <Button href='/shop' primary>
        View All Categories
      </Button>
    </div>
  );
};

export default Categories;
