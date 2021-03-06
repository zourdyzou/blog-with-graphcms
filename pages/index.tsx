import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import { Layout } from '../components/templates/Layout';
import { PostCard } from '../components/organisms/PostCard';
import { PostWidget } from '../components/molecules/PostWidget';
import { Categories } from '../components/molecules/Categories';

import { getPosts } from '../services/contentManagement';
import { PostsData } from '../types/data-types';

interface Props {
  posts: Array<PostsData>;
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post, index) => {
            return <PostCard key={index} post={post.node} />;
          })}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
};

export default Home;
