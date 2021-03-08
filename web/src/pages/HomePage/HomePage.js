import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
import appSettings from '../../../../appsettings.json'

const HomePage = () => {
  console.log(appSettings)

  return (
    <BlogLayout>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
