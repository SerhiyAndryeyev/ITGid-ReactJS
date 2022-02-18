import { useParams } from 'react-router-dom';

function CategoryDescription() {
  let { categoryName } = useParams();
  return (
    <>
      <a href="/cat">Назад</a>
      <h1>Category: {categoryName}</h1>
    </>
  );
}

export default CategoryDescription;