import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/Slug.module.css";
import moment from "moment";
// import { Inter } from '@next/font/google'

const graphcms = new GraphQLClient(
  " https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clchrscoy1lfq01t648bganra/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

// const inter = Inter({ subsets: ['latin'] })

export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
      <img
        className={styles.cover}
        src={post.coverPhoto.url}
        alt={post.title}
      />
      <div className={styles.title}>
        <div className={styles.authdetails}>
          <img src={post.author.avatar.url} alt={post.author.name} />
          <div className={styles.authtext}>
            <h6>By {post.author.name} </h6>
            <h6 className={styles.date}>
              {moment(post.datePublished).format("MMMM d, YYYY")}
            </h6>
          </div>
        </div>

        {/* <div className={inter.className} > */}
          <h2 className="m-4, text-center">{post.title}</h2>
        {/* </div> */}
      </div>

      <div className="m-4, text-center">
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
    </main>
  );
}