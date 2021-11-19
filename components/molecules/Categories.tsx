import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { CategoryData } from '../../types/data-types';
import { getCategories } from '../../services/contentManagement';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category: CategoryData, index: number) => (
        <Link key={index} href={`/category/${category.slug}`} passHref>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } pb-3 mb-3`}
          >
            # {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
