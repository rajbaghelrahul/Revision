import { useRouter } from 'next/router'
import React from 'react'

function Post() {
    const router = useRouter();
    const { sno } = router.query;
  return (
    <div>Post: {sno}</div>
  )
}
export default Post;
// it is shows in default 404 if url is wrong but now by using it it shows url.
// and also make automaticaly path like localhost:3000/how-to-blogpost/how